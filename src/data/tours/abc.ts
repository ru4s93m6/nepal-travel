import type { TourData } from './ebc';

export const abcTour: TourData = {
  id: 'abc',
  heroImage: '/src/assets/annapurna.webp',
  durationDays: 7,
  durationNights: 6,
  difficulty: 'Moderate to Strenuous',
  maxAltitude: 4230,
  minGroupSize: 2,
  locales: {
    en: {
      title: 'Annapurna Base Camp Trek',
      subtitle: 'A spectacular journey into the heart of the Himalayas, surrounded by towering peaks',
      overview: 'The Annapurna Base Camp (ABC) trek is a magical high-altitude journey into a spectacular glacier basin naturally arrayed as an amphitheater, also known as the Annapurna Sanctuary. Surrounded by the towering peaks of the Annapurna range and the iconic Machhapuchhre (Fishtail) mountain, this 7-day trek begins from Nayapul and passes through picturesque Gurung villages, dense rhododendron forests, and soothing natural hot springs at Jhinu Danda. ABC offers breathtaking panoramic views in a relatively shorter timeframe.\n\nPlease note: This 7-day timeframe starting from Pokhara is an estimated standard. The actual itinerary can be flexibly adjusted or extended based on your physical condition, acclimatization, and personal requirements.',
      highlights: [
        'Stunning 360-degree mountain panorama at Annapurna Base Camp',
        'Trekking through traditional Gurung Villages like Ghandruk',
        'Relaxing in the natural hot springs at Jhinu Danda',
        'Close-up views of the majestic Machhapuchhre (Fishtail) peak',
        'Exploring the unique biodiversity of the Annapurna Conservation Area',
        'Fully supported tea-house based trek'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Drive to Nayapul - Trek to Ghandruk (1,940m)',
          description: 'On the first day, after breakfast we will drive to Nayapul, the starting point — about a one and a half hour drive from Pokhara (1,050m). From Nayapul the uphill trail to Ghandruk (1,940m) is filled with panoramic views of snowcapped mountains. Along the way we pass through small villages such as Chimrong, Syauli Bazar, and Chame. Upon crossing the suspension bridge over Khumnu Khola, we reach Ghandruk, a terraced settlement of stone houses mostly inhabited by the Gurung community. Highlights: Enjoy close-up views of Fishtail, Annapurna South, and Hiuchuli, and get acquainted with the rich culture and traditions of the Gurung community at the Gurung Museum in Ghandruk.'
        },
        {
          day: 2,
          title: 'Trek from Ghandruk to Sinuwa (2,360m)',
          description: 'Early in the morning at this juncture, we will climb up to Ghandruk-kot for an hour then a steep descent will take us to the Kimron Khola. The walk after a steep ascent from Kimron Khola is easy. As we continue climbing up to Sinuwa (2360m), we will encounter the mighty peak Annapurna South above the village and the Fishtail Mountain (Machhapuchhare) facing the valley.'
        },
        {
          day: 3,
          title: 'Trek from Sinuwa to Deurali (3,230m)',
          description: 'We walk through the pretty forest to Kuldi Ghar, before the route goes steeply down a bank of rock and then levels out, running through riverside bamboo thickets along the base of the gorge. Then the track winds steeply up through deep bamboo and rhododendron forest.'
        },
        {
          day: 4,
          title: 'Trek from Deurali to Annapurna Base Camp (4,230m)',
          description: 'The track remains on the West Bank of the Modi, now flowing through a more open valley, and eventually emerges into the Sanctuary. Straight-ahead is the high lateral moraine of the South Annapurna glacier and the Modi follows a deep cliff to the right. This is the site of Annapurna Base camp (4230m) from which can be seen a spectacular panorama of mountains.'
        },
        {
          day: 5,
          title: 'Trek from ABC to Dobhan (2,600m)',
          description: 'Annapurna Base Camp sanctuary boasts a breathtaking, unobstructed 360-degree panoramic view. Upon arriving at this spectacular viewpoint, we soak in the mesmerizing views of Machhapuchhre, Annapurna South, Annapurna I, Hiuchuli, and surrounding peaks. After savoring the highlight of the trek, we begin our descent from Annapurna Base Camp back to Dobhan (2,600m) via the easiest descending route.'
        },
        {
          day: 6,
          title: 'Trek from Dobhan to Jhinu (1,780m)',
          description: 'From Dobhan, we continue to Chhomrong from where the trail descends through forests to Modi Khola and then the trail ascends to Jhinu. After reaching Jhinu we will hike for 45 mins to Modi Khola where we drop by hot spring to relax our tired muscles.'
        },
        {
          day: 7,
          title: 'Trek to Kimche - Drive back to Pokhara',
          description: 'After breakfast, we will leave the village and walk down to Kimche. From Kimche we drive back to Pokhara which takes about 2 and a half hours and transfer to Hotel.'
        }
      ],
      includes: [
        'All meals (Breakfast, Lunch, Dinner) during the trek',
        'Experienced English speaking guide',
        'All entrance fees, Trekking permits & TIMS card',
        'Necessary Annapurna Conservation Area entry fees',
        'First aid box during the trip',
        'Necessary porters during the trek',
        'Bus to starting point (approx. 2hr drive) and from ending point back to Pokhara',
        'Insurance for all Trekking Staff',
        'Lodge/Teahouse accommodation during the trek'
      ],
      excludes: [
        'All drinks and beverages during the trek',
        'Travel insurance for the guest (Mandatory)',
        'Tips for driver, guides and porters',
        'Personal expenses e.g. phone calls, laundry, bar bills, hot showers & extra porters',
      ],
      notes: [
        'Trekking backpack (40-50L) and daypack',
        'High-cut waterproof trekking boots and comfortable sandals/shoes for teahouses',
        'Gore-Tex hard shell jacket and fleece mid-layer',
        'Moisture-wicking base layers and quick-dry trekking pants',
        'Sleeping bag (Comfortable to -10°C to -15°C)',
        'Trekking poles (two recommended)',
        'Warm beanie, sun hat, and neck gaiter (Buff)',
        'Windproof/waterproof gloves and warm thermal gloves',
        'Anti-UV sunglasses, high-SPF sunscreen, and lip balm',
        'Personal first aid kit and necessary medication',
        'Water bottle or hydration bladder (min 2L) and purification tablets/filter',
        'Headlamp with spare batteries',
        'Swimsuit for the hot springs at Jhinu Danda'
      ]
    },
    'zh-tw': {
      title: '安娜普納基地營健行\n(ABC Trek)',
      subtitle: '深入喜馬拉雅群山環繞的聖殿，飽覽 360 度雪山全景',
      overview: '安娜普納基地營（ABC）健行是一趟充滿魔力的高海拔旅程，帶領您深入這座被群山環繞的冰川盆地，也被稱為「安娜普納聖殿」（Annapurna Sanctuary）。被壯麗的安娜普納群峰以及標誌性的魚尾峰（Machhapuchhre）緊緊包圍，這趟為期 7 天的行程從 Nayapul 出發，途中會經過如詩如畫的古隆族（Gurung）村落、茂密的杜鵑花林，並有機會在 Jhinu Danda 享受天然野溪溫泉。比起其他高海拔路線，ABC 健行能在相對較短的天數內，讓您飽覽令人屏息的 360 度群山全景。\n\n請注意：這個從博卡拉出發的 7 天行程為預估標準，實際行程皆可視旅客的體能狀況、高山適應程度與個人需求進行彈性調整與延長。',
      highlights: [
        '抵達海拔 4,230 公尺的安娜普納基地營，享受 360 度雪山全景',
        '穿梭於 Ghandruk 等充滿傳統風情的古隆族聚落',
        '在 Jhinu Danda 享受放鬆身心的天然野溪溫泉',
        '近距離飽覽標誌性山岳「魚尾峰（Machhapuchhre）」的壯麗風采',
        '探索安娜普納保護區獨特且豐富的自然生態與林地',
        '全程由專業團隊支援的山屋健行體驗'
      ],
      itinerary: [
        {
          day: 1,
          title: '驅車前往 Nayapul - 健行至 Ghandruk (1,940m)',
          description: '第一天早餐後，我們將驅車前往健行起點 Nayapul（1050m），從博卡拉出發車程約一個半小時。從 Nayapul 出發，通往 Ghandruk（1940m）的上坡步道可以欣賞到白雪皚皚的群山全景。沿途會經過 Chimrong、Syauli Bazar 和 Chame 等小村莊。穿過 Khumnu Khola 上方的吊橋後，便抵達 Ghandruk，這是一個建立在山坡上的石板屋聚落，主要由古隆（Gurung）族人居住。亮點：近距離欣賞魚尾峰（Fishtail）、安娜普納南峰（Annapurna South）和 Hiuchuli 峰的壯麗景色，並可以在 Ghandruk 的 Gurung 博物館了解古隆族簡單而豐富的傳統文化。'
        },
        {
          day: 2,
          title: '健行至 Sinuwa (2,360m)',
          description: '清晨時分，我們將花一小時向上攀爬至 Ghandruk-kot，隨後經過一段陡峭的下坡抵達 Kimron Khola。從 Kimron Khola 經過一段陡上的攀爬後，步道會變得平緩好走。當我們繼續爬升前往 Sinuwa（2360m）時，將能看見村莊上方壯麗的安娜普納南峰，以及面向山谷的魚尾峰（Machhapuchhare）。'
        },
        {
          day: 3,
          title: '健行至 Deurali (3,230m)',
          description: '我們將穿過美麗的森林抵達 Kuldi Ghar，隨後路線沿著岩石河岸急劇下降並趨於平緩，穿梭在峽谷底部的河畔竹林之中。接著，步道會在茂密的竹林與杜鵑花林間蜿蜒陡升。'
        },
        {
          day: 4,
          title: '挺進安娜普納基地營 ABC (4,230m)',
          description: '步道繼續沿著 Modi 河的西岸前進，穿過一個更加開闊的山谷，最終進入安娜普納保護區（Sanctuary）。正前方是南安娜普納冰川高聳的側磧，Modi 河則順著右側的深邃懸崖流淌。這裡便是安娜普納基地營（4230m），從這裡您可以飽覽壯觀的 360 度群山全景。'
        },
        {
          day: 5,
          title: '從 ABC 下撤至 Dobhan (2,600m)',
          description: '安娜普納基地營坐擁無遮蔽的 360 度環繞全景。抵達這個絕佳觀景點後，我們將盡情欣賞魚尾峰、安娜普納南峰、安娜普納一峰、Hiuchuli 等群峰令人著迷的壯麗景色。行程的高潮在今天告一段落，隨後我們將從安娜普納基地營折返，走一條相對輕鬆的下坡路線前往 Dobhan（2,600m）。'
        },
        {
          day: 6,
          title: '下撤至 Jhinu (1,780m)',
          description: '從 Dobhan 出發，我們繼續前往 Chhomrong，接著步道將穿過森林下降至 Modi Khola，隨後再次爬升抵達 Jhinu。抵達 Jhinu 後，我們將步行約 45 分鐘前往 Modi Khola 畔，在此您可以享受天然溫泉，放鬆疲憊的雙腿。'
        },
        {
          day: 7,
          title: '下撤至 Kimche - 驅車返回博卡拉 (Pokhara)',
          description: '早餐後，我們將離開村莊往下步行至 Kimche。從 Kimche 搭車返回博卡拉，車程約需兩個半小時，抵達後接送至博卡拉的下榻飯店，結束這趟精彩的健行之旅。'
        }
      ],
      includes: [
        '健行期間的所有餐食 (早、午、晚餐)',
        '專業英語在地嚮導',
        '所有入場費、入山許可證及 TIMS 卡',
        '安娜普納保護區 (ACAP) 入園規費',
        '行程期間備有急救箱',
        '健行期間負責背負行李的挑夫',
        '前往登山口及返回博卡拉之專車接送',
        '所有嚮導與挑夫的保險',
        '健行期間的沿途山屋/客棧住宿'
      ],
      excludes: [
        '健行期間的所有酒水、飲料及礦泉水',
        '旅客的個人旅遊保險 (高海拔健行必備)',
        '給予司機、嚮導與挑夫的小費',
        '私人花費（如電話費、洗衣、酒吧酒水、山上熱水洗澡及額外的挑夫）',
      ],
      notes: [
        '大型登山背包（40-50L）與輕便隨身攻頂包',
        '高筒防寒防水登山鞋與抵達山屋用的輕便拖鞋/涼鞋',
        'Gore-Tex 等級防風防水外套及保暖刷毛中層衣',
        '排汗透氣衣物數件與快乾長褲',
        '高山極地專用睡袋（耐寒度建議達 -10°C 至 -15°C）',
        '登山杖（建議攜帶兩支）',
        '保暖毛帽、遮陽帽與防風圍脖',
        '防風防水手套與吸汗保暖手套',
        '抗 UV 高山太陽眼鏡及高係數防曬乳、護唇膏',
        '個人常備藥品、高山症藥物',
        '個人水壺或水袋（建議最少準備 2 公升）與淨水藥片/淨水器',
        '頭燈及備用電池',
        '一套帶去 Jhinu Danda 泡溫泉用的泳衣'
      ]
    }
  }
};
