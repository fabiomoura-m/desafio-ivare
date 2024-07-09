import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/Pages/root-layout';
import Home from '@/Pages/Home';
import Orders from '@/Pages/Orders';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/pedidos',
                element: <Orders />
            }
        ]
    }
]);

export default router;
