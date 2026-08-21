// Vercel Serverless Function — proxy naar de Anthropic API.
// De API-sleutel staat als Environment Variable (ANTHROPIC_API_KEY) in Vercel,
// NOOIT in de frontend. De browser praat alleen met dit endpoint.

export default async function handler(req, res) {
  // Alleen POST toestaan
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Serverconfiguratie ontbreekt: ANTHROPIC_API_KEY is niet ingesteld in Vercel.' });
    return;
  }

  try {
    const { images, notitie } = req.body || {};

    if (!images || !Array.isArray(images) || images.length === 0) {
      res.status(400).json({ error: 'Geen afbeeldingen ontvangen.' });
      return;
    }

    // Beperk aantal en grootte om misbruik te voorkomen
    if (images.length > 6) {
      res.status(400).json({ error: 'Maximaal 6 afbeeldingen per analyse.' });
      return;
    }

    const systemPrompt = `Je bent een ervaren dakdekker-calculator bij een Nederlands dakdekkersbedrijf. Analyseer de aangeleverde foto('s) of plattegrond(en) van een dak/gebouw en de eventuele notitie over de werkzaamheden. Bepaal per herkenbaar dakvlak een inschatting. Wees eerlijk over onzekerheid: als je maten niet betrouwbaar uit het beeld kunt halen, geef dan een ruwe schatting en zet "onzeker":true.

Antwoord UITSLUITEND met geldige JSON, geen markdown, geen uitleg eromheen. Formaat:
{"daken":[{"naam":"...","m2":getal,"rand_m1":getal,"opgaand_m1":getal,"lood_m1":getal,"hwa":getal,"doorvoer":getal,"ontluchting":getal,"kedge":getal,"daktype":"bitumen_gebrand|bitumen_mech|pvc_mech|epdm|pocb|pannen","product":"wedeflex_d4|derbigum_nt|soprema_470k","methode":"overlagen|bijisoleren|slopen","isolatie":"pir_60|pir_90|pir_142|pir_afschot","bereik":"normaal|hoogbouw|slecht","onzeker":true/false,"toelichting":"korte toelichting"}],"algemeen":"observaties over toegang/kraan/risico"}

Daktype-keuze: plat + bitumen dakrol = bitumen_gebrand; kunststof folie glad grijs/wit = pvc_mech; zwart rubber = epdm; dakpannen/hellend = pannen.\n\nWerkmethode: "overlagen" = bestaande bedekking blijft, alleen nieuwe laag erover (geen isolatie); "bijisoleren" = bestaande blijft, isolatie + nieuwe bedekking erover; "slopen" = alles eraf en afvoeren, compleet nieuw. Kies op basis van de notitie; bij twijfel en isolatiewens = bijisoleren, anders overlagen. isolatie = de dikte die past bij de methode (bij bijisoleren meestal pir_60/pir_90; bij slopen pir_142). product (alleen bij bitumen_gebrand): wedeflex_d4 of derbigum_nt zijn premium/dealer, soprema_470k is goedkoper maar kortere levensduur; laat leeg of wedeflex_d4 bij twijfel.`;

    const content = [];
    images.forEach((im) => {
      content.push({
        type: 'image',
        source: { type: 'base64', media_type: im.media_type, data: im.base64 },
      });
    });
    content.push({
      type: 'text',
      text:
        'Werkzaamheden/notitie: ' +
        (notitie || '(geen extra notitie; bepaal op basis van beeld)') +
        '\n\nGeef de JSON.',
    });

    const anthropicResp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        system: systemPrompt,
        messages: [{ role: 'user', content }],
      }),
    });

    if (!anthropicResp.ok) {
      const errText = await anthropicResp.text();
      res.status(anthropicResp.status).json({
        error: 'Anthropic API-fout: ' + errText.slice(0, 500),
      });
      return;
    }

    const data = await anthropicResp.json();
    let txt = (data.content || [])
      .filter((x) => x.type === 'text')
      .map((x) => x.text)
      .join('\n');
    txt = txt.replace(/```json|```/g, '').trim();

    let parsed;
    try {
      parsed = JSON.parse(txt);
    } catch (e) {
      res.status(502).json({
        error: 'AI-antwoord kon niet worden gelezen als JSON.',
        raw: txt.slice(0, 800),
      });
      return;
    }

    res.status(200).json(parsed);
  } catch (e) {
    res.status(500).json({ error: 'Serverfout: ' + e.message });
  }
}
