const STORAGE_KEYS = {
  theme: "navjaap_theme",
  language: "navjaap_language",
  homeLanguage: "navjaap_home_language",
  counters: "navjaap_counters",
  autoIncrement: "navjaap_auto_increment"
};

// adding hindi titles for the homescreen
const mantraNativeTitles = {
  hanuman_chalisa:          "हनुमान चालीसा",
  bajrang_baan:             "बजरंग बाण",
  sankat_mochan_ashtakam:   "संकट मोचन हनुमान अष्टकम",
  durga_chalisa:            "दुर्गा चालीसा",
  bhavani_ashtakam:         "भवानी अष्टकम",
  kaal_bhairav_ashtakam:    "काल भैरव अष्टकम",
  shivram_ashtakam:         "शिवराम अष्टकम"
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

let lineElements    = [];
let scrollObserver  = null;
let endObserver     = null;
let alertCallback   = null;


initialize();

function initialize() {
  applyTheme(theme);
  setLanguageUI();
  setHomeLanguageUI();
  autoIncrementToggle.checked = autoIncrement;
  renderHome();

  themeToggle.addEventListener("click", onThemeToggle);
  languageToggle.addEventListener("click", onLanguageToggle);
  homeLanguageToggle.addEventListener("click", onHomeLanguageToggle);
  backBtn.addEventListener("click", goHome);
  incrementBtn.addEventListener("click", incrementCounter);
  resetBtn.addEventListener("click", showResetAlert);
  autoIncrementToggle.addEventListener("change", () => {
    autoIncrement = autoIncrementToggle.checked;
    localStorage.setItem(STORAGE_KEYS.autoIncrement, String(autoIncrement));
  });

  // alert model button
  alertCancel.addEventListener("click", hideAlert);
  alertConfirm.addEventListener("click", () => {
    hideAlert();
    if (alertCallback) { alertCallback(); alertCallback = null; }
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

  Object.entries(mantras).forEach(([id, mantra]) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "mantra-card";
    card.setAttribute("aria-label", `Open ${mantra.title}`);

    const nativeTitle = mantraNativeTitles[id] || mantra.title;
    const showHindi   = homeLanguage === "hindi";

    card.innerHTML = `
      <span class="title">${showHindi ? nativeTitle : mantra.title}</span>
      ${showHindi ? `<span class="title-native">${mantra.title}</span>` : ""}
      <span class="hint">Tap to open</span>
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
  window.scrollTo({ top: 0, behavior: "instant" });
}

function goHome() {
  currentMantraId = null;
  counterDock.classList.add("hidden");
  scrollTopBtn.classList.add("hidden");
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

  mantraTitle.textContent = mantra.title;
  mantraText.innerHTML    = "";

  //disconnect old observer
  if (scrollObserver) { scrollObserver.disconnect(); scrollObserver = null; }
  if (endObserver)    { endObserver.disconnect();    endObserver    = null; }

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
        if (autoIncrement) {
          incrementCounter();
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

  endObserver.observe(sentinel);
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
  showAlert("Reset this mantra count?", () => {
    counters[currentMantraId] = 0;
    persistCounters();
    updateCounterUI();
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
  setLanguageUI();
  if (currentMantraId) renderMantra();
}

function setLanguageUI() {
  languageToggle.textContent = language === "hindi" ? "Hinglish" : "हिंदी";
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