export interface DailyItinerary {
  day: number;
  title: string;
  description: string;
}

export interface TourContent {
  title: string;
  subtitle: string;
  overview: string;
  highlights: string[];
  itinerary: DailyItinerary[];
  includes: string[];
  excludes: string[];
  notes: string[];
}

export interface TourData {
  id: string;
  heroImage: string;
  mapImage?: string;
  durationDays: number;
  durationNights: number;
  difficulty: string;
  maxAltitude: number;
  minGroupSize: number;
  locales: {
    'zh-tw': TourContent;
    en: TourContent;
  };
}

export const ebcTour: TourData = {
  id: 'ebc',
  heroImage: '/src/assets/everest.webp',
  durationDays: 15,
  durationNights: 14,
  difficulty: 'Strenuous',
  maxAltitude: 5365,
  minGroupSize: 2,
  locales: {
    en: {
      title: 'Everest Base Camp Trek',
      subtitle: 'A journey to the top of the world, experiencing Sherpa culture and glacial wonders',
      overview: 'The Everest Base Camp (EBC) trek is one of the most iconic high-altitude treks in the world. This journey takes you deep into Sagarmatha National Park, trekking through traditional Sherpa villages, crossing spectacular suspension bridges, and admiring towering peaks including Mount Everest, Lhotse, and Ama Dablam. We will visit the famous Tengboche Monastery to experience the tranquility of high-altitude devotion, eventually reaching Everest Base Camp at 5,364 meters, and ascending Kala Patthar for a breathtaking sunrise over Everest.\n\nPlease note: The 15-day timeframe is an estimated standard. The actual itinerary will be flexibly adjusted based on your physical condition and acclimatization. Our top priority is to ensure you complete this magnificent journey safely and successfully.',
      highlights: [
        'Scenic flight to and from Lukla',
        'Experiencing life as the “mountain people” live in the heart of the Himalayas',
        'Visiting Tengboche Monastery with its backdrop of Ama Dablam',
        'Remarkable views of the Khumbu Icefall',
        'Hiking up Kalapatthar (5,555m) for sunrise views of Mt. Everest',
        'Standing at Everest Base Camp and walking on the Khumbu glacier'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Kathmandu',
          description: 'Our airport representative will be receiving you at Tribhuvan International airport, Kathmandu and will be displaying our signboard outside the airport terminal. You will be then transferred to your hotel in our private tourist vehicle.'
        },
        {
          day: 2,
          title: 'Sightseeing around Kathmandu valley',
          description: 'After a hearty breakfast, at 8:30 am your sightseeing trip will start. You will have a private vehicle and a professional tour guide at your disposal to visit local attractions.'
        },
        {
          day: 3,
          title: 'Fly to Lukla (2,804m), trek to Phakding (2,610m)',
          description: 'An early morning start takes us to the airport for the 35-minute scenic flight to Lukla. Upon arrival, your guide will brief you and introduce our porters. After exploring the village briefly, we begin our trek descending towards the Dudh Koshi River, joining the main trail to Namche Bazaar. The walk is easy, passing through the small village of Ghat before reaching Phakding. Overnight at Guesthouse.'
        },
        {
          day: 4,
          title: 'Trek to Namche Bazaar (3,441m)',
          description: 'We continue trekking along the banks of the Dudh Koshi, crossing this majestic river many times on exciting suspension bridges laden with prayer flags. After entering Sagarmatha National Park, the trail climbs steeply with breathtaking views. Namche Bazaar, known as the Gateway to Everest, is home to quality restaurants, hotels, lodges, shops, money exchanges, and bakeries. Overnight at Guesthouse.'
        },
        {
          day: 5,
          title: 'Namche Bazaar Acclimatization day',
          description: 'We will spend a day here to acclimatize and adjust to the thinning air, including a short trek to a museum celebrating traditional Sherpa customs. We hike up to Syangboche Airport and the Everest View Hotel for rewarding views of the Himalayas and stunning panoramas of Khumbu peaks. Overnight at Guesthouse.'
        },
        {
          day: 6,
          title: 'Trek to Tengboche Monastery (3,860m)',
          description: 'The trek continues along the rushing glacial waters of the Dudh Koshi with magnificent views. On reaching Tengboche, you will see the local monastery featuring incredibly ornate wall hangings, a 20-foot sculpture of Buddha, and the robes of the Lamas. We will observe a prayer ceremony either in the evening or morning depending on our arrival. Overnight at Guesthouse.'
        },
        {
          day: 7,
          title: 'Trek to Dingboche (4,350m)',
          description: 'From Tengboche the trail drops to Debuche, crosses another exciting suspension bridge on the Imja Khola, and climbs to Pangboche amongst thousands of mani stones. Our uphill trek continues to the quaint Sherpa village of Dingboche with exquisite views of Lhotse, Island Peak, and Ama Dablam. We take our time to avoid getting affected by altitude. Overnight at Guesthouse.'
        },
        {
          day: 8,
          title: 'Dingboche Acclimatization day',
          description: 'Today you can enjoy another essential day for acclimatization. You can rest or take short exploratory hikes around the village. Overnight at Guesthouse.'
        },
        {
          day: 9,
          title: 'Trek to Lobuche (4,910m)',
          description: 'The trail continues along the lateral moraine of the Khumbu Glacier, passing stone memorials for climbers who have perished on nearby summits. We continue to climb towards Lobuche, which is just a few huts at the foot of giant Lobuche peak. Some breathing problems may arise due to the altitude. Overnight at Guesthouse.'
        },
        {
          day: 10,
          title: 'Trek to Everest Base Camp (5,365m) and back to Gorak Shep (5,180m)',
          description: 'This is a big and difficult day walking along the Khumbu Glacier up to Everest Base Camp, the closest you can get to Mt. Everest without mountaineering equipment. There will likely be teams about to attempt the summit. The view of the Khumbu Icefall is spectacular. We return to Gorak Shep for the night. Overnight at Guesthouse.'
        },
        {
          day: 11,
          title: 'Hike to Kalapatthar (5,555m) and trek down to Pheriche (4,200m)',
          description: 'One of the most difficult yet rewarding days. Early morning is spent climbing Mt. Kala Patthar. The ascent is demanding but offers the most magnificent mountain panorama: Everest towers directly ahead alongside Nuptse, Pumori, and Lhotse. We make a quick descent to Gorak Shep, then trek down to Pheriche. Overnight at Guesthouse.'
        },
        {
          day: 12,
          title: 'Trek to Namche Bazaar (3,441m)',
          description: 'From Pheriche we take a slightly different route down to Orsho, then to Pangboche village, home to the oldest monastery in the region (said to contain the scalp and bones of a Yeti). Leaving the high mountains behind, our descent takes us through Tengboche Monastery before arriving back at Namche Bazaar in the afternoon. Overnight at Guesthouse.'
        },
        {
          day: 13,
          title: 'Trek to Lukla (2,804m)',
          description: 'Finally we return to Lukla where the trek began, which will seem like yesterday. A great time to reflect on the trek as a group, celebrate your personal achievement, and explore the town. Overnight at Guesthouse.'
        },
        {
          day: 14,
          title: 'Fly back to Kathmandu',
          description: 'Enjoying your last glimpse of the mountains for one last time on the 35-minute scenic flight back to Kathmandu. On arrival, we are met and transferred back to our starting hotel. Overnight at Hotel.'
        },
        {
          day: 15,
          title: 'Final Departure',
          description: 'The trip ends. Our airport representative will drop you to the Kathmandu International Airport for your flight departure from Nepal.'
        }
      ],
      includes: [
        'Kathmandu valley sightseeing',
        'Domestic airfare (Kathmandu - Lukla - Kathmandu)',
        '3 nights hotel in Kathmandu (BB basis)',
        'All ground transportation',
        'All meals (Breakfast, Lunch, Dinner) during the trek',
        'All entrance tickets, National Park permits, and TIMS card',
        'English-speaking Guide and experienced trekking porters',
        'Lodge/Teahouse accommodation during the trek'
      ],
      excludes: [
        'Personal nature expenses',
        'Bar bills, mineral water, and cold drinks',
        'Emergency evacuation or helicopter rescue',
        'Tipping for guide and porters'
      ],
      notes: [
        'Trekking backpack (40-50L) and daypack',
        'High-cut waterproof trekking boots and comfortable sandals/shoes for teahouses',
        'Gore-Tex hard shell jacket and fleece mid-layer',
        'Moisture-wicking base layers and quick-dry trekking pants',
        'Sleeping bag (-15°C to -20°C rating)',
        'Trekking poles (two recommended)',
        'Warm beanie, sun hat, and neck gaiter (Buff)',
        'Windproof/waterproof gloves and warm thermal gloves',
        'Anti-UV sunglasses, high-SPF sunscreen, and lip balm',
        'Personal first aid kit and altitude sickness medication (Diamox)',
        'Water bottle or hydration bladder (min 2L) and purification tablets/filter',
        'Headlamp with spare batteries'
      ]
    },
    'zh-tw': {
      title: '聖母峰基地營健行 (EBC Trek)',
      subtitle: '走進世界之巔，體驗雪巴文化與冰川奇景的極致旅程',
      overview: '聖母峰基地營（Everest Base Camp, EBC）健行是全球最具代表性的高山健行路線之一。這趟旅程將帶您深入薩加瑪塔國家公園（Sagarmatha National Park），沿途您將穿梭於傳統的雪巴村落、跨越壯觀的吊橋、仰望包括聖母峰（Mount Everest）、洛子峰（Lhotse）與阿瑪達布拉姆峰（Ama Dablam）在內的群山峻嶺。我們將拜訪著名的天波切修道院（Tengboche Monastery），感受高山信仰的寧靜，最終抵達海拔 5,364 公尺的聖母峰基地營，並登上卡拉帕塔（Kala Patthar）欣賞令人屏息的聖母峰日出。\n\n請注意：本行程天數（15天）為預估標準，實際行程會視旅客的體能狀況與高山適應程度進行彈性調整。我們的首要任務是確保您在安全、健康的前提下，順利完成這趟壯麗的旅程。',
      highlights: [
        '往返盧卡拉 (Lukla) 的喜馬拉雅高空景觀航線',
        '走進山林，親身感受「高山子民」的雪巴文化與生活',
        '造訪以阿瑪達布蘭峰 (Ama Dablam) 為背景的天波切修道院 (Tengboche Monastery)',
        '目睹昆布冰瀑 (Khumbu Icefall) 令人震撼的自然奇觀',
        '登頂卡拉帕塔 (5,555m)，欣賞聖母峰與群山的日出壯遊',
        '親臨聖母峰基地營 (EBC)，腳踏龐大的昆布冰河'
      ],
      itinerary: [
        {
          day: 1,
          title: '抵達加德滿都 (Arrival in Kathmandu)',
          description: '我們的機場代表將會在特里布萬國際機場 (Tribhuvan International Airport) 外舉牌迎接您，接著接送您到下榻飯店休息。'
        },
        {
          day: 2,
          title: '加德滿都谷地觀光 (Sightseeing around Kathmandu valley)',
          description: '享用完豐盛的早餐後，早上 8:30 我們將展開精彩的市區觀光。將由專車與專業響導陪同，探索這座城市的魅力。'
        },
        {
          day: 3,
          title: '飛往盧卡拉 (2,804m) 並健行至帕克丁 (2,610m)',
          description: '早晨我們會前往機場搭乘 35 分鐘的景觀航班前往盧卡拉。抵達後，嚮導會進行簡要說明並介紹挑夫。當團隊在整理裝備時，您可以在村裡稍微放鬆逛逛。接著便正式開始健行！我們朝著都德科西河 (Dudh Koshi River) 下坡，接上主步道。這段路走起來輕鬆，經過名為 Ghat 的小村莊後，很快就會抵達今晚的休息點帕克丁。'
        },
        {
          day: 4,
          title: '健行至南崎市場 Namche Bazaar (3,441m)',
          description: '今天我們沿著都德科西河畔繼續前進，途中會走過好幾座掛滿祈福經幡的吊橋。進入薩加瑪塔國家公園後，步道會變得比較陡峭，但身旁壯麗的景色十分值得。南崎市場被譽為「通往聖母峰的門戶」，也是整條 EBC 路線上最大的村落之一，裡面有許多餐廳、旅館、商店，甚至還有換錢所跟麵包店。'
        },
        {
          day: 5,
          title: '南崎市場：高度適應日 (Namche Bazaar Acclimatization day)',
          description: '為了讓身體適應高海拔稀薄的空氣，我們今天會繼續留在南崎市場。我們將安排一趟短途徒步，去參觀展示雪巴傳統文化的博物館。接著會往上走到 Everest View Hotel 附近。從這裡，您可以清楚看見壯觀的喜馬拉雅山脈以及昆布群峰的絕美全景。下午可以在村落周邊輕鬆散步，體驗當地的生活節奏。'
        },
        {
          day: 6,
          title: '健行至天波切 Tengboche Monastery (3,860m)',
          description: '伴隨著冰河水聲以及絕美的山景，我們繼續向海拔 3,860 公尺邁進。抵達天波切後，您將參觀當地著名的修道院。修道院內有著華麗的壁飾、一尊 20 英尺高的佛像，以及喇嘛們使用的法器與僧袍。視到達的時間而定，我們還會安排在傍晚或早晨去旁觀一場神聖的祈福儀式。'
        },
        {
          day: 7,
          title: '健行至丁波切 Dingboche (4,350m)',
          description: '從天波切出發後，步道會下切並再次跨越刺激的吊橋越過伊姆札河 (Imja Khola)。途中穿梭在成千上萬的瑪尼石堆間，最後抵達傳統的雪巴村落丁波切。從這裡可以看見洛子峰 (Lhotse)、島峰 (Island Peak) 和阿瑪達布拉姆峰 (Ama Dablam) 的無敵美景。今天我們會放慢腳步，避免引發高山症狀。'
        },
        {
          day: 8,
          title: '丁波切：高度適應日 (Dingboche Acclimatization day)',
          description: '今天迎來第二個高度適應日。您可以在這美麗的村落好好放鬆，或是到周邊稍微走走散步，保持活動力，讓身體準備好迎接接下來的挑戰。'
        },
        {
          day: 9,
          title: '健行至羅布崎 Lobuche (4,910m)',
          description: '今天會沿著昆布冰河 (Khumb前u Glacier) 的側磧進，途中會經過許多為了紀念遇難登山者而立的石碑。步道持續攀升，最終抵達羅布崎——這其實只是巨大羅布崎峰山腳下的幾棟小屋。到了這個高度，您可能會開始覺得稍微有點喘，這是正常的現象。'
        },
        {
          day: 10,
          title: '挺進聖母峰基地營 EBC (5,365m) 後折返至高瑞克雪普 (5,180m)',
          description: '這是充滿挑戰且吃力的一天！我們沿著昆布冰河走到聖母峰基地營——這是沒有專業登山裝備所能抵達離聖母峰最近的地方了。現場很可能會遇到即將挑戰登頂的遠征隊伍。從基地營望向昆布冰瀑的景色非常震撼。飽覽美景後，我們將折返回高瑞克雪普過夜。'
        },
        {
          day: 11,
          title: '清晨登頂卡拉帕塔 (5,555m) 後下撤至培利切 Pheriche (4,200m)',
          description: '這會是整趟旅程中最辛苦，但也最值得的一天！清晨我們將展開攀登卡拉帕塔 (Kala Patthar) 的挑戰。攀登過程雖然費力，但登頂後迎接你的將是最奢華的全景視野：世界最高峰「聖母峰」就矗立在眼前，周圍還環繞著努子峰 (Nuptse)、普莫里峰 (Pumori) 等無數巨峰。之後我們快速下撤到高瑞克雪普，接著一路回頭走到培利切。'
        },
        {
          day: 12,
          title: '下撤至南池市場 Namche Bazaar (3,441m)',
          description: '從培利切出發，我們走一條略為不同的路線下山前往 Orsho，然後到 Pangboche 村。這裡擁有該區域最古老的修道院，據說裡面還保存著雪人（Yeti）的頭皮和骨頭呢！我們將大山留在身後，繼續下坡經過天波切修道院，最後在下午回到繁華的南池市場。'
        },
        {
          day: 13,
          title: '下撤至盧卡拉 Lukla (2,804m)',
          description: '我們回到了這趟旅程的起點——盧卡拉，回想剛出發時彷彿只是昨天的事。這是一個很適合與團隊回顧健行點滴，並慶祝所有人順利完成挑戰的時刻。您也可以把握最後的機會再去鎮上逛逛。'
        },
        {
          day: 14,
          title: '飛返加德滿都 (Fly back to Kathmandu)',
          description: '在搭乘 35 分鐘的景觀航班飛回加德滿都時，最後一次在高空中回頭欣賞這些你剛剛征服過的山峰吧！抵達加德滿都後，我們會有專車接送您回到最初下榻的飯店休息。'
        },
        {
          day: 15,
          title: '賦歸 (Final Departure)',
          description: '旅程順利結束，我們的機場代表會將您準時送到加德滿都國際機場，準備搭機離開尼泊爾。'
        }
      ],
      includes: [
        '加德滿都谷地觀光接送與導覽',
        '國內線來回機票 (加德滿都 - 盧卡拉)',
        '3 晚加德滿都舒適飯店住宿 (含早餐)',
        '行程中所有機場與市區之專車接送',
        '山區健行期間的所有餐食 (早、午、晚餐)',
        '國家公園門票、環境規費及登山許可證 (TIMS 卡)',
        '專業英語在地嚮導與負責背負行李的挑夫',
        '健行期間的沿途山屋/客棧住宿'
      ],
      excludes: [
        '私人花費與紀念品購買',
        '山上的酒水、礦泉水與冷飲',
        '高山症緊急撤離與直升機救援費用',
        '給予嚮導與挑夫的小費'
      ],
      notes: [
        '大型登山背包（40-50L）與輕便隨身攻頂包',
        '高筒防寒防水登山鞋與抵達山屋用的輕便拖鞋/涼鞋',
        'Gore-Tex 等級防風防水外套及保暖刷毛中層衣',
        '排汗透氣衣物數件與快乾長褲',
        '高山極地專用睡袋（耐寒度建議達 -15°C 至 -20°C）',
        '登山杖（建議攜帶兩支）',
        '保暖毛帽、遮陽帽與防風圍脖',
        '防風防水手套與吸汗保暖手套',
        '抗 UV 高山太陽眼鏡及高係數防曬乳、護唇膏',
        '個人常備藥品、高山症藥物及急救包',
        '個人水壺或水袋（建議最少準備 2 公升）與淨水藥片/淨水器',
        '頭燈及備用電池'
      ]
    }
  }
};
