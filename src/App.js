import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import MainLayout from './components/LayOut/MainLayout'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Brands from './components/Brands/Brands'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'
import WishList from './components/WishList/WishList'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import AuthLayout from './components/MainSlider/AuthLayout'
import NotFound from './components/NotFound/NotFound'
import { Offline } from "react-detect-offline"
import Offlineimg from '../src/assets/images/offline.jpg'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import ProductDetails from './components/ProductDetails/ProductDetails'
import StoreContextProvider from './context/storeContext'
import { ToastContainer } from 'react-toastify';
import Address from './components/Address/Address'


export default function App() {
  let routes = createHashRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { index: true, element: <ProtectedRoutes> <Home /> </ProtectedRoutes> },
        { path: 'home', element: <ProtectedRoutes> <Home /> </ProtectedRoutes> },
        { path: 'categories', element: <ProtectedRoutes> <Categories /> </ProtectedRoutes> },
        { path: 'cart', element: <ProtectedRoutes> <Cart /> </ProtectedRoutes> },
        { path: 'wishlist', element: <ProtectedRoutes> <WishList /> </ProtectedRoutes> },
        { path: 'products', element: <ProtectedRoutes> <Products /> </ProtectedRoutes> },
        { path: 'brands', element: <ProtectedRoutes> <Brands /> </ProtectedRoutes> },
        { path: 'product-details/:id', element: <ProtectedRoutes> <ProductDetails /> </ProtectedRoutes> },
        { path: 'address/:id', element: <ProtectedRoutes> <Address /> </ProtectedRoutes> },
        { path: '*', element: <NotFound /> },
      ]
    },
    {
      path: '/', element: <AuthLayout />, children: [
        { path: 'signin', element: <Signin /> },
        { path: 'signup', element: <Signup /> },
      ]
    }
  ])
  return (
    <>

      <Offline>
        <div className='d-flex justify-content-center'>
          <img src={Offlineimg} alt='You are offline' />
        </div>
      </Offline>
      <ToastContainer theme='dark' autoClose={700} />

      <StoreContextProvider>
        <RouterProvider router={routes} />
      </StoreContextProvider>

    </>
  )
}
