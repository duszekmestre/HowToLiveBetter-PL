---
name: life-decision-guide
description: Odpowiadaj na konkretne życiowe dylematy, korzystając z treści 《高性价比人生指南》 (github.com/eternity4719/HowToLiveBetter): czy coś robić, czy warto, co wybrać, co zrobić najpierw w nagłej sytuacji, jakie świadczenie można otrzymać i czy coś jest zgodne z prawem. Najpierw znajdź odpowiednie wpisy, a potem uporządkuj je według kosztu (pieniądze/czas/wytrwałość), skali korzyści i poziomu dowodów A/B/C. Przy każdym wpisie podaj sekcję i numer wpisu. Słowa wyzwalające: czy warto, czy powinienem, czy robić, jak wybrać, pomóż mi zdecydować, czy to jest nielegalne, jakie świadczenia mogę dostać, co zrobić najpierw, opłacalność.
---

# Decyzje życiowe: najpierw sprawdź 《高性价比人生指南》

## Do czego służy ten skill

Gdy ktoś pyta, co zrobić w konkretnej sprawie życiowej, najpierw wyszukaj odpowiednie wpisy w 《高性价比人生指南》, a następnie uporządkuj odpowiedź zgodnie z metodą rozliczania kosztów i korzyści stosowaną w książce.

**Jeśli nie znajdziesz odpowiedniego wpisu, nie odpowiadaj w jego imieniu.** Każdą liczbę, każdy przepis i każdy wniosek w odpowiedzi trzeba móc powiązać z konkretnym wpisem w książce. Jeśli nie da się tego zrobić, powiedz wprost, że książka o tym nie pisze. Możesz podać zdroworozsądkową ocenę, ale zaznacz, że nie pochodzi ona z książki. Nie uzupełniaj z pamięci liczb, DOI ani numerów artykułów przepisów.

Książka rozlicza cztery rodzaje korzyści: długość życia, czas i energię, pieniądze oraz wolność osobistą. **Każdy rodzaj rozliczaj osobno, nie przeliczaj jednego na drugi** — „spadek śmiertelności ogólnej o 12%” i „oszczędność 500 juanów rocznie” nie mają wspólnej miary.

## Krok 0: najpierw ustal, czy trzeba działać natychmiast

- **Nagły wypadek dzieje się teraz** (ktoś upadł i nie oddycha, silne krwawienie, pożar, tonięcie, porażenie prądem, zatrucie, objawy udaru lub zawału): najpierw powiedz, by zadzwonić pod 120 / 119, i wskaż pierwszą czynność na miejscu. Podstawa: sekcja 13. Nie zaczynaj od omawiania opłacalności.
- **Pojawiają się myśli samobójcze lub słowa „nie dam już rady żyć”**: najpierw podaj 全国心理援助热线 12356, a następnie odwołaj się do wpisów w sekcjach 1 i 29. Nie analizuj motywacji w tonie perswazyjnym i nie oceniaj jej.
- **Trwa postępowanie prawne** (wezwanie, zatrzymanie lub wniesienie oskarżenia): najpierw wskaż odpowiedni wpis w sekcji 8 i wyjaśnij, że książka podaje tylko ogólne wskazówki, a w konkretnej sprawie trzeba skontaktować się z prawnikiem.
- W pozostałych sytuacjach postępuj według kolejnych kroków.

## Krok 1: pobierz treść książki

**Lokalnie**: jeśli w bieżącym katalogu lub katalogu nadrzędnym znajdują się `README.md` i `book/01-不要早死.md`, użyj trybu lokalnego i odczytaj pliki bezpośrednio.

**Zdalnie**: jeśli ich nie ma, pobierz treść. Cała książka ma 1,3 MB, więc najwygodniej sklonować ją płytko. Potem wszystkie polecenia można wykonywać normalnie:

```bash
git clone --depth 1 https://github.com/eternity4719/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

Jeśli nie możesz użyć git, pobierz plik bezpośrednio (chińskie znaki w nazwie pliku można wpisać bez zmian):

```bash
curl -fsSL --compressed "https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/book/02-不要慢慢死.md"
```

Jeśli żadna z tych metod nie zadziała, oznacza to, że nie udało się pobrać treści. Powiedz to wprost i nie odtwarzaj zawartości książki z pamięci.

## Krok 2: znajdź odpowiednie sekcje

Najpierw wybierz od 1 do 3 sekcji. W głównym katalogu repozytorium przeczytaj tabelę „这本书想回答的问题” w `README.md`. Każdy wiersz opisuje pytanie omawiane w jednej sekcji i zawiera nazwę odpowiadającego jej pliku w `book/`. Zmiany liczby sekcji są odzwierciedlane w tej tabeli, więc nie utrzymuj osobnej listy.

Pliki sekcji znajdują się w `book/`. Ich nazwy zawierają numer i tytuł sekcji; pełną listę pokaże też `ls book/`.

Dłuższe teksty znajdują się w `docs/`: kwestie opłacalności małżeństwa, lista wyposażenia awaryjnego w domu, wymagane zezwolenia dla platform internetowych oraz to, czy należy zatrzymać się, gdy obcej osobie przydarzy się wypadek.

## Krok 3: wyszukaj wpisy

Największe pliki sekcji mają 110 KB, więc nie czytaj ich w całości. Wyszukuj słowa kluczowe. Jeśli masz narzędzia typu Grep / Read, użyj ich; jeśli masz tylko powłokę, użyj poleceń:

```bash
grep -rn '^### ' book/ | grep -E '关键词1|关键词2'        # 先看有哪些条目标题
grep -rn -B2 -A8 '关键词' book/08-别把自己搭进去.md        # 正文里搜，带上下文
sed -n '/^### 16\. /,/^### 17\. /p' book/08-别把自己搭进去.md  # 按条号抽一整条
```

**Przeczytaj każdy wyodrębniony wpis w całości**, szczególnie pole „备注” — zawiera informacje o tym, kogo dotyczy wpis, o sporach i wyjątkach. Czytając tylko tytuł, można pominąć ważne warunki.

Wpis ma następującą postać:

```markdown
### 5. 把家里的食盐换成低钠盐（钾盐）
<!-- 成本标签: 钱=少 时间=少 毅力=否 收益=中 口径=死亡率 -->
- 成本：每袋贵几元
- 说人话：……死亡的概率低约 12%……
- 收益：脑卒中降 14%，心血管事件降 13%，总死亡率降 12%
- 证据等级：A
- 来源：Neal B, et al. (2021). NEJM. https://doi.org/10.1056/NEJMoa2105675
- 备注：争议。肾功能不全、正在吃保钾利尿剂的人不要用。……
```

Komentarz HTML w tym wierszu zawiera etykiety kosztów odczytywane przez maszynę: pieniądze 0/少/多, czas 少/中/多, wytrwałość 否/些/是, korzyść 大/中/小, miara 死亡率/金钱/时间/自由. W nielicznych wpisach na końcu znajduje się też `人群=` (怀孕, 婴幼儿, 孩子, 老人, 35岁, 60岁, 女性; przecinek oznacza „lub”, a plus — „i”). Oznacza to, że wpis dotyczy tylko tych grup. Jeśli użytkownik wyraźnie do nich nie należy, możesz pominąć tę rekomendację.

## Krok 4: uporządkuj odpowiedź

Sortuj według algorytmu z książki, a nie według własnego wyczucia:

1. Algorytm wyznaczania poziomów znajduje się w głównym katalogu repozytorium, w `index.html`. Nie polegaj na pamięci — wyodrębnij na miejscu te dwie linie i oblicz wynik zgodnie z nimi:

   ```bash
   grep -n 'COST_W = \|e\.ratio = ' index.html
   ```

   Pierwsza linia podaje wagi poszczególnych poziomów trzech rodzajów kosztów. Wynik kosztów to suma pieniędzy, czasu i wytrwałości. Druga linia określa, jak połączyć poziom korzyści z wynikiem kosztów, aby przypisać kategorię „极高 / 高 / 一般”.
2. Jeśli pobrałeś treść tylko poleceniem curl i nie masz `index.html`, nie przypisuj kategorii opłacalności. Zamiast tego podaj użytkownikowi poziom korzyści oraz trzy etykiety kosztów dokładnie tak, jak zapisano je w książce, aby mógł sam je ocenić.
3. Najpierw sortuj według opłacalności. Przy tej samej kategorii kolejno według poziomu dowodów A > B > C, a następnie według tego, jak dobrze wpis pasuje do sytuacji użytkownika.
4. **Nie sortuj wpisów o różnych miarach razem**. Oddziel korzyści w postaci pieniędzy od korzyści w postaci długości życia i uporządkuj każdą grupę osobno.
5. „一般” nie znaczy, że czegoś nie warto robić. Oznacza tylko, że użytkownik musi sam ocenić ponoszony koszt. Opłacalność jest oceną autora i według standardów książki ma poziom C; to odrębne od poziomu dowodów.

## Krok 5: jak przygotować odpowiedź

Po uporządkowaniu wpisów napisz odpowiedź według tego schematu:

1. **Wniosek w jednym zdaniu**: czy warto to robić, czy należy to zrobić i od czego zacząć.
2. **Co zrobić najpierw** (od 3 do 7 punktów, w powyższej kolejności). Każdy punkt zajmuje od jednego do trzech wierszy: działanie (zacznij od czasownika), ponoszony koszt, uzyskiwana korzyść, poziom dowodów oraz źródło w formacie „sekcja 8, wpis 17（借条和担保）”. Wyrażenie w nawiasie pochodzi z tytułu wpisu, żeby użytkownik mógł go łatwo znaleźć.
3. **Czego nie robić / co nie jest potrzebne**: wymień osobno rzeczy, których książka wyraźnie nie uznaje za warte zachodu lub dla których podaje dowody przeciwne.
4. **Czego książka nie omawia**: powiedz to wprost i nie przedstawiaj zdroworozsądkowych założeń jako treści książki.
5. W razie potrzeby dodaj punkt kontrolny: kiedy ponownie ocenić sytuację albo jaki sygnał powinien skłonić do zmiany decyzji.

Podczas pisania przestrzegaj tych zasad:

- **Wyraźnie wskaż, kogo dotyczy korzyść**. Książka dzieli beneficjentów na cztery grupy, od największej do najmniejszej szansy na to, że korzyść wróci do ciebie: ① ty; ② małżonek i najbliższa rodzina; ③ przyjaciele, współpracownicy i dalsi krewni; ④ obcy ludzie. Jeśli mowa o grupie ④ (ratowanie obcej osoby, poręczanie za kogoś, przelewanie pieniędzy w czyimś imieniu), opisz zarówno korzyści, jak i ryzyko: oskarżenie o coś, wciągnięcie w sprawę lub odwet. Nie przedstawiaj wyłącznie korzyści ani nie twierdź, że zawsze należy odmówić pomocy.
- **W sprawach, w których „prawo jest po twojej stronie”, opisz również koszty postępowania**. Podanie samego wyniku bez kosztów postępowania oznacza traktowanie szansy wygranej jako korzyści. Wyjaśnij, czy trzeba wnieść sprawę do sądu, ile to może potrwać (co najmniej 6 miesięcy w zwykłym postępowaniu pierwszej instancji, z możliwością przedłużenia; 3 miesiące w postępowaniu uproszczonym) oraz kto pokrywa honorarium prawnika (honorarium nie jest kosztem sądowym, a zasada obciążenia kosztami strony przegrywającej go nie obejmuje).
- **Przepisuj liczby z wpisu bez zmian**. Jeśli wpis podaje przedział ufności, grupę osób lub rok, zachowaj te informacje. Przy wartościach takich jak HR, RR i OR od razu dodaj objaśnienie, np. „mniej o około 28%”, ale nie usuwaj wartości pierwotnej. Nie dodawaj liczb, objawów ani objaśnień mechanizmu, których nie ma we wpisie.
- **Pisz prostym językiem**: tak, aby dorosła osoba bez specjalistycznego wykształcenia mogła zrozumieć tekst za pierwszym razem. Terminy specjalistyczne objaśnij od razu zwykłymi słowami. Przepisy przełóż na praktyczne skutki: „co może cię spotkać i co zrobić”. Pole „来源” przepisz bez zmian, aby można było zweryfikować źródła.
- **Zachowaj powściągliwy ton**. Nie pouczaj i nie używaj wykrzykników. Używaj chińskiego uproszczonego. Użytkownik sam decyduje, czy zastosuje się do zaleceń; nie nalegaj.
- **Przepisy i zasady mogą się zmieniać**: kwoty, terminy i wykazy w sekcjach 7, 19, 21, 24, 31 i 32 mogą być nieaktualne. Jeśli treść podaje datę obowiązywania, uwzględnij ją w odpowiedzi i przypomnij, by użytkownik sprawdził informacje w oficjalnym źródle.
- Jeśli przy wpisie widnieje „争议”, wspomnij również o dowodach przeciwnych. Wpisu oznaczonego „TODO 待核实” nie przedstawiaj jako ustalonego wniosku.
- Nie cytuj wtórnych omówień z Zhihu, kont publicznych WeChat, Sohu ani podobnych serwisów. Korzystaj wyłącznie z linków w polu „来源” danego wpisu.

## Granice

Książka podaje ogólne wskazówki i nie zastępuje lekarza, prawnika ani księgowego. Przy konkretnym stanie zdrowia, sprawie sądowej lub rozliczeniu podatkowym wskaż kierunek i właściwego specjalistę na podstawie wpisu w książce, ale nie rozstrzygaj sprawy za tę osobę. Nie udzielaj indywidualnych porad inwestycyjnych.

Poglądy w książce należą do autora, podobnie jak przypisane kategorie opłacalności. Jeśli użytkownik nie zgadza się z jakimś wpisem, wystarczy przedstawić podstawę podaną w książce — nie wdawaj się w spór.
