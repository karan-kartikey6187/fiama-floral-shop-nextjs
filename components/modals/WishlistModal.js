import Image from "next/image";
import Link from "next/link";
import { Button, Modal } from "react-bootstrap";


export const WishlistModal = ({ show, handleClose, image, title = "Roses Surprise" }) => {

    return (
        <> 
            <Modal
                show={show}
                onHide={handleClose}
                centered
                className="custom-modal"
                style={{ zIndex: 10000 }}
                id="modalWishlist"
                restoreFocus={false}
            >
                <div className="modal-wishlist p-3">
                    <Modal.Body className="d-flex flex-column flex-sm-row p-4 gap-4">
                        <Button
                            type="button"
                            className="cart-modal-remove-btn bg-primary d-flex justify-content-center align-items-center rounded-0"
                            style={{
                                height: "40px",
                                width: "40px"
                            }}
                            onClick={handleClose}
                        >
                            <Image
                                src='/icons/remove-white.svg'
                                alt="Close"
                                height={20}
                                width={20}
                            />
                        </Button>
                        <Image
                            src={image}
                            alt=""
                            width={160}
                            height={160}
                            className="img-fluid"
                        />
                        <div>
                            <h2 className="mb-0 display-3 fw-medium text-black dark-mode-text pe-3">
                                {title}
                            </h2>
                            <div className="d-flex align-items-center mt-3">
                                <div
                                    className="rounded-circle bg-success d-flex justify-content-center align-items-center"
                                    style={{
                                        height: "16px",
                                        width: "16px",
                                        marginRight: "4px"
                                    }}
                                >
                                    <Image src='/icons/check.svg' alt="" height={16} width={16}/>
                                </div>
                                <p className="mb-0 fw-normal">
                                    Successfully added to your Wishlist
                                </p>
                            </div>
                            <div className="mt-4 d-flex gap-2 flex-wrap flex-lg-nowrap">
                                <Link
                                    href="/wishlist"
                                    className="proceed-btn btn rounded-0 checkout-btn fs-14 fw-medium text-center px-3 py-1 dark-mode-text-dark"
                                    style={{ paddingBlock: "0.5rem" }}
                                >
                                    View Wishlist
                                </Link>
                                <Link
                                    href="/cart"
                                    className="apply-coupon-btn btn rounded-0 bg-light-grey-800 text-nowrap fs-14 px-3 fw-medium py-1"
                                    style={{ paddingBlock: "0.5rem" }}
                                >
                                    View Cart
                                </Link>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="mt-6 p-0 pt-5">
                        <div className="text-center">
                            <p className="mb-4 fw-normal text-wrap lh-sm">
                                We want to give you{" "}
                                <span className="fw-medium">
                                    10% discount
                                </span>{" "}
                                for your first order,
                                Use (fiama10) discount code at checkout
                            </p>
                            <div>
                                <Image
                                    src='/images/payment.webp'
                                    alt=""
                                    width={387}
                                    height={22}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
};