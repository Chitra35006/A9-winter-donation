import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Import specific modules
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
const ImageSlider = () => {
    const slides = [
        {
          id: 1,
          image: "https://121clicks.com/wp-content/uploads/2021/01/winter_life_in_villages_of_bangladesh_01.jpg?text=Slide+1",
          title: "Dhaka",
        },
        {
          id: 2,
          image: "https://i.ytimg.com/vi/HstWTRlhdH0/maxresdefault.jpg?text=Slide+1",
          title: "Sylhet",
        },
        {
          id: 3,
          image: "https://cdnfl01.viewbug.com/media/mediafiles/2016/11/29/70007918_large.jpg?title=Slide+3",
          title: "Rangpur",
        },
        {
          id: 4,
          image: "https://64.media.tumblr.com/52402c58b256e11df30335f2af3793fc/5c00a3ffb2db937b-a6/s1280x1920/8cfdb989a3a7009e1cb76c141c9d3e22b3066516.jpg?title=Slide+4",
          title: "Ponchogor",
        },
      ];
    return (
        <div  style={{ width: "90%",height: "300px",margin: "auto",marginBottom:"50px" ,padding: "50px 10px" }}>
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          style={{ height: "500px" }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} style={{ position: "relative" }}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            
              <div
                 className="
                 absolute 
                 sm:top-1/2 
                 sm:left-1/2 
                 top-24
                 left-40
                 transform 
                 -translate-x-1/2 
                 -translate-y-1/2 
                 text-white 
                 bg-black/60 
                 sm:p-6 
                 rounded 
                 text-center
                 font-bold 
                 "
              > 
                <p className="text-sm md:text-4xl mb-2">Welcome to Winter Wizard.The more you give, the more you get.</p>
                <span className="text-cyan-200 text-[10px] sm:text-base">{slide.title}</span>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default ImageSlider;