import type { TourData } from './ebc';

export const kathmanduValleyTour: TourData = {
  id: 'kathmandu_valley',
  heroImage: '/src/assets/kathmandu_valley.webp',
  durationDays: 4,
  difficulty: 'Easy / Leisure',
  maxAltitude: 2175,
  locales: {
    'en': {
      title: 'Kathmandu Valley Tour',
      subtitle: 'A fascinating 4-day showcase of rich culture, ancient art, and living traditions.',
      overview: 'This comprehensive 4-day tour takes you on an exotic journey across the Kathmandu Valley. Encircled by green terraced hills, the valley is the cultural and political hub of Nepal, where Hinduism and Buddhism perfectly intertwine. You will explore three distinctive ancient cities—Kathmandu, Bhaktapur, and Patan—each boasting world-class temples, stunning Newari wood-crafted palace squares, and vibrant daily festivals. Included is a scenic drive to the hill station of Nagarkot to witness a spectacular Himalayan sunrise.\n\nPlease note: The above itinerary is a standard estimate. We can flexibly adjust the visits to various squares and temples based on your time and interests. The specific entrance fees included in the tour will be clearly specified in our formal quote to ensure transparency.',
      highlights: [
        'Explore the intricate wooden architectures of Patan and Bhaktapur Durbar Squares',
        'Soak in the spiritual peace at Swayambhunath (Monkey Temple) and Boudhanath Stupa',
        'Witness the profound Hindu rituals at the sacred Pashupatinath Temple along the Bagmati River',
        'Enjoy a panoramic sunrise over the Himalayan range from the hill station of Nagarkot',
      ],
      includes: [
        'Airport Pick-Up and Drop-off services',
        'All ground transportation by a comfortable private vehicle for the entire tour',
        '3 Nights accommodation in Kathmandu at a quality Boutique Hotel (Bed & Breakfast plan)',
        'Comprehensive guided sightseeing tours to all scheduled heritage sites'
      ],
      excludes: [
        'Professional City Tour Guide (Available as an optional upgrade upon request)',
        'International flights, Nepal entry visa fees, and departure taxes',
        'Travel insurance and emergency evacuation',
        'Lunches and dinners in Kathmandu/Nagarkot',
        'Personal expenses (laundry, phone calls, drinks, tips for driver/guide)'
      ],
      notes: [
        'Casual, comfortable clothing suited for city walking and temple visits',
        'Modest attire is required when visiting Hindu temples and Buddhist stupas (cover shoulders and knees)',
        'Comfortable walking shoes or sneakers',
        'A light jacket or sweater, especially for the cool morning in Nagarkot',
        'Camera and extra memory cards to capture the stunning ancient architecture'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Kathmandu',
          description: 'Welcome to Nepal! Upon your arrival at Tribhuvan International Airport, our representative will warmly receive you and transfer you to your boutique hotel in Kathmandu. Take the rest of the day to relax or stroll around the vibrant streets of Thamel.'
        },
        {
          day: 2,
          title: 'Kathmandu City Sightseeing Tour',
          description: 'Today is dedicated to exploring the spiritual and historical heart of the valley. We will visit the architectural marvel of Patan Durbar Square, followed by the hilltop Swayambhunath Temple (Monkey Temple) offering panoramic city views. We will also visit the gigantic Boudhanath Stupa, a center of Tibetan Buddhism, and the highly sacred Hindu precinct of Pashupatinath Temple.'
        },
        {
          day: 3,
          title: 'Bhaktapur and Nagarkot Sightseeing Tour',
          description: 'In the morning, we drive to the medieval city of Bhaktapur. Known as an open-air museum, Bhaktapur Durbar Square mesmerizes with its timeless pottery squares and the famous 55-Window Palace. Later in the afternoon, we drive up to Nagarkot (2,175m), a beautiful hill station renowned for its sweeping sunset and sunrise views over the Himalayas. Overnight back at the Kathmandu hotel.'
        },
        {
          day: 4,
          title: 'Final Departure',
          description: 'Enjoy your final breakfast in Nepal. Depending on your flight schedule, you can enjoy some last-minute souvenir shopping or leisure time. Our representative will transfer you to the airport for your onward journey or departure.'
        }
      ]
    },
    'zh-tw': {
      title: '加德滿都谷地文化之旅 (4天3夜)',
      subtitle: '深入探索古老王朝的藝術精華與山谷間的信仰之美。',
      overview: '這趟 4 天 3 夜的精華旅程將帶您深入探索加德滿都谷地豐富的文化、藝術與傳統。這裡被翠綠的山谷與梯田環繞，不僅擁有世界文化遺產，更能讓您窺探尼泊爾獨有的印度教與佛教交融之美。我們將造訪加德滿都、帕坦與巴德崗三座古都，體驗其細緻的紐瓦爾 (Newari) 木雕建築、宏偉的佛塔與神聖的信仰中心。除了市區巡禮，行程也安排前往著名山城納加闊特 (Nagarkot)，讓您在清晨遠眺喜馬拉雅雪山的壯麗日出。\n\n請注意：以上行程為預估標準，我們可依您的時間與興趣彈性調整各古蹟廣場的參觀安排。詳細費用包含之門票項目，亦將於正式報價中清楚列明，以確保資訊透明與行程彈性。',
      highlights: [
        '漫步於帕坦 (Patan) 與巴德崗 (Bhaktapur) 杜巴廣場，欣賞歷經歲月洗禮的精緻木雕與宮殿',
        '造訪猴廟 (Swayambhunath) 與博達哈大佛塔 (Boudhanath)，感受濃厚的藏傳佛教寧靜氛圍',
        '參訪尼泊爾最大的印度教聖地——帕殊帕提那神廟 (Pashupatinath，又稱燒屍廟)',
        '前往納加闊特 (Nagarkot) 山城，欣賞絕美的喜馬拉雅山脈日出與日落'
      ],
      includes: [
        '機場專車接送服務 (接機與送機)',
        '行程期間所有市區觀光與跨區移動的專屬交通',
        '3 晚加德滿都住宿',
        '所有表定景點的觀光行程安排'
      ],
      excludes: [
        '專業市區導覽員 (若有需求，可額外加購中/英文專業導遊服務)',
        '國際來回機票、尼泊爾落地簽證費及離境稅',
        '個人旅遊平安險與緊急醫療救援險',
        '加德滿都與納加闊特期間的午餐與晚餐',
        '個人開銷（如洗衣、國際電話、飲料水酒、以及給予司機或導遊的小費）'
      ],
      notes: [
        '建議穿著輕便舒適的休閒服飾，方便在市區古蹟間徒步參觀',
        '參觀印度教神廟與佛教佛塔時請穿著端莊（避免無袖上衣及未過膝短褲）',
        '一雙好穿、耐走的平底鞋或運動鞋',
        '納加闊特 (Nagarkot) 山區清晨偏涼，請記得準備一件保暖外套',
        '記得攜帶相機與足夠的記憶卡，這裡的古建築與人文非常有拍攝價值'
      ],
      itinerary: [
        {
          day: 1,
          title: '抵達加德滿都',
          description: '歡迎來到尼泊爾！班機抵達特里布萬國際機場後，我們的代表會在大廳熱情迎接您，並由專車接送至加德滿都的飯店辦理入住。您可以利用這天剩下的時間在飯店好好休息，或是到附近熱鬧的塔美爾區 (Thamel) 逛逛。'
        },
        {
          day: 2,
          title: '加德滿都市區精華導覽',
          description: '今天將進行一場深度的精神與歷史文化之旅。我們首先前往擁有「藝術之城」美譽的帕坦杜巴廣場，欣賞極其細緻的古老建築；接著前往位於山丘上、能俯瞰整個市區的斯瓦揚布納特(Swayambhunath，俗稱猴廟)；隨後拜訪世界最大的博達哈大佛塔(Boudhanath)，最後來到巴格馬蒂河畔神聖的印度教重地帕殊帕提那神廟(Pashupatinath)。'
        },
        {
          day: 3,
          title: '巴德崗古城與納加闊特山城',
          description: '早上我們乘車前往巴德崗杜巴廣場(Bhaktapur)。這座被譽為「中世紀露天博物館」的古城，保留了最完整的紅磚步道、陶器廣場與著名的「55窗宮」，讓人彷彿走入時光隧道。下午，我們驅車前往海拔 2,175 公尺的避暑勝地納加闊特(Nagarkot)，傍晚在此欣賞壯麗的山景與日落。'
        },
        {
          day: 4,
          title: '滿載回憶，期待下次相見',
          description: '享受在尼泊爾的最後一頓美味早餐。若距離班機起飛還有一點時間，您可以在市區進行最後的紀念品採購。隨後，我們的專車將根據您的航班時間，準時送您前往國際機場，帶著滿滿的回憶踏上歸途。期待下次在尼泊爾與您相見！'
        }
      ]
    }
  }
};
