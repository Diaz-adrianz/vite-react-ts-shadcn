import { RouterProvider } from 'react-router-dom';
import browserRouter from './routes';
import { TooltipProvider } from './components/ui/tooltip';
import { ThemeProvider } from './components/molecules/theme-provider';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <RouterProvider router={browserRouter} />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
