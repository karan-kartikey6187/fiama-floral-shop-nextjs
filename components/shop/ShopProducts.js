import { getListProducts } from "@/services/services";
import ShopProductsMain from "./ShopProductsMain";

export const ShopProducts = async ({ slug }) => {

    const categorySlug = slug || "beauty";

    let products = [];

    const response = await getListProducts(categorySlug);

    products = response?.data?.products || [];

    return (
        <ShopProductsMain products={products} />
    );
};