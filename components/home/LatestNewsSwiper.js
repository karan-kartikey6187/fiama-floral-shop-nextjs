'use client'
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { LatestNewsCard } from "../cards/LatestNewsCard";

const LatestNewsSwiper = () => {
  return (
    <Fragment>
        <Swiper
            className="latestNewsSwiper"
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            pagination={{
            el: ".swiper-pagination-latestNews",
            clickable: true,
            }}
            navigation={{
            nextEl: ".latestNewsNext",
            prevEl: ".latestNewsPrev",
            }}
            breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            }}
        >
            <SwiperSlide className="h-100">
            <LatestNewsCard image="/images/latest-news-img-1.webp" />
            </SwiperSlide>
            <SwiperSlide className="h-100">
            <LatestNewsCard image="/images/latest-news-img-2.webp" />
            </SwiperSlide>
            <SwiperSlide className="h-100">
            <LatestNewsCard image="/images/latest-news-img-3.webp" />
            </SwiperSlide>
            <SwiperSlide className="h-100">
            <LatestNewsCard image="/images/latest-news-img-4.webp" />
            </SwiperSlide>
            <SwiperSlide className="h-100">
            <LatestNewsCard image="/images/latest-news-img-5.webp" />
            </SwiperSlide>
        </Swiper>
    </Fragment>
  );
};

export default LatestNewsSwiper;
