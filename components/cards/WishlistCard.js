import React from 'react'
import { Button} from 'react-bootstrap'
import { ConvertToCurrency } from '@/helper/utils'
import { useDispatch } from 'react-redux'
import { Trash } from 'react-bootstrap-icons'
import { removeFromWishlist } from '@/store/slices/wishlistSlice'
import { MoveToCart } from '@/components/common/MoveToCart'
import Image from 'next/image'
import Link from 'next/link'

export const WishlistCard = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <div className="wishlist-item d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-around align-items-center mb-6 mb-md-0">
            <div className="mx-1 py-3 w-100 d-flex justify-content-center align-items-center">
                <Link href={`/product-details/${product?.id}`}>
                    <Image src={product?.thumbnail} alt="" className="cart-img" height={100} width={100}/>
                </Link>
            </div>
            <h2 className="display-3 px-1 py-3 mb-0 w-100 text-center"><p className="mb-0 nav-link fw-medium text-dark dark-mode-text">{product?.title}</p></h2>
            <p className="mb-0 fw-normal text-light-grey px-1 py-3 w-100 text-center">{ConvertToCurrency(product?.price)}</p>
            <div className='mt-2  my-md-0 border-bottom-0'>
                <Button size='md' variant='outline-danger' className='d-flex justify-content-center align-items-center'
                    onClick={() => dispatch(removeFromWishlist(product?.id))}
                >
                    <Trash style={{marginRight:"5px"}}/> Delete
                </Button>
            </div>
            <MoveToCart product={product}/>
        </div>
    )
}
