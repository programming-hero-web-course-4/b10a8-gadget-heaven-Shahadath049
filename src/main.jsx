import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; 
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import Statistics from './components/Statistics.jsx';
import Dashboard from './components/Dashboard.jsx';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import NotFoundPage from './components/NotFoundPage';
import useDocumentTitle from './components/ui/useDocumentTitle';

const TitleWrapper = ({ title, children }) => {
  useDocumentTitle(title);
  return children;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/',
        element: <TitleWrapper title="Home"><Home /></TitleWrapper>,
        errorElement: <TitleWrapper title="404 Not Found"><NotFoundPage /></TitleWrapper>
      },
      {
        path: '/statistics',
        element: <TitleWrapper title="Statistics"><Statistics /></TitleWrapper>,
        errorElement: <NotFoundPage />
      },
      {
        path: '/dashboard',
        element: <TitleWrapper title="Dashboard"><Dashboard /></TitleWrapper>,
        
        children: [
          {
            path: '/dashboard/cart',
            element: <TitleWrapper title="Cart"><Cart /></TitleWrapper>,
            errorElement: <NotFoundPage />
          },
          {
            path: '/dashboard/wishlist',
            element: <TitleWrapper title="Wishlist"><Wishlist /></TitleWrapper>,
            errorElement: <NotFoundPage />
          }
        ],
       
      },
      {
        path: '/product-details/:productId',
        element: <TitleWrapper title="Product Details"><ProductDetails /></TitleWrapper>,
        errorElement: <NotFoundPage />
      },
    ]
  },
  {
    path: '/*',
    element: <TitleWrapper title="404 Not Found"><NotFoundPage /></TitleWrapper>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
