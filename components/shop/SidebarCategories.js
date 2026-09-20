"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup } from "react-bootstrap";

const SidebarCategories = ({ categories }) => {
    const pathname = usePathname();

    return (
        <div className="px-2">

            <p className="m-0 p-0 pb-1 mt-0 fs-4 fw-medium border-bottom mb-3">Categories</p>

            {categories?.map((category, index) => {

                const isActive = pathname === `/shop/${category.slug}`;

                return (
                    <ListGroup
                        variant="flush"
                        key={index}
                        className="category-list"
                    >
                        <ListGroup.Item className="d-flex justify-content-between">
                            <Link href={`/shop/${category.slug}`}
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