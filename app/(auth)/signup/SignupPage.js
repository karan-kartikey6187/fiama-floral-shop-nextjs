'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { Fragment, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BreadcrumbSection } from '@/components/common/BreadcrumbSection'
import { toast, ToastContainer } from 'react-toastify'
import { schema } from "@/schemas/schema";
import { createUser } from '@/services/services'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignupPage = () => {

    const [disable, setDisable] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema.pick(["fname", "lname", "email", "password", "cpassword", "terms", "privacyPolicy"])) })

    const router = useRouter();

    const addNewUser = async (data) => {
        try {
            const userData = {
                firstName: data.fname,
                lastName: data.lname,
                email: data.email,
                password: data.password,
            };
            const response = await createUser(userData);
            toast.success("User has been created successfully!!!");
            reset();
            setTimeout(() => {
                router.push("/signin")
            }, 1000)
        } catch (error) {
            console.error("Create User Error:", error);
            toast.error("Something went wrong.");
        }
    };

    const handleSubmitForm = (data) => {
        setDisable(true)
        addNewUser(data)
        setTimeout(() => {
            setDisable(false)
        }, 2000)

    }

  return (
    <Fragment>
        <BreadcrumbSection currentPage="Register" hide={true} />
        <section className="register-section">
            <Container>
                <div className="login-header d-flex flex-column align-items-center justify-content-center px-3 mt-7 mb-6">
                    <h2 className="text-center fw-semibold lh-sm mb-0">Register</h2>
                    <h3 className="text-center h2 fw-semibold lh-sm mb-2">Your Account</h3>
                    <p className="text-center fs-14 fw-normal" style={{ marginBottom: "6px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p className="mb-0 text-center fs-14 fw-normal">Sit aliquid, Non distinctio vel iste.</p>
                </div>
                <div className="login-main row mt-6 mb-7 row justify-content-center">
                    <Form id="registerForm" className="mb-4 col-12 col-lg-7 px-6" onSubmit={handleSubmit(handleSubmitForm)}>
                        <div className="mb-4 first-name-register-box position-relative">
                            <Form.Control type="text" id="registerFirstName" placeholder="First Name" className="w-100 bg-light-grey border-0 p-3 rounded-0 fw-normal" {...register("fname")} />
                            <div className="text-danger mt-1">{errors?.fname?.message}</div>
                        </div>
                        <div className="mb-4 last-name-register-box position-relative">
                            <Form.Control type="text" id="registerLastName" placeholder="Last Name" className="w-100 bg-light-grey border-0 p-3 rounded-0 fw-normal" {...register("lname")} />
                            <div className="text-danger mt-1">{errors?.lname?.message}</div>
                        </div>
                        <div className="mb-4 email-register-box position-relative">
                            <Form.Control type="email" id="registerEmail" placeholder="Email Address*" className="w-100 bg-light-grey border-0 p-3 rounded-0 fw-normal" {...register("email")} />
                            <div className="text-danger mt-1">{errors?.email?.message}</div>
                        </div>
                        <div className="mb-4 password-register-box position-relative">
                            <Form.Control type="password" id="registerPassword" placeholder="Password*" className="w-100 bg-light-grey border-0 p-3 rounded-0 fw-normal" {...register("password")} />
                            <div className="text-danger mt-1">{errors?.password?.message}</div>
                        </div>
                        <div className="mb-4 confirm-password-register-box position-relative">
                            <Form.Control type="password" id="registerConfirmPassword" placeholder="Confirm Password*" className="w-100 bg-light-grey border-0 p-3 rounded-0 fw-normal" {...register("cpassword")} />
                            <div className="text-danger mt-1">{errors?.cpassword?.message}</div>
                        </div>

                        <div className="mb-3 terms-box position-relative mt-5">
                            <Form.Group className='d-flex align-items-center'>
                                <Form.Check
                                    className="text-nowrap"
                                    type="checkbox"
                                    {...register("terms")}
                                    style={{ width: "15px", marginRight: "5px" }}
                                />
                                <p className='mb-0 fw-medium fs-6 fw-lighter' style={{ marginLeft: "4px" }}>I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.</p>
                            </Form.Group>
                            <div className="text-danger mt-1">{errors?.terms?.message}</div>
                        </div>

                        <div className="mb-5 privacy-box position-relative">
                            <Form.Group className='d-flex align-items-center'>
                                <Form.Check
                                    className="text-nowrap"
                                    type="checkbox"
                                    {...register("privacyPolicy")}
                                    style={{ width: "15px", marginRight: "5px" }}
                                />
                                <p className='mb-0 fw-medium fs-6 fw-lighter' style={{ marginLeft: "4px" }}>By clicking "create account", I consent to the privacy policy.</p>
                            </Form.Group>
                            <div className="text-danger mt-1">{errors?.privacyPolicy?.message}</div>
                        </div>
                        <Form.Control type="submit" value="CREATE ACCOUNT" disabled={disable} className="shop-now-btn btn btn-primary text-white rounded-0 fw-medium text-center px-5 py-2 rounded-0 w-auto" />
                    </Form>
                    <p className="text-center fw-normal mb-4">By creating an account, you agree to our:</p>
                    <p className="text-center nav-link fs-14 fw-normal mb-0">TERMS OF CONDITIONS&emsp;|&emsp;PRIVACY POLICY</p>
                    <Link href="/signin" className="nav-link text-center fs-14 fw-normal" style={{ marginTop: "50px" }}>ALREADY HAVE AN ACCOUNT ?</Link>
                </div>
            </Container>
        </section>
        <ToastContainer />
    </Fragment>
  )
}

export default SignupPage
