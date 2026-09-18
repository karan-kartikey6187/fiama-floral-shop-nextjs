"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Fragment } from 'react';

const BrandPartnersSwiper = () => {
  return (
    <Fragment>
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
                <Image src='/images/brand-partners-img-1.webp' alt="" width={127} height={80} className='img-fluid'/>
            </SwiperSlide>

            <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                <Image src='/images/brand-partners-img-2.webp' alt="" width={78} height={80} className='img-fluid'/>
            </SwiperSlide>

            <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                <Image src='/images/brand-partners-img-3.webp' alt="" width={146} height={80} className='img-fluid'/>
            </SwiperSlide>

            <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                <Image src='/images/brand-partners-img-4.webp' alt="" width={144} height={80} className='img-fluid'/>
            </SwiperSlide>

            <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                <Image src='/images/brand-partners-img-5.webp' alt="" width={96} height={80} className='img-fluid'/>
            </SwiperSlide>

            <SwiperSlide className="d-flex justify-content-center align-items-center brand-partner-img px-2 px-sm-0 py-4 py-lg-6">
                <Image src='/images/brand-partners-img-1.webp' alt="" width={127} height={80} className='img-fluid'/>
            </SwiperSlide>
        </Swiper>
    </Fragment>
  )
}

export default BrandPartnersSwiper
