import ForgotPassword from '@/pages/auth/ForgotPassword';
import SignIn from '@/pages/auth/SignIn';
import SignUp from '@/pages/auth/SignUp';
import VerifyEmail from '@/pages/auth/VerifyEmail';
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
  {
    path: 'verify-email',
    element: <VerifyEmail />,
  },
];

export default authRoutes;
