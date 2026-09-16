import Link from 'next/link'
import React from 'react'
import { Card, Image } from 'react-bootstrap'


export const LatestNewsCard = ({image}) => {
    return (
        <Card className="card border-0 rounded-0 position-relative">
            <div className="card-image position-relative">
                <Link href="#"><Image src={image} className="card-img-top" alt=""/></Link>
            </div>
            <Card.Body className="card-body d-flex flex-column align-items-start py-3 px-0">
                <div className="d-flex gap-4 mb-3">
                    <h3 className="display-5 fw-medium text-light-grey mb-0">Nov 18, 2020</h3>
                    <div className="icon-comment d-flex gap-1 align-items-center">
                        <Image src='/icons/chat-left-text.svg' alt="" className="icon-link"/>
                            <p className="display-5 mb-0 fw-medium text-light-grey">2</p>
                    </div>
                </div>
                <p className="mb-0 latest-news-paragraph nav-link"><span className="underline-start display-1 fw-medium start-0">Lorem ipsum dolor sit amet con adipisicing elit sed</span></p>
            </Card.Body>
        </Card>
    )
}
