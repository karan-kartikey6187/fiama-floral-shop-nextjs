"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ListGroup } from "react-bootstrap";

const SidebarCategories = ({ categories, products  }) => {
    const pathname = usePathname();

    const searchParams = useSearchParams();

    const search = searchParams.get("search");

    const filteredCategories = search
        ? categories?.filter((category) =>
            products?.some((product) => product.category === category.slug)
        )
        : categories;

    return (
        <div className="px-2">

            <p className="m-0 p-0 pb-1 mt-0 fs-4 fw-medium border-bottom mb-3">Categories</p>

            {filteredCategories?.map((category, index) => {

                const isActive = pathname === `/shop/${category.slug}`;

                const categoryUrl = search
                    ? `/shop/${category.slug}?search=${encodeURIComponent(search)}`
                    : `/shop/${category.slug}`;

                return (
                    <ListGroup
                        variant="flush"
                        key={index}
                        className="category-list"
                    >
                        <ListGroup.Item className="d-flex justify-content-between">
                            <Link 
                                href={categoryUrl}
                                className={`text-decoration-none nav-link ${isActive ? "active" : ""}`}
                            >
                                {category.name}
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                );
            })}
        </div>
    );
};

export default SidebarCategories;