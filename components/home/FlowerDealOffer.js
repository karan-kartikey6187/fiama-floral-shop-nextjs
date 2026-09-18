import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

export const FlowerDealOffer = (image) => {
    return (
        <section className="flower-deal-offer-section">
            <Container>
                <div className="flower-deal-cards-wrapper d-flex flex-wrap justify-content-center gap-6 mt-2 mb-7 mt-7">
                    <div className="flower-deal-card overflow-hidden  col-md-5 col-lg position-relative">
                         <Link href="/shop" className="stretched-link">
                            <Image src='/images/flower-deal-card-img-1.webp' alt="" width={628} height={274} className='img-fluid'/>
                        </Link>
                    </div>
                    <div className="flower-deal-card overflow-hidden col-md-5 col-lg position-relative">
                         <Link href="/shop" className="stretched-link">
                            <Image src='/images/flower-deal-card-img-2.webp' alt="" width={628} height={274} className='img-fluid'/>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}
