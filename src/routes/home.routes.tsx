import Home from '@/pages/home/Home';
import { RouteObject } from 'react-router-dom';

const homeRoutes: RouteObject[] = [
  {
    path: '',
    element: <Home />,
  },
];

export default homeRoutes;
