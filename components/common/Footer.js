import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Nav } from 'react-bootstrap'


export const Footer = () => {
  return (
    <footer>
     <section className="footer-top bg-light-dark pt-4 pt-md-5 pt-lg-6 pt-xl-7">
      <div className="footer-top-container container pb-5 pb-lg-6 pb-xl-7">
        <div className="footer-wrapper row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          <div className="footer-links col-md-4 col-xl-2 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">My Accoout</strong>
             <Nav className="d-flex flex-column gap-4 mt-2">
                 <Link href="/account" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">My account</Link>
                 <Link href="/checkout" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Checkout</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Contact us</Link>
                 <Link href="/cart" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Shopping Cart</Link>
                 <Link href="/wishlist" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Wishlist</Link>
             </Nav>
         </div>
          <div className="footer-links col-md-4 col-lg-3 col-xl-2 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">Quick Links</strong>
             <Nav className="d-flex flex-column gap-4 mt-2">
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Store Location</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Orders Tracking</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Size Guide</Link>
                 <Link href="/account" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">My account</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">FAQs</Link>
             </Nav>
         </div>
          <div className="footer-links col-md-4 col-lg-3 col-xl-2 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">Information</strong>
             <Nav className="d-flex flex-column gap-4 mt-2">
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Privacy Page</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">About us</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Careers</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Delivery Inforamtion</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Term & Conditions</Link>
             </Nav>
         </div>
          <div className="footer-links col-md-4 col-lg-3 col-xl-2 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">Customer Service</strong>
             <Nav className="d-flex flex-column gap-4 mt-2">
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Shipping Policy</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Help & Contact Us</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Returns & Refunds</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Online Stores</Link>
                 <Link href="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Terms and Conditions</Link>
             </Nav>
         </div>
          <div className="footer-links col-md-7 col-lg-7 col-xl-4 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">About Our Shop</strong>
             <Nav className="d-flex flex-column gap-3 mt-2">
                 <p className="text-light-grey-800 fs-14 text-decoration-none fw-normal text-sm-start text-wrap mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo incididunt ut labore et dolore</p>
                 <div className="d-flex align-items-center gap-1"><Image src='/icons/location-grey.svg' alt="" height={16} width={16}/><address className="text-light-grey-800 fs-14 fw-normal text-sm-start mb-0">Brooklyn, New York, United States</address></div>
                 <div className="d-flex align-items-center gap-1"><Image src='/icons/telephone-grey.svg' alt="" height={16} width={16}/><Link href="tel:+88015-88888-9999" className="text-light-grey-800 p-0 nav-link fw-normal text-decoration-none">+88015-88888-9999</Link></div>
                 <div className="d-flex align-items-center gap-1"><Image src='/icons/envelope-grey.svg' alt="" height={16} width={16}/><Link href="mailto: example@gmail.com" className="text-light-grey-800 p-0 nav-link fw-normal text-decoration-none">example@example.com</Link></div>
                 <Image src='/images/footer-payment-img.webp' alt="" width={197} height={20}/>
             </Nav>
         </div>
        </div>
      </div>
     </section>
     <section className="footer-bottom bg-light-dark">
      <div className="container px-0">
        <div className="d-flex flex-column align-items-center justify-content-center flex-md-row justify-content-md-between py-2 gap-2 gap-md-0">
          <p className="text-light-grey-800 mb-0 fs-13 fw-light">© 2026 - Just For You</p>
          <div className="d-flex gap-3 ">
            <Image src='/icons/facebook-grey.svg' alt="" className="icon--mini-logo" height={15} width={15}/>
            <Image src='/icons/twitter-grey.svg' alt="" className="icon--mini-logo" height={15} width={15}/>
            <Image src='/icons/pinterest-grey.svg' alt="" className="icon--mini-logo" height={15} width={15}/>
            <Image src='/icons/instagram-grey.svg' alt="" className="icon--mini-logo" height={15} width={15}/>
          </div>
          <div className="d-none d-md-block"></div>
        </div>
      </div>
     </section>
    </footer>
  )
}
