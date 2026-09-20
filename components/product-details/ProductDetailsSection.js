"use client";
import { useEffect, useState } from "react";
import { BreadcrumbSection } from "@/components/common/BreadcrumbSection";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { ProductInfo } from "@/components/product-details/ProductInfo";
import { ToastContainer } from "react-toastify";

const ProductDetailsSection = ({ product }) => {

    const [selectedImage, setSelectedImage] = useState(
        product?.images?.[0]
    );

    useEffect(() => {
        if (product?.images?.length > 0) {
            setSelectedImage(product.images[0]);
        }
    }, [product]);

    return (
        <section className="product-details-section mb-7">

            <BreadcrumbSection
                currentPage="Products"
                slug={[product?.category, product?.title]}
                showSlug={true}
            />

            <Container>

                <Row className="mt-7">

                    <Col
                        lg={6}
                        className="mb-6 mb-md-7 mb-lg-0"
                    >

                        <div className="d-flex gap-1">

                            <div className="d-flex flex-column gap-1">

                                {product?.images?.map((image, index) => (

                                    <div
                                        key={index}
                                        className={`product-thumb ${
                                            selectedImage === image
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedImage(image);
                                        }}
                                    >
                                        <Image
                                            src={image}
                                            alt={product?.title}
                                            width={100}
                                            height={100}
                                            className="img-fluid"
                                        />
                                    </div>

                                ))}

                            </div>

                            <div className="product-main-image flex-grow-1">

                                <Image
                                    src={
                                        selectedImage ||
                                        product?.images?.[0]
                                    }
                                    alt={product?.title}
                                    width={600}
                                    height={600}
                                    className="img-fluid w-100"
                                />

                            </div>

                        </div>

                    </Col>

                    <Col lg={6}>
                        <ProductInfo product={product} />
                    </Col>

                </Row>

                <div className="border-bottom border-top d-flex justify-content-center gap-2 mt-7">

                    <Button className="border-0 rounded-0 px-4 py-1 text-white">
                        Description
                    </Button>

                </div>

                <p
                    className="text-center fw-normal lh-lg text-black mt-4 mb-6 dark-mode-text"
                    id="discription-item"
                >
                    {product?.description}
                </p>

            </Container>

            <ToastContainer />

        </section>
    );
};

export default ProductDetailsSection;