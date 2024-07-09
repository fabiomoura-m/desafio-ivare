import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { useState } from 'react';
import FormNewOrder from '@/components/form-new-order';

const Home = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <div className="container mx-auto flex-1 flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-2xl text-center lg:text-4xl mb-4">
                        Bem-vindo ao DeliveryExpress
                    </h1>
                    <p className="max-w-[800px] text-justify lg:text-xl lg:text-center mb-8">
                        Rastreie seus pedidos de entrega de maneira integrada e
                        eficiente. Nossa plataforma intuitiva permite que você
                        faça pedidos, acompanhe seu status e visualize
                        informações detalhadas sobre pedidos, tudo em um só
                        lugar.
                    </p>
                    <div className="flex justify-center gap-x-4 w-full">
                        <Dialog
                            open={isDialogOpen}
                            onOpenChange={setIsDialogOpen}
                        >
                            <DialogTrigger asChild>
                                <Button className="bg-green-600 hover:bg-green-800 rounded-2xl max-w-48 w-full">
                                    Cadastrar Pedido
                                </Button>
                            </DialogTrigger>
                            <DialogContent
                                aria-describedby="form-order"
                                onInteractOutside={e => {
                                    e.preventDefault();
                                }}
                            >
                                <DialogHeader>
                                    <DialogTitle className="text-center mb-4">
                                        Cadastrar novo pedido
                                    </DialogTitle>
                                    <DialogDescription className="text-center">
                                        Preencha os dados abaixo para realizar
                                        um novo pedido
                                    </DialogDescription>
                                </DialogHeader>
                                <FormNewOrder />
                            </DialogContent>
                        </Dialog>

                        <Button
                            className="bg-green-600 hover:bg-green-800 rounded-2xl max-w-48 w-full"
                            asChild
                        >
                            <Link to="/pedidos">Ver Pedidos</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
