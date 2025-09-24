const dish = document.querySelector(".dish");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 30; // rotate range -15 to 15 deg
  let y = -(e.clientY / window.innerHeight - 0.5) * 30;

  dish.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
