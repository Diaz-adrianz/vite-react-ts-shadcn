import AuthLayout from '@/components/layouts/auth-layout';
import Layout from '@/components/layouts/layout';
import Home from '@/pages/Home';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import authRoutes from './auth.routes';

const routes: RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: authRoutes,
  },
];

const browserRouter: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes);

export { routes };
export default browserRouter;
