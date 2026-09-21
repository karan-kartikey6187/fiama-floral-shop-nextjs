'use client'
import { AccountDetailsTab } from '@/components/account/AccountDetailsTab'
import { DashboardTab } from '@/components/account/DashboardTab'
import { OrdersTab } from '@/components/account/OrdersTab'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import { BreadcrumbSection } from '@/components/common/BreadcrumbSection'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { Fragment } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

const AccountPage = () => {

  const router = useRouter()
    
  const handleLogout = () => {
    localStorage.removeItem("login")
    localStorage.removeItem("id")
    router.push("/signin")
  }

  return (
    <ProtectedRoute>
      <Fragment>
        <BreadcrumbSection currentPage="My Account" showSlug={false} />
        <section className="my-account-section my-7">
          <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row className='align-items-start ps-0'>
                <Col lg={4}>
                  <Nav className="account-nav border-bottom border-3 w-100 d-flex flex-column">
                    <Nav.Item className='position-relative'>
                      <Nav.Link eventKey="1" className='navlinks p-0'>
                        <div role="button" className="my-account-tab-btn px-3 py-3 border d-flex justify-content-between align-items-center my-account-tabs-active active-acount-tab">
                          <p className="mb-0 fw-normal">Dashboard</p>
                          <Image src='/icons/house-fill.svg' alt="" width={16} height={16} />
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='position-relative'>
                      <Nav.Link eventKey="2" className='navlinks p-0'>
                        <div role="button" className="my-account-tab-btn px-3 py-3 border d-flex justify-content-between align-items-center my-account-tabs">
                          <p className="mb-0 fw-normal">Orders</p>
                          <Image src='/icons/file-earmark-text-fill.svg' alt="" width={16} height={16} />
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='position-relative'>
                      <Nav.Link eventKey="3" className='navlinks p-0'>
                        <div role="button" className="my-account-tab-btn px-3 py-3 border d-flex justify-content-between align-items-center my-account-tabs">
                          <p className="mb-0 fw-normal">Account Details</p>
                          <Image src='/icons/person-fill-dark.svg' alt="" width={16} height={16} />
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='position-relative'>
                      <Nav.Link eventKey="4" className='navlinks p-0'>
                        <div role="button" onClick={handleLogout} className="navlinks text-decoration-none text-dark px-3 py-3 border d-flex justify-content-between align-items-center my-account-tabs">
                          <p className="mb-0 fw-normal">Logout</p>
                          <Image src='/icons/box-arrow-right.svg' alt="" width={16} height={16}/>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col lg={8}>
                  <Tab.Content className='mt-2'>
                    <DashboardTab />
                    <OrdersTab />
                    <AccountDetailsTab />
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </section>
      </Fragment>
     </ProtectedRoute>
  )
}

export default AccountPage
