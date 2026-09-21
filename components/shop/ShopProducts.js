import { getListProducts, getProducts } from "@/services/services";
import ShopProductsMain from "./ShopProductsMain";

export const ShopProducts = async ({ slug, search  }) => {

     let products = [];

    if (slug) {
        const response = await getListProducts(slug);

        products = response?.data?.products || [];
    } else {
        const response = await getProducts();

        products = response?.data?.products || [];
    }

    if (search) {
        products = products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <ShopProductsMain products={products} />
    );
};