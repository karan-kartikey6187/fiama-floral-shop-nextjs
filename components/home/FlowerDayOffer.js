import Link from 'next/link'
import React from 'react'
import { Image } from 'react-bootstrap'

export const FlowerDayOffer = () => {
    return (
        <section className="flower-day-offer-section">
            <div className="container">
                <div className="flower-day-cards-wrapper d-flex flex-wrap justify-content-center gap-6 mt-7 mb-7 mt-xl-8">
                    <div className="flower-day-card overflow-hidden  col-md-5 col-lg position-relative">
                        <Link href="/shop" className="stretched-link">
                            <Image fluid src='/images/flower-day-card-img-1.webp' alt=""/>
                        </Link>
                    </div>
                    <div className="flower-day-card overflow-hidden col-md-5 col-lg position-relative">
                        <Link href="/shop" className="stretched-link">
                            <Image fluid src='/images/flower-day-card-img-2.webp' alt=""/>
                        </Link>
                    </div>
                    <div className="flower-day-card overflow-hidden col-md-5 col-lg position-relative">
                        <Link href="/shop" className="stretched-link">
                            <Image fluid src='/images/flower-day-card-img-3.webp' alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
