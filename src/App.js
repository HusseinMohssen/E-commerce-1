import React from 'react'
import { RouterProvider,createHashRouter} from 'react-router-dom'
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
import { Offline, Online } from "react-detect-offline"
import Offlineimg  from '../src/assets/images/offline.jpg'

export default function App() {
  let routes = createHashRouter([
    {
      path:'/',element:<MainLayout/>,children:[
        {index:true,element: <Home/>},
        {path:'home',element: <Home/>},
        {path:'categories',element: <Categories/>},
        {path:'cart',element: <Cart/>},
        {path:'wishlist',element: <WishList/>},
        {path:'products',element: <Products/>},
        {path:'brands',element: <Brands/>},
        {path:'*',element: <NotFound/>},
      ]
    },
    {
      path:'/',element:<AuthLayout/>,children:[
        {path:'signin',element: <Signin/>},
        {path:'signup',element: <Signup/>},
      ]
    }
  ])
  return (
    <>
      
      <Online>
        <RouterProvider router={routes}/>
      </Online>
    <Offline>
      <div className='d-flex justify-content-center'>
        <img src={Offlineimg} alt='You are offline' />
      </div>
    </Offline>
    </>
  )
}
