import { Button } from 'react-bootstrap'
import { ConvertToCurrency } from '@/helper/utils'
import { Trash } from 'react-bootstrap-icons'
import { removeFromCart } from '@/store/slices/cartSlice'
import { useDispatch } from 'react-redux'
import AddToCart from '@/components/common/AddToCart'
import Link from 'next/link'
import Image from 'next/image'

export const CartCard = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <div className="cart-item d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-around align-items-center">
            <div className="mx-1 py-3 w-100 d-flex justify-content-center align-items-center">
                <Link href={`/product-details/${product?.id}`}>
                    <Image src={product?.thumbnail} alt="" className="img-fluid cart-img" height={100} width={100}/>
                </Link>
            </div>
            <h2 className="display-3 px-1 py-3 mb-0 w-100 text-center"><p className="mb-0 nav-link fw-medium text-dark dark-mode-text">{product?.title}</p></h2>
            <p className="mb-0 fs-14 fw-normal text-light-grey px-1 py-3 w-100 text-center">{ConvertToCurrency(product?.price)}</p>
            <div className="w-100 px-1 py-3 d-flex justify-content-center align-items-center">
                <AddToCart product={product}/>
            </div>
            <p className="mb-0 fw-bold px-1 py-3 w-100 text-center">{ConvertToCurrency(product?.totalPrice)}</p>

            <div className='my-3 border-bottom-0'>
                <Button size='md' variant='outline-danger' className='d-flex justify-content-center align-items-center'
                    onClick={() => dispatch(removeFromCart(product?.id))}
                >
                    <Trash style={{marginRight:"5px"}}/> Delete
                </Button>
            </div>
        </div>
    )
}
