import { RouterProvider } from 'react-router-dom';
import browserRouter from './routes';
import { TooltipProvider } from './components/ui/tooltip';

const App = () => {
  return (
    <>
      <TooltipProvider>
        <RouterProvider router={browserRouter} />
      </TooltipProvider>
    </>
  );
};

export default App;
