# 🏍️ Moto Výlet – webová verzia

Tento priečinok je celá aplikácia pripravená na web. Keď ju dáš na internet, získaš:

- **inštaláciu do mobilu** ako normálnu aplikáciu (ikona na ploche, celá obrazovka),
- **offline mapy** – pred výletom stiahneš mapu trasy (tlačidlo 📥 Offline mapa),
- **spoľahlivé GPS** v režime 🏍️ Jazda,
- **zdieľanie výletu** kamarátom odkazom alebo QR kódom (tlačidlo 🔗 Zdieľať).

Súbory: `index.html` (aplikácia), `sw.js` (offline režim), `manifest.webmanifest` + ikony (inštalácia).

---

## Možnosť 1: GitHub Pages (zadarmo, natrvalo) – odporúčam

1. Založ si účet na **github.com** (ak ešte nemáš).
2. Vpravo hore **+ → New repository**. Názov napr. `moto-vylet`, nechaj **Public**, klikni **Create repository**.
3. Na stránke repozitára klikni **uploading an existing file** a pretiahni tam **všetky súbory z tohto priečinka** (nie priečinok, ale súbory v ňom). Dole klikni **Commit changes**.
4. **Settings → Pages**. V časti *Branch* vyber `main` a `/ (root)`, klikni **Save**.
5. Po 1–2 minútach bude aplikácia na adrese:
   `https://TVOJE-MENO.github.io/moto-vylet/`

Aktualizácia: keď ti pošlem novú verziu, nahraj nový `index.html` rovnakým spôsobom (prepíše sa).

## Možnosť 2: Netlify Drop (najrýchlejšie)

1. Otvor **app.netlify.com/drop** a pretiahni tam **celý tento priečinok**.
2. Hneď dostaneš adresu. Aby stránka ostala natrvalo, prihlás sa / založ si účet a stránku si „claimni“ (Netlify ťa k tomu vyzve).

---

## Inštalácia do mobilu

- **Android (Chrome):** otvor adresu → tlačidlo **📲 Inštalovať** v aplikácii, alebo menu ⋮ → *Pridať na plochu / Inštalovať aplikáciu*.
- **iPhone (Safari):** otvor adresu → tlačidlo *Zdieľať* → **Pridať na plochu**.

## Dôležité

- **Dáta sú uložené v každom zariadení zvlášť** (počítač a mobil majú vlastné). Výlet prenesieš cez 🔗 Zdieľať (bez fotiek) alebo 💾 Záloha → 📂 Obnoviť (aj s fotkami).
- **Offline mapa:** pred výletom (na Wi-Fi) otvor výlet → Prehľad → **📥 Offline mapa**. Uloží sa podklad „Cestná mapa“ pozdĺž trás. Trasovanie, počasie a vyhľadávanie potrebujú signál – naplánuj teda vopred.
- **Režim Jazda:** displej ostane zapnutý. Pri zamknutom mobile prehliadač GPS pozastaví – na celodenný záznam použi navigačnú appku a GPX jazdy importuj.
- Google hodnotenia (záložka 🔎 Návrhy) potrebujú vlastný Google API kľúč – návod je priamo v aplikácii.

---

## 🌍 Komunita (trasy, fórum, spoločné jazdy) – nastavenie Firebase

Komunita potrebuje spoločný server. Použijeme bezplatný **Google Firebase** (plán Spark, bez karty).

1. Otvor **console.firebase.google.com** → **Create a project** → názov napr. `moto-vylet` → Google Analytics vypni → Create.
2. Vľavo **Build → Authentication → Get started → Sign-in method → Google → Enable** → zvoľ e-mail podpory → Save.
3. V Authentication → **Settings → Authorized domains → Add domain** → `milanhesko-beep.github.io`.
4. **Build → Firestore Database → Create database** → lokalita `eur3 (europe-west)` → *Start in production mode* → Create.
5. Vo Firestore záložka **Rules** → vymaž obsah, vlož celý súbor `firestore.rules` z tohto priečinka → **Publish**.
6. Ozubené koliesko ⚙️ → **Project settings → General → Your apps → ikona `</>` (Web)** → názov `moto-vylet` → Register app. Skopíruj blok `const firebaseConfig = { … }`.
7. Pošli ten blok Claudovi – vloží ho natrvalo do aplikácie pre všetkých. (Na vyskúšanie ho môžeš vložiť aj priamo v aplikácii: 🌍 Komunita → Trasy komunity.)
8. **Moderátor:** v aplikácii sa prihlás, v 👤 Profile skopíruj „Tvoje ID“. Vo Firestore → **Start collection** `admins` → Document ID = tvoje ID → pole `role` = `admin` → Save.

Údaje z Firebase konfigurácie nie sú tajné (sú v každej webovej aplikácii verejné) – dáta chránia pravidlá z kroku 5.

---

## 📧 E-mailové upozornenia na spoločné jazdy (Google Apps Script, zadarmo)

1. Otvor **script.google.com** → **Nový projekt** (vpravo hore premenuj na `Moto Výlet upozornenia`).
2. Zmaž obsah `Code.gs` a vlož celý súbor `apps-script-Code.gs` z tohto priečinka. Ulož (💾).
3. **Nasadiť (Deploy) → Nové nasadenie** → ozubené koliesko → **Webová aplikácia**.
   - Spustiť ako: **Ja**
   - Kto má prístup: **Ktokoľvek** (Anyone)
   → **Nasadiť** → **Autorizovať prístup** → vyber svoj účet → „Google tuto aplikáciu neoveril“ → **Rozšírené → Prejsť na … (nebezpečné)** → **Povoliť**.
   (Je to tvoj vlastný skript – potrebuje povolenie posielať e-maily z tvojho Gmailu a vytvoriť tabuľku odberateľov.)
4. Skopíruj **URL webovej aplikácie** (končí `/exec`) a pošli ju Claudovi – vloží ju do aplikácie.

Limit: bežný Gmail pošle cez skript cca 100 e-mailov denne. Odberatelia musia odber potvrdiť kliknutím v e-maile a v každom e-maile je odkaz na odhlásenie. Zoznam odberateľov je v tabuľke „Moto Výlet – odberatelia upozornení“ v tvojom Google Drive.

## Novinky (november 2026)
- 📸 Radary (pevné + úsekové merania) a rýchlostné limity z OpenStreetMap – veľká výstraha na displeji, vibrácie, limit pri rýchlosti.
- 👥 Skupinová jazda – kód skupiny, polohy kamarátov na mape, výstraha pri zaostaní (predvolene 10 km).
- 🔧 Garáž a servis – viac motoriek, intervaly podľa km aj dátumu, km z nahraných jázd.
- 🛂 Krajiny na trase, diaľničné známky a mýto pre motorky + upozornenie na hranici.
- ⚠️ Hlásenia na ceste, 🆘 pomoc v okolí, 📍 moto miesta, 📊 rozbor jazdy (náklon, brzdenie) + prehratie, 📖 cestopisy.
- Firestore pravidlá rozšírené o kolekcie ridepos, hazards, helpers, places – treba ich znova publikovať.
