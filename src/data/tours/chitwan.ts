import type { TourData } from './ebc';

export const chitwanTour: TourData = {
  id: 'chitwan',
  heroImage: '/src/assets/chitwan.webp',
  durationDays: 3,
  durationNights: 2,
  difficulty: 'Easy',
  maxAltitude: 415,
  minGroupSize: 1,
  locales: {
    en: {
      title: 'Chitwan National Park Tour',
      subtitle: 'Go on safari through Nepal\’s premier wildlife reserve - spot rhinos, tigers, and over 500 bird species in Chitwan National Park.',
      overview: 'Chitwan National Park is the first national park in Nepal, a preserved area in the Terai Lowlands of south-central Nepal, renowned globally for its incredible biodiversity. Its dense forests and grassy plains are home to rare mammals like the one-horned rhinoceros and the majestic Bengal tiger. The park shelters numerous bird species, including the giant hornbill, and the Rapti River is home to both Gharial and mugger crocodiles. Beyond wildlife, you will also experience the vibrant culture of the indigenous Tharu community.\n\nPlease note: This 3-day itinerary can be fully customized based on your schedule, adjusting the number of safari activities or simply acting as a relaxing nature getaway.',
      highlights: [
        'Explore the UNESCO World Heritage Site - Chitwan National Park',
        'Spot rare one-horned rhinos, Bengal tigers, and various wildlife',
        'Experience dugout canoeing and Jungle Walks',
        'Visit Elephant and Gharial Crocodile Breeding Centers',
        'Enjoy a thrilling Jeep Safari through the dense jungle',
        'Immerse yourself in local Tharu culture and evening cultural dances'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Chitwan & Cultural Experience',
          description: 'We will drive to Chitwan and transfer to your designated resort. After lunch, our guide will take you on a tour of the local Tharu Village to learn about their unique lifestyle. Later in the evening, enjoy a traditional Tharu cultural dance performance.'
        },
        {
          day: 2,
          title: 'Full Day Jungle Safari',
          description: 'A thrilling day full of jungle activities. We will start with a peaceful dugout canoe ride on the Rapti River. Enjoy a guided Jungle Walk to spot wildlife followed by a visit to the Elephant Breeding Centre and Gharial Crocodile Breeding Centre. Before sunset, we will embark on an exhilarating Jeep Safari deep into Chitwan National Park.'
        },
        {
          day: 3,
          title: 'Departure to Kathmandu',
          description: 'Enjoy a relaxing morning and a hearty breakfast at your resort. Afterwards, we will leave Chitwan and drive back to Kathmandu, concluding your unforgettable jungle safari tour. Drop off at your hotel in Kathmandu.'
        }
      ],
      includes: [
        'Accommodation at a comfortable resort in Chitwan',
        'Full Board Package (Breakfast, Lunch, and Dinner during the tour)',
        'All jungle activities mentioned in the itinerary',
        'Experienced local Nature Guide for all safaris and walks',
        'National Park entrance fees and activity permits',
        'Transportation to and from Chitwan'
      ],
      excludes: [
        'Personal expenses (Hot showers, Wi-Fi, battery charging, etc.)',
        'Bar bills, bottled water, and beverages',
        'Travel insurance',
        'Gratuities / Tips for guide and resort staff'
      ],
      notes: [
        'Light and breathable clothing (Preferably neutral colors like green, brown, khaki to blend with nature)',
        'Comfortable walking shoes or sandals',
        'Sun hat, sunglasses, and high SPF sunscreen',
        'Mosquito/Insect repellent cream',
        'Binoculars for wildlife spotting',
        'Camera and extra batteries'
      ]
    },
    'zh-tw': {
      title: '奇旺國家公園叢林探險\n(Chitwan Tour)',
      subtitle: '走進聯合國世界遺產奇旺國家公園，與獨角犀牛、孟加拉虎零距離相遇的叢林探險。',
      overview: '奇旺國家公園（Chitwan National Park）是尼泊爾第一座國家公園，位於中南部特萊平原（Terai Lowlands），以其令人驚嘆的生物多樣性聞名於世。這片茂密的森林與草原，是獨角犀牛與孟加拉虎等珍稀哺乳動物的家園。園區內棲息著豐富的鳥類，在拉普蒂河（Rapti River）上還能乘坐傳統獨木舟，近距離觀賞野生鱷魚。除了大自然的震撼之外，這趟旅程也會帶您走進特萊平原特有的塔魯族（Tharu）部落，感受最道地的文化風情。\n\n請注意：這份 3 天的標準行程均可依照您的時間與興趣進行客製化微調，不論是想增加叢林探險的深度，還是純粹想在渡假村放鬆，我們都能為您安排。',
      highlights: [
        '深入探險聯合國世界自然遺產 —— 奇旺國家公園',
        '尋找珍稀的亞洲獨角犀牛、孟加拉虎與多樣化的野生動物',
        '體驗拉普蒂河獨木舟漂流與徒步叢林探險 (Jungle Walk)',
        '參觀充滿教育意義的大象復育中心與鱷魚繁殖中心',
        '搭乘吉普車 (Jeep Safari) 深入叢林越野，享受被大自然包圍的刺激感',
        '深度體驗塔魯族 (Tharu) 村落文化，並欣賞傳統的塔魯族舞蹈表演'
      ],
      itinerary: [
        {
          day: 1,
          title: '抵達奇旺 (Chitwan) 與部落文化體驗',
          description: '乘車前往奇旺，抵達渡假村後享用豐盛的午餐。下午，當地的自然生態嚮導會帶您漫步參觀塔魯族（Tharu）村落，了解原住民獨特的生活方式。到了晚上，將能欣賞熱情充滿活力的塔魯族傳統文化舞蹈表演。'
        },
        {
          day: 2,
          title: '全日叢林野生探險',
          description: '叢林體驗日，活動包含：在拉普蒂河上體驗寧靜的獨木舟漂流，隨後跟隨自然生態嚮導進行徒步叢林探險，尋找野生動物的蹤跡。我們也會參觀大象與鱷魚復育中心，近距離認識當地的生態保育工作。日落前，將搭乘越野吉普車深入奇旺腹地，享受大自然的震撼。'
        },
        {
          day: 3,
          title: '離開奇旺，返回加德滿都',
          description: '在渡假村享受一個愜意的早晨與美味的早餐。隨後我們將告別這片充滿生機的叢林，搭車返回加德滿都，抵達後我們將安排送您回到飯店，為這趟生態之旅畫下完美的句點。'
        }
      ],
      includes: [
        '奇旺當地渡假村 / 飯店住宿',
        '全包式餐食（行程期間所有的早餐、午餐與晚餐）',
        '行程表內列出的所有叢林探險活動安排',
        '全程配備經驗豐富的當地自然生態嚮導 (Nature Guide)',
        '奇旺國家公園入園門票與各項活動許可證',
        '往返加德滿都與奇旺的交通'
      ],
      excludes: [
        '個人花費（如飯店額外消費、Wi-Fi、洗衣服務等）',
        '酒吧消費、瓶裝水或其他額外飲料',
        '個人旅遊與醫療保險',
        '給予生態嚮導、司機及飯店服務人員的小費'
      ],
      notes: [
        '輕便且透氣的衣物（建議穿著綠、咖、卡其等自然色系的大地色衣服，以免驚擾野生動物）',
        '舒適好走的休閒鞋、運動鞋或涼鞋',
        '防曬帽、太陽眼鏡及防曬乳',
        '防蚊液與蚊蟲咬傷藥膏（叢林蚊蟲較多，必備）',
        '雙筒望遠鏡（有助於觀察遠方的鳥類與野生動物）',
        '相機及充足的備用電池'
      ]
    }
  }
};
