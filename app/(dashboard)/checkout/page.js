import { Fragment } from 'react'
import { BreadcrumbSection } from '@/components/common/BreadcrumbSection'
import { CheckoutLogin } from '@/components/checkout/CheckoutLogin'
import { BillingDetails } from '@/components/checkout/BillingDetails'
import { ToastContainer } from 'react-toastify'

export const metadata = {
    title: "Checkout",
    description: "Complete your order at Fiama Floral Shop.",
};

const Checkout = () => {
  return (
    <Fragment>
        <BreadcrumbSection currentPage="Checkout" />
        <CheckoutLogin />
        <BillingDetails />
        <ToastContainer />
    </Fragment>
  )
}

export default Checkout