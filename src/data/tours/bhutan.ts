import type { TourData } from './ebc';

export const bhutanTour: TourData = {
  id: 'bhutan',
  heroImage: '/src/assets/bhutan.webp',
  durationDays: 4,
  difficulty: 'Easy / Leisure',
  maxAltitude: 3120,
  locales: {
    'en': {
      title: 'Bhutan Highlights Tour (Paro & Thimphu)',
      subtitle: 'Discover the mystical Land of the Thunder Dragon on this essential 4-day journey.',
      overview: 'Bhutan is a pristine Shangri-La, famed for its breathtaking landscapes, vibrant Buddhist culture, and the philosophy of Gross National Happiness. This 4-day, 3-night essential highlights tour takes you from the scenic Paro valley to the capital city of Thimphu. You will witness the majestic Tashichho Dzong, giant Buddha Dordenma, and culminate your trip with a spectacular hike to the iconic Tiger\'s Nest Monastery (Paro Taktsang) clinging to a sheer cliff.\n\nPlease note: The exact itinerary and specific attraction visits are completely customizable based on your preferences. Furthermore, we handle all the logistics including your Bhutan visa and flights from Kathmandu. Detailed inclusion fees will be clearly outlined in your customized quote.',
      highlights: [
        'Hike up to the legendary Tiger\'s Nest Monastery (Paro Taktsang), an architectural marvel on a cliffside',
        'Explore Thimphu, the only capital city in the world without traffic lights',
        'Admire the colossal Buddha Dordenma statue offering panoramic views of the Thimphu Valley',
        'Visit massive historic fortresses like Tashichho Dzong, the seat of Bhutan\'s government',
        'Experience the unparalleled serenity and rich cultural heritage of the Bhutanese people'
      ],
      includes: [
        'Bhutanese tourist visa processing and Sustainable Development Fee (SDF)',
        'Return flights from Kathmandu (KTM) to Paro (PBH)',
        '3 Nights accommodation in government-approved 3-star standard hotels (upgradable to 4/5-star)',
        'Daily breakfast at the hotels',
        'Licensed English-speaking Bhutanese tour guide',
        'All ground transportation within Bhutan using comfortable private vehicles',
        'All entrance fees for museums, monuments, and Dzongs as per the itinerary'
      ],
      excludes: [
        'Personal travel insurance (highly recommended)',
        'Lunches and dinners in Bhutan',
        'Beverages (alcohol, premium coffees, etc.) and laundry services',
        'Tipping for the localized guide and driver at the end of the tour',
        'Pony ride fee for the Tiger\'s Nest hike (optional)'
      ],
      notes: [
        'Bhutan is a deeply religious country. Please wear modest clothing, keeping shoulders and knees covered when entering Dzongs and temples.',
        'A good pair of walking shoes or light hiking boots is essential for the Tiger\'s Nest hike.',
        'Photography is strictly prohibited inside the altars of the temples and monasteries.',
        'The hike to Tiger\'s Nest takes approximately 4-5 hours round trip; physical fitness is recommended, though you can take it at your own pace.'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Paro & Transfer to Thimphu',
          description: 'Experience one of the most spectacular flights in the world as you descend into the Paro Valley surrounded by majestic mountains. Upon arrival, our Bhutanese guide will welcome you. We will then drive to Thimphu (approx. 1.5 hours), the capital of Bhutan. After checking in and having lunch, we will visit the National Memorial Chorten and the impressive Tashichho Dzong (the fortress of the glorious religion). Overnight in Thimphu.'
        },
        {
          day: 2,
          title: 'Thimphu Sightseeing & Drive back to Paro',
          description: 'Start the day by visiting the giant Buddha Dordenma statue, offering expansive views of Thimphu. We will then explore local cultural sites such as the Takin Preserve (to see Bhutan\'s unique national animal) and the National Textile Museum. After lunch, we take a scenic drive back to Paro. In the evening, you can stroll around the charming Paro town to pick up some souvenirs. Overnight in Paro.'
        },
        {
          day: 3,
          title: 'The Legendary Tiger\'s Nest Hike (Paro Taktsang)',
          description: 'Today is the highlight of your Bhutan trip! After breakfast, we take a short drive to the base of the trail leading to Paro Taktsang, famously known as the Tiger\'s Nest. Perched precariously on a cliff 900 meters above the valley floor, this sacred monastery is a sight to behold. The hike takes about 2 to 3 hours up and 1.5 hours down. We will have lunch at the cafeteria halfway down. Overnight in Paro.'
        },
        {
          day: 4,
          title: 'Departure from Paro to Kathmandu',
          description: 'Enjoy your final Bhutanese breakfast. Our team will transfer you to Paro International Airport for your breathtaking return flight to Kathmandu, Nepal, carrying unforgettable memories of the Land of the Thunder Dragon.'
        }
      ]
    },
    'zh-tw': {
      title: '不丹精華 4 天 3 夜\n(帕羅與廷布)',
      subtitle: '踏入神秘的「雷龍之國」，體驗無與倫比的幸福感與純淨美景。',
      overview: '不丹，被譽為最後的香格里拉，以極度迷人的自然風光、深厚的佛教文化，以及重視「國民幸福毛額」的理念聞名於世。這趟 4 天 3 夜的精華之旅將帶您從景色優美的帕羅 (Paro) 一路探索至首都廷布 (Thimphu)。您將親眼見證宏偉的札西卻宗 (Tashichho Dzong)、巨大的釋迦牟尼佛像，並在旅程的重頭戲，健行攀登至懸掛於峭壁之上的標誌性聖地——虎穴寺 (Tiger\'s Nest)。\n\n注意：以上行程為預估標準，我們可依您的時間與興趣彈性調整各景點的參觀安排。我們與在地夥伴包辦不丹簽證與加德滿都來回機票等繁雜實務。詳細費用包含哪些項目，我們都會在報價時清楚列出，讓您安心。',
      highlights: [
        '健行攀登至不丹最著名的地標「虎穴寺」(Paro Taktsang)，近距離感受絕壁上的建築奇蹟',
        '探索「廷布」——全世界上唯一沒有紅綠燈的首都城市',
        '俯瞰廷布山谷，朝聖高達 51.5 公尺的巨大青銅釋迦牟尼大佛',
        '參訪如同巨大軍事堡壘般的「札西卻宗」，一窺不丹政教合一的權力中心',
        '深入體驗不丹人民知足常樂的純樸生活與未受現代化破壞的傳統文化'
      ],
      includes: [
        '不丹旅遊簽證申辦手續及永續發展規費 (SDF)',
        '尼泊爾加德滿都 (KTM) 至不丹帕羅 (PBH) 的來回國際機票',
        '3 晚入住不丹政府認證之 3 星級標準旅館 (可協助升等 4/5 星級)',
        '每日飯店早餐',
        '全程由具國家執照的專業不丹英文導遊隨行解說',
        '在不丹境內所有交通接駁，全程搭乘舒適專用車輛',
        '行程表內所有博物館、寺廟及宗堡的門票費用'
      ],
      excludes: [
        '個人旅遊平安保險 (建議自行購買)',
        '在不丹期間的午餐與晚餐',
        '私人消費如酒精飲料、特色咖啡、洗衣服務等',
        '給予不丹當地導遊與司機的感謝小費',
        '攀登虎穴寺前半段選擇騎乘騾馬的額外費用 (可選)'
      ],
      notes: [
        '不丹為傳統佛教國家，進入任何宗堡 (Dzong) 或寺廟時，請務必穿著有袖上衣與長褲 (不可露出肩膀與膝蓋)。',
        '虎穴寺的健行來回需要約 4 到 5 小時，請務必準備一雙好穿、防滑的運動鞋或輕量登山鞋。',
        '所有神殿及寺廟的「內部」皆嚴禁拍照，請聽從導遊的指示。',
        '雖然虎穴寺的爬升稍微耗時，但沿途風景極佳，且步道安全，您絕對可以依照自己的步調慢慢完成。'
      ],
      itinerary: [
        {
          day: 1,
          title: '飛抵帕羅 (Paro) 並驅車前往首都廷布 (Thimphu)',
          description: '這將是您體驗過最驚險刺激也最美麗的航班之一，飛機將在壯麗的群山環繞下緩緩降落於帕羅山谷。抵達後，不丹當地的導遊會熱情迎接您。接著我們將驅車前往首都廷布 (車程約 1.5 小時)。享用午餐並辦理入住後，展開市區觀光，參訪國家紀念碑 (National Memorial Chorten) 以及宏偉的政教中心——札西卻宗 (Tashichho Dzong)。今晚夜宿廷布。'
        },
        {
          day: 2,
          title: '廷布市區觀光與返回帕羅',
          description: '清晨我們將前往參觀巨大的釋迦牟尼佛像 (Buddha Dordenma)，這裡能俯瞰整個廷布山谷的絕美全景。接著參觀羚牛保護區 (觀察不丹長相奇特的國獸) 以及國家紡織博物館等文化景點。午餐後，我們沿著風景如畫的公路返回帕羅。傍晚您可以在帕羅質樸的街道上散步，挑選精緻的唐卡或手工藝品。今晚夜宿帕羅。'
        },
        {
          day: 3,
          title: '絕壁上的奇蹟：虎穴寺健行 (Tiger\'s Nest)',
          description: '今天是這趟不丹之旅的重頭戲！早餐後，我們驅車前往步道口，準備健行前往名聞遐邇的虎穴寺 (Paro Taktsang)。這座神聖的寺廟奇蹟般地懸掛在距離谷底 900 公尺高的垂直懸崖上，景色非常壯觀。上山徒步約需 2 至 3 小時，下山約 1.5 小時，途中我們會在半山腰的景觀咖啡廳享用午餐與休息。今晚夜宿帕羅。'
        },
        {
          day: 4,
          title: '告別雷龍之國，飛返加德滿都',
          description: '享受在不丹的最後一頓幸福早餐。我們的團隊將送您前往帕羅國際機場，搭乘喜馬拉雅航線飛返尼泊爾加德滿都。'
        }
      ]
    }
  }
};
