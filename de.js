export default {
  self: 'xroom',
  on: '(+)',
  off: '(-)',
  title: 'Konferenzraum benötigt?',
  buttons: {
    ok: 'OK',
    yes: 'Ja',
    no: 'Nein',
    cancel: 'Abbrechen',
    retry: 'Nochmals versuchen',
    chooseWindow: 'Fenster auswählen',
    wholeScreen: 'Ganzer Bildschirm',
    install: 'Hinzufügen',
    uninstall: 'Entfernen',
    send: 'Senden',
    close: 'Schliessen',
    hide: 'Verbergen',
    knock: 'Anklopfen',
    allowIn: 'Zutritt erlauben',
    deny: 'Ablehnen',
    enterAnyway: 'Trotzdem eintreten',
    enterHost: 'Enter as a host',
    details: 'Details',
  },
  mbox: {
    notSupported: 'Anscheinend unterstützt dieser Browser XROOM nicht oder WebRTC ist deaktiviert. 😢',
    success: 'Operation erfolgreich',
    failure: 'Operation misslungen',
    enterRoomName: 'Bitte einen Raumnamen eintragen',
    isCamOn: 'Ist die Kamera eingeschaltet?',
    isCamOnText: 'Bitte stellen Sie sicher, dass nicht versehentlich die Kamera oder das Mikrofon für diese Seite blockiert ist, und klicken Sie dann auf "Nochmals versuchen".',
    isMicOn: 'Ist das Mikrofon eingeschaltet?',
    isMicOnText: 'Um zu sprechen, ist die Freigabe des Mikrofons erforderlich. Bitte geben Sie es für diese Seite frei und klicken Sie dann auf "Nochmals versuchen".',
    iWillOnlyWatch: 'Ich möchte nur zuschauen',
    iWillOnlyListen: 'Ich möchte nur zuhören',
    screenSharingText: 'Bildschirm teilen ist nicht freigegeben. Bitte überprüfen Sie, dass es nicht blockiert ist für diese Seite.<br><br> Ausserdem wird diese Funktion nur von modernen Browsern unterstützt, wie Chrome oder Firefox.',
    cannotFile: 'Weil wir übermittelte Dateien nicht einmal berühren, können wir sie nicht ausliefern, wenn gleichzeitig noch Leute den Raum betreten. Dateien können erst übermittelt werden, nachdem alle Teilnehmer beigetreten sind.',
    cannotMessage: 'Weil wir übermittelte Nachrichten nicht einmal berühren, können wir sie nicht ausliefern, wenn gleichzeitig noch Leute den Raum betreten. Nachrichten können erst übermittelt werden, nachdem alle Teilnehmer beigetreten sind.',
    roomLockedText: 'Dieser Raum ist abgeschlossen',
    oops: 'Sorry',
    kickedOutText: 'Sie wurden hinausgeworfen',
    areYouSure: 'Sind Sie sicher?',
    restartRequiredText: 'Diese Einstellung wirkt sich auf zu viele Funktionen aus, deshalb ist ein Reload erforderlich. Das geht schnell, machen Sie sich keine Sorgen!',
    onlySafariOnIOS: 'Auf iOS wird nur Safari unterstützt. "Danke", Apple!',
    cannotLoadPlugin: 'Das Plugin "%s" unterstützt Ihren Browser nicht',
    confirmFileSend: 'Möchten Sie dies absenden?',
    whatIsYourName: 'Bitte tragen Sie Ihren Namen ein',
    setVideoVolume: 'Legen Sie die Lautstärke für dieses Video fest',
    roomLockedTryKnockText: 'Der Raum ist zur Zeit abgeschlossen. Sie können um Erlaubnis zum Eintritt fragen, indem Sie an die Türe "anklopfen".',
    knockingFailedText: 'Anklopfen misslungen',
    doYouWantToKick: 'Möchten Sie diesen Teilnehmer rauswerfen?',
    deviceChanged: 'Sie haben ein neues Empfangsgerät angeschlossen/entfernt. Wenn es nicht funktioniert, wählen Sie es manuell in den Einstellungen aus.',
    allowCameraPlz: 'Wenn Sie OK gedrückt haben, bitte <b>erlauben Sie</b> xroom Ihre Kamera zu benützen.<br><br>Machen Sie sich keine Sorgen! Sie können sie über das Menu unten wieder abschalten, bevor Sie den Raum betreten, wenn Sie unsichtbar bleiben wollen.',
    tooOldBrowser: 'Ihr Browser ist zu alt oder ist ein Microsoft-Produkt. Manche Funktionen könnten unvollständig sein.',
    pluginsLoadFailed: 'Plugins konnten nicht geladen werden',
    protoExpired: 'Zu alte Client Version. Bitte drücken Sie Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 um neu zu starten. Wenn dann diese Nachricht wieder erscheint, leeren Sie bitte den Browser Cache manuell.',
    peerError: 'Irgendetwas ging schief beim Datenaustausch mit Ihren Peers. Wir empfehlen, die Seite neu zu laden.',
    enterpriseOnly: 'Diese Funktion steht nur Firmen zur Verfügung.',
    pluginSuggested: 'Der Teilnehmer %s schlägt vor, dass Sie das Plugin %s installieren. Möchten Sie das tun?',
    hostRoleRequired: 'Diese Aktion erfordert die Rolle eines Hosts.',
    alreadyHosted: 'Dieser Raum wird bereits gehostet. Bitte den Raum nicht von zwei Browser-Tabs aus betreten. 😉',
    roomLockedPassword: 'Der Raum ist zur Zeit passwortgesichert. Tragen Sie das Passwort unten ein, wenn Sie es kennen.',
    roomDestroyed: 'Der Raum wurde zerstört. Sie werden zur Startseite umgeleitet.',
    roomBooked: 'Der Raum wurde gebucht und kann nicht aus der Schnittstelle erstellt werden, bis die Buchung abgelaufen ist.',
    nameRequired: 'Der Host des Raums bittet Sie, zuerst Ihren Namen einzutragen.',
    pipNotSupported: 'Your browser supports "picture-in-picture" mode but it is disabled somewhere in its settings.',
    copyFailed: 'Copying failed. This may be a result of your device restrictions.',
    noCryptoWarning: 'This browser does not support cryptography. It is not safe to continue.',
    bigFileDecryptWarn: 'Downloading has started. It may take a few seconds to decrypt the file.',
    roomMigrated: 'This room has been taken over by a booked meeting. Your call has been moved to another place and you will now be redirected there.',
  },
  notify: {
    slowPlugins: 'Die Plugins brauchen zuviel Zeit, um zu laden. Sie könnten die schwersten Plugins entfernen.',
  },
  home: {
    nisdos: 'Wir setzen keine Cookies ein',
    title: 'Ihr persönlicher Konferenzraum',
    btnGo: 'Los!',
    knowMore: 'Über xroom',
    nameRoom: 'Namen für Ihren Raum eintragen:',
    placeholder: 'Hier tippen',
    rejoinRoom: 'oder hier wieder eintreten',
  },
  wl: {
    poweredBy: 'Unterstützt von ',
  },
  modes: {
    1: 'Konferenz',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Bitte wählen Sie das Raumformat',
    checkIt: 'Überprüfen Sie Ihr Mikrofon und Ihren Haarschnitt...',
    btnGo: 'Eintreten',
    knockDenied: 'Ihr Klopfsignal wurde leider abgelehnt. Sie können den Raum nicht betreten. :(',
    knockRequested: 'Warten auf Zutrittserlaubnis. Die Leute im Raum können Sie durch ein Guckfenster sehen. 👀',
    noAudio: '⚠️ Kein Mikrofon-Signal entdeckt',
    roomIsBusyWebinar: '<span>Ein Webinar/Stream läuft gerade</span> <span>(%s×🙂 / %s×🤖)</span>',
    roomIsBusyConference: '<span>Eine Konferenz läuft gerade</span> <span>(%s×🙂 / %s×🤖)</span>',
    sizeLimitReached: 'Dieser Raum ist in der Grösse beschränkt, und das Limit ist erreicht',
    roomBooked: 'There is going to be an event in this room at <b>%s</b>, but it has not started yet.',
  },
  videoMenu: {
    hint: 'Menu umschalten',
    expand: 'Erweitern',
    pip: 'Keep on top',
    fullscreen: 'Vollbildschirm',
    volume: 'Lautstärke ±',
    restore: 'Wiederherstellen',
    kick: 'Rauswerfen',
    mute: 'Stummschalten',
  },
  controls: {
    ss: 'Bildschirm teilen %s',
    cam: 'Kamera %s',
    mic: 'Mikrofon %s',
    chat: 'Chat %s',
    exit: 'Verlassen',
    destroy: 'Zerstören',
    xroom: 'Unterstützt durch xroom',
    settings: 'Einstellungen',
    plugins: 'Plugins',
    media: 'Medien',
    more: 'Mehr',
    letMeSpeak: 'Ich möchte sprechen',
    lock: 'Locking',
  },
  lockStatus: {
    locked: 'Room is locked',
    open: 'Room is open',
    protected: 'Room is password-protected',
    placeholder: 'room password',
  },
  reactions: {
    letMeSpeak: 'Ich möchte sprechen!',
  },
  waiting: {
    invite: 'Laden Sie Ihre Kollegen ein',
    beforeCopy: 'Mit Klicken kopieren',
    afterCopy: 'Kopiert. Jetzt teilen!',
    webinar: 'Das Webinar hat noch nicht begonnen',
  },
  video: {
    you: 'Sie (klicken, um sich einen Namen zu geben)',
    someone: 'Jemand',
    knocking: 'klopft an...',
    poorNet: 'schwache Verbindung',
  },
  chat: {
    fileSending: 'Datei wird gesendet: ',
    fileReceived: 'Datei erhalten: ',
    inputPlaceholder: 'Schreiben Sie eine Nachricht und drücken Sie senden ...',
    me: 'mich',
    dropMe: 'Lassen Sie mich aus!',
  },
  webinar: {
    peersCount: '%s Leute schauen zu',
  },
  settings: {
    experimental: '*) experimentell, arbeitet nicht stabil',
    screenFace: 'Kamera anzeigen, während der Bildschirm geteilt wird (BETA)',
    flipFace: 'Mirror your camera',
    audioQ: 'Audio quality',
    videoQ: 'Video quality',
    screenQ: 'Screen sharing quality',
    bandwidthQ: 'Bandwidth profile',
    autoGetIn: 'Chat ohne Vorschau starten',
    soundEffects: 'Toneffekte',
    noisyBackground: 'Ich bin in lärmiger Umgebung',
    rtcDebug: 'RTC debuggen',
    audioDevices: 'Audio Quellen',
    videoDevices: 'Video Quellen',
    language: 'Sprache',
    theme: 'Farb-Theme',
    server: 'Server',
    keepControls: 'Schalter sichtbar halten',
  },
  plugins: {
    by: 'von',
    size: 'Grösse: %s kB',
    searchPlaceholder: 'suchen...',
    source: 'Quellcode: ',
    apiDocs: 'API Dokumente',
    vendor: 'Verkäufer:',
    add: {
      title: 'Neues Plugin hinzufügen',
      descr: '⚙️ Entwickeln Sie ein neues Plugin? Fügen Sie es hier hinzu zum Testen. Es wird nirgends abgespeichert, ausser in Ihrem Browser.',
      name: 'Wie ist der Name des Plugins?',
      rootUrl: 'Wo ist die root des Plugins?',
      loaded: 'Super! Es wird geladen!',
      loadFailed: 'Laden des Plugins misslungen',
    }
  },
}
