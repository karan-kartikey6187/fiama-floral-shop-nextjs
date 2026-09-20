import { getProducts } from "@/services/services";
import { RelatedProducts } from "@/components/shop/RelatedProducts";
import ProductDetailsSection from "./ProductDetailsSection";
import { Fragment } from "react";

const ProductDetails = async ({ product }) => {

    const response = await getProducts();

    const relatedProducts = response?.data?.products || [];

    return (
        <Fragment>
            <ProductDetailsSection product={product} />
            <RelatedProducts products={relatedProducts} />
        </Fragment>
    );
};

export default ProductDetails;