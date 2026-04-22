import type { TourData } from './ebc';

export const poonHillTour: TourData = {
  id: 'poon_hill',
  heroImage: '/src/assets/poon_hill.webp',
  durationDays: 4,
  difficulty: 'Easy / Moderate',
  maxAltitude: 3210,
  locales: {
    en: {
      title: 'Ghorepani Poon Hill Trek',
      subtitle: 'Experience the breathtaking Himalayan sunrise and rich Gurung culture on this classic short trek.',
      overview: 'Poon Hill Trek can be tackled throughout the year. Mountain views improve as you climb higher and sunrise from Poon Hill is breathtaking. This 4-day trek towards Poon Hill is suitable for anyone, including children and those with reasonable fitness. The highest point is Poon Hill at just over 3,210m (10,530ft), so there is minimal chance of being affected by altitude sickness.\n\nThe 4-day Ghorepani Poon Hill trekking is ideal for beginners and hikers with an average fitness level. Some parts are more challenging than others, especially the climbs, but along the way, you will be rewarded with the most beautiful views of the Annapurna range. Meet friendly locals and walk among stunning bamboo and rhododendron forests.',
      highlights: [
        'Beautiful sunrise and panoramic view from Poon Hill (3,210m)',
        'Close-up views of Machhapuchhre, Annapurna, Dhaulagiri, and Nilgiri Himal',
        'Explore the rich culture of the Gurung settlement at Ghandruk village',
        'Trek through lush green temperate forests of oak and vibrant rhododendron'
      ],
      includes: [
        'All meals (Breakfast, Lunch, Dinner) and accommodation in lodge/tea house as mentioned in itinerary',
        'Service of an experienced trek guide',
        'Porters to carry personal baggage (up to 15 kg each)',
        'Accident insurance for staffs and porters',
        'Annapurna Conservation entry permit',
        'Private transportation to and from Pokhara'
      ],
      excludes: [
        'Personal clothing and sleeping bag',
        'Personal accident and health insurance',
        'Emergency evacuation and medical-box',
        'Alcoholic and bottled beverage, laundry, and tips',
        'Hotel accommodation, sightseeing and meals in Kathmandu and Pokhara'
      ],
      notes: [
        'Trekking backpack and daypack',
        'Trekking shoes and sandals',
        'Trekking sticks',
        'Warm jacket (Gore-Tex/fleece) and pullover/warm sweater',
        'Raincoat',
        '4-5 pairs of good quality socks',
        'Trekking trousers and shirts',
        'Sleeping bag',
        'Flashlight or torch',
        'Sunscreen, hat, and sunglasses',
        'Personal water bottle or hydration pack (recommended minimum 2 liters) and water purification tablets/filter',
        'Camera and extra batteries'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Drive to Nayapul from Pokhara and trek to Tikhedhunga (1494m)',
          description: 'It is a one-hour scenic drive from Pokhara to Nayapul and a short walk to Birethanti (1037m) situated on the Modi River. From there, the trail slowly ascends and reaches Tikhedhunga after about a 4-hour walk.'
        },
        {
          day: 2,
          title: 'Trek from Tikhedhunga to Ghorepani (2530m)',
          description: 'After breakfast, ascend the steep stone steps for about 2 hours to Ulleri (2012m). Continue climbing through wet temperate forests of oak and rhododendron to a lunch stop at Nangethanti, then proceed to Ghorepani. Ghorepani offers spectacular views of Dhaulagiri, Machhapuchhre, and Annapurna.'
        },
        {
          day: 3,
          title: 'Trek to Poon Hill (3210m) and hike down to Ghandruk (1920m)',
          description: 'Early morning, embark on a one-hour walk up to Poon Hill (3210m) for a stunning sunrise and panoramic views of the Himalayas. After enjoying the views, return to Ghorepani, then follow a trail towards Tadapani and descend to the beautiful traditional Gurung village of Ghandruk.'
        },
        {
          day: 4,
          title: 'Trek to Birethanti (1080m) to Nayapul and drive to Pokhara',
          description: 'From Ghandruk, take a steep descent on a stone staircase down to the Modi Khola. Walk further to Syauli Bazaar for lunch, and eventually reach the road head at Nayapul. From there, a scenic one-hour drive brings you back to your hotel in Pokhara.'
        }
      ]
    },
    'zh-tw': {
      title: '普恩山健行 (Poon Hill Trek)',
      subtitle: '體驗喜馬拉雅山脈令人屏息的日出美景，漫步於傳統古隆族村落的經典短程路線。',
      overview: '普恩山 (Poon Hill) 健行路線全年皆可前往。隨著海拔攀升，群山美景將逐漸展現在您眼前，而從普恩山頂觀賞的日出更是令人嘆為觀止。這趟為期 4 天的健行路線適合任何體能狀況一般的人，包括孩童。最高點普恩山海拔僅 3,210 公尺，發生高山症的機率極低。\n\n這趟 4 天的行程是初學者與一般健行者的理想選擇。雖然部分路段（特別是部分階梯爬升）會帶來些許挑戰，但沿途壯麗的安娜普納群峰美景絕對值回票價。您將會遇見友善的當地居民，並穿梭在絕美的竹林與滿山遍野的杜鵑花林間。',
      highlights: [
        '在普恩山頂 (3,210公尺) 欣賞絕美的黃金日出與群山環繞全景',
        '近距離飽覽魚尾峰、安娜普納群峰、道拉吉里峰與尼爾吉里峰的壯麗山容',
        '造訪甘德魯克 (Ghandruk) 村落，體驗豐富的古隆 (Gurung) 族傳統文化',
        '漫步於綠意盎然的高山橡樹林與鮮豔的杜鵑花林之中'
      ],
      includes: [
        '行程中包含的所有餐食（早、午、晚餐）及沿途山屋住宿',
        '專業且經驗豐富的健行英語嚮導服務',
        '協助背負個人行李的挑夫（每位挑夫可背負 15 公斤）',
        '嚮導與挑夫的保險與薪資',
        '安娜普納保護區 (ACAP) 入山許可證費用',
        '來回博卡拉 (Pokhara) 的專車接送'
      ],
      excludes: [
        '個人登山裝備與睡袋',
        '旅客的個人旅遊及醫療保險 (高海拔健行必備)',
        '緊急直升機救援與醫療費用',
        '酒精飲料、瓶裝水、洗衣費及給予嚮導/挑夫的小費',
        '加德滿都與博卡拉市區的飯店住宿、市區觀光與餐食'
      ],
      notes: [
        '大型登山背包與輕便隨身攻頂包',
        '防水防滑的高筒登山鞋',
        '登山杖',
        '保暖外套（Gore-Tex 或刷毛材質）及保暖毛衣',
        '輕便雨衣或防雨裝備',
        '4-5 雙吸汗舒適的登山襪',
        '排汗登山長褲與排汗上衣',
        '高山防寒睡袋',
        '頭燈或手電筒',
        '防曬乳、遮陽帽與太陽眼鏡',
        '個人水壺或水袋（建議最少準備 2 公升）與淨水藥片/淨水器',
        '相機與備用電池'
      ],
      itinerary: [
        {
          day: 1,
          title: '從博卡拉驅車前往 Nayapul，健行至 Tikhedhunga (1494m)',
          description: '從博卡拉 (Pokhara) 乘車約一小時即可抵達健行起點 Nayapul，隨後短暫步行至位於 Modi 河畔的 Birethanti (1037m)。從這裡開始，步道將緩緩上升，經過約 4 小時的健行後抵達第一天的休息站 Tikhedhunga。'
        },
        {
          day: 2,
          title: '從 Tikhedhunga 健行至 Ghorepani (2530m)',
          description: '早餐後，迎接大約 2 小時的陡峭石階攀升，途經 Ulleri (2012m) 村莊。接著繼續穿過生長著茂密橡樹與杜鵑花林的濕潤溫帶森林，在 Nangethanti 享用午餐後，便會抵達今晚的住宿點 Ghorepani。這是一個非常受歡迎的村落，從這裡就能清楚眺望道拉吉里峰、魚尾峰與安娜普納群峰。'
        },
        {
          day: 3,
          title: '登頂普恩山 (3210m)，隨後下坡至甘德魯克 (Ghandruk, 1920m)',
          description: '清晨摸黑起床，步行約一小時前往普恩山 (Poon Hill, 3210m) 觀景台。在此您將欣賞到金黃色陽光灑在喜馬拉雅群峰上的震撼日出大景。飽覽美景後返回 Ghorepani 吃早餐，接著步道將轉往 Tadapani 方向，最後一路下坡抵達充滿傳統石板屋與濃厚文化氣息的古隆族聚落——甘德魯克 (Ghandruk)。'
        },
        {
          day: 4,
          title: '從甘德魯克健行至 Nayapul，驅車返回博卡拉',
          description: '離開甘德魯克，沿著石階步道一路陡降至 Modi Khola 河谷。繼續步行前往 Syauli Bazaar 享用午餐並稍作休息，最後抵達公路盡頭 Nayapul。專車將在這邊等候，經過約一小時的風景車程，將您平安送回博卡拉的飯店，結束這趟美好的旅程。'
        }
      ]
    }
  }
};
