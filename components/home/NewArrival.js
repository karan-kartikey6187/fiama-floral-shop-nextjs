import { getProducts } from '@/services/services'
import { ProductCard } from '@/components/cards/ProductCard'

export const NewArrival = async () => {

    const response = await getProducts()

    return (
        <section className="new-arrival-section">
            <div className="container">
                <h2 className="fw-bolder text-center pb-1 mb-2 position-relative">new <span className="underline-start"> arrival</span> items</h2>
                <div className="new-arrival-cards-wrapper row gx-1 gy-3 justify-content-start mt-4  mb-6 mt-lg-4 mb-lg-7">
                    {response.data.products?.slice(15, 23)?.map((card) => {
                        return (
                            <ProductCard key={card.id} product={card}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
