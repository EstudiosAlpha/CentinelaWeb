(function () {
  const localeMap = {
    en: "en_US",
    es: "es_ES",
    fr: "fr_FR",
    it: "it_IT",
    pt: "pt_PT",
  };

  const rows = [
    ["Saltar al contenido principal", "Skip to main content", "Salta al contenuto principale", "Aller au contenu principal", "Saltar para o conteudo principal"],
    ["Navegación principal", "Main navigation", "Navigazione principale", "Navigation principale", "Navegacao principal"],
    ["Centinela, inicio", "Centinela, home", "Centinela, home", "Centinela, accueil", "Centinela, inicio"],
    ["Abrir menú", "Open menu", "Apri menu", "Ouvrir le menu", "Abrir menu"],
    ["Especificaciones", "Specifications", "Specifiche", "Specifications", "Especificacoes"],
    ["Tutoriales", "Tutorials", "Tutorial", "Tutoriels", "Tutoriais"],
    ["Privacidad", "Privacy", "Privacy", "Confidentialite", "Privacidade"],
    ["Contacto", "Contact", "Contatto", "Contact", "Contacto"],
    ["Enlaces de pie de página", "Footer links", "Link del footer", "Liens de pied de page", "Links do rodape"],
    ["Centinela. Todos los derechos reservados.", "Centinela. All rights reserved.", "Centinela. Tutti i diritti riservati.", "Centinela. Tous droits reserves.", "Centinela. Todos os direitos reservados."],
    ["Centinela: Navegación Táctica", "Centinela: Tactical Navigation", "Centinela: Navigazione tattica", "Centinela : navigation tactique", "Centinela: Navegacao tatica"],
    ["Centinela: Navegación Táctica | App iOS para iPhone e iPad", "Centinela: Tactical Navigation | iOS app for iPhone and iPad", "Centinela: Navigazione tattica | App iOS per iPhone e iPad", "Centinela : navigation tactique | App iOS pour iPhone et iPad", "Centinela: Navegacao tatica | App iOS para iPhone e iPad"],
    ["Centinela es una app iOS de navegación táctica para mapas, rutas, waypoints, misiones, contactos, coordinación sobre el terreno e integración con el ecosistema TAK.", "Centinela is an iOS tactical navigation app for maps, routes, waypoints, missions, contacts, field coordination, and integration with the TAK ecosystem.", "Centinela e un'app iOS di navigazione tattica per mappe, rotte, waypoint, missioni, contatti, coordinamento sul campo e integrazione con l'ecosistema TAK.", "Centinela est une app iOS de navigation tactique pour cartes, itineraires, waypoints, missions, contacts, coordination sur le terrain et integration a l'ecosysteme TAK.", "Centinela e uma app iOS de navegacao tatica para mapas, rotas, waypoints, missoes, contactos, coordenacao no terreno e integracao com o ecossistema TAK."],
    ["Navegación digital avanzada para operaciones, rutas y coordinación sobre el terreno.", "Advanced digital navigation for operations, routes, and field coordination.", "Navigazione digitale avanzata per operazioni, rotte e coordinamento sul campo.", "Navigation numerique avancee pour les operations, les itineraires et la coordination sur le terrain.", "Navegacao digital avancada para operacoes, rotas e coordenacao no terreno."],
    ["App iOS de navegación táctica", "iOS tactical navigation app", "App iOS di navigazione tattica", "App iOS de navigation tactique", "App iOS de navegacao tatica"],
    ["Navegación digital avanzada para operaciones, rutas, coordinación sobre el terreno y conexión con el ecosistema TAK.", "Advanced digital navigation for operations, routes, field coordination, and connection with the TAK ecosystem.", "Navigazione digitale avanzata per operazioni, rotte, coordinamento sul campo e connessione con l'ecosistema TAK.", "Navigation numerique avancee pour les operations, les itineraires, la coordination sur le terrain et la connexion a l'ecosysteme TAK.", "Navegacao digital avancada para operacoes, rotas, coordenacao no terreno e ligacao ao ecossistema TAK."],
    ["Ver herramientas", "View tools", "Vedi strumenti", "Voir les outils", "Ver ferramentas"],
    ["Ver tutoriales", "View tutorials", "Vedi tutorial", "Voir les tutoriels", "Ver tutoriais"],
    ["Vista de Centinela en iPhone", "Centinela view on iPhone", "Vista di Centinela su iPhone", "Vue de Centinela sur iPhone", "Vista do Centinela no iPhone"],
    ["Vídeo de la app Centinela", "Centinela app video", "Video dell'app Centinela", "Video de l'app Centinela", "Video da app Centinela"],
    ["Tu navegador no admite este vídeo.", "Your browser does not support this video.", "Il tuo browser non supporta questo video.", "Votre navigateur ne prend pas en charge cette video.", "O seu navegador nao suporta este video."],
    ["El vídeo no está disponible", "The video is not available", "Il video non e disponibile", "La video n'est pas disponible", "O video nao esta disponivel"],
    ["Comprueba que el archivo assets/videos/inicio.MP4 existe o usa un navegador compatible.", "Check that assets/videos/inicio.MP4 exists or use a compatible browser.", "Verifica che il file assets/videos/inicio.MP4 esista o usa un browser compatibile.", "Verifiez que le fichier assets/videos/inicio.MP4 existe ou utilisez un navigateur compatible.", "Verifique se o ficheiro assets/videos/inicio.MP4 existe ou use um navegador compativel."],
    ["Qué es Centinela", "What Centinela is", "Cos'e Centinela", "Qu'est-ce que Centinela", "O que e o Centinela"],
    ["Mapa, coordinación y herramientas en una sola interfaz", "Map, coordination, and tools in a single interface", "Mappa, coordinamento e strumenti in un'unica interfaccia", "Carte, coordination et outils dans une seule interface", "Mapa, coordenacao e ferramentas numa unica interface"],
    ["Centinela es una app de navegación táctica para iPhone e iPad pensada para planificar, visualizar y coordinar información sobre mapas digitales. Permite trabajar con rutas, waypoints, capas, contactos, misiones y paquetes de datos desde una interfaz directa, preparada para conectarse con flujos del ecosistema TAK cuando la operación lo requiera.", "Centinela is a tactical navigation app for iPhone and iPad designed to plan, view, and coordinate information on digital maps. It lets you work with routes, waypoints, layers, contacts, missions, and data packages from a direct interface, ready to connect with TAK ecosystem workflows when the operation requires it.", "Centinela e un'app di navigazione tattica per iPhone e iPad progettata per pianificare, visualizzare e coordinare informazioni su mappe digitali. Consente di lavorare con rotte, waypoint, livelli, contatti, missioni e pacchetti dati da un'interfaccia diretta, pronta a collegarsi ai flussi dell'ecosistema TAK quando l'operazione lo richiede.", "Centinela est une app de navigation tactique pour iPhone et iPad concue pour planifier, visualiser et coordonner des informations sur des cartes numeriques. Elle permet de travailler avec des itineraires, waypoints, couches, contacts, missions et paquets de donnees depuis une interface directe, prete a se connecter aux flux de l'ecosysteme TAK lorsque l'operation l'exige.", "Centinela e uma app de navegacao tatica para iPhone e iPad pensada para planear, visualizar e coordenar informacao em mapas digitais. Permite trabalhar com rotas, waypoints, camadas, contactos, missoes e pacotes de dados a partir de uma interface direta, preparada para ligar a fluxos do ecossistema TAK quando a operacao o exigir."],
    ["Icono de la app Centinela", "Centinela app icon", "Icona dell'app Centinela", "Icone de l'app Centinela", "Icone da app Centinela"],
    ["Navegación táctica iOS", "iOS tactical navigation", "Navigazione tattica iOS", "Navigation tactique iOS", "Navegacao tatica iOS"],
    ["Herramientas", "Tools", "Strumenti", "Outils", "Ferramentas"],
    ["Las funciones principales de la app", "The app's main features", "Le funzioni principali dell'app", "Les principales fonctions de l'app", "As principais funcionalidades da app"],
    ["Mapas", "Maps", "Mappe", "Cartes", "Mapas"],
    ["Visualiza y trabaja sobre mapas digitales adaptados a la navegación táctica.", "View and work on digital maps adapted to tactical navigation.", "Visualizza e lavora su mappe digitali adattate alla navigazione tattica.", "Visualisez et travaillez sur des cartes numeriques adaptees a la navigation tactique.", "Visualize e trabalhe em mapas digitais adaptados a navegacao tatica."],
    ["Conecta la app con el ecosistema TAK para integrarse en flujos operativos compatibles.", "Connect the app with the TAK ecosystem to integrate with compatible operational workflows.", "Collega l'app all'ecosistema TAK per integrarla in flussi operativi compatibili.", "Connectez l'app a l'ecosysteme TAK pour l'integrer a des flux operationnels compatibles.", "Ligue a app ao ecossistema TAK para a integrar em fluxos operacionais compativeis."],
    ["Capas", "Layers", "Livelli", "Couches", "Camadas"],
    ["Activa o desactiva información adicional sobre el terreno según tus necesidades.", "Enable or disable additional terrain information as needed.", "Attiva o disattiva informazioni aggiuntive sul terreno in base alle tue esigenze.", "Activez ou desactivez des informations supplementaires sur le terrain selon vos besoins.", "Ative ou desative informacao adicional sobre o terreno conforme necessario."],
    ["Grabar", "Record", "Registra", "Enregistrer", "Gravar"],
    ["Registra tus desplazamientos y guarda recorridos para analizarlos o repetirlos.", "Record your movements and save tracks to analyze or repeat them.", "Registra i tuoi spostamenti e salva percorsi per analizzarli o ripeterli.", "Enregistrez vos deplacements et sauvegardez vos parcours pour les analyser ou les refaire.", "Registe os seus deslocamentos e guarde percursos para os analisar ou repetir."],
    ["Rutas", "Routes", "Rotte", "Itineraires", "Rotas"],
    ["Planifica trazados y referencias para moverte con mayor control.", "Plan paths and references to move with greater control.", "Pianifica tracciati e riferimenti per muoverti con maggiore controllo.", "Planifiez des traces et des reperes pour vous deplacer avec plus de controle.", "Planeie trajetos e referencias para se deslocar com maior controlo."],
    ["Waypoints", "Waypoints", "Waypoint", "Waypoints", "Waypoints"],
    ["Marca puntos clave sobre el mapa para navegación, referencia o coordinación.", "Mark key points on the map for navigation, reference, or coordination.", "Segna punti chiave sulla mappa per navigazione, riferimento o coordinamento.", "Marquez des points cles sur la carte pour la navigation, le reperage ou la coordination.", "Marque pontos-chave no mapa para navegacao, referencia ou coordenacao."],
    ["Dibujar", "Draw", "Disegna", "Dessiner", "Desenhar"],
    ["Traza líneas, zonas, símbolos o anotaciones directamente sobre el mapa.", "Draw lines, areas, symbols, or notes directly on the map.", "Traccia linee, zone, simboli o annotazioni direttamente sulla mappa.", "Tracez des lignes, zones, symboles ou annotations directement sur la carte.", "Desenhe linhas, zonas, simbolos ou anotacoes diretamente no mapa."],
    ["Medir", "Measure", "Misura", "Mesurer", "Medir"],
    ["Calcula distancias y referencias de forma rápida sobre el terreno.", "Calculate distances and references quickly in the field.", "Calcola rapidamente distanze e riferimenti sul terreno.", "Calculez rapidement distances et reperes sur le terrain.", "Calcule distancias e referencias rapidamente no terreno."],
    ["Video", "Video", "Video", "Video", "Video"],
    ["Vídeo", "Video", "Video", "Video", "Video"],
    ["Accede a funciones de vídeo para mejorar la observación y el seguimiento.", "Access video features to improve observation and tracking.", "Accedi alle funzioni video per migliorare osservazione e monitoraggio.", "Accedez aux fonctions video pour ameliorer l'observation et le suivi.", "Aceda a funcionalidades de video para melhorar a observacao e o acompanhamento."],
    ["Misiones Sync", "Mission Sync", "Mission Sync", "Synchronisation des missions", "Sincronizacao de missoes"],
    ["Mantén la información de misión alineada entre usuarios y dispositivos.", "Keep mission information aligned across users and devices.", "Mantieni allineate le informazioni di missione tra utenti e dispositivi.", "Gardez les informations de mission alignees entre utilisateurs et appareils.", "Mantenha a informacao de missao alinhada entre utilizadores e dispositivos."],
    ["Contactos", "Contacts", "Contatti", "Contacts", "Contactos"],
    ["Gestiona contactos y elementos conectados dentro del entorno de navegación.", "Manage contacts and connected elements inside the navigation environment.", "Gestisci contatti ed elementi connessi nell'ambiente di navigazione.", "Gerez les contacts et elements connectes dans l'environnement de navigation.", "Gira contactos e elementos ligados dentro do ambiente de navegacao."],
    ["Comunica información relevante entre usuarios durante la operación.", "Share relevant information between users during the operation.", "Comunica informazioni rilevanti tra utenti durante l'operazione.", "Communiquez les informations pertinentes entre utilisateurs pendant l'operation.", "Comunique informacao relevante entre utilizadores durante a operacao."],
    ["Paquete Datos", "Data Package", "Pacchetto dati", "Paquet de donnees", "Pacote de dados"],
    ["Prepara y comparte conjuntos de información táctica de forma estructurada, incluyendo flujos compatibles con TAK.", "Prepare and share tactical information sets in a structured way, including TAK-compatible workflows.", "Prepara e condividi set di informazioni tattiche in modo strutturato, inclusi flussi compatibili con TAK.", "Preparez et partagez des ensembles d'informations tactiques de facon structuree, y compris des flux compatibles TAK.", "Prepare e partilhe conjuntos de informacao tatica de forma estruturada, incluindo fluxos compativeis com TAK."],
    ["Formulario rápido para evacuación médica y transmisión de información crítica.", "Fast form for medical evacuation and critical information transmission.", "Modulo rapido per evacuazione medica e trasmissione di informazioni critiche.", "Formulaire rapide pour evacuation medicale et transmission d'informations critiques.", "Formulario rapido para evacuacao medica e transmissao de informacao critica."],
    ["Videotutoriales", "Video tutorials", "Videotutorial", "Tutoriels video", "Videotutoriais"],
    ["Aquí encontrarás los tutoriales destacados para empezar a usar Centinela.", "Here you will find featured tutorials to start using Centinela.", "Qui trovi i tutorial in evidenza per iniziare a usare Centinela.", "Vous trouverez ici les tutoriels principaux pour commencer a utiliser Centinela.", "Aqui encontra os tutoriais em destaque para comecar a usar o Centinela."],
    ["Maqueta de iPhone para tutoriales", "iPhone mockup for tutorials", "Mockup iPhone per i tutorial", "Maquette iPhone pour les tutoriels", "Maquete de iPhone para tutoriais"],
    ["Selecciona un tutorial", "Select a tutorial", "Seleziona un tutorial", "Selectionnez un tutoriel", "Selecione um tutorial"],
    ["El vídeo se reproducirá con formato vertical dentro del iPhone.", "The video will play vertically inside the iPhone.", "Il video verra riprodotto in formato verticale dentro l'iPhone.", "La video sera lue au format vertical dans l'iPhone.", "O video sera reproduzido em formato vertical dentro do iPhone."],
    ["Cómo crear un waypoint sobre el mapa", "How to create a waypoint on the map", "Come creare un waypoint sulla mappa", "Comment creer un waypoint sur la carte", "Como criar um waypoint no mapa"],
    ["Aprende a marcar puntos clave sobre el mapa y usarlos como referencia operativa.", "Learn to mark key points on the map and use them as operational references.", "Impara a segnare punti chiave sulla mappa e usarli come riferimenti operativi.", "Apprenez a marquer des points cles sur la carte et a les utiliser comme reperes operationnels.", "Aprenda a marcar pontos-chave no mapa e a usa-los como referencia operacional."],
    ["Marca posiciones clave con precisión.", "Mark key positions precisely.", "Segna posizioni chiave con precisione.", "Marquez des positions cles avec precision.", "Marque posicoes-chave com precisao."],
    ["Mostrar en iPhone", "Show on iPhone", "Mostra su iPhone", "Afficher sur iPhone", "Mostrar no iPhone"],
    ["Cómo grabar una ruta", "How to record a route", "Come registrare una rotta", "Comment enregistrer un itineraire", "Como gravar uma rota"],
    ["Registra desplazamientos y guarda recorridos para consultarlos más tarde.", "Record movements and save tracks to review them later.", "Registra spostamenti e salva percorsi per consultarli in seguito.", "Enregistrez des deplacements et sauvegardez des parcours pour les consulter plus tard.", "Registe deslocamentos e guarde percursos para os consultar mais tarde."],
    ["Controla cada tramo de tu recorrido.", "Control every segment of your route.", "Controlla ogni tratto del tuo percorso.", "Controlez chaque segment de votre parcours.", "Controle cada troco do seu percurso."],
    ["Cómo usar capas de mapa", "How to use map layers", "Come usare i livelli della mappa", "Comment utiliser les couches de carte", "Como usar camadas de mapa"],
    ["Gestiona información adicional del terreno desde la vista de navegación.", "Manage additional terrain information from the navigation view.", "Gestisci informazioni aggiuntive sul terreno dalla vista di navigazione.", "Gerez les informations supplementaires du terrain depuis la vue de navigation.", "Gira informacao adicional do terreno a partir da vista de navegacao."],
    ["Activa información táctica cuando la necesites.", "Activate tactical information when you need it.", "Attiva informazioni tattiche quando ti servono.", "Activez les informations tactiques quand vous en avez besoin.", "Ative informacao tatica quando precisar."],
    ["Cómo crear una misión", "How to create a mission", "Come creare una missione", "Comment creer une mission", "Como criar uma missao"],
    ["Agrupa rutas, contactos, capas y puntos dentro de una operación.", "Group routes, contacts, layers, and points inside an operation.", "Raggruppa rotte, contatti, livelli e punti dentro un'operazione.", "Regroupez itineraires, contacts, couches et points dans une operation.", "Agrupe rotas, contactos, camadas e pontos dentro de uma operacao."],
    ["Ordena cada operación desde el inicio.", "Organize every operation from the start.", "Organizza ogni operazione dall'inizio.", "Organisez chaque operation des le depart.", "Organize cada operacao desde o inicio."],
    ["Cómo usar MEDEVAC", "How to use MEDEVAC", "Come usare MEDEVAC", "Comment utiliser MEDEVAC", "Como usar MEDEVAC"],
    ["Prepara información crítica de evacuación médica de forma rápida.", "Prepare critical medical evacuation information quickly.", "Prepara rapidamente informazioni critiche per l'evacuazione medica.", "Preparez rapidement les informations critiques d'evacuation medicale.", "Prepare rapidamente informacao critica de evacuacao medica."],
    ["Completa datos críticos con rapidez.", "Complete critical data quickly.", "Completa rapidamente dati critici.", "Completez rapidement les donnees critiques.", "Preencha dados criticos rapidamente."],
    ["Ver todos los tutoriales", "View all tutorials", "Vedi tutti i tutorial", "Voir tous les tutoriels", "Ver todos os tutoriais"],
    ["Centinela mostrando capas, mediciones y waypoints sobre mapa satelital en iPad", "Centinela showing layers, measurements, and waypoints on a satellite map on iPad", "Centinela mostra livelli, misurazioni e waypoint su mappa satellitare su iPad", "Centinela affichant couches, mesures et waypoints sur une carte satellite sur iPad", "Centinela a mostrar camadas, medicoes e waypoints num mapa satelite no iPad"],
    ["Centinela mostrando contactos, áreas y waypoints sobre mapa satelital en iPhone", "Centinela showing contacts, areas, and waypoints on a satellite map on iPhone", "Centinela mostra contatti, aree e waypoint su mappa satellitare su iPhone", "Centinela affichant contacts, zones et waypoints sur une carte satellite sur iPhone", "Centinela a mostrar contactos, areas e waypoints num mapa satelite no iPhone"],
    ["Centinela mostrando waypoints sobre mapa en Apple Watch", "Centinela showing waypoints on a map on Apple Watch", "Centinela mostra waypoint su mappa su Apple Watch", "Centinela affichant des waypoints sur une carte sur Apple Watch", "Centinela a mostrar waypoints num mapa no Apple Watch"],
    ["Disponible en iPhone, iPad y Apple Watch", "Available on iPhone, iPad, and Apple Watch", "Disponibile su iPhone, iPad e Apple Watch", "Disponible sur iPhone, iPad et Apple Watch", "Disponivel no iPhone, iPad e Apple Watch"],
    ["Optimizada para consultar, planificar y coordinar", "Optimized to consult, plan, and coordinate", "Ottimizzata per consultare, pianificare e coordinare", "Optimisee pour consulter, planifier et coordonner", "Otimizada para consultar, planear e coordenar"],
    ["En iPhone, Centinela prioriza acceso rápido a mapa, ubicación, waypoints y herramientas. En iPad, ofrece más espacio para revisar capas, rutas y datos de misión. En Apple Watch, mantiene la información táctica clave en tu muñeca para consultar ubicación, waypoints y alertas sin sacar el iPhone.", "On iPhone, Centinela prioritizes quick access to the map, location, waypoints, and tools. On iPad, it provides more space to review layers, routes, and mission data. On Apple Watch, it keeps key tactical information on your wrist so you can check location, waypoints, and alerts without taking out your iPhone.", "Su iPhone, Centinela privilegia l'accesso rapido a mappa, posizione, waypoint e strumenti. Su iPad offre piu spazio per rivedere livelli, rotte e dati di missione. Su Apple Watch mantiene le informazioni tattiche chiave al polso per consultare posizione, waypoint e avvisi senza estrarre l'iPhone.", "Sur iPhone, Centinela privilegie l'acces rapide a la carte, a la position, aux waypoints et aux outils. Sur iPad, elle offre plus d'espace pour examiner couches, itineraires et donnees de mission. Sur Apple Watch, elle garde les informations tactiques cles au poignet pour consulter position, waypoints et alertes sans sortir l'iPhone.", "No iPhone, o Centinela prioriza o acesso rapido ao mapa, localizacao, waypoints e ferramentas. No iPad, oferece mais espaco para rever camadas, rotas e dados de missao. No Apple Watch, mantem a informacao tatica essencial no pulso para consultar localizacao, waypoints e alertas sem tirar o iPhone."],
    ["Próximo despliegue", "Upcoming release", "Prossimo rilascio", "Prochain deploiement", "Proximo lancamento"],
    ["Prepárate para navegar con precisión", "Get ready to navigate with precision", "Preparati a navigare con precisione", "Preparez-vous a naviguer avec precision", "Prepare-se para navegar com precisao"],
    ["Próximamente en App Store", "Coming soon to the App Store", "Prossimamente su App Store", "Bientot sur l'App Store", "Brevemente na App Store"],

    ["Especificaciones técnicas | Centinela: Navegación Táctica", "Technical specifications | Centinela: Tactical Navigation", "Specifiche tecniche | Centinela: Navigazione tattica", "Specifications techniques | Centinela : navigation tactique", "Especificacoes tecnicas | Centinela: Navegacao tatica"],
    ["Formatos de mapas, rutas, waypoints, paquetes de datos, vídeo, sincronización y conexión con el ecosistema TAK en Centinela.", "Map, route, waypoint, data package, video, sync, and TAK ecosystem connection formats in Centinela.", "Formati di mappe, rotte, waypoint, pacchetti dati, video, sincronizzazione e connessione con l'ecosistema TAK in Centinela.", "Formats de cartes, itineraires, waypoints, paquets de donnees, video, synchronisation et connexion a l'ecosysteme TAK dans Centinela.", "Formatos de mapas, rotas, waypoints, pacotes de dados, video, sincronizacao e ligacao ao ecossistema TAK no Centinela."],
    ["Especificaciones técnicas de Centinela", "Centinela technical specifications", "Specifiche tecniche di Centinela", "Specifications techniques de Centinela", "Especificacoes tecnicas do Centinela"],
    ["Compatibilidad técnica de mapas, rutas, waypoints, datos tácticos y ecosistema TAK.", "Technical compatibility for maps, routes, waypoints, tactical data, and the TAK ecosystem.", "Compatibilita tecnica per mappe, rotte, waypoint, dati tattici ed ecosistema TAK.", "Compatibilite technique des cartes, itineraires, waypoints, donnees tactiques et ecosysteme TAK.", "Compatibilidade tecnica de mapas, rotas, waypoints, dados taticos e ecossistema TAK."],
    ["Especificaciones técnicas", "Technical specifications", "Specifiche tecniche", "Specifications techniques", "Especificacoes tecnicas"],
    ["Compatibilidad operativa y formatos soportados", "Operational compatibility and supported formats", "Compatibilita operativa e formati supportati", "Compatibilite operationnelle et formats pris en charge", "Compatibilidade operacional e formatos suportados"],
    ["Resumen técnico para mapas, rutas, waypoints, sincronización, paquetes de datos, vídeo y conexión con el ecosistema TAK.", "Technical summary for maps, routes, waypoints, sync, data packages, video, and TAK ecosystem connection.", "Riepilogo tecnico per mappe, rotte, waypoint, sincronizzazione, pacchetti dati, video e connessione con l'ecosistema TAK.", "Resume technique pour cartes, itineraires, waypoints, synchronisation, paquets de donnees, video et connexion a l'ecosysteme TAK.", "Resumo tecnico para mapas, rotas, waypoints, sincronizacao, pacotes de dados, video e ligacao ao ecossistema TAK."],
    ["Mapas base", "Base maps", "Mappe base", "Cartes de base", "Mapas base"],
    ["Apple Maps, capas raster y capas vectoriales según configuración.", "Apple Maps, raster layers, and vector layers depending on configuration.", "Apple Maps, livelli raster e livelli vettoriali in base alla configurazione.", "Apple Maps, couches raster et couches vectorielles selon la configuration.", "Apple Maps, camadas raster e camadas vetoriais conforme a configuracao."],
    ["Offline", "Offline", "Offline", "Hors ligne", "Offline"],
    ["MBTiles, paquetes de teselas XYZ/TMS y cachés locales.", "MBTiles, XYZ/TMS tile packages, and local caches.", "MBTiles, pacchetti di tile XYZ/TMS e cache locali.", "MBTiles, paquets de tuiles XYZ/TMS et caches locaux.", "MBTiles, pacotes de mosaicos XYZ/TMS e caches locais."],
    ["Servicios", "Services", "Servizi", "Services", "Servicos"],
    ["WMS, WMTS y endpoints XYZ cuando el servidor lo permita.", "WMS, WMTS, and XYZ endpoints when the server allows it.", "WMS, WMTS ed endpoint XYZ quando il server lo consente.", "WMS, WMTS et endpoints XYZ lorsque le serveur le permet.", "WMS, WMTS e endpoints XYZ quando o servidor o permitir."],
    ["Georreferenciados", "Georeferenced", "Georeferenziati", "Georeferences", "Georreferenciados"],
    ["GeoTIFF o raster calibrado mediante flujo de importación.", "GeoTIFF or calibrated raster through the import flow.", "GeoTIFF o raster calibrato tramite il flusso di importazione.", "GeoTIFF ou raster calibre via le flux d'importation.", "GeoTIFF ou raster calibrado atraves do fluxo de importacao."],
    ["Rutas y Waypoints", "Routes and Waypoints", "Rotte e waypoint", "Itineraires et waypoints", "Rotas e Waypoints"],
    ["GPX, KML/KMZ y GeoJSON para importación/exportación.", "GPX, KML/KMZ, and GeoJSON for import/export.", "GPX, KML/KMZ e GeoJSON per importazione/esportazione.", "GPX, KML/KMZ et GeoJSON pour import/export.", "GPX, KML/KMZ e GeoJSON para importacao/exportacao."],
    ["GPX WPT, KML Placemark, GeoJSON Point y CSV estructurado.", "GPX WPT, KML Placemark, GeoJSON Point, and structured CSV.", "GPX WPT, KML Placemark, GeoJSON Point e CSV strutturato.", "GPX WPT, KML Placemark, GeoJSON Point et CSV structure.", "GPX WPT, KML Placemark, GeoJSON Point e CSV estruturado."],
    ["Mediciones", "Measurements", "Misurazioni", "Mesures", "Medicoes"],
    ["Distancia, segmentos, etiquetas y referencias sobre mapa.", "Distance, segments, labels, and references on the map.", "Distanza, segmenti, etichette e riferimenti sulla mappa.", "Distance, segments, etiquettes et reperes sur la carte.", "Distancia, segmentos, etiquetas e referencias no mapa."],
    ["Dibujo", "Drawing", "Disegno", "Dessin", "Desenho"],
    ["Líneas, polígonos, zonas, anotaciones y símbolos operativos.", "Lines, polygons, areas, annotations, and operational symbols.", "Linee, poligoni, zone, annotazioni e simboli operativi.", "Lignes, polygones, zones, annotations et symboles operationnels.", "Linhas, poligonos, zonas, anotacoes e simbolos operacionais."],
    ["Ecosistema TAK", "TAK ecosystem", "Ecosistema TAK", "Ecosysteme TAK", "Ecossistema TAK"],
    ["Conexión", "Connection", "Connessione", "Connexion", "Ligacao"],
    ["Preparado para integrarse con flujos TAK y servidores TAK compatibles.", "Ready to integrate with TAK workflows and compatible TAK servers.", "Pronto a integrarsi con flussi TAK e server TAK compatibili.", "Pret a s'integrer aux flux TAK et aux serveurs TAK compatibles.", "Preparado para integrar fluxos TAK e servidores TAK compativeis."],
    ["Eventos", "Events", "Eventi", "Evenements", "Eventos"],
    ["Intercambio táctico basado en entidades, posiciones, rutas y marcadores.", "Tactical exchange based on entities, positions, routes, and markers.", "Scambio tattico basato su entita, posizioni, rotte e marcatori.", "Echange tactique base sur entites, positions, itineraires et marqueurs.", "Intercambio tatico baseado em entidades, posicoes, rotas e marcadores."],
    ["Datos", "Data", "Dati", "Donnees", "Dados"],
    ["Paquetes de datos para compartir contexto operativo de forma estructurada.", "Data packages for sharing operational context in a structured way.", "Pacchetti dati per condividere il contesto operativo in modo strutturato.", "Paquets de donnees pour partager le contexte operationnel de facon structuree.", "Pacotes de dados para partilhar contexto operacional de forma estruturada."],
    ["Operación", "Operation", "Operazione", "Operation", "Operacao"],
    ["Orientado a coordinación entre usuarios, contactos y elementos conectados.", "Oriented toward coordination between users, contacts, and connected elements.", "Orientato al coordinamento tra utenti, contatti ed elementi connessi.", "Oriente vers la coordination entre utilisateurs, contacts et elements connectes.", "Orientado para coordenacao entre utilizadores, contactos e elementos ligados."],
    ["Misiones y datos", "Missions and data", "Missioni e dati", "Missions et donnees", "Missoes e dados"],
    ["Misiones", "Missions", "Missioni", "Missions", "Missoes"],
    ["Agrupación de capas, rutas, waypoints, contactos, dibujos y recursos.", "Grouping of layers, routes, waypoints, contacts, drawings, and resources.", "Raggruppamento di livelli, rotte, waypoint, contatti, disegni e risorse.", "Regroupement de couches, itineraires, waypoints, contacts, dessins et ressources.", "Agrupamento de camadas, rotas, waypoints, contactos, desenhos e recursos."],
    ["Exportación", "Export", "Esportazione", "Exportation", "Exportacao"],
    ["Paquetes comprimidos para intercambio y respaldo operativo.", "Compressed packages for exchange and operational backup.", "Pacchetti compressi per scambio e backup operativo.", "Paquets compresses pour echange et sauvegarde operationnelle.", "Pacotes comprimidos para intercambio e copia operacional."],
    ["Importación", "Import", "Importazione", "Importation", "Importacao"],
    ["Archivos locales, recursos compartidos y datos preparados por misión.", "Local files, shared resources, and mission-ready data.", "File locali, risorse condivise e dati preparati per missione.", "Fichiers locaux, ressources partagees et donnees preparees par mission.", "Ficheiros locais, recursos partilhados e dados preparados por missao."],
    ["Organización", "Organization", "Organizzazione", "Organisation", "Organizacao"],
    ["Separación por operación para mantener contexto y trazabilidad.", "Separation by operation to preserve context and traceability.", "Separazione per operazione per mantenere contesto e tracciabilita.", "Separation par operation pour conserver contexte et tracabilite.", "Separacao por operacao para manter contexto e rastreabilidade."],
    ["Vídeo, chat y contactos", "Video, chat, and contacts", "Video, chat e contatti", "Video, chat et contacts", "Video, chat e contactos"],
    ["Capturas verticales, archivos MP4 y enlaces externos según despliegue.", "Vertical captures, MP4 files, and external links depending on deployment.", "Acquisizioni verticali, file MP4 e link esterni in base al deployment.", "Captures verticales, fichiers MP4 et liens externes selon le deploiement.", "Capturas verticais, ficheiros MP4 e links externos conforme o lancamento."],
    ["Mensajería operativa asociada al entorno de misión.", "Operational messaging associated with the mission environment.", "Messaggistica operativa associata all'ambiente di missione.", "Messagerie operationnelle associee a l'environnement de mission.", "Mensagens operacionais associadas ao ambiente de missao."],
    ["Gestión de usuarios, equipos y elementos conectados.", "Management of users, teams, and connected elements.", "Gestione di utenti, team ed elementi connessi.", "Gestion des utilisateurs, equipes et elements connectes.", "Gestao de utilizadores, equipas e elementos ligados."],
    ["Estado", "Status", "Stato", "Statut", "Estado"],
    ["Indicadores de conexión y última posición reportada.", "Connection indicators and last reported position.", "Indicatori di connessione e ultima posizione segnalata.", "Indicateurs de connexion et derniere position signalee.", "Indicadores de ligacao e ultima posicao reportada."],
    ["Plataformas", "Platforms", "Piattaforme", "Plateformes", "Plataformas"],
    ["Dispositivos", "Devices", "Dispositivi", "Appareils", "Dispositivos"],
    ["iPhone e iPad.", "iPhone and iPad.", "iPhone e iPad.", "iPhone et iPad.", "iPhone e iPad."],
    ["Sistema", "System", "Sistema", "Systeme", "Sistema"],
    ["iOS/iPadOS, con permisos de ubicación según uso operativo.", "iOS/iPadOS, with location permissions according to operational use.", "iOS/iPadOS, con permessi di posizione in base all'uso operativo.", "iOS/iPadOS, avec autorisations de localisation selon l'usage operationnel.", "iOS/iPadOS, com permissoes de localizacao conforme o uso operacional."],
    ["Uso en campo", "Field use", "Uso sul campo", "Utilisation sur le terrain", "Uso no terreno"],
    ["Interfaz táctil para consulta rápida, medición y edición sobre mapa.", "Touch interface for quick lookup, measurement, and editing on the map.", "Interfaccia touch per consultazione rapida, misurazione e modifica sulla mappa.", "Interface tactile pour consultation rapide, mesure et edition sur la carte.", "Interface tatil para consulta rapida, medicao e edicao no mapa."],
    ["Despliegue", "Deployment", "Distribuzione", "Deploiement", "Lancamento"],
    ["Preparada para App Store y distribución según perfil operativo.", "Prepared for App Store and distribution according to the operational profile.", "Preparata per App Store e distribuzione secondo il profilo operativo.", "Preparee pour l'App Store et la distribution selon le profil operationnel.", "Preparada para App Store e distribuicao conforme o perfil operacional."],
    ["Documentación técnica", "Technical documentation", "Documentazione tecnica", "Documentation technique", "Documentacao tecnica"],
    ["Formatos y compatibilidad preparados para operación real", "Formats and compatibility ready for real operations", "Formati e compatibilita pronti per operazioni reali", "Formats et compatibilite prets pour une operation reelle", "Formatos e compatibilidade preparados para operacao real"],
    ["Volver a la landing", "Back to the landing page", "Torna alla landing", "Retour a la landing page", "Voltar a landing"],

    ["Tutoriales completos | Centinela: Navegación Táctica", "Complete tutorials | Centinela: Tactical Navigation", "Tutorial completi | Centinela: Navigazione tattica", "Tutoriels complets | Centinela : navigation tactique", "Tutoriais completos | Centinela: Navegacao tatica"],
    ["Videotutoriales de Centinela para waypoints, mapas RMAP, mapas offline, rutas, misiones, servidor y herramientas de navegación táctica.", "Centinela video tutorials for waypoints, RMAP maps, offline maps, routes, missions, server, and tactical navigation tools.", "Videotutorial di Centinela per waypoint, mappe RMAP, mappe offline, rotte, missioni, server e strumenti di navigazione tattica.", "Tutoriels video de Centinela pour waypoints, cartes RMAP, cartes hors ligne, itineraires, missions, serveur et outils de navigation tactique.", "Videotutoriais do Centinela para waypoints, mapas RMAP, mapas offline, rotas, missoes, servidor e ferramentas de navegacao tatica."],
    ["Tutoriales completos de Centinela", "Complete Centinela tutorials", "Tutorial completi di Centinela", "Tutoriels complets de Centinela", "Tutoriais completos do Centinela"],
    ["Videotutoriales para aprender a usar mapas, waypoints, rutas, misiones y servidor en Centinela.", "Video tutorials for learning to use maps, waypoints, routes, missions, and server in Centinela.", "Videotutorial per imparare a usare mappe, waypoint, rotte, missioni e server in Centinela.", "Tutoriels video pour apprendre a utiliser cartes, waypoints, itineraires, missions et serveur dans Centinela.", "Videotutoriais para aprender a usar mapas, waypoints, rotas, missoes e servidor no Centinela."],
    ["Centro de tutoriales", "Tutorial center", "Centro tutorial", "Centre de tutoriels", "Centro de tutoriais"],
    ["Tutoriales completos", "Complete tutorials", "Tutorial completi", "Tutoriels complets", "Tutoriais completos"],
    ["Pulsa un tutorial y el vídeo aparecerá en el iPhone.", "Tap a tutorial and the video will appear on the iPhone.", "Tocca un tutorial e il video apparira sull'iPhone.", "Touchez un tutoriel et la video apparaitra dans l'iPhone.", "Toque num tutorial e o video aparecera no iPhone."],
    ["Crear un waypoint sobre el mapa", "Create a waypoint on the map", "Crea un waypoint sulla mappa", "Creer un waypoint sur la carte", "Criar um waypoint no mapa"],
    ["Marca un punto directamente sobre el mapa.", "Mark a point directly on the map.", "Segna un punto direttamente sulla mappa.", "Marquez un point directement sur la carte.", "Marque um ponto diretamente no mapa."],
    ["Crear waypoint sobre el mapa", "Create waypoint on the map", "Crea waypoint sulla mappa", "Creer un waypoint sur la carte", "Criar waypoint no mapa"],
    ["Desde el mapa.", "From the map.", "Dalla mappa.", "Depuis la carte.", "A partir do mapa."],
    ["Ver vídeo", "Watch video", "Guarda video", "Voir la video", "Ver video"],
    ["Agregar waypoint por coordenadas", "Add waypoint by coordinates", "Aggiungi waypoint per coordinate", "Ajouter un waypoint par coordonnees", "Adicionar waypoint por coordenadas"],
    ["Introduce coordenadas manualmente para crear un punto exacto.", "Enter coordinates manually to create an exact point.", "Inserisci manualmente le coordinate per creare un punto esatto.", "Saisissez les coordonnees manuellement pour creer un point exact.", "Introduza coordenadas manualmente para criar um ponto exato."],
    ["Waypoint por coordenadas", "Waypoint by coordinates", "Waypoint per coordinate", "Waypoint par coordonnees", "Waypoint por coordenadas"],
    ["Latitud, longitud y nombre.", "Latitude, longitude, and name.", "Latitudine, longitudine e nome.", "Latitude, longitude et nom.", "Latitude, longitude e nome."],
    ["Agregar waypoints por archivo", "Add waypoints by file", "Aggiungi waypoint da file", "Ajouter des waypoints par fichier", "Adicionar waypoints por ficheiro"],
    ["Importa puntos desde un archivo compatible.", "Import points from a compatible file.", "Importa punti da un file compatibile.", "Importez des points depuis un fichier compatible.", "Importe pontos de um ficheiro compativel."],
    ["Waypoints por archivo", "Waypoints by file", "Waypoint da file", "Waypoints par fichier", "Waypoints por ficheiro"],
    ["Importación de puntos.", "Point import.", "Importazione punti.", "Importation de points.", "Importacao de pontos."],
    ["Crear lista de waypoints", "Create waypoint list", "Crea lista di waypoint", "Creer une liste de waypoints", "Criar lista de waypoints"],
    ["Organiza puntos en listas para cada misión o zona.", "Organize points into lists for each mission or area.", "Organizza i punti in liste per ogni missione o zona.", "Organisez les points en listes pour chaque mission ou zone.", "Organize pontos em listas para cada missao ou zona."],
    ["Lista de waypoints", "Waypoint list", "Lista waypoint", "Liste de waypoints", "Lista de waypoints"],
    ["Ordena tus puntos.", "Organize your points.", "Ordina i tuoi punti.", "Organisez vos points.", "Ordene os seus pontos."],
    ["Mandar waypoint al servidor", "Send waypoint to the server", "Invia waypoint al server", "Envoyer le waypoint au serveur", "Enviar waypoint para o servidor"],
    ["Comparte un waypoint con el servidor configurado.", "Share a waypoint with the configured server.", "Condividi un waypoint con il server configurato.", "Partagez un waypoint avec le serveur configure.", "Partilhe um waypoint com o servidor configurado."],
    ["Sincroniza el punto.", "Sync the point.", "Sincronizza il punto.", "Synchronisez le point.", "Sincronize o ponto."],
    ["Vídeo del tutorial seleccionado", "Selected tutorial video", "Video del tutorial selezionato", "Video du tutoriel selectionne", "Video do tutorial selecionado"],
    ["Importar mapa RMAP", "Import RMAP map", "Importa mappa RMAP", "Importer une carte RMAP", "Importar mapa RMAP"],
    ["Carga un mapa RMAP para usarlo en Centinela.", "Load an RMAP map to use it in Centinela.", "Carica una mappa RMAP per usarla in Centinela.", "Chargez une carte RMAP pour l'utiliser dans Centinela.", "Carregue um mapa RMAP para o usar no Centinela."],
    ["Mapas preparados.", "Prepared maps.", "Mappe preparate.", "Cartes preparees.", "Mapas preparados."],
    ["Descargar mapa offline", "Download offline map", "Scarica mappa offline", "Telecharger une carte hors ligne", "Transferir mapa offline"],
    ["Prepara una zona para consultarla sin conexión.", "Prepare an area to consult it without connection.", "Prepara una zona per consultarla senza connessione.", "Preparez une zone pour la consulter sans connexion.", "Prepare uma zona para consulta-la sem ligacao."],
    ["Trabajo sin cobertura.", "Work without coverage.", "Lavoro senza copertura.", "Travail sans couverture.", "Trabalho sem cobertura."],
    ["Usar capas de mapa", "Use map layers", "Usa livelli mappa", "Utiliser les couches de carte", "Usar camadas de mapa"],
    ["Activa y ordena capas según la información que necesites.", "Activate and order layers according to the information you need.", "Attiva e ordina i livelli in base alle informazioni che ti servono.", "Activez et organisez les couches selon les informations dont vous avez besoin.", "Ative e ordene camadas conforme a informacao de que precisa."],
    ["Capas de mapa", "Map layers", "Livelli mappa", "Couches de carte", "Camadas de mapa"],
    ["Control visual del terreno.", "Visual control of the terrain.", "Controllo visivo del terreno.", "Controle visuel du terrain.", "Controlo visual do terreno."],
    ["Grabar una ruta", "Record a route", "Registra una rotta", "Enregistrer un itineraire", "Gravar uma rota"],
    ["Registra un desplazamiento y guárdalo como ruta.", "Record a movement and save it as a route.", "Registra uno spostamento e salvalo come rotta.", "Enregistrez un deplacement et sauvegardez-le comme itineraire.", "Registe um deslocamento e guarde-o como rota."],
    ["Recorrido en tiempo real.", "Real-time track.", "Percorso in tempo reale.", "Parcours en temps reel.", "Percurso em tempo real."],
    ["Crear una misión", "Create a mission", "Crea una missione", "Creer une mission", "Criar uma missao"],
    ["Agrupa mapas, rutas, waypoints y contactos en una misión.", "Group maps, routes, waypoints, and contacts in a mission.", "Raggruppa mappe, rotte, waypoint e contatti in una missione.", "Regroupez cartes, itineraires, waypoints et contacts dans une mission.", "Agrupe mapas, rotas, waypoints e contactos numa missao."],
    ["Todo en un contexto.", "Everything in one context.", "Tutto in un contesto.", "Tout dans un contexte.", "Tudo num contexto."],

    ["Política de privacidad | Centinela: Navegación Táctica", "Privacy policy | Centinela: Tactical Navigation", "Informativa sulla privacy | Centinela: Navigazione tattica", "Politique de confidentialite | Centinela : navigation tactique", "Politica de privacidade | Centinela: Navegacao tatica"],
    ["Política de privacidad de Centinela: Navegación Táctica para App Store, datos de ubicación, mapas, misiones, servidor y contacto.", "Privacy policy for Centinela: Tactical Navigation covering App Store, location data, maps, missions, server, and contact.", "Informativa sulla privacy di Centinela: Navigazione tattica per App Store, dati di posizione, mappe, missioni, server e contatti.", "Politique de confidentialite de Centinela : navigation tactique pour App Store, donnees de localisation, cartes, missions, serveur et contact.", "Politica de privacidade do Centinela: Navegacao tatica para App Store, dados de localizacao, mapas, missoes, servidor e contacto."],
    ["Política de privacidad de Centinela", "Centinela privacy policy", "Informativa sulla privacy di Centinela", "Politique de confidentialite de Centinela", "Politica de privacidade do Centinela"],
    ["Información sobre tratamiento de datos, permisos y privacidad en Centinela.", "Information about data processing, permissions, and privacy in Centinela.", "Informazioni sul trattamento dei dati, permessi e privacy in Centinela.", "Informations sur le traitement des donnees, les autorisations et la confidentialite dans Centinela.", "Informacao sobre tratamento de dados, permissoes e privacidade no Centinela."],
    ["Política de privacidad", "Privacy policy", "Informativa sulla privacy", "Politique de confidentialite", "Politica de privacidade"],
    ["Información sobre los datos que puede tratar Centinela, los permisos del dispositivo y el uso de funciones conectadas.", "Information about the data Centinela may process, device permissions, and the use of connected features.", "Informazioni sui dati che Centinela puo trattare, sui permessi del dispositivo e sull'uso delle funzioni connesse.", "Informations sur les donnees que Centinela peut traiter, les autorisations de l'appareil et l'utilisation des fonctions connectees.", "Informacao sobre os dados que o Centinela pode tratar, as permissoes do dispositivo e a utilizacao de funcionalidades ligadas."],
    ["Última actualización: 21 de mayo de 2026", "Last updated: May 21, 2026", "Ultimo aggiornamento: 21 maggio 2026", "Derniere mise a jour : 21 mai 2026", "Ultima atualizacao: 21 de maio de 2026"],
    ["Responsable", "Controller", "Titolare", "Responsable", "Responsavel"],
    ["Esta política se aplica a la app Centinela: Navegación Táctica y a esta web. Antes de publicar la app, sustituye el correo de contacto por el correo oficial del desarrollador o empresa responsable.", "This policy applies to the Centinela: Tactical Navigation app and this website. Before publishing the app, replace the contact email with the official email of the responsible developer or company.", "Questa informativa si applica all'app Centinela: Navigazione tattica e a questo sito web. Prima di pubblicare l'app, sostituisci l'email di contatto con l'email ufficiale dello sviluppatore o dell'azienda responsabile.", "Cette politique s'applique a l'app Centinela : navigation tactique et a ce site web. Avant de publier l'app, remplacez l'adresse de contact par l'adresse officielle du developpeur ou de l'entreprise responsable.", "Esta politica aplica-se a app Centinela: Navegacao tatica e a este site. Antes de publicar a app, substitua o email de contacto pelo email oficial do programador ou da empresa responsavel."],
    ["Contacto:", "Contact:", "Contatto:", "Contact :", "Contacto:"],
    ["Datos que puede usar la app", "Data the app may use", "Dati che l'app puo usare", "Donnees que l'app peut utiliser", "Dados que a app pode usar"],
    ["Centinela puede solicitar permisos del dispositivo para ofrecer sus funciones de navegación, planificación y coordinación. Según las funciones activadas por el usuario, la app puede tratar:", "Centinela may request device permissions to provide its navigation, planning, and coordination features. Depending on the features enabled by the user, the app may process:", "Centinela puo richiedere permessi del dispositivo per offrire le sue funzioni di navigazione, pianificazione e coordinamento. In base alle funzioni attivate dall'utente, l'app puo trattare:", "Centinela peut demander des autorisations de l'appareil pour fournir ses fonctions de navigation, planification et coordination. Selon les fonctions activees par l'utilisateur, l'app peut traiter :", "O Centinela pode solicitar permissoes do dispositivo para oferecer as suas funcoes de navegacao, planeamento e coordenacao. Conforme as funcionalidades ativadas pelo utilizador, a app pode tratar:"],
    ["Ubicación aproximada o precisa para mostrar la posición en el mapa, grabar rutas y crear referencias.", "Approximate or precise location to show position on the map, record routes, and create references.", "Posizione approssimativa o precisa per mostrare la posizione sulla mappa, registrare rotte e creare riferimenti.", "Localisation approximative ou precise pour afficher la position sur la carte, enregistrer des itineraires et creer des reperes.", "Localizacao aproximada ou precisa para mostrar a posicao no mapa, gravar rotas e criar referencias."],
    ["Waypoints, rutas, mapas, dibujos, misiones y paquetes de datos creados o importados por el usuario.", "Waypoints, routes, maps, drawings, missions, and data packages created or imported by the user.", "Waypoint, rotte, mappe, disegni, missioni e pacchetti dati creati o importati dall'utente.", "Waypoints, itineraires, cartes, dessins, missions et paquets de donnees crees ou importes par l'utilisateur.", "Waypoints, rotas, mapas, desenhos, missoes e pacotes de dados criados ou importados pelo utilizador."],
    ["Archivos seleccionados por el usuario para importar mapas, rutas o información operativa.", "Files selected by the user to import maps, routes, or operational information.", "File selezionati dall'utente per importare mappe, rotte o informazioni operative.", "Fichiers selectionnes par l'utilisateur pour importer des cartes, itineraires ou informations operationnelles.", "Ficheiros selecionados pelo utilizador para importar mapas, rotas ou informacao operacional."],
    ["Datos técnicos necesarios para conexión con servidores configurados por el usuario o la organización.", "Technical data needed to connect with servers configured by the user or organization.", "Dati tecnici necessari per la connessione a server configurati dall'utente o dall'organizzazione.", "Donnees techniques necessaires a la connexion avec des serveurs configures par l'utilisateur ou l'organisation.", "Dados tecnicos necessarios para ligacao a servidores configurados pelo utilizador ou pela organizacao."],
    ["Finalidad del uso de datos", "Purpose of data use", "Finalita dell'uso dei dati", "Finalite de l'utilisation des donnees", "Finalidade da utilizacao dos dados"],
    ["Los datos se usan para mostrar mapas, guardar rutas, gestionar waypoints, organizar misiones, preparar paquetes de datos y sincronizar información cuando el usuario decide conectar la app a un servidor compatible.", "The data is used to display maps, save routes, manage waypoints, organize missions, prepare data packages, and synchronize information when the user decides to connect the app to a compatible server.", "I dati vengono usati per mostrare mappe, salvare rotte, gestire waypoint, organizzare missioni, preparare pacchetti dati e sincronizzare informazioni quando l'utente decide di collegare l'app a un server compatibile.", "Les donnees sont utilisees pour afficher des cartes, sauvegarder des itineraires, gerer des waypoints, organiser des missions, preparer des paquets de donnees et synchroniser des informations lorsque l'utilisateur decide de connecter l'app a un serveur compatible.", "Os dados sao usados para mostrar mapas, guardar rotas, gerir waypoints, organizar missoes, preparar pacotes de dados e sincronizar informacao quando o utilizador decide ligar a app a um servidor compativel."],
    ["Centinela no vende datos personales ni utiliza datos de la app para publicidad personalizada.", "Centinela does not sell personal data or use app data for personalized advertising.", "Centinela non vende dati personali ne utilizza dati dell'app per pubblicita personalizzata.", "Centinela ne vend pas de donnees personnelles et n'utilise pas les donnees de l'app pour de la publicite personnalisee.", "O Centinela nao vende dados pessoais nem utiliza dados da app para publicidade personalizada."],
    ["Ubicación", "Location", "Posizione", "Localisation", "Localizacao"],
    ["El acceso a la ubicación se usa para funciones de mapa, navegación, grabación de rutas y creación de puntos. El usuario puede permitir, limitar o retirar este permiso desde los ajustes de iOS o iPadOS.", "Location access is used for map, navigation, route recording, and point creation features. The user can allow, limit, or revoke this permission from iOS or iPadOS settings.", "L'accesso alla posizione viene usato per funzioni di mappa, navigazione, registrazione rotte e creazione di punti. L'utente puo consentire, limitare o revocare questo permesso dalle impostazioni di iOS o iPadOS.", "L'acces a la localisation est utilise pour les fonctions de carte, navigation, enregistrement d'itineraires et creation de points. L'utilisateur peut autoriser, limiter ou retirer cette autorisation depuis les reglages iOS ou iPadOS.", "O acesso a localizacao e usado para funcoes de mapa, navegacao, gravacao de rotas e criacao de pontos. O utilizador pode permitir, limitar ou retirar esta permissao nas definicoes do iOS ou iPadOS."],
    ["Sincronización y servidores", "Synchronization and servers", "Sincronizzazione e server", "Synchronisation et serveurs", "Sincronizacao e servidores"],
    ["Si el usuario configura un servidor, la información seleccionada para sincronizar puede transmitirse a ese servidor. La disponibilidad, seguridad y tratamiento de los datos en servidores externos dependerá de la configuración y del responsable de ese entorno.", "If the user configures a server, the information selected for synchronization may be transmitted to that server. Availability, security, and processing of data on external servers will depend on the configuration and the party responsible for that environment.", "Se l'utente configura un server, le informazioni selezionate per la sincronizzazione possono essere trasmesse a quel server. Disponibilita, sicurezza e trattamento dei dati su server esterni dipenderanno dalla configurazione e dal responsabile di quell'ambiente.", "Si l'utilisateur configure un serveur, les informations selectionnees pour la synchronisation peuvent etre transmises a ce serveur. La disponibilite, la securite et le traitement des donnees sur des serveurs externes dependront de la configuration et du responsable de cet environnement.", "Se o utilizador configurar um servidor, a informacao selecionada para sincronizacao pode ser transmitida para esse servidor. A disponibilidade, seguranca e tratamento dos dados em servidores externos dependerao da configuracao e do responsavel por esse ambiente."],
    ["Conservación y control", "Retention and control", "Conservazione e controllo", "Conservation et controle", "Conservacao e controlo"],
    ["Los datos creados en la app pueden conservarse en el dispositivo hasta que el usuario los elimine, desinstale la app o borre los archivos asociados. Los datos enviados a servidores externos deberán gestionarse desde el servidor o la organización que los administre.", "Data created in the app may remain on the device until the user deletes it, uninstalls the app, or removes the associated files. Data sent to external servers must be managed from the server or organization that administers it.", "I dati creati nell'app possono rimanere sul dispositivo finche l'utente non li elimina, disinstalla l'app o cancella i file associati. I dati inviati a server esterni dovranno essere gestiti dal server o dall'organizzazione che li amministra.", "Les donnees creees dans l'app peuvent etre conservees sur l'appareil jusqu'a ce que l'utilisateur les supprime, desinstalle l'app ou efface les fichiers associes. Les donnees envoyees a des serveurs externes devront etre gerees depuis le serveur ou l'organisation qui les administre.", "Os dados criados na app podem permanecer no dispositivo ate que o utilizador os elimine, desinstale a app ou apague os ficheiros associados. Os dados enviados para servidores externos devem ser geridos a partir do servidor ou da organizacao que os administra."],
    ["Terceros", "Third parties", "Terze parti", "Tiers", "Terceiros"],
    ["La app puede usar servicios del sistema operativo, mapas o conexiones configuradas por el usuario. Si en el futuro se añaden analíticas, crash reporting, publicidad, cuentas de usuario u otros SDK de terceros, esta política deberá actualizarse antes de publicar esa versión.", "The app may use operating system services, maps, or connections configured by the user. If analytics, crash reporting, advertising, user accounts, or other third-party SDKs are added in the future, this policy must be updated before publishing that version.", "L'app puo usare servizi del sistema operativo, mappe o connessioni configurate dall'utente. Se in futuro verranno aggiunti analytics, crash reporting, pubblicita, account utente o altri SDK di terze parti, questa informativa dovra essere aggiornata prima di pubblicare quella versione.", "L'app peut utiliser des services du systeme d'exploitation, des cartes ou des connexions configurees par l'utilisateur. Si des outils d'analyse, crash reporting, publicite, comptes utilisateur ou autres SDK tiers sont ajoutes a l'avenir, cette politique devra etre mise a jour avant de publier cette version.", "A app pode usar servicos do sistema operativo, mapas ou ligacoes configuradas pelo utilizador. Se no futuro forem adicionados analitica, relatorios de falhas, publicidade, contas de utilizador ou outros SDK de terceiros, esta politica devera ser atualizada antes de publicar essa versao."],
    ["Política de cookies", "Cookie policy", "Politica sui cookie", "Politique de cookies", "Politica de cookies"],
    ["Esta web utiliza cookies técnicas o almacenamiento local estrictamente necesario para recordar la preferencia sobre el aviso de cookies y mantener el funcionamiento básico de la página.", "This website uses technical cookies or strictly necessary local storage to remember the cookie notice preference and maintain the basic functioning of the page.", "Questo sito usa cookie tecnici o archiviazione locale strettamente necessaria per ricordare la preferenza sull'avviso cookie e mantenere il funzionamento di base della pagina.", "Ce site utilise des cookies techniques ou un stockage local strictement necessaire pour memoriser la preference relative a l'avis de cookies et assurer le fonctionnement de base de la page.", "Este site utiliza cookies tecnicos ou armazenamento local estritamente necessario para recordar a preferencia sobre o aviso de cookies e manter o funcionamento basico da pagina."],
    ["Actualmente no se usan cookies de publicidad, analítica personalizada ni seguimiento de terceros. Si en el futuro se incorporan servicios que instalen cookies adicionales, esta política se actualizará antes de activarlos.", "Advertising cookies, personalized analytics cookies, and third-party tracking cookies are not currently used. If services that install additional cookies are added in the future, this policy will be updated before they are activated.", "Attualmente non vengono usati cookie pubblicitari, analytics personalizzati o tracciamento di terze parti. Se in futuro verranno integrati servizi che installano cookie aggiuntivi, questa politica sara aggiornata prima della loro attivazione.", "Aucun cookie publicitaire, d'analyse personnalisee ni de suivi tiers n'est actuellement utilise. Si des services installant des cookies supplementaires sont ajoutes a l'avenir, cette politique sera mise a jour avant leur activation.", "Atualmente nao sao usados cookies de publicidade, analitica personalizada nem rastreamento de terceiros. Se no futuro forem incorporados servicos que instalem cookies adicionais, esta politica sera atualizada antes da sua ativacao."],
    ["Puedes borrar o bloquear las cookies y el almacenamiento local desde la configuración de tu navegador. Si lo haces, es posible que el aviso vuelva a aparecer.", "You can delete or block cookies and local storage from your browser settings. If you do, the notice may appear again.", "Puoi eliminare o bloccare cookie e archiviazione locale dalle impostazioni del browser. In tal caso, l'avviso potrebbe apparire di nuovo.", "Vous pouvez supprimer ou bloquer les cookies et le stockage local depuis les parametres de votre navigateur. Dans ce cas, l'avis peut reapparaitre.", "Pode apagar ou bloquear cookies e armazenamento local nas definicoes do navegador. Se o fizer, o aviso podera voltar a aparecer."],
    ["Derechos y contacto", "Rights and contact", "Diritti e contatto", "Droits et contact", "Direitos e contacto"],
    ["Para consultas sobre privacidad, acceso, rectificación o eliminación de datos, escribe a", "For privacy, access, rectification, or data deletion requests, write to", "Per richieste su privacy, accesso, rettifica o eliminazione dei dati, scrivi a", "Pour les demandes relatives a la confidentialite, l'acces, la rectification ou la suppression des donnees, ecrivez a", "Para pedidos sobre privacidade, acesso, retificacao ou eliminacao de dados, escreva para"],
    [". Incluye una descripción clara de la solicitud y el contexto de uso de la app.", ". Include a clear description of the request and the app usage context.", ". Includi una descrizione chiara della richiesta e del contesto d'uso dell'app.", ". Incluez une description claire de la demande et du contexte d'utilisation de l'app.", ". Inclua uma descricao clara do pedido e do contexto de utilizacao da app."],
    ["Nota para publicación", "Publication note", "Nota per la pubblicazione", "Note de publication", "Nota para publicacao"],
    ["Antes de enviar la app a revisión, revisa esta página para que coincida exactamente con los datos declarados en App Store Connect y con los permisos reales de la app.", "Before submitting the app for review, check this page so it exactly matches the data declared in App Store Connect and the app's real permissions.", "Prima di inviare l'app in revisione, controlla questa pagina affinche corrisponda esattamente ai dati dichiarati in App Store Connect e ai permessi reali dell'app.", "Avant de soumettre l'app a l'examen, verifiez cette page afin qu'elle corresponde exactement aux donnees declarees dans App Store Connect et aux autorisations reelles de l'app.", "Antes de enviar a app para revisao, confirme esta pagina para que corresponda exatamente aos dados declarados no App Store Connect e as permissoes reais da app."],

    ["Aviso de cookies", "Cookie notice", "Avviso cookie", "Avis de cookies", "Aviso de cookies"],
    ["Utilizamos cookies técnicas o almacenamiento local para recordar tus preferencias y mejorar el funcionamiento básico de la web.", "We use technical cookies or local storage to remember your preferences and improve the basic functioning of the website.", "Usiamo cookie tecnici o archiviazione locale per ricordare le tue preferenze e migliorare il funzionamento di base del sito.", "Nous utilisons des cookies techniques ou le stockage local pour memoriser vos preferences et ameliorer le fonctionnement de base du site.", "Utilizamos cookies tecnicos ou armazenamento local para recordar as suas preferencias e melhorar o funcionamento basico do site."],
    ["Aceptar", "Accept", "Accetta", "Accepter", "Aceitar"],
    ["Más información", "More information", "Maggiori informazioni", "Plus d'informations", "Mais informacao"],
    ["Reproducir", "Play", "Riproduci", "Lire", "Reproduzir"],
    ["Sustituye este enlace por un vídeo vertical real.", "Replace this link with a real vertical video.", "Sostituisci questo link con un video verticale reale.", "Remplacez ce lien par une vraie video verticale.", "Substitua este link por um video vertical real."]
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

  function detectLanguage() {
    const forcedLanguage = new URLSearchParams(window.location.search).get("lang");
    if (["en", "it", "fr", "pt", "es"].includes(forcedLanguage)) {
      return forcedLanguage;
    }

    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const language of languages) {
      const code = String(language || "").slice(0, 2).toLowerCase();
      if (code === "en" || code === "it" || code === "fr" || code === "pt") return code;
      if (code === "es") return "es";
    }
    return "es";
  }

  function translate(text, language = currentLanguage) {
    const key = normalize(text);
    if (!key || language === "es") return text;
    return dictionaries[language]?.[key] || text;
  }

  function replaceTextNode(node, language) {
    const original = node.nodeValue;
    const key = normalize(original);
    const translated = translate(key, language);
    if (translated === key) return;

    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  }

  function translateAttributes(language) {
    const attributes = ["aria-label", "alt", "title", "data-title", "data-description", "content"];
    document.querySelectorAll("*").forEach((element) => {
      attributes.forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const original = element.getAttribute(attribute);
        const translated = translate(original, language);
        if (translated !== original) {
          element.setAttribute(attribute, translated);
        }
      });
    });
  }

  function translateTextNodes(language) {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        },
      }
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => replaceTextNode(node, language));
  }

  function applyLanguage(language = currentLanguage) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = translate(document.title, language);

    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.setAttribute("content", localeMap[language] || localeMap.es);

    translateAttributes(language);
    translateTextNodes(language);
  }

  let currentLanguage = detectLanguage();
  applyLanguage(currentLanguage);

  window.centinelaI18n = {
    applyLanguage,
    language: currentLanguage,
    t: (text) => translate(text, currentLanguage),
  };
})();
