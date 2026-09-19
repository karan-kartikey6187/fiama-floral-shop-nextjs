'use client'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Bootstrap Components
import { Accordion, Badge } from 'react-bootstrap';
import { HomeNavigation } from '@/components/home/HomeNavigation';
import { Fragment, useEffect, useState } from 'react';
import { Moon, Sun } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { ConvertToCurrency } from '@/helper/utils';
import Image from 'next/image';
import useMounted from '@/hooks/useMounted';
import { useRouter } from 'next/navigation';


export const Header = () => {

  const { wishlistItems } = useSelector((state) => state.wishlist)

  const cartState = useSelector((state) => state.cart)

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [themeLoaded, setThemeLoaded] = useState(false);

  const handleNavClick = () => {
    setShowOffcanvas(false);
  };

  const router = useRouter()

  const hasMounted = useMounted();


  const handleThemeMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("dark");

    if (savedDarkMode === "true") {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }

    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (!themeLoaded) return;

    localStorage.setItem("dark", darkMode ? "true" : "false");

    const htmlElement = document.querySelector("html");

    if (htmlElement) {
        htmlElement.setAttribute(
            "data-bs-theme",
            darkMode ? "dark" : "light"
        );
    }
}, [darkMode, themeLoaded]);

  return (
    <Fragment>
    {hasMounted && 
      <div>
        <div className='border-bottom'>
          <Container>
            <Navbar expand="lg" className="mb-4 mt-6 justify-content-between align-items-center flex-column flex-sm-row">
              <Navbar.Brand><Link href="/"><Image src='/logos/fiama-logo.webp' alt="Fiama Floral Shop Logo" width={120} height={31}/></Link></Navbar.Brand>
              <Navbar.Offcanvas
                id={"offcanvasNavbar-expand-lg"}
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
                placement="start"
                responsive="lg"
                show={showOffcanvas}
                onHide={() => setShowOffcanvas(false)}
                className="header-offcanvas px-5 pt-2 pt-4 pb-5 overflow-y-auto"
              >
                <Offcanvas.Header closeButton className='border-bottom border-2 p-0 pb-1 mb-1'>
                  <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className='pb-2'>
                    <Image src='/logos/fiama-logo.webp' alt="Fiama Floral Shop Logo" onClick={() => router.push("/")} width={120} height={31}/>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='justify-content-center p-0'>

                  <div className="d-flex align-items-center d-none d-lg-flex me-3">
                    <Image src='/icons/telephone.svg' alt="Phone"  className="icon--20px me-3" width={20} height={20}/>
                    <div>
                      <p className="mb-0 text-light-grey fs-13 fw-medium mb-4px">PHONE</p>
                      <p className="mb-0"><Link href="tel:0123456789" className="text-decoration-none text-black fs-13 fw-normal text-nowrap dark-mode-text">+0123-456-789</Link></p>
                    </div>
                  </div>
                  <div className="search-bar p-1 border border-1 d-none d-lg-flex d-flex align-items-center rounded rounded-5">
                    <Form className="d-flex border-0 w-100" role="search">
                      <Form.Control className="me-2 border-0 fw-normal" type="search" placeholder="Search here..." />
                      <Button variant='transparent' className="border-0" type="submit">
                        <Image src='/icons/search.svg' alt="Search" className='search-icon-header' width={16} height={16}/>
                      </Button>
                    </Form>
                  </div>
                  <div className="search-bar-offcanvas p-1 d-lg-none d-flex align-items-center rounded rounded-1 bg-body-tertiary mt-2">
                    <Form className="d-flex border-0 w-100 justify-content-center" role="search">
                      <Form.Control className="form-control me-2 border-0 bg-body-tertiary fw-normal" type="search" placeholder="Search here..." />
                      <Button variant='transparent' className="border-0 bg-transparent" type="submit">
                        <Image src='/icons/search.svg' alt="Search" className='search-icon-header' width={16} height={16}/>
                      </Button>
                    </Form>
                  </div>

                  <Accordion className='d-lg-none border-0 mt-3 pb-4 border-bottom'>
                    <Accordion.Item eventKey="0" className='border-0'>
                      <Accordion.Header className='border-0'>HOME</Accordion.Header>
                      <Accordion.Body className='border-0 ps-1 pt-1'>
                        <div className="d-flex flex-column gap-3 ps-0 pe-1">
                          <Link className="text-decoration-none text-light-grey fw-normal" href="/" onClick={handleNavClick}>Home Style - 01</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Home Style - 02</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Home Style - 03</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Home Style - 04</Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item >
                    <Nav.Link className="text-nowrap text-light-grey fw-normal py-2" href="#">ABOUT US</Nav.Link>
                    <Accordion.Item eventKey="1" className='border-0'>
                      <Accordion.Header className='border-0'>SHOP</Accordion.Header>
                      <Accordion.Body className='border-0 ps-1 pt-1'>
                        <div className="d-flex flex-column gap-3 ps-0 pe-1">
                          <Link className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} href="/shop">Shop</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Shop Grid</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} href="/shop">Shop Left sidebar</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Shop right sidebar</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Shop details</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} href="/cart">Cart</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} href="/wishlist">Wishlist</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} href="/checkout">Checkout</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} href="/account">My Account</Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='border-0'>
                      <Accordion.Header className='border-0'>NEWS</Accordion.Header>
                      <Accordion.Body className='border-0 ps-1 pt-1'>
                        <div className="d-flex flex-column gap-3 ps-0 pe-1">
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">News</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">News Grid</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">News Left sidebar</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">News Right sidebar</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">News details</Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='border-0'>
                      <Accordion.Header className='border-0'>PAGES</Accordion.Header>
                      <Accordion.Body className='border-0 ps-1 pt-1'>
                        <div className="d-flex flex-column gap-3 ps-0 pe-1">
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">About Us</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Portfolio</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Portfolio - 02</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Portfolio Details</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">FAQ</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Google Map Locations</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">404</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Contact</Link>
                          <Link className="text-decoration-none text-light-grey fw-normal" href="#">Coming Soon</Link>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Nav.Link className="text-nowrap text-light-grey fw-normal py-2" href="#">CONTACT</Nav.Link>
                  </Accordion>

                  <div className="pb-3 border-bottom mb-5 d-lg-none">
                    <div className="icon-box d-flex align-items-center mt-2 position-relative">
                      <div className="icon--50px border d-flex justify-content-center align-items-center me-1"><Image src='/icons/person.svg' className="icon-link" alt="" width={16} height={16}/></div>
                      <Link onClick={handleNavClick} href="/account" className="mb-0 text-light-grey fw-normal stretched-link nav-link">My Account</Link>
                    </div>
                    <div className="icon-box d-flex align-items-center mt-2 position-relative">
                      <div className="icon--50px border d-flex justify-content-center align-items-center me-1"><Image src='/icons/heart.svg' className="icon-link" alt="" width={16} height={16}/>&thinsp;<sup className="text-light-grey fw-normal">{wishlistItems.length}</sup></div>
                      <Link onClick={handleNavClick} href="/wishlist" className="mb-0 text-light-grey fw-normal stretched-link nav-link">Wishlist</Link>
                    </div>
                    <div className="icon-box d-flex align-items-center mt-2 position-relative">
                      <div className="icon--50px border d-flex justify-content-center align-items-center me-1"><Image src='/icons/cart.svg' className="icon-link" alt="" width={16} height={16}/>&thinsp;<sup className="text-light-grey fw-normal">{cartState?.totalQuantities}</sup></div>
                      <Link onClick={handleNavClick} href="/cart" className="mb-0 text-light-grey fw-normal stretched-link nav-link">Shoping Cart</Link>
                    </div>
                  </div>
                  <div className="d-flex d-lg-none gap-1 mb-1">
                    <div className="icon--40px d-flex justify-content-center align-items-center bg-body-tertiary"><Image src='/icons/facebook-grey.svg' alt="" width={16} height={16}/></div>
                    <div className="icon--40px d-flex justify-content-center align-items-center bg-body-tertiary"><Image src='/icons/twitter-grey.svg' alt="" width={16} height={16}/></div>
                    <div className="icon--40px d-flex justify-content-center align-items-center bg-body-tertiary"><Image src='/icons/pinterest-grey.svg' alt="" width={16} height={16}/></div>
                    <div className="icon--40px d-flex justify-content-center align-items-center bg-body-tertiary"><Image src='/icons/instagram-grey.svg' alt="" width={16} height={16}/></div>
                  </div>

                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <div className='d-flex justify-content-center align-items-center mt-3 mt-lg-0 flex-wrap flex-md-nowrap'>
                <div type="button" onClick={() => router.push("/wishlist")} className="wishlist-toggler-btn position-relative d-flex align-items-center me-4">
                  <Image src='/icons/heart.svg' alt="Wishlist" className="icon--20px" width={16} height={16}/>
                  {wishlistItems.length === 0 ? " " : <Badge bg='primary' className="position-absolute top-0 badge-icon translate-middle rounded-circle d-flex justify-content-center align-items-center">{wishlistItems.length}</Badge>}
                </div>
                <div role='button' onClick={() => router.push("/cart")} className="cart-toggler-btn position-relative d-flex align-items-center me-1">
                  <Image src='/icons/cart.svg' alt="Cart" className="icon--20px" width={16} height={16}/>
                  {cartState?.totalQuantities === 0 ? " " : <Badge bg="primary" className="position-absolute top-0 badge-icon translate-middle rounded-circle d-flex justify-content-center align-items-center">{cartState?.totalQuantities}</Badge>}
                </div>
                <Button variant=" " onClick={() => router.push("/cart")} className="cart-toggler-btn d-flex flex-column ms-0 position-relative border-0 bg-transparent align-items-start me-1">
                  <Link href="/cart" className="mb-0 fs-13 fw-medium text-light-grey text-decoration-none stretched-link text-nowrap">YOUR CART</Link>
                  <p className="mb-0 fs-13 fw-medium text-primary" style={{ marginTop: '4px' }}>{ConvertToCurrency(cartState.subTotal)}</p>
                </Button>
                <Badge onClick={handleThemeMode}
                  className={`theme-change-btn me-0 rounded-circle p-1 
                  ${darkMode ? "bg-white text-dark" : "bg-dark text-light"}`}
                  role="button">
                  {darkMode ? <Sun size={18} /> : <Moon size={18} color='white' />}
                </Badge>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className='border-0' onClick={() => setShowOffcanvas(true)} />
              </div>
            </Navbar>
          </Container>
        </div>
        <HomeNavigation />
      </div>}
    </Fragment>
  );
}
