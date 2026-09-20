import { getCategory } from "@/services/services";
import SidebarCategories from "./SidebarCategories";


export const Sidebar = async () => {
    
    const response = await getCategory();

    const categories = response?.data || [];

    return <SidebarCategories categories={categories} />;
};