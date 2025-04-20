import {Navigation,Autoplay} from 'swiper/modules';
export const Slidersetting2={
    modules:[Navigation],
    modules:[Autoplay],
    slidesPerView:1,
    loop:true,
    spaceBetween:0,
    breakpoints:{
        0: {
            slidesPerView: 1, 
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3, 
          },

          1600:{
            slidesPerView:5
          }
    },
    navigation:{
        nextEl:".next2",
        prevEl:".prev2"
      },
      autoplay: {
        delay: 2500, 
        disableOnInteraction: false, 
      },
}