'use client'
import { Col, Form, Row } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Coupon } from "./Coupon";
import { schema } from "@/schemas/schema";
import Link from "next/link";
import { getUser } from "@/services/services";

export const CheckoutLogin = () => {

    const [login, setLogin] = useState(false);

    const [loading, setLoading] = useState(false)

    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(localStorage.getItem("login") === "true");
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema.pick(["password", "email"]))})

    const fetchUser = async (data) => {
        try {

            const response = await getUser(data);
            const user = response.data[0];

            if (
                user && user.email === data.email && user.password === data.password) {

                localStorage.setItem("login", "true");
                localStorage.setItem("id", String(user.id));
                setLoginStatus(true); 
                toast.success("Login successfully!!!");

            } else {
                toast.error("Invalid Username or Password.");
            }

        } catch (error) {
            // toast.error("Invalid Username or Password.");
        }
    };


    const handleSubmitForm = (data) => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 3000)
        fetchUser(data)
    }

    return (
        <section className="checkout-login-details">
            <div className="container">
                <>{!loginStatus && (<div className="px-5 py-3 bg-light-grey mt-7 mb-0 w-100"><h2 className="display-4 fw-medium">Returning customer? <span id="loginToggleBtn" onClick={() => { setLogin(!login) }} role="button" className="text-primary">Click here to login</span></h2></div>)}</>
                <>{!loginStatus && (<div id="loginDropdown" className={`mt-1 ${login ? "d-block" : "d-none"}`}>
                    <div className="border px-4 pt-4 pb-6">
                        <p className="mb-0 mt-3 fw-light mb-4">Please login your accont.</p>
                        <Form id="loginForm" className="mx-0 my-5" onSubmit={handleSubmit(handleSubmitForm)}>
                            <Row>
                                <Col md={6} className="mb-4 login-email-box position-relative">
                                    <Form.Group className="mb-3">
                                        <Form.Control 
                                        type="email" 
                                        id="mMail" 
                                        name="email" 
                                        style={{ letterSpacing: "2px" }} 
                                        placeholder="Enter*" 
                                        className="w-100 bg-light-grey py-2 border-0 p-3 fs-14 display-4 fw-light rounded-0" 
                                        {...register("email")} />
                                        <div className="text-danger mt-1">{errors?.email?.message}</div>
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mb-4 login-email-box position-relative">
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            {...register("password")}
                                            placeholder="Password*"
                                            className="w-100 bg-light-grey border-0 p-2 rounded-0 display-4 fw-light"
                                        />
                                        <div className="text-danger mt-1">{errors?.password?.message}</div>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="mb-2 d-flex align-items-center gap-1 flex-wrap">
                                <Form.Control type="submit" name="contactSubmit" value="SUBMIT" disabled={loading} className="proceed-btn btn rounded-0 checkout-btn fw-medium text-center px-6 py-2 w-25 dark-mode-text-dark" style={{ minWidth: "160px", maxWidth: "220px" }}></Form.Control>
                                <div className="d-flex align-items-center">
                                    <Form.Group className='d-flex align-items-center'>
                                        <Form.Check
                                            className="text-nowrap"
                                            type="checkbox"
                                            value=""
                                            style={{ width: "15px", marginRight: "5px" }}
                                        />
                                        <p className='mb-0 fw-medium fs-5' style={{ marginLeft: "4px" }}>Remember me</p>
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                        <Link href="/signin" className="mb-0 mt-3 fw-normal nav-link">Lost your password?</Link>
                    </div>
                </div>)}</>
                <Coupon />
            </div>
        </section>

    )
}
