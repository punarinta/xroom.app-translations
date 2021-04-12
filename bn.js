module.exports = {
  self: 'xroom',
  title: 'আপনার সুরক্ষিত কর্মক্ষেত্র',
  goToDash: 'ড্যাশবোর্ড এ যান',
  netStatus: 'কানেকশন',
  buttons: {
    ok: 'ঠিক আছে',
    cancel: 'বাতিল করুন',
    yes: 'হ্যাঁ',
    no: 'না',
    chN: 'পছন্দ %s',
    install: 'যোগ করুন',
    uninstall: 'অপসারণ করুন',
    details: 'বিস্তারিত দেখুন',
    close: 'বন্ধ করুন',
    next: 'পরবর্তী',
    back: 'পেছনে',
    retry: 'আবার চেষ্টা করুন',
    dismiss: 'বরখাস্ত করুন',
    allow: 'অনুমতি দিন',
    stop: 'বন্ধ করুন',
    decideLater: 'পরে সিদ্ধান্ত নিন',
  },
  mbox: {
    notSupported: 'দেখে মনে হচ্ছে এই ব্রাউজারটি xroom.app সমর্থন করে না বা WebRTC অক্ষম 😢',
    protoExpired: 'ক্লায়েন্ট ভার্শনটি খুব পুরানো। পুনরায় লোড করার জন্য দয়া করে Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 টিপুন। যদি আপনি এই বার্তাটি আবার দেখেন তবে দয়া করে আপনার ব্রাউজারের ক্যাশে ম্যানুয়ালি পরিষ্কার করুন।',
    areYouSure: 'আপনি কি নিশ্চিত?',
    noPermission: 'আপনার ব্রাউজার থেকে অনুমতি অর্জন করা যাবে না। দয়া করে নিশ্চিত করুন যে সেগুলি অবরুদ্ধ নয়।',
    mediaBlocked: 'ক্যামেরা অ্যাক্সেস অবরুদ্ধ। আপনি এটি অন্য ব্রাউজার বা প্রোগ্রামে ব্যবহার করছেন না তা নিশ্চিত করুন।',
    mediaError: 'আমরা সমস্যাটি চিহ্নিত করতে পারিনি। তবে কিছু ভুল আছে। দয়া করে আপনার ব্রাউজারের অনুমতিগুলি পরীক্ষা করুন।',
    whatIsYourName: 'আপনার নাম কি?',
    noPeersP2P: 'মেসেজ সেন্ড করার জন্য xroom.app-এর কোনো সার্ভার ব্যবহার করা হয় না এবং মিটিং এ নতুন কেও অংশগ্রহণ করার পর তাকে পুনরায় মেসেজ পাঠানো সম্ভব হবে না। মেসেজ পাঠানোর জন্য দয়াকরে নতুন কোনো অংশগ্রহণকারী মিটিং এ যোগ দেয়া পর্যন্ত অপেক্ষা করুন।',
    noPeers: 'যেহেতু মেসেজ সেন্ড করার জন্য কোনো সার্ভার ব্যবহার করা হয় না, সেহেতু মিটিং এ নতুন কেও অংশগ্রহণ করার পর তাকে মেসেজ পাঠানো সম্ভব হবে না। মেসেজ পাঠানোর জন্য দয়াকরে নতুন কোনো অংশগ্রহণকারী মিটিং এ যোগ দেয়া পর্যন্ত অপেক্ষা করুন।',
    password: 'রুম পাসওয়ার্ড সেট করুন।',
    roomLocked: 'এই ঘরটি লক করা। আপনি কি নক করতে চান?',
    roomProtected: 'এই ঘরটি একটি পাসওয়ার্ড দিয়ে লক করা। নীচে পাসওয়ার্ড প্রবেশ করুন।',
    roomIsFull: 'ঘরটা পূর্ণ। আপনি প্রবেশ করতে পারবেন না।',
    alreadyHosted: 'আপনি ইতিমধ্যে ঘরে রয়েছেন। আপনি সম্ভবত বেশ কয়েকটি ব্রাউজার ট্যাব একবারে খোলার মাধ্যমে পরীক্ষা করছেন। আপনি প্রবেশ করতে চান? হোস্ট ফীচার গুলো এখানে কাজ নাও করতে পারে।',
    youAreKicked: 'আপনাকে এই ঘর থেকে সরিয়ে দেওয়া হয়েছে।',
    setQFailed: 'অনুরোধকৃত মান সেট করা সম্ভব নয়। আপনার হার্ডওয়্যার বা ব্রাউজার এটি সমর্থন নাও করতে পারে।',
    bookingEnded: 'এই বুকিং এখন শেষ। রুমটি  অন্য ইভেন্টের জন্য বুক করা হয়েছে, তাই আপনার মিটিংটি  শেষ করতে সক্ষম হবার জন্য আপনাকে এখন অন্য ঘরে পুনর্নির্দেশ করা হবে।',
    bookingEndedHost: 'এই রুমের  জন্য বর্তমান বুকিং শীঘ্রই শেষ হবে। একই রুমের নাম ব্যবহার করে অন্য বুকিং নির্ধারিত হওয়ার কারণে দয়া করে এখনই একটি অপশন সিলেক্ট করুন।<br/><br/>1. একটি নতুন মিটিং এ যান। নতুন হোস্ট কী সহ মিটিং এ প্রবেশের জন্য আমরা আপনাকে ড্যাশবোর্ডে পাঠাব।<br/><br/>2. মিটিং এ থাকুন। এই কলটি শেষ করতে আমরা আপনার জন্য একটি নতুন ঘর তৈরি করব।',
    pluginsLoadFailed: 'প্লাগইনগুলি লোড করা ব্যর্থ হয়েছে।',
    roomDestroyed: 'রুম মুছে ফেলা হয়েছে। আপনাকে প্রারম্ভিক পৃষ্ঠায় পুনর্নির্দেশ করা হবে।',
    encInfo: 'এনক্রিপশন: এন্ড-টু-এন্ড, ECDH+AES<br/>Hash: <code>%s</code>',
    encFailure: 'এনক্রিপশন সমর্থিত নয়।',
    avaTooBig: 'ফাইলের আকার খুব বড়। পরিবর্তে সহজ ভেক্টর চিত্র ব্যবহার করুন।',
    cannotLoadPlugin: '"%s" প্লাগিন টি  আপনার ব্রাউজারটি সমর্থন করে না।',
    confirmLeave: 'আপনি কি কলটি ছেড়ে যেতে চান?',
    confirmDestroy: 'আপনি কি নিশ্চিত যে সমস্ত অংশগ্রহণকারীদের জন্য সভাটি শেষ করতে চান?',
    feedbackDetected: 'আমরা আপনার মাইক্রোফোন এ নয়েস খুঁজে পেয়েছি এবং আপনাকে মিউট করেছি। এই সমস্যা সমাধান এর জন্য আপনি হেডফোন ব্যবহার করতে পারেন অথবা রুম এ প্রবেশ করার আগে পর্যন্ত আপনার মাইক্রোফোন বন্ধ করে রাখতে পারেন।',
    guestKnock: 'ব্যবহারকারী <b>%s</b> প্রবেশ করতে চায়। আপনি কি অনুমতি দিতে চান? <br/>আপনি ওয়েটিং রুমের ট্যাবে পরে সিদ্ধান্ত নিতে পারেন।',
    safariNotSupported: 'এই বৈশিষ্ট্যটি সাময়িকভাবে সাফারিতে সমর্থিত নয়।',
    p2pNotSupported: 'পিয়ার-টু-পিয়ার মোডে এই ফীচার টি নেই।.',
    takeOverSharing: 'এখন আপনার স্ক্রিন শেয়ার বর্তমান স্ক্রিন শেয়ার অধিবেশনটিকে শেষ করবে।',
    p2pInfo: 'পি 2 পি মোডটি আমাদের কেন্দ্রিয়ায়িত সার্ভারগুলির ব্যবহার অক্ষম করে।<br/><u>ঘরের স্থিতিশীলতা আপনার নেটওয়ার্কের উপর নির্ভর করবে।</u><br/>2 জনের ব্যক্তিগত বৈঠকের জন্য প্রস্তাবিত।',
    confirmKick: 'আপনি কি নিশ্চিত যে আপনি %কে রুম থেকে রিমুভ করতে চান?',
    comingSoon: 'This feature is coming soon.',
    audioChanged: 'অডিও ইনপুট ডিভাইস যুক্ত করা হয়েছে। আপনি কি এখন কোনটি ব্যবহার করবেন তা নির্বাচন করতে চান?',
  },
  notify: {
    slowPlugins: 'অনেক বেশি প্লাগইন ধীর লোডিং সময়ের কারণ হতে পারে। বৃহত্তম প্লাগইন মোছার বিষয়টি বিবেচনা করুন।',
    peerLost: '%s...এর সাথে পুনঃসংযোগ হচ্ছে',
    roomLocked: 'রুম টি লক করা',
    roomUnlocked: 'রুম টি আনলক করা',
    roomPwdSet: 'রুম টি পাসওয়ার্ড সেট করা',
    roomPwdReset: 'ঘরের পাসওয়ার্ড সরানো হয়েছে',
    devicesChanged: 'ডিভাইসগুলি পরিবর্তিত হয়েছে',
    hostMutedAudio: 'হোস্ট আপনার মাইক্রোফোনটি নিঃশব্দ করেছে',
    hostMutedVideo: 'হোস্ট আপনার ক্যামেরা বন্ধ করেছে',
    incomingFile: 'আগত ফাইল ...',
  },
  hint: {
    p2p: '<u>xroom.app</u> আপনার মিটিংয়ের সময় উচ্চমানের সংক্রমণ নিশ্চিত করতে সার্ভারগুলি ব্যবহার করে।<br/><br/>•এই মোডে আপনার যোগাযোগগুলিতে আমাদের কখনও অ্যাক্সেস নেই।<br/><br/>•আমাদের সার্ভারগুলির মাধ্যমে প্রেরিত সমস্ত ডেটা এনক্রিপ্ট করা এবং কীগুলি দিয়ে কেবলমাত্র আপনার এবং আপনার অতিথিদের অ্যাক্সেস রয়েছে তা দিয়ে লক করা আছে।<br/><br/>আপনার যদি <u>সর্বোচ্চ সিকিউরিটির<u> প্রয়োজন হয়, আপনি আমাদের সার্ভারগুলি অক্ষম করতে পারেন এবং পরিবর্তে পিয়ার-টু-পিয়ার মোড ব্যবহার করতে পারেন।<br/><br/>•এই মোডে xroom.app সার্ভার ব্যবহার না করেই আপনার এবং আপনার অতিথির মধ্যে ভিডিও এবং অডিও সরাসরি প্রেরণ করা হয়।<br/><br/>•আপনি 1: 1 মিটিংয়ের প্রত্যাশা করলে আমরা পিয়ার-টু-পিয়ার মোড ব্যবহার করার পরামর্শ দেই।',
  },
  modes: {
    '1': 'সম্মেলন - সবাই কথা বলতে পারে',
    '2': 'ওয়েবিনার - একজন কথা বলেন, অন্যরা শোনেন',
  },
  placements: {
    '1': 'গ্রিড ভিউ',
    '2': 'মিনি-আমি',
    '3': 'স্পটলাইট',
  },
  perm: {
    head: 'ব্রাউজার অনুমতি মঞ্জুর করুন',
    video: 'ভিডিও',
    audio: 'অডিও',
    notif: 'নোটিফিকেশন',
  },
  videoMenu: {
    hint: 'কনটেক্সট মেনু',
    expand: 'প্রসারিত করুন',
    pip: 'শীর্ষে থাকুন',
    fullscreen: 'ফুল স্ক্রীণ',
    fullscreenOff: 'ফুল স্ক্রীন থেকে প্রস্থান',
    volume: 'ভলিউম',
    restore: 'পুনরুদ্ধার করুন',
    kick: 'অংশগ্রহণকারীকে রিমুভ করুন',
    mute: 'মিউট করুন (কেবল আপনার জন্য)',
    unmute: 'আনমিউট করুন',
    pm: 'ব্যক্তিগত চ্যাট',
    makeHost: 'হোস্ট রোল পাস করুন',
  },
  controls: {
    sharing: 'শেয়ারিং',
    cam: 'ক্যামেরা',
    mic: 'মাইক্রোফোন',
    chat: 'চ্যাট',
    exit: 'প্রস্থান করুন',
    destroy: 'মিটিং শেষ করুন',
    settings: 'সেটিংস',
    plugin: 'প্লাগইনস',
    dots: 'কনটেক্সট মেনু',
    invite: 'ইনভাইট',
    ss: 'স্ক্রিন শেয়ার করুন',
    stopSharing: 'শেয়ার বন্ধ করুন',
    board: 'হোয়াইটবোর্ড',
    hand: 'হাত তুলুন',
    lock: 'লকিং',
    layouts: 'স্থান নির্ণয়',
    emoji: 'ইমোজিস',
    attach: 'ফাইল অ্যাটাচ করুন',
    setLock: 'রুম লক করুন',
    resetLock: 'রুম আনলক করুন',
    setPwd: 'পাসওয়ার্ড সেট করুন',
    rotate: 'ব্যাক/ফ্রন্ট ক্যামেরা',
    more: 'আরো অপশনস',
    users: 'অংশগ্রহণকারী',
  },
  reactions: {
    handRaised: 'ব্যবহারকারী speak কথা বলতে চায় 🎤',
  },
  video: {
    you: 'আপনি (নাম পরিবর্তন করুন)',
    sharing: 'আপনি স্ক্রিন শেয়ার করছেন',
  },
  settings: {
    tabs: {
      audio: 'অডিও',
      video: 'ভিডিও',
      general: 'জেনারেল',
      help: 'হেল্প',
      chat: 'চ্যাট',
      peers: 'পার্টিসিপেন্ট',
      lobby: 'ওয়েটিং রুম',
    },
    audioQ: 'সর্বোচ্চ স্যাম্পল রেট',
    videoQ: 'সর্বোচ্চ ভিডিও কোয়ালিটি',
    screenQ: 'সর্বোচ্চ স্ক্রিন শেয়ার কোয়ালিটি',
    bandwidthQ: 'ব্যান্ডউইথ প্রোফাইল',
    soundEffects: 'সাউন্ড ইফেক্টস',
    audioDevices: 'অডিও সোর্স',
    videoDevices: 'ভিডিও সোর্স',
    language: 'ভাষা',
    theme: 'কালার থিম',
    requestAudio: 'রিকোয়েস্ট অডিও পার্মিশনস',
    requestVideo: 'রিকোয়েস্ট ভিডিও পার্মিশনস',
    testOutput: 'অডিও আউটপুট টেস্ট করুন',
    flipFace: 'ক্যামেরা প্রিভিউ মিরর করুন',
    requireName: 'নাম প্রয়োজন',
    debug: 'ডিবাগ মোড',
    noPreview: 'প্রিভিউ ছাড়াই চ্যাট শুরু করুন',
    menuPos: 'মেনু প্লেসমেন্ট',
    menuPosO: {
      '1': 'টপ',
      '2': 'বটম',
    },
  },
  home: {
    title: 'আপনার পার্সোনাল কনফারেন্স রুম',
    btnGo: 'প্রবেশ করুন',
    nameRoom: 'আপনার রুম এর নাম দিন',
    placeholder: 'এখানে টাইপ করুন',
    rejoinRoom: 'অথবা জয়েন করুন',
    poweredBy: 'পাওয়ার্ড বাই <a href="https://xroom.app">xroom.app</a>',
    roomHint: 'দয়াকরে রুম এর নাম প্রবেশ করুন',
  },
  pre: {
    selectMode: 'মিটিং টাইপ সিলেক্ট করুন',
    selectedMode: 'মিটিং টাইপ',
    btnGo: 'প্রবেশ করুন',
    btnPreview: 'প্রিভিউ',
    avaPicker: 'এভাটার সিলেক্ট করুন (যখন ভিডিও অফ থাকবে)',
    sizeLimitReached: 'এই ঘরটি আকারে সীমাবদ্ধ এবং সীমাটি পৌঁছেছে',
    roomBooked: 'শীঘ্রই এই রুম টিতে একটি ইভেন্ট শুরু হবে: <span>%s</span>।<br/>দয়াকরে মিটিং শুরু হওয়া পর্যন্ত অপেক্ষা করুন।',
    roomInfo: 'রুম ইনফো',
    phInfo: 'রুম ইনফো প্রবেশ করুন',
    pendingAdmission: 'দয়াকরে হোস্ট আপনাকে রুম এ ঢুকতে দেয়া পর্যন্ত অপেক্ষা করুন।',
    p2pMode: 'পিয়ার টু পিয়ার মোড',
  },
  inviter: {
    info: 'অন্যদেরকে মিটিং এ আমন্ত্রণ করার জন্য লিংক টি শেয়ার করুন।',
    head: 'রুম লিংক',
    btnCopy: 'লিংক কপি করুন',
    btnShare: 'লিংক শেয়ার করুন',
    ntfCopied: 'লিংক টি কপি হয়েছে!',
  },
  chat: {
    publicChat: 'পাবলিক চ্যাট',
    chatWith: '%s -এর সাথে চ্যাট করুন',
    fileSending: 'ফাইল সেন্ড করা হচ্ছে',
    fileReceived: 'ফাইল রিসিভ করা হয়েছে: ',
    phInput: 'মেসেজ লিখুন…',
    me: 'আমি',
    dropMe: 'ড্রপ মি!',
    atTime: '%s টার সময়',
    recvProgress: 'এনক্রিপ্ট করা ডেটা রিসিভ হচ্ছে: %s%...',
  },
  peers: {
    muteOnEntry: 'রুম এ প্রবেশ এর সময় পার্টিসিপেন্ট কে মিউট করুন',
    camsOff: 'সবার ভিডিও বন্ধ করুন',
    micsOff: 'সবাই কে মিউট করুন',
  },
  knockers: {
    phEmpty: 'কেও যদি রুম এ প্রবেশ এর জন্য নক করে তাহলে তাকে এখানে দেখা যাবে, আপনার অনুমোদন এর জন্য অপেক্ষারত অবস্থায়।',
  },
  webinar: {
    peersCount: {
      one: '%s দেখছে',
      many: '%s রা দেখছে',
    },
  },
  plugins: {
    by: 'বাই',
    size: 'সাইজ %s কিলোবাইট',
    phSearch: 'অনুসন্ধান',
    source: 'সোর্স কোড: ',
    apiDocs: 'এ পি আই ডক্স',
    vendor: 'ভেন্ডর:',
    btnAdd: 'অ্যাড ওউন',
    add: {
      title: 'নতুন প্লাগিন অ্যাড করুন',
      descr: 'নতুন প্লাগিন ডেভেলপ করছেন? টেস্ট করার জন্য এখানে অ্যাড করুন। এটি আপনার ব্রাউসার ছাড়া অন্য কোথাও সংরক্ষিত থাকবে না।',
      name: 'প্লাগিন টির নাম কি?',
      rootUrl: 'প্লাগিন টির রুট কোথায়?',
      loaded: 'যথার্থ ভাবে লোড হয়েছে!',
      loadFailed: 'প্লাগিন টি লোড হতে ব্যর্থ হয়েছে',
    }
  },
  help: {
    sevenTips: 'শীর্ষ সাতটি সংস্করণ / সংশোধন',
    connIssues: 'কানেকশন ইস্যু',
    laggyMedia: 'অচল অডিও / ভিডিও',
    unlockMedia: 'ক্যামেরা/মাইক আনব্লক',
    faq: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন দেখুন',
    submitFeature: 'ফীচার অনুরোধ করুন',
  },
}
