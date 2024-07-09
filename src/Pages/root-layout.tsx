import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
