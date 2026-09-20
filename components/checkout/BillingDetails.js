'use client'
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from '@/schemas/schema';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { ConvertToCurrency } from '@/helper/utils';
import { Trash } from 'react-bootstrap-icons';
import { removeCoupon } from '@/store/slices/cartSlice';
import { useRef, useState } from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import { createOrder } from "@/services/services";
import { clearCart } from "@/store/slices/cartSlice";
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export const BillingDetails = () => {

    const cartState = useSelector((state) => state.cart)

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const router = useRouter();

    const billingSchema = schema.pick([
        "fname",
        "lname",
        "email",
        "phone",
        "country",
        "state",
        "city",
        "address",
        "pincode",
        "paymentMode",
    ]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(billingSchema) })

    const emptyValues = {
        fname: "",
        lname: "",
        phone: "",
        email: "",
        companyName: "",
        companyAddress: "",
        country: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        pincode: "",
        orderNotes: "",
        paymentMode: false
    }

    const handleSubmitForm = async (data) => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 3000)

        const isLogin = !!localStorage.getItem("id");

        if (!isLogin) {
            toast.error("Please login first to place your order.");
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        if (cartState?.totalQuantities === 0) {
            toast.error("Please first add items to your cart.");
            return;
        }

        const orders = cartState.cartItems.map((item) => ({
            productId: item.id,
            title: item.title,
            thumbnail: item.thumbnail,
            price: item.price,
            quantity: item.quantity,
            totalPrice: item.totalPrice
        }));

        const orderData = {
            userId: localStorage.getItem("id"),
            createdAt: new Date().toISOString(),
            firstName: data.fname,
            lastName: data.lname,
            email: data.email,
            phone: data.phone,
            companyName: data.companyName || "",
            companyAddress: data.companyAddress || "",
            country: data.country,
            address: data.address,
            apartment: data.apartment || "",
            city: data.city,
            state: data.state,
            zip: data.pincode,
            orderNotes: data.orderNotes || "",
            paymentMethod: data.paymentMode ? "Cash on delivery" : "",
            paymentStatus: "Pending",
            orderStatus: "Processing",

            subtotal: Math.round(cartState.subTotal),
            shippingCost: cartState.shippingCost,
            taxPercent: cartState.tax,
            taxAmount: Math.round(cartState.taxAmount),
            discountPercent: cartState.discountPercent,
            discount: Math.round(cartState.discount),
            couponCode: cartState.appliedCoupon || "",
            totalAmount: Math.round(cartState.orderTotal),
            orders: orders
        };

        try {
            const response = await createOrder(orderData);

            sessionStorage.setItem("orderId", response.data.id);

            dispatch(clearCart());

            toast.success("Your order has been placed successfully!");

            setTimeout(() => {
                router.push(`/order-success/${response.data.id}`);
            }, 500)

            setTimeout(() => {
                reset(emptyValues);
                refFrom.current.reset();
            }, 600);

        } catch (error) {
            toast.error("Failed to place your order. Please try again.");
        }
    };


    const handleRemoveCoupon = () => {
        dispatch(removeCoupon())
    }

    const refFrom = useRef()

    return (
        <section className="billing-details mt-6 mb-7">
            <Container>
                <h2 className="display-2 fw-medium pb-1 w-50 mb-5 border-bottom d-inline-block">Billing Details</h2>
                <Form id="billingForm" className="mx-0 my-5" ref={refFrom} onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className="p-5 border">
                        <Row className="billingFormWrapper">
                            <Col md={6} className="mb-6 fname-box position-relative">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        {...register("fname")}
                                        placeholder="First name"
                                        className="w-100 bg-light-grey py-1 border-0 px-3 rounded-0 py-2 display-4 fw-light"
                                    />
                                    <div className="text-danger mt-1">
                                        {errors?.fname?.message}
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-6 lname-box position-relative">
                                <Form.Control
                                    type="text"
                                    {...register("lname")}
                                    placeholder="Last name"
                                    className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light"
                                />
                                <div className="text-danger mt-1">
                                    {errors?.lname?.message}
                                </div>
                            </Col>
                            <Col md={6} className="mb-6 email-box2 position-relative">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="email"
                                        {...register("email")}
                                        placeholder="email address"
                                        className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light"
                                    />
                                    <div className="text-danger mt-1">{errors?.email?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-6 phone-box position-relative">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="tel"
                                        {...register("phone")}
                                        placeholder="phone number"
                                        className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light"
                                    />
                                    <div className="text-danger mt-1">{errors?.phone?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-6 company-box position-relative">
                                <Form.Control type="text" id="companyName" placeholder="Company name (optional)" className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light" {...register("companyName")} />
                            </Col>
                            <Col md={6} className="mb-6 address-box position-relative">
                                <Form.Control type="text" id="companyAddress" placeholder="Company address (optional)" className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light"  {...register("companyAddress")} />
                            </Col>
                            <Col md={4} className="mb-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Select
                                        {...register("country")}
                                        className="w-100 py-1 border-1 mt-1 px-3 py-2 rounded-0 display-4 fw-light"
                                    >
                                        <option value="">Select Country</option>
                                        <option value="india">India</option>
                                        <option value="australia">Australia</option>
                                        <option value="canada">Canada</option>
                                        <option value="china">China</option>
                                        <option value="morocco">Morocco</option>
                                        <option value="saudi-arabia">Saudi Arabia</option>
                                        <option value="united-kingdom">United Kingdom (UK)</option>
                                        <option value="united-states">United States (US)</option>
                                    </Form.Select>

                                    <div className="text-danger mt-1">
                                        {errors?.country?.message}
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={6} className="d-none d-md-block"></Col>
                            <Row>
                                <Form.Label className="display-4 fw-medium mb-3 ">Your Complete Address</Form.Label>
                                <Col md={6} className="mb-6">
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type='text'
                                            rows={3}
                                            {...register("address")}
                                            placeholder="House number and street name"
                                            className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light"
                                        />

                                        <div className="text-danger mt-1">
                                            {errors?.address?.message}
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mb-6">
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type='text'
                                            rows={3}
                                            id="apartmentAddress"
                                            {...register("apartment")}
                                            placeholder="Apartment, suite, unit etc. (optional)"
                                            className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Col md={6} lg={4} className="mb-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className="display-4 fw-medium mb-3 d-block">Town / City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        {...register("city")}
                                        placeholder="City"
                                        className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light"
                                    />
                                    <div className="text-danger mt-1">{errors?.city?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col md={6} lg={4} className="mb-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className="display-4 fw-medium mb-3 d-block">State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        {...register("state")}
                                        placeholder="State"
                                        className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light"
                                    />
                                    <div className="text-danger mt-1">{errors?.state?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col md={6} lg={4} className="mb-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className="display-4 fw-medium mb-3 d-block">Zip</Form.Label>
                                    <Form.Control
                                        type="text"
                                        {...register("pincode")}
                                        placeholder="Zip"
                                        className="w-100 bg-light-grey py-1 border-0 px-3 py-2 rounded-0 display-4 fw-light"
                                    />
                                    <div className="text-danger mt-1">{errors?.pincode?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col md={6} className="d-none d-md-block col-md-6 d-lg-none"></Col>
                            <Col xs={12} className="mb-6">
                                <Form.Group className='d-flex align-items-center'>
                                    <Form.Check
                                        className="text-nowrap"
                                        type="checkbox"
                                        value=""
                                        style={{ width: "15px", marginRight: "5px" }}
                                    />
                                    <p className='mb-0 fw-medium fs-5' style={{ marginLeft: "8px" }}>Create an account?</p>
                                </Form.Group>
                            </Col>
                            <Col xs={12} className="mb-6">
                                <Form.Label className="display-4 fw-medium mb-3 d-block">
                                    Order Notes (optional)
                                </Form.Label>
                                <div className="position-relative notes-box">
                                    <Form.Control
                                        as="textarea"
                                        rows={8}
                                        {...register("orderNotes")}
                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                        className="w-100 bg-light-grey border-0 p-3 display-4 fw-medium"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className="mt-6 pt-5 mb-6">
                        <Col lg={6} className="payment-method col-12">
                            <div className="w-75 border-bottom mb-3">
                                <h2 className="display-2 fw-medium fs-3">Payment Method</h2>
                            </div>
                            <div className="form-check px-4 pt-3">
                                <Form.Group className='d-flex align-items-center'>
                                    <Form.Check
                                        className="text-nowrap"
                                        type="checkbox"
                                        {...register("paymentMode")}
                                    />
                                    <p className='mb-0 fw-medium fs-3 fw-semibold'>Cash on delivery.</p>
                                </Form.Group>
                                <div className="text-danger mt-1">{errors?.paymentMode?.message}</div>
                            </div>
                            <p className="text-black fw-light mt-5 mb-4 dark-mode-text">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                            <div className="mb-2 mt-2">
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="proceed-btn btn rounded-0 checkout-btn fw-medium text-center px-6 py-2 dark-mode-text-dark"
                                >
                                    PLACE ORDER
                                </Button>
                            </div>
                        </Col>
                        {cartState?.totalQuantities === 0 ?
                            <div className="cart-totals col-12 col-lg-6 mt-6 mt-lg-0 text-center fs-3 text-danger pt-7">No Item In Your Cart <br /><p className='mt-3'><Link href="/shop" className='fs-3 fw-semibold text-black text-decoration-none dark-mode-text'><FaRegHandPointRight className='text-primary' /> Add Items</Link></p></div> :
                            <div className="cart-totals col-12 col-lg-6 mt-6 mt-lg-0">
                                <div className="d-flex align-items-end justify-content-md-end justify-content-center">
                                    <div className="cart-summary">
                                        <div className="w-75 border-bottom mb-5">
                                            <h2 className="display-2 fw-medium mb-1">Cart Totals</h2>
                                        </div>
                                        <div className="d-flex flex-column bg-light-grey-500">
                                            {cartState?.cartItems.map((item, index) => {
                                                return (
                                                    <div key={index} className="d-flex justify-content-between align-items-center border-bottom bg-light-grey">
                                                        <div className="fw-normal ps-1 py-1">{item.title}<span className="fw-bold"> x {item.quantity}</span></div>
                                                        <div className="fw-normal pe-6 py-1 ms-2"> {ConvertToCurrency(item.totalPrice)}</div>
                                                    </div>
                                                )
                                            })}
                                            <div className="d-flex justify-content-between align-items-center border-bottom">
                                                <div className="fw-normal ps-1 py-1">Shipping and Handing</div>
                                                <div className="fw-normal pe-6 py-1 ms-2">{ConvertToCurrency(cartState.shippingCost)}</div>
                                            </div>
                                            {cartState.appliedCoupon != '' &&
                                                <ListGroup.Item className='d-flex justify-content-between align-items-center border-bottom pe-6'>
                                                    <div className="fw-normal ps-1 py-1">Discount
                                                        ( {cartState.appliedCoupon} <Trash className='text-danger' onClick={handleRemoveCoupon} role='button' /> )
                                                    </div>
                                                    <div className="fw-normal ps-1 py-1">{ConvertToCurrency(cartState.discount)}</div>
                                                </ListGroup.Item>}
                                            <div className="d-flex justify-content-between align-items-center border-bottom bg-light-grey">
                                                <div className="fw-normal ps-1 py-1">Tax/Vat ({cartState.tax}%)</div>
                                                <div className="fw-normal pe-6 py-1 ms-2">{ConvertToCurrency(cartState.taxAmount)}</div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center border-bottom">
                                                <div className="fw-bold ps-1 py-1">Order Total</div>
                                                <div className="fw-bold pe-6 py-1 ms-2">{ConvertToCurrency(cartState.orderTotal)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </Row>
                </Form>
            </Container>
            <ToastContainer />
        </section>
    )
}
