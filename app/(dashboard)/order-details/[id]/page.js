'use client'
import { Fragment, useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { CheckCircleFill, CircleFill, CreditCardFill, GeoAltFill, PersonFill } from "react-bootstrap-icons";
import { ConvertToCurrency, toTitleCase } from "@/helper/utils";
import { getOrder } from "@/services/services";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import useMounted from "@/hooks/useMounted";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const OrderDetails = () => {

    const router = useRouter();
    const params = useParams();
    const hasMounted = useMounted();

    const id = params?.id

    const [order, setOrder] = useState(null);

    useEffect(() => {

        if (!id) return;

        const fetchOrder = async () => {
            try {
                const response = await getOrder(id);
                setOrder(response?.data);
            } catch (error) {
                console.log(error);
            } finally {
                // setLoading(false);
            }
        };

        fetchOrder();
    }, [id]);

    return (
        <ProtectedRoute>
            <Fragment>
                {hasMounted &&
                <Fragment>
                    <section className="order-details-section py-7">
                        <Container>
                            <div className="border-bottom pb-4 mb-5">
                                <Row className="align-items-center ps-3 ps-sm-0">
                                    <Col md={6}>
                                        <h2 className="mb-2">Order Details</h2>
                                        <p className="mb-0 text-muted fs-4">Order ID:&nbsp;&nbsp;<strong>{order?.id}</strong>
                                        </p>
                                    </Col>
                                    <Col md={6} className="text-md-end mt-3 mt-md-0">
                                        <Button size="lg" className="mb-3 fw-semibold" variant="outline-success" onClick={() => router.push("/account")} >Back</Button>
                                        <p className="mb-2 fs-4">Order Date:&nbsp;&nbsp;{new Date(order?.createdAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "2-digit",
                                            year: "numeric"
                                        })}
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            <Row className="g-4 mb-5">
                                <Col lg={6}>
                                    <div className="border p-4 h-100">
                                        <h4 className="border-bottom pb-3 mb-4"><PersonFill className="me-2" />Customer Details</h4>
                                        <div className="d-flex justify-content-start align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">Name:&nbsp;&nbsp;</p>
                                            <p className="mb-0 fs-4 text-muted text-break">{toTitleCase(order?.firstName)} {toTitleCase(order?.lastName)}</p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">Email:&nbsp;&nbsp;</p>
                                            <span className="mb-0 fs-4 text-muted text-break">{order?.email}</span>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">Phone:&nbsp;&nbsp;</p>
                                            <p className="mb-0 fs-4 text-muted text-break">{order?.phone}</p>
                                        </div>
                                    </div>
                                </Col>
        
                                <Col lg={6}>
                                    <div className="border p-4 h-100">
                                        <h4 className="border-bottom pb-3 mb-4">
                                            <CreditCardFill className="me-2" />
                                            Payment Details
                                        </h4>
                                        <div className="d-flex justify-content-start align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">Payment Method:&nbsp;&nbsp;</p>
                                            <p className="mb-0 fs-4 text-muted">{order?.paymentMethod}</p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">Payment Status:&nbsp;&nbsp;</p>
                                            <span
                                                className="text-warning"
                                            >
                                                <CircleFill />
                                            </span>
                                            <p className="mb-0 lh-1 fs-4 text-muted text-break">&nbsp;{order?.paymentStatus}</p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">Coupon:&nbsp;&nbsp;</p>
                                            <p className="mb-0 fs-4 text-muted">{order?.couponCode || "No Coupon"}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-5">
                                <Col>
                                    <div className="border p-4">
                                        <h4 className="border-bottom pb-3 mb-4">
                                            <GeoAltFill className="me-2" />
                                            Shipping Address
                                        </h4>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">Address:&nbsp;&nbsp;</p>
                                            <p className="mb-0 fs-4 text-muted text-break">{order?.address}</p>
                                        </div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">State:&nbsp;&nbsp;</p>
                                            <p className="mb-0 fs-4 text-muted text-break">{order?.state}</p>
                                        </div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">Zip:&nbsp;&nbsp;</p>
                                            <p className="mb-0 fs-4 text-muted text-break">{order?.zip}</p>
                                        </div>
                                        <div className="d-flex align-items-center mb-1">
                                            <p className="mb-0 fs-4 fw-bold">Country:&nbsp;&nbsp;</p>
                                            <p className="mb-0 fs-4 text-muted text-break">{order?.country}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
        
                            <div className="border p-4 mb-5">
                                <h4 className="border-bottom pb-3 mb-4 fw-bold fs-3">
                                    Ordered Items
                                </h4>
                                <ListGroup variant="flush">
                                    {order?.orders.map((item) => (
                                        <ListGroup.Item
                                            key={item.productId}
                                            className="py-3"
                                        >
                                            <Row className="align-items-center">
        
                                                <Col xs={3} md={2} lg={1}>
                                                    <Image
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                        width={100}
                                                        height={100}
                                                    />
                                                </Col>
        
                                                <Col xs={9} md={4} lg={5}>
                                                    <h6 className="mb-1 fs-4 ps-4">
                                                        {item.title}
                                                    </h6>
        
                                                    <p className=" mb-0 text-black ps-4 dark-mode-text">
                                                        Product ID: <span className=" fs-5 fw-bold">{item.productId}</span>
                                                    </p>
                                                </Col>
        
                                                <Col xs={6} md={2} className="mt-3 mt-md-0">
                                                    <p className="text-muted mb-1 fs-5">
                                                        Price
                                                    </p>
        
                                                    <p className="mb-0 fw-bold fs-5">
                                                        {ConvertToCurrency(item.price)}
                                                    </p>
                                                </Col>
        
                                                <Col xs={6} md={2} className="mt-3 mt-md-0">
                                                    <p className="mb-1 fs-5">
                                                        Quantity
                                                    </p>
        
                                                    <p className="mb-0 fs-5">
                                                        {item.quantity}
                                                    </p>
                                                </Col>
        
                                                <Col
                                                    xs={12}
                                                    md={2}
                                                    className="text-md-end mt-3 mt-md-0"
                                                >
                                                    <p className="mb-1 fs-5">
                                                        Total
                                                    </p>
        
                                                    <p className="mb-0 fw-semibold fs-5">
                                                        {ConvertToCurrency(item.totalPrice)}
                                                    </p>
                                                </Col>
        
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
        
                            <Row className="justify-content-end">
                                <Col md={6} lg={5}>
                                    <div className="border p-4">
                                        <h4 className="border-bottom pb-3 mb-3 fs-3 fw-bold">
                                            Order Summary
                                        </h4>
                                        <div className="d-flex justify-content-between mb-2">
                                            <p className="mb-0 fs-4 fw-bold">Subtotal</p>
                                            <p className="mb-0 fs-4 text-muted">{ConvertToCurrency(order?.subtotal)}</p>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <p className="mb-0 fs-4 fw-bold">Shipping</p>
                                            <p className="mb-0 fs-4 text-muted">{ConvertToCurrency(order?.shippingCost)}</p>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <p className="mb-0 fs-4 fw-bold">Tax</p>
                                            <p className="mb-0 fs-4 text-muted">{order?.taxPercent}%</p>
                                        </div>
                                        {order?.couponCode ? <div className="d-flex justify-content-between mb-2 text-success">
                                            <p className="mb-0 fs-4 fw-bold">
                                                Discount
                                            </p>
                                            <p className="mb-0 fs-4 text-muted">{order?.discountPercent}%</p>
        
                                        </div> :
                                            " "}
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 fs-4 fw-bold">Order Total</p>
                                            <p className="mb-0 fs-4 text-muted">{ConvertToCurrency(order?.totalAmount)}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="text-center mt-6">
                                <CheckCircleFill className="text-success fs-1 mb-3" />
                                <h4>Thank you for your order!</h4>
                                <p className="text-muted">Your order has been placed successfully.</p>
                            </div>
                        </Container>
                    </section>
                </Fragment>}
            </Fragment>
        </ProtectedRoute>
    );
};

export default OrderDetails