const dish = document.querySelector(".dish");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 30; // rotate range -15 to 15 deg
  let y = -(e.clientY / window.innerHeight - 0.5) * 30;

  dish.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const spans = document.querySelectorAll(".loader span");
  const main = document.getElementById("main");

  // Hide main initially (below screen)
  gsap.set(main, { y: "100%" });

  const tl = gsap.timeline({
    onComplete: () => {
      // Slide loader up & main in
      gsap.to(preloader, { y: "-100%", duration: 1, ease: "power4.inOut" });
      gsap.to(main, { y: "0%", duration: 1, ease: "power4.inOut" }, "<");
    }
  });

  // Animate loader text with stagger
  tl.to(spans, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.25,
    ease: "power3.out"
  })
  .to(spans, {
    opacity: 0,
    y: -20,
    duration: 0.6,
    stagger: 0.25,
    ease: "power3.in"
  });
});
