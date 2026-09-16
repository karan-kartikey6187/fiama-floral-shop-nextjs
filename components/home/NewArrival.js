'use client'

import { getProducts } from '@/services/services'
import { useEffect, useState } from 'react'
import { ProductCard } from '@/components/cards/ProductCard'

export const NewArrival = () => {

    const [products, setProducts] = useState()

    const fetchProducs = async () => {
        try {

            const response = await getProducts()

            if (response.status === 404) {
                throw new Error("Error while fetching API endpoint")
            }
            setProducts(response.data.products)
        } catch (error) {
            if (error.response.status === 404) {
                // setError("Invalid URL or endpoint not found");
            } else {
                // setError(error)
            }
        }
    }

    useEffect(() => {
        fetchProducs()
    }, [])


    return (
        <section className="new-arrival-section">
            <div className="container">
                <h2 className="fw-bolder text-center pb-1 mb-2 position-relative">new <span className="underline-start"> arrival</span> items</h2>
                <div className="new-arrival-cards-wrapper row gx-1 gy-3 justify-content-start mt-4  mb-6 mt-lg-4 mb-lg-7">
                    {products?.slice(0, 8)?.map((card) => {
                        return (
                            <ProductCard key={card.id} product={card}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
