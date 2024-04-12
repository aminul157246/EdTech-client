import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'





import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import Payment from './Pages/Payment/Payment';
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Contact from './Pages/Contact/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/product',
        element : <Products/>
      },
      {
        path : '/login',
        element : <Login/>
      },
      {
        path : '/register',
        element : <Register/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/payment',
        element : <Payment/>
      },
    ]
  },
]);










ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
