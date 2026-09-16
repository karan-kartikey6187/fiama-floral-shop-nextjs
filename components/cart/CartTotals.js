'use client'
import React, { Fragment } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ConvertToCurrency } from '@/helper/utils'
import { removeCoupon } from '@/store/slices/cartSlice'
import { Trash } from 'react-bootstrap-icons'
import Link from 'next/link'

export const CartTotals = () => {

    const cartState = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    const handleRemoveCoupon = () => {
        dispatch(removeCoupon())
    }

    return (
        < Fragment >
            {
                cartState?.cartItems.length === 0 ?
                    " " :
                    < section className="checkout-summary mb-7" >
                        <Container>
                            <div className="d-flex align-items-end justify-content-md-end justify-content-center">
                                <div className="cart-summary">
                                    <h2 className="display-2 fw-medium">Cart Totals</h2>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className='d-flex justify-content-between align-items-center border-bottom'>
                                            <div className="fw-normal ps-1 py-1">Total Items: </div>
                                            <div className="fw-normal ps-1 py-1">{cartState.totalQuantities}</div>
                                        </ListGroup.Item>
                                        <ListGroup.Item className='d-flex justify-content-between align-items-center border-bottom'>
                                            <div className="fw-normal ps-1 py-1">Subtotal : </div>
                                            <div className="fw-normal ps-1 py-1">{ConvertToCurrency(cartState.subTotal)}</div>
                                        </ListGroup.Item>

                                        <ListGroup.Item className='d-flex justify-content-between align-items-center border-bottom'>
                                            <div className="fw-normal ps-1 py-1">Shipping</div>
                                            <div className="fw-normal ps-1 py-1">{ConvertToCurrency(cartState.shippingCost)}</div>
                                        </ListGroup.Item>
                                        {cartState.appliedCoupon != '' &&
                                            <ListGroup.Item className='d-flex justify-content-between align-items-center border-bottom'>
                                                <div className="fw-normal ps-1 py-1">Discount
                                                    ( {cartState.appliedCoupon} <Trash className='text-danger' onClick={handleRemoveCoupon} role='button' /> )
                                                </div>
                                                <div className="fw-normal ps-1 py-1">{ConvertToCurrency(cartState.discount)}</div>
                                            </ListGroup.Item>}

                                        <ListGroup.Item className='d-flex justify-content-between'>
                                            <div className="fw-normal ps-1 py-1">Tax/Vat ({cartState.tax}%)</div>
                                            <div className="fw-normal ps-1 py-1">{ConvertToCurrency(cartState.taxAmount)}</div>
                                        </ListGroup.Item>

                                        <ListGroup.Item className='d-flex justify-content-between'>
                                            <div className="fw-semibold ps-1 py-2"><b>Order Total</b></div>
                                            <div className="fw-semibold ps-1 py-2"><b>{ConvertToCurrency(cartState.orderTotal)}</b></div>
                                        </ListGroup.Item>
                                        <div className="w-100">
                                            <Link href="/checkout" className="proceed-btn btn w-100 rounded-0 checkout-btn fw-medium text-center py-2">
                                                Proceed to checkout
                                            </Link>
                                        </div>
                                    </ListGroup>
                                </div>
                            </div>
                        </Container>
                    </section >
            }
        </Fragment >

    )
}
