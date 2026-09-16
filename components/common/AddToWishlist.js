import { Button, Image } from "react-bootstrap";
import { toast } from "react-toastify";
import { addToWishlist } from "../../store/slices/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

export const AddToWishlist = ({ product, onClick, modal = false }) => {

    const dispatch = useDispatch();

    const { wishlistItems = [] } = useSelector(
        (state) => state.wishlist
    );

    const found = wishlistItems.some(
        (item) => item?.id === product?.id
    );

    const handleAddToWishlist = () => {

        if (found) {
            toast.error("This item already exists in your wishlist");
            return;
        }
        
        dispatch(addToWishlist(product));
        
        if (modal) {
            toast.success("Item added to your wishlist successfully!")
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <Button
            variant={modal ? "outline-primary" : "outline-light"}
            className={modal ? "text-dark bg-primary rounded-0 py-1" : "rounded-0 py-2"}
            onClick={handleAddToWishlist}
        >
            <Image src='/icons/heart-white.svg' alt="Add to wishlist" />
        </Button>
    );
};