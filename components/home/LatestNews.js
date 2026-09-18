'use client'
import React from "react";
import { Container, Image } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LatestNewsSwiper from "./LatestNewsSwiper";

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
                    <LatestNewsSwiper />
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