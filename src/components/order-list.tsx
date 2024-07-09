import { useAppSelector } from '@/store/store';
import OrderItem from '@/components/order-item';

const OrderList = () => {
    const orders = useAppSelector(state => state.orderReducer.orders);

    return (
        <div className="mt-6 flex flex-col gap-y-6">
            {orders.length > 0 ? (
                orders.map(order => <OrderItem key={order.id} order={order} />)
            ) : (
                <p>Nenhum pedido cadastrado.</p>
            )}
        </div>
    );
};

export default OrderList;
