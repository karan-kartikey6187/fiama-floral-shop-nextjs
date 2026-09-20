"use client";
import React, { useRef } from 'react'
import { Button, Carousel, Container } from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image';


const PrevBtn = ({ carouselRef }) => {
  return (
    <div className='hero-prev-btn d-flex justify-content-start position-absolute start-0' onClick={()=>{carouselRef?.current?.prev();}}>
      <Button variant='primary' className="carousel-control-prev-btn carousel-control-btn position-absolute bg-transparent p-1 d-none d-xl-block rounded-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-prev-icon carousel-icon" aria-hidden="true"><Image src='/icons/angle-left-solid-full.svg' alt="" className='hero-carousel-btn' width={35} height={35}/></span>
        <span className="visually-hidden">Previous</span>
      </Button>
    </div>
  )
};

const NextBtn = ({ carouselRef }) => {
  return (
    <div className='hero-next-btn d-flex justify-content-end position-absolute end-0' onClick={()=>{carouselRef?.current?.next();}}>
      <Button variant=' ' className="carousel-control-next-btn carousel-control-btn position-absolute bg-transparent p-1 d-none d-xl-block rounded-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-next-icon carousel-icon" aria-hidden="true"><Image
         src='/icons/angle-right-solid-full.svg' alt="" className='hero-carousel-btn' width={35} height={35}/></span>
        <span className="visually-hidden">Next</span>
      </Button>
    </div>
  )
};


export const HeroSection = () => {

  const carouselRef = useRef(null)

  return (
    <section>
      <Carousel
        indicators={false}
        controls={false}
        fade
        ref={carouselRef}
        className='hero-section overflow-hidden'
      >
        <Carousel.Item className="text text-center hero-image-1">
          <Carousel.Caption bsPrefix=' ' className='my-6 mb-sm-7 mb-xl-6 mt-xl-7'>
            <Container className="my-8 text-start position-relative">
              <h1 className="fw-bold mb-3 text-grey-normal">Fresh Flower</h1>
              <h2 className="underline-start fw-medium h3 text-light-grey mb-5 ">Natural & Beautiful Flower Here</h2>
              <p className="mb-0 mt-6 fw-lighter text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Quibusdam earum tempora consequuntur.</p>
              <Button variant='primary' className="shop-now-btn  rounded rounded-pill px-4 py-1 mt-4 position-relative"><Link href="/shop" className="text-white text-decoration-none stretched-link">Shop Now</Link></Button>
              <NextBtn carouselRef={carouselRef}/>
              <PrevBtn carouselRef={carouselRef}/>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text text-center hero-image-2">
          <Carousel.Caption bsPrefix=' ' className='my-6 mb-sm-7 mb-xl-6 mt-xl-7'>
            <Container className="my-8 text-start position-relative">
              <h1 className="fw-bold mb-3 text-grey-normal">Fresh Flower</h1>
              <h2 className="underline-start fw-medium h3 text-light-grey mb-5 0">Natural & Beautiful Flower Here</h2>
              <p className="mb-0 mt-6 fw-lighter text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Quibusdam earum tempora consequuntur.</p>
              <Button variant='primary' className="shop-now-btn  rounded rounded-pill px-4 py-1 mt-4 position-relative"><Link href="/shop" className="text-white text-decoration-none stretched-link">Shop Now</Link></Button>
              <NextBtn carouselRef={carouselRef} />
              <PrevBtn carouselRef={carouselRef} />
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
};
