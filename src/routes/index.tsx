import AuthLayout from '@/components/layouts/auth-layout';
import Layout from '@/components/layouts/layout';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import authRoutes from './auth.routes';
import homeRoutes from './home.routes';

const routes: RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: homeRoutes,
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
