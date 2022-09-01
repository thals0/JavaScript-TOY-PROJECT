const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const len = list.length;
const deg = 360 / len;

const names = [
  "cardio",
  "groove",
  "happy",
  "light",
  "lily",
  "limes",
  "pop",
  "swing",
];

for (let i = 0; i < len; i++) {
  list[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

  const pic = list[i].querySelector(".pic");
  // 이거 상대경로랑 왜 안맞지?
  pic.style.backgroundImage = `url(./img/${names[i]}.jpg)`;

  // const title = list[i].querySelector(".text>h2");
  // title.innerHTML = `${names[i]}`;

  const title = list[i].querySelector(".text>h2");
  title.innerHTML = `${names[i]}`;

  // 음악 넣기
  // audio 요소 8개 만들기
  const audio = document.createElement("audio");
  audio.setAttribute("src", `./music/${names[i]}.mp3`);
  audio.setAttribute("loop", "loop");

  // penel의 제일 마지막 요소로 audio 붙여줌
  list[i].append(audio);
}

let active = 0;
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0;

prev.addEventListener("click", function (e) {
  frame.style.transform = `rotate(${deg * ++num}deg)`;

  if (active == 0) {
    active = len - 1;
  } else {
    active--;
  }

  for (let el of list) {
    el.classList.remove("on");
  }
  list[active].classList.add("on");
});
next.addEventListener("click", function (e) {
  frame.style.transform = `rotate(${deg * --num}deg)`;

  if (active == len - 1) {
    active = 0;
  } else {
    active++;
  }
  for (let el of list) {
    el.classList.remove("on");
  }
  list[active].classList.add("on");
});

let before = -1;

// play, pause, reload 처리
for (let el of list) {
  const play = el.querySelector(".play");
  const pause = el.querySelector(".pause");
  const load = el.querySelector(".reload");

  // play click 시
  play.addEventListener("click", function (e) {
    // play click시 다른 노래 재생 중이면 꺼라
    if (before === -1) {
      before = e.currentTarget;
    } else if (e.currentTarget !== before) {
      before.closest("article").querySelector("audio").pause();
      before.closest("article").querySelector(".pic").classList.remove("on");
      // 이전 음악 끄고 before값 update
      before = e.currentTarget;
    }

    // 몇번째 article이 선택됬는지 찾음
    // 버튼이 클릭된 요소의 가장 가까운 article을 찾아옴
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
  });

  // pause click 시
  pause.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });

  // reload click 시
  load.addEventListener("click", function (e) {
    // 이전에 재생되던 노래 있으면 꺼라
    if (before === -1) {
      before = e.currentTarget;
    } else if (e.currentTarget !== before) {
      before.closest("article").querySelector("audio").pause();
      before.closest("article").querySelector(".pic").classList.remove("on");
      before = e.currentTarget;
    }

    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    // 다시 한번 load
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
}
