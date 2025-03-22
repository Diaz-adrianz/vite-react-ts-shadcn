import ForgotPassword from '@/pages/auth/ForgotPassword';
import SignIn from '@/pages/auth/SignIn';
import SignUp from '@/pages/auth/SignUp';
import { RouteObject } from 'react-router-dom';

const authRoutes: RouteObject[] = [
  {
    path: 'sign-in',
    element: <SignIn />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />,
  },
];

export default authRoutes;
