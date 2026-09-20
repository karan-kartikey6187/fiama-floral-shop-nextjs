'use client'
import { useState } from 'react'
import { Badge, Button, Card} from 'react-bootstrap'
import { WishlistModal } from '@/components/modals/WishlistModal'
import { CartModal } from '../modals/CartModal'
import { QuickView } from '../modals/QuickView'
import { ConvertToCurrency } from '../../helper/utils'
import { AddToWishlist } from '../common/AddToWishlist'
import AddToCart from '../common/AddToCart'
import Link from 'next/link'
import Image from 'next/image'

export const ProductCard = ({ product, swiper = false }) => {

    const [showWishlistModal, setShowWishlistModal] = useState(false);

    const [showCartModal, setShowCartModal] = useState(false);

    const [showQuickViewModal, setshowQuickViewModal] = useState(false);


    return (
        <div className={swiper ? "product-card position-relative" : "product-card position-relative col-6 col-md-4 col-lg-3"}>
            <Card className="border-0 rounded-0 position-relative h-100">
                <Card.Body className="card-image bg-body-secondary p-0 position-relative overflow-hidden">
                    <Badge bg="secondary" className="px-3 py-1 rounded-0 position-absolute fw-bold" style={{ top: "18px" }}>
                        {Math.trunc(product?.discountPercentage)}%
                    </Badge>
                    <div className="card-options btn-group position-absolute bg-light-grey-800 w-100 bottom-0 rounded-0">
                        <AddToWishlist product={product} onClick={() => setShowWishlistModal(true)} />
                        <AddToCart product={product} onClick={() => setShowCartModal(true)} />
                        <Button variant='outline-light' className="rounded-0 py-2" onClick={() => setshowQuickViewModal(true)}><Image src='/icons/eye-white.svg' alt="" className='h-auto' width={16} height={16}/></Button>
                    </div>
                    <Link href={`/product-details/${product?.id}`}><Image src={product?.thumbnail} width={317} height={317} className="card-img-top img-fluid" alt="" /></Link>
                </Card.Body>
                <Card.Footer className="card-body bg-light-subtle d-flex flex-column align-items-center position-relative mt-auto text-center">
                    <Link href={`/product-details/${product?.id}`} className="card-text d-inline-block stretched-link text-decoration-none display-5 text-dark fw-normal text-uppercase nav-link dark-mode-text" style={{ marginBottom: "10px" }}>{product?.title}</Link>
                    <p className="card-text mb-0 text-light-grey fw-semibold mt-1">{ConvertToCurrency(product?.price)}</p>
                </Card.Footer>
            </Card>
            <WishlistModal
                show={showWishlistModal}
                handleClose={() => setShowWishlistModal(false)}
                image={product?.thumbnail}
                title={product?.title}
                discount={product?.discountPercentage}
            />
            <CartModal
                show={showCartModal}
                handleClose={() => setShowCartModal(false)}
                image={product?.thumbnail}
                title={product?.title}
                discount={product?.discountPercentage}
            />
            <QuickView
                show={showQuickViewModal}
                handleClose={() => setshowQuickViewModal(false)}
                product={product}
            />
        </div >
    )
}
