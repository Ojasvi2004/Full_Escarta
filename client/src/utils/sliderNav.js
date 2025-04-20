import {Navigation} from 'swiper/modules';
export const Slidersetting={
    modules:[Navigation],
    slidesPerView:1,
    loop:true,
    spaceBetween:50,
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
            slidesPerView: 4, 
          },
    },
    navigation:{
        nextEl:".next",
        prevEl:".prev"
      }
}