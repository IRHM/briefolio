const sliderEl = document.querySelector(".blaze-slider");
const sliderCfg = {
  all: {
    slidesToShow: 1,
    slideGap: "25px",
    loop: false,
    transitionDuration: 300,
    transitionTimingFunction: "ease"
  }
};

let loadedSlider = false;
let blazeSlider;

function mobileOp() {
  sliderEl.classList.add("mobile");
  if (blazeSlider) {
    // blazeSlider.prev(99);

    setTimeout(() => {
      // No way to disable slider, using this as quick fix.
      // Drag event doesn't do anything when in transition.
      blazeSlider.isTransitioning = true;
    }, 300);
  }
}

function desktopOp() {
  sliderEl.classList.remove("mobile");

  if (!loadedSlider) {
    loadedSlider = true;
    const head = document.getElementsByTagName("head")[0];

    // Load slider css
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://unpkg.com/blaze-slider@1.8.0/dist/blaze.css";
    head.appendChild(link);

    // Load slider js
    const script = document.createElement("script");
    script.src = "https://unpkg.com/blaze-slider@1.8.0/dist/blaze-slider.min.js";
    script.addEventListener("load", () => {
      blazeSlider = new BlazeSlider(sliderEl, sliderCfg);
      blazeSlider.isTransitioning = false;
    });
    script.addEventListener("error", (ev) => {
      // try again?
      console.error("Error loading slider js:", ev);
    });
    head.appendChild(script);
  } else if (blazeSlider) {
    blazeSlider.isTransitioning = false;
  }
}

function opOnResize() {
  if (window.innerWidth < 650) {
    mobileOp();
  } else {
    desktopOp();
  }
}

window.addEventListener("resize", opOnResize);
opOnResize();
