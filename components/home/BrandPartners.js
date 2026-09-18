import React from 'react'
import { Container } from 'react-bootstrap'
import "swiper/css";
import BrandPartnersSwiper from './BrandPartnersSwiper';

export const BrandPartners = () => {
    return (
        <section className="brand-partners-section bg-light-grey">
            <Container>
                <BrandPartnersSwiper />
            </Container>
        </section >
    )
}