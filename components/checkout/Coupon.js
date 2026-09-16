import { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { applyCoupon } from "../../store/slices/cartSlice";

export const Coupon = () => {

    const cartState = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [coupon, setCoupon] = useState("");

    const [showCoupon, setShowCoupon] = useState(false);

    const handleApplyCoupon = () => {

        if (!coupon.trim()) {
            toast.error("Coupon Code can't be empty!");
            return;
        }

        const couponInfo = cartState.couponCodes.find(
            (item) => item.code.toLowerCase() === coupon.trim().toLowerCase()
        );

        if (couponInfo) {
            dispatch(applyCoupon(couponInfo.code));
            toast.success("Coupon code is applied successfully!");
            setCoupon("");
        } else {
            toast.error("Invalid coupon code!");
        }
    };

    return (
        <Fragment>
            {cartState?.totalQuantities === 0 ?
                " "
                :
                <Fragment>
                    <div className="px-5 py-3 bg-light-grey mt-4 mb-1 w-100">
                        <h2 className="display-4 fw-medium">
                            Have a coupon?
                            <span
                                id="loginCouponToggleBtn"
                                className="text-primary"
                                role="button"
                                onClick={() => setShowCoupon((prev) => !prev)}
                            >&nbsp;
                                Click here to enter your code
                            </span>
                        </h2>
                    </div>

                    <div
                        id="loginCouponDropdown"
                        className={`mt-1 ${showCoupon ? "d-block" : "d-none"}`}
                    >
                        <Form>
                            <div className="border px-4 pt-4 pb-6 mb-3">
                                <p className="mb-0 mt-3 fw-light mb-4">
                                    If you have a coupon code, please apply it below.
                                </p>
                                <Form.Control
                                    type="text"
                                    className="checkOutCouponBtn form-control fs-13 text-black fw-normal rounded-0 border-0 bg-light-grey px-3 py-2"
                                    placeholder="Coupon Code"
                                    id="applyCouponLogin"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                />
                                <div
                                    className="apply-coupon-btn btn rounded-0 bg-light-grey-800 px-6 py-2 mt-4 fw-medium text-uppercase"
                                    role="button"
                                    onClick={handleApplyCoupon}
                                >
                                    Apply Coupon
                                </div>
                            </div>
                        </Form>
                    </div>
                </Fragment>
            }

        </Fragment>
    );
};