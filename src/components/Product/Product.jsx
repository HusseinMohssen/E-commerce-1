import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../../context/storeContext";
import { toast } from "react-toastify";

export default function Product({ item }) {
  let { setCounter, addToCart, addToWishList,setCounterWish } = useContext(storeContext);
  let [btnLoading, setBtnLoading] = useState(true);
  let [btnWishLoading, setBtnWishLoading] = useState(true);

  async function addProductToCart(productId) {
    setBtnLoading(false);
    let data = await addToCart(productId);

    if (data.status == "success") {
      toast.success("Product added successfully");
      setCounter(data.numOfCartItems);
      setBtnLoading(true);
    }
  }

  async function addProductToWishList(productId) {
    setBtnWishLoading(false);
    let data = await addToWishList(productId);
    

    if (data.status == "success") {
      toast.warning("Product added successfully");
      setCounterWish(data.count);
      setBtnWishLoading(true);
    }
  }

  return (
    <>
      <div className="col-md-2">
        <div className="product cursor-pointer rounded-3 p-3">
          <Link to={"/product-details/" + item._id}>
            <img src={item.imageCover} className="w-100" alt="" />
            <span className="text-main">{item.category.name}</span>
            <h5>{item.title.split(" ").slice(0, 2).join(" ")}</h5>
            <div className="d-flex justify-content-between">
              <div>{item.price} EGP</div>
              <div>
                <i className="fa-solid fa-star rating-color"></i>
                {item.ratingsAverage}
              </div>
            </div>
          </Link>
          <button
            onClick={() => addProductToCart(item._id)}
            className="btn bg-main w-100 text-white"
            disabled={!btnLoading}
          >
            {btnLoading ? 'Add To Cart' : 'loading...'}
          </button>
          <hr />
          <button
            onClick={() => addProductToWishList(item._id)}
            className="btn bg-warning w-100 text-white"
            disabled={!btnWishLoading}
          >
            {btnWishLoading ? 'Add To WishList' : 'loading...'}
          </button>
        </div>
      </div>
    </>
  );
}
