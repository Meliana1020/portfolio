import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './Pages/main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
]);

const RouterComponent = () => {
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>
);
