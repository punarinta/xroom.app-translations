module.exports = {
  self: 'xroom',
  title: 'Твое безопасное рабочее пространство',
  goToDash: 'Личный кабинет',
  netStatus: 'Соединение',
  buttons: {
    ok: 'Понятно',
    cancel: 'Отменить',
    yes: 'Да',
    no: 'Нет',
    chN: 'Вариант %s',
    install: 'добавить',
    uninstall: 'удалить',
    details: 'Подробности',
    close: 'Закрыть',
    next: 'Вперёд',
    back: 'Назад',
    retry: 'Повторить',
    dismiss: 'Отклонить',
    allow: 'Разрешить',
    stop: 'Остановить',
    decideLater: 'Решить потом',
    knock: 'Постучать',
    leave: 'Уйти',
  },
  mbox: {
    notSupported: 'Похоже, этот браузер не поддерживает xroom.app, или WebRTC отключён. 😢',
    protoExpired: 'Старая версия клиента. Пожалуйста, нажмите Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 для перезагрузки страницы. Если это сообщение повторится, попробуйте очистить кэш браузера.',
    areYouSure: 'Вы уверены?',
    noPermission: 'Невозможно получить разрешение от браузера. Пожалуйста, проверьте, что вы ничего не блокировали в настройках страницы.',
    mediaBlocked: 'Нет доступа к камере. Пожалуйста, убедитесь, что вы не используете её случайно в другой вкладке или программе.',
    mediaError: 'Что-то не так с доступом к камере или микрофону, но мы не понимаем, что именно. На всякий случай, проверьте права для данного сайта.',
    whatIsYourName: 'Введите имя',
    noPeersP2P: 'Поскольку мы не касаемся пользовательских данных, то и переслать мы их сами не можем. Вы должны сделать это online, когда кто-нибудь появится в чате.',
    noPeers: 'Поскольку мы не храним пользовательские данные, то и переслать мы их сами не можем. Вы должны сделать это online, когда кто-нибудь появится в чате.',
    password: 'Пароль к комнате',
    roomLocked: 'Комната заперта. Хотите постучаться?',
    roomProtected: 'Комната закрыта паролем. Введите его, если знаете.',
    roomIsFull: 'Комната заполнена до максимума. Вход, к сожалению, невозможен.',
    alreadyHosted: 'В комнате уже есть ведущий. Не пытайтесь входить в комнату с двух вкладок браузера. 😉',
    youAreKicked: 'Вас удалили из комнаты',
    setQFailed: 'Не удалось установить требуемое качество. Возможно, ваш браузер не поддерживает его.',
    bookingEnded: 'Резервация закончилась. Комната заресервирована для следующей встречи, мы перенаправим вас во временную комнату, чтобы ву могли спокойно договорить там.',
    bookingEndedHost: 'Резервация этой комнаты скоро закончится. Вам надо сделать выбор, т.к. в этой комнате скоро начнётся другая встреча.<br/><br/>1. Перейти в новую встречу. Мы направим вас в личный кабинет, чтобы вы могли войти с новым мастер-ключом.<br/><br/>2. Остаться в разговоре. Мы создадим новую комнату, чтобы ву могли спокойно договорить там.',
    pluginsLoadFailed: 'Не удалось загрузить плагины.',
    roomDestroyed: 'Комната была уничтожена. Сейчас мы перенаправим вас на главную страницу.',
    encInfo: 'Шифрование: оконечное, ECDH+AES<br/>Хэш: <code>%s</code>',
    encFailure: 'Шифрование отключено',
    avaTooBig: 'Слишком большой размер аватары.',
    cannotLoadPlugin: 'Плагин "%s" не поддерживается в этом браузере',
    confirmLeave: 'Вы уверены, что хотите выйти из комнаты?',
    confirmDestroy: 'Вы уверены, что хотите закончить встречу для всех участников?',
    feedbackDetected: 'We have detected microphone feedback noises and muted you automatically. We suggest you use headphones or that you keep your mic off until you enter the room.',
    guestKnock: 'Пользователь <b>%s</b> хочет войти. Разрешить?<br/>Вы можете сделать это позже со вкладки "Ожидающие"',
    safariNotSupported: 'Эта фича временно недоступна в Safari.',
    p2pNotSupported: 'В пиринговом режиме эта функция недоступна.',
    takeOverSharing: 'Если вы начнёте показывать экран, то тем самым завершите имеющуюся экранную сессию.',
    p2pInfo: 'P2P режим отключает использование медиа-серверов.<br/><u>Стабильность будет зависеть от вашей сети.</u><br/>Рекомендуется для особо приватных встреч 2 людей.',
    confirmKick: 'Удалить пользователя %s из этой комнаты?',
    comingSoon: 'Скоро доступно и на вашей улице.',
    audioChanged: 'Было добавлено устройство ввода. Хотите выбрать, какое использовать теперь?',
  },
  notify: {
    slowPlugins: 'Слишком много плагинов замедляет загрузку страницы.',
    peerLost: 'Восстанавливается соединение с %s...',
    roomLocked: 'Комната закрыта 🔒',
    roomUnlocked: 'Комната открыта 🔓',
    roomPwdSet: 'Комната запаролена 🔑',
    roomPwdReset: 'Пароль комнаты сброшен',
    devicesChanged: 'Обновился список устройств',
    hostMutedAudio: 'Хост выключил ваш микрофон',
    hostMutedVideo: 'Хост выключил вашу камеру',
    incomingFile: 'Передаётся файл...',
  },
  hint: {
    p2p: '<u>xroom.app</u> использует медиа-сервера, чтобы обеспечить высокое качество во время ваших встреч.<br/><br/>• В этом режиме у нас нет доступа к вашим данным.<br/><br/>• Данные, пересылаемые через наши сервера, зашифрованы и предназначены исключительно своим получателям.<br/><br/>Однако, <u>если вам нужна максимальная приватность,</u> вы можете полностью отключить наши сервера и использовать пиринговую сеть.<br/><br/>• В этом режиме видео и аудио пересылается напрямую между пользователями, без использования серверов xroom.app.<br/><br/>• Мы рекомендуем использовать этот режим, если ожидается встреча в формате один-на-один.',
  },
  modes: {
    '1': 'Конференция — все могут говорить',
    '2': 'Вебинар — один говорит, остальные слушают',
  },
  placements: {
    '1': 'Стандартный',
    '2': 'Я в уголке',
    '3': 'Кто говорит',
  },
  perm: {
    head: 'Дать права браузеру',
    video: 'Видео',
    audio: 'Аудио',
    notif: 'Оповещения',
  },
  videoMenu: {
    hint: 'Контекстное меню',
    expand: 'Разширить',
    pip: 'Видеть всегда',
    fullscreen: 'Полный экран',
    fullscreenOff: 'Обычный вид',
    volume: 'Уровень звука',
    restore: 'Восстановить',
    kick: 'Удалить из комнаты',
    mute: 'Заглушить (только локально)',
    unmute: 'Вернуть звук',
    pm: 'Личное сообщение',
    makeHost: 'Назначить хостом',
  },
  controls: {
    sharing: 'Шеринг',
    cam: 'Камера',
    mic: 'Микрофон',
    chat: 'Чат',
    exit: 'Выйти',
    destroy: 'Закончить встречу',
    settings: 'Настройки',
    plugin: 'Плагины',
    dots: 'Контекстное меню',
    invite: 'Пригласить',
    ss: 'Показывать экран',
    stopSharing: 'Не показывать экран',
    board: 'Доска',
    hand: 'Хочу сказать!',
    lock: 'Защита',
    layouts: 'Размещение',
    emoji: 'Эмоджи',
    attach: 'Отправить файл',
    setLock: 'Закрыть комнату',
    resetLock: 'Открыть комнату',
    setPwd: 'Установить пароль',
    rotate: 'Задняя/передняя камера',
    more: 'Ещё',
    users: 'Участники',
  },
  reactions: {
    handRaised: '%s хочет что-то сказать 🎤',
  },
  video: {
    you: 'Ты (установить имя)',
    sharing: 'Идёт демонстрация экрана',
  },
  settings: {
    tabs: {
      audio: 'Аудио',
      video: 'Видео',
      general: 'Общее',
      help: 'Помощь',
      chat: 'Чат',
      peers: 'Участники',
      lobby: 'Ожидающие',
    },
    audioQ: 'Качество звука',
    videoQ: 'Качество видео',
    screenQ: 'Качество при показе экрана',
    bandwidthQ: 'Сетевой профиль',
    soundEffects: 'Звуковые эффекты',
    audioDevices: 'Аудио-устройства',
    videoDevices: 'Видео-устройства',
    language: 'Язык',
    theme: 'Цветовая схема',
    requestAudio: 'Разрешить аудио',
    requestVideo: 'Разрешить видео',
    testOutput: 'Тест аудио',
    flipFace: 'Отражать свою камеру',
    requireName: 'Требовать имя',
    debug: 'Режим отладки',
    noPreview: 'Начинать чат без превью',
    menuPos: 'Расположение меню',
    menuPosO: {
      '1': 'вверху',
      '2': 'внизу',
    },
    name: 'Задать/изменить имя',
    phName: 'отображаемое имя',
  },
  home: {
    title: 'Твоя личная конференция',
    btnGo: 'Поехали!',
    nameRoom: 'имя комнаты:',
    placeholder: 'вводим тут',
    rejoinRoom: 'или перезайти',
    poweredBy: 'Работает на <a href="https://xroom.app">xroom.app</a>',
    roomHint: 'Имя комнаты, пожалуйста',
  },
  pre: {
    selectMode: 'Выбрать тип комнаты',
    selectedMode: 'Тип комнаты',
    btnGo: 'Войти',
    btnPreview: 'Превью',
    avaPicker: 'Аватара (видна, когда нет видео)',
    sizeLimitReached: 'Эта комната была ограничена в размере и предел уже был достигнут.',
    roomBooked: 'В этой комнате запланировано мероприятие на <b>%s</b>.<br/>Пожалуйста, подождите, пока оно начнётся.',
    roomInfo: 'Описание комнаты',
    phInfo: 'Введите описание комнаты',
    pendingAdmission: 'Пожалуйста, подождите, пока хост разрешит вход',
    p2pMode: 'Пиринговый режим (P2P)',
    btnGoHome: 'На главную',
    roomLocked: 'Комната закрыта ведущим.<br />Пожалуйста, постучите, чтобы войти.',
    roomLockedInfo: 'Пожалуйста, укажите имя.<br />Иначе ведущий может вас не узнать и не впустить.',
  },
  inviter: {
    info: 'Пригласите людей, поделившись с ними ссылкой на эту комнату.',
    head: 'Ссылка на комнату:',
    btnCopy: 'Скопировать',
    btnShare: 'Поделиться ссылкой',
    ntfCopied: 'Ссылка скопирована!',
  },
  chat: {
    publicChat: 'Общий чат',
    chatWith: 'Чат с %s',
    fileSending: 'Отправка файла: ',
    fileReceived: 'Файл получен: ',
    phInput: 'Написать сообщение...',
    me: 'я',
    dropMe: 'Дропай!',
    atTime: 'в %s',
    recvProgress: 'получаем шифрованые данные: %s%...',
  },
  peers: {
    muteOnEntry: 'Глушить всех при входе',
    camsOff: 'Выключить всем видео',
    micsOff: 'Заглушить всех',
  },
  knockers: {
    phEmpty: 'Если кто-то постучится в комнату, то они появятся тут и будут ждать разрешения войти.',
  },
  webinar: {
    peersCount: {
      one: '%s человек смотрит',
      many: '%s людей смотрят',
    },
  },
  plugins: {
    by: 'от',
    size: 'Размер: %s кБ',
    phSearch: 'искать...',
    source: 'Исходный код:',
    apiDocs: 'Мануал',
    vendor: 'Автор:',
    btnAdd: 'Добавить свой',
    add: {
      title: 'Добавить свой плагин',
      descr: '⚙️ Разрабатываешь плагин? Добавь его здесь для тестирования. Он сохранится только в этом браузере.',
      name: 'Как называется плагин?',
      rootUrl: 'Где корневой URL?',
      loaded: 'Урааа! Загрузилось!',
      loadFailed: 'Чо-то пошло не так.',
    }
  },
  help: {
    sevenTips: 'Топ 7 проблем и решений',
    connIssues: 'Проблемы с подключением',
    laggyMedia: 'Лагает аудио/видео',
    unlockMedia: 'Заблокирована камера/мкрофон',
    faq: 'Частые вопросы',
    submitFeature: 'Запросите фичу',
  },
}
