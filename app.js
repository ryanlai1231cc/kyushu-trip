/**
 * Fukuoka-Kagoshima 8-Day Tour JS Logic
 */

// --- 1. Dynamic Itinerary Data ---
const itineraryData = {
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
            { time: "11:00", title: "高千穗峽谷划船 🚣", desc: "在<span class='tip-hover tip-wrap' data-tip='📋 乘船日2週前(14天前) 09:00(日本時間)開放預約 ｜ 每艘限3名成人 ｜ 每艘總重上限240kg'><a href='https://www.google.com/maps/search/?api=1&query=高千穂峡' target='_blank'>高千穗峽谷 📍</a></span>幾乎垂直的玄武岩絕壁間划槳，從小舟仰望 17 公尺高的「真名井之瀑」飛瀉而下，霧氣瀰漫如夢似幻。划船約 30 分鐘，記得提早網路預約！👉 <a href='https://zh-tw-62123.site-translation.com/boat/detail.php' target='_blank'>資訊 🔗</a> ｜ <a href='https://eipro.jp/takachiho1/terms/view/toppage?_gl=1*servvs*_ga*MjA0NTY0NjI1MS4xNzgwMjg0MTI2*_ga_15MWGPBF8P*czE3ODAyODQxMjYkbzEkZzEkdDE3ODAyODQyODEkajU1JGwwJGgw#' target='_blank'>預約 🔗</a>" },
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
const activeItineraryData = {
    1: {
        title: "兩組抵達福岡 ‧ 福岡住一晚",
        route: "TPE ✈️ FUK ➤ 福岡市區 ➤ 飯店 Check-in",
        mileage: "無（大眾運輸）", time: "依兩組航班抵達時間安排", toll: "待確認",
        image: "images/day1.png", imageAlt: "福岡夜景",
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
Object.assign(activeItineraryData, {
    2: {
        title: "九州新幹線南下鹿兒島 ‧ 天文館散策",
        route: "福岡博多 ➤ 九州新幹線 ➤ 鹿兒島中央 ➤ 城山展望台 ➤ 天文館",
        mileage: "無（新幹線／市區交通）", time: "新幹線約 1 小時 16～30 分", toll: "新幹線票價待確認＋CUTE 兩日券現行成人 ¥1,900／兒童 ¥950",
        image: "images/day2.png", imageAlt: "鹿兒島市區與櫻島",
        tip: "抵達鹿兒島後購買 <a href='https://www.kagoshima-yokanavi.jp/zh-TW/feature/one-day-pass2' target='_blank' rel='noopener'>CUTE 兩日乘車券 🔗</a>，供 Day 2、3 使用。現行票價成人 ¥1,900、兒童 ¥950，可無限搭乘鹿兒島 City View、市營巴士、市電、櫻島觀光巴士與櫻島渡輪，並附部分景點優惠；2027 年售價與適用範圍需出發前複核。若大型行李不帶往鹿兒島，可使用 JR 博多站 2 樓的 <a href='https://handsfree-japan.com/tc/hakata/' target='_blank' rel='noopener'>Crosta 博多寄物服務 🔗</a>。",
        meals: { breakfast: "福岡飯店／博多站", lunch: "鹿兒島中央站或天文館", dinner: "天文館・薩摩黑豬＋白熊冰" },
        accommodation: "鹿兒島天文館 ‧ <a href='https://www.agoda.com/zh-tw/fav-lux-kagoshima-tenmonkan/hotel/kagoshima-jp.html' target='_blank'>FAV LUX KAGOSHIMA TENMONKAN 🔗</a>（第一晚，連住兩晚）", parkingSpots: [],
        timeline: [
            { time: "08:00", title: "福岡退房 ‧ 前往博多站", desc: "預留飯店退房、步行與大型行李移動時間。先詢問飯店能否跨夜保管；不能的話改用 Crosta 博多。" },
            { time: "09:00", title: "Crosta 博多寄放大型行李（需要時）", desc: "位於 JR 博多站 2 樓新幹線光之廣場剪票口外，09:00 開門。寄好行李後再購買早餐並前往新幹線月台。" },
            { time: "09:30", title: "九州新幹線前往鹿兒島中央 🚅", desc: "搭乘みずほ或さくら；實際班次以 2027 年時刻表為準。" },
            { time: "11:00", title: "鹿兒島中央站購買 CUTE 兩日券 🎫", desc: "可在鹿兒島中央車站旅客服務中心或東口站前廣場觀光服務處購買。刮開／啟用 Day 2、3 的使用日期；現行成人 ¥1,900、兒童 ¥950，2027 年資訊需再次確認。" },
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
        image: "images/day3.png", imageAlt: "仙巖園與櫻島",
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
        image: "images/day4.png", imageAlt: "霧島神宮與霧島溫泉",
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
        image: "images/day5.png", imageAlt: "阿蘇草千里",
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
        image: "images/day6.png", imageAlt: "熊本城",
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
        image: "images/day8.png", imageAlt: "福岡機場",
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
activeItineraryData[7] = {
    title: "熊本 ➤ 福岡機場店還車 ➤ 福岡市區",
    route: "熊本新町 ➤ AVIS 福岡機場出發航站樓店 ➤ 福岡飯店 ➤ 博多市區",
    mileage: "約 115～130 km", time: "純駕駛約 1 小時 40 分～2 小時", toll: "高速費、ETC 與加油費依現場結算",
    image: "images/day7.png", imageAlt: "福岡市區",
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

activeItineraryData[8] = {
    title: "太宰府半日遊 ‧ 福岡購物美食",
    route: "福岡 ➤ 太宰府天滿宮 ➤ 天神／博多 ➤ 福岡飯店",
    mileage: "無（電車／地鐵）", time: "福岡市區至太宰府單程約 40～60 分", toll: "西鐵與市區交通車資",
    image: "images/day8.png", imageAlt: "太宰府與福岡市區",
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

// --- 3. Initialize DOM Elements ---
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
        const data = activeItineraryData[dayNum];
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
        const isSelfDrive = parseInt(dayNum) >= 4 && parseInt(dayNum) <= 7;
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
        const dayDates = { 1:'1/27', 2:'1/28', 3:'1/29', 4:'1/30', 5:'1/31', 6:'2/1', 7:'2/2', 8:'2/3', 9:'2/4' };
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
