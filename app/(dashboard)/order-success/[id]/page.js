'use client'
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";

const OrderSuccess = () => {

    const router = useRouter();
    const params = useParams();

    const id = params?.id;

    const [isValidOrder, setIsValidOrder] = useState(null);

    useEffect(() => {
        
        const savedOrderId = sessionStorage.getItem("orderId");

        if (id !== savedOrderId) {
            router.replace("/404");
        } else {
            setIsValidOrder(true);
        }
    }, [id, router]);

    if (isValidOrder === null) {
        return null;
    }

    return (
         <ProtectedRoute>    
            <section className="order-success-section py-7">
                <Container className="text-center">
                    <h1 className="text-success fs-2 mb-2">
                        <CheckCircleFill className="text-success fs-2" /> Order Placed Successfully!
                    </h1>
                    <p className="fs-3 mb-2">Thank you for your order.</p>
                    <p className="fs-4 mb-3">Your Order ID: <strong>{id}</strong></p>
                    <Button
                        variant="outline-primary"
                        className="py-2"
                        size="lg"
                        onClick={() => {
                            sessionStorage.removeItem("orderId");
                            router.push("/")
                        }}
                    >
                        Continue Shopping
                    </Button>
                </Container>
            </section>
         </ProtectedRoute>
    );
};


export default OrderSuccess