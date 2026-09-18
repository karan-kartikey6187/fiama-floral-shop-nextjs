import React from 'react'
import { Image } from 'react-bootstrap';
import { ConvertToCurrency, toTitleCase } from '../../helper/utils';
import AddToCart from '../common/AddToCart';
import { AddToWishlist } from '../common/AddToWishlist';

export const ProductInfo = ({ product }) => {

  const discountedPrice = product?.price - (product?.price * product?.discountPercentage / 100)

  return (
    <div className="ps-0 ps-md-2 mt-6 mt-md-0 pe-1 pe-md-0">
      <h1
        className="h3 fw-medium mb-2"
        style={{ fontSize: "30px" }}
      >
        {product?.title}
      </h1>
      <div className="d-flex gap-4 mb-5 flex-wrap">
        <p className="text-primary h4 fw-semibold mb-0 lh-sm"
          style={{ fontSize: "24px" }}
        >{ConvertToCurrency(discountedPrice)}&ensp;
          <del
            className="fw-semibold text-primary h5"
            style={{ opacity: 0.6 }}
          >{ConvertToCurrency(product?.price)}</del>
        </p>
        <div
          className="d-flex align-items-center"
          style={{ gap: "3px" }}
        >
          <Image
            src='/icons/star-yellowy.svg'
            alt=""
            className="icon--12px"
          />
          <Image
            src='/icons/star-yellowy.svg'
            alt=""
            className="icon--12px"
          />
          <Image
            src='/icons/star-yellowy.svg'
            alt=""
            className="icon--12px"
          />
          <Image
            src='/icons/star-yellowy.svg'
            alt=""
            className="icon--12px"
          />
          <Image
            src='/icons/star-yellowy.svg'
            alt=""
            className="icon--12px"
          />
          <p
            className="nav-link mb-0 fs-13 fw-normal text-nowrap"
            style={{
              color: "gold",
              marginLeft: "2px"
            }}
          >( 95 Reviews )</p>
        </div>
      </div>
      <p className="mb-5 fw-light text-black dark-mode-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dignissimos repellendus repudiandae incidunt quidem pariatur
        expedita, quo quis modi tempore non.
      </p>
      <div className="d-flex gap-2 mb-5 flex-wrap">
        <AddToCart product={product} modal={true} />
        <AddToWishlist product={product} modal={true} />
      </div>
      <div className="d-flex gap-3 mb-5">
        <p className="mb-0 fw-medium">
          Share:
        </p>
        <div className="d-flex gap-3">
          <Image
            src='/icons/facebook-grey.svg'
            alt=""
            className="icon--12px"
            style={{
              height: "16px",
              width: "16px"
            }}
          />
          <Image
            src='/icons/twitter-grey.svg'
            alt=""
            className="icon--12px"
            style={{
              height: "16px",
              width: "16px"
            }}
          />
          <Image
            src='/icons/pinterest-grey.svg'
            alt=""
            className="icon--12px"
            style={{ height: "16px", width: "16px" }}
          />
          <Image
            src='/icons/instagram-grey.svg'
            alt="" className="icon--12px" style={{ height: "16px", width: "16px" }} />
        </div>
      </div>
      <div className="d-flex gap-3">
        <div>
          <p className="fs-14 fw-medium text-light-grey">
            SKU:
          </p>
          <p className="fs-14 fw-medium text-light-grey">
            Categories:
          </p>
          <p className="fs-14 fw-medium text-light-grey">
            Tags:
          </p>
        </div>
        <div>
          <p className="fs-14 fw-medium text-light-gre nav-link">
            {product?.sku}
          </p>
          <p className="fs-14 fw-medium text-light-grey nav-link">
            {toTitleCase(product?.category)}
          </p>
          <p className="fs-14 fw-medium text-light-grey d-flex align-items-center gap-2">
            {product?.tags.map((tag, index) => {
              return (
                <span key={index} className="nav-link">
                  {tag}
                 {index < product.tags.length - 1 && ", "}
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
