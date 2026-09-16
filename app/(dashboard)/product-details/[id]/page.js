import { getProduct } from "@/services/services";
import ProductDetails from "@/components/product-details/ProductDetails";

const ProductDetailsPage = async ({ params }) => {

    const { id } = await params;

    const response = await getProduct(id);

    return (
        <ProductDetails product={response?.data} />
    );
};

export default ProductDetailsPage;