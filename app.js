/**
 * 2027 Kyushu 9-Day Tour — itinerary rendering and page interactions
 */

// --- 1. Dynamic Itinerary Data ---
// Archived first-draft itinerary retained temporarily for content reference only.
// The rendered itinerary is defined by activeItineraryData below.
const legacyItineraryData = {
    1: {
        title: "抵達鹿兒島 ‧ 櫻島環島巡禮",
        route: "鹿兒島機場 (KOJ) 取車 ➔ 鹿兒島港渡輪 ➔ 櫻島環島 ➔ 鹿兒島市區",
        mileage: "約 120 km",
        time: "約 2.5 hrs (自駕)",
        toll: "渡輪費 約 1,100 円/車 + KEP 高速券",
        image: "images/day1.png",
        imageAlt: "櫻島火山與鹿兒島灣景",
        tip: "今天行程輕鬆愉快！取車後直奔鹿兒島港搭渡輪去櫻島。渡輪甲板「やぶ金」烏龍麵只有 15 分鐘可吃，動作要快！",
        meals: {
            breakfast: "飛機餐 / 桃園機場出發前自行解決",
            lunch: "鹿兒島市區 ‧ 拉麵或定食 🍜",
            dinner: "天文館通 ‧ <a href='https://www.google.com/maps/search/?api=1&query=黒かつ亭+天文館店' target='_blank'>黒かつ亭 / 黒べぇ 天文館店 📍</a> 🍖（薩摩黑豬炸排名店），飯後來一碗元祖<a href='https://www.google.com/maps/search/?api=1&query=天文館むじゃき+本店' target='_blank'>「白熊冰（むじゃき）」📍</a>"
        },
        accommodation: "鹿兒島市區 ‧ <a href='https://www.agoda.com/zh-tw/fav-lux-kagoshima-tenmonkan/hotel/kagoshima-jp.html?countryId=3&finalPriceView=2&isShowMobileAppPrice=false&cid=1844104&adults=4&checkIn=2027-01-28&currencyCode=TWD&los=1' target='_blank'>FAV LUX 鹿兒島天文館 🔗</a>",
        parkingSpots: [
            { name: "鹿兒島機場 (KOJ)", mapcode: "42 776 606*12" },
            { name: "桜島フェリー (鹿児島港)", mapcode: "42 037 144*21" },
            { name: "湯之平展望所", mapcode: "42 015 506*35" },
        ],
        timeline: [
            { time: "11:20", title: "抵達鹿兒島國際機場 (KOJ) ✈️", desc: "飛機降落至<a href='https://www.google.com/maps/search/?api=1&query=鹿児島空港' target='_blank'>鹿兒島國際機場 📍</a>！依序辦理入境手續、衛生申報與行李提領，完成後等待租車行的免費接駁巴士。" },
            { time: "12:00", title: "取車 ‧ 驗車 ‧ 加購 KEP 優惠券 🚗", desc: "搭接駁車至機場外租車營業所。攜帶護照、台灣駕照正本與日文譯本辦理手續，仔細確認車輛外觀（拍照存證），啟用 ETC 卡，同時詢問加購「KEP（九州高速公路周遊券）」。辦完後在附近便利商店買點小點心車上墊胃。" },
            { time: "13:00", title: "出發前往鹿兒島港 🚗", desc: "從機場出發前往鹿兒島港渡輪航廈，車程約 40 分鐘。日本靠左行駛，慢慢適應，不要緊張！" },
            { time: "13:40", title: "鹿兒島港渡輪 ‧ 衝上甲板吃烏龍麵 🍜", desc: "購買<a href='https://www.google.com/maps/search/?api=1&query=桜島フェリーターミナル' target='_blank'>鹿兒島港渡輪 📍</a>車輛渡輪票（含司機約 1,100 円），停好車立刻衝上甲板！找到「<a href='https://www.google.com/maps/search/?api=1&query=やぶ金+桜島フェリー' target='_blank'>やぶ金 📍</a>」點一碗「薩摩揚げうどん（薩摩炸魚餅烏龍麵）」，正面欣賞噴煙的壯觀櫻島——船程只有 15 分鐘，快吃！" },
            { time: "14:00", title: "登陸櫻島 ‧ 精華環島 🌋", desc: "渡輪靠岸，沿環島公路巡禮：❶ <a href='https://www.google.com/maps/search/?api=1&query=湯之平展望所' target='_blank'>湯之平展望所 📍</a>（一般遊客可達最高點，俯瞰鹿兒島灣，視線絕佳！）➔ ❷ <a href='https://www.google.com/maps/search/?api=1&query=溶岩なぎさ公園+足湯' target='_blank'>熔岩渚公園足湯 📍</a>（免費天然溫泉足湯，面海看火山 ♨️），在這裡欣賞夕陽！" },
            { time: "16:00", title: "搭渡輪返回鹿兒島市區 ‧ 入住飯店", desc: "驅車返回渡輪碼頭上船，約 15 分鐘後抵達鹿兒島港。前往飯店辦理 Check-in，放下行李梳洗換裝。" },
            { time: "18:30", title: "天文館通晚餐 🍖", desc: "步行至天文館通，前往<a href='https://www.google.com/maps/search/?api=1&query=黒かつ亭+天文館店' target='_blank'>「黒かつ亭」或「黒べぇ 天文館店」📍</a>——鹿兒島著名薩摩黑豬炸排老店，外皮酥脆、豬肉鮮甜多汁。飯後散步到<a href='https://www.google.com/maps/search/?api=1&query=天文館むじゃき+本店' target='_blank'>「むじゃき」📍</a>嚐一碗元祖「白熊冰（しろくま）」，完美句點！" }
        ]
    },
    2: {
        title: "仙巖園世界遺產 ➔ 霧島神宮與溫泉鄉",
        route: "鹿兒島市區 ➔ 仙巖園 ➔ 霧島神宮 ➔ 霧島溫泉",
        mileage: "約 90 km",
        time: "約 2 hrs (自駕)",
        toll: "約 800 円 (KEP 高速券適用)",
        image: "images/day2.png",
        imageAlt: "仙巌園日式庭園與櫻島借景",
        tip: "今天行程輕鬆！單向北上不走回頭路。上午參觀世界遺產仙巖園，下午前往霧島山區。傍晚泡露天溫泉洗去旅途疲憊，好好享受日式旅館的款待。",
        meals: {
            breakfast: "飯店附近<a href='https://www.google.com/maps/place/%E8%B6%85%E5%B8%82+%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC/@31.5876284,130.5548498,18z/data=!4m10!1m2!2m1!1z6LaF5biC!3m6!1s0x353e60abb5668a0f:0x3c3344307fdefcb3!8m2!3d31.5877406!4d130.5571706!15sCgbotoXluIJaCCIG6LaF5biCkgELc3VwZXJtYXJrZXSaASRDaGREU1VoTk1HOW5TMFZQTFcxNVptMVpjMkl5V25kM1JSQULgAQD6AQQIABAW!16s%2Fg%2F1tff0t27?entry=ttu' target='_blank'>超市タイヨー 📍</a> 隨買 ‧ 輕食上路",
            lunch: "仙巖園內「<a href='https://www.google.com/maps/search/?api=1&query=桜華亭+仙巌園' target='_blank'>櫻華亭 📍</a>」‧ 薩摩鄉土料理定食 🍱",
            dinner: "霧島溫泉旅館 ‧ 隨附晚餐（會席料理）"
        },
        accommodation: "霧島溫泉鄉 ‧ <a href='https://www.agoda.com/zh-tw/kirishima-onsen-ryokojin-sanso/hotel/kirishima-jp.html?countryId=3&finalPriceView=1&isShowMobileAppPrice=false&cid=1779080&numberOfBedrooms=&familyMode=false&adults=4&children=0&rooms=1&maxRooms=0&checkIn=2027-01-30&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=3&showReviewSubmissionEntry=false&currencyCode=TWD&isFreeOccSearch=false&los=1&searchrequestid=2f647880-493a-4fb9-8151-bd2bb724a617&ds=qgPLe6XWQl8X9rcw' target='_blank'>霧島溫泉 旅行人山莊 🔗</a>",
        parkingSpots: [
            { name: "仙巌園", mapcode: "42 099 746*44" },
            { name: "霧島神宮", mapcode: "376 089 596*04" },
            { name: "丸尾滝", mapcode: "42 804 030*47" },
        ],
        timeline: [
            { time: "09:00", title: "退房出發 ‧ 前往仙巖園", desc: "驅車前往「<a href='https://www.google.com/maps/search/?api=1&query=仙巌園' target='_blank'>仙巖園 📍</a>（磯庭園）」，從市區出發僅需 15 分鐘。" },
            { time: "09:30", title: "仙巖園參觀 ‧ 世界文化遺產 🏛️", desc: "<a href='https://www.google.com/maps/search/?api=1&query=仙巌園' target='_blank'>仙巖園 📍</a>——薩摩藩主島津家的別邸庭園，以櫻島為借景、錦江灣為池塘的壯闊設計堪稱日本庭園最高傑作。園內包含世界文化遺產「舊集成館」——日本近代工業化的起點。漫步竹林小徑，欣賞御殿建築與日式庭園之美。" },
            { time: "11:30", title: "仙巖園午餐 ‧ 櫻華亭", desc: "在園內「<a href='https://www.google.com/maps/search/?api=1&query=桜華亭+仙巌園' target='_blank'>櫻華亭 📍</a>」享用薩摩鄉土料理定食，以櫻島為背景的絕景餐廳，邊用餐邊欣賞錦江灣全景。" },
            { time: "12:30", title: "驅車北上前往霧島", desc: "沿九州自動車道（KEP 適用）北上，穿越鹿兒島平原開往霧島山區（約 1 小時車程）。沿途風景從都市漸轉為山巒疊翠。" },
            { time: "14:00", title: "霧島神宮參拜 ⛩️", desc: "<a href='https://www.google.com/maps/search/?api=1&query=霧島神宮' target='_blank'>霧島神宮 📍</a>——南九州規模最大的朱紅色神宮，祭祀天孫瓊瓊杵尊。也是坂本龍馬新婚旅行地。朱漆大社殿在蔥蘢杉木林間格外莊嚴，境內瀰漫著清淨神聖的氣息。" },
            { time: "15:30", title: "丸尾瀑布 (順路)", desc: "霧島溫泉區的<a href='https://www.google.com/maps/search/?api=1&query=丸尾滝' target='_blank'>丸尾瀑布 📍</a>是罕見的「溫泉瀑布」——溫泉水直接形成的瀑布，冬季時水蒸氣繚繞如仙境，就在入住溫泉旅館的路上，停車看幾分鐘即可。" },
            { time: "16:00", title: "入住霧島溫泉鄉 ♨️", desc: "抵達硫磺泉煙裊裊的霧島溫泉。換上浴衣悠閒散步，享用旅館的精緻會席料理（薩摩地雞、黑豬涮涮鍋、溫泉豆腐），飯後泡露天溫泉洗去一日疲憊，仰望星空入眠。" }
        ]
    },
    3: {
        title: "神話高千穗峽划船 ➔ 夜神樂體驗",
        route: "霧島溫泉 ➔ 高千穗峽划船 ➔ 天安河原 ➔ 高千穗鎮上",
        mileage: "約 150 km",
        time: "約 3 hrs (自駕)",
        toll: "約 1,800 円",
        image: "images/day3.png",
        imageAlt: "高千穂峡谷瀑布與翠綠河水",
        tip: "高千穗峽谷划船極受歡迎，務必提早一個月上網預約，旺季常常秒殺。今天山路彎道較多，請減速慢行。晚上一定要看高千穗夜神樂！",
        meals: {
            breakfast: "霧島溫泉旅館 ‧ 隨附早餐",
            lunch: "高千穗 ‧ <a href='https://www.google.com/maps/search/?api=1&query=天庵+高千穂+そば' target='_blank'>天庵 蕞麥麵 📍</a> 🍜",
            dinner: "高千穗 ‧ <a href='https://www.google.com/maps/search/?api=1&query=高千穂牛焼肉+和' target='_blank'>高千穗牛燒肉和 📍</a> 🥩"
        },
        accommodation: "高千穗鎮上 ‧ <a href='https://www.airbnb.com.tw/rooms/1089406832673156171?adults=7&check_in=2027-01-30&check_out=2027-01-31' target='_blank'>Airbnb 民宿 🔗</a>",
        parkingSpots: [
            { name: "高千穂峡", mapcode: "330 711 447*05" },
            { name: "天岩戸神社 / 天安河原", mapcode: "330 837 609*48" },
        ],
        timeline: [
            { time: "08:30", title: "北上驅車前往宮崎高千穗", desc: "離開霧島溫泉，經由九州自動車道與國道 218 號前往宮崎縣高千穗，沿途風景漸漸轉為深山峽谷地形。山路彎道多，慢慢開，約 2.5 小時車程。" },
            { time: "11:00", title: "高千穗峽谷划船 🚣", desc: "在<span class='tip-hover tip-wrap' data-tip='📋 乘船日2週前(14天前) 09:00(日本時間)開放預約 ｜ 每艘限3名成人 ｜ 每艘總重上限240kg'><a href='https://www.google.com/maps/search/?api=1&query=高千穂峡' target='_blank'>高千穗峽谷 📍</a></span>幾乎垂直的玄武岩絕壁間划槳，從小舟仰望 17 公尺高的「真名井之瀑」飛瀉而下，霧氣瀰漫如夢似幻。划船約 30 分鐘，記得提早網路預約！👉 <a href='https://zh-tw-62123.site-translation.com/boat/detail.php' target='_blank'>資訊 🔗</a> ｜ <a href='https://eipro.jp/takachiho1/eventCalendars/index?_gl=1*servvs*_ga*MjA0NTY0NjI1MS4xNzgwMjg0MTI2*_ga_15MWGPBF8P*czE3ODAyODQxMjYkbzEkZzEkdDE3ODAyODQyODEkajU1JGwwJGgw#' target='_blank'>預約 🔗</a>" },
            { time: "12:30", title: "高千穗當地午餐 🍜", desc: "前往<a href='https://www.google.com/maps/search/?api=1&query=天庵+高千穂+そば' target='_blank'>天庵 📍</a>——高千穗當地人氣蕞麥麵店，手打蕞麥麵搭配當季天婦羅，清爽爽口！" },
            { time: "14:00", title: "天岩戶神社與天安河原", desc: "參拜神話中天照大神藏身的「<a href='https://www.google.com/maps/search/?api=1&query=天岩戸神社' target='_blank'>天岩戶神社 📍</a>」洞穴神社，再步行約 10 分鐘至河床邊的<a href='https://www.google.com/maps/search/?api=1&query=天安河原' target='_blank'>天安河原 📍</a>，感受數千個石塔堆砌出的神秘莊嚴氣氛。" },
            { time: "16:00", title: "高千穗あまてらす鐵道 🚂 (選配)", desc: "若時間允許，體驗<span class='tip-hover' data-tip='需事前網路預約'><a href='https://www.google.com/maps/search/?api=1&query=高千穂あまてらす鉄道' target='_blank'>高千穗あまてらす鐵道 📍</a></span>——舊鐵道改造的觀光小火車，跨越高架橋俯瞰峽谷全景（約 30 分鐘來回）。" },
            { time: "17:00", title: "入住高千穗鎮上", desc: "前往鎮上的民宿或旅館 Check-in，稍作休息，準備享用晚餐後前往看夜神樂。" },
            { time: "20:00", title: "高千穗夜神樂 🎭", desc: "每晚在<span class='tip-hover' data-tip='需事前預約，¥1,000/人'><a href='https://www.google.com/maps/search/?api=1&query=高千穂神社' target='_blank'>高千穗神社 📍</a></span>舉行的「夜神樂」表演，由當地居民演出天照大神與諸神的神話舞蹈。面具、太鼓、神秘的舞步——震撼而感動的一小時，是高千穗最不可錯過的體驗！👉 <a href='https://zh-tw-62123.site-translation.com/kagura/information/' target='_blank'>預約資訊 🔗</a>" }
        ]
    },
    4: {
        title: "壯麗阿蘇大景 ➔ 熊本市",
        route: "高千穗 ➔ 阿蘇中岳火山口 ➔ 草千里 ➔ 熊本市區",
        mileage: "約 130 km",
        time: "約 3 hrs (自駕)",
        toll: "約 1,500 円 (KEP 高速券適用)",
        image: "images/day4.png",
        imageAlt: "阿蘇草千里翠綠大草原",
        tip: "今天專注享受阿蘇的壯闘火山景觀！阿蘇火山口屬活火山，出發前務必查詢「阿蘇山火口立入規制情報」確認是否開放。下午輕鬆開往熊本市區入住。",
        meals: {
            breakfast: "高千穗 ‧ <a href='https://www.google.com/maps/search/?api=1&query=あららぎ乃茶屋+高千穂' target='_blank'>あららぎ乃茶屋 📍</a> 烤雞 🍗",
            lunch: "阿蘇 ‧ <a href='https://www.google.com/maps/place/%E9%89%84%E6%9D%BF%E7%84%BC%E9%98%BF%E8%98%87%E3%81%BE%E3%83%BC%E3%81%BC%E3%83%BC/data=!4m2!3m1!1s0x0:0x9bff0aa16ed651b3?sa=X&ved=1t:2428&ictx=111' target='_blank'>鉄板焼阿蘇まーぼー 📍</a> / <a href='https://www.google.com/maps/search/?api=1&query=あか牛丼専門店+ごとう屋+本店' target='_blank'>ごとう屋 本店 📍</a> / <a href='https://www.google.com/maps/search/?api=1&query=阿蘇赤牛丼専門店+後藤屋' target='_blank'>後藤屋 📍</a> 🥩",
            dinner: "熊本市區 ‧ 馬肉刺身居酒屋 或 太平燕（春雨湯麵）🍜"
        },
        accommodation: "熊本市區 ‧ <a href='https://www.agoda.com/zh-tw/fav-hotel-kumamoto/hotel/kumamoto-jp.html?countryId=3&finalPriceView=2&isShowMobileAppPrice=false&cid=1844104&adults=4&checkIn=2027-01-31&currencyCode=TWD&los=2' target='_blank'>FAV HOTEL 熊本 🔗</a> / <a href='https://www.airbnb.com.tw/rooms/1664099297361077485?adults=7&check_in=2027-01-31&check_out=2027-02-02' target='_blank'>Airbnb 🔗</a>（住兩晚）",
        parkingSpots: [
            { name: "阿蘇中岳火口", mapcode: "256 460 490*83" },
            { name: "草千里ヶ浜", mapcode: "256 456 741*50" },
            { name: "大観峰", mapcode: "256 878 130*04" },
        ],
        timeline: [
            { time: "08:30", title: "前往阿蘇火山區域", desc: "從高千穗出發，經國道 325 號北上，約 1.5 小時可抵達阿蘇火山區域。沿途穿越破火山口地形，壯闊尺度讓人震撼。" },
            { time: "10:00", title: "阿蘇中岳火山口觀景 🌋", desc: "若<a href='https://www.google.com/maps/search/?api=1&query=阿蘇中岳火口' target='_blank'>阿蘇中岳火山口 📍</a>開放，沿步道直達火口旁，俯瞰翻滾的火山煙霧與翠綠火山湖。站在活火山口邊緣的震撼感無法言喻。請注意火山警報等級，若管制則改從草千里展望所遠眺。" },
            { time: "11:30", title: "阿蘇午餐 🥩", desc: "品嚐阿蘇名物赤牛料理！推薦三選一：❶ <a href='https://www.google.com/maps/place/%E9%89%84%E6%9D%BF%E7%84%BC%E9%98%BF%E8%98%87%E3%81%BE%E3%83%BC%E3%81%BC%E3%83%BC/data=!4m2!3m1!1s0x0:0x9bff0aa16ed651b3?sa=X&ved=1t:2428&ictx=111' target='_blank'>鉄板焼阿蘇まーぼー 📍</a>（鉄板燒肉） ❷ <a href='https://www.google.com/maps/search/?api=1&query=あか牛丼専門店+ごとう屋+本店' target='_blank'>ごとう屋 本店 📍</a>（赤牛丼） ❸ <a href='https://www.google.com/maps/search/?api=1&query=阿蘇赤牛丼専門店+後藤屋' target='_blank'>後藤屋 📍</a>（赤牛丼專門店）" },
            { time: "12:30", title: "草千里之濱 🐄", desc: "漫步在<a href='https://www.google.com/maps/search/?api=1&query=草千里ヶ浜' target='_blank'>草千里之濱 📍</a>——阿蘇山腰的廣大火山盆地草原，天氣好時可見悠閒吃草的赤牛。青草、藍天、火山——這裡就是九州的象徵風景。" },
            { time: "14:00", title: "大觀峰展望台 (選配)", desc: "若時間允許，繞至阿蘇北側的「<a href='https://www.google.com/maps/search/?api=1&query=大観峰' target='_blank'>大觀峰 📍</a>」展望台，360度俯瞰阿蘇五岳與涅槃像般的群山剪影，被譽為阿蘇最美的瞭望點。" },
            { time: "15:00", title: "驅車前往熊本市區 🚗", desc: "從阿蘇沿九州自動車道（KEP 適用）南下前往熊本市區（約 1 小時車程），沿途平坦好開，輕鬆抵達。" },
            { time: "16:00", title: "入住熊本市區飯店", desc: "抵達熊本市區飯店 Check-in，放下行李稍作休息。晚上可在市區散步探索。" },
            { time: "18:00", title: "熊本市區晚餐 🍜", desc: "品嚐熊本在地名物：❶ 馬肉刺身（熊本是日本馬肉消費量第一的縣）❷ 太平燕（以春雨取代麵條的湯麵）❸ 桂花拉麵（濃郁豚骨加炸蒜片）。在地感十足的一晚！" }
        ]
    },
    5: {
        title: "熊本城 ‧ 水前寺 ‧ 熊本一日遊",
        route: "熊本城 ➔ 城彩苑 ➔ 水前寺成趣園 ➔ 上下通商店街 ➔ 市區",
        mileage: "市區內移動",
        time: "自駕 / 市電",
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

// --- 2. Active 9-day master plan (the former rideshare plan is now canonical) ---
const archivedItineraryData = {
    1: {
        title: "兩組抵達福岡 ‧ 福岡住一晚",
        route: "TPE ✈️ FUK ➤ 福岡市區 ➤ 飯店 Check-in",
        mileage: "無（大眾運輸）", time: "依兩組航班抵達時間安排", toll: "待確認",
        image: "images/day1-fukuoka-arrival.png", imageAlt: "冬夜抵達福岡博多站",
        tip: "第一組搭星宇 JX840、第二組搭華航 CI0110，兩組皆於 1/27 抵達福岡。接機、會合、晚餐與入住時間待依實際班表補齊。",
        meals: { breakfast: "出發前／機上", lunch: "機上或機場", dinner: "福岡市區（待規劃）" },
        accommodation: "福岡市區（1/27 入住、1/28 退房；飯店待確認）", parkingSpots: [],
        timeline: [
            { time: "待確認", title: "第一組・星宇 JX840 抵達福岡 ✈️", desc: "2027/1/27 TPE → FUK。" },
            { time: "待確認", title: "第二組・華航 CI0110 抵達福岡 ✈️", desc: "2027/1/27 TPE → FUK。" },
            { time: "晚上", title: "福岡會合與入住", desc: "機場至飯店交通、晚餐與集合點待重新規劃。" }
        ]
    },
    2: {
        title: "福岡 ➤ 鹿兒島 ‧ 鹿兒島第一晚", route: "福岡 ➤ 鹿兒島", mileage: "待規劃", time: "待規劃", toll: "待比較新幹線／租車方案",
        image: "images/day2.png", imageAlt: "鹿兒島",
        tip: "移動方式、出發時間與景點全部重新規劃；本日確定住宿鹿兒島。",
        meals: { breakfast: "福岡", lunch: "待規劃", dinner: "鹿兒島" }, accommodation: "鹿兒島市區（第一晚；飯店待確認）", parkingSpots: [],
        timeline: [{ time: "待規劃", title: "福岡前往鹿兒島", desc: "不沿用舊版時間表。" }]
    },
    3: {
        title: "鹿兒島完整一日 ‧ 鹿兒島第二晚", route: "鹿兒島市區與周邊", mileage: "待規劃", time: "待規劃", toll: "待規劃",
        image: "images/day3.png", imageAlt: "鹿兒島與櫻島",
        tip: "可重新安排仙巖園、櫻島或其他鹿兒島景點，目前尚未鎖定時段。",
        meals: { breakfast: "鹿兒島", lunch: "待規劃", dinner: "鹿兒島" }, accommodation: "鹿兒島市區（第二晚；飯店待確認）", parkingSpots: [],
        timeline: [{ time: "全天", title: "鹿兒島行程待規劃", desc: "景點順序、交通方式與用餐尚待確認。" }]
    },
    4: {
        title: "鹿兒島 ➤ 霧島溫泉 ‧ 溫泉住宿", route: "鹿兒島 ➤ 霧島溫泉", mileage: "待規劃", time: "待規劃", toll: "待規劃",
        image: "images/day4.png", imageAlt: "霧島溫泉",
        tip: "本日確定入住霧島溫泉一晚；取車時間與沿途景點待重新安排。",
        meals: { breakfast: "鹿兒島", lunch: "待規劃", dinner: "霧島溫泉旅館（待確認）" }, accommodation: "霧島溫泉（一晚；旅館待確認）", parkingSpots: [],
        timeline: [{ time: "待規劃", title: "前往霧島溫泉", desc: "租車、霧島神宮與入住時間尚待確認。" }]
    },
    5: {
        title: "霧島 ➤ 熊本 ‧ 熊本第一晚", route: "霧島溫泉 ➤ 熊本", mileage: "待規劃", time: "待規劃", toll: "待規劃",
        image: "images/day5.png", imageAlt: "熊本",
        tip: "前往熊本的路線與中途停靠點重新規劃；本日為熊本第一晚。",
        meals: { breakfast: "霧島溫泉", lunch: "待規劃", dinner: "熊本" }, accommodation: "熊本市區（第一晚；飯店待確認）", parkingSpots: [],
        timeline: [{ time: "待規劃", title: "霧島前往熊本", desc: "是否納入阿蘇及實際駕駛路線待確認。" }]
    },
    6: {
        title: "熊本完整一日 ‧ 熊本第二晚", route: "熊本市區與周邊", mileage: "待規劃", time: "待規劃", toll: "待規劃",
        image: "images/day6.png", imageAlt: "熊本城",
        tip: "熊本城、市區或近郊行程將重新排序。",
        meals: { breakfast: "熊本", lunch: "待規劃", dinner: "熊本" }, accommodation: "熊本市區（第二晚；飯店待確認）", parkingSpots: [],
        timeline: [{ time: "全天", title: "熊本行程待規劃", desc: "不沿用舊版時間表。" }]
    },
    7: {
        title: "熊本 ➤ 福岡 ‧ 福岡第一晚", route: "熊本 ➤ 福岡", mileage: "待規劃", time: "待規劃", toll: "待規劃",
        image: "images/day7.png", imageAlt: "福岡",
        tip: "北上福岡、可能的沿途停靠與還車時間待重新安排。",
        meals: { breakfast: "熊本", lunch: "待規劃", dinner: "福岡" }, accommodation: "福岡市區（第一晚；飯店待確認）", parkingSpots: [],
        timeline: [{ time: "待規劃", title: "熊本前往福岡", desc: "交通、停靠點及還車安排尚待確認。" }]
    },
    8: {
        title: "福岡完整一日 ‧ 福岡第二晚", route: "福岡市區與周邊", mileage: "無／待規劃", time: "待規劃", toll: "待規劃",
        image: "images/day8.png", imageAlt: "福岡市區",
        tip: "第一組返台前最後完整一天；第二組之後仍有兩天延伸行程。",
        meals: { breakfast: "福岡", lunch: "待規劃", dinner: "福岡" }, accommodation: "福岡市區（第二晚；飯店待確認）", parkingSpots: [],
        timeline: [{ time: "全天", title: "福岡行程待規劃", desc: "市區、近郊、購物與用餐尚待確認。" }]
    },
    9: {
        title: "第一組返台 ‧ 第二組延伸行程開始", route: "福岡市區 ➤ FUK ✈️ TPE／第二組續住福岡", mileage: "無", time: "依航班", toll: "機場交通待確認",
        image: "images/day8.png", imageAlt: "福岡機場",
        tip: "第一組搭星宇 JX841 於 2/4 回台；第二組不回台，續留福岡並於 2/6 搭華航 CI0117 回台。",
        meals: { breakfast: "福岡", lunch: "依航班與延伸行程", dinner: "第一組返台／第二組福岡" }, accommodation: "第一組：無；第二組：福岡續住 2/4、2/5 兩晚（待確認）", parkingSpots: [],
        timeline: [
            { time: "待確認", title: "第一組・星宇 JX841 返回桃園 ✈️", desc: "2027/2/4 FUK → TPE。" },
            { time: "待規劃", title: "第二組・福岡延伸 Day 1", desc: "2/4 行程與住宿待安排；2/5 為延伸 Day 2。" },
            { time: "2/6 待確認", title: "第二組・華航 CI0117 返回桃園 ✈️", desc: "2027/2/6 FUK → TPE。" }
        ]
    }
};

// Reworked timing: preserve the original highlights while removing backtracking and overloaded days.
Object.assign(archivedItineraryData, {
    2: {
        title: "九州新幹線南下鹿兒島 ‧ 天文館散策",
        route: "福岡博多 ➤ 九州新幹線 ➤ 鹿兒島中央 ➤ 城山展望台 ➤ 天文館",
        mileage: "無（新幹線／市區交通）", time: "新幹線約 1 小時 16～30 分", toll: "新幹線票價待確認＋CUTE 兩日券成人 ¥2,100／兒童 ¥1,050（2026/8/1 起）",
        image: "images/day2-kagoshima-shinkansen.png", imageAlt: "九州新幹線抵達鹿兒島中央站",
        tip: "抵達鹿兒島後購買 <a href='https://www.kagoshima-yokanavi.jp/zh-TW/feature/one-day-pass2' target='_blank' rel='noopener'>CUTE 兩日乘車券介紹 🔗</a>，供 Day 2、3 使用。2026/8/1 起票價為成人 ¥2,100、兒童 ¥1,050，可無限搭乘鹿兒島 City View、市營巴士、市電、櫻島觀光巴士與櫻島渡輪。數位票券需使用 WAKUWAKU App、完成會員註冊並以信用卡付款，使用時手機必須連網；操作方式請看 <a href='https://www.kagoshima-yokanavi.jp/zh-TW/feature/mobileCUTE-usage2' target='_blank' rel='noopener'>CUTE 數位票券購買與使用指南 🔗</a>。若大型行李不帶往鹿兒島，可使用 JR 博多站 2 樓的 <a href='https://handsfree-japan.com/tc/hakata/' target='_blank' rel='noopener'>Crosta 博多寄物服務 🔗</a>。",
        meals: { breakfast: "福岡飯店／博多站", lunch: "鹿兒島中央站或天文館", dinner: "天文館・薩摩黑豬＋白熊冰" },
        accommodation: "鹿兒島天文館 ‧ <a href='https://www.agoda.com/zh-tw/fav-lux-kagoshima-tenmonkan/hotel/kagoshima-jp.html' target='_blank'>FAV LUX KAGOSHIMA TENMONKAN 🔗</a>（第一晚，連住兩晚）", parkingSpots: [],
        timeline: [
            { time: "08:00", title: "福岡退房 ‧ 前往博多站", desc: "預留飯店退房、步行與大型行李移動時間。先詢問飯店能否跨夜保管；不能的話改用 Crosta 博多。" },
            { time: "09:00", title: "Crosta 博多寄放大型行李（需要時）", desc: "位於 JR 博多站 2 樓新幹線光之廣場剪票口外，09:00 開門。寄好行李後再購買早餐並前往新幹線月台。" },
            { time: "09:30", title: "九州新幹線前往鹿兒島中央 🚅", desc: "搭乘みずほ或さくら；實際班次以 2027 年時刻表為準。" },
            { time: "11:00", title: "購買／啟用 CUTE 兩日券 🎫", desc: "2027 適用票價為成人 ¥2,100、兒童 ¥1,050。可在鹿兒島中央車站旅客服務中心或東口觀光服務處買紙本票；也可事先透過 WAKUWAKU App 購買數位票。兩日券從啟用當日至次日有效，不是 48 小時制。<a href='https://www.kagoshima-yokanavi.jp/zh-TW/feature/mobileCUTE-usage2' target='_blank' rel='noopener'>查看數位票券使用指南 🔗</a>" },
            { time: "11:20", title: "前往 FAV LUX 鹿兒島天文館 ‧ 寄放行李", desc: "使用 CUTE 搭市電前往天文館，先寄放行李，再開始市區行程。若行李較多也可改搭計程車，但不包含在 CUTE 內。" },
            { time: "12:00", title: "午餐 ‧ 鹿兒島中央或天文館", desc: "安排薩摩料理、鹿兒島拉麵或黑豬料理，保留充足用餐時間。" },
            { time: "14:00", title: "城山展望台與市區散步", desc: "天氣良好時從城山眺望櫻島；若旅途疲累，可縮短為天文館商圈散步。" },
            { time: "17:00", title: "飯店休息", desc: "移動日保留一段休息時間。" },
            { time: "18:30", title: "天文館晚餐", desc: "薩摩黑豬料理，飯後吃むじゃき白熊冰。" }
        ]
    },
    3: {
        title: "仙巖園 ‧ 櫻島一日遊 ‧ 鹿兒島第二晚",
        route: "鹿兒島市區 ➤ 仙巖園 ➤ 鹿兒島港 ➤ 櫻島 ➤ 天文館",
        mileage: "無（巴士／渡輪）", time: "市區至仙巖園約 20～30 分；渡輪約 15 分", toll: "使用 Day 2 購買的 CUTE 兩日乘車券",
        image: "images/day2.png", imageAlt: "仙巖園與櫻島",
        tip: "今天不租車，使用 CUTE 兩日券搭市電、市營巴士、櫻島渡輪與櫻島觀光巴士。把櫻島安排在午後，行程集中在同一區域；湯之平展望所需配合島內觀光巴士班次。注意仙巖園門票本身不包含在乘車券內，僅可使用附帶優惠。",
        meals: { breakfast: "鹿兒島飯店", lunch: "仙巖園內薩摩料理", dinner: "鹿兒島市區" },
        accommodation: "鹿兒島天文館 ‧ <a href='https://www.agoda.com/zh-tw/fav-lux-kagoshima-tenmonkan/hotel/kagoshima-jp.html' target='_blank'>FAV LUX KAGOSHIMA TENMONKAN 🔗</a>（第二晚）", parkingSpots: [],
        timeline: [
            { time: "08:15", title: "從飯店出發", desc: "搭巴士前往仙巖園，預留候車與步行時間。" },
            { time: "09:00", title: "仙巖園 ‧ 舊集成館", desc: "安排約 2 小時，欣賞以櫻島為借景的庭園及世界文化遺產。" },
            { time: "11:15", title: "仙巖園午餐", desc: "園內用餐可減少轉乘與折返。" },
            { time: "12:30", title: "前往鹿兒島港", desc: "搭巴士返回港區，預留錯過一班車的緩衝。" },
            { time: "13:30", title: "搭櫻島渡輪 ⛴️", desc: "船程約 15 分鐘；實際班次以鹿兒島市官方時刻表為準。" },
            { time: "14:00", title: "櫻島散策", desc: "熔岩渚公園足湯＋島內觀光巴士；若要上湯之平展望所，務必先核對回程班次。" },
            { time: "16:30", title: "渡輪返回鹿兒島市區", desc: "不把回程壓到晚餐前最後一刻。" },
            { time: "18:30", title: "鹿兒島第二晚晚餐", desc: "自由選擇天文館或鹿兒島中央站周邊餐廳。" }
        ]
    },
    4: {
        title: "鹿兒島取車 ➤ 霧島神宮 ➤ 霧島溫泉",
        route: "AVIS 鹿兒島中央站前店 ➤ 霧島神宮 ➤ 丸尾瀑布 ➤ 霧島溫泉",
        mileage: "約 80～100 km", time: "純駕駛約 2 小時，含取車抓 3 小時", toll: "高速費、ETC 與甲租乙還費待報價",
        image: "images/day4-kirishima.png", imageAlt: "冬季霧島神宮與溫泉山林",
        tip: "已預約 Toyota Alphard 七人座，1/30 10:00 在 AVIS 鹿兒島中央站前店取車（鹿兒島市上之園町 10-15）。實際年份、車色與配備依現場交車為準。第一個自駕日只走霧島，不再塞其他遠距離景點。<a href='https://drive.google.com/file/d/15TGl0ievfav5M9ytYzMsatv2mj8eck4_/view?usp=drive_link' target='_blank' rel='noopener'>開啟租車預約文件 🔗</a>",
        meals: { breakfast: "鹿兒島飯店", lunch: "霧島神宮周邊", dinner: "溫泉旅館會席料理" },
        accommodation: "霧島溫泉（一晚；建議含早晚餐）",
        parkingSpots: [{ name: "AVIS 鹿兒島中央站前店｜上之園町 10-15", mapcode: "42 066 022*55" }, { name: "霧島神宮", mapcode: "376 089 596*04" }, { name: "丸尾瀑布", mapcode: "42 804 030*47" }],
        timeline: [
            { time: "08:30", title: "鹿兒島飯店退房", desc: "帶齊護照、台灣駕照、日文譯本與信用卡。" },
            { time: "09:30", title: "抵達 AVIS 鹿兒島中央站前店", desc: "地址：鹿兒島縣鹿兒島市上之園町 10-15。提早抵達，備妥護照、駕照及日文譯本。" },
            { time: "10:00", title: "正式取車 🚗", desc: "辦理合約、驗車、行李裝載與 ETC 卡確認，預留約 45～60 分鐘。" },
            { time: "11:00", title: "出發前往霧島", desc: "首日靠左駕駛不趕路，中途可安排一次休息。" },
            { time: "12:30", title: "霧島地區午餐", desc: "先用餐再參拜，避免下午抵達溫泉旅館太晚。" },
            { time: "14:00", title: "霧島神宮", desc: "安排約 1 小時；冬季山區需注意低溫或路面結冰。" },
            { time: "15:00", title: "丸尾瀑布／溫泉市場", desc: "視天候二選一，不強求全部完成。" },
            { time: "16:00", title: "溫泉旅館 Check-in ♨️", desc: "保留泡湯、休息時間，不要晚於旅館晚餐報到期限。" },
            { time: "18:00", title: "旅館晚餐", desc: "實際用餐時間依住宿方案確認。" }
        ]
    },
    5: {
        title: "霧島 ➤ 阿蘇火山 ➤ 熊本第一晚", route: "霧島溫泉 ➤ 阿蘇中岳／草千里 ➤ 熊本市區",
        mileage: "約 230～270 km", time: "純駕駛約 4～5 小時", toll: "高速費與 ETC 待試算",
        image: "images/day4.png", imageAlt: "阿蘇中岳與草千里",
        tip: "這是全程最長駕駛日，只保留阿蘇中岳與草千里；大觀峰移除，否則冬季日照短、抵達熊本會太晚。火山管制或積雪時直接走備案前往熊本。",
        meals: { breakfast: "霧島溫泉旅館", lunch: "阿蘇地區赤牛料理", dinner: "熊本市區" }, accommodation: "熊本新町 ‧ <a href='https://www.google.com/maps/search/?api=1&query=Oneness+House+Kumamoto+熊本新町' target='_blank'>Oneness House Kumamoto 熊本新町 🔗</a>（第一晚，連住兩晚）",
        parkingSpots: [{ name: "阿蘇中岳火口", mapcode: "256 460 490*83" }, { name: "草千里", mapcode: "256 456 741*50" }],
        timeline: [
            { time: "08:00", title: "霧島溫泉退房出發", desc: "務必準時，並在前一晚確認阿蘇火口管制、積雪及道路狀況。" },
            { time: "10:00", title: "途中休息", desc: "長途駕駛至少安排一次 15～20 分鐘休息。" },
            { time: "11:15", title: "抵達阿蘇山區", desc: "若火口開放先看中岳；若管制則直接前往草千里及阿蘇火山博物館周邊。" },
            { time: "12:30", title: "阿蘇午餐", desc: "預留排隊時間，熱門赤牛店可準備第二選擇。" },
            { time: "14:00", title: "草千里散步", desc: "冬季視風勢與能見度縮短停留。" },
            { time: "15:00", title: "出發前往熊本市區", desc: "不繞去大觀峰，目標在天黑前完成主要山路。" },
            { time: "17:00", title: "Oneness House Kumamoto Check-in", desc: "抵達熊本新町住宿，處理行李與停車；晚間改以市電或步行活動。" },
            { time: "18:30", title: "熊本晚餐", desc: "馬肉刺身、太平燕或熊本拉麵。" }
        ]
    },
    6: {
        title: "熊本城 ‧ 水前寺成趣園 ‧ 熊本第二晚", route: "熊本城 ➤ 城彩苑 ➤ 水前寺成趣園 ➤ 上下通",
        mileage: "市區不開車", time: "市電＋步行", toll: "市區交通與門票",
        image: "images/day5.png", imageAlt: "熊本城",
        tip: "車留在飯店，避免市中心找停車位。熊本城 9:00 開放，先進城再用餐，午後搭市電去水前寺。",
        meals: { breakfast: "Oneness House／新町周邊", lunch: "城彩苑或市區", dinner: "上下通居酒屋／燒肉" }, accommodation: "熊本新町 ‧ <a href='https://www.google.com/maps/search/?api=1&query=Oneness+House+Kumamoto+熊本新町' target='_blank'>Oneness House Kumamoto 熊本新町 🔗</a>（第二晚）", parkingSpots: [],
        timeline: [
            { time: "08:30", title: "搭市電／步行前往熊本城", desc: "預留進場與購票時間。" },
            { time: "09:00", title: "熊本城", desc: "安排約 2～2.5 小時；目前官方一般開放至 17:00、最後入園 16:00。" },
            { time: "11:30", title: "城彩苑 ‧ 午餐", desc: "順著熊本城出口移動，不必來回折返。" },
            { time: "13:30", title: "水前寺成趣園", desc: "搭市電前往，安排約 1.5 小時。" },
            { time: "15:30", title: "上下通商店街", desc: "購物、咖啡與自由活動。" },
            { time: "18:30", title: "熊本第二晚晚餐", desc: "隔天需要退房與北上，避免安排太晚。" }
        ]
    },
    7: {
        title: "熊本 ➤ 柳川 ➤ 太宰府 ➤ 福岡還車", route: "熊本 ➤ 柳川遊船 ➤ 太宰府天滿宮 ➤ 福岡市區",
        mileage: "約 150～180 km", time: "純駕駛約 3 小時", toll: "高速、停車與遊船費待確認",
        image: "images/day7.png", imageAlt: "柳川遊船與太宰府",
        tip: "為了順暢，主方案取消吉次園採草莓。若一定要採草莓，就應刪除太宰府或柳川其中一站，不能三個都排。",
        meals: { breakfast: "Oneness House／新町周邊", lunch: "柳川蒸籠鰻魚飯", dinner: "福岡" }, accommodation: "福岡市區（第一晚；連住兩晚）",
        parkingSpots: [{ name: "柳川乘船場", mapcode: "69 875 573*40" }, { name: "太宰府天滿宮", mapcode: "55 364 073*51" }],
        timeline: [
            { time: "08:30", title: "Oneness House Kumamoto 退房出發", desc: "從熊本新町直接北上柳川，不先繞採草莓。" },
            { time: "10:00", title: "抵達柳川乘船場", desc: "停車、購票並確認下船後接駁方式。" },
            { time: "10:30", title: "柳川搖櫓遊船", desc: "冬季可選暖桌船；依船公司當年班次與航程安排。" },
            { time: "12:00", title: "柳川蒸籠鰻魚飯", desc: "熱門店建議預約或準備候補店家。" },
            { time: "13:30", title: "開車前往太宰府", desc: "預估約 50～60 分鐘，另加停車緩衝。" },
            { time: "14:45", title: "太宰府天滿宮與參道", desc: "安排約 1.5～2 小時，品嚐梅枝餅。" },
            { time: "16:45", title: "加滿油 ‧ 前往福岡還車", desc: "保留市區塞車、加油、驗車及 ETC 結算時間。" },
            { time: "18:30", title: "福岡飯店 Check-in", desc: "還車後改搭大眾運輸，連住兩晚。" }
        ]
    },
    8: {
        title: "福岡市區完整一日 ‧ 購物美食", route: "櫛田神社 ➤ 東長寺 ➤ 天神 ➤ 博多運河城／博多站",
        mileage: "無（步行／地鐵）", time: "市區移動", toll: "地鐵或巴士車資",
        image: "images/day8.png", imageAlt: "福岡市區",
        tip: "第一組返台前最後完整一天，以市區活動為主，不再排門司港。門司港留給第二組 2/5 延伸日，避免第一組回程前過度奔波。",
        meals: { breakfast: "福岡飯店", lunch: "博多拉麵／市區餐廳", dinner: "中洲屋台或預約餐廳" }, accommodation: "福岡市區（第二晚）", parkingSpots: [],
        timeline: [
            { time: "09:00", title: "博多老城散步", desc: "櫛田神社、東長寺與周邊街區。" },
            { time: "11:30", title: "午餐", desc: "避開正午尖峰，可選博多拉麵或在地定食。" },
            { time: "13:00", title: "天神地下街／博多運河城", desc: "依團員購物需求選擇重點，不必兩區來回多次。" },
            { time: "16:30", title: "回飯店整理行李", desc: "第一組隔日返台，先完成行李重量與伴手禮整理。" },
            { time: "18:30", title: "共同旅程最後一晚晚餐", desc: "建議預約可容納全團的餐廳；屋台可作為餐後散步或少人數續攤。" }
        ]
    },
    9: {
        title: "第一組 JX841 返台 ‧ 第二組福岡延伸", route: "福岡市區 ➤ FUK ✈️ TPE／第二組續住福岡",
        mileage: "無", time: "依 JX841 報到時間倒推", toll: "機場交通",
        image: "images/day9-fukuoka-airport.png", imageAlt: "福岡機場返台與延伸旅程",
        tip: "第一組至少在起飛前 2.5～3 小時由飯店出發；國際線與地下鐵站不在同一航廈，需計入接駁或直達巴士時間。第二組 2/4 留市區、2/5 建議安排門司港，2/6 搭 CI0117 返台。",
        meals: { breakfast: "福岡", lunch: "依航班／第二組市區", dinner: "第一組返台；第二組福岡" },
        accommodation: "第一組：無；第二組：福岡續住 2/4、2/5 兩晚", parkingSpots: [],
        timeline: [
            { time: "依航班倒推", title: "第一組前往福岡機場", desc: "搭直達國際線巴士，或地下鐵到國內線站後轉接駁；確認 JX841 最終時刻後再鎖定。" },
            { time: "待確認", title: "第一組・星宇 JX841 返回桃園", desc: "2027/2/4 FUK → TPE。" },
            { time: "下午", title: "第二組福岡自由行", desc: "不安排遠程移動，換飯店或續住、購物與休息。" },
            { time: "2/5", title: "第二組延伸：門司港／關門海峽", desc: "完整留一天處理 JR 往返、燒咖哩及關門海峽交通，比塞進共同主行程順暢。" },
            { time: "2/6", title: "第二組・華航 CI0117 返回桃園", desc: "依最終班表預留國際線報到與機場移動時間。" }
        ]
    }
});

// The confirmed 10:00 return appointment changes Day 7: return the car first,
// then use public transport. Yanagawa is removed from the shared itinerary.
archivedItineraryData[7] = {
    title: "熊本 ➤ 福岡機場店還車 ➤ 福岡市區",
    route: "熊本新町 ➤ AVIS 福岡機場出發航站樓店 ➤ 福岡飯店 ➤ 博多市區",
    mileage: "約 115～130 km", time: "純駕駛約 1 小時 40 分～2 小時", toll: "高速費、ETC 與加油費依現場結算",
    image: "images/day8.png", imageAlt: "福岡博多與中洲市區",
    tip: "租車文件確認 2/2 10:00 必須在 AVIS 福岡機場出發航站樓店還車，因此不能再安排上午柳川遊船與下午太宰府。建議 07:00 前離開熊本，預留高速路況、加油、驗車與 ETC 結算時間。<a href='https://drive.google.com/file/d/15TGl0ievfav5M9ytYzMsatv2mj8eck4_/view?usp=drive_link' target='_blank' rel='noopener'>開啟租車預約文件 🔗</a>",
    meals: { breakfast: "提早準備外帶早餐", lunch: "博多站／福岡市區", dinner: "福岡" },
    accommodation: "福岡市區（第一晚；連住兩晚）",
    parkingSpots: [{ name: "AVIS 福岡機場出發航站樓店｜榎田 2丁目7-3", mapcode: "待確認" }],
    timeline: [
        { time: "06:30", title: "Oneness House Kumamoto 退房", desc: "前一晚完成打包，早餐採外帶，確認油量與高速路況。" },
        { time: "07:00", title: "從熊本新町出發 🚗", desc: "直接走高速公路前往福岡；不要再繞柳川或太宰府。" },
        { time: "08:30", title: "途中／福岡近郊加滿油", desc: "依租車公司規定加滿油並保留收據；避免到還車時間前才找加油站。" },
        { time: "09:30", title: "抵達 AVIS 福岡機場出發航站樓店", desc: "地址：福岡縣福岡市博多區榎田 2丁目7-3。卸行李、驗車並結算 ETC。" },
        { time: "10:00", title: "完成還車 🏁", desc: "預約還車時間為 10:00；確認接送至機場或前往市區的交通方式。" },
        { time: "11:00", title: "前往福岡飯店寄放行李", desc: "還車後全程改用大眾交通，先處理行李再開始活動。" },
        { time: "12:00", title: "博多午餐", desc: "安排博多站周邊，避免還車後立刻再長距離移動。" },
        { time: "14:00", title: "博多／天神自由活動", desc: "以市區散步、購物及休息為主。" },
        { time: "18:30", title: "福岡晚餐", desc: "入住後在博多或中洲用餐。" }
    ]
};

archivedItineraryData[8] = {
    title: "太宰府半日遊 ‧ 福岡購物美食",
    route: "福岡 ➤ 太宰府天滿宮 ➤ 天神／博多 ➤ 福岡飯店",
    mileage: "無（電車／地鐵）", time: "福岡市區至太宰府單程約 40～60 分", toll: "西鐵與市區交通車資",
    image: "images/day8-dazaifu.png", imageAlt: "冬季太宰府天滿宮",
    tip: "因 Day 7 必須上午 10:00 還車，太宰府改到今天搭西鐵前往；柳川不再硬塞進共同九日行程。門司港仍留給第二組 2/5 延伸日。",
    meals: { breakfast: "福岡飯店", lunch: "太宰府參道／天神", dinner: "中洲屋台或預約餐廳" },
    accommodation: "福岡市區（第二晚）", parkingSpots: [],
    timeline: [
        { time: "08:30", title: "從福岡出發前往太宰府", desc: "搭地鐵／西鐵轉乘，避開中午人潮。" },
        { time: "09:45", title: "太宰府天滿宮與參道", desc: "安排約 2～2.5 小時，包含梅枝餅、參拜與商店散步。" },
        { time: "12:15", title: "午餐", desc: "可在太宰府或返回天神後用餐。" },
        { time: "14:00", title: "天神／博多購物", desc: "依團員需求選定一個主要購物區，減少往返。" },
        { time: "16:30", title: "回飯店整理行李", desc: "第一組隔日返台，完成行李重量與伴手禮整理。" },
        { time: "18:30", title: "共同旅程最後一晚晚餐", desc: "建議預約能容納全團的餐廳。" }
    ]
};

// --- 3. Current itinerary based on the shared Google Doc ---
const activeItineraryData = {
    1: {
        mode: "public", title: "抵達福岡・博多晚餐", route: "福岡機場 ➤ 博多／天神 ➤ 飯店",
        mileage: "免費接駁巴士＋地下鐵", time: "地下鐵福岡空港站至博多約 5～10 分鐘", toll: "免費接駁巴士＋地下鐵單程票價",
        image: "images/day1-fukuoka-arrival.png", imageAlt: "冬夜抵達福岡博多站",
        tip: "抵達日不排遠程景點；完成入境、領行李與入住後，在博多站周邊簡單用餐。兩組依各自航班時間會合。",
        meals: { breakfast: "出發前／機上", lunch: "機上或機場", dinner: "博多站周邊拉麵或宵夜" },
        accommodation: "福岡（兩組分住）<br><strong>JR九州飯店 Blossom博多中央（Booking.com）</strong>・<a href='https://maps.app.goo.gl/yg8WoT5nu21Ryogm8' target='_blank' rel='noopener'>Google Maps 導航 📍</a><br><strong>福岡皇家花園飯店（Agoda）</strong>・<a href='https://maps.app.goo.gl/7ZktNC5JUVCmjCpJ6' target='_blank' rel='noopener'>Google Maps 導航 📍</a>", parkingSpots: [],
        timeline: [
            { time: "抵達後", title: "福岡機場入境", desc: "完成入境與領取行李後，搭免費接駁巴士轉乘地下鐵前往博多。" },
            {
                time: "入境後", title: "免費接駁巴士 ➤ 地下鐵 ➤ 博多", type: "transport",
                desc: "從國際線航廈依指標搭免費接駁巴士，在「國內線航廈／地下鐵福岡空港站」下車，再搭地下鐵空港線前往博多站。",
                payments: [
                    "實體感應卡：進出站使用同一張卡",
                    "Apple Pay：進出站使用同一裝置",
                    "Google Wallet：進出站使用同一裝置",
                    "現金：在售票機購買單程票"
                ],
                note: "信用卡、手機與發卡銀行仍可能有限制；若感應失敗，直接改用現金購票。"
            },
            { time: "晚上", title: "飯店 Check-in", desc: "先安頓行李，不另外安排遠距離移動。" },
            { time: "晚餐", title: "博多站周邊用餐", desc: "依抵達時間安排拉麵、居酒屋或便利商店補給。" }
        ]
    },
    2: {
        mode: "public", title: "福岡 ➤ 熊本・熊本城", route: "博多 ➤ 熊本 ➤ 熊本城 ➤ 城彩苑",
        mileage: "九州新幹線＋市電／步行", time: "博多至熊本約 35～40 分鐘", toll: "新幹線、市電與景點門票",
        image: "images/day5.png", imageAlt: "熊本城與城彩苑",
        tip: "抵達熊本後先寄放行李，再集中走熊本城與城彩苑，避免跨區折返。",
        meals: { breakfast: "福岡飯店／博多站", lunch: "城彩苑或熊本城周邊", dinner: "勝烈亭黑豬排或馬肉料理" },
        accommodation: "熊本市中央區（第一晚，連住兩晚）<br><strong>Candeo Hotels Kumamoto Shinshigai（Agoda）</strong>・<a href='https://www.google.com/maps/search/?api=1&query=Candeo+Hotels+Kumamoto+Shinshigai' target='_blank' rel='noopener'>Google Maps 導航 📍</a>", parkingSpots: [],
        timeline: [
            {
                time: "上午", title: "九州新幹線前往熊本", type: "transport",
                desc: "從博多站搭乘九州新幹線前往熊本站，車程約 35～40 分鐘；抵達後先到飯店寄放行李。",
                detailTitle: "新幹線訂票與購票方式",
                payments: [
                    "開賣時間：<strong>2026/12/28（一）10:00 日本時間＝台灣 09:00</strong>（乘車日 1 個月前同一天）起，可在 <a href='https://train.yoyaku.jrkyushu.co.jp/inbound/pc/route/Top/back' target='_blank' rel='noopener'>JR-KYUSHU Train Reservation 訂票網站 🔗</a>或車站窗口訂票；SmartEX 最早可提前 1 年預約",
                    "票價（成人單程，指定席）：<strong>¥5,840＝乘車券 ¥2,420＋特急券 ¥3,420</strong>，7 人共 ¥40,880（JR 九州訂票網站 2026/10 查詢）；訂票時請選「Express ticket + Regular fare ticket（特急券＋乘車券）」，只買特急券無法搭車。自由席較便宜；網路早鳥「九州ネット早特7」需在 7 天前上網訂且名額有限，購買前以官網價格為準",
                    "建議全團一起訂 1/28 上午的みずほ或さくら指定席（約 35 分鐘），座位連在一起、行李較好安置；JR 九州網路預約<strong>一次最多可訂 7 名</strong>，7 人可由 1 人一次訂完",
                    "取票：<strong>只有付款信用卡的持卡人本人可以取票</strong>，需帶該張信用卡、預約號碼（6 開頭 5 碼）與訂票時填的電話號碼末 4 碼，到博多站「指定席券売機」或綠色窗口取票；沒帶那張卡一律無法取票",
                    "行李規定：三邊合計 <strong>160 cm 以下</strong>可放行李架（例 30×50×80 cm）；<strong>160～250 cm 的特大行李必須在訂票時一起預訂「附帶特大行李放置處的座位」</strong>（車廂最後一排，不另加價，JR-KYUSHU Train Reservation 可訂），未預訂就帶上車要付 ¥1,000 手續費；每人最多 2 件、單件 30 kg 以內。みずほ／さくら N700 系在 4、5、6、8 號車廂有此座位，名額有限請 12/28 開賣就訂。<a href='https://www.jrkyushu.co.jp/chinese/guide/oversized_baggage.html' target='_blank' rel='noopener'>JR 九州攜帶大件行李說明 🔗</a>",
                    "JR 九州網路訂票：事先預訂指定席，依訂票條件取票或使用指定乘車方式",
                    "車站售票機：可使用現金或售票機支援的信用卡購買",
                    "JR 綠色窗口：可請站務人員協助購買指定席或自由席",
                    "實體車票：進出新幹線閘門時，依票券種類投入或感應指定票券"
                ],
                note: "一般交通 IC 卡、感應信用卡、Apple Pay 或 Google Wallet，不能像搭福岡地下鐵一樣直接感應搭乘九州新幹線；請先購買有效的新幹線車票。多人同行建議事先預訂指定席。"
            },
            {
                time: "抵達後", title: "啟用熊本市電 24 小時乘車券", type: "transport",
                desc: "在熊本站準備搭乘市電前，以手機購買並啟用；從啟用時間起連續 24 小時內可無限搭乘熊本市電全線，可跨 Day 2、Day 3 使用。",
                detailTitle: "票券資訊與購買方式",
                payments: [
                    "票價：成人（國中生以上）¥600；兒童（小學生）¥300",
                    "QUICK TRIP：直接使用手機瀏覽器購買，不必安裝 App",
                    "乗換案内（Jorudan）：先安裝 App，再於 App 內購買",
                    "My Route：先安裝 App，再於 App 內購買",
                    "官方說明：<a href='https://www.kotsu-kumamoto.jp/kihon/pub/detail.aspx?c_id=66&id=1434&pg=1' target='_blank' rel='noopener'>熊本市交通局｜市電 24 小時乘車券 🔗</a>"
                ],
                note: "下車時向司機出示手機上的有效票券畫面，不要觸碰 IC 讀卡機。手機沒電或無法顯示票面時，需另付車資；有效時間內另附熊本城、水前寺成趣園等設施優惠。"
            },
            { time: "中午", title: "熊本城", desc: "安排城內參觀並視當日開放範圍調整停留時間。" },
            { time: "下午", title: "櫻之馬場 城彩苑", desc: "逛熊本特色商店與小吃，之後回飯店休息。" },
            { time: "晚上", title: "熊本特色晚餐", desc: "勝烈亭黑豬排或馬肉料理，熱門店建議預約。" }
        ]
    },
    3: {
        mode: "public", title: "熊本深度一日遊", route: "熊本市區 ➤ 熊本熊廣場 ➤ 水前寺成趣園 ➤ 上下通",
        mileage: "熊本市電＋步行", time: "市區一日", toll: "市電車資與景點門票",
        image: "images/day3-kumamoto.png", imageAlt: "熊本市區與水前寺成趣園",
        tip: "熊本熊廣場表演需依官方公布時段安排；若沒有演出，仍可參觀展示並順遊市區。",
        meals: { breakfast: "熊本飯店", lunch: "水前寺／市區餐廳", dinner: "上下通商店街周邊" },
        accommodation: "熊本市中央區（第二晚）<br><strong>Candeo Hotels Kumamoto Shinshigai（Agoda）</strong>・<a href='https://www.google.com/maps/search/?api=1&query=Candeo+Hotels+Kumamoto+Shinshigai' target='_blank' rel='noopener'>Google Maps 導航 📍</a>", parkingSpots: [],
        timeline: [
            { time: "上午", title: "熊本熊廣場", desc: "先確認熊本熊當日活動時刻，預留排隊時間。" },
            { time: "中午", title: "水前寺成趣園", desc: "搭市電前往，安排庭園散步與午餐。" },
            { time: "下午", title: "上通・下通商店街", desc: "購物、咖啡與自由活動。" },
            { time: "晚上", title: "熊本第二晚", desc: "回市中心用餐，並為隔日包車行程整理行李。" }
        ]
    },
    4: {
        mode: "charter", title: "高千穗峽划船・阿蘇・大觀峰 ➤ 由布院", route: "熊本飯店 ➤ 高千穗峽 ➤ 阿蘇／草千里 ➤ 大觀峰 ➤ 由布院",
        mileage: "約 9～10 小時包車", time: "純移動約 5 小時；完整行程約 9～10 小時", toll: "包車費、高速／停車費與划船費依報價",
        image: "images/day4.png", imageAlt: "阿蘇草千里與火山景觀",
        tip: "高千穗峽划船需在 <strong>2027/1/16（六）09:00 日本時間（台灣 08:00）</strong>準時上網搶訂：<a href='https://eipro.jp/takachiho1/eventCalendars/index' target='_blank' rel='noopener'>高千穗峽划船預約網站 🔗</a>。包車需事先確認約 9～10 小時服務、清晨山路及雪胎；06:30 出發時天色未亮。大觀峰之後直接經やまなみハイウェイ前往由布院，傍晚前即可入住；若積雪、結冰或道路管制，可縮短大觀峰停留。",
        meals: { breakfast: "熊本飯店提早用餐或便利商店外帶", lunch: "阿蘇赤牛料理", dinner: "由布院旅館或湯之坪街道周邊" },
        accommodation: "由布院（一晚；約 15:45 抵達）<br><strong>湯布院燈之宿 Yufuin Lamp no Yado（Agoda）</strong>・<a href='https://www.google.com/maps/search/?api=1&query=Yufuin+Lamp+no+Yado' target='_blank' rel='noopener'>Google Maps 導航 📍</a>", parkingSpots: [],
        timeline: [
            { time: "06:30～08:30", title: "熊本飯店 ➤ 高千穗峽", desc: "預估車程約 2 小時；冬季清晨山路天色暗且可能結冰，請包車司機預留緩衝。" },
            {
                time: "08:30～09:45", title: "高千穗峽划船 🚣", type: "transport",
                desc: "在<a href='https://www.google.com/maps/search/?api=1&query=高千穂峡+貸しボート' target='_blank' rel='noopener'>高千穗峽 📍</a>柱狀節理峭壁間划船 30 分鐘，近距離仰望真名井瀑布。受理處在第 1 御塩井停車場內，請提早 15 分鐘報到。",
                detailTitle: "划船預約資訊（需搶票）", detailIcon: "ri-calendar-check-line",
                payments: [
                    "搶票時間：<strong>2027/1/16（六）09:00 日本時間＝台灣 08:00</strong> 開放（乘船日 2 週前），至 1/28 09:00 截止",
                    "預約網址：<a href='https://eipro.jp/takachiho1/eventCalendars/index' target='_blank' rel='noopener'>高千穗峽貸しボート預約網站 🔗</a>（僅限網路預約、信用卡預付，不接受電話預約，也沒有候補）；請切換到「週」或「日」檢視，砂時計＝尚未開放、×＝已截止或售完",
                    "營業時間 08:30～17:00（最後受理 16:30）；每艘 30 分鐘，超時每 10 分鐘 ¥1,000",
                    "每艘限 3 名（含學齡前兒童時最多 4 名），需依人數預訂多艘；<strong>訂 2 艘以上時，每艘要填不同的代表人姓名</strong>，同一人名下無法重複預約；1/30 官方行事曆價格 ¥5,100／艘",
                    "官方說明：<a href='https://takachiho-kanko.info/boat/' target='_blank' rel='noopener'>高千穗町觀光協會｜貸しボート 🔗</a>"
                ],
                note: "建議搶 08:30～09:00 的時段。預約後未搭乘或遲到不退款，也不能更改時段；河川暴漲或震度 3 以上地震會停航。當日券於當天早上現場販售、售完為止且不能指定時間。1 月為定期安全檢查月，出發前請再確認 1/30 有營業。"
            },
            { time: "09:45～11:00", title: "高千穗峽 ➤ 阿蘇・草千里", desc: "預估車程約 1 小時 10～20 分。" },
            { time: "11:00～12:00", title: "草千里／中岳火口", desc: "草千里散步並視當日火山管制、天候與道路狀況決定是否前往中岳火口。" },
            { time: "12:00～13:00", title: "阿蘇午餐", desc: "安排赤牛料理或沿途餐廳，避免延誤下午行程。" },
            { time: "13:00～13:50", title: "草千里 ➤ 大觀峰", desc: "預估車程約 45～55 分。" },
            { time: "13:50～14:30", title: "大觀峰", desc: "觀景約 40 分鐘；若能見度不佳可縮短，保留冬季山路緩衝。" },
            { time: "14:30～15:45", title: "大觀峰 ➤ 由布院飯店", desc: "經やまなみハイウェイ前往由布院，預估車程約 1 小時～1 小時 15 分；冬季依路況預留緩衝。" },
            { time: "16:00～18:00", title: "由布院入住・湯之坪街道散步", desc: "Check-in 後可步行逛湯之坪街道或金鱗湖周邊；店家多在 17:00～17:30 打烊，想逛街可先放行李就出門。" }
        ]
    },
    5: {
        mode: "charter", title: "別府地獄巡遊 ➤ 福岡", route: "由布院飯店 ➤ 血之池地獄／龍卷地獄 ➤ 鐵輪 ➤ 湯煙展望台 ➤ 海地獄 ➤ 福岡飯店",
        mileage: "約 8～9 小時包車", time: "純移動約 3 小時 30 分；完整行程約 8～9 小時", toll: "包車費、高速／停車費與景點門票",
        image: "images/day5-beppu-hells.png", imageAlt: "血之池地獄與別府湯煙景觀",
        tip: "血之池地獄、龍卷地獄與海地獄皆以 17:00 前入場完成為原則。午餐安排鐵輪地獄蒸，湯煙展望台作短暫停靠；建議 15:00 前離開別府，為前往福岡的高速路段預留冬季與週末車流緩衝。",
        meals: { breakfast: "由布院飯店", lunch: "鐵輪地獄蒸料理", dinner: "福岡市區" },
        accommodation: "福岡博多（第一晚，連住四晚）<br><strong>HOTEL FORZA HAKATAEKI CHIKUSHI-GUCHI（Agoda）</strong>・<a href='https://maps.app.goo.gl/MjMntMRrrZUNfpyEA' target='_blank' rel='noopener'>Google Maps 導航 📍</a>", parkingSpots: [],
        timeline: [
            { time: "09:00～10:00", title: "由布院飯店 ➤ 血之池地獄", desc: "預估車程約 45～60 分鐘，冬季依道路狀況增加緩衝。" },
            { time: "10:00～11:15", title: "血之池地獄／龍卷地獄", desc: "兩處相鄰，合計停留約 75 分鐘。" },
            { time: "11:15～11:35", title: "前往鐵輪", desc: "移動至鐵輪溫泉區，預留停車與步行時間。" },
            { time: "11:35～13:00", title: "鐵輪地獄蒸午餐", desc: "以溫泉蒸氣料理肉類、海鮮與蔬菜；週末可能候位，應提早抵達。" },
            { time: "13:00～13:30", title: "湯煙展望台", desc: "短暫俯瞰鐵輪溫泉區與湯煙景觀。" },
            { time: "13:45～14:45", title: "海地獄", desc: "參觀代表性的鈷藍色地獄、足湯與商店，控制在一小時內。" },
            { time: "15:00～17:30", title: "別府 ➤ 福岡飯店", desc: "搭乘包車經高速公路前往福岡，預估約 2～2.5 小時；週末與冬季路況需保留緩衝。" }
        ]
    },
    6: {
        mode: "public", title: "福岡市區自由活動（待規劃）", route: "福岡飯店 ➤ 市區景點 ➤ 福岡飯店",
        mileage: "地下鐵／巴士＋步行", time: "市區一日", toll: "市區交通與景點費用",
        image: "images/day1-fukuoka-arrival.png", imageAlt: "福岡市區街景",
        tip: "Day 5 已抵達福岡，Day 6 不再安排由布院至博多的長途移動；詳細景點待後續確認。",
        meals: { breakfast: "福岡飯店", lunch: "福岡市區", dinner: "天神或中洲屋台" },
        accommodation: "福岡博多（第二晚）<br><strong>HOTEL FORZA HAKATAEKI CHIKUSHI-GUCHI（Agoda）</strong>・<a href='https://maps.app.goo.gl/MjMntMRrrZUNfpyEA' target='_blank' rel='noopener'>Google Maps 導航 📍</a>", parkingSpots: [],
        timeline: [
            { time: "上午", title: "福岡市區行程待確認", desc: "依團員需求安排景點、購物或休息。" },
            { time: "下午", title: "福岡市區自由活動", desc: "以地下鐵、巴士與步行移動，避免安排重複景點。" },
            { time: "晚上", title: "天神地下街・中洲", desc: "安排購物或屋台晚餐。" }
        ]
    },
    7: {
        mode: "public", title: "太宰府・LaLaport 鋼彈", route: "福岡 ➤ 太宰府天滿宮 ➤ LaLaport 福岡 ➤ 飯店",
        mileage: "西鐵／地下鐵／巴士", time: "市郊一日", toll: "大眾運輸車資",
        image: "images/day8-dazaifu.png", imageAlt: "冬季太宰府天滿宮",
        tip: "上午先走太宰府，下午再回福岡市區前往 LaLaport；確認實物大鋼彈當日演出時間。",
        meals: { breakfast: "福岡飯店", lunch: "太宰府參道", dinner: "LaLaport／博多市區" },
        accommodation: "福岡博多（第三晚）<br><strong>HOTEL FORZA HAKATAEKI CHIKUSHI-GUCHI（Agoda）</strong>・<a href='https://maps.app.goo.gl/MjMntMRrrZUNfpyEA' target='_blank' rel='noopener'>Google Maps 導航 📍</a>", parkingSpots: [],
        timeline: [
            { time: "上午", title: "太宰府天滿宮", desc: "參拜、逛表參道，品嚐梅枝餅並造訪特色星巴克。" },
            { time: "中午", title: "太宰府午餐", desc: "避開尖峰後返回福岡市區。" },
            { time: "下午", title: "LaLaport 福岡", desc: "觀看實物大鋼彈並保留購物時間。" },
            { time: "晚上", title: "返回飯店", desc: "晚餐後休息；大型採購與行李整理集中安排在 Day 8 晚上。" }
        ]
    },
    8: {
        mode: "public", title: "門司港復古・小倉城・晚間購物", route: "博多 ➤ 門司港 ➤ 小倉城 ➤ 福岡購物",
        mileage: "JR 特急／在來線＋步行", time: "博多至小倉／門司港約 40～50 分鐘", toll: "JR 車資與景點門票",
        image: "images/day7.png", imageAlt: "門司港復古街區與海港",
        tip: "先到門司港、回程順路停小倉，並控制在傍晚前回到福岡；Day 8 晚上不排正式景點，完整保留購物與整理行李時間。",
        meals: { breakfast: "福岡飯店", lunch: "門司港燒咖哩", dinner: "天神／博多購物區簡便用餐" },
        accommodation: "福岡博多（第四晚）<br><strong>HOTEL FORZA HAKATAEKI CHIKUSHI-GUCHI（Agoda）</strong>・<a href='https://maps.app.goo.gl/MjMntMRrrZUNfpyEA' target='_blank' rel='noopener'>Google Maps 導航 📍</a>", parkingSpots: [],
        timeline: [
            { time: "08:00", title: "前往門司港", desc: "由博多搭 JR，提早出發以換取晚間購物時間。" },
            { time: "09:30", title: "門司港復古街區", desc: "散步復古建築群與海港，冬季海邊風大，請準備防風外套。" },
            { time: "11:30", title: "門司港燒咖哩", desc: "提早用餐避開人潮，熱門餐廳可先查候位方式。" },
            { time: "13:00", title: "小倉城", desc: "回程在小倉停留，參觀城郭；最晚約 15:30 離開。" },
            { time: "16:30", title: "返回福岡", desc: "回飯店短暫休息並放下日間隨身物品。" },
            { time: "17:30 起", title: "天神／博多自由購物", desc: "晚間完整保留給藥妝、百貨與伴手禮採買，之後回飯店整理行李。" }
        ]
    },
    9: {
        mode: "flight", title: "福岡市區 ➤ 機場 ➤ 第一組返台", route: "大濠公園／櫛田神社 ➤ 福岡機場 ➤ 桃園",
        mileage: "地下鐵＋國際線接駁／直達巴士", time: "博多至機場地下鐵約 6 分鐘，另計國際線轉乘", toll: "機場交通與航班費用",
        image: "images/day9-fukuoka-airport.png", imageAlt: "福岡機場返台",
        tip: "上午景點依航班報到時間二選一；國際線航廈與地下鐵站不在同一棟，務必預留轉乘及報到時間。第二組依原航班安排續留至 2/6。",
        meals: { breakfast: "福岡飯店", lunch: "市區或福岡機場", dinner: "依航班／第二組福岡" },
        accommodation: "第一組：返台；第二組：福岡續住至 2/6", parkingSpots: [],
        timeline: [
            { time: "上午", title: "大濠公園或櫛田神社", desc: "依退房與班機時間擇一，不安排需要預約的遠程景點。" },
            { time: "報到前", title: "前往福岡機場", desc: "搭直達國際線巴士，或搭地下鐵至國內線後轉免費接駁。" },
            { time: "機場", title: "免稅購物・搭機返台", desc: "第一組搭 JX841 返回桃園；第二組延伸住宿與返程依原航班規劃。" }
        ]
    }
};

// Geographic stops for the map shown below each daily schedule.
const dailyMapStops = {
    1: [
        { name: "福岡機場國際線航廈", lat: 33.5848, lng: 130.4443 },
        { name: "地下鐵福岡空港站", lat: 33.5973, lng: 130.4482 },
        { name: "博多站", lat: 33.5900, lng: 130.4199 },
        { name: "JR九州飯店 Blossom博多中央", lat: 33.5900, lng: 130.4180 },
        { name: "福岡皇家花園飯店", lat: 33.5907, lng: 130.4154 }
    ],
    2: [
        { name: "博多站", lat: 33.5900, lng: 130.4199 },
        { name: "熊本站", lat: 32.7903, lng: 130.6890, via: "hakata_kumamoto" },
        { name: "熊本城", lat: 32.8069, lng: 130.7049 },
        { name: "Candeo Hotels 熊本新市街", lat: 32.8027, lng: 130.7068 }
    ],
    3: [
        { name: "Candeo Hotels 熊本新市街", lat: 32.8027, lng: 130.7068 },
        { name: "熊本熊廣場", lat: 32.8019, lng: 130.7124 },
        { name: "水前寺成趣園", lat: 32.7907, lng: 130.7349 },
        { name: "上通・下通", lat: 32.8040, lng: 130.7100 }
    ],
    4: [
        { name: "Candeo Hotels 熊本新市街", lat: 32.8027, lng: 130.7068 },
        { name: "高千穗峽", lat: 32.7016, lng: 131.3006 },
        { name: "草千里ヶ濱", lat: 32.8815, lng: 131.0535 },
        { name: "大觀峰", lat: 32.9957, lng: 131.0671 },
        { name: "湯布院燈之宿（由布院）", lat: 33.2661, lng: 131.3632 }
    ],
    5: [
        { name: "湯布院燈之宿（由布院）", lat: 33.2661, lng: 131.3632 },
        { name: "血之池／龍卷地獄", lat: 33.3271, lng: 131.4787 },
        { name: "鐵輪地獄蒸", lat: 33.3160, lng: 131.4768 },
        { name: "湯煙展望台", lat: 33.3157, lng: 131.4853 },
        { name: "海地獄", lat: 33.3168, lng: 131.4687 },
        { name: "HOTEL FORZA 博多駅筑紫口", lat: 33.5911, lng: 130.4219 }
    ],
    6: [
        { name: "HOTEL FORZA 博多駅筑紫口", lat: 33.5911, lng: 130.4219 },
        { name: "天神（市區行程待規劃）", lat: 33.5914, lng: 130.3988 }
    ],
    7: [
        { name: "HOTEL FORZA 博多駅筑紫口", lat: 33.5911, lng: 130.4219 },
        { name: "太宰府天滿宮", lat: 33.5213, lng: 130.5353 },
        { name: "LaLaport 福岡", lat: 33.5648, lng: 130.4403 },
        { name: "HOTEL FORZA 博多駅筑紫口", lat: 33.5911, lng: 130.4219 }
    ],
    8: [
        { name: "博多站", lat: 33.5900, lng: 130.4199 },
        { name: "門司港", lat: 33.9451, lng: 130.9615, via: "hakata_mojiko" },
        { name: "小倉城", lat: 33.8844, lng: 130.8743, via: "mojiko_kokura" },
        { name: "博多站", lat: 33.5900, lng: 130.4199, via: "kokura_hakata" },
        { name: "天神／博多購物區", lat: 33.5914, lng: 130.3988 }
    ],
    9: [
        { name: "HOTEL FORZA 博多駅筑紫口", lat: 33.5911, lng: 130.4219 },
        { name: "櫛田神社（或大濠公園）", lat: 33.5931, lng: 130.4107 },
        { name: "福岡機場國際線航廈", lat: 33.5848, lng: 130.4443 }
    ]
};

// Rail track geometry (from OpenStreetMap) for legs taken by train; other legs follow roads.
const railPaths = {
    hakata_mojiko: [[33.5898,130.4201],[33.6012,130.4215],[33.6211,130.4276],[33.6368,130.4266],[33.6414,130.4297],[33.6444,130.4357],[33.6461,130.4377],[33.6507,130.4413],[33.6571,130.4437],[33.6653,130.4443],[33.6716,130.4425],[33.6829,130.4355],[33.6902,130.4346],[33.692,130.4351],[33.7009,130.4425],[33.7172,130.4526],[33.7248,130.462],[33.7349,130.4682],[33.7428,130.4712],[33.7479,130.4757],[33.7609,130.4826],[33.7689,130.4955],[33.7699,130.4989],[33.7703,130.5045],[33.7765,130.5153],[33.7767,130.5207],[33.7775,130.523],[33.78,130.5246],[33.7896,130.5246],[33.7926,130.5265],[33.7952,130.53],[33.8084,130.5611],[33.8077,130.5816],[33.8086,130.5933],[33.8082,130.5971],[33.8087,130.5988],[33.8102,130.6015],[33.8123,130.6032],[33.816,130.6049],[33.8202,130.6047],[33.8269,130.6081],[33.835,130.6155],[33.8398,130.6222],[33.8411,130.6345],[33.845,130.6385],[33.8471,130.6436],[33.8471,130.6478],[33.8431,130.6552],[33.843,130.6588],[33.8533,130.6987],[33.8595,130.7075],[33.8637,130.7118],[33.8642,130.7141],[33.8638,130.7251],[33.8678,130.7312],[33.8689,130.7346],[33.869,130.7375],[33.8662,130.7564],[33.8672,130.7716],[33.8686,130.7801],[33.8694,130.8025],[33.8719,130.807],[33.8781,130.8125],[33.8858,130.8147],[33.8912,130.8154],[33.895,130.8172],[33.8967,130.8194],[33.9013,130.8296],[33.9015,130.8326],[33.8988,130.8518],[33.8897,130.8699],[33.8869,130.8831],[33.8847,130.8897],[33.8851,130.8946],[33.8885,130.899],[33.8915,130.9053],[33.8926,130.9105],[33.8928,130.9176],[33.8993,130.9249],[33.9034,130.9314],[33.9059,130.9336],[33.9107,130.9365],[33.9187,130.9396],[33.9247,130.9432],[33.93,130.9435],[33.9371,130.9475],[33.9425,130.959],[33.9448,130.9613]],
    mojiko_kokura: [[33.9448,130.9613],[33.9419,130.9578],[33.937,130.9475],[33.9302,130.9436],[33.9252,130.9434],[33.9187,130.9397],[33.9081,130.9356],[33.901,130.9301],[33.8932,130.9203],[33.8921,130.9175],[33.8922,130.9107],[33.8914,130.9055],[33.8897,130.9023],[33.8867,130.899],[33.8843,130.8931],[33.8845,130.8894],[33.8869,130.8823]],
    kokura_hakata: [[33.8869,130.8823],[33.8897,130.8699],[33.8988,130.8518],[33.9015,130.8326],[33.9013,130.8296],[33.8967,130.8194],[33.895,130.8172],[33.8912,130.8154],[33.8858,130.8147],[33.8781,130.8125],[33.8719,130.807],[33.8694,130.8025],[33.8686,130.7801],[33.8672,130.7716],[33.8662,130.7564],[33.869,130.7375],[33.8689,130.7346],[33.8678,130.7312],[33.8638,130.7251],[33.8642,130.7141],[33.8637,130.7118],[33.8595,130.7075],[33.8533,130.6987],[33.843,130.6588],[33.8431,130.6552],[33.8471,130.6478],[33.8471,130.6436],[33.845,130.6385],[33.8411,130.6345],[33.8398,130.6222],[33.835,130.6155],[33.8269,130.6081],[33.8202,130.6047],[33.816,130.6049],[33.8123,130.6032],[33.8102,130.6015],[33.8087,130.5988],[33.8082,130.5971],[33.8086,130.5933],[33.8077,130.5816],[33.8084,130.5611],[33.7952,130.53],[33.7926,130.5265],[33.7896,130.5246],[33.78,130.5246],[33.7775,130.523],[33.7767,130.5207],[33.7765,130.5153],[33.7703,130.5045],[33.7699,130.4989],[33.7689,130.4955],[33.7609,130.4826],[33.7479,130.4757],[33.7428,130.4712],[33.7349,130.4682],[33.7248,130.462],[33.7172,130.4526],[33.7009,130.4425],[33.692,130.4351],[33.6902,130.4346],[33.6829,130.4355],[33.6716,130.4425],[33.6653,130.4443],[33.6571,130.4437],[33.6507,130.4413],[33.6461,130.4377],[33.6444,130.4357],[33.6414,130.4297],[33.6368,130.4266],[33.6211,130.4276],[33.6012,130.4215],[33.5898,130.4201]],
    hakata_kumamoto: [[33.5898,130.4208],[33.5835,130.4206],[33.5802,130.4215],[33.5672,130.4331],[33.5588,130.4366],[33.5544,130.4366],[33.5424,130.4336],[33.5332,130.4325],[33.529,130.4332],[33.5043,130.4405],[33.4918,130.446],[33.4858,130.4477],[33.4775,130.4478],[33.4648,130.4452],[33.4582,130.4445],[33.4445,130.4444],[33.4344,130.446],[33.4262,130.4491],[33.4198,130.4528],[33.3858,130.4816],[33.3635,130.4951],[33.3577,130.4965],[33.346,130.4962],[33.3313,130.4969],[33.3238,130.5004],[33.3102,130.5032],[33.2865,130.5036],[33.2629,130.5029],[33.2509,130.5014],[33.2278,130.5006],[33.1752,130.4922],[33.144,130.494],[33.1124,130.4899],[33.0975,130.4866],[33.0916,130.4859],[33.0806,130.4867],[33.0504,130.4937],[33.0389,130.4991],[32.9827,130.5374],[32.9465,130.5693],[32.939,130.5785],[32.9227,130.6065],[32.8705,130.6691],[32.8654,130.6741],[32.8599,130.6778],[32.8215,130.6994],[32.8186,130.6993],[32.8062,130.6946],[32.796,130.6932],[32.7906,130.6889]]
};

// --- 4. Initialize DOM Elements ---
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const header = document.querySelector('.main-header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
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
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                mobileMenuBtn.setAttribute('aria-label', '關閉選單');
            } else {
                icon.className = 'ri-menu-4-line';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.setAttribute('aria-label', '開啟選單');
            }
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'ri-menu-4-line';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.setAttribute('aria-label', '開啟選單');
            });
        });
    }

    // --- 5. Interactive Itinerary Day Switcher ---
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
        const data = activeItineraryData[dayNum];
        if (!data) return;

        // Build Timeline Items HTML
        let timelineHtml = '';
        data.timeline.forEach(item => {
            const transportDetails = item.type === 'transport' ? `
                <div class="timeline-transport-card">
                    <h5><i class="${item.detailIcon || 'ri-bank-card-line'}"></i> ${item.detailTitle || '地下鐵付款方式'}</h5>
                    <ul>
                        ${item.payments.map(payment => `<li>${payment}</li>`).join('')}
                    </ul>
                    <small><i class="ri-information-line"></i> ${item.note}</small>
                </div>
            ` : '';
            timelineHtml += `
                <li class="${item.type === 'transport' ? 'transport-timeline-item' : ''}">
                    <span class="time">${item.time}</span>
                    <div class="timeline-body">
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                        ${transportDetails}
                    </div>
                </li>
            `;
        });

        // Display transport details by the actual mode used that day.
        const modeIcons = { public: 'ri-train-line', charter: 'ri-bus-line', flight: 'ri-plane-line' };
        const iconClass = modeIcons[data.mode] || 'ri-route-line';
        const transitLabel = '交通方式：';
        const durationLabel = '移動時間：';
        const costLabel = '費用／票券：';
        const costIcon = 'ri-ticket-2-line';

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

        // Geographic map displayed after the daily timeline.
        const routeMapHtml = `
            <div class="daily-route-map-card">
                <div class="daily-route-map-heading">
                    <i class="ri-map-2-line"></i>
                    <div>
                        <h4>實際路線圖</h4>
                        <p>道路依導航服務繪製；新幹線／JR 依實際軌道繪製</p>
                    </div>
                </div>
                <div id="dailyRouteMap" class="daily-route-map-canvas" role="img" aria-label="Day ${dayNum} 地理路線圖"></div>
            </div>
        `;

        // Date labels for each day
        const dayDates = { 1:'1/27', 2:'1/28', 3:'1/29', 4:'1/30', 5:'1/31', 6:'2/1', 7:'2/2', 8:'2/3', 9:'2/4' };
        const dateLabel = dayDates[dayNum] || '';

        // Panel full template
        const panelHtml = `
            <div class="day-panel active">
                <div class="panel-header">
                    <div class="day-number-badge">Day ${dayNum} <span class="badge-date">(${dateLabel})</span></div>
                    <div class="panel-meta">
                        <h2>${data.title}</h2>
                        <p class="route-line"><i class="ri-route-line"></i> 路線：${data.route}</p>
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
                        ${routeMapHtml}
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
        renderDailyRouteMap(dayNum);
    }

    // Rail legs use stored track geometry; other legs follow roads, falling back to a straight line.
    async function getLegPath(from, to) {
        const start = [from.lat, from.lng];
        const end = [to.lat, to.lng];
        if (to.via && railPaths[to.via]) return [start, ...railPaths[to.via], end];

        const routeUrl = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson&steps=false`;
        try {
            const response = await fetch(routeUrl);
            if (response.ok) {
                const routeData = await response.json();
                const roadCoordinates = routeData.routes?.[0]?.geometry?.coordinates;
                if (roadCoordinates && roadCoordinates.length > 1) {
                    return roadCoordinates.map(([lng, lat]) => [lat, lng]);
                }
            }
        } catch (error) {
            console.warn('道路路線載入失敗，改用直線示意。', error);
        }
        return [start, end];
    }

    async function renderDailyRouteMap(dayNum) {
        const stops = dailyMapStops[dayNum] || [];
        const mapElement = document.getElementById('dailyRouteMap');
        if (!mapElement || stops.length === 0 || typeof L === 'undefined') return;

        const map = L.map(mapElement, {
            scrollWheelZoom: false,
            zoomControl: true
        });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
        }).addTo(map);

        const coordinates = stops.map(stop => [stop.lat, stop.lng]);
        const legs = await Promise.all(stops.slice(1).map((stop, index) => getLegPath(stops[index], stop)));
        const routeCoordinates = legs.length ? legs.flat() : coordinates;

        const routeOutline = L.polyline(routeCoordinates, {
            color: '#ffffff',
            weight: 9,
            opacity: 0.95,
            lineJoin: 'round',
            lineCap: 'round'
        }).addTo(map);

        const routeLine = L.polyline(routeCoordinates, {
            color: '#e91e63',
            weight: 5,
            opacity: 0.95,
            lineJoin: 'round',
            lineCap: 'round'
        }).addTo(map);

        stops.forEach((stop, index) => {
            const markerIcon = L.divIcon({
                className: 'daily-route-marker-wrap',
                html: `<span class="daily-route-marker">${index + 1}</span>`,
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            });
            L.marker([stop.lat, stop.lng], { icon: markerIcon })
                .addTo(map)
                .bindPopup(`<strong>${index + 1}. ${stop.name}</strong>`);
        });

        if (routeCoordinates.length === 1) {
            map.setView(routeCoordinates[0], 12);
        } else {
            map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });
        }

        window.setTimeout(() => map.invalidateSize(), 0);
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
