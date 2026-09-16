import { Container, Image } from "react-bootstrap";
import { RelatedProductCard } from "@/components/cards/RelatedProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/services";

export const RelatedProducts = () => {

    const [products, setProducts] = useState()

    const fetchProducs = async () => {
        try {

            const response = await getProducts()

            if (response.status === 404) {
                throw new Error("Error while fetching API endpoint")
            }
            setProducts(response.data.products)
        } catch (error) {
            if (error.response.status === 404) {
                // setError("Invalid URL or endpoint not found");
            } else {
                // setError(error)
            }
        }
    }

    useEffect(() => {
        fetchProducs()
    }, [])

    return (
        <section className="related-products-section mt-7">
            <Container className="mb-6 position-relative">
                <h2 className="fw-bolder text-center pb-1 mb-4 position-relative"><span className="underline-start">related products</span></h2>
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
                    {products?.slice(0, 12)?.map((card) => (
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
                    />
                </div>

                <div className="swiper-btn relatedProductsNext position-absolute end-0 top-50 z-3 shadow rounded-circle bg-white p-1">
                    <Image
                        src='/icons/angle-right-solid-full.svg'
                        className="icon--30px"
                        alt="Next"
                    />
                </div>

            </Container>
        </section>
    );
};