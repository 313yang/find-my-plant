const qnaList = [
  {
    q: "식물에 물주기는 언제가 적당할까?",
    a: [
      {
        answer: "난 바쁘니까 한달에 한번정도 물줘도 되는 식물!",
        value: 7,
      },
      {
        answer: "난 2주에 한번정도씩 줄 수 있어",
        value: 8,
      },
      { answer: "난 일주일에 한번씩 주는게 좋아!", value: 9 },
    ],
  },
  {
    q: " 새로운 식물의 보금자리는 어디가 좋을까? ",
    a: [
      {
        answer: "보일러도 빵빵! 에어컨도 빵빵한 집 안에서 키워야지!",
        value: 20,
      },
      {
        answer: "식물은 밖이나 베란다에서 키울거야~",
        value: 20,
      },
    ],
  },
  {
    q: " 식물이 햇빛을 많이 볼 수 있을까? ",
    a: [
      {
        answer: "사방이 건물이라 집에 빛이 안들어와..😥",
        value: 30,
      },
      {
        answer: "낮엔 햇빛을 짱짱하게 볼 수 있어!",
        value: 40,
      },
    ],
  },
  {
    q: "나의 원츄 스타일!",
    a: [
      {
        answer: " 무난무난하고 푸릇푸릇한게 좋아 ",
        value: 100,
      },
      {
        answer: " 이왕이면 무늬가 화려했으면 좋겠어! ",
        value: 200,
      },
    ],
  },
  {
    q: " 사이즈는 얼마정도가 적당할까? ",
    a: [
      {
        answer: "거실에 둘 만한 큰 사이즈가 좋아",
        value: 1000,
      },
      {
        answer: "책상에 둘 수 있는 작은 사이즈!",
        value: 2000,
      },
    ],
  },
];

const resultList = [
  {
    num: 0,
    img: "./assets/img/00.jpg",
    name: "호야 Hoya",
    desc: "호야는 덩굴성 식물로 나무나 바위에 붙어서 자랄 수 있는 식물이에요. 행잉플랜트로 키울수 있답니다 👍<br> 직사광선을 싫어해서 반음지에 키우기 적합해요. 무늬의 색상이 핑크색, 흰색, 연두색 등 다양하게 존재해요!<br>물은 흙이 빠삭하게 말랐을 때 흠뻑 주는게 좋아요. <br>여러 해 키우다 보면 예쁜 꽃도 볼 수 있답니다 🌺",
  },
  {
    num: 1,
    img: "./assets/img/01.png",
    name: "알로카시아 아마조니카 Alocasia amazonica",
    desc: "아마조니카는 알로카시아 종류 중 하나에요. 우리나라에선 거북 알로카시아로도 불려요.<br>뾰족한 잎모양에 흰 무늬가 매력적인 친구에요.<br>밝은 곳에 두면 잎이 탈 수 있어요! 반음지에 두고 키우는게 좋답니다.<br>물은 겉 흙이 빠삭하게 말랐을 때 흠뻑 주는게 좋아요! 👍",
  },
  { num: 2, img: "./assets/img/02.jpg", name: "금전수", desc: "금전수 추천" },
  {
    num: 3,
    img: "./assets/img/03.jpg",
    name: "러브체인 Ceropegia woodii",
    desc: "러브체인은 하트모양의 잔잔한 잎이 매력적인 친구에요. <br>부부의 금슬이 좋으면 잘 자란다는 속설이 있어요 💖<br>음지에서 키우면 줄기가 가늘어지고 끊어져요. 양지에서 해를 많이 보면 잎이 자주빛으로 물든답니다.<br>러브체인은 알뿌리 식물이라 물을 많이 주면 안돼요! 화분의 흙이 완젆히 마르면 물을 주세요 🙌",
  },
  {
    num: 4,
    img: "./assets/img/04.jpg",
    name: "필로덴드론 버킨 Philodendron birkin",
    desc: "버킨은 필로덴드론과 식물중 하나로 잎의 흰 무늬가 매력적인 식물이에요. 하얀 무늬는 빛이 부족할 때 초록빛으로 변해요. 적당한 빛을 받고 자라면 오밀조밀 짱짱하게 자란답니다.<br>천남성과 식물로 줄기에서 뿌리가 자랄 수 있어요. 걱정하지 마세요! 잘못된게 아닌 자연스러운 현상이에요! 🙌<br>버킨은 목 마를 때 줄기부분이 말라요. 겉 흙이 바싹 말랐을 때 흠뻑 주세요.",
  },
  {
    num: 5,
    img: "./assets/img/05.jpg",
    name: "싱고니움 Syngonium",
    desc: "싱고니움은 사계절 내내 싱그러운 잎을 유지하는 식물이에요. 초심자도 키우기 쉽답니다!<br>양지에서 키우면 잎이 오밀조밀 작고 예쁘게 자라요. 그늘에서도 잘 자라지만 줄기가 길어지거나 잎의 색이 바래니 밝은 곳에서 키워 주세요! 👏<br>겉 흙이 적당히 말랐을 때 물 주는게 좋아요. 건조하거나 과습상태일 때 잎이 노랗게 변해요.",
  },
  {
    num: 6,
    img: "./assets/img/06.jpg",
    name: "문샤인 산세베리아 Moonshine",
    desc: "문샤인은 산세베리아 종류 중 하나에요. 은빛의 토끼 귀를 닮은 잎 때문에 선물용으로 인기있답니다.<br>빛을 좋아해서 양지나 반음지에 키우는 것을 추천해요. 그늘에서 오래 키울 경우 잎이 얇아져요!<br>문샤인은 남아메리카에서 온 친구에요. 추위에 약하답니다. 겨울엔 따뜻한 곳으로 옮겨주세요.<br>과습에 취약해서 화분의 흙이 빠삭하게 말랐을 때 물 주는게 좋아요! 🙌",
  },
  {
    num: 7,
    img: "./assets/img/07.jpg",
    name: "필레아 페페 Pilea Peperomioides",
    desc: "필레아는 페페종류중 하나에요. 물과 빛을 좋아하는 식물이랍니다.<br>필레아는 해를 많이 받을수록 잎이 작고 촘촘하게 자라요. 그렇지 않으면 잎줄기는 길어자고 잎이 커지면서 미워진답니다.<br>직사광선은 잎이 화상을 입을 수 있으니 해가 걸러들어오는 곳에 두는게 좋아요 👍<br>물은 겉 흙이 빠삭하게 말랐을 때 주는게 좋아요.",
  },
  {
    num: 8,
    img: "./assets/img/08.jpg",
    name: "블루스타 Blue star fern",
    desc: "블루스타는 물결무늬 잎이 인상적인 고사리과 식물이에요. 관리도 쉬운 편이라 초보자들에게 많이 추천합니다.<br>고사리과 식물들은 특성상 그늘을 좋아해요. 풍성하게 키우고 싶다면 반음지에서 키우는게 좋아요. 👍<br>물은 겉 흙이 말랐다 싶을 때 흠뻑 주는게 좋아요. 물이 부족하면 잎 끝이 검게 변한답니다.<br>잎이 갑자기 노랗게 변할 때가 있어요. 더 이상 그 화분에서 살 수 없다는 신호에요! 좀 더 큰 화분으로 분갈이 해야 해요.",
  },
  { num: 9, img: "./assets/img/09.jpg", name: "", desc: "" },
  { num: 10, img: "./assets/img/10.jpg", name: "금전수", desc: "금전수 추천" },
  { num: 11, img: "./assets/img/11.jpg", name: "금전수", desc: "금전수 추천" },
  {
    num: 12,
    img: "./assets/img/12.jpg",
    name: "금전수",
    desc: "금전수 추천합니다!!!!샬라샬라",
  },
  { num: 13, img: "./assets/img/13.jpg", name: "금전수", desc: "금전수 추천" },
  { num: 14, img: "./assets/img/14.jpg", name: "금전수", desc: "금전수 추천" },
  {
    num: 15,
    img: "./assets/img/15.jpg",
    name: "에크메아 파시아타 Aechmea Faciata",
    desc: "에크메아 파시아타는 파인애플과 아나나스 종류중 하나에요. <br>잎에 뽀얀가루가 묻어있는데 가루분이 닦이지 않도록 관리해야 해요.<br>과습에 약해서 겉흙이 빠삭하게 말랐을 때 물 주는게 좋아요! <br>빛을 좋아하지만 직사광선은 싫어해요. 반양지에서 키워 주세요. 👏",
  },
  {
    num: 16,
    img: "./assets/img/16.jpg",
    name: "뱅갈고무나무 Ficus lemon lime",
    desc: "뱅갈고무나무는 인테리어용 화분 선물로 가장 인기 많은 식물이에요. <br> 레몬빛 잎이 매력적인 식물이랍니다. <br> 만약 잎이 점점 초록빛으로 변한다면 빛이 부족한지 살펴봐야 해요. <br> 뱅갈고무나무는 목 마를 때 잎이 쳐지는 친구에요. 잎이 쳐져있을 때 물을 주는게 좋아요! 🙌",
  },
  {
    num: 17,
    img: "./assets/img/17.jpg",
    name: "아이스톤 Iceton",
    desc: "아이스톤은 크로톤 종류 중 하나로, 화려한 핑크빛 잎을 자랑하는 식물이에요. <br> 충분한 햇빛을 받아야만 잎이 빨갛게 물들어요. <br>만약 잎이 초록빛으로 변한다면 빛이 부족한지 살펴봐야 해요.<br> 아이스톤은 목 마르면 잎을 추욱 늘어뜨리는 친구에요. 잎이 쳐져있을 때 물을 주는게 좋아요! 🙌",
  },
  {
    num: 18,
    img: "./assets/img/18.jpg",
    name: "극락조 Bird of paradise plant",
    desc: "이국적 분위기를 연상케 하는 극락조는 인테리어 식물로 인기가 많아요. 병충해도 적어서 초보자들도 키우기 쉽답니다.<br>극락조 중 잎이 큰 친구는 '여인초'라고 불려요. 여인초는 꽃이 안핀답니다.<br>직사광선을 받으면 잎 끝이 탈 수 있어요. 밝은 곳이나 반음지에서 키우는걸 추천합니다. 👍<br>극락조는 뿌리가 굵은 식물이에요. 뿌리가 물을 많이 저장할 수 있어서 화분의 흙이 빠삭하게 말랐을 때 물 주는게 좋아요.",
  },
  {
    num: 19,
    img: "./assets/img/19.jpg",
    name: "몬스테라 Monstera",
    desc: "몬스테라는 잎이 자랄 수록 크고 멋스럽게 갈라지는 식물입니다.<br> 몬스테라는 빛이 부족하면 성장이 더디고 마디가 길어져 밉게 자랍니다.<br> 해를 직접보면 잎이 탈수 있어요! 해가 걸러들어오는 반음지에서 키워 주세요. <br>겨울철이 되면 생장이 둔화되어 겨울잠을 잔답니다. <br> 물은 2주일에 한 번씩 흠뻑 주시는게 좋아요! 👏",
  },
  {
    num: 20,
    img: "./assets/img/20.jpg",
    name: "금전수",
    desc: "금전수 추천합니다!!!!샬라샬라",
  },
  { num: 21, img: "./assets/img/21.jpg", name: "금전수", desc: "금전수 추천" },
  { num: 22, img: "./assets/img/22.jpg", name: "금전수", desc: "금전수 추천" },
  { num: 23, img: "./assets/img/23.jpg", name: "금전수", desc: "금전수 추천" },
];
