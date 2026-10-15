# Jakie zezwolenia są potrzebne do prowadzenia platformy? Tabele porównawcze i schemat wyboru serwera

Ten materiał uzupełnia sekcję 26 README. Zawiera trzy tabele i krótkie objaśnienia miejsc, w których najłatwiej o pomyłkę. Opisy poszczególnych zagadnień i źródła znajdziesz w README. Sekcja 12 (zakładanie firmy i prowadzenie biznesu) opisuje, jak zarejestrować spółkę i rozliczać podatki. Sekcja 11 (programiści i specjaliści techniczni) omawia granice, których nie wolno przekraczać osobom zatrudnionym w branży IT.

## I. Najpierw ustal, jaką działalność prowadzisz

Jeden serwis może jednocześnie prowadzić kilka rodzajów działalności. W takim przypadku potrzebujesz zezwoleń dla każdego z nich. Nie wystarczy załatwić jednego.

| Co robisz | Kategoria działalności | Czego potrzeba | Główna podstawa |
|---|---|---|---|
| Serwis informacyjny bez opłat, osobisty blog lub strona firmowa | Niekomercyjne internetowe usługi informacyjne (非经营性互联网信息服务) | Rejestracja ICP (ICP 备案). To nie licencja, lecz zgłoszenie do organu nadzorczego przed uruchomieniem strony | Środki administrowania internetowymi usługami informacyjnymi (互联网信息服务管理办法), art. 4 |
| Płatne członkostwo, usługi dodatkowe lub treści dla użytkowników | Komercyjne internetowe usługi informacyjne (经营性互联网信息服务) | Licencja na świadczenie usług telekomunikacyjnych o wartości dodanej (增值电信业务经营许可) w zakresie usług informacyjnych. Jest potrzebna, gdy pobierasz opłaty od użytkowników | Jak wyżej, art. 3, 4 i 7 |
| Sprzedaż towarów lub usług na własnej stronie albo w aplikacji, bez udziału innych sprzedawców; ewentualnie sam miniprogram, konto publiczne lub sklep internetowy | Zgodnie z wymogami MIIT nie jest to usługa telekomunikacyjna o wartości dodanej — tak stwierdza Zarząd Komunikacji Prowincji Guangdong (广东省通信管理局) | Licencja na usługi o wartości dodanej nie jest potrzebna. Jeśli dopuścisz innych sprzedawców, zastosuj zasady z odpowiednich wierszy powyżej i poniżej | Często zadawane pytania Zarządu Komunikacji Prowincji Guangdong z 2025 r., pkt 1 |
| Łączenie kupujących ze sprzedawcami oraz obsługa transakcji i zamówień | Przetwarzanie danych online i przetwarzanie transakcji (在线数据处理与交易处理业务) | Licencja na usługi telekomunikacyjne o wartości dodanej (B21). Jest potrzebna, gdy obsługujesz transakcje między stronami | Katalog usług telekomunikacyjnych (电信业务分类目录, wydanie 2015), B21 |
| Transmisje na żywo z prezenterem lub transmisje z gier | Występy w sieci (网络表演) | Zezwolenie na działalność kulturalną w sieci (网络文化经营许可证) obejmujące występy w sieci. Bez niego prezenter nie może występować na stronie | Środki administrowania działalnością w zakresie występów w sieci (网络表演经营活动管理办法), art. 4 |
| Własne programy wideo, agregowanie cudzych programów albo umożliwienie użytkownikom przesyłania filmów | Internetowe usługi audiowizualne (互联网视听节目服务) | Licencja na rozpowszechnianie programów audiowizualnych w sieci informacyjnej (信息网络传播视听节目许可证). Jest potrzebna do nadawania programów wideo na stronie | Przepisy o administrowaniu internetowymi usługami audiowizualnymi (互联网视听节目服务管理规定), art. 7 i 8 |
| Sprzedaż towarów podczas transmisji na żywo | Marketing w transmisjach internetowych (网络直播营销) | Wymagane zezwolenia zależą od działalności opisanej w odpowiednich wierszach powyżej. Dodatkowo musisz weryfikować sprzedawców i przechowywać zapisy | Środki administrowania marketingiem w transmisjach internetowych (网络直播营销管理办法（试行）), art. 8 |
| Wiadomości i serwisy informacyjne | Internetowe usługi informacji prasowej (互联网新闻信息服务) | Licencja na internetowe usługi informacji prasowej (互联网新闻信息服务许可证). Bez niej nie wolno publikować wiadomości na stronie | Przepisy o administrowaniu internetowymi usługami transmisji na żywo (互联网直播服务管理规定), art. 5 |
| Własna serwerownia, sprzedaż hostingu i dostępu do internetu | Usługi centrów danych i usługi dostępu do internetu (互联网数据中心业务、互联网接入服务业务) | Licencja na usługi telekomunikacyjne o wartości dodanej (B11, B14). Jest potrzebna, gdy udostępniasz innym serwerownię i łącze | Katalog usług telekomunikacyjnych (wydanie 2015), B11 i B14 |

Najprościej wyjaśniają to wytyczne siedmiu resortów z 2021 r.: „Platformy transmisji na żywo prowadzące komercyjne występy w sieci muszą posiadać《Zezwolenie na działalność kulturalną w sieci》i dokonać rejestracji ICP; platformy transmisji na żywo świadczące usługi programów audiowizualnych w sieci muszą posiadać《Licencję na rozpowszechnianie programów audiowizualnych w sieci informacyjnej》(albo dokonać wpisu w ogólnokrajowym systemie rejestracji platform audiowizualnych) i dokonać rejestracji ICP; platformy transmisji na żywo świadczące internetowe usługi informacji prasowej muszą posiadać《Licencję na internetowe usługi informacji prasowej》.” (Cytat przetłumaczony z chińskiego oryginału: 「开展经营性网络表演活动的直播平台须持有《网络文化经营许可证》并进行ICP备案；开展网络视听节目服务的直播平台须持有《信息网络传播视听节目许可证》（或在全国网络视听平台信息登记管理系统中完成登记）并进行ICP备案；开展互联网新闻信息服务的直播平台须持有《互联网新闻信息服务许可证》。」)

Transmisje na żywo dzielą się na trzy rodzaje. Do występów prezentera potrzebujesz《Zezwolenia na działalność kulturalną w sieci》. Do programów audiowizualnych potrzebujesz《Licencji na rozpowszechnianie programów audiowizualnych w sieci informacyjnej》albo wpisu w ogólnokrajowym systemie rejestracji platform audiowizualnych. Do publikowania wiadomości potrzebujesz《Licencji na internetowe usługi informacji prasowej》. W dwóch pierwszych przypadkach musisz też dokonać rejestracji ICP.

### Trzy miejsca, w których łatwo o pomyłkę

**Osoba fizyczna nie może uzyskać licencji na usługi o wartości dodanej.** Pierwszy warunek uzyskania licencji brzmi: „podmiot prowadzący działalność jest spółką utworzoną zgodnie z prawem”. Najpierw musisz więc założyć spółkę. Osoba fizyczna składająca wniosek na podstawie dowodu osobistego nie otrzyma licencji. Spółka działająca tylko w jednej prowincji musi mieć kapitał zakładowy w wysokości co najmniej 1 mln juanów (100 万元), a działająca w kilku prowincjach — co najmniej 10 mln juanów (1000 万元). Urząd rozpatruje wniosek w ciągu 60 dni od złożenia dokumentów, a licencja jest ważna przez 5 lat. Jeśli chcesz prowadzić płatną działalność, najpierw załóż spółkę. Jak to zrobić, opisuje sekcja 12 (zakładanie firmy i prowadzenie biznesu).

**Prywatna spółka praktycznie nie może uzyskać licencji na programy audiowizualne.** Warunek brzmi: „posiada osobowość prawną i jest jednostką stanowiącą w całości własność państwa lub kontrolowaną przez państwo”. Oznacza to, że licencję otrzymują tylko jednostki będące własnością państwa lub przez nie kontrolowane. Prywatny przedsiębiorca, który chce publikować dłuższe filmy albo własne programy, nie uzyska takiej licencji. Jeśli chcesz prowadzić transmisje na żywo, musisz uzyskać zezwolenie na działalność kulturalną w sieci.

**Żaden oficjalny dokument nie stwierdza wprost, że „platforma handlu elektronicznego musi mieć EDI”.** EDI to licencja kategorii B21 z powyższej tabeli. Jej oficjalna nazwa to przetwarzanie danych online i przetwarzanie transakcji. Przewodnik MIIT (工信部) zawiera tylko zdanie: „wniosek o odpowiednią licencję na usługi telekomunikacyjne składa się zgodnie z kwalifikacją danej działalności”. MIIT dwukrotnie osobno wyjaśniał też, że platformy przewozu przez aplikację wystarczy zgłosić jako strony internetowe (备案). To samo dotyczy platform handlu prawami i uprawnieniami (权益类) oraz towarami masowymi. Dlatego przytaczamy tu tylko oficjalną definicję B21. To, czy Twoja działalność wymaga tej licencji, ustal z lokalnym zarządem komunikacji. Zanim zaczniesz załatwiać formalności, zadzwoń do właściwego zarządu i wyjaśnij tę kwestię.

## II. Codzienne obowiązki samej platformy

Uzyskanie licencji to dopiero początek. Po uruchomieniu platformy musisz regularnie wykonywać poniższe obowiązki. Kary za ich zaniedbanie opisano w odpowiednich hasłach sekcji 26.

| Obowiązek | Konkretny wymóg | Podstawa |
|---|---|---|
| Weryfikować i rejestrować sprzedawców otwierających sklepy na platformie | Ponownie weryfikować i aktualizować dane co najmniej raz na sześć miesięcy | Środki nadzoru nad transakcjami internetowymi (网络交易监督管理办法), art. 24 |
| Zgłaszać dane identyfikacyjne sprzedawców | Co roku, w styczniu i lipcu, przekazywać je organowi nadzoru rynku | Jak wyżej, art. 25 |
| Zgłaszać informacje podatkowe | Przekazywać je organowi podatkowemu w miesiącu po zakończeniu każdego kwartału | Przepisy o zgłaszaniu informacji podatkowych przez przedsiębiorstwa platform internetowych (互联网平台企业涉税信息报送规定), art. 4 |
| Przechowywać informacje o transakcjach | Co najmniej trzy lata od zakończenia transakcji | Ustawa o handlu elektronicznym (电子商务法), art. 31 |
| Przechowywać treści i dzienniki transmisji na żywo | Sześćdziesiąt dni | Przepisy o administrowaniu internetowymi usługami transmisji na żywo, art. 16 |
| Przechowywać nagrania występów w sieci | Co najmniej sześćdziesiąt dni | Środki administrowania działalnością w zakresie występów w sieci, art. 13 |
| Przechowywać dzienniki sieciowe | Co najmniej sześć miesięcy | Ustawa o cyberbezpieczeństwie (网络安全法), art. 23 pkt 3 |
| Obsługiwać zawiadomienia o naruszeniu praw | Przekazać osobie składającej skargę oświadczenie sprzedawcy. Jeśli w ciągu piętnastu dni od przekazania nie wpłyną dalsze informacje, przywrócić treść | Ustawa o handlu elektronicznym, art. 43 |
| Utworzyć punkt przyjmowania skarg i zgłoszeń | Umieścić go w widocznym miejscu i zadbać o łatwy dostęp | Przepisy o zarządzaniu ekosystemem treści informacyjnych w sieci (网络信息内容生态治理规定), art. 16 |

Obowiązują cztery odrębne okresy przechowywania. Informacje o transakcjach przechowuj przez trzy lata, treści transmisji na żywo przez sześćdziesiąt dni, a dzienniki sieciowe przez sześć miesięcy. Dane identyfikacyjne sprzedawców przechowuj przez trzy lata od dnia, w którym sprzedawca przestanie korzystać z platformy. Projektując system przechowywania, uwzględnij najdłuższy z tych okresów.

## III. Wybór serwera: jak wybrać spośród trzech poziomów

Najpierw odpowiedz na poniższe pytania. Dopiero potem porównaj ceny.

| Pytanie | Jeśli odpowiedź brzmi | To |
|---|---|---|
| Czy możesz zaakceptować całodniową przerwę w działaniu serwisu? | Tak | Wystarczy najtańszy VPS (serwer wirtualny) |
| Czy użytkownicy rejestrują się, dokonują transakcji lub przesyłają pliki? | Tak | Wybierz chmurę dużego dostawcy. Powinna umożliwiać wykonanie kopii całej maszyny w dowolnym momencie i tymczasowe zwiększenie jej parametrów |
| Czy ktoś stale opiekuje się serwerem? | Nie | Nie umieszczaj całej maszyny w serwerowni (colocation) |
| Czy największym wydatkiem jest łącze lub sprzęt? | Tak, a ktoś opiekuje się serwerem | Dopiero wtedy rozważ umieszczenie całej maszyny w serwerowni |

**Nie musisz z góry odrzucać małego dostawcy, ale najpierw go sprawdź.** Umieszczanie maszyn w serwerowni i udostępnianie innym dostępu do internetu wymagają licencji na usługi telekomunikacyjne o wartości dodanej. Aby to sprawdzić, otwórz system zintegrowanego zarządzania rynkiem usług telekomunikacyjnych MIIT pod adresem tsm.miit.gov.cn i wyszukaj spółkę po pełnej nazwie. Jeśli nie ma licencji, zrezygnuj z usług tego dostawcy. Oferta o połowę tańsza zwykle wiąże się z jednym z trzech ryzyk: sprzedano więcej mocy, niż firma ma do dyspozycji, właściciel może zniknąć albo dostawca nadrzędny może zostać zablokowany. Jeśli pojawi się problem, licencja dostawcy pozwala złożyć skargę do zarządu komunikacji. Bez licencji możesz nawet nie wiedzieć, do kogo się zwrócić.

**Serwer w kraju czy za granicą?** Serwer w Chinach kontynentalnych wymaga rejestracji (备案). Dostawcy dostępu do internetu nie mogą obsługiwać stron bez takiej rejestracji. Serwer za granicą pozwala ją ominąć, ale użytkownicy i wpływy nadal są w Chinach. Obowiązki platformy opisane w sekcji 26, hasła 5–10, nadal obowiązują. Musisz też uwzględnić koszty transferu danych za granicę. Przesłanie danych osobowych użytkowników z Chin na serwer za granicą jest wywozem danych. Taki transfer musi spełniać jeden z czterech warunków wymienionych w art. 38 ustawy o ochronie danych osobowych (个人信息保护法). Musisz też uzyskać osobną zgodę osoby, której dane dotyczą. Nie możesz ukryć jej w regulaminie akceptowanym zbiorczo jednym kliknięciem. Liczbę osób objętych transferem oblicza się narastająco od 1 stycznia danego roku. Przy mniej niż 100 tys. osób nie jest potrzebna żadna z trzech poniższych procedur. Przy 100 tys. do 1 mln osób musisz podpisać umowę standardową albo przejść certyfikację. Przy 1 mln osób lub więcej musisz przejść ocenę bezpieczeństwa.

**Kopie zapasowe.** Przechowuj je w co najmniej dwóch miejscach. Nie trzymaj obu u tego samego dostawcy ani w tym samym regionie. To zalecenie wynika wyłącznie z doświadczenia, a nie z przepisów.

## IV. Granice tego materiału

- Podstawy prawne przytoczone powyżej znajdziesz w kolumnie źródeł sekcji 26 README. Są tam numery dokumentów, artykułów i linki.
- Przepisy w tej dziedzinie szybko się zmieniają. Materiał zweryfikowano we wrześniu 2026 r. Przed powołaniem się na niego ponownie sprawdź tekst źródłowy. Zwróć szczególną uwagę na dwie kwestie: od 1 stycznia 2026 r. zmieniła się numeracja artykułów ustawy o cyberbezpieczeństwie, a od kwietnia 2026 r. zasady dotyczące napiwków dla prezenterów transmisji na żywo od osób niepełnoletnich zależą od wieku.
- Nie udało się uzyskać kilku tekstów źródłowych. Opisano to szczegółowo w [Protokole weryfikacji](核实记录/追加-第26节做平台.md). Pierwsza kwestia to obowiązek posiadania przez platformę handlu elektronicznego licencji EDI i to, czy istnieje wyraźny oficjalny zapis w tej sprawie. Druga to sądowa wykładnia, zgodnie z którą prowadzenie bez licencji działalności kulturalnej lub audiowizualnej w sieci stanowi nielegalną działalność gospodarczą.
