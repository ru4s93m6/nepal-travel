import type { TourData } from './ebc';

export const lumbiniTour: TourData = {
  id: 'lumbini',
  heroImage: '/src/assets/lumbini.webp',
  durationDays: 3,
  durationNights: 2,
  difficulty: 'Easy',
  maxAltitude: 150,
  minGroupSize: 1,
  locales: {
    en: {
      title: 'Lumbini Pilgrimage Tour',
      subtitle: 'A spiritual journey to the birthplace of Lord Buddha',
      overview: 'Lumbini is one of the most sacred Buddhist pilgrimage sites in the world, renowned as the birthplace of Siddhartha Gautama, who later became Lord Buddha. Located in the Terai plains of western Nepal, this UNESCO World Heritage Site attracts pilgrims, historians, and peace-seekers globally. \n\nThe serene Lumbini Garden is where Queen Maya Devi gave birth to the future Buddha. The area encompasses three main zones: the Sacred Garden containing the Maya Devi Temple and Ashoka Pillar, the Monastic Zone with beautiful monasteries built by various countries, and the Lumbini Village. This tour offers a profound spiritual experience, exploring ancient ruins and immersing yourself in the serene atmosphere of one of Buddhism\'s most sacred foundational sites.\n\nPlease note: This 3-day itinerary is fully customizable. We can also extend this tour to include other Buddhist pilgrimage sites in Kathmandu and Pokhara upon your request.',
      highlights: [
        'Visit the Sacred Garden and the exact birthplace of Lord Buddha at Maya Devi Temple',
        'Observe the historic Ashoka Pillar erected by Emperor Ashoka in 249 BC',
        'Explore the Monastic Zone featuring diverse international Buddhist architectures',
        'Walk around the serene Pushkarni (Sacred Pond) and the Eternal Peace Flame',
        'Optional visit to the archaeological ruins of Tilaurakot (ancient Kapilvastu)'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Drive from Kathmandu to Lumbini',
          description: 'After breakfast, your driver will receive you at your hotel for a scenic countryside drive down to the plains of Lumbini. The drive takes approximately 7 to 8 hours. Upon arrival, check-in at your hotel and rest.'
        },
        {
          day: 2,
          title: 'Full Day Lumbini Sightseeing Tour',
          description: 'After breakfast, we will spend the day exploring the profound historical sites of Lumbini. We will visit the tranquil Mayadevi Temple, the sacred pond, and the Ashoka Pillar. We will then explore the massive Monastic Zone, divided into the East (Theravada monasteries) and West (Mahayana monasteries), walking among the beautiful temples built by nations from all over the world.'
        },
        {
          day: 3,
          title: 'Morning Exploration & Return to Kathmandu',
          description: 'After breakfast at the hotel, we typically arrange a morning visit to the nearby religious and archaeological ruins at Tilaurakot, the ancient capital city of Kapilvastu where Buddha spent his early princely life. Afterwards, we drive back to Kathmandu and drop you off at your hotel.'
        }
      ],
      includes: [
        '2 nights accommodation at a hotel in Lumbini',
        'Daily breakfast at the hotel'
      ],
      excludes: [
        'Lunches and Dinners during the tour',
        'Personal expenses',
        'Tips and gratuities for the driver and hotel staff'
      ],
      notes: [
        'Comfortable walking shoes (slip-on shoes are recommended as you need to take them off before entering temples)',
        'Modest clothing suitable for religious sites (covering shoulders and knees)',
        'Sun hat, sunglasses, and sunscreen',
        'Mosquito repellent (the Terai region can be prone to mosquitoes in the evening)',
        'A small daypack for water and personal items'
      ]
    },
    'zh-tw': {
      title: '藍毗尼 佛教聖地朝聖之旅\n(Lumbini Tour)',
      subtitle: '走進佛陀的誕生地，感受純粹的心靈平靜與歷史底蘊',
      overview: '藍毗尼（Lumbini）位於尼泊爾西部的特萊平原（Terai），是全球佛教徒心中最神聖的朝聖地，更是聯合國教科文組織（UNESCO）認證的世界文化遺產。西元前 623 年，摩耶夫人（Queen Maya Devi）就是在這裡的娑羅雙樹（Sal grove）下，生下了後來的佛陀—悉達多太子（Siddhartha Gautama）。\n\n這座廣大而寧靜的聖園分為三大區域：包含摩耶夫人廟與阿育王石柱的「神聖花園」、匯集世界各國不同建築風格佛寺的「寺廟區」，以及「藍毗尼村」。這趟旅程將帶您穿梭於古老的遺跡中，親身感受佛法發源地的神聖與祥和。\n\n請注意：這份 3 天的標準行程均可依照您的需求完全客製化。我們也可以根據您的需求，將行程延伸至加德滿都或博卡拉的其他佛教朝聖景點。',
      highlights: [
        '親臨神聖花園，參觀佛陀誕生地的摩耶夫人廟 (Maya Devi Temple)',
        '瞻仰見證歷史的阿育王石柱 (Ashoka Pillar) 與神聖水池 (Pushkarni)',
        '漫步於龐大的世界寺廟區，欣賞各國捐建、風格迥異的佛教建築',
        '感受世界和平塔與長明不滅的和平之火 (Eternal Peace Flame)',
        '探訪古迦毗羅衛國首都遺址——提羅拉科特 (Tilaurakot)，佛陀出家前生活的地方'
      ],
      itinerary: [
        {
          day: 1,
          title: '從 加德滿都 乘車前往 藍毗尼 (Lumbini)',
          description: '早餐過後，司機將前往飯店接待，並沿著蜿蜒的鄉村公路駛向尼泊爾南部的平原地帶。車程大約 7 到 8 小時，沿途能欣賞尼泊爾豐富的地貌變化。抵達藍毗尼後，辦理入住手續並在飯店好好休息。'
        },
        {
          day: 2,
          title: '藍毗尼 聖地全日深度參訪',
          description: '享用早餐後，我們將全天沉浸在藍毗尼的歷史與寧靜中。我們將拜訪摩耶夫人廟、菩提樹與阿育王石柱。隨後漫步於宏大的寺廟區，這裡分為由各國建造的上座部佛教（南傳）與大乘佛教（北傳）寺院，您能在此看見全球佛教文化薈萃於一處的奇妙景象。'
        },
        {
          day: 3,
          title: '晨間探索 與 返回 加德滿都',
          description: '早餐過後，我們通常會安排前往附近的提羅拉科特（Tilaurakot）考古遺址，這裡是悉達多太子放棄王位、出家前所居住的迦毗羅衛國皇宮舊址。帶著滿滿的平和與感動，我們將搭乘專車返回加德滿都，抵達後我們將安排送您回到飯店。'
        }
      ],
      includes: [
        '加德滿都往返藍毗尼的交通',
        '藍毗尼當地飯店住宿',
        '飯店每日早餐'
      ],
      excludes: [
        '個人旅遊花費',
        '給予司機與飯店服務人員的小費'
      ],
      notes: [
        '舒適方便穿脫的鞋子（進入許多寺廟建築皆需要脫鞋）',
        '符合宗教聖地禮儀的保守服裝（請避免穿著未過膝短褲或無袖上衣）',
        '防曬帽、太陽眼鏡及防曬乳',
        '防蚊液（平原地帶傍晚可能有蚊蟲）',
        '隨身攜帶飲用水的小背包'
      ]
    }
  }
};
