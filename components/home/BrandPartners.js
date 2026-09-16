'use client'
import React from 'react'
import { Container, Image } from 'react-bootstrap'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const BrandPartners = () => {
    return (
        <section className="brand-partners-section bg-light-grey">
            <Container>
                <Swiper
                    className="footerSwiper"
                    slidesPerView={2}
                    spaceBetween={20}
                    allowTouchMove={true}
                    loop={true}
                    breakpoints={{
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                        <Image fluid src='/images/brand-partners-img-1.webp' alt="" style={{ height: "80px" }} />
                    </SwiperSlide>

                    <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                        <Image fluid src='/images/brand-partners-img-2.webp' alt="" style={{ height: "80px" }} />
                    </SwiperSlide>

                    <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                        <Image fluid src='/images/brand-partners-img-3.webp' alt="" style={{ height: "80px" }} />
                    </SwiperSlide>

                    <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                        <Image fluid src='/images/brand-partners-img-4.webp' alt="" style={{ height: "80px" }} />
                    </SwiperSlide>

                    <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                        <Image fluid src='/images/brand-partners-img-5.webp' alt="" style={{ height: "80px" }} />
                    </SwiperSlide>

                    <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                        <Image fluid src='/images/brand-partners-img-1.webp' alt="" style={{ height: "80px" }} />
                    </SwiperSlide>
                </Swiper>


            </Container>
        </section >
    )
}