import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

export const BestOfferBanner = () => {
    return (
        <section className="best-offer-banner-section">
            <Container>
                <div className="best-offer-cards-wrapper d-flex flex-wrap justify-content-center gap-6 mt-7 mt-md-6 mb-7 position-relative">
                    <div className="best-offer-card overflow-hidden col">
                        <Link href="/" className="stretched-link"><Image src='/images/best-offer-banner-img.webp' alt="" className='img-fluid' width={1296} height={410}/></Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}