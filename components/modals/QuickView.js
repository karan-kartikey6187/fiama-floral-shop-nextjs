"use client";
import { Modal } from 'react-bootstrap'
import { ConvertToCurrency } from '../../helper/utils'
import AddToCart from '@/components/common/AddToCart'
import { AddToWishlist } from '../common/AddToWishlist'
import Image from 'next/image'

export const QuickView = ({show, handleClose, product }) => {

    const discountedPrice = product?.price - (product?.price * product?.discountPercentage / 100)

    return (
        <Modal show={show}
               onHide={handleClose}
               className="ps-0" 
               id="modalQuickView"
               centered 
               tabIndex="-1"  
               style={{ zIndex: "10000" }}
               restoreFocus={false}
               size='lg'
               >
            <Modal.Dialog className="custom-modal border-0">
                <div className="modal-content rounded-0 p-5 border-0">
                    <Modal.Body className="row p-0 gap-3">
                        <div className="col-12 col-lg-5 flex-grow-1">
                            <div role="button" type="button" className="quickView-modal-remove-btn mt-2 mb-2 mb-lg-0 bg-primary d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }} onClick={handleClose}><Image src='/icons/remove-white.svg' height={20} width={20} alt="" /></div>
                            <Image src={product?.thumbnail} alt="" height={300} width={300} className="img-fluid quickViewModalImg" />
                        </div>
                        <div className="col-12 col-lg-6 position-relative flex-grow-1">
                            <h1 className="h3 fw-medium mb-2" style={{ fontSize: "30px" }}>{product?.title}</h1>
                            <div className="d-flex gap-4 mb-5 flex-wrap">
                                <p className="text-primary h4 fw-semibold mb-0 lh-sm" style={{ fontSize: "24px" }}>{ConvertToCurrency(discountedPrice)}&ensp;<del className="fw-semibold text-primary h5" style={{ opacity: "0.6" }}>{ConvertToCurrency(product?.price)}</del></p>
                                <div className="d-flex align-items-center" style={{ gap: "3px" }}>
                                    <Image src='/icons/star-yellowy.svg' alt="" className="icon--12px" height={12} width={12} />
                                    <Image src='/icons/star-yellowy.svg' alt="" className="icon--12px" height={12} width={12} />
                                    <Image src='/icons/star-yellowy.svg' alt="" className="icon--12px" height={12} width={12} />
                                    <Image src='/icons/star-yellowy.svg' alt="" className="icon--12px" height={12} width={12} />
                                    <Image src='/icons/star-yellowy.svg' alt="" className="icon--12px" height={12} width={12} />
                                    <p className="nav-link mb-0 fs-13 fw-normal text-nowrap" style={{ color: "gold", marginLeft: "2px" }}>( 95 Reviews )</p>
                                </div>
                            </div>
                            <p className="mb-5 fw-light text-black dark-mode-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellendus repudiandae incidunt quidem pariatur expedita, quo quis modi tempore non.</p>
                            <div className="d-flex gap-2 mb-5 flex-wrap">
                                <AddToCart product={product} modal={true}/>
                                 <AddToWishlist product={product} modal={true}/>
                            </div>
                            <div className="d-flex gap-3 mb-5">
                                <p className="mb-0 fw-medium">Share:</p>
                                <div className="d-flex gap-3 ">
                                    <Image src='/icons/facebook-grey.svg' alt="" className="icon--mini-logo" height={16} width={16} />
                                    <Image src='/icons/twitter-grey.svg' alt="" className="icon--mini-logo" height={16} width={16} />
                                    <Image src='/icons/pinterest-grey.svg' alt="" className="icon--mini-logo" height={16} width={16} />
                                    <Image src='/icons/instagram-grey.svg' alt="" className="icon--mini-logo" height={16} width={16} />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Modal.Dialog>
        </Modal>
    )
}
