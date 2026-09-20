"use client";
import { RelatedProductCard } from "@/components/cards/RelatedProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const RelatedProductsSwiper = ({ products }) => {
  return (
    <div className="mb-7">
      <Swiper
            className="relatedProductsSwiper pt-3"
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={15}
            loop={true}
            navigation={{
                nextEl: ".relatedProductsNext",
                prevEl: ".relatedProductsPrev",
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
            {products?.slice(13, 26)?.map((card) => (
                <SwiperSlide key={card.id} className="h-100">
                    <RelatedProductCard
                        swiper={true}
                        product={card}
                    />
                </SwiperSlide>
            ))}
        </Swiper>

        <div className="swiper-btn relatedProductsPrev position-absolute start-0 top-50 z-3 shadow rounded-circle bg-white p-1">
            <Image
                src='/icons/angle-left-solid-full.svg'
                className="icon--30px"
                alt="Previous"
                height={30}
                width={30}
            />
        </div>

        <div className="swiper-btn relatedProductsNext position-absolute end-0 top-50 z-3 shadow rounded-circle bg-white p-1">
            <Image
                src='/icons/angle-right-solid-full.svg'
                className="icon--30px"
                alt="Next"
                height={30}
                width={30}
            />
        </div>
    </div>
  )
}

export default RelatedProductsSwiper
