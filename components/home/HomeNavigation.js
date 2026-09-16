import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Container, Nav } from "react-bootstrap";

export const HomeNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [navBar, setNavBar] = useState(false)

  const closeTimer = useRef(null);

  const handleMouseEnter = (dropdown) => {

    clearTimeout(closeTimer.current);

    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    clearTimeout(closeTimer.current);

    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 700);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      setNavBar(true)
    }
    else {
      setNavBar(false)
    }
  })

  return (
    <div className="p-0 m-0">
      <div className={`custom-nav-item position-relative d-flex justify-content-center align-items-center pt-5 border-bottom pb-2 w-100 d-none d-lg-flex  ${navBar ? "position-fixed fixed-top justify-content-between bg-white" : "position-relative"}`}>
        <Container className={`d-flex justify-content-center align-items-center w-100  ${navBar ? "justify-content-between" : ""}`}>
          {navBar && <Image src='/logos/fiama-logo.webp' alt="Fiama Floral Shop Logo" width={120} height={31}/>}
          <Nav className="d-flex gap-5 mt-1 pb-1 justify-content-evenly">
            <Link
              href="/"
              className="nav-link p-0 text-light-grey fw-medium ms-3"
            >
              HOME
            </Link>

            <Nav.Item
              className="me-3"
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={handleMouseLeave}
            >
              <span className="nav-link p-0 text-light-grey fw-medium ms-2">
                PAGES
              </span>

              {activeDropdown === "pages" && (
                <div
                  className="custom-dropdown position-absolute pages-dropdown bg-white pt-4 ps-5 pe-4 d-flex translate-middle-x"
                  onMouseEnter={() => handleMouseEnter("pages")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="d-flex flex-column gap-1">
                    <Link className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" href="/shop">Shop Left sidebar</Link>
                    <Link className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" href="/cart">Cart</Link>
                    <Link className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" href="/wishlist">Wishlist</Link>
                    <Link className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" href="/checkout">Checkout</Link>
                    <Link className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" href="/account">My Account</Link>
                  </div>
                </div>
              )}
            </Nav.Item>

            <Link href="/shop" className="nav-link p-0 text-light-grey fw-medium">
              SHOP
            </Link>

            <Nav.Item className="me-3">
              <Link
                href="/account"
                className="nav-link p-0 text-light-grey fw-medium ms-2"
              >
                MY ACCOUNT
              </Link>
            </Nav.Item>

          </Nav>
        </Container>
      </div>
    </div>
  );
};
