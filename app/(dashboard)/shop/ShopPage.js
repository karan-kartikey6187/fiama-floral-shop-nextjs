import React, { Fragment } from 'react'
import { Col, Container, Row, ToastContainer } from 'react-bootstrap'
import { ShopProducts } from '@/components/shop/ShopProducts'
import { Sidebar } from '@/components/shop/Sidebar'
import { BreadcrumbSection } from '@/components/common/BreadcrumbSection'
import { getListProducts, getProducts } from '@/services/services'

const ShopPage = async ({ slug, search  }) => {

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

  if (search && products.length === 0) {
    return (
      <Fragment>
        <BreadcrumbSection
          currentPage="Shop"
          slug={slug}
          showSlug={true}
        />

        <Container>
          <div className="text-center py-7 text-danger">
            <h3 className='fs-2 fw-semibold'>No Items Found</h3>
          </div>
        </Container>

        <ToastContainer />
      </Fragment>
    )
  }

  return (
      <Fragment>
        <BreadcrumbSection
          currentPage="Shop"
          slug={slug}
          showSlug={true}
        />
        <Container>
          <Row>
            <Col lg={3} className="mt-7 mb-6 p-0 order-0">
              <Sidebar search={search}/>
            </Col>
            <Col lg={9} className="order-1">
              <ShopProducts slug={slug} search={search}/>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
  )
}

export default ShopPage
