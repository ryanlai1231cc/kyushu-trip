/**
 * Fukuoka-Kagoshima 8-Day Tour JS Logic
 */

// --- 1. Dynamic Itinerary Data ---
const itineraryData = {
    1: {
        title: "抵達鹿兒島 ‧ 櫻島渡輪巡禮",
        route: "KOJ 機場巴士 ➔ 鹿兒島市區 ➔ 渡輪櫻島 ➔ 鹿兒島市區",
        mileage: "無（公共交通）",
        time: "機場巴士 40 min + 渡輪 15 min",
        toll: "機場巴士 \u00a51,400 + 渡輪 \u00a5200/人",
        image: "images/day1.png",
        imageAlt: "櫻島火山與鹿兒島灣景",
        tip: "今天不需要租車！搭機場巴士進市區，放好行李後搭渡輪去櫻島。渡輪甲板「やぶ金」烏龍麵只有 15 分鐘可吃，動作要快！櫻島上可搭觀光巴士環島。",
        meals: {
            breakfast: "飛機餐 / 桃園機場出發前自行解決",
            lunch: "鹿兒島市區 ‧ 拉麵或定食 🍜",
            dinner: "天文館通 ‧ <a href='https://www.google.com/maps/search/?api=1&query=黒かつ亭+天文館店' target='_blank'>黒かつ亭 / 黒べぇ 天文館店 📍</a> 🍖（薩摩黑豬炸排名店），飯後來一碗元祖<a href='https://www.google.com/maps/search/?api=1&query=天文館むじゃき+本店' target='_blank'>「白熊冰（むじゃき）」📍</a>"
        },
        accommodation: "鹿兒島市區 ‧ <a href='https://www.agoda.com/zh-tw/fav-lux-kagoshima-tenmonkan/hotel/kagoshima-jp.html?countryId=3&finalPriceView=2&isShowMobileAppPrice=false&cid=1844104&adults=4&checkIn=2027-01-28&currencyCode=TWD&los=1' target='_blank'>FAV LUX 鹿兒島天文館 🔗</a>",
        parkingSpots: [],
        timeline: [
            { time: "11:20", title: "抵達鹿兒島國際機場 (KOJ) ✈️", desc: "飛機降落至<a href='https://www.google.com/maps/search/?api=1&query=鹿児島空港' target='_blank'>鹿兒島國際機場 📍</a>！依序辦理入境手續、衛生申報與行李提領。" },
            { time: "12:00", title: "搭機場巴士前往市區 🚌", desc: "在機場外搭乘機場巴士（約 40 分鐘，\u00a51,400/人）前往鹿兒島中央站或天文館通。" },
            { time: "12:40", title: "抵達市區 ‧ 午餐 🍜", desc: "在鹿兒島中央站或天文館通附近享用午餐，可選擇在地拉麵或定食。飯後步行至飯店 Check-in 放行李。" },
            { time: "14:00", title: "搭渡輪前往櫻島 ⛴️", desc: "步行或搭市電前往<a href='https://www.google.com/maps/search/?api=1&query=桜島フェリーターミナル' target='_blank'>鹿兒島港渡輪碼頭 📍</a>，購買徒步旅客船票（\u00a5200/人）。上船後衝上甲板找「<a href='https://www.google.com/maps/search/?api=1&query=やぶ金+桜島フェリー' target='_blank'>やぶ金 📍</a>」吃烏龍麵——船程只有 15 分鐘，快吃！" },
            { time: "14:20", title: "櫻島觀光巴士環島 🌋", desc: "抵達櫻島後搭乘觀光巴士「サクラジマアイランドビュー」（\u00a5500/人，約 60 分鐘一圈），停靠：❶ <a href='https://www.google.com/maps/search/?api=1&query=湯之平展望所' target='_blank'>湯之平展望所 📍</a>（一般遊客可達最高點）➔ ❷ <a href='https://www.google.com/maps/search/?api=1&query=溶岩なぎさ公園+足湯' target='_blank'>熔岩渚公園足湯 📍</a>（免費天然溫泉足湯 ♨️）" },
            { time: "16:30", title: "搭渡輪返回鹿兒島市區", desc: "搭渡輪返回鹿兒島港（15 分鐘），再步行或搭市電回飯店休息換裝。" },
            { time: "18:30", title: "天文館通晚餐 🍖", desc: "步行至天文館通，前往<a href='https://www.google.com/maps/search/?api=1&query=黒かつ亭+天文館店' target='_blank'>「黒かつ亭」或「黒べぇ 天文館店」📍</a>——鹿兒島著名薩摩黑豬炸排老店。飯後散步到<a href='https://www.google.com/maps/search/?api=1&query=天文館むじゃき+本店' target='_blank'>「むじゃき」📍</a>嚐元祖「白熊冰」！" }
        ]
    },
    2: {
        title: "鹿兒島一日遊 ‧ 仙巖園世界遺產",
        route: "鹿兒島市區 ➔ 仙巖園 ➔ 城山展望台 ➔ 天文館通",
        mileage: "無（市電 / 巴士）",
        time: "市電 ‧ 巴士",
        toll: "市電一日券 \u00a5600",
        image: "images/day2.png",
        imageAlt: "仙巌園日式庭園與櫻島借景",
        tip: "今天不趕路！搭市電和巴士悠閒暢遊鹿兒島。建議購買市電一日券（\u00a5600），上午參觀世界遺產仙巖園，下午到城山展望台俯瞰櫻島全景。",
        meals: {
            breakfast: "飯店附近早餐 或 便利商店",
            lunch: "仙巖園內「<a href='https://www.google.com/maps/search/?api=1&query=桜華亭+仙巌園' target='_blank'>櫻華亭 📍</a>」‧ 薩摩鄉土料理定食 🍱",
            dinner: "天文館通 ‧ 鹿兒島黑豬涮涮鍋 或 居酒屋 🍖"
        },
        accommodation: "鹿兒島市區 ‧ <a href='https://www.agoda.com/zh-tw/fav-lux-kagoshima-tenmonkan/hotel/kagoshima-jp.html?countryId=3&finalPriceView=2&isShowMobileAppPrice=false&cid=1844104&adults=4&checkIn=2027-01-29&currencyCode=TWD&los=1' target='_blank'>FAV LUX 鹿兒島天文館 🔗</a>",
        parkingSpots: [],
        timeline: [
            { time: "09:00", title: "搭巴士前往仙巖園 🚌", desc: "從市區搭乘城市觀光巴士或一般路線巴士前往「<a href='https://www.google.com/maps/search/?api=1&query=仙巌園' target='_blank'>仙巖園 📍</a>（磯庭園）」，約 20 分鐘。" },
            { time: "09:30", title: "仙巖園參觀 ‧ 世界文化遺產 🏛️", desc: "<a href='https://www.google.com/maps/search/?api=1&query=仙巌園' target='_blank'>仙巖園 📍</a>——薩摩藩主島津家的別邸庭園，以櫻島為借景、錦江灣為池塘的壯闊設計堪稱日本庭園最高傑作。園內包含世界文化遺產「舊集成館」——日本近代工業化的起點。" },
            { time: "11:30", title: "仙巖園午餐 ‧ 櫻華亭", desc: "在園內「<a href='https://www.google.com/maps/search/?api=1&query=桜華亭+仙巌園' target='_blank'>櫻華亭 📍</a>」享用薩摩鄉土料理定食，以櫻島為背景的絕景餐廳。" },
            { time: "13:00", title: "城山展望台 🏔️", desc: "搭巴士前往<a href='https://www.google.com/maps/search/?api=1&query=城山展望台+鹿児島' target='_blank'>城山展望台 📍</a>——鹿兒島市區的制高點，180 度俯瞰鹿兒島市街、錦江灣與櫻島火山。" },
            { time: "14:30", title: "鹿兒島水族館 🐠 (選配)", desc: "若帶小朋友可搭市電前往<a href='https://www.google.com/maps/search/?api=1&query=いおワールドかごしま水族館' target='_blank'>鹿兒島水族館 📍</a>，看鯨鯊和海豚表演！或在市區悠閒散步逛街。" },
            { time: "16:00", title: "返回飯店休息", desc: "回飯店稍作休息，為明天的取車自駕養精蓄銳。" },
            { time: "18:00", title: "天文館通散策 ‧ 晚餐 🍖", desc: "步行至天文館通商圈逛街購物，享用鹿兒島黑豬涮涮鍋或在地居酒屋，體驗鹿兒島的夜生活！" }
        ]
    },
    3: {
        title: "AVIS 取車 ➔ 霧島神宮 ‧ 霧島溫泉鄉",
        route: "鹿兒島市區 AVIS 取車 ➔ 霧島神宮 ➔ 丸尾瀑布 ➔ 霧島溫泉",
        mileage: "約 90 km",
        time: "約 1.5 hrs (自駕)",
        toll: "約 800 円 (KEP 高速券適用)",
        image: "images/day3.png",
        imageAlt: "霧島神宮朱紅色大社殿",
        tip: "今天正式開始自駕！早上在市區 AVIS 取車，攜帶護照、台灣駕照正本與日文譯本。取車後北上霧島山區，參拜霧島神宮後入住溫泉旅館。",
        meals: {
            breakfast: "飯店早餐 / 便利商店輕食",
            lunch: "霧島 ‧ 當地蕎麥麵或定食 🍜",
            dinner: "霧島溫泉旅館 ‧ 隨附晚餐（會席料理）"
        },
        accommodation: "霧島溫泉鄉 ‧ <a href='https://www.agoda.com/zh-tw/kirishima-onsen-ryokojin-sanso/hotel/kirishima-jp.html?countryId=3&finalPriceView=1&isShowMobileAppPrice=false&cid=1779080&numberOfBedrooms=&familyMode=false&adults=4&children=0&rooms=1&maxRooms=0&checkIn=2027-01-30&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=3&showReviewSubmissionEntry=false&currencyCode=TWD&isFreeOccSearch=false&los=1&searchrequestid=2f647880-493a-4fb9-8151-bd2bb724a617&ds=qgPLe6XWQl8X9rcw' target='_blank'>霧島溫泉 旅行人山莊 🔗</a>",
        parkingSpots: [
            { name: "AVIS 鹿兒島", mapcode: "42 066 022*55" },
            { name: "霧島神宮", mapcode: "376 089 596*04" },
            { name: "丸尾滝", mapcode: "42 804 030*47" },
        ],
        timeline: [
            { time: "08:30", title: "AVIS 取車 🚗", desc: "退房後步行或搭市電前往 <a href='https://www.google.com/maps/search/?api=1&query=AVIS+鹿児島県鹿児島市上之園町10-15' target='_blank'>AVIS 鹿兒島營業所 📍</a>（鹿児島市上之園町10-15）取車。攜帶護照、台灣駕照正本與日文譯本辦理手續，仔細確認車輛外觀（拍照存證），啟用 ETC 卡，同時詢問加購「KEP（九州高速公路周遊券）」。" },
            { time: "09:30", title: "出發前往霧島 🚗", desc: "從鹿兒島市區出發，沿九州自動車道北上前往霧島山區（約 1 小時車程）。日本靠左行駛，慢慢適應！沿途風景從都市漸轉為山巒疊翠。" },
            { time: "10:30", title: "霧島神宮參拜 ⛩️", desc: "<a href='https://www.google.com/maps/search/?api=1&query=霧島神宮' target='_blank'>霧島神宮 📍</a>——南九州規模最大的朱紅色神宮，祭祀天孫瓊瓊杵尊。也是坂本龍馬新婚旅行地。朱漆大社殿在蔥蘢杉木林間格外莊嚴，境內瀰漫著清淨神聖的氣息。" },
            { time: "12:00", title: "霧島午餐 🍜", desc: "在霧島神宮附近享用當地蕎麥麵或鄉土料理定食。" },
            { time: "13:30", title: "丸尾瀑布 (順路)", desc: "霧島溫泉區的<a href='https://www.google.com/maps/search/?api=1&query=丸尾滝' target='_blank'>丸尾瀑布 📍</a>是罕見的「溫泉瀑布」——冬季時水蒸氣繚繞如仙境，停車看幾分鐘即可。" },
            { time: "14:00", title: "入住霧島溫泉鄉 ♨️", desc: "提早入住硫磺泉煙裊裊的霧島溫泉。換上浴衣悠閒散步，享受旅館設施。" },
            { time: "18:00", title: "溫泉旅館晚餐 🍽️", desc: "享用旅館的精緻會席料理（薩摩地雞、黑豬涮涮鍋、溫泉豆腐），飯後泡露天溫泉洗去一日疲憊，仰望星空入眠。" }
        ]
    },
    4: {
        title: "壯麗阿蘇大景 ➔ 熊本市",
        route: "霧島溫泉 ➔ 阿蘇中岳火山口 ➔ 草千里 ➔ 大觀峰 ➔ 熊本市區",
        mileage: "約 180 km",
        time: "約 3.5 hrs (自駕)",
        toll: "約 1,800 円 (KEP 高速券適用)",
        image: "images/day4.png",
        imageAlt: "阿蘇草千里翠綠大草原",
        tip: "今天專注享受阿蘇的壯闘火山景觀！阿蘇火山口屬活火山，出發前務必查詢「阿蘇山火口立入規制情報」確認是否開放。下午輕鬆開往熊本市區入住。",
        meals: {
            breakfast: "霧島溫泉旅館 ‧ 隨附早餐",
            lunch: "阿蘇 ‧ <a href='https://www.google.com/maps/place/%E9%89%84%E6%9D%BF%E7%84%BC%E9%98%BF%E8%98%87%E3%81%BE%E3%83%BC%E3%81%BC%E3%83%BC/data=!4m2!3m1!1s0x0:0x9bff0aa16ed651b3?sa=X&ved=1t:2428&ictx=111' target='_blank'>鉄板焼阿蘇まーぼー 📍</a> / <a href='https://www.google.com/maps/search/?api=1&query=あか牛丼専門店+ごとう屋+本店' target='_blank'>ごとう屋 本店 📍</a> 🥩",
            dinner: "熊本市區 ‧ 馬肉刺身居酒屋 或 太平燕（春雨湯麵）🍜"
        },
        accommodation: "熊本市區 ‧ <a href='https://www.agoda.com/zh-tw/fav-hotel-kumamoto/hotel/kumamoto-jp.html?countryId=3&finalPriceView=2&isShowMobileAppPrice=false&cid=1844104&adults=4&checkIn=2027-01-31&currencyCode=TWD&los=2' target='_blank'>FAV HOTEL 熊本 🔗</a>（住兩晚）",
        parkingSpots: [
            { name: "阿蘇中岳火口", mapcode: "256 460 490*83" },
            { name: "草千里ヶ浜", mapcode: "256 456 741*50" },
            { name: "大観峰", mapcode: "256 878 130*04" },
        ],
        timeline: [
            { time: "08:30", title: "退房出發 ‧ 前往阿蘇 🚗", desc: "離開霧島溫泉，經高速公路北上前往阿蘇火山區域（約 2 小時車程）。沿途穿越破火山口地形，壯闊尺度讓人震撼。" },
            { time: "10:30", title: "阿蘇中岳火山口觀景 🌋", desc: "若<a href='https://www.google.com/maps/search/?api=1&query=阿蘇中岳火口' target='_blank'>阿蘇中岳火山口 📍</a>開放，沿步道直達火口旁，俯瞰翻滾的火山煙霧與翠綠火山湖。站在活火山口邊緣的震撼感無法言喻。" },
            { time: "11:30", title: "阿蘇午餐 🥩", desc: "品嚐阿蘇名物赤牛料理！❶ <a href='https://www.google.com/maps/place/%E9%89%84%E6%9D%BF%E7%84%BC%E9%98%BF%E8%98%87%E3%81%BE%E3%83%BC%E3%81%BC%E3%83%BC/data=!4m2!3m1!1s0x0:0x9bff0aa16ed651b3?sa=X&ved=1t:2428&ictx=111' target='_blank'>鉄板焼阿蘇まーぼー 📍</a> ❷ <a href='https://www.google.com/maps/search/?api=1&query=あか牛丼専門店+ごとう屋+本店' target='_blank'>ごとう屋 本店 📍</a>（赤牛丼）" },
            { time: "12:30", title: "草千里之濱 🐄", desc: "漫步在<a href='https://www.google.com/maps/search/?api=1&query=草千里ヶ浜' target='_blank'>草千里之濱 📍</a>——阿蘇山腰的廣大火山盆地草原。青草、藍天、火山——九州的象徵風景。" },
            { time: "14:00", title: "大觀峰展望台 (選配)", desc: "若時間允許，繞至「<a href='https://www.google.com/maps/search/?api=1&query=大観峰' target='_blank'>大觀峰 📍</a>」展望台，360度俯瞰阿蘇五岳。" },
            { time: "15:00", title: "驅車前往熊本市區 🚗", desc: "從阿蘇沿九州自動車道（KEP 適用）南下前往熊本市區（約 1 小時車程），輕鬆抵達。" },
            { time: "16:00", title: "入住熊本市區飯店", desc: "抵達熊本市區飯店 Check-in，放下行李稍作休息。晚上可在市區散步探索。" },
            { time: "18:00", title: "熊本市區晚餐 🍜", desc: "品嚐熊本在地名物：❶ 馬肉刺身 ❷ 太平燕（春雨湯麵）❸ 桂花拉麵（濃郁豚骨加炸蒜片）。在地感十足的一晚！" }
        ]
    },
    5: {
        toll: "無",
        image: "images/day5.png",
        imageAlt: "熊本城天守閣雄偉石垣",
        tip: "今天完整一天留給熊本！不趕行程，細細品味這座有著 400 年歷史的城下町。熊本城的修復工程本身就是一大看點。別忘了找くまモン（熊本熊）合照！",
        meals: {
            breakfast: "熊本市區飯店早餐 或 咖啡廳",
            lunch: "熊本 ‧ 桂花拉麵 或 熊本名物太平燕 🍜",
            dinner: "熊本 ‧ 居酒屋體驗 或 燒肉 🍖"
        },
        accommodation: "熊本市區 ‧ <a href='https://www.agoda.com/zh-tw/fav-hotel-kumamoto/hotel/kumamoto-jp.html?countryId=3&finalPriceView=2&isShowMobileAppPrice=false&cid=1844104&adults=4&checkIn=2027-02-1&currencyCode=TWD&los=2' target='_blank'>FAV HOTEL 熊本 🔗</a> / <a href='https://www.airbnb.com.tw/rooms/1467073423844939456?adults=7&check_in=2027-02-01&check_out=2027-02-03' target='_blank'>Airbnb ① 🔗</a> / <a href='https://www.airbnb.com.tw/rooms/1664099297361077485?adults=7&check_in=2027-02-01&check_out=2027-02-03' target='_blank'>Airbnb ② 🔗</a>（第二晚）",
        parkingSpots: [
            { name: "熊本城", mapcode: "29 489 299*33" },
            { name: "水前寺成趣園", mapcode: "29 433 464*08" },
        ],
        timeline: [
            { time: "09:00", title: "熊本城天守閣 🏯", desc: "日本三大名城之一！2016 年<a href='https://www.google.com/maps/search/?api=1&query=熊本城' target='_blank'>熊本城 📍</a>地震後的修復工程仍在進行，但天守閣主體已重新開放。近距離見證石垣「武者返し」的巧妙工法與復原工程的壯舉。別忘了在城周邊找「くまモン（熊本熊）」合照！" },
            { time: "10:30", title: "城彩苑 ‧ 櫻の小路 🏮", desc: "熊本城腳下的<a href='https://www.google.com/maps/search/?api=1&query=桜の馬場+城彩苑' target='_blank'>城彩苑 📍</a>——復古城下町風格的商店街，有陣太鼓表演、熊本熊紀念品店、還有多間在地小吃。可以買到一口馬肉可樂餅和辛子蓮藕。" },
            { time: "12:00", title: "熊本市區午餐 🍜", desc: "品嚐熊本名物：推薦<a href='https://www.google.com/maps/search/?api=1&query=桂花ラーメン+本店+熊本' target='_blank'>桂花拉麵 📍</a>（濃郁豚骨加炸蒜片）或太平燕（以春雨取代麵條的湯麵，清爽又飽足）。" },
            { time: "13:30", title: "水前寺成趣園 🌿", desc: "前往<a href='https://www.google.com/maps/search/?api=1&query=水前寺成趣園' target='_blank'>水前寺成趣園 📍</a>——細川家的迴遊式庭園，以微縮東海道五十三次的風景聞名，園內湧泉清澈見底，冬季也別有風味。搭配抹茶和菓子慢慢欣賞。" },
            { time: "15:00", title: "上下通商店街購物 🛍️", desc: "漫步<a href='https://www.google.com/maps/search/?api=1&query=上通+下通+熊本' target='_blank'>上下通商店街 📍</a>——熊本最熱鬧的拱廊商店街，藥妝、服飾、伴手禮一應俱全。也可到鶴屋百貨逛逛。" },
            { time: "17:00", title: "飯店休息 ‧ 準備晚餐", desc: "回飯店休息一下，換裝準備享用熊本最後一晚的晚餐。" },
            { time: "18:30", title: "熊本晚餐 🍖", desc: "今晚可以嘗試居酒屋體驗——點一盤馬肉刺身、辛子蓮藕、一品燒酒，感受熊本的夜晚氣氛。或者來頓燒肉犒賞自己！" }
        ]
    },
    6: {
        title: "熊本 ➔ 柳川 ➔ 太宰府 ➔ 福岡還車",
        route: "熊本 ➔ 吉次園 ➔ 柳川搖櫓遊船 ➔ 太宰府天滿宮 ➔ 福岡還車",
        mileage: "約 160 km (全程自駕)",
        time: "約 3 hrs (分段自駕)",
        toll: "約 2,500 円 (KEP 高速券適用) + 停車費約 ¥500~1,000",
        image: "images/day6.png",
        imageAlt: "柳川遊船柳樹水道風光",
        tip: "今天自駕最後一天！路線由南往北一路順行：熊本→柳川→太宰府→福岡還車，完全不走回頭路。柳川遊船公司有免費停車場，太宰府平日停車也很方便。冬季限定：柳川有「水上コタツ（暖桌船）」！",
        meals: {
            breakfast: "熊本市區 ‧ 超市隨買 🏪",
            lunch: "柳川 ‧ 下船後品嚐名物蒸籠鰻魚飯（せいろ蒸し）🍱",
            dinner: "福岡天神 ‧ 博多一蘭拉麵 或 ShinShin 豚骨拉麵 🍜 或 天神居酒屋"
        },
        accommodation: "福岡博多市區 ‧ <a href='https://www.agoda.com/zh-tw/the-royal-park-hotel-fukuoka/hotel/fukuoka-jp.html?countryId=0&finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&adults=4&checkIn=2027-02-2&currencyCode=TWD&los=2' target='_blank'>The Royal Park Hotel 福岡 🔗</a> / <a href='https://www.airbnb.com.tw/rooms/1661293365430301869?adults=7&check_in=2027-02-02&check_out=2027-02-04' target='_blank'>Airbnb 民宿 🔗</a>（連住兩晚）",
        parkingSpots: [
            { name: "吉次園", mapcode: "29 494 372*85" },
            { name: "松月乗船場 (柳川)", mapcode: "69 875 573*40" },
            { name: "若松屋 (柳川鰻魚飯)", mapcode: "69 875 573*40" },
            { name: "太宰府天満宮", mapcode: "55 364 073*51" },
        ],
        timeline: [
            { time: "10:00", title: "退房 ‧ 前往吉次園 🍓", desc: "飯店 Check-out 後驅車前往<a href='https://www.google.com/maps/search/?api=1&query=吉次園+熊本' target='_blank'>吉次園 📍</a>（車程約 20 分鐘，10:20 抵達），享受冬季限定草莓放題！園內可現採現吃多品種草莓，甜度爆表🍓 ⚠️ <strong>10:30 前需抵達</strong>" },
            { time: "11:15", title: "驅車前往柳川 🚗", desc: "吃飽草莓後，走九州自動車道北上，從「みやま柳川 IC」下交流道（約 1 小時車程）。柳川位於熊本與福岡中間，完全順路不繞道！" },
            { time: "12:15", title: "抵達柳川 ‧ 遊船乘船場停車", desc: "將車停在遊船公司附設的<a href='https://www.google.com/maps/search/?api=1&query=松月乗船場+柳川' target='_blank'>松月乘船場免費停車場 📍</a>。停好車後準備搭船！" },
            { time: "12:30", title: "柳川搖櫓遊船 🛶", desc: "體驗約 70 分鐘的<a href='https://www.google.com/maps/search/?api=1&query=柳川川下り' target='_blank'>柳川搖櫓遊船 📍</a>傳統搖櫓船（どんこ舟），穿梭在市街水道間，欣賞柳樹倒影與白壁町家風光。🧣 冬季限定：可搭乘「水上コタツ船」——船上放暖桌與被爐，邊取暖邊遊河！下船後搭船公司免費接駁車回乘船處取車。" },
            { time: "14:00", title: "午餐：柳川名物蒸籠鰻魚飯 🍱", desc: "品嚐柳川名物——以杉木蒸籠烹製的醬汁鰻魚飯，魚肉入口即化，鮮甜回甘。推薦「<a href='https://www.google.com/maps/search/?api=1&query=若松屋+柳川' target='_blank'>若松屋 📍</a>」（<a href='https://www.google.com/maps/search/?api=1&query=若松屋+駐車場+柳川' target='_blank'>專用停車場 🅿️</a> 約40台）或「<a href='https://www.google.com/maps/search/?api=1&query=元祖本吉屋+柳川' target='_blank'>元祖本吉屋 📍</a>」。" },
            { time: "15:00", title: "開車前往太宰府 🚗", desc: "從柳川開車北上太宰府（約 40~50 分鐘），停在天滿宮周邊收費停車場（約 ¥400~500）。平日停車位充足，不用擔心。" },
            { time: "15:50", title: "太宰府天滿宮參拜 ⛩️", desc: "祭祀學問之神菅原道真的千年神社<a href='https://www.google.com/maps/search/?api=1&query=太宰府天満宮' target='_blank'>太宰府天滿宮 📍</a>。在參道品嚐現烤「梅枝餅」、參觀隈研吾設計的前衛星巴克。殿前飛梅在每年 2 月盛開——正好趕上我們的旅行時間！" },
            { time: "17:00", title: "開車前往福岡市區還車 🚗", desc: "從太宰府開往福岡市區（約 25 分鐘）。途中在順路的「<a href='https://www.google.com/maps/search/?api=1&query=ENEOS+セルフ水城店+太宰府市水城' target='_blank'>ENEOS セルフ水城店 ⛽</a>」加滿油（24H營業），索取收據備查。" },
            { time: "17:30", title: "福岡市區還車 🏁", desc: "至<a href='https://maps.app.goo.gl/oeT2FtrDoc8CAyRK6' target='_blank'>租車公司還車地點 📍</a>還車。結清 ETC 過路費明細，出示加油站收據，確認車輛無新損傷後完成手續。自駕六天辛苦了！" },
            { time: "18:00", title: "搭大眾交通至飯店 Check-in 🧳", desc: "還車後搭地鐵或巴士前往<a href='https://www.agoda.com/zh-tw/the-royal-park-hotel-fukuoka/hotel/fukuoka-jp.html?countryId=0&finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&adults=4&checkIn=2027-02-2&currencyCode=TWD&los=2' target='_blank'>The Royal Park Hotel 福岡 🔗</a>辦理入住，放下行李稍作休息。" },
            { time: "18:30", title: "福岡晚餐 🍜", desc: "推薦今晚去吃「<a href='https://www.google.com/maps/search/?api=1&query=一蘭+本社総本店' target='_blank'>一蘭拉麵總本店 📍</a>」（中洲川端）或「<a href='https://www.google.com/maps/search/?api=1&query=博多ShinShin+博多駅' target='_blank'>博多 ShinShin 拉麵 📍</a>」。結束自駕的夜晚，用一碗濃郁豚骨拉麵犒賞自己！" }
        ]
    },
    7: {
        title: "大正浪漫門司港 ‧ 關門海峽 ‧ 小倉城",
        route: "博多 ➔ 門司港 ➔ 關門海峽隧道 ➔ 小倉城 ➔ 博多",
        mileage: "無 (大眾運輸)",
        time: "約 45 mins (JR 特急)",
        toll: "JR 九州鐵路周遊券 (北九州) 或 單買來回車票",
        image: "images/day7.png",
        imageAlt: "門司港懷舊洋式紅磚建築群",
        tip: "門司港保留了許多明治大正時期的紅磚洋式建築，光線好時非常上相。關門海峽人行隧道免費通行，腳踩九州與本州的縣界線超有趣！傍晚早點回博多享受最後一晚。",
        meals: {
            breakfast: "福岡市區 ‧ 博多車站商圈早餐 或 飯店附近咖啡廳",
            lunch: "門司港 ‧ 名物焗烤燒咖哩（焼きカレー）🍛 起司烤得金黃，咖哩濃郁",
            dinner: "中洲屋台 ‧ 博多最經典露天攤販街 🍢🍺"
        },
        accommodation: "福岡博多市區 ‧ <a href='https://www.agoda.com/zh-tw/the-royal-park-hotel-fukuoka/hotel/fukuoka-jp.html?countryId=0&finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&adults=4&checkIn=2027-02-2&currencyCode=TWD&los=2' target='_blank'>The Royal Park Hotel 福岡 🔗</a> / <a href='https://www.airbnb.com.tw/rooms/1661293365430301869?adults=7&check_in=2027-02-02&check_out=2027-02-04' target='_blank'>Airbnb 民宿 🔗</a>（第二晚，明天 Check-out）",
        parkingSpots: [],
        timeline: [
            { time: "09:00", title: "搭乘 JR 特急前往門司港", desc: "在博多車站搭乘特急「音速號（ソニック）」至小倉（約 17 分鐘），再轉乘鹿兒島本線普通車至門司港（約 10 分鐘）。" },
            { time: "10:30", title: "門司港懷舊區散步 🏛️", desc: "漫步在保存完好的明治大正洋式建築群：<a href='https://www.google.com/maps/search/?api=1&query=門司港駅' target='_blank'>門司港車站 📍</a>（日本最古老的重要文化財站房）、<a href='https://www.google.com/maps/search/?api=1&query=旧大阪商船' target='_blank'>舊大阪商船 📍</a>、<a href='https://www.google.com/maps/search/?api=1&query=旧門司三井倶楽部' target='_blank'>舊門司三井俱樂部 📍</a>、以及晴天下自動開合的<a href='https://www.google.com/maps/search/?api=1&query=ブルーウィングもじ' target='_blank'>藍翼吊橋（ブルーウィングもじ）📍</a>。紅磚洋樓在冬日陽光下特別上相。" },
            { time: "12:00", title: "午餐：門司港名物燒咖哩 🍛", desc: "品嚐起司焗烤加上濃郁咖哩飯的在地名物「焼きカレー」，口味豐富香濃，是門司港最具代表性的必吃美食。推薦「<a href='https://www.google.com/maps/search/?api=1&query=BEAR+FRUITS+門司港' target='_blank'>BEAR FRUITS 📍</a>」或「<a href='https://www.google.com/maps/search/?api=1&query=伽哩本舗+門司港' target='_blank'>伽哩本舗 📍</a>」。" },
            { time: "13:30", title: "關門海峽人行隧道 🚶", desc: "步行至<a href='https://www.google.com/maps/search/?api=1&query=関門トンネル人道入口' target='_blank'>關門海峽人行隧道 📍</a>入口（免費），徒步穿越海底隧道（約 780 公尺，15 分鐘），在腳下的「福岡縣/山口縣」縣界線拍照打卡，完成從九州走到本州的有趣體驗！走到對岸後再走回來即可。" },
            { time: "15:00", title: "返回博多 ‧ 福岡塔 🗼", desc: "搭 JR 特急返回博多（約 20 分鐘），再轉巴士前往<a href='https://www.google.com/maps/search/?api=1&query=福岡タワー' target='_blank'>福岡塔 📍</a>——日本最高的海濱塔（234m）。搭乘透明電梯直達 123m 展望台，360° 眺望博多灣、市區夜景與能古島。冬季期間塔身常有燈飾點綴，入夜後超美！" },
            { time: "16:30", title: "teamLab Forest 🎨", desc: "從福岡塔步行約 5 分鐘即達<a href='https://www.google.com/maps/search/?api=1&query=チームラボフォレスト+福岡' target='_blank'>teamLab Forest 📍</a>（位於 BOSS E·ZO FUKUOKA 內）。沉浸式光影藝術空間，穿梭在數位花海、光之森林中，互動感十足！營業至 20:00，門票約 ¥2,400/人。👉 <a href='https://e-zofukuoka.com/teamlabforest/' target='_blank'>官網購票 🔗</a>" },
            { time: "18:00", title: "前往中洲屋台 🍢", desc: "從 teamLab 步行 15 分鐘至<a href='https://www.google.com/maps/search/?api=1&query=唐人町駅' target='_blank'>唐人町駅 📍</a>，搭地鐵至中洲川端駅（約 8 分鐘），或直接叫計程車（約 15 分鐘、¥1,000~1,500）。抵達<a href='https://www.google.com/maps/search/?api=1&query=中洲屋台' target='_blank'>中洲屋台 📍</a>——博多最經典的露天攤販街！在河畔燈光下坐上板凳，來碗豚骨拉麵、烤雞串、關東煮，配一杯生啤酒，用最道地的博多夜晚為旅程乾杯！🍺" }
        ]
    },
    8: {
        title: "博多老城散步 ➔ 滿載歸國",
        route: "櫛田神社 / 東長寺 ➔ 最後採購 ➔ 福岡機場 (FUK) 離境",
        mileage: "無 (大眾運輸)",
        time: "約 30 mins (地鐵)",
        toll: "地鐵車資",
        image: "images/day8.png",
        imageAlt: "博多中洲屋台夜景",
        tip: "福岡機場離市區極近（地鐵博多站出發 5 分鐘），但國際線需轉接駁車，加上報到人潮，建議提早 2.5 小時到達機場。出發前確認行李重量，不要買到超重！",
        meals: {
            breakfast: "博多 ‧ 櫛田神社周邊老街咖啡廳 或 飯店早餐（最後一次日本早晨！）",
            lunch: "博多 ‧ 一蘭拉麵 或 Shin-Shin 博多豚骨拉麵 🍜（旅程的完美句點）",
            dinner: "機上 ‧ 帶著滿滿的九州回憶飛回台灣 🛫✨"
        },
        accommodation: "無 ‧ 今日 Check-out 後前往機場離境",
        parkingSpots: [],
        timeline: [
            { time: "09:00", title: "博多老城區晨間散步 ⛩️", desc: "退房寄放行李後，步行前往「<a href='https://www.google.com/maps/search/?api=1&query=櫛田神社' target='_blank'>櫛田神社 📍</a>」——博多的總鎮守，境內有巨大的博多祇園山笠常設展示。再步行 5 分鐘到「<a href='https://www.google.com/maps/search/?api=1&query=東長寺+福岡' target='_blank'>東長寺 📍</a>」，這裡有日本最大的木造坐佛像（福岡大佛），可以體驗「地獄‧極樂巡り」暗道。" },
            { time: "10:30", title: "福岡市區最後採購 🛍️", desc: "回到博多車站做最後的伴手禮衝刺：❶ 明太子（推薦 FUKUYA 元祖 或「味の明太子 ふくや」）❷ 博多通りもん（連續多年日本最受歡迎伴手禮）❸ HIYOKO 小雞饅頭 ❹ 博多拉麵生麵禮盒（回家自己煮！）。行李拉鍊要拉得起來！" },
            { time: "12:00", title: "午餐：博多拉麵 🍜", desc: "用一碗濃郁的博多豚骨拉麵為旅程畫下完美句點——選<a href='https://www.google.com/maps/search/?api=1&query=一蘭+本社総本店' target='_blank'>一蘭 📍</a>的單人格位獨享，或 <a href='https://www.google.com/maps/search/?api=1&query=博多ShinShin+博多駅' target='_blank'>Shin-Shin 📍</a>的溫潤湯頭。替硬（バリカタ）加點！" },
            { time: "13:30", title: "拿取行李 ‧ 前往福岡機場", desc: "返回飯店取出寄存行李，搭乘機場地鐵線前往福岡機場（博多站出發約 5 分鐘），抵達後轉免費接駁巴士至國際線航廈（約 15 分鐘）。" },
            { time: "14:30", title: "福岡機場 (FUK) 報到 ✈️", desc: "抵達<a href='https://www.google.com/maps/search/?api=1&query=福岡空港+国際線ターミナル' target='_blank'>福岡機場 📍</a>，辦理登機手續與行李托運。免稅店最後衝刺——特別推薦「博多拉麵生麵」禮盒和「通りもん」限定包裝。" },
            { time: "17:00", title: "搭機返台 🏠", desc: "起飛！帶著滿滿的九州回憶——櫻島的壯闘、指宿的熱砂、高千穗的神話、阿蘇的壯闊、熊本城的雄偉、博多的美味——平安飛回台灣。八天七夜，完美落幕！✨" }
        ]
    }
};

// --- 2. Initialize DOM Elements ---
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const header = document.querySelector('.main-header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const themeToggleBtn = document.getElementById('themeToggle');
    const itineraryTabs = document.getElementById('itineraryTabs');
    const itineraryContent = document.getElementById('itineraryContent');
    const checklistProgress = document.getElementById('progressBar');
    const checklistProgressText = document.getElementById('progressText');
    const resetChecklistBtn = document.getElementById('resetChecklistBtn');
    const copyrightYear = document.getElementById('copyrightYear');

    // Set Copyright Year Automatically
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // --- 3. Scroll Header Effect & Scroll Spy ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        syncNavActiveState();
    });

    function syncNavActiveState() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    // --- 4. Mobile Menu Toggle ---
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'ri-close-line';
            } else {
                icon.className = 'ri-menu-4-line';
            }
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'ri-menu-4-line';
            });
        });
    }

    // --- 5. Light/Dark Theme Switcher ---
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- 6. Interactive Itinerary Day Switcher ---
    if (itineraryTabs && itineraryContent) {
        const tabBtns = itineraryTabs.querySelectorAll('.tab-btn');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const day = btn.getAttribute('data-day');

                // Set active tab styling
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update Map Pins highlight active day
                updateMapActivePin(day);

                // Render Day Panel
                renderItineraryDay(day);
            });
        });
    }

    function updateMapActivePin(day) {
        const pins = document.querySelectorAll('.map-pin');
        pins.forEach(pin => {
            pin.classList.remove('active');
            if (pin.getAttribute('data-day') === day) {
                pin.classList.add('active');
            }
        });
    }

    // Render new content into itinerary area with transition
    function renderItineraryDay(dayNum) {
        const data = itineraryData[dayNum];
        if (!data) return;

        // Build Timeline Items HTML
        let timelineHtml = '';
        data.timeline.forEach(item => {
            timelineHtml += `
                <li>
                    <span class="time">${item.time}</span>
                    <div class="timeline-body">
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                    </div>
                </li>
            `;
        });

        // Use appropriate icon depending on transit type
        const isSelfDrive = parseInt(dayNum) <= 5 || (parseInt(dayNum) === 6 && true);
        const iconClass = isSelfDrive ? 'ri-roadster-line' : 'ri-train-line';
        const transitLabel = isSelfDrive ? '開車里程：' : '交通工具：';
        const durationLabel = isSelfDrive ? '車程時間：' : '預估車程：';
        const costLabel = isSelfDrive ? '過路費：' : '交通票券：';
        const costIcon = isSelfDrive ? 'ri-copper-coin-line' : 'ri-ticket-2-line';

        // Meals HTML
        const mealsHtml = data.meals ? `
            <div class="meals-section">
                <h3><i class="ri-restaurant-2-line"></i> 餐飲建議</h3>
                <div class="meals-grid">
                    <div class="meal-card meal-breakfast">
                        <div class="meal-icon"><i class="ri-sun-line"></i></div>
                        <div class="meal-content">
                            <span class="meal-label">早餐</span>
                            <p class="meal-text">${data.meals.breakfast}</p>
                        </div>
                    </div>
                    <div class="meal-card meal-lunch">
                        <div class="meal-icon"><i class="ri-restaurant-line"></i></div>
                        <div class="meal-content">
                            <span class="meal-label">午餐</span>
                            <p class="meal-text">${data.meals.lunch}</p>
                        </div>
                    </div>
                    <div class="meal-card meal-dinner">
                        <div class="meal-icon"><i class="ri-moon-line"></i></div>
                        <div class="meal-content">
                            <span class="meal-label">晚餐</span>
                            <p class="meal-text">${data.meals.dinner}</p>
                        </div>
                    </div>
                </div>
            </div>
        ` : '';

        // Accommodation HTML
        const accommodationHtml = data.accommodation ? `
            <div class="accommodation-section">
                <h3><i class="ri-hotel-bed-line"></i> 住宿</h3>
                <div class="accommodation-card">
                    <i class="ri-map-pin-2-line accom-icon"></i>
                    <p>${data.accommodation}</p>
                </div>
            </div>
        ` : '';

        // Parking Spots / MapCode HTML
        const parkingSpotsHtml = data.parkingSpots && data.parkingSpots.length > 0 ? `
            <div class="parking-section">
                <h3><i class="ri-parking-box-line"></i> 停車點 MapCode</h3>
                <div class="parking-spots-grid">
                    ${data.parkingSpots.map(spot => `
                        <div class="parking-spot-item">
                            <span class="parking-spot-name">${spot.name}</span>
                            <code class="parking-spot-code">${spot.mapcode}</code>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';

        // Date labels for each day
        const dayDates = { 1:'1/28', 2:'1/29', 3:'1/30', 4:'1/31', 5:'2/1', 6:'2/2', 7:'2/3', 8:'2/4' };
        const dateLabel = dayDates[dayNum] || '';

        // Panel full template
        const panelHtml = `
            <div class="day-panel active">
                <div class="panel-header">
                    <div class="day-number-badge">Day ${dayNum} <span class="badge-date">(${dateLabel})</span></div>
                    <div class="panel-meta">
                        <h2>${data.title}</h2>
                        <p class="route-line"><i class="${isSelfDrive ? 'ri-map-pin-line' : 'ri-subway-line'}"></i> 路線：${data.route}</p>
                    </div>
                </div>

                <div class="panel-grid">
                    <div class="panel-info">
                        <div class="info-card-row">
                            <div class="info-tag"><i class="${iconClass}"></i> ${transitLabel}${data.mileage}</div>
                            <div class="info-tag"><i class="ri-time-line"></i> ${durationLabel}${data.time}</div>
                            <div class="info-tag"><i class="${costIcon}"></i> ${costLabel}${data.toll}</div>
                        </div>

                        <h3>本日行程排程</h3>
                        <ul class="timeline-list">
                            ${timelineHtml}
                        </ul>
                    </div>

                    <div class="panel-visual">
                        <div class="card-visual-image placeholder-img" style="background-image: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%), url('${data.image}'); background-size: cover; background-position: center; min-height: 220px; display: flex; align-items: flex-end; padding: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.8); border: none;">
                            <span style="color: #ffffff; font-weight: 700; font-size: 1rem;"><i class="ri-camera-lens-line" style="opacity: 1; display: inline; margin-right: 6px;"></i>${data.imageAlt}</span>
                        </div>
                        <div class="tip-box">
                            <h4><i class="ri-information-line"></i> 本日出行提醒</h4>
                            <p>${data.tip}</p>
                        </div>
                        ${mealsHtml}
                        ${accommodationHtml}
                        ${parkingSpotsHtml}
                    </div>
                </div>
            </div>
        `;

        // Apply HTML and trigger fade in animation
        itineraryContent.innerHTML = panelHtml;
    }

    // --- 7. Interactive Checklist Progress ---
    const checkboxes = document.querySelectorAll('.todo-check');

    // Load check states from localStorage
    function loadChecklistState() {
        let checkedCount = 0;
        checkboxes.forEach(box => {
            const id = box.getAttribute('data-id');
            const state = localStorage.getItem(`chk-${id}`) === 'true';
            box.checked = state;
            if (state) checkedCount++;
        });
        updateProgressBar(checkedCount);
    }

    function saveChecklistState(box) {
        const id = box.getAttribute('data-id');
        localStorage.setItem(`chk-${id}`, box.checked);

        // Count checked
        let checkedCount = 0;
        checkboxes.forEach(b => {
            if (b.checked) checkedCount++;
        });
        updateProgressBar(checkedCount);
    }

    function updateProgressBar(checkedCount) {
        const total = checkboxes.length;
        if (total === 0) return;
        const percentage = Math.round((checkedCount / total) * 100);

        if (checklistProgress) {
            checklistProgress.style.width = `${percentage}%`;
        }
        if (checklistProgressText) {
            checklistProgressText.textContent = `${percentage}%`;
        }
    }

    // Event listeners for checklist checkboxes
    checkboxes.forEach(box => {
        box.addEventListener('change', () => {
            saveChecklistState(box);
        });
    });

    // Reset Checklist
    if (resetChecklistBtn) {
        resetChecklistBtn.addEventListener('click', () => {
            if (confirm('確定要重設所有準備清單項目嗎？')) {
                checkboxes.forEach(box => {
                    const id = box.getAttribute('data-id');
                    box.checked = false;
                    localStorage.removeItem(`chk-${id}`);
                });
                updateProgressBar(0);
            }
        });
    }

    // Init Checklist states
    loadChecklistState();

    // Map pin interactivity (sync back to tab switches)
    const mapPins = document.querySelectorAll('.map-pin');
    mapPins.forEach(pin => {
        pin.addEventListener('click', () => {
            const day = pin.getAttribute('data-day');
            const correspondingTab = document.querySelector(`.tab-btn[data-day="${day}"]`);
            if (correspondingTab) {
                correspondingTab.click();

                // Smooth scroll into itinerary section if user clicked from map
                document.getElementById('itinerary').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Auto-render Day 1 from JS data on page load to ensure content is always in sync
    renderItineraryDay(1);
    updateMapActivePin('1');

});
