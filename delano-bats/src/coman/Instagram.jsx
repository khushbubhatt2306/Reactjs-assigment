import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";


const images = [
    "https://cdn.buttercms.com/66XUpOoTCSW0qAW8DDNC",
    "https://cdn.buttercms.com/gHY9s3QnQ8aLG2Zs1Wzy",
    "https://cdn.buttercms.com/6XELxXEXSzNh2os9JbCj",
    "https://cdn.buttercms.com/GpuPJ4LxSTeSuMDgfSfz",
    "https://cdn.buttercms.com/72eTtNi9Rdma3ig5hUrl",
    "https://cdn.buttercms.com/IQfiy6FISPKgCDM9yTIG",
  ];

function Instagram() {
  return (
   <div className="instagram">
  <div className="container">
    <h2 className="insta-heading">FOLLOW US ON INSTAGRAM</h2>
    <h3 className="instagram-username"><a href="https://www.instagram.com/delanobatco/">@delanobatco</a></h3>

    <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="px-4"
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="p-1">
              <img
                src={url}
                alt={`Instagram ${index}`}
                className="rounded-md w-full h-[220px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  </div> 


  )
}

export default Instagram
