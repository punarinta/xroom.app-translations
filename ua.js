module.exports = {
  self: 'xroom',
  title: 'Твій безпечний робочий простір',
  goToDash: 'Особистий кабінет',
  netStatus: 'З\'єднання',
  buttons: {
    ok: 'ОК',
    cancel: 'Відмінити',
    yes: 'Так',
    no: 'Ні',
    chN: 'Варіант %s',
    install: 'Додати',
    uninstall: 'Видалити',
    details: 'Подробиці',
    close: 'Закрити',
    next: 'Вперед',
    back: 'Назад',
    retry: 'Повторити',
    dismiss: 'Відхилити',
    allow: 'Дозволити',
    stop: 'Зупинити',
    decideLater: 'Вирішити потім',
    knock: 'Постукати',
    leave: 'Вийти',
  },
  mbox: {
    notSupported: 'Схоже, що цей браузер не підтримується або WebRTC відключений. 😢',
    protoExpired: 'Застаріла версія клієнта. Будь ласка, натисніть Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 для перезавантаження сторінки. Якщо це повідомлення з\'явиться знову, очистіть кеш браузера.',
    areYouSure: 'Ви впевнені?',
    noPermission: 'Неможливо отримати дозвіл від браузера. Будь ласка, перевірте, що ви нічого не заблокували в налаштуваннях сторінки.',
    mediaBlocked: 'Немає доступу до камери. Будь ласка, впевніться, що ви не використовуєте її випадково в іншій вкладці або програмі.',
    mediaError: 'Щось не так з доступом до камери або мікрофону, але ми не розуміємо, що саме. Про всяк випадок, перевірте права для цього сайту.',
    whatIsYourName: 'Введіть ім\'я.',
    noPeersP2P: 'Оскільки ми не взаємодіємо з даними користувачів, тому і переслати їх самі не можемо. Вам необхідно зробити це online, коли хто-небудь з\'явиться в чаті.',
    noPeers: 'Оскільки ми не зберігаємо дані користувачів, тому і переслати їх  самі не можемо. Вам необхідно зробити це online, коли хто-небудь з\'явиться в чаті.',
    password: 'Пароль до кімнати',
    roomLocked: 'Кімнату зачинено. Бажаєте постукати?',
    roomProtected: 'Будь ласка, введіть пароль.',
    roomIsFull: 'Кімнату заповнено максимально. На жаль, вхід неможливий.',
    alreadyHosted: 'В кімнаті вже є ведучий. Не намагайтесь увійти до кімнати з двох вкладок браузера. 😉',
    youAreKicked: 'Вас видалили з кімнати.',
    setQFailed: 'Не вдалося встановити необхіду якість. Можливо, ваш браузер не підтримує її.'
    bookingEnded: 'Резервація закінчилась. Кімнату Резервовано для наступної зустрічі, ми перенаправимо вас до тимчасової кімнати, щоб ви могли спокійно закінчити розмову там.',
    bookingEndedHost: 'Резервація цієї кімнати скоро закінчиться. Вам необхідно зробити вибір, оскільки в цій кімнаті незабаром почнеться інша зустріч.<br/><br/>1. Перейти до нової зустрічі. Ми направимо вас в особистий кабінет, щоб ви могли увійти з новим майстер-ключем.<br/><br/>2. Залишитись у розмові. Ми створимо нову кімнату, щоб ви могли спокійно закінчити розмову там.',
    pluginsLoadFailed: 'Не вдалось завантажити плагіни.',
    roomDestroyed: 'Кімнату було знищено. Зараз ми перенаправимо вас на головну сторінку.',
    encInfo: 'Шифрування: наскрізне шифрування, ECDH+AES<br/>Хэш: <code>%s</code>',
    encFailure: 'Шифрування відключено',
    badBrowser: 'У користувача поганий браузер. Скажіть йому не використовувати Safari, інакше у всіх можуть бути баги.',
    avaTooBig: 'Занадто великий розмір аватару.',
    cannotLoadPlugin: 'Плагін "%s" не підтримується в цьому браузері',
    confirmLeave: 'Ви впевнені, що бажаєте вийти із кімнати?',
    confirmDestroy: 'Ви впевнені, що бажаєте закінчити зустріч для всіх учасників?',
    feedbackDetected: 'Ми виявили звуки шуму від мікрофона і автоматично вимкнули вам можливість розмовляти. Ми пропонуємо використовувати навушники або вимкнути мікрофон, поки ви не зайдете в кімнату.',
    guestKnock: 'Користувач <b>%s</b> намагається зайти. Дозволити?<br/>Ви можете зробити це пізніше з вкладки "Очікуючі"',
    safariNotSupported: 'Ця фіча тимчасово недоступна в Safari.',
    p2pNotSupported: 'В пірінговому режимі ця функція недоступна.',
    takeOverSharing: 'Якщо ви почнете демонструвати екран, то цим зупините наявну екранну сесію.',
    p2pInfo: 'P2P режим відключає використання медіа-серверів.<br/><u>Стабільність буде залежати від вашої мережі.</u><br/>Реомендовано для дуже приватних зустрічей 2 осіб.',
    confirmKick: 'Видалити користувача %s з цієї кімнати?',
    comingSoon: 'Незабаром буде доступно і на вашій вулиці.',
    audioChanged: 'Було додано пристрій вводу. Бажаєте обрати який пристрій використовувати тепер?',
    domainNotSetUp: 'Цей домен ще не налаштовано. Якщо ви його власник, будь ласка, зробіть це із особистого кабінету. А ми поки перенаправимо вас в безкоштовну версію.',
    domainNotPaid: 'Цей домен тимчасово деактивований оскільки платіж було протерміновано. Зараз ми перенаправимо вас в безкоштовну версію.',
    badLuck: 'Щось серйозно не так з мережею. Ми спробуємо перезавантажити браузер.',
    noEmbedding: 'Захист від вбудовування увімкнено. Ви можете відключити його в особистому кабінеті.',
    pluginSuggested: 'Користувач %s пропонує встановити плагін %s. Встановлюємо?',
    noMoreRooms: 'Досягнуто максимум кількості кімнат. Попросіть власника додати їх в особистому кабінеті.',
  },
  notify: {
    slowPlugins: 'Занадто багато плагінів уповільнює завантаження сторінки.',
    peerLost: 'Відновлюється з\'\єднання з %s...',
    roomLocked: 'Кімната закрита 🔒',
    roomUnlocked: 'Кімната відкрита 🔓',
    roomPwdSet: 'Кімнату запаролено 🔑',
    roomPwdReset: 'Пароль кімнати скинуто',
    devicesChanged: 'Оновлено список пристроїв',
    hostMutedAudio: 'Хост вимкнув ваш мікрофон',
    hostMutedVideo: 'Хост вимкнув вашу камеру',
    incomingFile: 'Передається файл...',
  },
  upsell: {
    hd: 'HD відео',
    notFree: '<b>%s</b> доступно тільки з вашою особистою ліцензією. Радимо спробувати, перші 7 днів безкоштовно, в подальшому можна відмовитися.',
    startTrial: 'Спробувати',
    notInterested: 'Не цікаво',
  },
  hint: {
    p2p: '<u>Зазначена платформа</u> використовує медіа-сервери, щоб забезпечити високу якість під час ваших зустрічей.<br/><br/>• У цьому режимі у нас немає доступу до ваших даних.<br/><br/>• Дані, що пересилаються через наші сервери, зашифровані і призначені виключно для своїх одержувачів.<br/><br/>Однак, <u> якщо вам потрібна максимальна приватність,</u> ви можете повністю відключити наші сервера і використовувати пірингову мережу.<br/><br/>• В цьому режимі відео і аудіо пересилається безпосередньо між користувачами, без використання серверів.<br/><br/>• Ми рекомендуємо використовувати цей режим, якщо очікується зустріч в форматі один-на-один.',
  },
  modes: {
    '1': 'Конференція - всі можуть говорити',
    '2': 'Вебінар - один говорить, інші слухають',
  },
  placements: {
    '1': 'Стандартний',
    '2': 'Я в кутку',
    '3': 'Хто говорить',
  },
  perm: {
    head: 'Надати права браузеру',
    video: 'Відео',
    audio: 'Аудіо',
    notif: 'Сповіщення',
  },
  videoMenu: {
    hint: 'Контекстне меню',
    expand: 'Розширити',
    pip: 'Бачити завжди',
    fullscreen: 'Повний екран',
    fullscreenOff: 'Звичайний вид',
    volume: 'Рівень звуку',
    restore: 'Відновити',
    kick: 'Видалити з кімнати',
    mute: 'Заглушити (тільки локально)',
    unmute: 'Повернути звук',
    pm: 'Приватне повідомлення',
    makeHost: 'Призначити хостом',
  },
  controls: {
    sharing: 'Шерінг',
    cam: 'Камера',
    mic: 'Мікрофон',
    chat: 'Чат',
    exit: 'Вийти',
    destroy: 'Закінчити зустріч',
    settings: 'Налаштування',
    plugin: 'Плагіни',
    dots: 'Контекстне меню',
    invite: 'Запросити',
    ss: 'Показувати екран',
    stopSharing: 'Не показувати екран',
    board: 'Дошка',
    hand: 'Хочу сказати!',
    lock: 'Захист',
    layouts: 'Розміщення',
    emoji: 'Емоджі',
    attach: 'Надіслати файл',
    setLock: 'Закрити кімнату',
    resetLock: 'Відкрити кімнату',
    setPwd: 'Встановити пароль',
    rotate: 'Задня / передня камера',
    more: 'Ще',
    users: 'Учасники',
  },
  reactions: {
    handRaised: '%s хоче щось сказати 🎤',
  },
  video: {
    you: 'Ти (встановити ім\'\я)',
    sharing: 'Відбувається демонстрація екрану',
  },
  settings: {
    tabs: {
      audio: 'Аудіо',
      video: 'Відео',
      general: 'Загальне',
      help: 'Допомога',
      chat: 'Чат',
      peers: 'Учасники',
      lobby: 'Очікуючі',
    },
    audioQ: 'Якість звуку',
    videoQ: 'Якість відео',
    screenQ: 'Якість при показі екрану',
    bandwidthQ: 'Мережевий профіль',
    soundEffects: 'Звукові ефекти',
    audioDevices: 'Аудіопристрої',
    videoDevices: 'Відеопристрої',
    language: 'Мова',
    theme: 'Схема кольорів',
    requestAudio: 'Дозволити аудіо',
    requestVideo: 'Дозволити відео',
    testOutput: 'Тест аудіо',
    flipFace: 'Відображати свою камеру',
    requireName: 'Вимагати ім\'\я',
    debug: 'Режим налагодження',
    noPreview: 'Починати чат без превью',
    menuPos: 'Розташування меню',
    menuPosO: {
      '1': 'вгорі',
      '2': 'внизу',
    },
    name: 'Задати / змінити ім\'\я',
    phName: 'Відображене ім\'я',
  },
  home: {
    title: 'Твоя особиста конференція',
    btnGo: 'Поїхали',
    nameRoom: 'ім\'\я кімнати:',
    placeholder: 'вводимо тут',
    rejoinRoom: 'або перезайти',
    poweredBy: 'Працює на <a href="https://xroom.app">xroom.app</a>',
    roomHint: 'Ім\'\я кімнати, будь ласка',
  },
  pre: {
    selectMode: 'Вибрати тип кімнати',
    selectedMode: 'Тип кімнати',
    btnGo: 'Увійти',
    btnPreview: 'Прев\'\ю',
    avaPicker: 'Аватар (видно, коли немає відео)',
    sizeLimitReached: 'Ця кімната була обмежена в розмірі і максимум вже було досягнуто.',
    roomBooked: 'У цій кімнаті заплановано захід на <b>%s</b>.<br/>Будь ласка, зачекайте, поки він почнеться.',
    roomInfo: 'Опис кімнати',
    phInfo: 'Введіть опис кімнати',
    pendingAdmission: 'Будь ласка, почекайте, поки хост дозволить вхід',
    p2pMode: 'Пірінговий режим (P2P)',
    btnGoHome: 'На головну',
    btnAsHost: 'Ввійти як ведучий',
    roomLocked: 'Кімнату закрито ведучим.<br />Будь ласка, постукайте, щоб увійти.',
    roomLockedInfo: 'Будь ласка, вкажіть ім\'\я.<br />Інакше ведучий може вас не впізнати і не впустити.',
  },
  inviter: {
    info: 'Запросіть людей, поділившись з ними посиланням на цю кімнату.',
    head: 'Посилання на кімнату:',
    btnCopy: 'Скопіювати',
    btnShare: 'Поділитися посиланням',
    ntfCopied: 'Посилання скопійовано!',
  },
  chat: {
    publicChat: 'Загальний чат',
    chatWith: 'Чат з %s',
    fileSending: 'Відправлення файлу: ',
    fileReceived: 'Файл отримано: ',
    phInput: 'Написати повідомлення...',
    me: 'я',
    dropMe: 'Дропай!',
    atTime: 'в %s',
    recvProgress: 'отримуємо шифровані дані: %s%...',
  },
  peers: {
    muteOnEntry: 'Приглушувати всіх при вході',
    camsOff: 'Вимкнути всім відео',
    micsOff: 'Приглушити всіх',
  },
  knockers: {
    phEmpty: 'Якщо хтось постукає в кімнату, то він з\'\явиться тут і буде чекати дозволу увійти.',
  },
  webinar: {
    peersCount: {
      one: '%s людина дивиться',
      many: '%s людей дивляться',
    },
  },
  plugins: {
    by: 'від',
    size: 'Розмір: %s кБ',
    phSearch: 'Шукати...',
    source: 'Першокод:',
    apiDocs: 'Довідник',
    vendor: 'Автор:',
    btnAdd: 'Додати свій',
    add: {
      title: 'Додати свій плагін',
      descr: '⚙️ Розробляєш плагін? Додай його тут для тестування. Він збережеться тільки в цьому браузері.',
      name: 'Як називається плагін?',
      rootUrl: 'Де кореневий URL?',
      loaded: 'Урааа! Завантажилось!',
      loadFailed: 'Щось пішло не так.',
    }
  },
  help: {
    sevenTips: 'Топ 7 проблем і рішень',
    connIssues: 'Проблеми з підключенням',
    laggyMedia: 'Проблеми з аудіо / відео',
    unlockMedia: 'Заблокована камера / мікрофон',
    faq: 'Часті питання',
    submitFeature: 'Запит на функцію',
  },
}
