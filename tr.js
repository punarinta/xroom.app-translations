export default {
  self: 'xroom',
  on: 'açık',
  off: 'kapalı',
  title: 'Konferans odası mı lazım?',
  buttons: {
    ok: 'Tamam',
    yes: 'Evet',
    no: 'Hayır',
    cancel: 'İptal',
    retry: 'Tekrar dene',
    chooseWindow: 'Pencere seç',
    wholeScreen: 'Tüm ekran',
    install: 'Ekle',
    uninstall: 'Çıkar',
    send: 'Gönder',
    close: 'Kapat',
    hide: 'Gizle',
    knock: 'tak tak',
    allowIn: 'İçeri al',
    deny: 'Reddet',
  },
  mbox: {
    notSupported: 'Görünüşe göre bu tarayıcı XROOM’ desteklemiyor ya da WebRTC devre dışı bırakılmış. 😢',
    success: 'İşlem başarılı',
    failure: 'İşlem başarısız',
    enterRoomName: 'Lütfen bir oda ismi girin',
    isCamOn: 'Kamera açık mı?',
    isCamOnText: 'Lütfen bu sitede kameranızı/mikrofonunuzu yanlışlıkla engellemediğinizden emin olun ve "Tekrar dene" butonuna tıklayın.',
    isMicOn: 'Mikrofon açık mı?',
    isMicOnText: 'Konuşabilmek istiyorsanız mikrofon iznine ihtiyacımız var. İzin verin ve "Tekrar dene" butonuna tıklayın.',
    iWillOnlyWatch: 'Sadece izleyeceğim',
    iWillOnlyListen: 'Sadece dinleyeceğim',
    screenSharingText: 'Ekran paylaşımına izin verilmiyor. Lütfen bu sayfa için engellenmediğinden emin olun. <br> <br> Ayrıca bu özellik yalnızca Chrome veya Firefox gibi modern tarayıcılar tarafından desteklenmektedir.',
    cannotFile: 'Dosyalarınıza dokunmadığımız için biri bağlandıktan sonra dosya gönderemezsiniz, herkes odadayken göndermelisiniz.',
    cannotMessage: 'Mesajlarınıza dokunmadığımız için biri bağlandıktan sonra mesaj gönderemezsiniz, herkes odadayken göndermelisiniz.',
    roomLockedText: 'Bu oda kilitli',
    oops: 'Üzgünüz',
    kickedOutText: 'Odadan kovuldunuz',
    areYouSure: 'Emin misiniz?',
    doYouWantToLeave: 'Ayrılmak istediğinize emin misiniz?',
    doYouWantToLeaveAsHost: 'Yayını durdurmak istediğinize emin misiniz?',
    restartRequiredText: 'Bu ayar çok fazla şeyi etkilediği için sayfayı yeniden yüklemeniz gerekiyor. Endişelenmeyin, hızla yüklenecektir!',
    onlySafariOnIOS: 'iOS’ta sadece Safari desteklenmektedir. "Teşekkürler", Apple!',
    cannotLoadPlugin: '"%s" eklentisi tarayıcınızı desteklemiyor',
    confirmFileSend: 'Bunu göndermek istiyor musunuz?',
    whatIsYourName: 'İsminizi girin',
    setVideoVolume: 'Bu video için sesi ayarla',
    roomLockedTryKnockText: 'Oda şu anda kilitli. Kapıyı "çalarak" girmek için izin isteyebilirsiniz.',
    knockingFailedText: 'Kapı çalma girişimi başarısız',
    doYouWantToKick: 'Bu kullanıcıyı kovmak istiyor musunuz?',
    deviceChanged: 'Yeni bir girdi cihazı taktınız/çıkardınız. Çalışmazsa Ayarlar´dan manuel olarak seçin.',
    allowCameraPlz: 'Tamam´ tuşuna bastıktan sonra lütfen xroom´un kameranızı kullanmasına <b>izin verin</b>. Endişelenmeyin, eğer görünmek istemiyorsanız odaya girmeden önce sayfanın altındaki menüden tekrar kapatabilirsiniz.',
    tooOldBrowser: 'Tarayınız çok eski ya da Microsoft tarafından üretilmiş. Pek çok özelliği kullanamayabilirsiniz.',
    pluginsLoadFailed: 'Eklentiler yüklenemedi',
    researchConsent: 'Merhaba! <br> <br>Şu anda verdiğimiz hizmeti geliştirmek için önemli bir güncelleme yapıyoruz.<br><br>Herhangi bir hatayla karşılaşırsanız lütfen hello@xroom.app adresinden bize bildirin.',
    protoExpired: 'Too old client version. Please press Ctrl&nbsp;+&nbsp;F5 to reload. If you then see this message again please clear browser cache manually.',
    peerError: 'Something went wrong when exchanging data with your peers. We suggest reloading the page.',
    enterpriseOnly: 'This is an enterprise only feature.',
  },
  home: {
    nisdos: 'Çerez kullanmıyoruz',
    title: 'Kişisel konferans odanız',
    btnGo: 'Başla!',
    knowMore: 'xroom hakkında',
    nameRoom: 'odanıza isim verin:',
    placeholder: 'buraya yazın',
    rejoinRoom: 'ya da tekrar katıl',
  },
  wl: {
    poweredBy: '… tarafından desteklenmektedir',
  },
  pre: {
    checkIt: 'Mikrofonunuzu ve saçınızı kontrol edin',
    btnGo: 'İçeri gir',
    knockDenied: 'Giriş isteğiniz reddedildi. Odaya giremezsiniz.:(',
    knockRequested: 'İzin için bekleniyor. İnsanlar kapı deliğinden sizi görebilirler. 👀',
    noAudio: '⚠️ Mikrofon sinyali algılanmadı',
    roomIsBusyWebinar: 'Bir webinar/yayın başladı',
    roomIsBusyConference: 'Bir konferans başladı',
    startWebinar: 'Yayın/webinar modunda başla',
  },
  videoMenu: {
    hint: 'Menüyü değiştir',
    expand: 'Genişlet',
    fullscreen: 'Tam ekran',
    volume: 'Ses ±',
    restore: 'Geri al',
    kick: 'Kov',
  },
  controls: {
    ss: 'Ekran paylaşımı %s',
    cam: 'Kamera %s',
    mic: 'Mikrofon %s',
    chat: 'Sohbet %s',
    exit: 'Çıkış',
    xroom: 'xroom tarafından desteklenmektedir',
    settings: 'Ayarlar',
    plugins: 'Eklentiler',
    media: 'Medya',
    more: 'Daha fazla',
    letMeSpeak: 'Konuşmama izin ver',
  },
  reactions: {
    letMeSpeak: 'Konuşmak istiyorum!',
  },
  waiting: {
    invite: 'Meslektaşlarınızı davet edin',
    beforeCopy: 'kopyalamak için tıklayın',
    afterCopy: 'Kopyalandı. Artık paylaşabilirsiniz!',
    webinar: 'Webinar henüz başlamadı',
  },
  video: {
    you: 'Siz (isim girmek için tıklayın)',
    someone: 'Biri',
    knocking: 'kapıyı çalıyor...',
    poorNet: 'zayıf bağlantı',
  },
  chat: {
    fileSending: 'Dosya gönderiliyor: ',
    fileReceived: 'Dosya alındı: ',
    inputPlaceholder: 'mesaj yazıp enter tuşuna basın...',
    me: 'ben',
    dropMe: 'Beni çıkar!',
  },
  webinar: {
    peersCount: '%s kişi izliyor',
  },
  settings: {
    experimental: '*) deneyseldir, istikrarsız çalışmaktadır',
    showCameraWithScreen: 'Ekran paylaşımı sırasında kamerayı göster *',
    qualityLevel: 'Yüksek kalite (daha çok trafik)',
    autoGetIn: 'Sohbetleri önizleme olmadan başlat',
    soundEffects: 'Ses efektleri',
    noisyBackground: 'Gürültülü bir yerdeyim',
    rtcDebug: 'RTC hatalarını ayıkla',
    audioDevices: 'Ses kaynakları',
    videoDevices: 'Video kaynakları',
    language: 'Dil',
    theme: 'Renk teması',
    server: 'Server',
  },
  plugins: {
    by: 'Geliştirici:',
    size: 'boyut: %s kB',
    searchPlaceholder: 'arama...',
    source: 'kaynak kodu',
    add: {
      title: 'Yeni eklenti ekle',
      descr: '⚙️ Yeni bir eklenti mi geliştiriyorsunuz? Test etmek için buraya ekleyin. Eklenti kaydedilmez ve sayfayı yeniden yüklemek silinmesine yol açar. Eklenti API kılavuzuna <a href="https://github.com/punarinta/xroom-plugins" target="_blank"> adresinden ulaşabilirsiniz</a>.',
      name: 'Eklentinin ismi ne?',
      rootUrl: 'Eklentinin kaynağı ne?',
      loaded: 'Holey, yüklendi!',
      loadFailed: 'Eklenti yüklenemedi',
    }
  },
  feedback: {
    header: 'Üzgünüz, bir saniye bekleyin...',
    question: 'Bu kez her şey yolunda mı?',
    videoFroze: 'Hayır, video dondu',
    soundLagged: 'Hayır, ses geç geliyor',
    cantConnect: 'Hayır, bağlanamayan biri var',
    smthElse: 'Başka bir sorun var:',
    feedbackInput: 'geri bildirim bırakın...',
    contactMe: 'Lütfen bana ulaşın:',
    emailInput: 'e-posta adresiniz...',
  },
  tips: {
    prefix: 'Günlük ipucu: ',
    lines: [
      'Sık sık sesi kapatıp açıyor musunuz? "m" kısayol tuşunu kullanabilirsiniz.',
      'Videoya çift tıklayarak tam ekran yapabilirsiniz.',
      'Odanızı kilitlemek mi istiyorsunuz? Aşağıdaki eklentilerden oda kilitlemeyi ekleyin.',
      'Daha fazla zaman kazanmak isteyen Slack kullanıcıları, <a href="//about.xroom.app/en/library/slack-bot" target="_blank">Slack botumuzu</a> deneyin.',
      'Telegram´da görüntülü arama mı kaçırdınız? <a href="//about.xroom.app/en/library/telegram-bot" target="_blank">Telegram botumuz</a> yardım için burada.',
      'Kopyaladığınız bir görseli paylaşmanız mı gerekiyor? Sohbette Ctrl+V tuşlarına basın, gerisini biz hallederiz.',
      'Adınızı hem yerel olarak hem de diğer kullanıcılar için değiştirmek için adınıza tıklayın.',
      'Ekranınızı sadece birkaç tıkla kaydetmek istiyorsanız ekran kaydetme eklentimizi deneyin.',
      'Görüşme sırasında çizim yapmanız gerekiyorsa çizim eklentisini deneyin. Ekran paylaşımını açmayı unutmayın.',
      'Kendinize tekrar isim vermek için isminize ya da "Siz" seçeneğine tıklayın.',
    ]
  },
}
