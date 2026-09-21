import { getCategory, getProducts } from "@/services/services";
import SidebarCategories from "./SidebarCategories";


export const Sidebar = async ({ search }) => {
    
    const response = await getCategory();

    const categories = response?.data || [];

    let products = [];

    if (search) {
        const productResponse = await getProducts();

        products = productResponse?.data?.products || [];

        products = products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    return <SidebarCategories categories={categories} products={products}/>;
};