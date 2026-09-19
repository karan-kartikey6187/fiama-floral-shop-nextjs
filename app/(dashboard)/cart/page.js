import { Fragment } from 'react'
import { BreadcrumbSection } from '@/components/common/BreadcrumbSection'
import { CartTotals } from '@/components/cart/CartTotals'
import { ToastContainer } from 'react-toastify'
import CartProductsList from '@/app/(dashboard)/cart/CartProductsList'

export const metadata = {
    title: "Cart",
    description: "Review your selected flowers and proceed to checkout.",
};

const Cart = () => {
    return (
        <Fragment>
            <BreadcrumbSection currentPage="Cart" />
            <section className="cart-main-section mt-7 mb-6">
                <CartProductsList/>
            </section>
            <CartTotals />
            <ToastContainer />
        </Fragment>
    )
}

export default Cart