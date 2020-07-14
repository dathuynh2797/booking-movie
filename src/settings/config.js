export const domain = "http://movie0706.cybersoft.edu.vn/api";
export const groupID = "GP02";

// "phone": 360px,
//   "tablet": 768px,
//   "desktop": 1366px,
//   "LGdesktop": 1920px

export const settingSlider = {
  //   dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 4,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1028,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 1,
      },
    },
  ],
};
