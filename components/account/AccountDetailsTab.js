'use client'
import { Button, Form, Tab } from 'react-bootstrap'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { getUserById, updateUser } from '@/services/services'
import { schema } from '@/schemas/schema'


export const AccountDetailsTab = () => {

    const router = useRouter()

    const [oldEmail, setOldEmail] = useState("");

    const { register: registerAccount, handleSubmit: handleSubmitAccount, setValue, reset: resetAccount, formState: { errors: accountErrors } } = useForm({
        resolver: yupResolver(schema.pick(["fname", "lname", "email", "id"]))
    });

    const modifyUser = async (data) => {
        try {
            const response = await updateUser(data)
            toast.success("User updated successfully!")
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleAccountSubmit = (data) => {
        const updateData = {
            id: data.id,
            firstName: data.fname,
            lastName: data.lname,
            email: data.email
        };
        modifyUser(updateData)

        if (data.email !== oldEmail) {
            setTimeout(() => {
                localStorage.removeItem("id");
                localStorage.removeItem("login");

                router.push("/signin");
            }, 1000);
        }
    };

    const fetchUserDetailsById = async () => {
        const response = await getUserById(localStorage.getItem("id"))
        console.log(response.data)
        setValue("fname", response.data.firstName)
        setValue("lname", response.data.lastName)
        setValue("email", response.data.email)
        setValue("id", response.data.id)
        setOldEmail(response.data.email);
    }

    useEffect(() => {
        fetchUserDetailsById()
    }, [])

    const { register: registerPassword, handleSubmit: handleSubmitPassword, reset: resetPassword, formState: { errors: passwordErrors } } = useForm({
        resolver: yupResolver(schema.pick(["password", "npassword", "cnpassword"])),
        mode: "onSubmit",
    });


    const handlePasswordSubmit = async (data) => {
        try {
            const id = localStorage.getItem("id");

            const response = await getUserById(id);
            const user = response.data;

            if (data.password !== user.password) {
                toast.error("Current password is incorrect!");
                return;
            }

            const updateData = {
                id: user?.id,
                firstName: user?.firstName,
                lastName: user?.lastName,
                email: user?.email,
                password: data?.npassword
            };

            await updateUser(updateData);

            toast.success("Password updated successfully!");

            setTimeout(() => {
                localStorage.removeItem("id");
                localStorage.removeItem("login");
                router.push("/signin");
            }, 1000);

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <Tab.Pane eventKey="3">
            <div className="my-account-tab pe-lg-3 mx-2 mx-lg-0 me-lg-3 d-flex flex-column gap-4">
                <div className="my-account-wrapper p-0 ms-lg-4 ps-lg-4 mt-6">
                    <Form id="myAccountDetailsForm" onSubmit={handleSubmitAccount(handleAccountSubmit)}>
                        <div className="row gap-6 myAccountDetailsFormWrapper">
                            <div className="my-account-tab-cantent p-4 bg-light-grey col-12">
                                <p className="mb-0 fw-light text-black dark-mode-text">The following addresses will be used on the checkout page by default.</p>
                            </div>
                            <div className="mb-0 p-0 fname-box-my-account position-relative col-12 col-md-5 flex-grow-1">
                                <Form.Label htmlFor="fname" className="form-label display-4 fw-light">First name:</Form.Label>
                                <Form.Control type="text" id="fname" className="w-100 bg-light-grey py-2 border-0 p-3 rounded-0 fw-medium" {...registerAccount("fname")} />
                                <div className="text-danger mt-1">{accountErrors?.fname?.message}</div>
                            </div>
                            <div className="mb-0 p-0 lname-box-my-account position-relative col-12 col-md-5 flex-grow-1">
                                <Form.Label htmlFor="lname" className="form-label display-4 fw-light">Last name:</Form.Label>
                                <Form.Control type="text" id="lname" className="w-100 bg-light-grey py-2 border-0 p-3 rounded-0 fw-medium" {...registerAccount("lname")} />
                                <div className="text-danger mt-1">{accountErrors?.lname?.message}</div>
                            </div>
                            <div className="mb-0 p-0 demail-box-my-account position-relative col-12 flex-grow-1">
                                <Form.Label htmlFor="email" className="form-label display-4 fw-light">Email:</Form.Label>
                                <Form.Control type="text" id="email" placeholder="example@example.com" className="w-100 bg-light-grey py-2 border-0 p-3 rounded-0 fw-medium" {...registerAccount("email")} />
                                <div className="text-danger mt-1">{accountErrors?.email?.message}</div>
                            </div>
                            <Form.Control type="hidden" {...registerAccount("id")} />
                        </div>
                        <Button type="submit" style={{ marginLeft: "-12px" }} className="proceed-btn btn rounded-0 checkout-btn fw-medium text-center py-2 px-6 mt-4 dark-mode-text-dark">Update Profile</Button>
                    </Form>
                    <Form id="updatePasswordForm" onSubmit={handleSubmitPassword(handlePasswordSubmit)}>
                        <div className="row  border py-5 px-6 pt-3 mt-7">
                            <p className="mb-3 text-uppercase display-2 fw-normal text-start px-0">Password change</p>
                            <div className="mb-6 p-0 password-register-box position-relative col-12">
                                <Form.Label htmlFor="exampleFormControlInput1" className="form-label display-4 fw-light">Current password (leave blank to leave unchanged):</Form.Label>
                                <Form.Control type="password" id="registerPassword" placeholder="Password*" className="w-100 bg-light-grey border-0 py-2 p-3 rounded-0 fw-light" {...registerPassword("password")} />
                                <div className="text-danger mt-1">{passwordErrors?.password?.message}</div>
                            </div>
                            <div className="mb-6 p-0 confirm-password-register-box position-relative col-12">
                                <Form.Label htmlFor="exampleFormControlInput1" className="form-label display-4 fw-light">New password (leave blank to leave unchanged):</Form.Label>
                                <Form.Control type="password" id="registerConfirmPassword" className="w-100 bg-light-grey border-0 py-2 p-3 rounded-0" {...registerPassword("npassword")} />
                                <div className="text-danger mt-1">{passwordErrors?.npassword?.message}</div>
                            </div>
                            <div className="mb-5 p-0 confirm-password-register-box position-relative col-12">
                                <Form.Label htmlFor="exampleFormControlInput1" className="form-label display-4 fw-light">Confirm new password:</Form.Label>
                                <Form.Control type="password" id="registerConfirmNewPassword" className="w-100 bg-light-grey border-0 py-2 p-3 rounded-0" {...registerPassword("cnpassword")} />
                                <div className="text-danger mt-1">{passwordErrors?.cnpassword?.message}</div>
                            </div>
                        </div>
                        <Button type="submit" className="proceed-btn btn rounded-0 checkout-btn fw-medium text-center py-2 px-6 mt-4 dark-mode-text-dark" style={{ marginLeft: "-12px" }}>Update Password</Button>
                    </Form>
                </div>
            </div>
            <ToastContainer />
        </Tab.Pane>
    )
}
