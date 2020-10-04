export default {
  self: 'xroom',
  on: 'aan',
  off: 'uit',
  title: 'Een conferentie ruimte nodig?',
  buttons: {
    ok: 'OK',
    yes: 'Ja',
    no: 'Nee',
    cancel: 'Annuleer',
    retry: 'Opnieuw proberen',
    chooseWindow: 'Kies een scherm',
    wholeScreen: 'Hele scherm',
    install: 'Toevoegen',
    uninstall: 'Verwijderen',
    send: 'Verzend',
    close: 'Sluit',
    hide: 'Verberg',
    knock: 'Klop',
    allowIn: 'Laat toe',
    deny: 'Weiger',
    enterAnyway: 'Toch naar binnen gaan',
    details: 'Details',
  },
  mbox: {
    notSupported: 'Het lijkt erop dat deze browser geen XROOM of WebRTC ondersteund. 😢',
    success: 'Handeling geslaagd',
    failure: 'Handeling gefaald',
    enterRoomName: 'Kies een naam alsjeblieft',
    isCamOn: 'Staat de webcam aan?',
    isCamOnText: 'Controleer dat je de camera/mic niet per ongeluk geblokeerd hebt voor deze site en kies "Opnieuw".',
    isMicOn: 'Staat de microfoon aan?',
    isMicOnText: 'Als je van plan bent om te praten, hebben we je microfoon permissie nodig. Laat dit toe op deze pagina en kies "Opnieuw".',
    iWillOnlyWatch: 'Ik ga alleen kijken',
    iWillOnlyListen: 'Ik ga alleen luisteren',
    screenSharingText: 'Scherm delen is niet toegestaan. Zorg ervoor dat dit niet is geblokkeerd voor deze site.<br><br>Deze feature wordt ook alleen ondersteund door moderne browsers zoals Chrome en Firefox.',
    cannotFile: 'We kunnen alleen bestanden versturen als er iemand anders aanwezig is.',
    cannotMessage: 'We kunnen alleen berichten versturen als er iemand anders aanwezig is.',
    roomLockedText: 'Deze ruimte is gesloten',
    oops: 'Sorry',
    kickedOutText: 'Je bent uit de ruimte gezet.',
    areYouSure: 'Weet je het zeker?',
    restartRequiredText: 'Deze instelling wijzigd zoveel dingen dat een herstart noodzakelijk is. Geen zorgen, dat doen we heel snel!',
    onlySafariOnIOS: 'Op iOS wordt alleen Safari ondersteund. "Bedankt", Apple!',
    cannotLoadPlugin: 'Plugin "%s" wordt niet door je browser ondersteund',
    confirmFileSend: 'Wil je dit verzenden?',
    whatIsYourName: 'Kies een nieuwe naam',
    setVideoVolume: 'Zet de volume voor deze video',
    roomLockedTryKnockText: 'De ruimte is op dit moment gesloten. Je kunt toegang vragen door te "kloppen" op de deur.',
    knockingFailedText: 'Je klop heeft gefaald.',
    doYouWantToKick: 'Wil je deze gebruiker eruit zetten?',
    deviceChanged: 'Je hebt een nieuw input apparaat toegevoegd/verwijderd. Als het niet werkt kies het dan handmatig vanuit de Instellingen.',
    allowCameraPlz: 'Nadat je op OK gebruikt hebt, geef xroom <b>permissie</b> om je webcam te gebruiken.<br><br>Geen zorgen! Je kunt het weer afzetten voordat je de ruimte binnen gaat via het menu onderaan je scherm voor als je onzichtbaar wilt blijven.',
    tooOldBrowser: 'Je browser is te oud of wordt gemaakt door Microsoft. Veel features zullen niet aanwezig zijn.',
    pluginsLoadFailed: 'Plugins laden mislukt',
    protoExpired: 'Te oude client versie. Druk op Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 om te herladen. Als je dit bericht ziet, verwijder dan handmatig de browser cache.',
    peerError: 'Er ging iets mis met de communicatie tussen de partijen. Probeer de pagina te verversen.',
    enterpriseOnly: 'Dit is een enterprise feature.',
    pluginSuggested: 'Gebruiker %s stelt voor om plugin %s te installeren. Wil je dit doen?',
    hostRoleRequired: 'Eigenaar rol is nodig voor deze actie.',
    alreadyHosted: 'Ruimte is al in gebruik. Open geen meerdere tabs met dezelfde ruimte. 😉',
    roomLockedPassword: 'Deze ruimte is gesloten met een wachtwoord. Vul deze onder in.',
    roomDestroyed: 'Ruimte is gestopt. Je wordt teruggeleid naar de begin pagina.',
    roomBooked: 'De ruimte is geboekt en kan niet worden gecreeerd totdat de boeking verloopt.',
    nameRequired: 'De eigenaar wil dat je je naarm eerst invult.',
    pipNotSupported: 'Your browser supports "picture-in-picture" mode but it is disabled somewhere in its settings.',
  },
  notify: {
    slowPlugins: 'Plugins laden duurt te lang. Probeer de zwaarste plugins te verwijderen.',
  },
  home: {
    nisdos: 'Wij gebruiken geen cookies',
    title: 'Jouw persoonlijke conferentie ruimte',
    btnGo: 'Start!',
    knowMore: 'Over xroom',
    nameRoom: 'Kies je ruimte:',
    placeholder: 'naam',
    rejoinRoom: 'of kies voor',
  },
  wl: {
    poweredBy: 'Powered by ',
  },
  modes: {
    1: 'Conference',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Kies ruimte type',
    checkIt: 'Check je mic en kam je haar',
    btnGo: 'Ga naar binnen',
    knockDenied: 'Je klop wordt niet beantwoord. Je kunt niet binnenkomen. :(',
    knockRequested: 'Even wachten op antwoord. Ze kunnen je zien door een kijkgat. 👀',
    noAudio: '⚠️ Geen microfoon signaal gedetecteerd',
    roomIsBusyWebinar: 'Er is al een actieve webinar/stream (%s×🙂 / %s×🤖)',
    roomIsBusyConference: 'Er is al een actieve conference (%s×🙂 / %s×🤖)',
    sizeLimitReached: 'Deze ruimte heeft zijn limiet bereikt',
    roomBooked: 'There is going to be an event in this room at <b>%s</b>, but it has not started yet.',
  },
  videoMenu: {
    hint: 'Toggle menu',
    expand: 'Uitbreiden',
    pip: 'Keep on top',
    fullscreen: 'Volledig scherm',
    volume: 'Volume ±',
    restore: 'Herstel',
    kick: 'Schop',
    mute: 'Dempen',
  },
  controls: {
    ss: 'Scherm delen %s',
    cam: 'Cam %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Vertrek',
    destroy: 'Vernietigen',
    xroom: 'Powered by xroom',
    settings: 'Instellingen',
    plugins: 'Plugins',
    media: 'Media',
    more: 'Meer',                   // validate translation
    letMeSpeak: 'Laat me praten',   // validate translation
    lock: 'Locking',
  },
  lockStatus: {
    locked: 'Room is locked',
    open: 'Room is open',
    protected: 'Room is password-protected',
    placeholder: 'room password',
  },
  reactions: {
    letMeSpeak: 'Ik wil praten!',   // validate translation
  },
  waiting: {
    invite: 'Nodig je collega`s uit',
    beforeCopy: 'klik om te kopieeren',
    afterCopy: 'gekopieerd!',
    webinar: 'Webinar is nog niet gestart',
  },
  video: {
    you: 'Jij (klik om je naam aan te passen)',
    someone: 'Iemand anders',
    knocking: 'klopt...',
    poorNet: 'slechte verbinding',
  },
  chat: {
    fileSending: 'Bestand aan het zenden: ',
    fileReceived: 'Bestand ontvangen: ',
    inputPlaceholder: 'type een bericht en druk op enter ...',
    me: 'mij',
    dropMe: 'Laat me los!',
  },
  webinar: {
    peersCount: {
      one: '%s persoon is aan het kijken',
      many: '%s personen zijn aan het kijken',
    },
  },
  settings: {
    experimental: '*) experimenteel, kan nog onstabiel zijn',
    showCameraWithScreen: 'Laat camera zien tijdens scherm delen *',
    audioQ: 'Audio kwaliteit',
    videoQ: 'Video kwaliteit',
    screenQ: 'Scherm delen kwaliteit',
    bandwidthQ: 'Bandbreedte profiel',
    autoGetIn: 'Start chats zonder eerst te bekijken',
    soundEffects: 'Geluidseffecten',
    noisyBackground: 'Ik ben op een rumoerige plek',
    rtcDebug: 'Debug RTC',
    audioDevices: 'Audio bronnen',
    videoDevices: 'Video bronnen',
    language: 'Taal',
    theme: 'Kleur thema',
    server: 'Server',
    keepControls: 'Keep controls visible',
  },
  plugins: {
    by: 'door',
    size: 'Grootte: %s kB',
    searchPlaceholder: 'zoeken...',
    source: 'Broncode:',
    apiDocs: 'API docs',
    vendor: 'Vendor:',
    add: {
      title: 'Voeg een nieuwe plugin toe',
      descr: '⚙️ Een nieuwe plugin aan het ontwikkelen? Voeg het hier to om te testen. Het wordt niet bewaard en de pagina verversen zals de plugin verwijderen.',
      name: 'Wat is de naam van de plugin?',
      rootUrl: 'Wat is de root van de plugin?',
      loaded: 'Joepie! Hij is geladen!',
      loadFailed: 'Kan plugin niet laden',
    },
  },
  tips: {
    prefix: 'Tip van de dag: ',
    lines: [
      'Zet je vaak je microfoon aan en uit? Je kunt ook op de "m" drukken.',
      'Dubbel klik op een video om deze op volledig scherm te tonen.',
      'Wil je de ruimte afsluiten? Voeg de "room locking" plugin toe.',
      'Gebruik je Slack en wil je meer tijd sparen? Probeer onze <a href="//xroom.app/en/library/slack-bot" target="_blank">Slack bot</a>.',
      'Mis je video berichten in Telegram? Onze <a href="//xroom.app/en/library/telegram-bot" target="_blank">Telegram bot</a> is hier om te helpen.',
      'Moet je een gekopieerde afbeelding delen? Druk op Ctrl+V in de chat, en wij doen de rest.',
      'Klik op je naam om te wijzigingen.',
      'Wil je je scherm opnemen met maar een paar klikken? Probeer onze screen recording plugin.',
    ]
  },
}
