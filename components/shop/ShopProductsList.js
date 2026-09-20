import { Row } from 'react-bootstrap'
import { ShopProductCard } from '../cards/ShopProductCard'

const ShopProductsList = ({ products }) => {
  return (
    <Row className="g-4 mb-6 pb-5" id="shop-products">
        {products.map((product) => {
            return (
                <ShopProductCard
                    key={product.id}
                    product={product}
                />
            )
        })}
    </Row>
  )
}

export default ShopProductsList
