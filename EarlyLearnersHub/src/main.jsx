import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import LandingPage from './Pages/LandingPage';
import Error from './Pages/Error';
import LandingPageAd from './Pages/Admin/LandingPageAd';
import Auth from './Pages/Auth';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <Error />,
  },
  {
    path: '/Auth',
    element: <Auth />,
  },
  {
    path: '/Admin',
    element: <LandingPageAd />,
  }
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
