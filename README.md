# AI-raming dakwerk — Zaanstad Dakwerken

Web-app die een dakraming opstelt op basis van foto's of Cyclomedia-plattegronden.
De AI leest het beeld, stelt dakvlakken + maten + daktype voor, en berekent scenario's
(met/zonder isolatie, verschillende dakbedekkingstypes), bouwplaatskosten en een TCO
over 20–40 jaar. Alles op basis van kengetallen uit echte calculaties.

---

## Hoe het veilig zit met de API-sleutel

De browser praat **nooit** rechtstreeks met de AI. In plaats daarvan stuurt de app de
foto's naar een klein tussenstukje op de server (`api/analyse.js`). Dáár staat de
API-sleutel, afgeschermd als Environment Variable in Vercel. Zo staat de sleutel
nergens in de code die bezoekers kunnen zien.

```
Browser  ─►  /api/analyse (server, met sleutel)  ─►  Anthropic API
```

---

## Deployen naar Vercel — stap voor stap

Je hebt nodig: een GitHub-account en een Vercel-account (beide gratis), en je
Anthropic API-sleutel.

### 1. Zet de map op GitHub
- Maak een nieuwe (lege, private) repository aan op GitHub, bv. `zaanstad-ai-raming`.
- Upload de inhoud van deze map naar die repository. Kan via de GitHub-website
  ("Add file → Upload files") of met Git op de command line.

### 2. Koppel aan Vercel
- Ga naar https://vercel.com → **Add New… → Project**.
- Kies **Import Git Repository** en selecteer je zojuist gemaakte repository.
- Vercel herkent het vanzelf als een statische site met serverless functies.
  Je hoeft geen build-instellingen aan te passen. Klik **Deploy**.

### 3. Zet de API-sleutel als Environment Variable
Dit is de belangrijkste stap — zonder dit werkt de foto-analyse niet.
- In Vercel: open je project → **Settings → Environment Variables**.
- Voeg toe:
  - **Name:** `ANTHROPIC_API_KEY`
  - **Value:** je sleutel (begint met `sk-ant-...`)
  - **Environments:** vink Production (en desgewenst Preview/Development) aan.
- Klik **Save**.
- Ga naar **Deployments** en klik bij de laatste deployment op **Redeploy**
  (zodat de nieuwe variabele wordt meegenomen).

### 4. Klaar
Open de URL die Vercel geeft (bv. `https://zaanstad-ai-raming.vercel.app`).
Sleep een foto erin, klik "Analyseer & vul raming in".

---

## Lokaal testen (optioneel)

```bash
npm i -g vercel
vercel dev
```
Maak eerst een `.env.local` met je sleutel (zie `.env.example`).

---

## Mapstructuur

```
vercel-airaming/
├─ api/
│  └─ analyse.js       ← serverless proxy (houdt de sleutel geheim)
├─ public/
│  ├─ index.html       ← de pagina
│  ├─ styles.css       ← opmaak
│  └─ app.js           ← de rekenlogica + kengetallen
├─ vercel.json         ← configuratie
├─ package.json
├─ .gitignore          ← zorgt dat .env NOOIT wordt geüpload
└─ .env.example        ← voorbeeld, ZONDER echte sleutel
```

---

## Kengetallen aanpassen

De arbeidsnormen, marges, bouwplaats- en TCO-kengetallen staan boven in
`public/app.js` in de regel die begint met `const K=`. Levensduur en
onderhoudspercentages per daktype staan onder `tco`. Pas die aan naar de praktijk
en push opnieuw naar GitHub; Vercel deployt dan automatisch.

## Belangrijk

Dit is een **raming/indicatie**, geen exacte calculatie. Voor offertes en
investeringsbesluiten altijd een volledige calculatie maken en laten controleren
(4-ogen). Onderaanneming en stelposten zijn niet inbegrepen.
