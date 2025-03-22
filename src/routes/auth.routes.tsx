import SignIn from '@/pages/auth/SignIn';
import { RouteObject } from 'react-router-dom';

const authRoutes: RouteObject[] = [
  {
    path: 'sign-in',
    element: <SignIn />,
  },
];

export default authRoutes;
