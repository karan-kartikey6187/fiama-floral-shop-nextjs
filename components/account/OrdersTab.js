import { Fragment, useEffect, useState } from 'react';
import { Tab, Table } from 'react-bootstrap'
import { useRouter } from 'next/navigation';
import { getOrdersByUser } from '@/services/services';

export const OrdersTab = () => {

    const [orders, setOrders] = useState([]);

    const router = useRouter()

    useEffect(() => {
        const userId = localStorage.getItem("id");

        const fetchOrders = async () => {
            const response = await getOrdersByUser(userId);
            setOrders(response.data);
        };

        fetchOrders();
    }, []);

    return (
        <Tab.Pane eventKey="2">
            {orders.length === 0 ?
                <Fragment>
                    <p className=' text-center text-danger fs-3 fw-semibold mt-7'>You haven't placed any orders yet.</p>
                </Fragment>
                :
                <div className="my-account-tab d-flex flex-column gap-4 ps-lg-6 mt-6 mt-lg-0">
                    <Table responsive className="mb-0 align-middle">
                        <thead>
                            <tr className="border-bottom border-dark">
                                <th className="fw-bold p-2 fw-normal">Order ID</th>
                                <th className="fw-bold p-2 fw-normal">Date</th>
                                <th className="fw-bold p-2 fw-normal">Status</th>
                                <th className="fw-bold p-2 fw-normal">Total</th>
                                <th className="fw-bold p-2 fw-normal">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order.id}>
                                    <td className="p-2 fw-normal">{order.id}</td>
                                    <td className="p-2 fw-normal">{new Date(order.createdAt).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric"
                                    })}</td>
                                    <td className="p-2 fw-normal">{order.orderStatus}</td>
                                    <td className="p-2 fw-normal">${order.totalAmount}</td>
                                    <td className="p-2 fw-normal" role='button' onClick={() => router.push(`/order-details/${order.id}`)}><p className='p-0 m-0 nav-link'>View</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            }
        </Tab.Pane>
    )
}
