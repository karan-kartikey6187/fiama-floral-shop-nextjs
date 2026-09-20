import { Container } from "react-bootstrap";
import { getProducts } from "@/services/services";
import RelatedProductsSwiper from "./RelatedProductsSwiper";

export const RelatedProducts = async () => {
    
    const response = await getProducts();
    
    const products = response.data.products || [];

    return (
        <section className="related-products-section mt-7">
            <Container className="mb-6 position-relative">
                <h2 className="fw-bolder text-center pb-1 mb-4 position-relative"><span className="underline-start">related products</span></h2>
                <RelatedProductsSwiper products={products} />
            </Container>
        </section>
    );
};