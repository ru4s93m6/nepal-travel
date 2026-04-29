import type { TourData } from './ebc';

export const gokyoTour: TourData = {
  id: 'gokyo',
  heroImage: '/src/assets/gokyo_lake.webp',
  durationDays: 13,
  durationNights: 12,
  difficulty: 'Moderate to Strenuous',
  maxAltitude: 5357,
  minGroupSize: 2,
  locales: {
    en: {
      title: 'Gokyo Lake Trek',
      subtitle: 'A serene alternative to Everest Base Camp, featuring pristine turquoise lakes and panoramic Himalayan views.',
      overview: 'Gokyo Lake trek is considered a fantastic alternative to the traditional Everest Base Camp trek. It offers magnificent views of the mountain peaks and the Ngozumpa Glacier—the largest in the Nepal Himalayas. The trek takes you through the less busy trails of Phortse Tenga to reach Gokyo, a former yak pasture blessed with beautiful high-altitude lakes. From the ridge above Gokyo (Gokyo Ri), you can witness four 8,000m peaks (Cho Oyu, Everest, Lhotse, and Makalu) at once.\n\nPlease note: This 13-day timeframe is an estimated standard. The actual itinerary will be flexibly adjusted based on your physical condition and acclimatization.',
      highlights: [
        'Breathtaking scenic flight from Kathmandu to Lukla',
        'Explore the stunning turquoise Gokyo Lakes',
        'Hike up to Gokyo Ri (5,357m) for panoramic views of Mt. Everest, Lhotse, Makalu, and Cho Oyu',
        'Witness the Ngozumpa Glacier, the largest glacier in the Nepal Himalayas',
        'Experience authentic Sherpa culture in less crowded trails'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Kathmandu',
          description: 'Upon your arrival at the Kathmandu airport (KTM), you will be greeted by our representative and transferred to your hotel.'
        },
        {
          day: 2,
          title: 'Fly to Lukla (2,800m) and Trek to Phakding (2,652m)',
          description: 'Early morning flight to Lukla (2,800m), the gateway to the Khumbu region. After a dramatic landing, we meet our trekking crew and start our hike towards Phakding, walking alongside the Dudh Koshi River. This is a short trek to assist with acclimatization.'
        },
        {
          day: 3,
          title: 'Trek to Namche Bazaar (3,440m)',
          description: 'The walk today is pleasant with multiple crossings over the Dudh Koshi River. We enter Sagarmatha National Park at Monjo, then climb steeply uphill to Namche Bazaar, the colorful main gateway of the Khumbu region. Along the way, we catch our first glimpses of Mt. Everest.'
        },
        {
          day: 4,
          title: 'Namche Bazaar: Acclimatization Day',
          description: 'A scheduled acclimatization day. We stay active by hiking up to the Everest View Hotel or Khumjung village for stunning panoramas of Everest, Lhotse, and Ama Dablam. In the afternoon, you can explore Namche’s vibrant market.'
        },
        {
          day: 5,
          title: 'Namche Bazaar to Phorse Village (3,810m)',
          description: 'We leave the main Everest Base Camp trail and head towards the Gokyo Valley. The trail offers superb views of Everest, Nuptse, and Ama Dablam. We ascend through rhododendron forests, crossing the Dudh Koshi River, before arriving at the walled fields of Phorse Village.'
        },
        {
          day: 6,
          title: 'Phorse Village to Machhermo (4,470m)',
          description: 'We trek through forests and alpine meadows, offering views of Cho Oyu and Thamserku. Passing through summer settlements and the charming hamlet of Luza, we eventually reach Machhermo, the last major settlement before Gokyo.'
        },
        {
          day: 7,
          title: 'Machhermo to Gokyo (4,800m)',
          description: 'Today the valley widens as we climb to the terminal moraine of the Ngozumpa Glacier. We pass the first lake (Longpongo) and the second lake (Taboche Tsho) with its mesmerizing turquoise blue water. Finally, we reach Gokyo village, situated by the third lake with Cho Oyu as a spectacular backdrop.'
        },
        {
          day: 8,
          title: 'Gokyo Valley: Climb Gokyo Ri (5,357m)',
          description: 'An acclimatization day highlighted by a climb to Gokyo Ri, the best viewpoint in the Everest Region. From the top, you will be rewarded with astounding views of Cho Oyu, Everest, Lhotse, and Makalu, as well as the vast Ngozumpa Glacier below. Later, we can explore the fourth and fifth Gokyo lakes.'
        },
        {
          day: 9,
          title: 'Trek from Gokyo to Dole (4,038m)',
          description: 'We retrace our steps down the valley, an easy downhill walk along the Dudh Koshi River. Passing the beautiful lakes again, we descend through Machhermo and Luza to reach Dole.'
        },
        {
          day: 10,
          title: 'Trek from Dole to Namche Bazaar (3,440m)',
          description: 'A steep descent through beautiful forests abundant with wildflowers and rhododendrons. The warmer air is refreshing as we wind our way back down to the familiar and bustling town of Namche Bazaar.'
        },
        {
          day: 11,
          title: 'Trek from Namche Bazaar to Lukla (2,800m)',
          description: 'Our final day of trekking. We descend steeply back to the Dudh Koshi River, cross the suspension bridges, and walk through Sherpa villages. We arrive in Lukla to celebrate the culmination of a fantastic trek.'
        },
        {
          day: 12,
          title: 'Fly back to Kathmandu',
          description: 'We take an early morning scenic flight back to Kathmandu. The rest of the day is free for you to relax, do some souvenir shopping in Thamel, or explore the city. In the evening, we will have a farewell celebration dinner.'
        },
        {
          day: 13,
          title: 'Final Departure',
          description: 'Your trekking adventure concludes today. Our representative will drop you off at the international airport for your departure flight.'
        }
      ],
      includes: [
        'Kathmandu and Lukla round-trip flights',
        'Airport pick-up and drop-off',
        'All meals (Breakfast, Lunch, Dinner) during the trek',
        'Teahouse accommodation during the trek',
        'Sagarmatha National Park entry permit and TIMS card',
        'Experienced English-speaking guide and necessary porters'
      ],
      excludes: [
        'Personal trekking gear and travel insurance',
        'Meals in Kathmandu',
        'Bar bills, bottled water, and hot showers on the trek',
        'Gratuities / Tips for guide and porters'
      ],
      notes: [
        'Trekking backpack and a small daypack',
        'High-cut waterproof trekking boots',
        'Gore-Tex jacket and warm down jacket',
        'Sleeping bag (rated to -15°C or lower)',
        'Trekking poles',
        'Sunscreen, hat, and UV-protection sunglasses',
        'Personal first aid kit and altitude medication',
        'Headlamp and spare batteries'
      ]
    },
    'zh-tw': {
      title: '高喬湖健行\n(Gokyo Lake Trek)',
      subtitle: '避開人潮的聖母峰絕美替代路線，探索湛藍高山湖泊與群山全景。',
      overview: '高喬湖（Gokyo Lake）健行是傳統聖母峰基地營（EBC）路線的最佳替代路線。這條路線避開了最擁擠的主幹道，帶領您穿越寧靜的雪巴村落，最終抵達被譽為「人間仙境」的高喬湖泊群。清澈湛藍的冰川湖泊與世界最大的 Ngozumpa 冰河交相輝映。旅程的最大亮點是登頂海拔 5,357 公尺的高喬里（Gokyo Ri），在這裡您可以同時將包含聖母峰（Everest）、洛子峰（Lhotse）、馬卡魯峰（Makalu）與卓奧友峰（Cho Oyu）在內的四座 8,000 公尺級巨峰盡收眼底。\n\n請注意：本 13 天行程為為預估標準，我們會根據您的體能狀況與高山適應程度彈性調整步伐，確保您能在安全的前提下完成這趟的旅程。',
      highlights: [
        '往返盧卡拉 (Lukla) 的喜馬拉雅高空景觀航線',
        '探索如同藍寶石般湛藍純淨的高喬 (Gokyo) 高山湖泊群',
        '登頂高喬里 (Gokyo Ri, 5,357m)，享受聖母峰與多座 8,000 公尺巨峰的全景',
        '近距離觀賞尼泊爾喜馬拉雅山區最巨大的 Ngozumpa 冰河',
        '走入相對寧靜的支線步道，深度體驗純樸的雪巴文化'
      ],
      itinerary: [
        {
          day: 1,
          title: '抵達加德滿都 (Arrival in Kathmandu)',
          description: '抵達特里布萬國際機場後，我們的代表將熱情迎接您，並接送您至下榻飯店休息，準備迎接隔天的喜馬拉雅冒險。'
        },
        {
          day: 2,
          title: '飛往盧卡拉 (2,800m) 並健行至帕克丁 (2,610m)',
          description: '清晨搭乘景觀航班前往昆布地區的門戶盧卡拉。在降落後，我們與健行團隊會合。今天只進行短程健行，沿著都德科西河 (Dudh Koshi River) 前行至帕克丁，幫助身體初步適應海拔。'
        },
        {
          day: 3,
          title: '健行至南崎市場 Namche Bazaar (3,440m)',
          description: '今天我們將數次跨越都德科西河上的吊橋，並在 Monjo 進入薩加瑪塔國家公園。隨後迎來一段連續的陡上坡，抵達繁華的南崎市場 (Namche Bazaar)。途中您將有機會首度瞥見聖母峰的壯麗身影。'
        },
        {
          day: 4,
          title: '南崎市場：高度適應日 (Acclimatization Day)',
          description: '為了適應高海拔，我們今天留在南崎市場。我們將前往 Everest View Hotel 或 Khumjung 村莊進行適應性徒步，欣賞聖母峰、洛子峰與阿瑪達布拉姆峰 (Ama Dablam) 的絕美全景。下午可自由探索熱鬧的村落。'
        },
        {
          day: 5,
          title: '健行至 Phorse 村 (3,810m)',
          description: '今天我們將離開前往 EBC 的主步道，轉向寧靜的高喬谷 (Gokyo Valley) 支線。步道穿梭於杜鵑花林間，途中視野極佳，最終抵達被田野包圍的傳統村落 Phorse。'
        },
        {
          day: 6,
          title: '健行至馬切爾莫 Machhermo (4,470m)',
          description: '步道穿越高山森林與草甸，沿途可以欣賞到卓奧友峰與 Thamserku 等壯麗山容。經過幾個夏季放牧聚落後，我們抵達高喬湖前最後一個主要村落——馬切爾莫。'
        },
        {
          day: 7,
          title: '健行至高喬 Gokyo (4,800m)',
          description: '山谷逐漸開闊，我們爬升至 Ngozumpa 冰河的側磧。接著我們將陸續經過第一座湖泊與閃耀著綠松石光澤的第二座湖泊 (Taboche Tsho)。最終抵達位於第三座湖泊旁的高喬村，宏偉的卓奧友峰就在背景中屹立。'
        },
        {
          day: 8,
          title: '高喬谷探索：登頂高喬里 Gokyo Ri (5,357m)',
          description: '今天的高潮是攀登高喬里，這是整個聖母峰地區最佳的觀景台之一。登頂後，您將被聖母峰、洛子峰、馬卡魯峰與卓奧友峰的環繞全景所震撼，腳下則是壯闊的 Ngozumpa 冰河。隨後我們可以去探索第四與第五座高山湖泊。'
        },
        {
          day: 9,
          title: '從高喬下撤至多勒 Dole (4,038m)',
          description: '在飽覽高橋湖的美景後，我們開始原路下山。沿著都德科西河輕鬆下行，再次回顧清澈的湖泊，並穿過馬切爾莫抵達多勒休息。'
        },
        {
          day: 10,
          title: '從多勒下撤至南崎市場 Namche Bazaar (3,440m)',
          description: '步道一路陡降穿過滿布野花與杜鵑花的蓊鬱森林。隨著海拔降低，空氣變得更加溫暖富含氧氣，我們順利回到熱鬧的南崎市場。'
        },
        {
          day: 11,
          title: '從南崎市場下撤至盧卡拉 Lukla (2,800m)',
          description: '健行的最後一天！我們沿著來時路陡降至都德科西河，走過熟悉的吊橋與雪巴村落，最終回到盧卡拉。晚上團隊將一起慶祝這趟旅程的圓滿完成！'
        },
        {
          day: 12,
          title: '飛返加德滿都',
          description: '清晨搭乘景觀航班返回加德滿都。接下來的時間為自由活動，您可以在塔美爾區 (Thamel) 購買紀念品，或在飯店放鬆休息。晚上我們將舉辦歡送晚宴。'
        },
        {
          day: 13,
          title: '賦歸',
          description: '這趟難忘的喜馬拉雅之旅在此畫下句點。我們的代表將專車送您至國際機場，準備搭機返家。'
        }
      ],
      includes: [
        '加德滿都至盧卡拉 (Lukla) 國內線來回機票',
        '行程中所有機場與市區之專車接送',
        '山區健行期間的所有餐食 (早、午、晚餐)',
        '健行期間的沿途山屋/客棧住宿',
        '薩加瑪塔國家公園門票與登山許可證 (TIMS 卡)',
        '專業英語在地嚮導與負責背負行李的挑夫'
      ],
      excludes: [
        '個人登山裝備與旅遊保險',
        '加德滿都期間的午餐與晚餐',
        '山上的酒水、礦泉水、充電費與熱水淋浴費',
        '給予嚮導與挑夫的小費'
      ],
      notes: [
        '大型登山背包與輕便隨身攻頂包',
        '高筒防寒防水登山鞋',
        'Gore-Tex 等級防風防水外套及保暖羽絨衣',
        '高山極地專用睡袋（耐寒度達 -15°C）',
        '登山杖（強烈建議攜帶）',
        '抗 UV 太陽眼鏡、遮陽帽與高係數防曬乳',
        '個人常備藥品與高山症藥物',
        '頭燈及備用電池'
      ]
    }
  }
};
