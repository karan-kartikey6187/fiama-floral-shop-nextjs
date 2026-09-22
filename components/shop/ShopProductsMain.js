"use client";
import { Container } from "react-bootstrap";
import { Fragment, useState } from "react";
import { PageNavigation } from "./PageNavigation";
import ShopProductsList from "./ShopProductsList";

const ShopProductsMain = ({ products }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 9;

    const totalPages = Math.ceil(
        products.length / productsPerPage
    );

    const startIndex =
        (currentPage - 1) * productsPerPage;

    const currentProducts = products.slice(
        startIndex,
        startIndex + productsPerPage
    );

    const handlePageChange = (page) => {

        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Fragment>

            <section className="shop-products-section mt-0 mt-lg-7 mb-0 mb-lg-7">

                <Container>

                    <div className="shop-products-header d-flex flex-column flex-md-row justify-content-start align-items-start align-items-md-center mb-6 justify-content-md-between pb-1">

                        <p className="mb-0 display-4 text-light-grey fw-medium">
                            Showing {currentProducts.length} of {products.length} results
                        </p>

                    </div>

                    <ShopProductsList
                        products={currentProducts}
                    />

                    {products.length > productsPerPage && (
                        <PageNavigation
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}

                </Container>

            </section>

        </Fragment>
    );
};

export default ShopProductsMain;