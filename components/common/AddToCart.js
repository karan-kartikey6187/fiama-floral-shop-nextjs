import React, { Fragment, useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart, removeFromCart, updateCart } from '../../store/slices/cartSlice'
import Image from 'next/image'

const AddToCart = ({ product, onClick, modal = false, cartIcon=false }) => {
    const [isMobile, setIsMobile] = useState(false);
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state?.cart)
    const found = cartItems.some((item) => item?.id === product?.id)
    const currentCartItem = cartItems.find((item) => item?.id === product?.id)
    const [quantity, setQuantity] = useState(currentCartItem?.quantity || 1)
    const handleAddToCart = () => {
        if (found) {
            toast.error("This item is already exist in your cart")
            return;
        } else {

            if (modal) {
                toast.success("Item added to your Cart successfully!")
            }

            dispatch(addToCart(product))
        }
        if (onClick) {
            onClick();
        }
    }
    const handleQtyPlus = () => {
        console.log(quantity)
        setQuantity((prev) => prev + 1)
    }

    const handleQtyMinus = () => {
        console.log(quantity)
        if (quantity > 1) {
            setQuantity((prev) => prev - 1)
        } else {
            dispatch(removeFromCart(product?.id))
        }
    }

    useEffect(() => {
        if (found) {
            dispatch(updateCart({
                quantity: quantity,
                id: product?.id
            }))
        }
    }, [quantity])

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 992)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
        window.removeEventListener("resize", handleResize)
    }
    }, [])


    return (
        <Fragment>
            {found ?
                <InputGroup style={{ width: "110px" }} >
                    <InputGroup.Text role='button' onClick={handleQtyMinus} className='rounded-0'>
                        -
                    </InputGroup.Text>
                    <Form.Control value={quantity} className='text-center' readOnly/>
                    <InputGroup.Text onClick={handleQtyPlus} role='button' className='rounded-0'>
                        +
                    </InputGroup.Text>
                </InputGroup>
                :
                <Button
                    variant={modal ? "outline-primary" : "outline-light"}
                    className={modal ? "text-white bg-primary rounded-0" : "text-white"}
                    size='md' onClick={handleAddToCart}>
                    {isMobile ? <Image src='/icons/cart-white.svg' alt="" height={16} width={16}/> : cartIcon ? <Image src='/icons/bag.svg' alt="" height={16} width={16}/> : "Add To Cart"}
                </Button>
            }
        </Fragment>

    )
}
export default AddToCart