(function () {
  const rows = [
    ["Ir", "Go", "Vai", "Aller", "Ir"],
    ["Busca direcciones o lugares, centra el mapa en el resultado y resalta la zona encontrada.", "Search for addresses or places, center the map on the result, and highlight the found area.", "Cerca indirizzi o luoghi, centra la mappa sul risultato ed evidenzia l'area trovata.", "Recherchez des adresses ou des lieux, centrez la carte sur le resultat et mettez en evidence la zone trouvee.", "Procure moradas ou locais, centre o mapa no resultado e destaque a zona encontrada."],
    ["Conecta la app con servidores TAK, red local CoT y paquetes Meshtastic compatibles.", "Connect the app with TAK servers, local CoT networking, and compatible Meshtastic packages.", "Collega l'app a server TAK, rete locale CoT e pacchetti Meshtastic compatibili.", "Connectez l'app aux serveurs TAK, au reseau local CoT et aux paquets Meshtastic compatibles.", "Ligue a app a servidores TAK, rede local CoT e pacotes Meshtastic compativeis."],
    ["Georreferenciar", "Georeference", "Georeferenzia", "Georeferencer", "Georreferenciar"],
    ["Superpone imágenes o PDF sobre el mapa, ajusta sus esquinas y guárdalos como KMZ.", "Overlay images or PDFs on the map, adjust their corners, and save them as KMZ.", "Sovrapponi immagini o PDF sulla mappa, regola gli angoli e salvali come KMZ.", "Superposez des images ou des PDF sur la carte, ajustez leurs angles et enregistrez-les en KMZ.", "Sobreponha imagens ou PDF no mapa, ajuste os cantos e guarde-os como KMZ."],
    ["Geozonas", "Geozones", "Geozone", "Geozones", "Geozonas"],
    ["Crea geozonas sobre el mapa, define perímetros operativos y consulta avisos al entrar o salir.", "Create geozones on the map, define operational perimeters, and check alerts when entering or leaving.", "Crea geozone sulla mappa, definisci perimetri operativi e consulta gli avvisi in entrata o in uscita.", "Creez des geozones sur la carte, definissez des perimetres operationnels et consultez les alertes a l'entree ou a la sortie.", "Crie geozonas no mapa, defina perimetros operacionais e consulte avisos ao entrar ou sair."],
  ];

  const dictionaries = rows.reduce((acc, [es, en, it, fr, pt]) => {
    acc.en[es] = en;
    acc.it[es] = it;
    acc.fr[es] = fr;
    acc.pt[es] = pt;
    return acc;
  }, { en: {}, it: {}, fr: {}, pt: {} });

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  const language = document.documentElement.lang;
  const dictionary = dictionaries[language];
  if (!dictionary) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return dictionary[normalize(node.nodeValue)] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const original = node.nodeValue;
    const translated = dictionary[normalize(original)];
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });
})();
