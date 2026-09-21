"use client";
import { Suspense } from "react";
import SidebarCategories from "./SidebarCategories";


const SidebarCategoriesWrapper = ({ categories, products }) => {
    return (
        <Suspense fallback={null}>
            <SidebarCategories
                categories={categories}
                products={products}
            />
        </Suspense>
    );
};

export default SidebarCategoriesWrapper;