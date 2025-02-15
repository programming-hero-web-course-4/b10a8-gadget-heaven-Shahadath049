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


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [ {
          path: '/dashboard/cart',
          element: <Cart></Cart>,
          errorElement: <NotFoundPage></NotFoundPage>
        },
        {
          path: '/dashboard/wishlist',
          element: <Wishlist></Wishlist>,
          errorElement: <NotFoundPage></NotFoundPage>
        }] 
      } ,
      {
        path: '/product-details/:productId',
        element: <ProductDetails></ProductDetails>,
        errorElement: <NotFoundPage></NotFoundPage>
      },
     
    ]
  },
  {
    path: '/*',
    element: <h1>404 Not Found</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
