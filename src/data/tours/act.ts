import type { TourData } from './ebc';

export const actTour: TourData = {
  id: 'act',
  heroImage: '/src/assets/annapurna_circuit.webp',
  durationDays: 10,
  durationNights: 9,
  difficulty: 'Strenuous',
  maxAltitude: 5416,
  minGroupSize: 2,
  locales: {
    en: {
      title: 'Annapurna Circuit Trek',
      subtitle: 'A legendary journey through diverse landscapes, culminating at the Thorong La Pass (5,416m)',
      overview: 'The Annapurna Circuit Trek is world-renowned for its incredible diversity, taking you from lush sub-tropical forests to the high-altitude desert of the Tibetan plateau. The highlight of the journey is crossing the Thorong La Pass at 5,416m, where you will be rewarded with spectacular views of the Annapurna and Dhaulagiri ranges. This trek offers a perfect blend of natural beauty and cultural immersion, passing through traditional villages of different ethnic groups.\n\nPlease note: This 10-day itinerary is a condensed version of the full circuit. We can customize the duration and route based on your preferences and fitness level.',
      highlights: [
        'Crossing the Thorong La Pass (5,416m), the highest point of the trek',
        'Spectacular views of Annapurna, Dhaulagiri, and Manaslu ranges',
        'Diverse landscapes from sub-tropical forests to alpine deserts',
        'Visiting the sacred pilgrimage site of Muktinath',
        'Experiencing the unique culture of Manang and Mustang regions',
      ],
      itinerary: [
        {
          day: 1,
          title: 'Drive from Kathmandu to Dharapani (1,960m)',
          description: 'A long but scenic drive through the foothills of the Himalayas, following the Trishuli and Marsyangdi rivers to reach the village of Dharapani.'
        },
        {
          day: 2,
          title: 'Trek to Chame (2,710m)',
          description: 'The trail climbs through pine forests and along the Marsyangdi River. You will get your first glimpses of Lamjung Himal and Annapurna II.'
        },
        {
          day: 3,
          title: 'Trek to Pisang (3,240m)',
          description: 'A steady climb through narrow valleys and apple orchards, leading to the beautiful village of Pisang with its unique architecture.'
        },
        {
          day: 4,
          title: 'Trek to Manang (3,540m)',
          description: 'Continuing through the rain shadow of the Annapurnas, the landscape becomes more arid. Manang is a large and culturally rich village, perfect for acclimatization.'
        },
        {
          day: 5,
          title: 'Acclimatization Day in Manang',
          description: 'A day to rest and let your body adjust to the altitude. You can explore the village, visit the local monastery, or take short hikes to nearby viewpoints.'
        },
        {
          day: 6,
          title: 'Trek to Chauri Ledar (4,230m)',
          description: 'The trail leaves the Marsyangdi valley and climbs steadily towards the Thorong La Pass. The vegetation becomes sparse as we reach higher altitudes.'
        },
        {
          day: 7,
          title: 'Trek to Thorong Phedi (4,540m)',
          description: 'A short but demanding climb to the base of the pass. Rest early to prepare for the long day ahead.'
        },
        {
          day: 8,
          title: 'Cross Thorong La Pass (5,416m) to Muktinath (3,760m)',
          description: 'The most challenging and rewarding day. An early start to cross the pass before the winds pick up. Descend to the sacred pilgrimage site of Muktinath.'
        },
        {
          day: 9,
          title: 'Trek to Jomsom (2,760m)',
          description: 'Descending through the Kali Gandaki valley, the deepest gorge in the world. The landscape is stark and beautiful, reaching the windy town of Jomsom.'
        },
        {
          day: 10,
          title: 'Fly to Pokhara and Final Departure',
          description: 'An early morning scenic flight to Pokhara, followed by your onward journey or return to Kathmandu.'
        }
      ],
      includes: [
        'All meals (Breakfast, Lunch, Dinner) during the trek',
        'Teahouse accommodation during the trek',
        'English-speaking Guide and experienced trekking porters',
        'Annapurna Conservation Area Permit (ACAP) and TIMS card',
        'Flight from Jomsom to Pokhara',
        'Ground transportation from Kathmandu to Dharapani'
      ],
      excludes: [
        'Personal trekking gear and insurance',
        'Bar bills, mineral water, and snacks',
        'Tips for guides and porters',
        'International flights and Nepal visa'
      ],
      notes: [
        'Trekking backpack and daypack',
        'High-cut waterproof trekking boots',
        'Gore-Tex jacket and down jacket for the pass',
        'Warm layers (fleece, thermal base layers)',
        'Sleeping bag (rated to -15°C)',
        'Trekking poles',
        'Sunscreen, hat, and sunglasses',
        'Personal first aid kit and altitude medication'
      ]
    },
    'zh-tw': {
      title: '安娜普納大環線\n(Annapurna Circuit)',
      subtitle: '穿越多樣地貌的經典旅程，挑戰海拔 5,416 公尺的駝龍埡口',
      overview: '安娜普納大環線（Annapurna Circuit Trek, ACT）以其驚人的地貌多樣性聞名。這趟旅程將帶您從茂密的亞熱帶森林一路攀升至如同西藏高原般的荒漠。旅程中最精彩的是跨越海拔 5,416 公尺的駝龍埡口 (Thorong La Pass)，在那裡您可以將安娜普納與道拉吉里群峰的壯麗全景盡收眼底。這條路線完美結合了自然美景與文化深度，您將穿梭於不同民族的傳統村落，體驗最純粹的尼泊爾山區生活。\n\n請注意：本 10 天行程為為預估標準，我們會根據您的體能狀況與時間需求，彈性調整天數與路線。',
      highlights: [
        '挑戰海拔 5,416 公尺的駝龍埡口 (Thorong La Pass)，完成一大成就',
        '近距離欣賞安娜普納、道拉吉里與馬納斯魯等 8,000 公尺級巨峰',
        '體驗從熱帶叢林到高海拔荒漠的劇烈景觀變化',
        '拜訪神聖的朝聖聖地——穆斯汀 (Muktinath) 神廟',
        '深入馬南 (Manang) 與穆斯汀地區，感受獨特的藏式雪巴文化',
      ],
      itinerary: [
        {
          day: 1,
          title: '從加德滿都驅車前往達拉帕尼 Dharapani (1,960m)',
          description: '這是一段漫長但風景優美的車程，我們沿著翠蘇里河與馬相迪河前行，深入喜馬拉雅山腳下的達拉帕尼村。'
        },
        {
          day: 2,
          title: '健行至恰梅 Chame (2,710m)',
          description: '步道穿梭在松樹林間，沿著馬相迪河緩緩上升。今天您將第一次看見藍容峰 (Lamjung Himal) 與安娜普納二峰。'
        },
        {
          day: 3,
          title: '健行至比桑 Pisang (3,240m)',
          description: '穩定攀升穿過狹窄的谷地與蘋果園，抵達建築風格獨特的比桑村。'
        },
        {
          day: 4,
          title: '健行至馬南 Manang (3,540m)',
          description: '進入安娜普納山的雨影區，地貌變得乾旱荒涼。馬南是一個充滿文化底蘊的大村落，非常適合在此進行高度適應。'
        },
        {
          day: 5,
          title: '馬南：高度適應日',
          description: '休息一天讓身體適應海拔。您可以探索村落、參觀修道院，或到附近的觀景台進行短程徒步。'
        },
        {
          day: 6,
          title: '健行至 Ledar (4,230m)',
          description: '步道離開馬相迪谷地，朝著駝龍埡口穩定攀升，植被也隨著高度增加變得稀疏。'
        },
        {
          day: 7,
          title: '健行至陀龍山腳 Thorong Phedi (4,540m)',
          description: '這是一段短促但吃力的爬升，抵達埡口前的基地。今晚請早點休息，為明天的長征做準備。'
        },
        {
          day: 8,
          title: '跨越駝龍埡口 (5,416m) 前往穆斯汀 Muktinath (3,760m)',
          description: '整趟旅程最具挑戰性也最值得的一天！我們將摸黑出發，在強風起前跨越埡口，隨後下行至神聖的朝聖地穆斯汀。'
        },
        {
          day: 9,
          title: '健行至喬姆索姆 Jomsom (2,760m)',
          description: '下行穿過卡利甘達基河谷（世界上最深的峽谷）。地貌荒涼而壯麗，最終抵達多風的小鎮喬姆索姆。'
        },
        {
          day: 10,
          title: '飛往博卡拉並返回',
          description: '清晨搭乘景觀航班前往博卡拉，接著接續您的後續行程或返回加德滿都。'
        }
      ],
      includes: [
        '健行期間的所有餐食 (早、午、晚餐)',
        '健行期間的沿途山屋住宿',
        '專業英語在地嚮導與經驗豐富的挑夫',
        '安娜普納保護區許可證 (ACAP) 與 TIMS 卡',
        '喬姆索姆至博卡拉的國內線機票',
        '加德滿都至達拉帕尼的專車接送'
      ],
      excludes: [
        '個人登山裝備與旅遊保險',
        '行程中的酒水、礦泉水與零食',
        '給予嚮導與挑夫的小費',
        '國際機票與尼泊爾簽證'
      ],
      notes: [
        '登山背包與隨身攻頂包',
        '高筒防水登山鞋',
        'Gore-Tex 外套與足以應付埡口寒風的羽絨衣',
        '保暖分層衣物（刷毛、排汗底層）',
        '耐寒度達 -15°C 的睡袋',
        '登山杖',
        '防曬乳、遮陽帽與太陽眼鏡',
        '個人常備藥品與高度適應藥物'
      ]
    }
  }
};
