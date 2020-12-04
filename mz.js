export default {
  self: 'xroom',
  on: '(+)',
  off: '(–)',
  title: 'Potrěbuješ svojų vlastnų konfų?',
  buttons: {
    ok: 'Dobro',
    yes: 'Da',
    no: 'Ne',
    cancel: 'Anuluj',
    retry: 'Iznova',
    chooseWindow: 'Izbraj okno',
    wholeScreen: 'Cěly ekran',
    install: 'Pridaj',
    uninstall: 'Izbavi',
    send: 'Izsľ mněnje',
    close: 'Zatvori',
    hide: 'Ukryi',
    knock: 'Stukni',
    allowIn: 'Dozvoli',
    deny: 'Odkaži',
    enterAnyway: 'Vstupiti tako',
    enterHost: 'Enter as a host',
    details: 'Detalje',
  },
  mbox: {
    notSupported: 'Kaže sę, že tuta prěględka ne poddŕživaje XROOM, abo WebRTC je nedějųći. 😢',
    success: 'Udalo sę',
    failure: 'Ne udalo sę',
    enterRoomName: 'Podaj nazvų komnaty, prosim',
    isCamOn: 'Či kamera rabotna?',
    isCamOnText: 'Prosim prověriti, že kamera/mikrofon ne sųt slučajno zablokovane, i potom kliknuti "Iznova".',
    isMicOn: 'Či mikrofon rabotny?',
    isMicOnText: 'Jestli planuješ govoriti togda potrěbujemo dostup do tvojego mikrofona. Dozvoli to na sej stranici i klikni "Iznova".',
    iWillOnlyWatch: 'Ja toliko bųdų gleděti',
    iWillOnlyListen: 'Ja toliko bųdų slušati',
    screenSharingText: 'Děľeńje ekrana ne je dozvoľeno. Prosim prověriti, že ono ne je zablokovane na sej stranici.<br><br>Takože sa sposobnosť toliko poddŕživama modernymi web-prěględkami kako Chrome, Firefox, Yandex i t.d.',
    cannotFile: 'Zato že ne dŕžamo tvoje fajly, ne možemo dostaviti jih kogda někto svęže sę. Potrěbuješ sdělati to sam/a on-line.',
    cannotMessage: 'Zato že ne dŕžamo tvoje poslańja, ne možemo dostaviti jih kogda někto svęže sę. Potrěbuješ sdělati to sam/a on-line.',
    roomLockedText: 'Tojta komnata je zamknena',
    oops: 'Izvinite',
    kickedOutText: 'Tebe izphnųli iz komnaty',
    areYouSure: 'Jesi uvěrjen?',
    restartRequiredText: 'Tuta nastavka ovplyvnjaje prěmnogo, potrěbno je prěsčitati stranicų. Ale to bųde bystro, ne trevoži sę.',
    onlySafariOnIOS: 'V iOS poddŕživajemo toliko Safari. "Blågodarimo", Apple!',
    cannotLoadPlugin: 'Dodatok "%s" ne rabotaje v tvojej prěględkě.',
    confirmFileSend: 'Hćeš odslati to?',
    whatIsYourName: 'Podaj nove ime',
    setVideoVolume: 'Nastavi vysotų zvųka tutojego video',
    roomLockedTryKnockText: 'Komnata zamknena. Možeš poprositi pozvaljańja vstųpiti posrědstvom "stukańje" do dvere.',
    knockingFailedText: 'Knocking attempt failed',
    doYouWantToKick: 'Hočeš izphnuti sego koristnika?',
    deviceChanged: 'Bylo dodano nove orųďje vvoda. Jestli ono ne råbotaje, otvori Nastavki i izberi jego rųčno.',
    allowCameraPlz: 'Po tiskańja tipky "Dobro" <b>dozvoli</b>, prosimo, xroom koristati kamerų.<br><br>Ne trevoži sę, jestli ne hočeš že by te viděli, možno bųde bez problemov zamknųti jų pozdněje.',
    tooOldBrowser: 'Tvoja prěględka je zastarěla abo je proizvedena v Microsoft. Mnoge funkcije mogųt ne råbotati.',
    pluginsLoadFailed: 'Failed loading plugins',
    protoExpired: 'Too old client version. Please press Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 to reload. If you then see this message again please clear browser cache manually.',
    peerError: 'Something went wrong when exchanging data with your peers. We suggest reloading the page.',
    enterpriseOnly: 'This is an enterprise only feature.',
    pluginSuggested: 'User %s suggested you to install plugin %s. Do you wish to do it?',
    hostRoleRequired: 'Host role is required for this action.',
    alreadyHosted: 'Room is already hosted. Do not enter the same room from 2 browser tabs. 😉',
    roomLockedPassword: 'Room is currently locked with a password. Enter it below if you know it.',
    roomDestroyed: 'Room has been destroyed. You will be redirected to the starting page.',
    roomBooked: 'Room has been booked and cannot be created through the interface until booking expires.',
    nameRequired: 'Room host requires you to set your name first.',
    pipNotSupported: 'Your browser supports "picture-in-picture" mode but it is disabled somewhere in its settings.',
    copyFailed: 'Copying failed. This may be a result of your device restrictions.',
    noCryptoWarning: 'This browser does not support cryptography. It is not safe to continue.',
    bigFileDecryptWarn: 'Downloading has started. It may take a few seconds to decrypt the file.',
    roomMigrated: 'This room has been taken over by a booked meeting. Your call has been moved to another place and you will now be redirected there.',
  },
  notify: {
    slowPlugins: 'Dodatki počinajųt se velmi dolgo. Razsmotrite izčrkanije najtežkyh.',
  },
  home: {
    nisdos: 'Ne upotrěbjamo "cookies"',
    title: 'Tvoja vlastna web-konferencija',
    btnGo: 'Hodimo!',
    knowMore: 'Ob xroom',
    nameRoom: 'nazovi komnatų:',
    placeholder: 'piši tu',
    rejoinRoom: 'abo vstupi iznova v',
  },
  wl: {
    poweredBy: 'Råbotaje na ',
  },
  modes: {
    1: 'Konferencija',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Izberi režim komnaty',
    checkIt: 'Prověri svoj mikrofon i kamerų',
    btnGo: 'Vstupi',
    knockDenied: 'Your knock request has been denied. You can`t enter the room. :(',
    knockRequested: 'Čekajemo pozvaljańja vstųpiti. Drugi mogųt viděti te črěz podględanok. 👀',
    noAudio: '⚠️ Ne čujemo zvųkovogo signala',
    roomIsBusyWebinar: 'Webinar/strim už ide (%s×🙂 / %s×🤖)',
    roomIsBusyConference: 'Web-konferencija už ide (%s×🙂 / %s×🤖)',
    sizeLimitReached: 'Razměr komnaty ograničeny i limit jest dostigneny.',
    roomBooked: 'There is going to be an event in this room at <b>%s</b>, but it has not started yet.',
  },
  videoMenu: {
    hint: 'Phni menu',
    expand: 'Razširi',
    pip: 'Keep on top',
    fullscreen: 'Polny ekran',
    volume: 'Zvųk ±',
    restore: 'Menši',
    kick: 'Izphni',
    mute: 'Němeti',
  },
  controls: {
    ss: 'Ekran %s',
    cam: 'Obraz %s',
    mic: 'Zvųk %s',
    chat: 'Čat %s',
    exit: 'Izhod',
    destroy: 'Izniščiti',
    xroom: 'Sdelano iz xroom',
    settings: 'Nastavki',
    plugins: 'Dodatki',
    media: 'Media',
    more: 'Ješče',
    letMeSpeak: 'Pozvoli mi rěkti',
    lock: 'Locking',
  },
  lockStatus: {
    locked: 'Room is locked',
    open: 'Room is open',
    protected: 'Room is password-protected',
    placeholder: 'room password',
  },
  reactions: {
    letMeSpeak: 'Ja hoćų mòlviti!',
  },
  waiting: {
    invite: 'Pozovi svojih koleg',
    beforeCopy: 'klikni da by kopirovati',
    afterCopy: 'kopirovano!',
    webinar: 'Webinar ješče ne načel sę',
  },
  video: {
    you: 'Ty',
    someone: 'Někto',
    knocking: 'stukaje...',
    poorNet: 'zla svez',
  },
  chat: {
    fileSending: 'Sľemo fajl: ',
    fileReceived: 'Prijeny fajl: ',
    inputPlaceholder: 'natipkaj poslanje i natiskni "enter" ...',
    me: 'ja',
    dropMe: 'Opusti mi!',
  },
  webinar: {
    peersCount: '%s ljudi zrějųt',
  },
  settings: {
    experimental: '*) probno, rabotaje nestabilno',
    screenFace: 'Pokazyvati svoj obraz v tečenju děľeńja ekrana (BETA)',
    audioQ: 'Audio quality',
    videoQ: 'Video quality',
    screenQ: 'Screen sharing quality',
    bandwidthQ: 'Bandwidth profile',
    autoGetIn: 'Otvarjati čaty bez podględa',
    soundEffects: 'Zvųkove efekty',
    noisyBackground: 'Ja v šumnym městu',
    rtcDebug: 'Dobrostaviti RTC',
    audioDevices: 'Žrla zvųka',
    videoDevices: 'Žrla obraza',
    language: 'Język',
    theme: 'Kolorna tema',
    server: 'Server',
    keepControls: 'Trimati menju vidimym',
  },
  plugins: {
    by: 'od',
    size: 'Veličina: %s kB',
    searchPlaceholder: 'išči...',
    source: 'Žrlokod:',
    apiDocs: 'API doky',
    vendor: 'Avtor:',
    add: {
      title: 'Dodati novy dodatok',
      descr: '⚙️ Izråbotyvaješ novy dodatok? Dodaj jego tu da by testovati. Ne zapisyvajemo jego, jestli prědostaješ strånicų on iznikne iz pamęti.',
      name: 'Kaka je nazva dodatka?',
      rootUrl: 'Kde je root URL dodatka?',
      loaded: 'Lěpo! On je vniknųl!',
      loadFailed: 'Grěška vnikneńja dodatka',
    }
  },
}
