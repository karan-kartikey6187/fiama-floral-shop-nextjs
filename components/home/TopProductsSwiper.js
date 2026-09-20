"use client";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductCard } from "@/components/cards/ProductCard";
import { Fragment } from "react";

const TopProductsSwiper = ({ products }) => {
  return (
    <Fragment>
      <Swiper className="topProductsSwiper-wrapperr pt-3"
            modules={[Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            pagination={{
                el: ".swiper-pagination-topProducts",
                clickable: true,
            }}
            navigation={{
                nextEl: ".topProductsNext",
                prevEl: ".topProductsPrev",
            }}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
        >
            {products?.slice(0, 12)?.map((card) => (
                <SwiperSlide key={card.id} className="h-100">
                    <ProductCard
                        swiper={true}
                        product={card}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-pagination swiper-pagination-topProducts d-md-none bottom-0"></div>
        <div className="swiper-btn topProductsPrev position-absolute start-0 top-50 z-3 shadow rounded-circle bg-white p-1 d-none d-md-block">
            <Image
                src='/icons/angle-left-solid-full.svg'
                className="icon--30px"
                alt="Previous"
            />
        </div>
        <div className="swiper-btn topProductsNext position-absolute end-0 top-50 z-3 shadow rounded-circle bg-white p-1 d-none d-md-block">
            <Image
                src='/icons/angle-right-solid-full.svg'
                className="icon--30px"
                alt="Next"
            />
        </div>
    </Fragment>
  )
}

export default TopProductsSwiper
