import { ChevronsUpDown } from 'lucide-react';
import { Order } from '@/types/order';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import Timer from '@/components/timer';

type OrderItemProps = {
    order: Order;
};

const OrderItem = ({ order }: OrderItemProps) => {
    return (
        <Collapsible
            className=" rounded-xl p-6 border border-gray-200 shadow-md"
            key={order.id}
        >
            <div className="flex items-center justify-between text-sm lg:text-base">
                <div className='flex flex-col md:flex-row justify-between w-full'>
                    <p>
                        <span className="font-semibold">Pedido:</span>{' '}
                        {order.id}
                    </p>
                    <Timer
                        id={String(order.id)}
                        initialSeconds={order.timeDelivery}
                    />
                </div>
                <CollapsibleTrigger asChild className='md:ml-10'>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="mt-4 text-sm lg:text-base">
                <p>
                    <span className="font-semibold">Endereço:</span>{' '}
                    {order.address}
                </p>
                {order.complement && (
                    <p>
                        <span className="font-semibold">Complemento:</span>{' '}
                        {order.complement}
                    </p>
                )}
                {order.description && (
                    <p>
                        <span className="font-semibold">Descrição:</span>{' '}
                        {order.description}
                    </p>
                )}
                <p>
                    <span className="font-semibold">Distância:</span>{' '}
                    {order.distance}
                </p>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default OrderItem;
