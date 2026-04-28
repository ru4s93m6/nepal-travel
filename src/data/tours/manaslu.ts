import type { TourData } from './ebc';

export const manasluTour: TourData = {
  id: 'manaslu',
  heroImage: '/src/assets/manaslu.webp',
  durationDays: 16,
  difficulty: 'Challenging / Strenuous',
  maxAltitude: 5162,
  locales: {
    'en': {
      title: 'Manaslu Circuit Trek',
      subtitle: 'A legendary and untouched Himalayan trek circling the 8th highest mountain in the world.',
      overview: 'The Manaslu Circuit Trek is a stunning, less-crowded alternative to the Annapurna Circuit. Opening its borders to tourists only in 1992, the region has preserved its pristine natural beauty and authentic Tibetan-influenced culture. The 16-day journey takes you through ancient villages, lush subtropical forests, and high alpine meadows, culminating in the dramatic crossing of the Larke Pass at 5,162m. This is the perfect adventure for experienced trekkers seeking a pure, remote Himalayan experience.\n\nPlease note: This 16-day itinerary is a standard estimate. The actual schedule can be flexibly adjusted based on your physical condition and altitude acclimatization. Your safety and health are our top priorities for completing this magnificent journey.',
      highlights: [
        'Cross the challenging and spectacular Larke Pass (5,162m) with panoramic views of the Himalayas',
        'Experience the rich, untouched Tibetan culture in remote villages like Samagaun and Samdo',
        'Incredible close-up views of Mount Manaslu (8,163m), the 8th highest peak in the world',
        'Trek through a pristine conservation area teeming with diverse flora and fauna',
        'Enjoy a quieter, off-the-beaten-path trekking route compared to Everest or Annapurna'
      ],
      includes: [
        'All meals during the trek (Breakfast, Lunch, Dinner)',
        'Experienced English speaking guide & necessary porters',
        'All necessary Trekking permits, TIMS card, and Manaslu Restricted Area Special Permit',
        'Manaslu Conservation Area Project (MCAP) and Annapurna Conservation Area Project (ACAP) entry fees',
        'First aid medical kit during the trip',
        'All ground transportation including airport transfers and drives to/from the trekking points',
        'Insurance, meals, and accommodations for Trekking Staff'
      ],
      excludes: [
        'All drinks, bottled water, and beverages during the trek',
        'Comprehensive travel and medical evacuation insurance for guests',
        'Tips for drivers, guides, and porters',
        'Personal expenses such as phone calls, laundry, Wi-Fi, battery charging, and bar bills'
      ],
      notes: [
        'High Altitude Sleeping Bag (rated to -20°C)',
        'Sturdy, broken-in trekking boots and thick wool socks',
        'Down jacket and layering clothes for extreme cold',
        'Headlamp with extra batteries',
        'Sunscreen, wide-brimmed hat, and UV protection sunglasses',
        'Personal water bottles and water purification tablets/filters',
        'Trekking poles (highly recommended for steep ascents and descents)',
        'Personal medications and a basic blister kit'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Kathmandu',
          description: 'Welcome to Nepal! We will pick you up from the Tribhuvan International Airport and transfer you to your designated Hotel in Kathmandu. Take the rest of the day to relax and prepare for the adventure.'
        },
        {
          day: 2,
          title: 'Kathmandu Sightseeing Tour',
          description: 'Today features a cultural sightseeing tour of Kathmandu Valley. You will visit iconic UNESCO World Heritage sites including Swayambhunath (the Monkey Temple), the giant stupa of Boudhanath, and the sacred Hindu temple of Pashupatinath.'
        },
        {
          day: 3,
          title: 'Drive to Soti Khola (700m)',
          description: 'We begin our journey with a long scenic drive from Kathmandu to Soti Khola. The road takes us through beautiful countryside, passing by rivers, terraced fields, and small towns. Overnight at a lodge in Soti Khola.'
        },
        {
          day: 4,
          title: 'Soti Khola to Machha Khola (950m)',
          description: 'The trek officially begins today. We walk through a lush landscape, crossing suspension bridges and passing through Sal forests. We follow the Budi Gandaki river, taking 5-6 hours to reach Machha Khola.'
        },
        {
          day: 5,
          title: 'Machha Khola to Jagat (1,325m)',
          description: 'The trail features some ups and downs as we cross the Tharo Khola and reach Khorlabesi. We pass natural hot springs at Tatopani before crossing another suspension bridge to reach the village of Jagat. Trekking duration is around 6-7 hours.'
        },
        {
          day: 6,
          title: 'Jagat to Pewa (1,610m)',
          description: 'After registering our restricted area permits in Jagat, we continue our trek climbing over a rocky ridge to Salleri and then descend to Sirdibas. We cross the river and continue up to Pewa, trekking for 6-7 hours.'
        },
        {
          day: 7,
          title: 'Pewa to Namrung (2,630m)',
          description: 'The valley begins to steepen as we cross the Budi Gandaki river multiple times. We pass through bamboo forests and small Gurung settlements, eventually making a steep climb to the Tibetan-influenced village of Namrung.'
        },
        {
          day: 8,
          title: 'Namrung to Lho (2,965m)',
          description: 'We get our first stunning views of the Manaslu range today. The trail passes through strict Tibetan culture areas, with chortens and mani walls lining the path. Trekking for 4-5 hours brings us to Lho village, offering majestic views of Mount Manaslu.'
        },
        {
          day: 9,
          title: 'Lho to Samagaun (3,540m)',
          description: 'A short 4-5 hour trek takes us deeper into the high mountains. We follow the right bank of the river, with spectacular views of Peak 29 ahead. We arrive at Samagaun, a large, beautiful Tibetan settlement.'
        },
        {
          day: 10,
          title: 'Samagaun (Rest and Acclimatization Day)',
          description: 'Today is crucial for acclimatization to the high altitude. We will stay in Samagaun but stay active by exploring the village, visiting the Birendra Tal (glacial lake), or hiking up to the Pungyen Gompa for closer views of the Manaslu glacier.'
        },
        {
          day: 11,
          title: 'Samagaun to Samdo (3,870m)',
          description: 'We follow the Budi Gandaki river upwards, passing through birch and juniper forests. The valley begins to widen, and the views become increasingly stark and beautiful. After 4-5 hours of steady ascent, we reach the remote village of Samdo.'
        },
        {
          day: 12,
          title: 'Samdo (Rest and Acclimatization Day)',
          description: 'Another necessary rest day to prepare for the high pass. You can hike up the valley towards the Tibetan border or simply rest and enjoy the dramatic mountain scenery surrounding this isolated outpost.'
        },
        {
          day: 13,
          title: 'Samdo to Dharmasala (4,455m)',
          description: 'A shorter but strenuous day as we climb higher up the valley. We cross the Athahra Saya river and follow the Larke Khola upwards to reach Dharmasala (Larke Phedi). This serves as the base camp for tomorrow\'s pass crossing.'
        },
        {
          day: 14,
          title: 'Dharmasala to Bhimthang (3,585m) via Larke Pass (5,162m)',
          description: 'The longest and toughest day of the trek! We start before dawn and undertake a steep, icy climb to reach the majestic Larke Pass (5,162m). The panoramic views of the Himalayas from the top are phenomenal. Afterwards, we tackle a long, steep descent down to Bhimthang. Total trekking duration is 8-9 hours.'
        },
        {
          day: 15,
          title: 'Bhimthang to Dharapani (1,800m)',
          description: 'We leave the high alpine environment and descend rapidly through rhododendron, pine, and fig forests. The 6-7 hour walk is scenic and much easier on the lungs as we enter the Annapurna Circuit route at Dharapani.'
        },
        {
          day: 16,
          title: 'Drive from Dharapani to Kathmandu',
          description: 'Our trekking adventure concludes. We take a long drive back to Kathmandu (usually via Besisahar). Once in Kathmandu, you can rest, celebrate, and reflect on this incredible Himalayan journey.'
        }
      ]
    },
    'zh-tw': {
      title: '馬納斯魯大環線健行\n(Manaslu Circuit)',
      subtitle: '深入喜馬拉雅的秘境，環繞世界第八高峰的傳奇朝聖之路。',
      overview: '馬納斯魯大環線 (Manaslu Circuit) 是一條絕美且遊客較少的經典路線，被譽為安娜普納環線的最佳替代方案。自 1992 年才正式對外國旅客開放，這裡完整保留了最純粹的自然風光與濃厚的藏族文化。這趟為期 16 天的旅程將帶您穿梭於古老村落、亞熱帶森林與高山草甸，最終挑戰跨越海拔高達 5,162 公尺的拉凱山口 (Larke Pass)。對於渴望遠離人群、尋求最純粹高山體驗的資深健行者來說，這絕對是一次完美的冒險。\n\n請注意：本行程天數（16天）為預估標準，實際行程會視旅客的體能狀況與高山適應程度進行彈性調整。我們的首要任務是確保您在安全、健康的前提下，順利完成這趟壯麗的旅程。',
      highlights: [
        '挑戰跨越壯麗的拉凱山口 (Larke Pass, 5,162m)，飽覽震撼的喜馬拉雅全景',
        '造訪 Samagaun 與 Samdo 等偏遠村落，體驗真實且未受破壞的藏族生活與文化',
        '近距離欣賞雄偉的馬納斯魯峰 (Mount Manaslu, 8,163m)——世界第八高峰',
        '徒步穿越生態豐富的自然保護區，沿途欣賞多樣的動植物景觀',
        '相較於 EBC 或 ABC，享受一條更為寧靜、遠離塵囂的非主流絕美路線'
      ],
      includes: [
        '健行期間的所有餐食（早餐、午餐、晚餐）',
        '經驗豐富的專業英語嚮導與必要的挑夫',
        '所有必要的 trekking 許可證、TIMS 卡，以及馬納斯魯限制區特別許可證 (Special Permit)',
        '馬納斯魯保護區 (MCAP) 與安娜普納保護區 (ACAP) 入山費用',
        '行程期間的急救醫療包',
        '所有地面交通安排，包含機場接送以及往返登山口的長途車程',
        '隨行嚮導與挑夫的保險、餐飲及住宿費用'
      ],
      excludes: [
        '健行期間的所有飲料、瓶裝水、酒類皆不包含在內',
        '旅客個人的旅遊保險與緊急直升機醫療救援險 (建議投保)',
        '司機、嚮導與挑夫的小費',
        '個人開銷（如：電話費、洗衣費、Wi-Fi 網路費、設備充電費等）'
      ],
      notes: [
        '高海拔專業防寒睡袋 (建議耐寒度達 -20°C)',
        '已經穿習慣的防水中高筒登山鞋與厚羊毛襪',
        '羽絨外套及應付極端嚴寒的多層次洋蔥式穿搭衣物',
        '頭燈及充足的備用電池',
        '高防曬係數防曬乳、遮陽帽及抗 UV 太陽眼鏡（高山紫外線極強）',
        '個人水壺或水袋，以及淨水藥片 / 隨身淨水器',
        '登山杖（在拉凱山口的陡峭上下坡建議使用）',
        '個人常備藥物及防水泡貼布/醫藥包'
      ],
      itinerary: [
        {
          day: 1,
          title: '抵達加德滿都 (Arrival in Kathmandu)',
          description: '歡迎來到尼泊爾！我們的團隊會在特里布萬國際機場迎接您，並接送您至指定的加德滿都飯店休息。您可以利用這天剩下的時間調整時差，或到附近的塔美爾區逛逛，為接下來的挑戰做準備。'
        },
        {
          day: 2,
          title: '加德滿都文化導覽 (Kathmandu Sightseeing Tour)',
          description: '今天將進行加德滿都谷地的文化巡禮。我們將帶您參觀被列為聯合國教科文組織世界遺產的經典景點，包含斯瓦揚布納特（猴廟 Swayambhunath）、宏偉的博達哈大佛塔（Boudhanath）以及印度教聖地帕殊帕提那神廟（Pashupatinath）。'
        },
        {
          day: 3,
          title: '乘車前往索提科拉 (Drive to Soti Khola, 700m)',
          description: '我們將搭乘長途車離開加德滿都，前往健行的起點索提科拉 (Soti Khola)。沿途風景秀麗，會經過蜿蜒的河流、梯田與純樸的鄉村小鎮。今晚在索提科拉的客棧休息。'
        },
        {
          day: 4,
          title: '索提科拉至馬赫科拉 (Soti Khola to Machha Khola, 950m)',
          description: '健行正式開始！我們沿著布迪甘達基河 (Budi Gandaki river) 前行，穿越茂密的婆羅雙樹林，走過驚險的吊橋與瀑布。大約步行 5 到 6 小時後，會抵達今天下榻的馬赫科拉 (Machha Khola)。'
        },
        {
          day: 5,
          title: '馬赫科拉至賈加特 (Machha Khola to Jagat, 1,325m)',
          description: '今天的路線上上下下，會越過塔羅河 (Tharo Khola) 到達 Khorlabesi，並經過天然溫泉區 Tatopani。在跨過另一座吊橋並爬升一段後，我們將抵達石板鋪成的美麗村莊賈加特 (Jagat)。健行時間約 6 至 7 小時。'
        },
        {
          day: 6,
          title: '賈加特至佩瓦 (Jagat to Pewa, 1,610m)',
          description: '在賈加特的檢查站登記我們的入山許可後，繼續出發。我們將翻過岩石山脊抵達 Salleri，再下切到 Sirdibas。跨越河流並持續往上攀升，最後抵達被群山環繞的佩瓦 (Pewa)。'
        },
        {
          day: 7,
          title: '佩瓦至南榮 (Pewa to Namrung, 2,630m)',
          description: '峽谷的坡度開始變得陡峭，我們將多次跨越布迪甘達基河。一路穿過幽靜的竹林與古隆族 (Gurung) 的小聚落，迎來一段艱辛的連續陡上攀升，最後抵達充滿濃厚藏族風情的南榮村 (Namrung)。'
        },
        {
          day: 8,
          title: '南榮至羅鎮 (Namrung to Lho, 2,965m)',
          description: '今天將首度迎來馬納斯魯群峰的壯麗雪景！沿途我們會經過多座藏式的瑪尼牆 (Mani walls) 與佛塔。步行約 4 到 5 小時後抵達羅鎮 (Lho)，在這裡可以近距離眺望震撼的馬納斯魯主峰。'
        },
        {
          day: 9,
          title: '羅鎮至薩馬崗 (Lho to Samagaun, 3,540m)',
          description: '隨著海拔逐漸升高，植被變得稀疏。我們沿著河流右岸前行，壯觀的 29 號峰 (Peak 29) 就在眼前展開。經歷 4 個多小時的跋涉，我們將抵達一個美麗又龐大的藏族聚落——薩馬崗 (Samagaun)。'
        },
        {
          day: 10,
          title: '薩馬崗 (Samagaun) - 高海拔適應休息日',
          description: '為了讓身體適應 3000 公尺以上的高海拔天氣，今天我們會在薩馬崗休息。適應日的核心原則是「爬高睡低」，你可以選擇在村落間散步，或是前往近距離觀賞冰川的 Birendra Tal (冰川湖) 及 Pungyen 修道院以獲得更好的適應效果。'
        },
        {
          day: 11,
          title: '薩馬崗至薩姆多 (Samagaun to Samdo, 3,870m)',
          description: '我們順著河流繼續攀升，穿過樺木與杜松林。隨著山谷漸漸開闊，周遭的風景變得更加荒涼卻充滿野性之美。經過 4 到 5 小時的穩定爬升，我們終於抵達距離西藏邊境僅一步之遙的極地村莊——薩姆多 (Samdo)。'
        },
        {
          day: 12,
          title: '薩姆多 (Samdo) - 高海拔適應休息日',
          description: '這是跨越最高山口前的第二個關鍵適應日。您可以沿著山谷向西藏邊境的方向輕鬆散步，或者就是單純地在客棧休息，享受這個被喜馬拉雅群峰環繞、遺世獨立的邊境氛圍。'
        },
        {
          day: 13,
          title: '薩姆多至達蘭薩拉 (Samdo to Dharmasala, 4,455m)',
          description: '今天的路程較短但相當費力。我們渡過 Athahra Saya 河並沿著拉凱河 (Larke Khola) 往上攀登，抵達被稱為拉凱大本營的達蘭薩拉 (Dharmasala 或 Larke Phedi)。今晚我們將早早休息，為明天最艱難的一日做準備。'
        },
        {
          day: 14,
          title: '達蘭薩拉至比姆唐 (Bhimthang, 3,585m)，翻越拉凱山口 (5,162m)',
          description: '這是整趟旅程最長、也是最艱難的一天！我們會在天亮前出發，在酷寒與冰雪中陡峭攀升，最終抵達本次的最高點——海拔 5,162 公尺的拉凱山口 (Larke Pass)。絕美的喜馬拉雅雪山全景將成為你一生難忘的獎勵。翻過山口後，迎來的是漫長且極具考驗的陡下坡，最終抵達比姆唐 (Bhimthang) 休息。(健行時間約 8-9 小時)'
        },
        {
          day: 15,
          title: '比姆唐至達拉帕尼 (Bhimthang to Dharapani, 1,800m)',
          description: '離開了極地高山環境，我們迅速沿著下坡路穿梭在杜鵑花林、松樹與無花果樹之間。這段 6 到 7 小時的下行路段不僅風景優美，隨著海拔降低，呼吸也變得順暢許多。我們將在達拉帕尼 (Dharapani) 重新銜接上安娜普納環線的道路。'
        },
        {
          day: 16,
          title: '乘車返回加德滿都 (Drive to Kathmandu)',
          description: '這趟偉大的健行冒險在此畫下句點！我們將搭車（通常經由 Besisahar）展開一段長途車程回到加德滿都。晚上，您終於可以好好洗個熱水澡、喝杯啤酒慶祝，細細回味這段不可思議的喜馬拉雅遠征！'
        }
      ]
    }
  }
};
