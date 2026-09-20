import { Container } from "react-bootstrap";
import { getProducts } from "@/services/services";
import TopProductsSwiper from "./TopProductsSwiper";

export const TopProducts = async () => {

    const response = await getProducts();

    const products = response?.data?.products?.slice(18, 31) || [];

    return (
        <section className="top-products-section">
        <Container className="position-relative mt-6 pb-6">
            <h2 className="fw-bolder text-center pb-1 mb-6 position-relative">top <span className="underline-start">products</span></h2>
            <TopProductsSwiper products={products} />
        </Container>
        </section>
    );
};