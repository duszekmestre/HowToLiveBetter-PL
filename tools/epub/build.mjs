// 把 README + book/*.md + docs/*.md 打成一本 EPUB 3。
// 用法：node tools/epub/build.mjs [输出路径]   默认输出 dist/HowToLiveBetter.epub
// 只依赖 marked；zip 用 tools/lib/zip.mjs 自己打（EPUB 要求 mimetype 第一个且不压缩，通用 zip 库不一定保证）。
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, posix } from 'node:path';
import { zip } from '../lib/zip.mjs';
import { Marked, Tokenizer } from 'marked';
import { splitLongItems } from '../lib/split-items.mjs';
import { ROOT, REPO, SITE, TITLE, read, readBook, gitCommit, buildStamp, stripBackLink } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? 'dist/HowToLiveBetter.epub');
const RELEASE = `${REPO}/releases/download/epub-latest/HowToLiveBetter.epub`;
const BOOK_ID = 'urn:uuid:5c0c1c0e-6a5c-4d2b-9b1e-7d1f0a4e8c31';
const NOW = new Date();
const COMMIT = gitCommit();

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = html => html.replace(/<[^>]+>/g, '');

// ---------- 从 README 取内容与文件清单 ----------
const book = readBook();
const { description, bookFiles, docFiles } = book;
const frontMd = book.frontMd.replace(/^## 这本书想回答的问题/m, '## Pytania, na które odpowiada poradnik');
const contentsMd = book.contentsMd.replace(/^## 目录/, '# Opis sekcji');

// ---------- 页面清单 ----------
// 每页：xhtml 文件名、来源 md 的仓库路径（用来解析相对链接）、md 正文
const pages = [
  { file: 'front.xhtml', src: 'README.md', title: 'Wstęp', md: `# ${TITLE}\n\n${description}\n\n${frontMd}` },
  { file: 'contents.xhtml', src: 'README.md', title: 'Opis sekcji', md: contentsMd },
  ...bookFiles.map((src, i) => ({ file: `ch${String(i + 1).padStart(2, '0')}.xhtml`, src, md: splitLongItems(stripBackLink(read(src))) })),
  ...docFiles.map((src, i) => ({ file: `doc${i + 1}.xhtml`, src, md: splitLongItems(stripBackLink(read(src))) })),
  { file: 'about.xhtml', src: 'README.md', title: 'Informacje o wydaniu', md: aboutMd() },
];
const pageByPath = new Map(pages.map(p => [p.src, p.file]));
pageByPath.set('README.md', 'front.xhtml');

function aboutMd() {
  const commitLine = COMMIT ? `- Wersja źródłowa: [${COMMIT.slice(0, 7)}](${REPO}/commit/${COMMIT})` : '';
  return `# Informacje o wydaniu

Ten e-book jest automatycznie generowany z plików Markdown w repozytorium i odświeżany po każdej zmianie treści. Wersja w tym pliku:

- Wygenerowano: ${buildStamp()} (czas pekiński)
${commitLine}
- Pobierz najnowszą wersję: ${RELEASE}
- Wyszukiwarka online (według słów kluczowych, sekcji, poziomu dowodów i kosztów): ${SITE}
- Repozytorium, uwagi i dokumentacja źródeł: ${REPO}

Odnośniki do innych plików w repozytorium prowadzą do odpowiednich miejsc w książce. Odnośniki do plików, których tu nie ma, takich jak dokumentacja źródeł i licencja, prowadzą do GitHuba.

Tekst jest udostępniony na licencji CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Można go kopiować, przerabiać i wykorzystywać komercyjnie. Należy podać źródło jako „高性价比人生指南 — Przewodnik po życiu o wysokiej opłacalności” i dodać link do repozytorium. Zmiany trzeba oznaczyć.`;
}

// ---------- Markdown → XHTML ----------
let current = null; // 正在转换的页
let headingSeq = 0;
const marked = new Marked({ gfm: true });
marked.use({
  // GFM 的裸网址自动链接只在空白处断开，「www.12333.gov.cn网页、手机12333客户端」这种
  // 中文紧贴网址的写法会把后面整串中文都吞进链接，epubcheck 判为非法 URL（RSC-020）。
  // 裸网址里本来就不该有非 ASCII 字符，遇到就截在那里，截下的前半段照常按默认规则建链接。
  tokenizer: {
    url(src) {
      const tok = Tokenizer.prototype.url.call(this, src);
      if (!tok || /^[\x21-\x7e]*$/.test(tok.raw)) return tok;
      return Tokenizer.prototype.url.call(this, tok.raw.match(/^[\x21-\x7e]*/)[0]);
    },
  },
  renderer: {
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens);
      const id = `h${++headingSeq}`;
      current.headings.push({ id, depth, text: plain(html) });
      return `<h${depth} id="${id}">${html}</h${depth}>\n`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const t = title ? ` title="${esc(title)}"` : '';
      return `<a href="${esc(rewriteHref(href))}"${t}>${text}</a>`;
    },
    image: () => '',
    html: () => '',
  },
});

function rewriteHref(href) {
  if (/^(https?:|mailto:|#)/.test(href)) return href;
  const [pathPart, hash] = href.split('#');
  const target = posix.normalize(posix.join(posix.dirname(current.src), pathPart));
  const page = pageByPath.get(target);
  if (page) return hash ? `${page}#${hash}` : page;
  const kind = target.endsWith('/') ? 'tree' : 'blob';
  return `${REPO}/${kind}/main/${target}`;
}

function toXhtml(body) {
  return body
    .replace(/<(br|hr)>/g, '<$1/>')
    .replace(/<(img|input)\b([^>]*?)\s*\/?>/g, '<$1$2/>')
    .replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;');
}

function wrap(title, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="pl" lang="pl">
<head>
<meta charset="utf-8"/>
<title>${esc(title)}</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
${body}</body>
</html>
`;
}

for (const p of pages) {
  current = p;
  p.headings = [];
  const body = toXhtml(marked.parse(p.md));
  p.title ??= p.headings[0]?.text ?? p.file;
  p.xhtml = wrap(p.title, `<section epub:type="chapter">\n${body}</section>\n`);
}

// ---------- 导航 ----------
const navItems = pages.map(p => {
  const [first, ...rest] = p.headings;
  const top = first?.depth === 1 ? { href: `${p.file}#${first.id}`, text: p.title } : { href: p.file, text: p.title };
  const subs = (first?.depth === 1 ? rest : p.headings).filter(h => h.depth <= 3).map(h => ({ href: `${p.file}#${h.id}`, text: h.text }));
  return { ...top, subs };
});

const navXhtml = wrap('Spis treści', `<nav epub:type="toc" id="toc">
<h1>Spis treści</h1>
<ol>
${navItems.map(n => `<li><a href="${n.href}">${n.text}</a>${n.subs.length ? `\n<ol>\n${n.subs.map(s => `<li><a href="${s.href}">${s.text}</a></li>`).join('\n')}\n</ol>\n` : ''}</li>`).join('\n')}
</ol>
</nav>
<nav epub:type="landmarks" hidden="hidden">
<ol>
<li><a epub:type="cover" href="cover.xhtml">Okładka</a></li>
<li><a epub:type="bodymatter" href="${pages[2].file}">Treść</a></li>
</ol>
</nav>
`);

let play = 0;
const navPoint = n => `<navPoint id="np${++play}" playOrder="${play}"><navLabel><text>${n.text}</text></navLabel><content src="${n.href}"/>${n.subs?.map(navPoint).join('') ?? ''}</navPoint>`;
const ncx = `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1" xml:lang="pl">
<head>
<meta name="dtb:uid" content="${BOOK_ID}"/>
<meta name="dtb:depth" content="2"/>
<meta name="dtb:totalPageCount" content="0"/>
<meta name="dtb:maxPageNumber" content="0"/>
</head>
<docTitle><text>${TITLE}</text></docTitle>
<navMap>
${navItems.map(navPoint).join('\n')}
</navMap>
</ncx>
`;

// ---------- 封面、OPF、容器 ----------
const coverXhtml = wrap(TITLE, `<div class="cover"><img src="cover.png" alt="${esc(TITLE)}"/></div>\n`);
const modified = NOW.toISOString().replace(/\.\d{3}Z$/, 'Z');
const manifestPages = pages.map(p => `<item id="${p.file.replace('.xhtml', '')}" href="${p.file}" media-type="application/xhtml+xml"/>`);
const opf = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="pub-id" xml:lang="pl">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="pub-id">${BOOK_ID}</dc:identifier>
<dc:title>${TITLE}</dc:title>
<dc:language>pl</dc:language>
<dc:creator>eternity4719</dc:creator>
<dc:description>${esc(description)}</dc:description>
<dc:source>${REPO}</dc:source>
<dc:rights>CC BY 4.0（https://creativecommons.org/licenses/by/4.0/）</dc:rights>
<dc:date>${NOW.toISOString().slice(0, 10)}</dc:date>
<meta property="dcterms:modified">${modified}</meta>
<meta name="cover" content="cover-img"/>
</metadata>
<manifest>
<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
<item id="css" href="style.css" media-type="text/css"/>
<item id="cover-img" href="cover.png" media-type="image/png" properties="cover-image"/>
<item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/>
${manifestPages.join('\n')}
</manifest>
<spine toc="ncx">
<itemref idref="cover"/>
${pages.map(p => `<itemref idref="${p.file.replace('.xhtml', '')}"/>`).join('\n')}
</spine>
</package>
`;
const container = `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
<rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>
`;

// ---------- 打 zip ----------
const entries = [
  { name: 'mimetype', data: Buffer.from('application/epub+zip'), store: true },
  { name: 'META-INF/container.xml', data: Buffer.from(container) },
  { name: 'OEBPS/content.opf', data: Buffer.from(opf) },
  { name: 'OEBPS/nav.xhtml', data: Buffer.from(navXhtml) },
  { name: 'OEBPS/toc.ncx', data: Buffer.from(ncx) },
  { name: 'OEBPS/style.css', data: readFileSync(resolve(ROOT, 'tools/epub/style.css')) },
  { name: 'OEBPS/cover.png', data: readFileSync(resolve(ROOT, 'og.png')) },
  { name: 'OEBPS/cover.xhtml', data: Buffer.from(coverXhtml) },
  ...pages.map(p => ({ name: `OEBPS/${p.file}`, data: Buffer.from(p.xhtml) })),
];
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, zip(entries, NOW));
const entryCount = pages.filter(p => p.file.startsWith('ch')).reduce((n, p) => n + p.headings.filter(h => h.depth === 3).length, 0);
console.log(`已生成 ${OUT}：${bookFiles.length} 节 ${entryCount} 条，附录 ${docFiles.length} 篇，${(entries.reduce((n, e) => n + e.data.length, 0) / 1024 | 0)} KB 未压缩`);
