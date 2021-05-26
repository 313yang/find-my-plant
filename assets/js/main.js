const main = document.getElementById("main");
const qna = document.getElementById("qna");
const result = document.getElementById("result");
const q = document.querySelector(".questionContainer");
const a = document.querySelector(".anwerContainer");
const status = document.querySelector(".statusBar");
const resultName = document.querySelector(".resultName");
const resultImg = document.querySelector(".resultImg");
const resultDesc = document.querySelector(".resultDesc");

let endPoint = 5;
let select = 0;

const goResult = () => {
  qna.classList.add("hide");
  result.classList.remove("hide");
  let num = select.toString();
  console.log(num);
  if (select > 2000) {
    //소형
    if (select > 2200) {
      // 무늬
      if (select < 2260) {
        //음지
        if (num.indexOf("7") === 3) {
          //한달
          resultName.innerText = "금전수";
          resultDesc.innerText = "추천합니다";
          console.log("소형 무늬 음지 한달");
        } else if (num.indexOf("8") === 3) {
          //2week
          console.log("소형 무늬 음지 2주");
        } else if (num.indexOf("9") === 3) {
          //1week
          console.log("소형 무늬 음지 1주");
        }
      } else if (select >= 2260) {
        // 양지
        if (num.indexOf("7") === 3) {
          //한달
          console.log("소형 무늬 양지 한달");
        } else if (num.indexOf("8") === 3) {
          //2week
          console.log("소형 무늬 양지 2주");
        } else if (num.indexOf("9") === 3) {
          //1week
          console.log("소형 무늬 양지 일주");
        }
      }
    } else if (select < 2200) {
      //무난
      if (select < 2160) {
        //음지
        if (num.indexOf("7") === 3) {
          //한달
          console.log("소형 무난 음지 한달");
        } else if (num.indexOf("8") === 3) {
          //2week
          console.log("소형 무난 음지 2주");
        } else if (num.indexOf("9") === 3) {
          //1week
          console.log("소형 무난 음지 1주");
        }
      } else if (select >= 2160) {
        // 양지
        if (num.indexOf("7") === 3) {
          //한달
          console.log("소형 무난 양지 한달");
        } else if (num.indexOf("8") === 3) {
          //2week
          console.log("소형 무난 양지 2주");
        } else if (num.indexOf("9") === 3) {
          //1week
          console.log("소형 무난 양지 1주");
        }
      }
    }
  } else {
    //대형
    if (select > 1200) {
      // 무늬
      if (select < 1260) {
        //음지
        if (num.indexOf("7") === 3) {
          //한달
          console.log("대형 무늬 음지 한달");
        } else if (num.indexOf("8") === 3) {
          //2week
          console.log("대형 무늬 음지 2주");
        } else if (num.indexOf("9") === 3) {
          //1week
          console.log("대형 무늬 음지 1주");
        }
      } else if (select >= 1260) {
        // 양지
        if (num.indexOf("7") === 3) {
          //한달
          console.log("대형 무늬 양지 한달");
        } else if (num.indexOf("8") === 3) {
          //2week
          console.log("대형 무늬 양지 2주");
        } else if (num.indexOf("9") === 3) {
          //1week
          console.log("대형 무늬 양지 일주");
        }
      }
    } else if (select < 1200) {
      //무난
      if (select < 1160) {
        //음지
        if (num.indexOf("7") === 3) {
          //한달
          console.log("대형 무난 음지 한달");
        } else if (num.indexOf("8") === 3) {
          //2week
          console.log("대형 무난 음지 2주");
        } else if (num.indexOf("9") === 3) {
          //1week
          console.log("대형 무난 음지 1주");
        }
      } else if (select >= 1160) {
        // 양지
        if (num.indexOf("7") === 3) {
          //한달
          console.log("대형 무난 양지 한달");
        } else if (num.indexOf("8") === 3) {
          //2week
          console.log("대형 무난 양지 2주");
        } else if (num.indexOf("9") === 3) {
          //1week
          console.log("대형 무난 양지 1주");
        }
      }
    }
  }
};

const addAnswer = (answerText, count, idx) => {
  const answer = document.createElement("button");
  answer.classList.add("answerList");
  a.appendChild(answer);
  answer.innerText = answerText;
  answer.addEventListener(
    "click",
    () => {
      const answerBtns = document.querySelectorAll(".answerList");
      let value = qnaList[count].a[idx].value;

      for (let i = 0; i < answerBtns.length; i++) {
        answerBtns[i].style.display = "none";
      }
      select += value;
      console.log(value, select);

      goNext(++count);
    },
    false
  );
};

const goNext = (count) => {
  //console.log(q, count);
  if (count === endPoint) {
    goResult();
    return;
  }

  q.innerText = qnaList[count].q;
  for (let i in qnaList[count].a) {
    addAnswer(qnaList[count].a[i].answer, count, i);
  }
  status.style.width = (100 / endPoint) * (count + 1) + "%";
};

const start = () => {
  main.classList.add("hide");
  qna.classList.remove("hide");
  let count = 0;
  goNext(count);
};
