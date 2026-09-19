# Areál – pronájem skladů a hal

Statický web (vanilla HTML/CSS/JS, žádný build krok, žádné závislosti) vyexportovaný
z Claude Design. Připraveno k otevření v Claude Code / libovolném editoru a
k nasazení na jakýkoli statický hosting (Vercel, Netlify, GitHub Pages, S3…).

## Struktura

```
index.html      – obsah stránky (statické HTML + prázdné "sloty" pro dynamický obsah)
styles.css      – veškeré styly, včetně mobilní responzivity (@media max-width: 767px / 420px)
script.js       – veškerá interaktivní logika (výběr jednotky, mapa, 360° panorama,
                   rezervace termínu, mobilní menu) – čistý JS, bez frameworku
assets/         – obrázky (letecký snímek areálu, 360° panorama skladu)
```

## Jak to spustit lokálně

Stránka nepotřebuje žádný build ani server-side kód, ale kvůli `fetch`/CORS
pravidlům prohlížečů je potřeba ji otevřít přes lokální HTTP server (ne přímo
dvojklikem na soubor):

```bash
cd export
python3 -m http.server 8080
# pak otevřít http://localhost:8080
```

nebo `npx serve .`

## Jak to funguje (pro případné úpravy)

- **`script.js`** obsahuje na začátku soubor `Component` třídu (business logika –
  ceny, jednotky, dostupné termíny, panorama) beze změny převzatou z originálu.
  Pod ní je malý "runtime" engine, který:
  - cíleně aktualizuje atributy/texty prvků označených `data-b="N"` (nepřekresluje
    celé DOM, takže se nikdy neztratí rozepsaný text v `<input>` polích),
  - vykresluje opakující se seznamy (jednotky, dny, časy) do kontejnerů `#list-*`,
  - přepíná `<div data-if="...">` bloky (např. formulář rezervace vs. potvrzení),
  - hlídá responzivní škálování 740×690px interaktivní mapy/panoramatu
    (`.map-stage-wrap` / `.map-stage-inner`) přes CSS `transform: scale()`.
- **Ukázková data** (názvy jednotek, ceny, m², obsazenost termínů) jsou v
  `script.js` v komentované sekci na začátku `renderVals()` – stačí upravit pole
  `units` a `times`.
- **Kontaktní telefon/e-mail** je zadaný na několika místech v `index.html`
  (hlavička, mobilní menu, CTA sekce, patička) – hledejte `+420 725 111 222`
  a `pronajem@areal-letnany.cz`.
- **Google mapa** je vložená jako iframe bez API klíče (`google.com/maps?q=...&output=embed`)
  – adresu stačí upravit v `index.html`.

## Mobilní verze

Layout je plně responzivní (breakpoint 767px a 420px): hlavička se mění na
hamburger menu, řádky se sekcemi se skládají pod sebe, výběr dne prohlídky je
na mobilu vodorovně scrollovatelný, a v dolní části obrazovky je fixní CTA
lišta s rezervací.
