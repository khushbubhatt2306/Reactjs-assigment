import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const reviewImages = [
  "https://cdn.buttercms.com/4VGrB7XRAC2fsgoxxjox",
  "https://cdn.buttercms.com/3n0Anxu6S82Kpvv91iD0",
  "https://cdn.buttercms.com/2LYSGlAcS16rSoDQfGMy",
  "https://cdn.buttercms.com/v4ZqN87uRq2AOGCjP8dg",
  "https://cdn.buttercms.com/VxaKfkXHSJaTLKzIpcx3",
];

function Review() {
  return (
    <div className="review-slider">
      <div className="container">
        <div className="row">
          <h2 className="section-heading">
            TURNING ORDINARY MOMENTS INTO ADVENTURE
          </h2>
          <div className="heading-text">
            <img
              className="review-stars"
              src="https://cdn.buttercms.com/DbFt6ZuARcGF1xhXm7JS"
            />
            <span>Trusted by 1000's of players and coaches</span>
          </div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            className="mySwiper"
          >
            {reviewImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg overflow-hidden shadow-md review-img">
                  <img
                    src={src}
                    alt={`Review ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Review;
