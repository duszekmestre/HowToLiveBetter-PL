# Skill decyzji życiowych (life-decision-guide)

Pozwala asystentowi AI odpowiadać na konkretne pytania na podstawie książki 《高性价比人生指南》 („Przewodnik po życiu o wysokim stosunku zysku do kosztów”): czy warto to robić, czy się opłaca, jak wybrać, co zrobić najpierw, gdy coś się stanie, jakie pieniądze można odebrać, czy takie postępowanie łamie prawo.

Robi tylko jedno: **najpierw wyszukuje w treści książki odpowiednie wpisy, a potem odpowiada, porządkując je według rachunku zysków i kosztów przyjętego w książce**; przy każdym wpisie podaje, z której sekcji (节) i którego punktu (条) pochodzi. Jeśli niczego nie znajdzie, mówi, że nie znalazł, i nie podaje liczb z pamięci.

Wszystkie reguły są w pliku [SKILL.md](SKILL.md); oba narzędzia korzystają z tego samego pliku, nie utrzymujemy dwóch kopii.

## Instalacja w Claude Code

Jeśli otworzysz Claude Code w tym repozytorium, nie musisz nic instalować — `.claude/skills/life-decision-guide/` już wskazuje na te reguły.

Aby skill działał w dowolnym katalogu, skopiuj go do osobistego katalogu skilli:

```bash
mkdir -p ~/.claude/skills/life-decision-guide && curl -fsSL -o ~/.claude/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Potem wystarczy zapytać wprost, np. „每天通勤两小时值不值” (czy opłaca się dojeżdżać codziennie dwie godziny) albo „朋友让我替他担保，签不签” (znajomy prosi, żebym za niego poręczył — podpisać czy nie), a skill się uruchomi. Można też powiedzieć wprost: „用 life-decision-guide 回答” (odpowiedz, używając life-decision-guide).

## Instalacja w Codex

Jeśli otworzysz Codex w tym repozytorium, nie musisz nic instalować — plik `AGENTS.md` w katalogu głównym już na niego wskazuje.

Aby skill działał w dowolnym katalogu, skopiuj go do osobistego katalogu skilli Codex, `~/.agents/skills`:

```bash
mkdir -p ~/.agents/skills/life-decision-guide && curl -fsSL -o ~/.agents/skills/life-decision-guide/SKILL.md "https://raw.githubusercontent.com/eternity4719/HowToLiveBetter/main/skills/life-decision-guide/SKILL.md"
```

Potem wystarczy zadać pytanie, a skill uruchomi się automatycznie na podstawie opisu; można go też wywołać jawnie poleceniem `$life-decision-guide`. Uwaga: to `$`, a nie `/` — w nowych wersjach Codex wpisanie `/life-decision-guide` kończy się błędem `Unrecognized command`. Jeśli skill się nie pojawia, uruchom Codex ponownie.

Starsze wersje Codex nie mają jeszcze skilli i działają tylko z własnymi promptami: umieść plik w `~/.codex/prompts/life-decision-guide.md` i wywołuj go przez `/life-decision-guide`. Codex ogłosił, że ten sposób zostanie wycofany ([openai/codex#10848](https://github.com/openai/codex/issues/10848)); nowe wersje powinny używać instalacji skilla opisanej powyżej.

## Skąd brana jest treść książki

Jeśli masz lokalnie to repozytorium, skill czyta lokalny katalog `book/`; jeśli nie, pobiera treść na bieżąco:

```bash
git clone --depth 1 https://github.com/eternity4719/HowToLiveBetter.git "${TMPDIR:-/tmp}/hltb"
```

Cała książka waży 1,3 MB, a płytki klon trwa kilka sekund. Gdy nie ma dostępu do sieci, skill uczciwie mówi, że nie może pobrać treści, i nie zastępuje jej niczym innym.

## Uwagi dla wprowadzających zmiany

W SKILL.md nie ma żadnych list ani wartości, które rozjeżdżałyby się z treścią książki: listę sekcji należy czytać z tabeli „这本书想回答的问题” (na jakie pytania odpowiada ta książka) w README, a algorytm przydzielania poziomu stosunku zysku do kosztów — z dwóch wierszy `COST_W` i `e.ratio` w `index.html`. Dlatego dodawanie lub usuwanie sekcji i zmiana reguł poziomów nie wymagają ruszania tego katalogu.
