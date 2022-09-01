// GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  ease: "none",
  duration: 1,
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrap",
    start: "top top",
    marker: true,
    end: "+=3000",
    scrub: true,
    pin: true,
  },
});

tl.from(".orange", { xPercent: -100 })
  .from(".yellow", { xPercent: 100 })
  .from(".green", { yPercent: -100 });
