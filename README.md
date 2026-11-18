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
