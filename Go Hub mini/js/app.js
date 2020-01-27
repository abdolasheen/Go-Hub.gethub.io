function SideMenU() {
  const menuToggle = document.querySelector("nav .meun-toggler svg");
  const dropMenu = document.querySelector("nav .nav-links");
  const logo = document.querySelector(" nav .logo");
  menuToggle.addEventListener("click", function() {
    dropMenu.classList.toggle("opened");
    logo.classList.toggle("side");
    logo.querySelector("img").src = "./imgs/logo-white.png";
  });
  window.onresize = function() {
    if (window.innerWidth > 688) {
      document.querySelector(
        ".hero .hero-descreption .sub-head p"
      ).innerText = `Gohub monitors application stability, so you can make data-driven decisions on whether you should be building new features, or fixing bugs.`;

      dropMenu.classList.remove("opened");
      logo.classList.remove("side");
      logo.querySelector("img").src = "./imgs/logo.png";
    }
  };
}
SideMenU();
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;
  function animation(currentTime) {
    if (startTime == null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t * t * t + 2) + b;
    }
  }

  requestAnimationFrame(animation);
}
document.querySelector(".take-me-up").addEventListener("click", () => {
  smoothScroll("nav", 2000);
});
// hide take me up btn
window.addEventListener("scroll", function() {
  if (window.pageYOffset < 1000) {
    document.querySelector(".take-me-up svg").style.height = "0px";
  } else {
    document.querySelector(".take-me-up svg").style.height = "4rem";
  }
});
// scroll reveal
function scrollRevealMain() {
  var slideRight = {
    delay: 200,
    distance: "100%",
    origin: "right",
    opacity: null,
    duration: 2000,
    cleanup: true
  };
  var slideLeft = {
    delay: 200,
    distance: "100%",
    origin: "left",
    opacity: null,
    duration: 2000,
    cleanup: true
  };
  var slideBottom = {
    distance: "100%",
    origin: "bottom",
    opacity: null,
    duration: 1500,
    scale: 0.5,
    cleanup: true
  };
  var slideRight_150 = {
    distance: "150%",
    origin: "right",
    opacity: null,
    duration: 1000,
    cleanup: true
  };
  var slideLeft_150 = {
    distance: "150%",
    origin: "left",
    opacity: null,
    duration: 1000,
    cleanup: true
  };

  ScrollReveal().reveal(".slideRight", slideRight);

  ScrollReveal().reveal(".slideRight_150", slideRight_150);
  ScrollReveal().reveal(".slideLeft", slideLeft);
  ScrollReveal().reveal(".slideLeft_150", slideLeft_150);
  ScrollReveal().reveal(".slideBottom", slideBottom);
}
scrollRevealMain();
