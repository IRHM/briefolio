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

new BlazeSlider(sliderEl, sliderCfg);
