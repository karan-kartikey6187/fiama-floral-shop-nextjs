import { addToCart } from '@/store/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';
import { removeFromWishlist } from '@/store/slices/wishlistSlice';
import { toast } from 'react-toastify';

export const MoveToCart = ({ product }) => {

    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state?.cart)
    const found = cartItems.some((item) => item?.id === product?.id)

    const handleMoveToCart = () => {

        dispatch(removeFromWishlist(product?.id));
        dispatch(addToCart(product));

        if (found) {
            toast.success("Item quantity increased and removed from wishlist!");
        } else {
            toast.success("Item moved to Cart successfully!");
        }
    }

    return (
        <div>
            <Button
                variant="outline-light"
                size='md'
                className="rounded-0 text-nowrap mt-3 mt-md-0 ms-md-5 dark-mode-text"
                onClick={handleMoveToCart}
            >
                Move to Cart
            </Button>
        </div>
    )
}
