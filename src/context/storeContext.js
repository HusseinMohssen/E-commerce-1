import axios from "axios";
import { createContext, useState } from "react";


export let storeContext = createContext(0)


function addToCart(productId) {
    return axios.post('https://ecommerce.routemisr.com/api/v1/cart', { productId }, {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(({ data }) => data).catch(err => err)
}

function getCart() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(({ data }) => data).catch(err => err)
}

function deleteItem(productId) {
    return axios.delete('https://ecommerce.routemisr.com/api/v1/cart/' + productId, {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(({ data }) => data).catch(err => err)
}

function updatCart(productId, count) {
    return axios.put('https://ecommerce.routemisr.com/api/v1/cart/' + productId, { count }, {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(({ data }) => data).catch(err => err)
}

function pay(cartId, shippingAddress) {
    return axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/' + cartId, { shippingAddress }, {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(({ data }) => data).catch(err => err)
}

function addToWishList(productId) {
    return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', { productId }, {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(({ data }) => data).catch(err => err)
}

function getWishList() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(({ data }) => data).catch(err => err)
}

function deleteWishItem(productId) {
    return axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/' + productId, {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then(({ data }) => data).catch(err => err)
}

export default function StoreContextProvider({ children }) {

    let [counter, setCounter] = useState(0)
    let [counterWish, setCounterWish] = useState(0)


    return <storeContext.Provider value={{
        counter,
        setCounter,
        addToCart,
        getCart,
        deleteItem,
        updatCart,
        pay,
        addToWishList,
        getWishList,
        counterWish,
        setCounterWish,
        deleteWishItem
    }}>
        {children}
    </storeContext.Provider>
}