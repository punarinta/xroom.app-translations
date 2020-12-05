export default {
  self: 'xroom',
  on: 'on',
  off: 'off',
  title: 'Need a conf room?',
  buttons: {
    ok: 'OK',
    yes: 'Yes',
    no: 'No',
    cancel: 'Cancel',
    retry: 'Retry',
    chooseWindow: 'Choose a window',
    wholeScreen: 'Whole screen',
    install: 'Add',
    uninstall: 'Remove',
    send: 'Send',
    close: 'Close',
    hide: 'Hide',
    knock: 'Knock-knock',
    allowIn: 'Allow in',
    deny: 'Deny',
    enterAnyway: 'Enter anyway',
    enterHost: 'Enter as a host',
    details: 'Details',
  },
  mbox: {
    notSupported: 'It looks like this browser does not support XROOM or WebRTC is disabled. 😢',
    success: 'Operation succeeded',
    failure: 'Operation failed',
    enterRoomName: 'Enter a room name please',
    isCamOn: 'Is the camera on?',
    isCamOnText: 'Is the camera on? Please check that you have not accidentally blocked your camera on this site and press "Retry". <br><br>Or is the camera being used in another tab? If not, try to close your browser or reload the page. Otherwise, read xroom.app\'s 7 tips that fix 99% of issues <a href="https://xroom.app/en/blog/2020-11-19-top-troubleshooting/">here</a>.',
    isMicOn: 'Is the microphone on?',
    isMicOnText: 'Is the microphone on? Please check that you have not accidentally blocked your mic on this site and press "Retry". <br><br>Or is the microphone being used in another tab? If not, try to close your browser or reload the page. Otherwise, read xroom.app\'s 7 tips that fix 99% of issues <a href="https://xroom.app/en/blog/2020-11-19-top-troubleshooting/">here</a>. ',
    iWillOnlyWatch: 'I will only watch',
    iWillOnlyListen: 'I will only listen',
    screenSharingText: 'Screen sharing is not allowed. Please ensure it is not blocked for this page.<br><br>Also, this feature is only supported by modern browsers like Chrome or Firefox.',
    cannotFile: 'Since we don\'t even touch your files we cannot deliver them after someone connects. You need to do it when people are in.',
    cannotMessage: 'Since we don\'t even touch your messages we cannot deliver them after someone connects. You need to do it when people are in.',
    roomLockedText: 'This room is locked',
    oops: 'Sorry',
    kickedOutText: 'You have been kicked out',
    areYouSure: 'Are you sure?',
    restartRequiredText: 'This setting affects too much stuff, so a reload is required. That\'s quick, don\'t worry!',
    onlySafariOnIOS: 'On iOS only Safari is supported. "Thank you", Apple!',
    cannotLoadPlugin: 'Plugin "%s" does not support your browser',
    confirmFileSend: 'Do you want to send this?',
    whatIsYourName: 'Enter your name',
    setVideoVolume: 'Set volume for this video',
    roomLockedTryKnockText: 'Room is currently locked. You can ask for a permission to enter by "knocking" the door.',
    knockingFailedText: 'Knocking attempt failed',
    doYouWantToKick: 'Do you want to kick this user?',
    deviceChanged: 'You have attached/removed a new input device. If it does not work choose it manually from Settings.',
    allowCameraPlz: 'After you press OK please <b>allow</b> xroom to use your camera.<br><br>Don\'t worry! You will be able to turn it off again before entering the room from the menu at the bottom if you wish to stay hidden.',
    tooOldBrowser: 'Your browser is too old or is produced by Microsoft. Many features may be missing.',
    pluginsLoadFailed: 'Failed loading plugins',
    protoExpired: 'Too old client version. Please press Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 to reload. If you then see this message again, please clear browser cache manually.',
    peerError: 'Something went wrong when exchanging data with your peers. We suggest reloading the page.',
    enterpriseOnly: 'This is an enterprise only feature.',
    pluginSuggested: 'User %s suggested you to install plugin %s. Do you wish to do it?',
    hostRoleRequired: 'Host role is required for this action.',
    alreadyHosted: 'Room is already hosted. Do not enter the same room from 2 browser tabs. 😉',
    roomLockedPassword: 'Room is currently locked with a password. Enter it below if you know it.',
    roomDestroyed: 'Room has been deleted. You will be redirected to the starting page.',
    roomBooked: 'Room has been booked and cannot be created through the interface until booking expires.',
    nameRequired: 'Room host requires you to set your name first.',
    pipNotSupported: 'Your browser supports "picture-in-picture" mode but it is disabled somewhere in its settings.',
    copyFailed: 'Copying failed. This may be a result of your device restrictions.',
    noCryptoWarning: 'This browser does not support cryptography. It is not safe to continue.',
    bigFileDecryptWarn: 'Downloading has started. It may take a few seconds to decrypt the file.',
    roomMigrated: 'This room has been taken over by a booked meeting. Your call has been moved to another place and you will now be redirected there.',
  },
  notify: {
    slowPlugins: 'Plugins take too much time to load. Consider removing the heaviest.',
  },
  home: {
    nisdos: 'We do not use cookies on this page',
    title: 'Your personal conference room',
    btnGo: 'Go!',
    knowMore: 'About xroom.app',
    nameRoom: 'name your room:',
    placeholder: 'type here',
    rejoinRoom: 'or rejoin',
  },
  wl: {
    poweredBy: 'Powered by ',
  },
  modes: {
    1: 'Conference',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Choose room type',
    checkIt: 'Check your mic and haircut',
    btnGo: 'Get in',
    knockDenied: 'Your knock request has been denied. You can\'t enter the room. :(',
    knockRequested: 'Awaiting permission. Please standy.',
    noAudio: '⚠️ No mic signal detected <span>👉 ⚙ 🎤️</span>',
    roomIsBusyWebinar: '<span>A webinar/stream is now running</span> <span>(%s×🙂 / %s×🤖)</span>',
    roomIsBusyConference: '<span>A conference is now running</span> <span>(%s×🙂 / %s×🤖)</span>',
    sizeLimitReached: 'This room was limited by size and the limit is already reached',
    roomBooked: 'There\'s going to be an event in this room at <b>%s</b>, but it hasn\'t started yet.',
  },
  videoMenu: {
    hint: 'Toggle menu',
    expand: 'Expand',
    pip: 'Keep on top',
    fullscreen: 'Full screen',
    volume: 'Volume ±',
    restore: 'Restore',
    kick: 'Kick',
    mute: 'Mute',
  },
  controls: {
    ss: 'Screen sharing %s',
    cam: 'Cam %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Leave',
    destroy: 'Delete room',
    xroom: 'Powered by\nxroom.app',
    settings: 'Settings',
    plugins: 'Plugins',
    media: 'Media',
    more: 'More',
    letMeSpeak: 'Let me speak',
    lock: 'Locking',
  },
  lockStatus: {
    locked: 'Room is locked',
    open: 'Room is open',
    protected: 'Room is password-protected',
    placeholder: 'room password',
  },
  reactions: {
    letMeSpeak: 'I want to speak!',
  },
  waiting: {
    invite: 'Invite your colleagues',
    beforeCopy: 'click to copy',
    afterCopy: 'Copied. Now share it!',
    webinar: 'Webinar not started yet',
  },
  video: {
    you: 'You (click to name)',
    someone: 'Someone',
    knocking: 'is knocking...',
    poorNet: 'poor connection',
  },
  chat: {
    fileSending: 'Sending file: ',
    fileReceived: 'File received: ',
    inputPlaceholder: 'type a message and press enter ...',
    me: 'me',
    dropMe: 'Drop me!',
  },
  webinar: {
    peersCount: {
      one: '%s person is watching',
      many: '%s persons are watching',
    },
  },
  settings: {
    experimental: '*) experimental, works unstably',
    screenFace: 'Show face on shared screen (BETA)',
    flipFace: 'Mirror your camera preview',
    audioQ: 'Audio quality',
    videoQ: 'Video quality',
    screenQ: 'Screen sharing quality',
    bandwidthQ: 'Bandwidth profile',
    autoGetIn: 'Start chats without preview',
    soundEffects: 'Sound effects',
    noisyBackground: 'I am in a noisy place',
    rtcDebug: 'Debug RTC',
    audioDevices: 'Audio sources',
    videoDevices: 'Video sources',
    language: 'Language',
    theme: 'Color theme',
    server: 'Server',
    keepControls: 'Keep controls visible',
  },
  plugins: {
    by: 'by',
    size: 'Size: %s kB',
    searchPlaceholder: 'search...',
    source: 'Source code: ',
    apiDocs: 'API docs',
    vendor: 'Vendor:',
    add: {
      title: 'Add new plugin',
      descr: '⚙️ Developing a new plugin? Add it here to test. It is not saved anywhere, but in your browser.',
      name: 'What\'s the plugin name?',
      rootUrl: 'Where is the plugin root?',
      loaded: 'Yaay! It\'s loaded!',
      loadFailed: 'Failed loading plugin',
    }
  },
}
