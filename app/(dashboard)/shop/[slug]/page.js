"use client";
import { Fragment, useEffect } from "react";
import { BreadcrumbSection } from "@/components/common/BreadcrumbSection";
import { ShopProducts } from "@/components/shop/ShopProducts";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "@/components/shop/Sidebar";
import { ToastContainer } from "react-toastify";
import { useParams, usePathname, useRouter } from "next/navigation";
import useMounted from "@/hooks/useMounted";

const Shop = () => {

  const params = useParams();
  
  const hasMounted = useMounted();

  return (
    <Fragment>
      {hasMounted && (
        <Fragment>
          <BreadcrumbSection
            currentPage="Shop"
            slug={params.slug}
            showSlug={true}
          />
          <Container>
            <Row>
              <Col lg={3} className="mt-7 mb-6 p-0 order-0">
                <Sidebar />
              </Col>
              <Col lg={9} className="order-1">
                <ShopProducts />
              </Col>
            </Row>
          </Container>
          <ToastContainer />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Shop;
