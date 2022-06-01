import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import {  Card } from "react-bootstrap";

export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);
  console.log(swiperRef);


  return (
    <div className="container mt-5">
      <>
        <Swiper
          onSwiper={setSwiperRef}
          autoHeight={true}
          slidesPerView={1}
          loop={true}
          scrollbar={{
            hide: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          spaceBetween={0}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <Card className="slider-card">
                <div className="d-flex justify-content-around align-items-center slider-container">
                  <div>
                    <img
                      className="slider-img"
                      src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?size=626&ext=jpg&ga=GA1.2.523867278.1651156463"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>
                      We are the best digital marketing agency in the world.
                    </h5>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="slider-card">
                <div className="d-flex justify-content-around align-items-center slider-container ">
                  <div>
                    <img
                      className="slider-img"
                      src="https://img.freepik.com/free-vector/business-team-planning-working-process-flat-vector-illustration-cartoon-colleagues-talking-sharing-thoughts-smiling-company-office-teamwork-workflow-concept_74855-9813.jpg?size=626&ext=jpg&ga=GA1.2.523867278.1651156463"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>
                      We are the best digital marketing agency in the world.
                    </h5>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="slider-card">
                <div className="d-flex justify-content-around align-items-center slider-container ">
                  <div>
                    <img
                      className="slider-img"
                      src="https://img.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg?size=626&ext=jpg&ga=GA1.2.523867278.1651156463"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>
                      We are the best digital marketing agency in the world.
                    </h5>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          </div>
        </Swiper>
      </>
    </div>
  );
}
