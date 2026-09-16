'use client'
import React from "react";
import { Container, Image } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { LatestNewsCard } from "@/components/cards/LatestNewsCard";

export const LatestNews = () => {
    return (
        <section className="latest-news-section">
            <Container>
                <h2 className="fw-bolder text-center pb-1 mb-4 position-relative">
                    <span className="underline-start">
                        latest news
                    </span>
                </h2>
                <div className="position-relative mt-6 pb-70px pb-lg-5 mb-7">
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
                            <LatestNewsCard image='/images/latest-news-img-1.webp' />
                        </SwiperSlide>
                        <SwiperSlide className="h-100">
                            <LatestNewsCard image='/images/latest-news-img-2.webp' />
                        </SwiperSlide>
                        <SwiperSlide className="h-100">
                            <LatestNewsCard image='/images/latest-news-img-3.webp' />
                        </SwiperSlide>
                        <SwiperSlide className="h-100">
                            <LatestNewsCard image='/images/latest-news-img-4.webp' />
                        </SwiperSlide>
                        <SwiperSlide className="h-100">
                            <LatestNewsCard image='/images/latest-news-img-5.webp' />
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-pagination swiper-pagination-latestNews bottom-0 d-lg-none"></div>
                    <div className="swiper-btn latestNewsPrev position-absolute start-0 top-50 z-3 shadow rounded-circle bg-white p-1 d-none d-lg-block">
                        <Image
                            src='/icons/angle-left-solid-full.svg'
                            className="icon--30px"
                            alt="Previous"
                        />
                    </div>
                    <div className="swiper-btn latestNewsNext position-absolute end-0 top-50 z-3 shadow rounded-circle bg-white p-1 d-none d-lg-block">
                        <Image
                            src='/icons/angle-right-solid-full.svg'
                            className="icon--30px"
                            alt="Next"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};