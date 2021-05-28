function kakaoShare() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "나만의 반려식물 찾기 테스트 🌱",
      description: "테스트를 통해 당신에게 딱 맞는 식물을 추천해 드릴게요!",
      imageUrl: "../img/find_my_plant-01.png",
      link: {
        mobileWebUrl: "https://findmyplant.netlify.app/",
        webUrl: "https://findmyplant.netlify.app/",
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "https://findmyplant.netlify.app/",
          webUrl: "https://findmyplant.netlify.app/",
        },
      },
    ],
  });
}
