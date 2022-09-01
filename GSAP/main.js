// AOS
// AOS.init({
//   // 요소 보이고 300px 뒤에 보임
//   offset: 300,
//   duration: 1000,
//   // delay: 300,
// });

// GSAP
// gsap.registerPlugin(ScrollTrigger);

// // to: 원래 위치에서 내가 설정한 위치로
// gsap.to(".box1", {
//   scrollTrigger: {
//     // box1이 보이기 시작하면 아래 애니메이션 실행
//     trigger: ".box1",
//     // 단일? 혹은 반복실행?
//     toggleActions: "restart",
//     // console.log(scroll);
//     markers: true,
//     // 스크롤에 따라 움직임
//     scrub: true,
//     // start: "bottom 50%",
//     // 3000px만큼 애니메이션 실행
//     end: "+=3000",
//     // animation이 스크롤 화면을 따라옴
//     pin: true,
//   },
//   x: 1000,
//   // 2바퀴 돌리기
//   rotation: 720,
//   scale: 2,
//   duration: 3,
// });

// // from: 내가 설정한 위치에서 원래 위치로
// gsap.from(".box2", {
//   scrollTrigger: {
//     trigger: ".box3",
//   },
//   x: 1000,
//   rotation: 720,
//   scale: 2,
//   duration: 3,
// });

// timeline: 애니메이션 연달아 붙이기
// let tl = gsap.timeline();

// tl.to(".box1", {
//   x: 1000,
//   rotation: 720,
//   scale: 2,
//   duration: 3,
// })
//   .to(".box1", {
//     backgroundColor: "#c65efc",
//     duration: 1,
//   })
//   .to(".box1", {
//     x: 0,
//     opacity: 0,
//     duration: 3,
//   });
