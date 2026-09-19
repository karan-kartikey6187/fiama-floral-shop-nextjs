import { Container, Row } from 'react-bootstrap'
import { ShopProductCard } from '@/components/cards/ShopProductCard'
import { PageNavigation } from './PageNavigation'
import { Fragment, useEffect, useState } from 'react'
import { getListProducts } from '@/services/services'
import { useParams } from 'next/navigation'
import useMounted from '@/hooks/useMounted'


export const ShopProducts = () => {

    const params = useParams()

    const [listProducts, setListProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const hasMounted = useMounted()

    const productsPerPage = 9

    const categorySlug = params?.slug || 'beauty'


    const fetchListProducts = async () => {

        try {

            const response = await getListProducts(categorySlug)

            if (response.status === 404) {
                throw new Error("Error while fetching API endpoint")
            }

            setListProducts(response.data.products)

        } catch (error) {

            if (error.response?.status === 404) {
                // setError("Invalid URL or endpoint not found");
            } else {
                // setError(error)
            }

        }
    }


    useEffect(() => {
        fetchListProducts()
        setCurrentPage(1)
    }, [params.slug])

    const totalPages = Math.ceil(
        listProducts.length / productsPerPage
    )

    const startIndex = (
        currentPage - 1
    ) * productsPerPage

    const currentProducts = listProducts.slice(
        startIndex,
        startIndex + productsPerPage
    )

    const handlePageChange = (page) => {

        setCurrentPage(page)

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
  <Fragment>
    {hasMounted &&
        <section className="shop-products-section mt-7 mb-0 mb-lg-7">
            <Container>
                <div className="shop-products-header d-flex flex-column flex-md-row justify-content-start align-items-start align-items-md-center mb-6 justify-content-md-between pb-1">
                    <p className="mb-0 display-4 text-light-grey fw-medium">
                        Showing {currentProducts.length} of {listProducts.length} results
                    </p>
                </div>

                <Row className="g-4 mb-6 pb-5" id="shop-products">
                    {currentProducts.map((product) => {
                        return (
                            <ShopProductCard
                                key={product.id}
                                product={product}
                            />
                        )
                    })}
                </Row>

                {listProducts.length > productsPerPage && (
                    <PageNavigation
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </Container>
        </section>
    }
  </Fragment>
    )
}