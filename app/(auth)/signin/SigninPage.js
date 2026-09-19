'use client'
import { Fragment, useState } from 'react'
import { BreadcrumbSection } from '@/components/common/BreadcrumbSection'
import { Container, Form, Row } from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import { schema } from '@/schemas/schema'
import { useRouter } from 'next/navigation'
import { getUser } from '@/services/services'
import Link from 'next/link'

const SigninPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema.pick(["password", "email"])) })

    const router = useRouter();
    
    const [loading, setLoading] = useState(false)
    
    const fetchUser = async (data) => {
        try {

            const response = await getUser(data);
            const user = response.data[0];

            if (
                user && user.email === data.email && user.password === data.password) {

                localStorage.setItem("login", "true");
                localStorage.setItem("id", String(user.id));
                toast.success("Login successfully!!!");
                setTimeout(() => {
                    router.push("/");
                }, 700)

            } else {
                toast.error("Invalid Username or Password.");
            }

        } catch (error) {
            toast.error("Invalid Username or Password.");
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
    <Fragment>
       <BreadcrumbSection currentPage="Login" hide={true} />
       <section className="login-section">
           <Container>
               <div className="login-header d-flex flex-column align-items-center justify-content-center px-3 mt-7 mb-7">
                   <h2 className="text-center fw-semibold lh-sm mb-0">Sign In</h2>
                   <h3 className="text-center h2 fw-semibold lh-sm mb-2">To Your Account</h3>
                   <p className="text-center fs-14 fw-normal" style={{ marginBottom: "6px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                   <p className="mb-0 text-center fs-14 fw-normal">Sit aliquid, Non distinctio vel iste.</p>
               </div>
               <Row className="login-main mt-7 mb-7 px-4 px-lg-0">
                   <Form id="loginFormMain" className="col-12 col-lg-6" onSubmit={handleSubmit(handleSubmitForm)}>
                       <div className="mb-5 login-email-box position-relative">
                           <Form.Control type="email" id="mMail" name="email" style={{ letterSpacing: "2px" }} placeholder="Email*" className="w-100 bg-light-grey py-2 border-0 p-3 fs-14 display-4 fw-light rounded-0" {...register("email")} />
                           <div className="text-danger mt-1">{errors?.email?.message}</div>
                       </div>
                       <div className="mb-5 login-password-box position-relative">
                           <Form.Control type="password" id="Mpassword" name="password" style={{ letterSpacing: "2px" }} placeholder="Password*" className="w-100 bg-light-grey py-2 border-0 p-3 fs-14 display-4 fw-light rounded-0" {...register("password")} />
                           <div className="text-danger mt-1">{errors?.password?.message}</div>
                       </div>
                       <div className="mb-4">
                           <Form.Control type="submit" disabled={loading} name="loginSubmit" value="SIGN IN" className="shop-now-btn btn btn-primary text-white rounded-0 fw-medium text-center px-5 py-2 w-auto" />
                       </div>
                       <div className="mb-2">
                           <h2 className="nav-link fs-14 fw-normal d-inline-block">FORGOTTEN YOUR PASSWORD?</h2>
                       </div>
                   </Form>
                   <div className="col-12 col-lg-6">
                       <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: "50px" }}>
                           <h2 className="text-center display-2 fw-medium mb-2">DON'T HAVE AN ACCOUNT?</h2>
                           <p className="text-center fw-light " style={{ marginBottom: "6px" }}>Add items to your wishlistget personalised recommendations</p>
                           <p className="text-center fw-light mb-4">check out more quickly track your orders register</p>
                           <Link href="/signup" className="fw-medium px-5 py-2 text-center create-account-btn shop-now-btn btn rounded-0 btn-primary text-white text-nowrap text-decoration-none" role="button">CREATE ACCOUNT</Link>
                       </div>
                   </div>
               </Row>
           </Container>
       </section>
       <ToastContainer />
    </Fragment>
  )
}

export default SigninPage
