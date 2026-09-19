import { Fragment } from 'react'
import { BreadcrumbSection } from '@/components/common/BreadcrumbSection'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import WishlistProductsList from './WishlistProductsList'

export const metadata = {
    title: "Wishlist",
    description: "View your favorite flowers saved in your wishlist.",
};

const Wishlist = () => {


    return (
        <Fragment>
            <BreadcrumbSection currentPage="Wishlist" />
            <section className="wishlist-main-section mt-7 mb-7">
                <Container>
                    <WishlistProductsList/>
                </Container>
            </section>
            <ToastContainer />
        </Fragment >
    )
}

export default Wishlist