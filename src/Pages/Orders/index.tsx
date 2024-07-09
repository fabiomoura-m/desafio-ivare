import OrderList from '@/components/order-list';

const Orders = () => {
    return (
        <>
            <div className="container flex-1 my-6">
                <h1 className="font-bold text-xl lg:text-2xl">Pedidos</h1>
                <OrderList />
            </div>
        </>
    );
};

export default Orders;
