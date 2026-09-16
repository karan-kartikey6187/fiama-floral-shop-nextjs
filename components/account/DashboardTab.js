import React, { useEffect, useState } from 'react'
import { Tab } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import { getUserById } from '@/services/services'

export const DashboardTab = () => {

    const [userName, setUserName] = useState("")

    const router = useRouter()

    const fetchUserDetailsById = async () => {
        const response = await getUserById(localStorage.getItem("id"))
        setUserName(response.data.firstName)
    }

    useEffect(() => {
        fetchUserDetailsById()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("login")
        localStorage.removeItem("id")
        router.push("/login")
    }

    return (
        <Tab.Pane eventKey="1">
            <div className="my-account-tab px-lg-3 mx-lg-3 me-lg-0 d-flex flex-column gap-4 mt-6 mt-lg-0">
                <div className="my-account-tab-cantent p-4 bg-light-grey">
                    <p className="mb-0 fw-light text-black">Hello <strong>{userName}</strong> (not <strong>{userName}?</strong> <span className="nav-link d-inline fs-14" onClick={handleLogout}> Log out</span>)</p>
                </div>
                <div className="my-account-tab-cantent p-4 bg-light-grey">
                    <p className="mb-0 fw-light text-black">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                </div>
            </div>
        </Tab.Pane>
    )
}
