import { FaShippingFast } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <header className="py-4 bg-gray-100 border-b-2 border-b-gray-300 ">
            <div className="container mx-auto flex justify-between">
                <div className="flex items-center gap-x-2">
                    <FaShippingFast className="fill-green-500 text-2xl" />
                    <Link to="/">
                        <p className="font-semibold">DeliveryExpress</p>
                    </Link>
                </div>
                <nav className="gap-x-6 hidden lg:flex">
                    <Link to="/" className="hover:text-green-700">
                        Home
                    </Link>
                    <Link to="/pedidos" className="hover:text-green-700">
                        Pedidos
                    </Link>
                </nav>
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <nav className="flex flex-col items-center gap-6 mt-6">
                                <SheetTrigger asChild>
                                    <Link
                                        to="/"
                                        className="hover:text-green-700 text-sm"
                                    >
                                        Home
                                    </Link>
                                </SheetTrigger>
                                <SheetTrigger asChild>
                                    <Link
                                        to="/pedidos"
                                        className="hover:text-green-700 text-sm"
                                    >
                                        Pedidos
                                    </Link>
                                </SheetTrigger>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
