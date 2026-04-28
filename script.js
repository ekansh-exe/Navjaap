const STORAGE_KEYS = {
  theme: "navjaap_theme",
  language: "navjaap_language",
  homeLanguage: "navjaap_home_language",
  counters: "navjaap_counters",
  autoIncrement: "navjaap_auto_increment",
  autoScrollSpeed: "navjaap_auto_scroll_speed"
};

const AUTO_SCROLL_SPEEDS = ["slow", "medium", "high", "very-fast"];
const AUTO_SCROLL_VELOCITY = {
  slow: 24,
  medium: 48,
  high: 84,
  "very-fast": 128
};

const UI_TEXT = {
  hinglish: {
    back: "← Back",
    languageToggle: "Hindi",
    autoScroll: "Auto Scroll",
    pauseAutoScroll: "Pause Auto",
    autoScrollLabel: "Auto Scroll Speed",
    autoScrollValues: {
      slow: "Slow",
      medium: "Medium",
      high: "High",
      "very-fast": "Very Fast"
    },
    homeSubtitle: "Choose a mantra and begin your jap with focus.",
    count: "Count",
    increment: "Tap to Count +1",
    reset: "Reset",
    autoIncrement: "Auto +1",
    resetPrompt: "Reset this mantra count?",
    cancel: "Cancel",
    confirmReset: "Reset",
    openMantra: "Open",
    tapToOpen: "Tap to open",
    languageButton: "हिंदी",
    homeLanguageButton: "Roman"
  },
  hindi: {
    back: "← वापस",
    languageToggle: "हिंग्लिश",
    autoScroll: "ऑटो स्क्रॉल",
    pauseAutoScroll: "रोकें",
    autoScrollLabel: "ऑटो स्क्रॉल गति",
    autoScrollValues: {
      slow: "धीमी",
      medium: "मध्यम",
      high: "तेज़",
      "very-fast": "बहुत तेज़"
    },
    homeSubtitle: "एक मंत्र चुनें और ध्यान से जाप शुरू करें।",
    count: "गिनती",
    increment: "गिनती +1",
    reset: "रीसेट",
    autoIncrement: "ऑटो +1",
    resetPrompt: "क्या इस मंत्र की गिनती रीसेट करें?",
    cancel: "रद्द करें",
    confirmReset: "रीसेट",
    openMantra: "खोलें",
    tapToOpen: "खोलने के लिए टैप करें",
    languageButton: "हिंदी",
    homeLanguageButton: "Roman"
  }
};

// adding hindi titles for the homescreen
const mantraNativeTitles = {
  hanuman_chalisa:          "हनुमान चालीसा",
  bajrang_baan:             "बजरंग बाण",
  sankat_mochan_ashtakam:   "संकट मोचन हनुमान अष्टकम",
  durga_chalisa:            "दुर्गा चालीसा",
  bhavani_ashtakam:         "भवानी अष्टकम",
  kaal_bhairav_ashtakam:    "काल भैरव अष्टकम",
  shivram_ashtakam:         "शिवराम अष्टकम",
  shiv_chalisa:             "शिव चालीसा",
  shiv_tandav_stotram:      "शिव तांडव स्तोत्र"
};

const mantras = {
  hanuman_chalisa: {
    title: "Hanuman Chalisa",
    hindi: [
      "श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि। बरनउँ रघुबर बिमल जसु जो दायकु फल चारि॥ बुद्धिहीन तनु जानिके सुमिरौं पवन कुमार। बल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥",
      "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥ राम दूत अतुलित बल धामा। अंजनि पुत्र पवनसुत नामा॥ महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥ कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥ हाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेउ साजै॥ संकर सुवन केसरीनंदन। तेज प्रताप महा जग बंदन॥ बिद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥ प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥ सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥ भीम रूप धरि असुर सँहारे। रामचन्द्र के काज सँवारे॥",
      "लाय सजीवन लखन जियाये। श्रीरघुबीर हरषि उर लाये॥ रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥ सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं॥ सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥ जम कुबेर दिगपाल जहाँ ते। कबि कोबिद कहि सके कहाँ ते॥ तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥ तुम्हरो मंत्र बिभीषन माना। लंकेस्वर भए सब जग जाना॥ जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू॥ प्रभु मुद्रिका मेलि मुख माहीं। जलधि लाँघि गये अचरज नाहीं॥ दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥",
      "राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥ सब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डर ना॥ आपन तेज सम्हारो आपै। तीनों लोक हाँक तें काँपै॥ भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥ नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥ संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥ सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा॥ और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै॥ चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥ साधु संत के तुम रखवारे। असुर निकंदन राम दुलारे॥ अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥",
      "राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥ तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै॥ अन्तकाल रघुबर पुर जाई। जहाँ जन्म हरिभक्त कहाई॥ और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥ संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥ जै जै जै हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥ जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥ जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥ तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा॥ पवन तनय संकट हरन मंगल मूरति रूप। राम लखन सीता सहित हृदय बसहु सुर भूप॥"
    ],
    hinglish: [
      "Shri Guru Charan Saroj Raj, Nij Manu Mukuru Sudhaari. Barnau Raghuvar Bimal Jasu, Jo Dayaku Phal Chaari. Buddhiheen Tanu Jaanike, Sumirau Pavan Kumaar. Bal Budhi Vidya Dehu Mohi, Harahu Kalesh Bikaar.",
      "Jai Hanuman gyan gun saagar. Jai Kapees tihu lok ujaagar. Ram doot atulit bal dhaama. Anjani putra Pavan sut naama. Mahabeer bikram Bajrangi. Kumati nivaar sumati ke sangi. Kanchan baran biraaj subesa. Kaanan kundal kunchit kesa. Haath vajra au dhvaja biraajai. Kaandhe moonj janeu saajai. Sankar suvan Kesari nandan. Tej prataap maha jag bandan. Vidyavaan guni ati chaatur. Ram kaaj karibe ko aatur. Prabhu charitra sunibe ko rasiya. Ram Lakhan Sita man basiya. Sukshma roop dhari Siyahi dikhaava. Bikat roop dhari Lank jaraava. Bheem roop dhari asur sanhaare. Ramchandra ke kaaj sanvaare.",
      "Laay sajeevan Lakhan jiyaaye. Shri Raghuveer harashi ur laaye. Raghupati keenhi bahut badhaayi. Tum mam priya Bharatahi sam bhaai. Sahas badan tumharo jas gaavai. As kahi Shripati kanth lagaavai. Sanakaadik Brahmadi muneesa. Naarad Saarad sahit aheesa. Jam Kuber digpaal jaha te. Kabi kobid kahi sake kahan te. Tum upkaar Sugreevahin keenha. Ram milaay raaj pad deenha. Tumharo mantra Vibheeshan maana. Lankeshvar bhaye sab jag jaana. Jug sahasra yojan par bhaanoo. Leelyo taahi madhur phal jaanoo. Prabhu mudrika meli mukh maahi. Jaladhi laanghi gaye acharaj naahi. Durgam kaaj jagat ke jete. Sugam anugrah tumhare tete.",
      "Ram duaare tum rakhvaare. Hot na aagya binu paisaare. Sab sukh lahai tumhaari sarna. Tum rakshak kaahu ko dar na. Aapan tej samhaaro aapai. Teeno lok haank te kaanpai. Bhoot pisaach nikat nahi aavai. Mahabeer jab naam sunaavai. Naasai rog harai sab peera. Japat nirantar Hanumat beera. Sankat te Hanuman chhudaavai. Man kram bachan dhyan jo laavai. Sab par Ram tapasvee raaja. Tin ke kaaj sakal tum saaja. Aur manorath jo koi laavai. Soi amit jeevan phal paavai. Chaaro jug partaap tumhaara. Hai parsiddh jagat ujiyaara. Saadhu sant ke tum rakhvaare. Asur nikandan Ram dulaare. Asht siddhi nau nidhi ke daata. As bar deen Jaanki maata.",
      "Ram rasayan tumhare paasa. Sada raho Raghupati ke daasa. Tumhare bh भजन Ram ko paavai. Janam janam ke dukh bisraavai. Antakaal Raghuvar pur jaayi. Jahaan janma Hari-bhakt kahaayi. Aur devta chitt na dharayi. Hanumat sei sarb sukh karayi. Sankat katai mitai sab peera. Jo sumirai Hanumat balbeera. Jai Jai Jai Hanuman Gosaayi. Kripa karahu Gurudev ki naayi. Jo sat baar paath kar koi. Chhootahi bandi maha sukh hoyi. Jo yah padhai Hanuman Chalisa. Hoy siddhi saakhi Gaureesa. Tulsidas sada Hari chera. Keejai naath hriday mahan dera. Pavan Tanay Sankat Haran, Mangal Moorati Roop. Ram Lakhan Sita Sahit, Hriday Basahu Sur Bhoop."
    ]
  },
  bajrang_baan: {
    title: "Bajrang Baan",
    hindi: [
      "निश्चय प्रेम प्रतीति ते, बिनय करैं सनमान। तेहि के कारज सकल शुभ, सिद्ध करैं हनुमान॥ जय हनुमंत संत हितकारी। सुन लीजै प्रभु अरज हमारी॥ जन के काज बिलंब न कीजै। आतुर दौरि महा सुख दीजै॥ जैसे कूदि सिंधु महि पारा। सुरसा बदन पैठि बिस्तारा॥ आगे जाय लंकिनी रोका। मारेहु लात गई सुरलोका॥ जाय बिभीषन को सुख दीन्हा। सीता निरखि परमपद लीन्हा॥ बाग उजारि सिंधु महँ बोरा। अति आतुर जमकातर तोरा॥ अक्षय कुमार मारि संहारा। लूम लपेटि लंक को जारा॥",
      "लाह समान लंक जरि गई। जय जय धुनि सुरपुर नभ भई॥ अब बिलंब केहि कारन स्वामी। कृपा करहु उर अंतरजामी॥ जय जय लखन प्रान के दाता। आतुर ह्वै दुख करहु निपाता॥ जै हनुमान जयति बल-सागर। सुर-समूह-समरथ भट-नागर॥ ॐ हनु हनु हनु हनुमंत हठीले। बैरिहि मारु बज्र की कीले॥ ॐ ह्नीं ह्नीं ह्नीं हनुमंत कपीसा। ॐ हुं हुं हुं हनु अरि उर सीसा॥ जय अंजनि कुमार बलवंता। शंकरसुवन बीर हनुमंता॥ बदन कराल काल-कुल-घालक। राम सहाय सदा प्रतिपालक॥",
      "भूत, प्रेत, पिसाच निसाचर। अगिन बेताल काल मारी मर॥ इन्हें मारु, तोहि सपथ राम की। राखु नाथ मरजाद नाम की॥ सत्य होहु हरि सपथ पाइ कै। राम दूत धरु मारु धाइ कै॥ जय जय जय हनुमान अगाधा। दुख पावत जन केहि अपराधा॥ पूजा जप तप नेम अचारा। नहिं जानत कछु दास तुम्हारा॥ बन उपबन मग गिरि गृह माहीं। तुम्हरे बल हम डरपत नाहीं॥ जनकसुता हरि दास कहावौ। ताकी सपथ बिलंब न लावौ॥ जै जै जै धुनि होत अकासा। सुमिरत होय दुसह दुख नासा॥",
      "चरन पकरि, कर जोरि मनावौं। यहि औसर अब केहि गोहरावौं॥ उठु, उठु, चलु, तोहि राम दुहाई। पायँ परौं, कर जोरि मनाई॥ ॐ चं चं चं चं चपल चलंता। ॐ हनु हनु हनु हनु हनुमंता॥ ॐ हं हं हाँक देत कपि चंचल। ॐ सं सं सहमि पराने खल-दल॥ अपने जन को तुरत उबारौ। सुमिरत होय आनंद हमारौ॥ यह बजरंग बाण जेहि मारै। ताहि कहौ फिरि कवन उबारै॥ पाठ करै बजरंग बाण की। हनुमत रक्षा करै प्रान की॥ यह बजरंग बाण जो जापैं। तासों भूत-प्रेत सब कापैं॥ धूप देय जो जपै हमेसा। ताके तन नहिं रहै कलेसा॥ उर प्रतीति दृढ़, सरन ह्वै, पाठ करै धरि ध्यान। बाधा सब हर, करैं सब काम सफल हनुमान॥"
    ],
    hinglish: [
      "Nishchay prem prateeti te, binay karain sanmaan. Tehi ke kaaraj sakal shubh, siddh karain Hanuman. Jai Hanumant sant hitkaari. Sun leejai Prabhu araj hamaari. Jan ke kaaj bilamb na keejai. Aatur dauri maha sukh deejai. Jaise koodi sindhu mahi paara. Sursa badan paithi bistaara. Aage jaay Lankini roka. Maarehu laat gayi surloka. Jaay Vibheeshan ko sukh deenha. Sita nirakhi parampad leenha. Baag ujaari sindhu mahan bora. Ati aatur jamkaatar tora. Akshay Kumar maari sanhaara. Loom lapeti Lank ko jaara.",
      "Laah samaan Lank jari gayi. Jai jai dhuni surpur nabh bhayi. Ab bilamb kehi kaaran swami. Kripa karahu ur antarjaami. Jai jai Lakhan praan ke daata. Aatur hvai dukh karahu nipaata. Jai Hanuman jayati bal-saagar. Sur-samooh-samarath bhat-naagar. Om Hanu Hanu Hanu Hanumant hatheele. Bairihi maaru bajra ki keele. Om Hreem Hreem Hreem Hanumant kapeesa. Om Hum Hum Hum Hanu ari ur seesa. Jai Anjani kumar balvanta. Shankar suvan beer Hanumanta. Badan karaal kaal-kul-ghaalak. Ram sahaay sada pratipaalak.",
      "Bhoot, pret, pisaach nisaachar. Agin betaal kaal maari mar. Inhen maaru, tohi sapath Ram ki. Raakhu naath marjaad naam ki. Satya hohu Hari sapath paai kai. Ram doot dharu maaru dhaai kai. Jai jai jai Hanuman agaadha. Dukh paavat jan kehi aparaadha. Pooja jap tap nem achaara. Nahin jaanat kachu daas tumhaara. Ban upaban mag giri grih maahi. Tumhare bal hum darpat naahi. Janaksuta Hari daas kahaavau. Taaki sapath bilamb na laavau. Jai jai jai dhuni hot akaasa. Sumirat hoy dusah dukh naasa.",
      "Charan pakari, kar jori manaavau. Yahi ausar ab kehi goharaavau. Uthu, uthu, chalu, tohi Ram duhaai. Paayan parau, kar jori manaai. Om Chan Chan Chan Chan chapal chalanta. Om Hanu Hanu Hanu Hanu Hanumanta. Om Han Han haank det kapi chanchal. Om San San sahami paraane khal-dal. Apne jan ko turat ubaarau. Sumirat hoy aanand hamaarou. Yah Bajrang Baan jehi maarai. Taahi kahau phiri kavan ubaarai. Paath karai Bajrang Baan ki. Hanumat raksha karai praan ki. Yah Bajrang Baan jo jaapai. Taaso bhoot-pret sab kaapai. Dhoop dey jo japai hamesa. Taake tan nahin rahai kalesa. Ur prateeti dridh, saran hvai, paath karai dhari dhyan. Baadha sab har, karain sab kaam safal Hanuman."
    ]
  },
  sankat_mochan_ashtakam: {
    title: "Sankat Mochan Hanuman Ashtakam",
    hindi: [
      "बाल समय रवि भक्षि लियो तब तीनहुँ लोक भयो अँधियारो। ताहि सों त्रास भयो जग को यह संकट काहु सों जात न टारो॥ देवन आनि करी बिनती तब छाड़ि दियो रवि कष्ट निवारो। को नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥ १॥",
      "बालि की त्रास कपीस बसैं गिरि जात महाप्रभु पंथ निहारो। चौंकि महामुनि साप दियो तब चाहिए कौन बिचार बिचारो॥ कैद्विज रूप लिवाय महाप्रभु सो तुम दास के सोक निवारो। को नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥ २॥",
      "अंगद के संग लेन गए सिय खोज कपीस यह बैन उचारो। जीवत ना बचिहौ हम सो जु बिना सुधि लाये इहाँ पगु धारो॥ हेरि थके तट सिंधु सबै तब लाए सिया-सुधि प्रान उबारो। को नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥ ३॥",
      "रावन त्रास दई सिय को सब राक्षसि सों कहि सोक निवारो। ताहि समय हनुमान महाप्रभु जाय महा रजनीचर मारो॥ चाहत सीय असोक सों आगि सु दै प्रभुमुद्रिका सोक निवारो। को नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥ ४॥",
      "बान लग्यो उर लछिमन के तब प्रान तजे सुत रावन मारो। लै गृह बैद्य सुषेन समेत तबै गिरि द्रोन सु बीर उपारो॥ आनि सजीवन हाथ दई तब लछिमन के तुम प्रान उबारो। को नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥ ५॥",
      "रावन जुद्ध अजान कियो तब नाग कि फाँस सबै सिर डारो। श्रीरघुनाथ समेत सबै दल मोह भयो यह संकट भारो॥ आनि खगेस तबै हनुमान जु बंधन काटि सुत्रास निवारो। को नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥ ६॥",
      "बंधु समेत जबै अहिरावन लै रघुनाथ पताल सिधारो। देबिहिं पूजि भलि विधि सों बलि देउ सबै मिलि मंत्र बिचारो॥ जाय सहाय भयो तब ही अहिरावन सैन्य समेत संहारो। को नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥ ७॥",
      "काज किए बड़ देवन के तुम बीर महाप्रभु देखि बिचारो। कौन सो संकट मोर गरीब को जो तुमसों नहिं जात है टारो॥ बेगि हरो हनुमान महाप्रभु जो कछु संकट होय हमारो। को नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥ ८॥ लाल देह लाली लसे, अरु धरि लाल लंगूर। बज्र देह दानव दलन, जय जय जय कपि सूर॥"
    ],
    hinglish: [
      "Baal samay ravi bhakshi liyo tab teenahu lok bhayo andhiyaro. Taahi son traas bhayo jag ko yah sankat kaahu son jaat na taaro. Devan aani kari binti tab chhaadi diyo ravi kasht nivaaro. Ko nahin jaanat hai jag mein kapi sankatmochan naam tihaaro || 1 ||",
      "Baali ki traas kapees basain giri jaat mahaprabhu panth nihaaro. Chaunki mahamuni saap diyo tab chaahiye kaun bichaar bichaaro. Kaidvij roop livaay mahaprabhu so tum daas ke sok nivaaro. Ko nahin jaanat hai jag mein kapi sankatmochan naam tihaaro || 2 ||",
      "Angad ke sang len gaye siy khoj kapees yah bain uchaaro. Jeevat naa bachihau hum so ju bina sudhi laaye ihaan pagu dhaaro. Heri thake tat sindhu sabai tab laaye siya-sudhi praan ubaaro. Ko nahin jaanat hai jag mein kapi sankatmochan naam tihaaro || 3 ||",
      "Raavan traas dayi siy ko sab raakshasi son kahi sok nivaaro. Taahi samay Hanuman mahaprabhu jaay maha rajaneechar maaro. Chaahat seey asok son aagi su dai prabhumudrika sok nivaaro. Ko nahin jaanat hai jag mein kapi sankatmochan naam tihaaro || 4 ||",
      "Baan lagyo ur Lakshman ke tab praan taje sut Raavan maaro. Lai grih baidya sushen samet tabai giri dron su beer upaaro. Aani sajeevan haath dayi tab Lakshman ke tum praan ubaaro. Ko nahin jaanat hai jag mein kapi sankatmochan naam tihaaro || 5 ||",
      "Raavan juddh ajaan kiyo tab naag ki phaans sabai sir daaro. Shri Raghunath samet sabai dal moh bhayo yah sankat bhaaro. Aani khagesh tabai Hanuman ju bandhan kaati sutraas nivaaro. Ko nahin jaanat hai jag mein kapi sankatmochan naam tihaaro || 6 ||",
      "Bandhu samet jabai Ahiraavan lai Raghunath pataal sidhaaro. Debihin pooji bhali vidhi son bali deu sabai mili mantra bichaaro. Jaay sahaay bhayo tab hi Ahiraavan sainya samet sanhaaro. Ko nahin jaanat hai jag mein kapi sankatmochan naam tihaaro || 7 ||",
      "Kaaj kiye bad devan ke tum beer mahaprabhu dekhi bichaaro. Kaun so sankat mor gareeb ko jo tumson nahin jaat hai taaro. Begi haro Hanuman mahaprabhu jo kachu sankat hoy hamaaro. Ko nahin jaanat hai jag mein kapi sankatmochan naam tihaaro || 8 || Laal deh laalee lase, aru dhari laal langoor. Vajra deh daanav dalan, jai jai jai kapi soor."
    ]
  },
  durga_chalisa: {
    title: "Durga Chalisa",
    hindi: [
      "नमो नमो दुर्गे सुख करनी। नमो नमो अम्बे दुःख हरनी॥ निरंकार है ज्योति तुम्हारी। तिहूँ लोक फैली उजियारी॥ शशि ललाट मुख महाविशाला। नेत्र लाल भृकुटि विकराला॥ रूप मातु को अधिक सुहावे। दरश करत जन अति सुख पावे॥ तुम संसार शक्ति लै कीना। पालन हेतु अन्न धन दीना॥ अन्नपूर्णा हुई जग पाला। तुम ही आदि सुन्दरी बाला॥ प्रलयकाल सब नाशन हारी। तुम गौरी शिवशंकर प्यारी॥ शिव योगी तुम्हरे गुण गावें। ब्रह्मा विष्णु तुम्हें नित ध्यावें॥",
      "रूप सरस्वती को तुम धारा। दे सुबुद्धि ऋषि मुनिन उबारा॥ धरयो रूप नरसिंह को अम्बा। परगट भई फाड़कर खम्बा॥ रक्षा करि प्रह्लाद बचायो। हिरण्याक्ष को स्वर्ग पठायो॥ लक्ष्मी रूप धरो जग माहीं। श्री नारायण अंग समाहीं॥ क्षीरसिन्धु में करत विलासा। दयासिन्धु दीजै मन आसा॥ हिंगलाज में तुम्हीं भवानी। महिमा अमित न जात बखानी॥ मातंगी अरु धूमावति माता। भुवनेश्वरी बगला सुख दाता॥ श्री भैरव तारा जग तारिणी। छिन्न भाल भव दुःख निवारिणी॥",
      "केहरि वाहन सोह भवानी। लांगुर वीर चलत अगवानी॥ कर में खप्पर खड्ग विराजे। जाको देख काल डर भाजे॥ सोहै अस्त्र और त्रिशूला। जाते उठत शत्रु हिय शूला॥ नगर कोटि में तुम्हीं विराजत। तिहुँलोक में डंका बाजत॥ शुम्भ निशुम्भ दानव तुम मारे। रक्तबीज शंखन संहारे॥ महिषासुर नृप अति अभिमानी। जेहि अघ भार मही अकुलानी॥ रूप कराल कालिका धारा। सेन सहित तुम तिहि संहारा॥ परी गाढ़ संतन पर जब जब। भई सहाय मातु तुम तब तब॥",
      "अमरपुरी अरु बासव लोका। तब महिमा सब रहें अशोका॥ ज्वाला में है ज्योति तुम्हारी। तुम्हें सदा पूजें नर-नारी॥ प्रेम भक्ति से जो यश गावें। दुःख दारिद्र निकट नहिं आवें॥ ध्यावे तुम्हें जो नर मन लाई। जन्म-मरण ताकौ छुटि जाई॥ जोगी सुर मुनि कहत पुकारी। योग न हो बिन शक्ति तुम्हारी॥ शंकर आचारज तप कीनो। काम अरु क्रोध जीति सब लीनो॥ निशिदिन ध्यान धरो शंकर को। काहु काल नहिं सुमिरो तुमको॥ शक्ति रूप का मरम न पायो। शक्ति गई तब मन पछितायो॥ शरणागत हुई कीर्ति बखानी। जय जय जय जगदम्ब भवानी॥ भई प्रसन्न आदि जगदम्बा। दई शक्ति नहिं कीन विलम्बा॥ मोको मातु कष्ट अति घेरो। तुम बिन कौन हरै दुःख मेरो॥ आशा तृष्णा निपट सतावें। मोह मदान्द बहु भरमावें॥ शत्रु नाश कीजै महारानी। सुमिरौं इकचित तुम्हें भवानी॥ करो कृपा हे मातु दयाला। ऋद्धि-सिद्धि दै करहु निहाला। जब लगि जिऊँ दया फल पाऊँ। तुम्हरो यश मैं सदा सुनाऊँ॥ दुर्गा चालीसा जो कोई गावै। सब सुख भोग परमपद पावै॥ देवीदास शरण निज जानी। करहु कृपा जगदम्ब भवानी॥"
    ],
    hinglish: [
      "Namo namo Durge sukh karni. Namo namo Ambe dukh harni. Nirankar hai jyoti tumhaari. Tihu lok phaili ujiyaari. Shashi lalaat mukh mahaavishaala. Netra laal bhrikuti vikraala. Roop maatu ko adhik suhaave. Darash karat jan ati sukh paave. Tum sansaar shakti lai keena. Paalan hetu anna dhan deena. Annapurna hui jag paala. Tum hi aadi sundari baala. Pralaykaal sab naashan haari. Tum Gauri Shivshankar pyaari. Shiv yogi tumhare gun gaave. Brahma Vishnu tumhe nit dhyaave.",
      "Roop Saraswati ko tum dhaara. De subuddhi rishi munin ubaara. Dharyo roop Narsingh ko Amba. Pargat bhayi phaadkar khamba. Raksha kari Prahlad bachaayo. Hiranyaksha ko swarg pathaayo. Lakshmi roop dharo jag maahi. Shri Narayan ang samaahi. Ksheersindhu mein karat vilaasa. Dayasindhu deejai man aasa. Hinglaaj mein tumhi Bhavani. Mahima amit na jaat bakhaani. Maatangi aru Dhoomavati maata. Bhuvaneshvari Bagla sukh daata. Shri Bhairav Tara jag taarini. Chhinna bhaal bhav dukh nivaarini.",
      "Kehari vaahan soh Bhavani. Laangur veer chalat agvaani. Kar mein khappar khadga viraaje. Jaako dekh kaal dar bhaaje. Sohai astra aur trishoola. Jaate uthat shatru hiy shoola. Nagar koti mein tumhi viraajat. Tihulok mein danka baajat. Shumbh Nishumbh daanav tum maare. Raktabeej shankhan sanhaare. Mahishasur nrip ati abhimaani. Jehi agh bhaar mahi akulaani. Roop karaal Kalika dhaara. Sen sahit tum tihi sanhaara. Pari gaadh santan par jab jab. Bhayi sahaay maatu tum tab tab.",
      "Amarpuri aru baasav loka. Tab mahima sab rahe ashoka. Jwala mein hai jyoti tumhaari. Tumhein sada pooje nar-naari. Prem bhakti se jo yash gaave. Dukh daaridra nikat nahi aave. Dhyaave tumhe jo nar man laayi. Janma-maran taakou chuti jaayi. Jogi sur muni kahat pukaari. Yog na ho bin shakti tumhaari. Shankar aachaaraj tap keeno. Kaam aru krodh jeeti sab leeno. Nishidin dhyan dharo Shankar ko. Kaahu kaal nahi sumiro tumko. Shakti roop ka maram na paayo. Shakti gayi tab man pachhitaayo. Sharnaagat hui keerti bakhaani. Jai jai jai Jagadamb Bhavani. Bhayi prasann Aadi Jagadamba. Dayi shakti nahi keen vilamba. Moko maatu kasht ati ghero. Tum bin kaun harai dukh mero. Aasha trishna nipat sataave. Moh madaandh bahu bharmaave. Shatru naash keejai Maharaani. Sumirou ikchit tumhe Bhavani. Karo kripa he Maatu dayaala. Riddhi-siddhi dai karahu nihaala. Jab lagi jiun daya phal paau. Tumharo yash main sada sunaau. Durga Chalisa jo koi gaavai. Sab sukh bhog parampad paavai. Devidas sharan nij jaani. Karahu kripa Jagadamb Bhavani."
    ]
  },
  shiv_chalisa: {
    title: "Shiv Chalisa",
    hindi: [
      "जय गणेश गिरिजा सुवन, मंगल मूल सुजान। कहत अयोध्यादास तुम, देहु अभय वरदान॥ जय गिरिजा पति दीन दयाला। सदा करत संतन प्रतिपाला॥ भाल चन्द्रमा सोहत नीके। कानन कुण्डल नागफनी के॥ अंग गौर शिर गंग बहाये। मुण्डमाल तन छार लगाये॥ वस्त्र खाल बाघम्बर सोहे। छवि को देख नाग मुनि मोहे॥ मैना मातु की ह्वै दुलारी। बाम अंग सोहत छवि न्यारी॥ कर त्रिशूल सोहत छवि भारी। करत सदा शत्रुन क्षयकारी॥ नन्दि गणेश सोहै तहँ कैसे। सागर मध्य कमल हैं जैसे॥ कार्तिक श्याम और गणराऊ। या छवि को कहि जात न काऊ॥",
      "देवन जबहीं जाय पुकारा। तब ही दुख प्रभु आप निवारा॥ किया उपद्रव तारक भारी। देवन सब मिलि तुमहिं जुहारी॥ तुरत षडानन आप पठायउ। लवनिमेष महँ मारि गिरायउ॥ आप जलंधर असुर संहारा। सुयश तुम्हार विदित संसारा॥ त्रिपुरासुर सन युद्ध मचाई। सबहिं कृपा कर लीन बचाई॥ किया तपहिं भागीरथ भारी। पुरब प्रतिज्ञा तासु पुरारी॥ दानिन महं तुम सम कोउ नाहीं। सेवक स्तुति करत सदाहीं॥ वेद नाम महिमा तव गाई। अकथ अनादि भेद नहिं पाई॥ प्रगटे उदधि मंथन में ज्वाला। जरे सुरासुर भये विहाला॥ कीन्ह दया तहं करी सहाई। नीलकण्ठ तब नाम कहाई॥",
      "पूजन रामचंद्र जब कीन्हा। जीत के लंक विभीषण दीन्हा॥ सहस कमल में हो रहे धारी। कीन्ह परीक्षा तबहिं पुरारी॥ एक कमल प्रभु राखेउ जोई। कमल नयन पूजन चहं सोई॥ कठिन भक्ति देखी प्रभु शंकर। भये प्रसन्न दिए इच्छित वर॥ जय जय जय अनंत अविनाशी। करत कृपा सब के घटवासी॥ दुष्ट सकल नित मोहि सतावै । भ्रमत रहे मोहि चैन न आवै॥ त्राहि त्राहि मैं नाथ पुकारो। यहि अवसर मोहि आन उबारो॥ लै त्रिशूल शत्रुन को मारो। संकट से मोहि आन उबारो॥ मात पिता भ्राता सब कोई। संकट में पूछत नहिं कोई॥",
      "स्वामी एक है आस तुम्हारी। आय हरहु अब संकट भारी॥ धन निर्धन को देत सदाहीं। जो कोई जांचे वह फल पाहीं॥ अस्तुति केहि विधि करौं तुम्हारी। क्षमहु नाथ अब चूक हमारी॥ शंकर हो संकट के नाशन। मंगल कारण विघ्न विनाशन॥ योगी यति मुनि ध्यान लगावैं। नारद शारद शीश नवावैं॥ नमो नमो जय नमः शिवाय। सुर ब्रह्मादिक पार न पाय॥ जो यह पाठ करे मन लाई। ता पार होत है शम्भु सहाई॥ ॠनियां जो कोई हो अधिकारी। पाठ करे सो पावन हारी॥ पुत्र हीन कर इच्छा कोई। निश्चय शिव प्रसाद तेहि होई॥ पण्डित त्रयोदशी को लावे। ध्यान पूर्वक होम करावे॥ त्रयोदशी व्रत करे हमेशा। तन नहीं ताके रहे कलेशा॥ धूप दीप नैवेद्य चढ़ावे। शंकर सम्मुख पाठ सुनावे॥ जन्म जन्म के पाप नसावे। अन्तवास शिवपुर में पावे॥ कहै अयोध्यादास आस तुम्हारी। जानि सकल दुःख हरहु हमारी॥ नित्य नेम कर प्रातः ही, पाठ करौं चालीस। तुम मेरी मनोकामना, पूर्ण करो जगदीश॥"
    ],
    hinglish: [
      "Jai Ganesh Girija suvan, mangal mool sujaan. Kahat Ayodhyadas tum, dehu abhay vardaan. Jai Girija pati deen dayaala. Sada karat santan pratipaala. Bhaal chandrama sohat neeke. Kanan kundal naagphani ke. Ang gaur shir Gang bahaaye. Mundmaal tan chhaar lagaaye. Vastra khaal baaghambar sohe. Chhavi ko dekh naag muni mohe. Maina maatu ki hvai dulaari. Baam ang sohat chhavi nyaari. Kar trishool sohat chhavi bhaari. Karat sada shatrun kshaykaari. Nandi Ganesh sohai tahan kaise. Saagar madhya kamal hain jaise. Kartik shyaam aur ganaraau. Yaa chhavi ko kahi jaat na kaau.",
      "Devan jabahi jaay pukaara. Tab hi dukh prabhu aap nivaara. Kiya upadrav taarak bhaari. Devan sab mili tumhahi juhaari. Turat shadaanan aap pathaayu. Lavanimesh mahan maari giraayu. Aap Jalandhar asur sanhaara. Suyash tumhaar vidit sansaara. Tripurasur san yuddh machaayi. Sabhin kripa kar leen bachaayi. Kiya tapahin Bhaagirath bhaari. Purab pratigya taasu puraari. Daanin mahan tum sam kou naahi. Sevak stuti karat sadaahi. Ved naam mahima tav gaayi. Akath anaadi bhed nahi paayi. Pragate udadhi manthan mein jwaala. Jare suraasur bhaye vihaala. Keenh daya tahan kari sahaayi. Neelkanth tab naam kahaayi.",
      "Poojan Ramchandra jab keenha. Jeet ke Lank Vibheeshan deenha. Sahas kamal mein ho rahe dhaari. Keenh pareeksha tabhin puraari. Ek kamal prabhu raakheu joyi. Kamal nayan poojan chahan soyi. Kathin bhakti dekhi prabhu Shankar. Bhaye prasann diye ichchhit var. Jai jai jai anant avinaashi. Karat kripa sab ke ghatvaasi. Dusht sakal nit mohi sataavai. Bhramat rahe mohi chain na aavai. Traahi traahi main naath pukaaro. Yahi avasar mohi aan ubaaro. Lai trishool shatrun ko maaro. Sankat se mohi aan ubaaro. Maat pita bhraata sab koi. Sankat mein poochhat nahi koi.",
      "Swami ek hai aas tumhaari. Aay harahu ab sankat bhaari. Dhan nirdhan ko det sadaahi. Jo koi jaanche vah phal paahi. Astuti kehi vidhi karou tumhaari. Kshamahu naath ab chook hamaari. Shankar ho sankat ke naashan. Mangal kaaran vighna vinaashan. Yogi yati muni dhyan lagaavai. Naarad Saarad sheesh navaavai. Namo namo jai namah Shivaay. Sur Brahmadik paar na paay. Jo yah paath kare man laayi. Taa paar hot hai Shambhu sahaayi. Riniyaan jo koi ho adhikaari. Paath kare so paavan haari. Putra heen kar ichchha koi. Nishchay Shiv prasad tehi hoyi. Pandit trayodashi ko laave. Dhyan poorvak hom karaave. Trayodashi vrat kare hamesha. Tan nahin taake rahe kalesha. Dhoop deep naivedya chadhaave. Shankar sammukh paath sunaave. Janma janma ke paap nasaave. Antavaas Shivpur mein paave. Kahai Ayodhyadas aas tumhaari. Jaani sakal dukh harahu hamaari. Nitya nem kar praatah hi, paath karou chaalees. Tum meri manokaamna, poorn karo Jagdeesh."
    ]
  },
  shiv_tandav_stotram: {
    title: "Shiv Tandav Stotram",
    hindi: [
      "जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्। डमड्डमड्डमड्डमन्निनादवड्डमर्वयं चकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥१॥\nजटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी विलोलवीचिवल्लरीविराजमानमूर्धनि। धगद्धगद्धगज्ज्वलल्ललाटपट्टपावके किशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम॥२॥\nधराधरेन्द्रनन्दिनीविलासबन्धुबन्धुर स्फुरद्दिगन्तसन्ततिप्रमोदमानमानसे। कृपाकटाक्षधोरणीनिरुद्धदुर्धरापदि क्वचिद्दिगम्बरे मनो विनोदमेतु वस्तुनि॥३॥\nजटाभुजङ्गपिङ्गलस्फुरत्फणामणिप्रभा कदम्बकुङ्कुमद्रवप्रलिप्तदिग्वधूमुखे। मदान्धसिन्धुरस्फुरत्त्वगुत्तरीयमेदुरे मनो विनोदमद्भुतं बिभर्तु भूतभर्तरि॥४॥",
      "सहस्रलोचनप्रभृत्यशेषलेखशेखर प्रसूनधूलिधोरणी विधूसराङ्घ्रिपीठभूः। भुजङ्गराजमालया निबद्धजाटजूटक श्रियै चिराय जायतां चकोरबन्धुशेखरः॥५॥\nललाटचत्वरज्वलद्धनञ्जयस्फुलिङ्गभा निपीतपञ्चसायकं नमन्निलिम्पनायकम्। सुधामयूखलेखया विराजमानशेखरं महाकपालिसम्पदेशिरोजटालमस्तु नः॥६॥\nकरालभालपट्टिकाधगद्धगद्धगज्ज्वल द्धनञ्जयाहुतीकृतप्रचण्डपञ्चसायके। धराधरेन्द्रनन्दिनीकुचाग्रचित्रपत्रक प्रकल्पनैकशिल्पिनि त्रिलोचने रतिर्मम॥७॥\nनवीनमेघमण्डली निरुद्धदुर्धरस्फुरत् कुहू निशीथिनीतमः प्रबन्धबद्धकन्धरः। निलिम्पनिर्झरीधरस्तनोतु कृत्तिसिन्धुरः कलानिधानबन्धुरः श्रियं जगद्धुरन्धरः॥८॥",
      "प्रफुल्लनीलपङ्कजप्रपञ्चकालिमप्रभा विडम्बि कण्ठकन्धरा रुचिप्रबन्धकन्धरम्। स्मरच्छिदं पुरच्छिदं भवच्छिदं मखच्छिदं गजच्छिदान्धकच्छिदं तमन्तकच्छिदं भजे॥९॥\nअखर्वसर्वमङ्गलाकलाकदम्बमञ्जरी रसप्रवाहमाधुरीविजृम्भणामधुव्रतम्। स्मरान्तकं पुरान्तकं भवान्तकं मखान्तकं गजान्तकान्धकान्तकं तमन्तकान्तकं भजे॥१०॥\nजयत्वदभ्रविभ्रमभ्रमद्भुजङ्गमश्वस द्विनिर्गमत्क्रमस्फुरत्करालभालहव्यवाट्। धिमिद्धिमिद्धिमिध्वनन्मृदङ्गतुङ्गमङ्गल ध्वनिक्रमप्रवर्तित प्रचण्डताण्डवः शिवः॥१1॥\nदृषद्विचित्रतल्पयोर्भुजङ्गमौक्तिकस्रजोर् गरिष्ठरत्नलोष्ठयोः सुहृद्विपक्षपक्षयोः। तृणारविन्दचक्षुषोः प्रजामहीमहेन्द्रयोः समप्रवृत्तिकः कदा सदाशिवं भजाम्यहम्॥१२॥",
      "कदा निलिम्पनिर्झरीनिकुञ्जकोटरे वसन् विमुक्तदुर्मतिः सदा शिरःस्थमञ्जलिं वहन्। विलोललोललोचनो ललामभाललग्नकः शिवेति मन्त्रमुच्चरन्कदा सुखी भवाम्यहम्॥१३॥\nइमं हि नित्यमेवमुक्तमुत्तमोत्तमं स्तवं पठन्स्मरन्ब्रुवन्नरो विशुद्धिमेति सन्ततम्। हरे गुरौ सुभक्तिमाशु याति नान्यथा गतिं विमोहनं हि देहिनां सुशङ्करस्य चिन्तनम्॥१४॥\nपूजावसानसमये दशवक्त्रगीतं यः शम्भुपूजनपरं पठति प्रदोषे। तस्य स्थिरां रथगजेन्द्रतुरङ्गयुक्तां लक्ष्मीं सदैव सुमुखीं प्रददाति शम्भुः॥१५॥"
    ],
    hinglish: [
      "Jataatavee galajjal pravaah paavit sthale gale avalambya lambitaam bhujang tung maalikaam. Damad damad damad maninaad vad damarvayam chakaar chanda taandavam tanotu nah Shivah Shivam ||1||\nJataa kataah sambhram bhraman nilimp nirjhari vilol veechi vallari viraajmaan moordhani. Dhagad dhagad dhagaj jvalal lalaat patta paavake kishor chandra shekhare ratih pratikshanam mama ||2||\nDharaadharendra nandini vilaas bandhu bandhura sphurad digant santati pramod maan maanase. Kripaa kataaksh dhorani niruddh durdharaapadi kvachid digambare mano vinodam etu vastuni ||3||\nJataa bhujang pingala sphurat phanaa mani prabhaa kadamb kumkum drav pralipt digvadhoo mukhe. Madaandh sindhur asphurat tvaguttareeya medure mano vinodam adbhutam bibhartu bhoot bhartari ||4||",
      "Sahasra lochan prabhrut yashesh lekh shekhar prasoon dhooli dhoranee vidhoosaraanghri peethabhooh. Bhujang raaj maalaya nibaddh jaat jootak shriyai chiraay jaayataam chakor bandhu shekharah ||5||\nLalaat chatvar jvalad dhananjay sphuling bhaa nipeet panch saayakam namannilimp naayakam. Sudhaa mayookh lekhaya viraajmaan shekharam maha kapaali sampade shiro jataalam astu nah ||6||\nKaraal bhaal pattika dhagad dhagad dhagaj jvalad dhananjay aahutee krut prachand panch saayake. Dharaadharendra nandini kuchaagra chitra patraka prakalpanaik shilpini trilocane ratir mama ||7||\nNaveen megh mandalee niruddh durdhar sphurat kuhoo nisheethini tamah prabandh baddh kandharah. Nilimp nirjhari dharas tanotu krutti sindhurah kalaa nidhaan bandhurah shriyam jagad dhurandharah ||8||",
      "Praphull neel pankaj prapanch kaalim prabhaa vidambi kanth kandharaa ruchi prabandh kandharam. Smarachchhidam purachchhidam bhavachchhidam makhachchhidam gajachchhidaandhakachchhidam tamantakachchhidam bhaje ||9||\nAkharva sarv mangalaa kalaa kadamb manjaree ras pravaah maadhuree vijrumbhanaa madhuvratam. Smaraantakam puraantakam bhavaantakam makhaantakam gajaantakaandhakaantakam tamantakaantakam bhaje ||10||\nJayatvadabhra vibhrama bhramad bhujangamas shvasad vinirgamat kramasphurat karaal bhaal havyavaat. Dhimid dhimid dhimidhvanan mrudang tung mangal dhvanikram pravartita prachand taandavah Shivah ||11||\nDrushad vichitra talpayor bhujang mauktikasrajor garishtha ratna loshthayoh suhrud vipaksha pakshayoh. Trunaaravind chakshushoh prajaamahee mahendrayoh samapravruttikah kadaa sadaashivam bhajaamyaham ||12||",
      "Kadaa nilimp nirjharee nikunj kotare vasan vimukt durmatih sadaa shirah stham anjalim vahan. Vilol lol lochano lalaam bhaal lagnakah Shiveti mantram uchcharan kadaa sukhee bhavaamyaham ||13||\nImam hi nityameva muktam uttamottamam stavam pathan smaran bruvan naro vishuddhim eti santatam. Hare gurau subhaktim aashu yaati naanyathaa gatim vimohanam hi dehinaam sushankarasya chintanam ||14||\nPoojaavasaan samaye dashavaktragetam yah shambhu poojanaparam pathati pradoshe. Tasya sthiraam rathagajendr turangayuktaam lakshmeem sadaiva sumukheem pradadaati Shambhuh ||15||"
    ]
  },
  bhavani_ashtakam: {
    title: "Bhavani Ashtakam",
    hindi: [
      "न तातो न माता न बन्धुर्न दाता न पुत्रो न पुत्री न भृत्यो न भर्ता। न जाया न विद्या न वृत्तिर्ममैव गतिस्त्वं गतिस्त्वं त्वमेका भवानि॥१॥\nभवाब्धावपारे महादुःखभीरु प्रपन्नः प्रकामं प्रलोभी प्रमत्तः। कुसंसारपाशप्रबद्धः सदाहं गतिस्त्वं गतिस्त्वं त्वमेका भवानि॥२॥",
      "न जानामि दानं न च ध्यानयोगं न जानामि तन्त्रं न च स्तोत्रमन्त्रम्। न जानामि पूजां न च न्यासयोगं गतिस्त्वं गतिस्त्वं त्वमेका भवानि॥३॥\nन जानामि पुण्यं न जानामि तीर्थं न जानामि मुक्तिं लयं वा कदाचित्। न जानामि भक्तिं व्रतं वापि मातर्गतिस्त्वं गतिस्त्वं त्वमेका भवानि॥४॥",
      "कुकर्मी कुसङ्गी कुबुद्धिः कुदासः कुलाचारहीनः कदाचारलीनः। कुदृष्टिः कुवाक्यप्रबन्धः सदाहं गतिस्त्वं गतिस्त्वं त्वमेका भवानि॥५॥\nप्रजेशं रमेशं महेशं सुरेशं दिनेशं निशीथेश्वरं वा कदाचित्। न जानामि चान्यत् सदाहं शरण्ये गतिस्त्वं गतिस्त्वं त्वमेका भवानि॥६॥",
      "विवादे विषादे प्रमादे प्रवासे जले चानले पर्वते शत्रुमध्ये। अरण्ये शरण्ये सदा मां प्रपाहि गतिस्त्वं गतिस्त्वं त्वमेका भवानि॥७॥\nअनाथो दरिद्रो जरारोगयुक्तो महाक्षीणदीनः सदा जाड्यवक्त्रः। विपत्तौ प्रविष्टः प्रनष्टः सदाहं गतिस्त्वं गतिस्त्वं त्वमेका भवानि॥८॥"
    ],
    hinglish: [
      "Na taato na maata na bandhurna daata, na putro na putri na bhrityo na bharta. Na jaaya na vidya na vrittirmamaiva, Gatistvam Gatistvam Tvamekaa Bhavani ||1||\nBhavaabdha vapaare mahaa dukh bheeru, prapannah prakaamam praloobhee pramattah. Kusansaar paash prabaddhah sadaaham, Gatistvam Gatistvam Tvamekaa Bhavani ||2||",
      "Na jaanami daanam na cha dhyana yogam, na jaanami tantram na cha stotra mantram. Na jaanami poojam na cha nyaas yogam, Gatistvam Gatistvam Tvamekaa Bhavani ||3||\nNa jaanami punyam na jaanami teertham, na jaanami muktim layam vaa kadaachit. Na jaanami bhaktim vratam vaapi maatar, Gatistvam Gatistvam Tvamekaa Bhavani ||4||",
      "Kukarmi kusangi kubuddhih kudaasah, kulaachaar heenah kadaachaar leenah. Kudrishtih kuvaakya prabandhah sadaaham, Gatistvam Gatistvam Tvamekaa Bhavani ||5||\nPrajasham ramesham mahesham suresham, dinesham nisheeth ishvaram vaa kadaachit. Na jaanami chaanyat sadaaham sharanye, Gatistvam Gatistvam Tvamekaa Bhavani ||6||",
      "Vivaade vishaade pramaade pravaase, jale chaanale parvate shatru madhye. Aranye sharanye sadaa maam prapaahi, Gatistvam Gatistvam Tvamekaa Bhavani ||7||\nAnaatho daridro jaraa rog yukto, mahaa ksheen deenah sadaa jaadya vaktrah. Vipattau pravishtah pranashtah sadaaham, Gatistvam Gatistvam Tvamekaa Bhavani ||8||"
    ]
  },
  kaal_bhairav_ashtakam: {
    title: "Kaal Bhairav Ashtakam",
    hindi: [
      "देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं व्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम्। नारदादियोगिवृन्दवन्दितं दिगम्बरं काशिकापुराधिनाथकालभैरवं भजे॥१॥\nभानुकोटिभास्वरं भवाब्धितारकं परं नीलकण्ठमीप्सितार्थदायकं त्रिलोचनम्। कालकालमम्बुजाक्षमक्षशूलमक्षरं काशिकापुराधिनाथकालभैरवं भजे॥२॥",
      "शूलटङ्कपाशदण्डपाणिमादिकारणं श्यामकायमादिदेवमक्षरं निरामयम्। भीमविक्रमं प्रभुं विचित्रताण्डवप्रियं काशिकापुराधिनाथकालभैरवं भजे॥३॥\nभुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं भक्तवत्सलं स्थितं समस्तलोकविग्रहम्। विनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं काशिकापुराधिनाथकालभैरवं भजे॥४॥",
      "धर्मसेतुपालकं त्वधर्ममार्गनाशकं कर्मपाशमोचकं सुशर्मदायकं विभुम्। स्वर्णवर्णशेषपाशशोभिताङ्गमण्डलं काशिकापुराधिनाथकालभैरवं भजे॥५॥\nरत्नपादुकाप्रभाभिरामपादयुग्मकं नित्यमद्वितीयमिष्टदैवतं निरञ्जनम्। मृत्युदर्पनाशनं करालदंष्ट्रमोक्षणं काशिकापुराधिनाथकालभैरवं भजे॥६॥",
      "अट्टहासभिन्नपद्मजाण्डकोशसन्ततिं दृष्टिपातनष्टपापजालमुग्रशासनम्। अष्टसिद्धिदायकं कपालमालिकाधरं काशिकापुराधिनाथकालभैरवं भजे॥७॥\nभूतसङ्घनायकं विशालकीर्तिदायकं काशिवासलोकपुण्यपापशोधकं विभुम्। नीतिमार्गकोविदं पुरातनं जगत्पतिं काशिकापुराधिनाथकालभैरवं भजे॥८॥\nकालभैरवाष्टकं पठन्ति ये मनोहरं ज्ञानमुक्तिसाधनं विचित्रपुण्यवर्धनम्। शोकमोहदैन्यलोभकोपतापनाशनं ते प्रयान्ति कालभैरवाङ्घ्रिसन्निधिं ध्रुवम्॥९॥"
    ],
    hinglish: [
      "Devaraaj sevyamaan paavanaanghri pankajam, vyaal yagya sootram indu shekharam kripaakaram. Naaradaadi yogi vrunda vanditam digambaram, Kaashika puradhinath Kaalbhairavam bhaje ||1||\nBhaanu koti bhaasvaram bhavaabdhi taarakam param, neel kantham eepsitaartha daayakam trilochanam. Kaala kaalam ambujaaksham aksha shoolam aksharam, Kaashika puradhinath Kaalbhairavam bhaje ||2||",
      "Shool tank paash dand paanim aadi kaaranam, shyaam kaayam aadi devam aksharam niraamayam. Bheem vikramam prabhum vichitra taandav priyam, Kaashika puradhinath Kaalbhairavam bhaje ||3||\nBhukti mukti daayakam prashast chaaru vigraham, bhakta vatsalam sthitam samast lok vigraham. Vinikvanan manogya hem kinkinee lasat katim, Kaashika puradhinath Kaalbhairavam bhaje ||4||",
      "Dharma setu paalakam tvadharma maarg naashakam, karma paash mochakam susharm daayakam vibhum. Svarna varn shesh paash shobhitaanga mandalam, Kaashika puradhinath Kaalbhairavam bhaje ||5||\nRatna paadukaa prabhaabhiraam paad yugmakam, nityam adviteeyam isht daivatam niranjanam. Mrityu darp naashanam karaal danshtr mokshanam, Kaashika puradhinath Kaalbhairavam bhaje ||6||",
      "Attahaas bhinna padmaj aand kosh santatim, drishti paat nasht paap jaalam ugra shaasanam. Asht siddhi daayakam kapaal maalikaa dharam, Kaashika puradhinath Kaalbhairavam bhaje ||7||\nBhoot sangh naayakam vishaal keerti daayakam, Kaashi vaas lok punya paap shodhakam vibhum. Neeti maarg kovidam puraatanam jagatpatim, Kaashika puradhinath Kaalbhairavam bhaje ||8||\nKaal bhairavaashtakam pathanti ye manoharam, gyaan mukti saadhanam vichitra punya vardhanam. Shok moh dainya lobh kop taap naashanam, te prayaanti Kaalbhairavaanghri sannidhim dhruvam ||9||"
    ]
  },
  shivram_ashtakam: {
    title: "Shivram Ashtakam",
    hindi: [
      "शिव हरे राम हरे हरेति, शिव हरे राम हरेति जल्पन्। विमुक्तपापो भवभीतिमुक्तो, गच्छेत्पदं वैष्णवमीश्वरं च॥१॥\nशिवेति रामेति हरेति कृष्ण, रामेति कृष्णेति शिवेति जल्पन्। विमुक्तपापो भवभीतिमुक्तो, गच्छेत्पदं वैष्णवमीश्वरं च॥२॥",
      "शिवेति रामेति हरेति राम, शिवेति रामेति शिवेति जल्पन्। विमुक्तपापो भवभीतिमुक्तो, गच्छेत्पदं वैष्णवमीश्वरं च॥३॥\nहरेति कृष्ण हरेति राम, हरेति कृष्ण हरेति जल्पन्। विमुक्तपापो भवभीतिमुक्तो, गच्छेत्पदं वैष्णवमीश्वरं च॥४॥",
      "गङ्गाजलैः स्नापयित्वा शिवं रामं च पूजयन्। विमुक्तपापो भवभीतिमुक्तो, गच्छेत्पदं वैष्णवमीश्वरं च॥५॥\nबिल्वपत्रैः पूजयित्वा शिवं रामं च पूजयन्। विमुक्तपापो भवभीतिमुक्तो, गच्छेत्पदं वैष्णवमीश्वरं च॥६॥",
      "तुलसीदलैः पूजयित्वा शिवं रामं च पूजयन्। विमुक्तपापो भवभीतिमुक्तो, गच्छेत्पदं वैष्णवमीश्वरं च॥७॥\nइति शिवरामाष्टकं नित्यं प्रातःकाले पठेन्नरः। स याति परमं स्थानं यत्र देवो महेश्वरः॥८॥"
    ],
    hinglish: [
      "Shiv Hare Ram Hare Hareti, Shiv Hare Ram Hareti jalpan. Vimuktapapo bhavabheetimukto, gachhetpadam vaishnavam isshvaram cha ||1||\nShiveti Rameti Hareti Krishna, Rameti Krishneti Shiveti jalpan. Vimuktapapo bhavabheetimukto, gachhetpadam vaishnavam isshvaram cha ||2||",
      "Shiveti Rameti Hareti Rama, Shiveti Rameti Shiveti jalpan. Vimuktapapo bhavabheetimukto, gachhetpadam vaishnavam isshvaram cha ||3||\nHareti Krishna Hareti Rama, Hareti Krishna Hareti jalpan. Vimuktapapo bhavabheetimukto, gachhetpadam vaishnavam isshvaram cha ||4||",
      "Gangaajalaih snaapayitvaa Shivam Ramam cha poojayan. Vimuktapapo bhavabheetimukto, gachhetpadam vaishnavam isshvaram cha ||5||\nBilvapatraih poojayitvaa Shivam Ramam cha poojayan. Vimuktapapo bhavabheetimukto, gachhetpadam vaishnavam isshvaram cha ||6||",
      "Tulaseedalaih poojayitvaa Shivam Ramam cha poojayan. Vimuktapapo bhavabheetimukto, gachhetpadam vaishnavam isshvaram cha ||7||\nIti Shivaramashtakam nityam praatahkale pathennarah. Sa yaati paramam sthanam yatra devo Maheshvarah ||8||"
    ]
  }
};
// DOM refs (I HATE DOM) 
const homeView           = document.getElementById("homeView");
const mantraView         = document.getElementById("mantraView");
const mantraGrid         = document.getElementById("mantraGrid");
const mantraTitle        = document.getElementById("mantraTitle");
const mantraText         = document.getElementById("mantraText");

const themeToggle        = document.getElementById("themeToggle");
const languageToggle     = document.getElementById("languageToggle");
const homeLanguageToggle = document.getElementById("homeLanguageToggle");
const backBtn            = document.getElementById("backBtn");
const autoScrollToggle   = document.getElementById("autoScrollToggle");
const autoScrollPanel    = document.getElementById("autoScrollPanel");
const autoScrollPanelLabel = document.getElementById("autoScrollPanelLabel");
const autoScrollPanelValue = document.getElementById("autoScrollPanelValue");
const autoScrollRange    = document.getElementById("autoScrollRange");
const autoScrollScaleSlow = document.getElementById("autoScrollScaleSlow");
const autoScrollScaleMedium = document.getElementById("autoScrollScaleMedium");
const autoScrollScaleHigh = document.getElementById("autoScrollScaleHigh");
const autoScrollScaleVeryFast = document.getElementById("autoScrollScaleVeryFast");

const counterDock        = document.getElementById("counterDock");
const countValue         = document.getElementById("countValue");
const incrementBtn       = document.getElementById("incrementBtn");
const resetBtn           = document.getElementById("resetBtn");
const autoIncrementToggle = document.getElementById("autoIncrementToggle");
const scrollTopBtn       = document.getElementById("scrollTopBtn");

//alrts
const alertOverlay       = document.getElementById("alertOverlay");
const alertCancel        = document.getElementById("alertCancel");
const alertConfirm       = document.getElementById("alertConfirm");

const supportsHaptics = typeof navigator !== "undefined" && typeof navigator.vibrate === "function";

// state of the apps
let currentMantraId = null;
let language        = getStoredLanguage();       // mantra reading lang: hindi | hinglish
let homeLanguage    = getStoredHomeLanguage();   // home card lang: roman | hindi
let counters        = getStoredCounters();
let theme           = getInitialTheme();
let autoIncrement   = getStoredAutoIncrement();
let autoScrollSpeed  = getStoredAutoScrollSpeed();
let autoScrollActive = false;

let lineElements    = [];
let scrollObserver  = null;
let endObserver     = null;
let alertCallback   = null;
let endObserverReady = false;
let autoScrollFrameId = null;


initialize();

function initialize() {
  applyTheme(theme);
  syncLocalizedUI();
  setHomeLanguageUI();
  autoIncrementToggle.checked = autoIncrement;
  autoScrollRange.value = speedToIndex(autoScrollSpeed);
  setAutoScrollPanelVisible(false);
  renderHome();

  themeToggle.addEventListener("click", onThemeToggle);
  languageToggle.addEventListener("click", onLanguageToggle);
  homeLanguageToggle.addEventListener("click", onHomeLanguageToggle);
  backBtn.addEventListener("click", goHome);
  autoScrollToggle.addEventListener("click", onAutoScrollToggle);
  autoScrollRange.addEventListener("input", onAutoScrollSpeedChange);
  incrementBtn.addEventListener("click", incrementCounter);
  resetBtn.addEventListener("click", showResetAlert);
  autoIncrementToggle.addEventListener("change", () => {
    autoIncrement = autoIncrementToggle.checked;
    localStorage.setItem(STORAGE_KEYS.autoIncrement, String(autoIncrement));
  });

  // alert model button
  alertCancel.addEventListener("click", hideAlert);
  alertConfirm.addEventListener("click", () => {
    const callback = alertCallback;
    hideAlert();
    if (callback) callback();
  });
  alertOverlay.addEventListener("click", (e) => {
    if (e.target === alertOverlay) hideAlert();
  });

  // scroll to top button
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// rendering the  home
function renderHome() {
  mantraGrid.innerHTML = "";

  const ui = getUIStrings();
  homeView.querySelector(".home-subtitle").textContent = ui.homeSubtitle;

  Object.entries(mantras).forEach(([id, mantra]) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "mantra-card";
    card.setAttribute("aria-label", `${ui.openMantra} ${mantra.title}`);

    const nativeTitle = mantraNativeTitles[id] || mantra.title;
    const showHindi   = homeLanguage === "hindi";

    card.innerHTML = `
      <span class="title">${showHindi ? nativeTitle : mantra.title}</span>
      ${showHindi ? `<span class="title-native">${mantra.title}</span>` : ""}
      <span class="hint">${ui.tapToOpen}</span>
    `;
    card.addEventListener("click", () => openMantra(id));
    mantraGrid.appendChild(card);
  });
}

//opening and cllosing function
function openMantra(id) {
  currentMantraId = id;
  showView("mantra");
  renderMantra();
  updateCounterUI();
  counterDock.classList.remove("hidden");
  if (autoScrollActive) {
    startAutoScrollLoop();
  } else {
    setAutoScrollPanelVisible(false);
    updateAutoScrollButton();
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}

function goHome() {
  currentMantraId = null;
  counterDock.classList.add("hidden");
  scrollTopBtn.classList.add("hidden");
  stopAutoScrollLoop();
  setAutoScrollPanelVisible(false);
  showView("home");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showView(viewName) {
  const showHome = viewName === "home";
  homeView.classList.toggle("active", showHome);
  mantraView.classList.toggle("active", !showHome);
  homeView.setAttribute("aria-hidden", String(!showHome));
  mantraView.setAttribute("aria-hidden", String(showHome));
}

// fix - spotlight
function renderMantra() {
  if (!currentMantraId) return;

  const mantra = mantras[currentMantraId];
  const lines  = mantra[language];
  const ui = getUIStrings();

  mantraTitle.textContent = mantra.title;
  mantraText.innerHTML    = "";

  //disconnect old observer
  if (scrollObserver) { scrollObserver.disconnect(); scrollObserver = null; }
  if (endObserver)    { endObserver.disconnect();    endObserver    = null; }
  //let endObserverReady = false;

  lineElements = [];
  let allSentences = [];

  lines.forEach(block => {
    const explicitLines = block.split('\n');
    explicitLines.forEach(line => {
      if (!line.trim()) return;

      if (line.includes('||')) {
        allSentences.push(line.trim());
        return;
      }

      const tokens = line.split(/([।॥\.])/);
      let tempStr  = "";
      for (let t of tokens) {
        if (t === '।' || t === '॥' || t === '.') {
          if ((tempStr + t).trim()) allSentences.push((tempStr + t).trim());
          tempStr = "";
        } else {
          tempStr += t;
        }
      }
      if (tempStr.trim()) allSentences.push(tempStr.trim());
    });
  });

  // grouping in pair
  for (let i = 0; i < allSentences.length; i += 2) {
    const groupDiv = document.createElement("div");
    groupDiv.className = "mantra-line-group";

    const line1 = document.createElement("p");
    line1.textContent = allSentences[i];
    groupDiv.appendChild(line1);

    if (i + 1 < allSentences.length) {
      const line2 = document.createElement("p");
      line2.textContent = allSentences[i + 1];
      groupDiv.appendChild(line2);
    }

    mantraText.appendChild(groupDiv);
    lineElements.push(groupDiv);
  }

  // end of mantra
  const sentinel = document.createElement("div");
  sentinel.className = "mantra-end-sentinel";
  mantraText.appendChild(sentinel);

  // FIX - the first get highlighetd
  if (lineElements.length > 0) {
    lineElements[0].classList.add("active");
  }

  //  FIX 1 (cont): spotlight via scroll
  scrollObserver = new IntersectionObserver((entries) => {
    // find the topmost element to avoid skip
    let topEntry = null;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
          topEntry = entry;
        }
      }
    });
    if (topEntry) {
      lineElements.forEach(el => el.classList.remove("active"));
      topEntry.target.classList.add("active");
    }
  }, {
    root: null,
    rootMargin: "-30% 0px -55% 0px",  
    threshold: 0
  });

  lineElements.forEach(el => scrollObserver.observe(el));

  // FIX : end of mantra
  endObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollTopBtn.classList.remove("hidden");
        if (autoIncrement && endObserverReady) {
          incrementCounter();
        }
        if (autoScrollActive) {
          stopAutoScrollLoop();
        }
      } else {
        scrollTopBtn.classList.add("hidden");
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -80px 0px",
    threshold: 0.5
  });

  endObserverReady = false;
endObserver.observe(sentinel);
setTimeout(() => { endObserverReady = true; }, 600);

  autoScrollPanelLabel.textContent = ui.autoScrollLabel;
  autoScrollPanelValue.textContent = ui.autoScrollValues[autoScrollSpeed];
  autoScrollRange.value = String(speedToIndex(autoScrollSpeed));
  updateAutoScrollButton();
}


function incrementCounter() {
  if (!currentMantraId) return;
  counters[currentMantraId] = (counters[currentMantraId] || 0) + 1;
  persistCounters();
  updateCounterUI();
  if (supportsHaptics) navigator.vibrate(20);
}

function updateCounterUI() {
  if (!currentMantraId) { countValue.textContent = "0"; return; }
  countValue.textContent = String(counters[currentMantraId] || 0);
}

//CSS alert
function showAlert(message, onConfirm) {
  document.getElementById("alertMessage").textContent = message;
  alertCallback = onConfirm;
  alertOverlay.classList.add("visible");
  alertConfirm.focus();
}

function hideAlert() {
  alertOverlay.classList.remove("visible");
  alertCallback = null;
}

function showResetAlert() {
  if (!currentMantraId) return;
  showAlert(getUIStrings().resetPrompt, () => {
    counters[currentMantraId] = 0;
persistCounters();
updateCounterUI();
endObserverReady = false;
setTimeout(() => { endObserverReady = true; }, 600);
  });
}

// theme toggle
function onThemeToggle() {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  themeToggle.textContent = mode === "dark" ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", mode === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

//Correcting the toggle button
function onLanguageToggle() {
  language = language === "hindi" ? "hinglish" : "hindi";
  localStorage.setItem(STORAGE_KEYS.language, language);
  syncLocalizedUI();
  if (currentMantraId) renderMantra();
  renderHome();
}

function syncLocalizedUI() {
  const ui = getUIStrings();
  backBtn.textContent = ui.back;
  languageToggle.textContent = ui.languageToggle;
  languageToggle.setAttribute("aria-label", ui.languageToggle);
  autoScrollToggle.textContent = autoScrollActive ? ui.pauseAutoScroll : ui.autoScroll;
  autoScrollToggle.setAttribute("aria-label", autoScrollActive ? ui.pauseAutoScroll : ui.autoScroll);
  document.querySelector(".home-subtitle").textContent = ui.homeSubtitle;
  countValue.previousElementSibling.textContent = ui.count;
  incrementBtn.textContent = ui.increment;
  resetBtn.textContent = ui.reset;
  autoIncrementToggle.nextElementSibling.nextElementSibling.textContent = ui.autoIncrement;
  document.getElementById("alertMessage").textContent = ui.resetPrompt;
  alertCancel.textContent = ui.cancel;
  alertConfirm.textContent = ui.confirmReset;
  autoScrollPanelLabel.textContent = ui.autoScrollLabel;
  autoScrollPanelValue.textContent = ui.autoScrollValues[autoScrollSpeed];
  autoScrollScaleSlow.textContent = ui.autoScrollValues.slow;
  autoScrollScaleMedium.textContent = ui.autoScrollValues.medium;
  autoScrollScaleHigh.textContent = ui.autoScrollValues.high;
  autoScrollScaleVeryFast.textContent = ui.autoScrollValues["very-fast"];
  autoScrollRange.setAttribute("aria-label", ui.autoScrollLabel);
  autoScrollRange.value = String(speedToIndex(autoScrollSpeed));
}

//home lang
function onHomeLanguageToggle() {
  homeLanguage = homeLanguage === "roman" ? "hindi" : "roman";
  localStorage.setItem(STORAGE_KEYS.homeLanguage, homeLanguage);
  setHomeLanguageUI();
  renderHome();
}

function setHomeLanguageUI() {
  homeLanguageToggle.textContent = homeLanguage === "roman" ? "हिंदी" : "Roman";
}

function onAutoScrollToggle() {
  if (currentMantraId === null) return;

  if (autoScrollActive) {
    stopAutoScrollLoop();
    setAutoScrollPanelVisible(true);
    updateAutoScrollButton();
    return;
  }

  setAutoScrollPanelVisible(true);
  startAutoScrollLoop();
}

function onAutoScrollSpeedChange() {
  const index = Number(autoScrollRange.value);
  const speed = AUTO_SCROLL_SPEEDS[index] || "medium";
  setAutoScrollSpeed(speed, true);
}

function setAutoScrollSpeed(speed, persist = false) {
  if (!AUTO_SCROLL_SPEEDS.includes(speed)) return;

  autoScrollSpeed = speed;
  if (persist) {
    localStorage.setItem(STORAGE_KEYS.autoScrollSpeed, speed);
  }
  autoScrollPanelValue.textContent = getUIStrings().autoScrollValues[speed];
  autoScrollRange.value = String(speedToIndex(speed));

  if (autoScrollActive) {
    startAutoScrollLoop();
  }
}

function setAutoScrollPanelVisible(visible) {
  autoScrollPanel.classList.toggle("hidden", !visible);
}

function updateAutoScrollButton() {
  const ui = getUIStrings();
  autoScrollToggle.classList.toggle("is-active", autoScrollActive);
  autoScrollToggle.textContent = autoScrollActive ? ui.pauseAutoScroll : ui.autoScroll;
  autoScrollToggle.setAttribute("aria-label", autoScrollActive ? ui.pauseAutoScroll : ui.autoScroll);
}

function startAutoScrollLoop() {
  if (!currentMantraId) return;

  autoScrollActive = true;
  updateAutoScrollButton();
  localStorage.setItem(STORAGE_KEYS.autoScrollSpeed, autoScrollSpeed);

  if (autoScrollFrameId !== null) {
    cancelAnimationFrame(autoScrollFrameId);
    autoScrollFrameId = null;
  }

  let lastTimestamp = null;

  const tick = (timestamp) => {
    if (!autoScrollActive || currentMantraId === null) {
      autoScrollFrameId = null;
      return;
    }

    if (lastTimestamp === null) {
      lastTimestamp = timestamp;
      autoScrollFrameId = requestAnimationFrame(tick);
      return;
    }

    const deltaSeconds = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;

    const viewportHeight = window.innerHeight;
    const maxScrollTop = Math.max(0, document.documentElement.scrollHeight - viewportHeight);
    const currentScrollTop = window.scrollY;

    if (currentScrollTop >= maxScrollTop - 1) {
      stopAutoScrollLoop();
      return;
    }

    const nextScrollTop = Math.min(maxScrollTop, currentScrollTop + AUTO_SCROLL_VELOCITY[autoScrollSpeed] * deltaSeconds);
    window.scrollTo({ top: nextScrollTop, behavior: "auto" });
    autoScrollFrameId = requestAnimationFrame(tick);
  };

  autoScrollFrameId = requestAnimationFrame(tick);
}

function stopAutoScrollLoop() {
  autoScrollActive = false;
  updateAutoScrollButton();
  if (autoScrollFrameId !== null) {
    cancelAnimationFrame(autoScrollFrameId);
    autoScrollFrameId = null;
  }
}

function speedToIndex(speed) {
  return Math.max(0, AUTO_SCROLL_SPEEDS.indexOf(speed));
}

function getUIStrings() {
  return language === "hindi" ? UI_TEXT.hindi : UI_TEXT.hinglish;
}


function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEYS.theme);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredLanguage() {
  const saved = localStorage.getItem(STORAGE_KEYS.language);
  return saved === "hinglish" ? "hinglish" : "hindi";
}

function getStoredHomeLanguage() {
  const saved = localStorage.getItem(STORAGE_KEYS.homeLanguage);
  return saved === "hindi" ? "hindi" : "roman";
}

function getStoredAutoIncrement() {
  const saved = localStorage.getItem(STORAGE_KEYS.autoIncrement);
  return saved === null ? true : saved === "true";
}

function getStoredAutoScrollSpeed() {
  const saved = localStorage.getItem(STORAGE_KEYS.autoScrollSpeed);
  return AUTO_SCROLL_SPEEDS.includes(saved) ? saved : "medium";
}

function getStoredCounters() {
  const raw = localStorage.getItem(STORAGE_KEYS.counters);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch { return {}; }
}

function persistCounters() {
  localStorage.setItem(STORAGE_KEYS.counters, JSON.stringify(counters));
}