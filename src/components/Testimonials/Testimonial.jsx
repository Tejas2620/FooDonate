import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Our aim for FOODONATE is to ensure that no food should be wasted in parties and various functions.Here at FOODONATE we try to ensure that we solve the problem using such collaborative methods.",
    },
    {
      img: profilePic2,
      review:
        "We created this platform to make it easy for the NGO's to find the required resources (FOOD), which will be later distributed to the underprivileged people.   ",
    },
    {
      img: profilePic3,
      review:
        "I Tejas Pawar served for the noble cause of delivering food to this NGO.I feel truly grateful that I could help the needy children via the FOODONATE platform. ",
    },
    {
      img: profilePic4,
      review:
        "Helping the NGO to arrange the food which would be donated, gave me great satisfaction.One must take care that food should never be wasted. Instead it should be donated where it is required the most.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Our </span>
        <span>Hard Working </span>
        <span>Volunteers</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
