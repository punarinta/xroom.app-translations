module.exports = {
  self: 'xroom',
  title: 'Din säkra arbetsplattform',
  goToDash: 'Gå till dashboard',
  netStatus: 'Ansluten',
  buttons: {
    ok: 'Okej',
    cancel: 'Avbryt',
    yes: 'Ja',
    no: 'Nej',
    chN: 'Val %s',
    install: 'Lägg till',
    uninstall: 'Ta bort',
    details: 'Visa detaljer',
    close: 'Stäng',
    next: 'Nästa',
    back: 'Bakåt',
    retry: 'Försök igen',
    dismiss: 'Avfärda',
    allow: 'Tillåt',
    stop: 'Stopp',
  },
  mbox: {
    protoExpired: 'Denna klientversion är för gammal. Vänligen tryck på Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 för att uppdatera sidan. Om detta meddelande finns kvar, vänligen rensa din webläsares cache manuellt.',
    areYouSure: 'Är du säker?',
    noPermission: 'Kan inte hämta behörigheter från din webläsare. Vänligen se till att dessa inte är blockerade.',
    mediaBlocked: 'Kameraåtkomst är blockerad. Vänligen se till att du inte använder webkameran i en annan webläsare eller program.',
    mediaError: 'Vi kunde inte identifiera problemet, men något är fel. Vänligen dubellkolla dina webläsarbehörigheter.',
    whatIsYourName: 'Vad heter du?',
    noPeers: 'Meddelanden skickas inte genom xroom.apps servrar och kan inte levereras efter att nya gäster ansluter. Vänligen vänta tills någon ansluter till rummet för att kunna skicka meddelanden. ',
    password: 'Ange lösenord till rummet',
    roomLocked: 'Rummet är låst. Vill du knacka för att kunna bli insläppt?',
    roomProtected: 'Rummet är lösenordsskyddat. Ange lösenordet nedan.',
    roomIsFull: 'Rummet är fullt. Du kan inte delta.',
    alreadyHosted: 'Du är redan i rummet. Du har antagligen uppe flera webflikar samtidigt med samma rum. Vill du ansluta till rummet? Hostfunktioner kanske inte fungerar här.',
    youAreKicked: 'Du har blivit borttagen från rummet .',
    setQFailed: 'Det gick inte att ställa in den begärda kvaliteten. Din hårdvara eller webläsare kanske inte stöder detta.',
    bookingEnded: 'Denna bokning är nu över. Rummet är bokat för ett annat event, du omdirigeras nu till ett annat rum för att kunna avsluta ditt möte.',
    bookingEndedHost: 'Nuvarande bokning för rummet är snart över. Ett val måste nu göras då en annan bokning har schemalagts med samma rumsnamn .<br/><br/>1. Gå till ett nytt möte. Vi kommer skicka dig till dashboarden för att ansluta till mötet med en ny hostnyckel.<br/><br/>2. Stanna kvar i mötet. Vi kommer skapa ett nytt rum där du kan avsluta ditt samtal.',
    pluginsLoadFailed: 'Plugins kunde inte laddas',
    roomDestroyed: 'Rummet är borttaget. Du kommer omdirigeras till startsidan.',
    encInfo: 'Kryptering: end-to-end, ECDH+AES<br/>Hash: <code>%s</code>',
    encFailure: 'Kryptering stöds inte',
    avaTooBig: 'Avatarfilen är för stor. Vänligen använd enkla vectorbilder istället.',
    cannotLoadPlugin: 'Plugin "%s" stöder inte din webläsare',
    confirmLeave: 'Vill du verkligen lämna samtalet?',
    confirmDestroy: 'Vill du verkligen avsluta mötet för alla deltagare?',
    feedbackDetected: 'Vi har upptäckt mikrofonljud och tillfäligt stängt av din mikrofon. Vi föreslår att du använder hörlurar eller behåller mikrofonen avstängd tills du ansluter till rummet.',
    guestKnock: 'Användare <b>%s</b> vill ansluta. Vill du släppa in användaren?<br/>Du kan bestämma senare i fliken för väntrum.',
    safariNotSupported: 'Denna funktion stöds för tillfället inte av Safari.',
    takeOverSharing: 'Sharing your screen now will end the current screen sharing session.',
  },
  notify: {
    slowPlugins: 'För många plugins kan orsaka långsammare laddning. Överväg att ta bort den största.',
    peerLost: 'Återansluter med %s...',
    roomLocked: 'Rummet är låst 🔒',
    roomUnlocked: 'Rummet är olåst 🔓',
    roomPwdSet: 'Rummet är nu lösenordsskyddat 🔑',
    roomPwdReset: 'Rumslösenord rensat',
    devicesChanged: 'Tillbehör ändrade',
    hostMutedAudio: 'Hosten har stängt av din mikrofon',
    hostMutedVideo: 'Hosten har stängt av din kamera',
    incomingFile: 'Incoming file...',
  },
  modes: {
    '1': 'Konferens — alla kan prata',
    '2': 'Webinar — en pratar, resten lyssnar',
  },
  placements: {
    '1': 'Grid view',
    '2': 'Mini-me',
    '3': 'Spotlight',
  },
  perm: {
    head: 'Tillåt webläsarbehörigheter',
    video: 'Video',
    audio: 'Ljud',
    notif: 'Notiser',
  },
  videoMenu: {
    hint: 'Växla meny',
    expand: 'Utvidga',
    pip: 'Behåll högst upp',
    fullscreen: 'Fullskärm',
    fullscreenOff: 'Avbryt fullskärm',
    volume: 'Volym',
    restore: 'Återställ',
    kick: 'Ta bort deltagare',
    mute: 'Stäng av mikrofon (endast för dig)',
    unmute: 'Sätt på mikrfon',
    pm: 'Privat chatt',
    makeHost: 'Ge hostroll',
  },
  controls: {
    sharing: 'Delning',
    cam: 'Kamera',
    mic: 'Mikrofon',
    chat: 'Chatt',
    exit: 'Lämna',
    destroy: 'Avsluta möte',
    settings: 'Inställningar',
    plugin: 'Plugins',
    dots: 'Context menu',
    invite: 'Bjud in',
    ss: 'Dela skärm',
    stopSharing: 'Avbryt skärmdelning',
    board: 'Whiteboard',
    hand: 'Räck upp handen',
    lock: 'Låser',
    layouts: 'Placering',
    emoji: 'Emojis',
    attach: 'Bifoga fil',
    setLock: 'Lås rummet',
    resetLock: 'Lås upp rummet',
    setPwd: 'Ange ett lösenord',
    rotate: 'Bak/Fram kamera',
    more: 'Mer',
    users: 'Deltagare',
  },
  reactions: {
    handRaised: 'Användare %s vill prata 🎤',
  },
  video: {
    you: 'Du (klicka för att namnge)',
    sharing: 'Du delar din skärm',
  },
  settings: {
    tabs: {
      audio: 'Ljud',
      video: 'Video',
      general: 'Allmänt',
      help: 'Hjälp',
      chat: 'Chatt',
      peers: 'Deltagare',
      lobby: 'Väntrum',
    },
    audioQ: 'Max sample rate',
    videoQ: 'Högsta videokvalitet',
    screenQ: 'Högsta skärmdelnings kvalitet',
    bandwidthQ: 'Bandbreddsprofil',
    soundEffects: 'Ljudeffekter',
    audioDevices: 'Ljudkällor',
    videoDevices: 'Videokällor',
    language: 'Språk',
    theme: 'Färgtema',
    requestAudio: 'Begär ljudtillstånd',
    requestVideo: 'Begär videotillstånd',
    testOutput: 'Testa ljudutgången',
    flipFace: 'Spegla din kameraförhandsvisning',
    requireName: 'Kräv namn',
    debug: 'Debug läge',
    noPreview: 'Starta chattar utan förhandsgranskning',
    menuPos: 'Menyplacering',
    menuPosO: {
      '1': 'Överst',
      '2': 'Nedtill',
    },
  },
  home: {
    title: 'Ditt personliga konferensrum',
    btnGo: 'Kör!',
    nameRoom: 'namnge ditt rum:',
    placeholder: 'skriv här',
    rejoinRoom: 'eller återanslut',
    poweredBy: 'Drivs av <a href="https://xroom.app">xroom.app</a>',
    roomHint: 'Vänligen ange rumsnamn',
  },
  pre: {
    selectMode: 'Välj mötestyp',
    selectedMode: 'Mötestyp',
    btnGo: 'Anslut',
    btnPreview: 'Förhandsgranska',
    avaPicker: 'Välj avatar (visas när kameran är avstängd)',
    sizeLimitReached: 'Detta rum är storleksbegränsat och gränsen har nåtts.',
    roomBooked: 'Ett event kommer inom kort att starta i detta rum: <span>%s</span>.<br/>Vänligen vänta tills mötet börjar.',
    roomInfo: 'Rumsinfo',
    phInfo: 'Ange rumsinfo',
    pendingAdmission: 'Vänligen vänta tills hosten släpper in dig.',
  },
  inviter: {
    info: 'Dela länken nedan för att bjuda in andra till mötet.',
    head: 'Rumslänk:',
    btnCopy: 'Kopiera länk',
    btnShare: 'Dela länk',
    ntfCopied: 'Länken har kopierats!',
  },
  chat: {
    publicChat: 'Offentlig chatt',
    chatWith: 'Chatta med %s',
    fileSending: 'Skickar fil: ',
    fileReceived: 'Fil mottagen: ',
    phInput: 'Skriv ett meddelande...',
    me: 'jag',
    dropMe: 'Släpp mig!',
    atTime: 'vid %s',
  },
  peers: {
    muteOnEntry: 'Stäng av deltagarnas mikrofoner när de ansluter',
    camsOff: 'Stäng av allas kameror',
    micsOff: 'Stäng av allas mikrofoner',
  },
  knockers: {
    phEmpty: 'Om någon knackar för att bli insläppt syns den här och väntar på ditt godkännande.',
  },
  webinar: {
    peersCount: {
      one: '%s person tittar',
      many: '%s personer tittar',
    },
  },
  plugins: {
    by: 'av',
    size: 'Storlek: %s kB',
    phSearch: 'söka...',
    source: 'Källkod:',
    apiDocs: 'API dok.',
    vendor: 'Skapare:',
    btnAdd: 'Lägg till egen',
    add: {
      title: 'Lägg till en ny plugin',
      descr: '⚙️ Utvecklar du en ny plugin? Lägg till det här för att testa. Det sparas endast i den här webbläsaren.',
      name: 'Vad heter din plugin?',
      rootUrl: 'Vad är URL-adressen för din plugin?',
      loaded: 'Yaay! Den är laddad!',
      loadFailed: 'Det gick inte att ladda din plugin',
    }
  },
  help: {
    sevenTips: 'Top 7 Issues/Fixes',
    connIssues: 'Connection issues',
    laggyMedia: 'Laggy audio/video',
    unlockMedia: 'Unblock camera/mic',
    faq: 'Go to FAQ',
    submitFeature: 'Request a feature',
  },
}
