'use client'
import React, { Fragment } from 'react'
import { Col, Container, Row, ToastContainer } from 'react-bootstrap'
import { useParams } from 'next/navigation'
import useMounted from '@/hooks/useMounted'
import { ShopProducts } from '@/components/shop/ShopProducts'
import { Sidebar } from '@/components/shop/Sidebar'
import { BreadcrumbSection } from '@/components/common/BreadcrumbSection'

const ShopPage = () => {

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
  )
}

export default ShopPage
