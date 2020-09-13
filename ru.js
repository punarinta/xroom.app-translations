export default {
  self: 'xroom',
  on: 'вкл.',
  off: 'выкл.',
  title: 'Ищешь конфу?',
  buttons: {
    ok: 'OK',
    yes: 'Да',
    no: 'Нет',
    cancel: 'Отмена',
    retry: 'Повторить',
    chooseWindow: 'Выберите окно',
    wholeScreen: 'Весь экран',
    install: 'Подключить',
    uninstall: 'Отключить',
    send: 'Отправить',
    close: 'Закрыть',
    hide: 'Скрыть',
    knock: 'Тук-тук!',
    allowIn: 'Пустить',
    deny: 'Не пускать',
    enterAnyway: 'Всё равно войти',
    details: 'Детали',
  },
  mbox: {
    notSupported: 'Похоже, этот браузер не поддерживает XROOM, или WebRTC отключён. 😢',
    success: 'Операция выполнена',
    failure: 'Операция не удалась',
    enterRoomName: 'Сначала введите имя комнаты',
    isCamOn: 'Камера работает?',
    isCamOnText: 'Проверьте, что камера и микрофон не заблокированы, и нажмите "Повторить".',
    isMicOn: 'Микрофон работает?',
    isMicOnText: 'Если будете говорить, то разрешите доступ к микрофону на этой странице и нажмите "Повторить".',
    iWillOnlyWatch: 'Я хочу просто смотреть',
    iWillOnlyListen: 'Я хочу просто слушать',
    screenSharingText: 'Скриншэринг невозможен. Пожалуйста, проверьте, что он не заблокирован.<br><br>Также необходим современный браузер, например, Chrome или Firefox.',
    cannotFile: 'Поскольку мы не касаемся пользовательских файлов, то и переслать мы их не можем. Вы должны сделать это online, когда кто-нибудь появится в чате.',
    cannotMessage: 'Поскольку мы не касаемся пользовательских сообщений, то и переслать мы их не можем. Вы должны сделать это online, когда кто-нибудь появится в чате.',
    roomLockedText: 'Эта комната закрыта',
    oops: 'Ой',
    kickedOutText: 'Вас удалили из комнаты',
    areYouSure: 'Вы уверены?',
    restartRequiredText: 'Эта настройка влияет на много всего, поэтому нам нужно по-быстрому перезагрузить страничку.',
    onlySafariOnIOS: 'На iOS необходим Safari. Скажите спасибо Apple.',
    cannotLoadPlugin: 'Плагин "%s" не поддерживается в этом браузере',
    confirmFileSend: 'Отправить это?',
    whatIsYourName: 'Введите имя',
    setVideoVolume: 'Громкость для этого видео',
    roomLockedTryKnockText: 'Комната заперта. Вы можете постучать в дверь, чтобы вас пустили.',
    knockingFailedText: 'Не удалось постучаться в дверь',
    doYouWantToKick: 'Вы точно хотите выгнать этого юзера?',
    deviceChanged: 'Было добавлено/убрано устройство ввода. Если оно не работает, зайдите в "Настройки" и выберите его вручную.',
    allowCameraPlz: 'После нажатия кнопки "ОК", пожалуйста, <b>разрешите</b> xroom использовать камеру.<br><br>Не волнуйтесь, если вы не хотите, чтобы вас видели, то её можно будет без проблем выключить в меню снизу перед входом в комнату.',
    tooOldBrowser: 'Ваш баузер устарел или вообще сделан в Microsoft. Многие функции могут не работать.',
    pluginsLoadFailed: 'Не удалось загрузить плагины.',
    protoExpired: 'Старая версия клиента. Пожалуйста, нажмите Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 для перезагрузки страницы. Если это сообщение повторится, попробуйте очистить кэш браузера.',
    peerError: 'Что-то пошло не так при обмене данными с другими участниками. Попробуйте перезагрузить страницу.',
    enterpriseOnly: 'Функция доступна только в корпоративной версии.',
    pluginSuggested: 'Пользователь %s предлагает установить плагин %s. Ставим?',
    hostRoleRequired: 'Для этого действия нужна роль ведущего конференции',
    alreadyHosted: 'В комнате уже есть владелец. Не пытайтесь войти в комнату с двух вкладок браузера. 😉',
    roomLockedPassword: 'Комната закрыта паролем. Введите его, если знаете.',
    roomDestroyed: 'Комната была уничтожена. Сейчас мы перенаправим вас на главную страницу.',
    roomBooked: 'Комната была забронирована и не может быть активирована с интерфейса до момента окончания брони.',
    nameRequired: 'Организатор просит вас указать имя перед входом в комнату.',
  },
  notify: {
    slowPlugins: 'Загрузка плагинов занимает слишком много времени. Попробуйте удалить самые большие.',
  },
  home: {
    nisdos: 'Мы не используем куки',
    title: 'Твоя видеоконференция на максималках',
    btnGo: 'Поехали!',
    knowMore: 'Об xroom',
    nameRoom: 'назовите комнату:',
    placeholder: 'впишите тут',
    rejoinRoom: 'или перезайти в',
  },
  wl: {
    poweredBy: 'Работает на ',
  },
  modes: {
    1: 'Конференция',
    2: 'Вебинар',
  },
  pre: {
    selectMode: 'Выберите тип комнаты',
    checkIt: 'Проверьте причёску и микрофон',
    btnGo: 'Войти',
    knockDenied: 'Ваш запрос отклонён. Вы не можете войти в комнату. :(',
    knockRequested: 'Ожидаем разрешения. Люди внутри видят вас в глазок.',
    noAudio: '⚠️ Микрофон не работает',
    roomIsBusyWebinar: 'Уже идёт стрим/вебинар (%s×🙂 / %s×🤖)',
    roomIsBusyConference: 'Уже идёт конференция (%s×🙂 / %s×🤖)',
    sizeLimitReached: 'Эта комната была ограничена в размере и предел уже был достигнут.',
    roomBooked: 'В этой комнате запланировано мероприятие на <b>%s</b>, но оно ещё не началось.',
  },
  videoMenu: {
    hint: 'Меню',
    expand: 'Расширить',
    fullscreen: 'Во весь экран',
    volume: 'Громкость ±',
    restore: 'Восстановить',
    kick: 'Кикнуть',
    mute: 'Заглушить',
  },
  controls: {
    ss: 'Экран %s',
    cam: 'Видео %s',
    mic: 'Звук %s',
    chat: 'Чат %s',
    exit: 'Выйти',
    destroy: 'Удалить комнату',
    xroom: 'Работает на xroom',
    settings: 'Настройки',
    plugins: 'Плагины',
    media: 'Медиа',
    more: 'Больше',
    letMeSpeak: 'Дайте сказать',
    lock: 'Доступ',
  },
  lockStatus: {
    locked: 'Комната закрыта',
    open: 'Комната открыта',
    protected: 'Комната запаролена',
    placeholder: 'пароль от комнаты',
  },
  reactions: {
    letMeSpeak: 'Я хочу сказать!',
  },
  waiting: {
    invite: 'Пригласите собеседников',
    beforeCopy: 'кликните чтобы скопировать',
    afterCopy: 'Готово. Теперь перешлите ссылку.',
    webinar: 'Вебинар ещё не начался',
  },
  video: {
    you: 'Ты (сменить имя)',
    someone: 'Кто-то',
    knocking: 'стучится...',
    poorNet: 'плохое соединение',
  },
  chat: {
    fileSending: 'Отправка файла: ',
    fileReceived: 'Получен файл: ',
    inputPlaceholder: 'нажмите enter для отправки ...',
    me: 'я',
    dropMe: 'Дропай файл!',
  },
  webinar: {
    peersCount: '%s людей смотрят',
  },
  settings: {
    experimental: '*) экспериментальная фича, работает нестабильно',
    showCameraWithScreen: 'Камера видна при скриншэринге *',
    audioQ: 'Качество аудио',
    videoQ: 'Качество видео',
    screenQ: 'Качество скриншеринга',
    bandwidthQ: 'Загрузка сети',
    autoGetIn: 'Входить в чат без превью',
    soundEffects: 'Звуковые эффекты',
    noisyBackground: 'Я в шумном месте',
    rtcDebug: 'Отладка RTC',
    audioDevices: 'Аудио источники',
    videoDevices: 'Видео источники',
    language: 'Язык',
    theme: 'Цветовая тема',
    server: 'Сервер',
    keepControls: 'Держать меню на плаву',
  },
  plugins: {
    by: 'от',
    size: 'Размер: %s кБ',
    searchPlaceholder: 'искать...',
    source: 'Исходный код:',
    apiDocs: 'Мануал',
    vendor: 'Автор:',
    add: {
      title: 'Добавить свой плагин',
      descr: '⚙️ Разрабатываешь плагин? Добавь его здесь для тестирования. Он сохранится только в этом браузере.',
      name: 'Как называется плагин?',
      rootUrl: 'Где корневой URL?',
      loaded: 'Урааа! Загрузилось!',
      loadFailed: 'Чо-то пошло не так.',
    }
  },
  tips: {
    prefix: 'Совет дня: ',
    lines: [
      'Часто включаете/выключаете звук? Попробуйте горячую клавишу "m".',
      'Двойной щелчок мыши по видео, и оно станет на весь экран.',
      'Надо закрыть комнату? Добавьте "Room locking" в плагинах внизу.',
      'Используете Слэк и хотите сэкономить время? Попробуйте нашего <a href="//xroom.app/en/library/slack-bot" target="_blank">Слэк-бота</a>.',
      'Не хватает видео в Телеграме? Наш <a href="//xroom.app/en/library/telegram-bot" target="_blank">Телеграм-бот</a> поможет вам.',
      'Надо быстро поделиться скопированной картинкой? Ctrl+V в чате, остальное мы сделаем.',
      'Для смены имени кликните по нему. Новое имя увидят все в группе.',
      'Ищете программу для записи экрана в пару кликов? Попробуйте для этого наш плагин.',
      'Нужно что-либо рисовать во время звонка — попробуйте плагин "Sketcher". Не забывайте, разумеется, расшаривать экран.',
    ]
  },
}
