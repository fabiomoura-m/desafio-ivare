import { Outlet } from 'react-router-dom';
import Header from '@/components/header';

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Outlet />
        </div>
    );
}
