const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");

// 전역변수를 함수 밖에 선언 해야함
let target;

// 날짜 선택
calendar.addEventListener("click", function (e) {
  // console.log("e-target", e.target); //click된 요소 반환
  // console.log("e-current", e.currentTarget); //click된 요소의 부모 요소 반환
  // console.log(e.target.tagName); //데이터타입이 어떻게 반환되는지 확인하기 !
  if (e.target.tagName == "P") {
    date.value = e.target.textContent;
    target = e.target.parentNode;
  } else if (e.target.tagName == "TD") {
    date.value = e.target.firstChild.textContent; //e.target.children[0].textContent;
    target = e.target;
  }
  // div 요소 click시 삭제 방법 1st
  //   else if (e.target.tagName == "DIV") {
  //   e.target.remove();
  // }
});

// 내용 입력시 target 날짜에 내용 입력
function writeSchedule() {
  let divEl = document.createElement("div");
  // div 요소 click시 삭제 방법 3rd (함수사용)
  divEl.setAttribute("onclick", "deleteTask(this);");
  divEl.textContent = content.value;

  // div 요소 click시 삭제 방법 2nd (addEventListener 사용)
  // divEl.addEventListener("clcik", fungtion(){
  //   divEl.remove();
  // })

  // div 요소 1번 클릭시 중간줄, 2번 클릭시 삭제
  // divEl.addEventListener("click", function () {
  //   if (divEl.style.textDecoration === "line-through") {
  //     divEl.remove();
  //   } else {
  //     divEl.style.textDecoration = "line-through";
  //   }
  // });
  target.append(divEl);
  content.value = "";
}

// deleteTask 함수
function deleteTask(t) {
  // t = this
  t.remove();
}

// html의 모든 요소는 node
