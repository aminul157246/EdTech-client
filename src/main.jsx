import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'





import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import Payment from './Pages/Payment/Payment';
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <NotFound/>,
    element: <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/product',
        element : <PrivateRoute><Products/></PrivateRoute>
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
        path : '/payment',
        element : <Payment/>
      },
    ]
  },
]);










ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='mx-6 md:mx-12 lg:mx-12'>
    <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
