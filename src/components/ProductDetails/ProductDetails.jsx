import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { storeContext } from "../../context/storeContext";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";

export default function ProductDetails() {
  let x = useParams();
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(true);
  let [btnLoading, setBtnLoading] = useState(true);

  let { counter, setCounter, addToCart } = useContext(storeContext);

  async function getProduct() {
    let { data } = await axios(
      `https://ecommerce.routemisr.com/api/v1/products/${x.id}`
    );
    setProduct(data.data);
    setLoading(false);
  }
  useEffect(() => {
    getProduct();
  }, []);

  async function addProductToCart(productId) {
    setBtnLoading(false);
    let data = await addToCart(productId);

    if (data.status == "success") {
      toast.success("Product added successfully");
      setCounter(data.numOfCartItems);
      setBtnLoading(true);
    }
  }

  if (loading) return <Loading />;

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <img src={product.imageCover} className="w-100" alt="" />
          </div>
          <div className="col-md-9">
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <span>{product.category.name}</span>
            <div className="d-flex justify-content-between my-2">
              <div>
                <p>{product.price} EGP</p>
              </div>
              <div>
                <i className="fa-solid fa-star rating-color"></i>
                {product.ratingsAverage}
              </div>
            </div>
            <button
              onClick={() => addProductToCart(product._id)}
              className="btn bg-main text-white w-100"
              disabled={!btnLoading}
            >
              {btnLoading ? "+ Add To Cart" : "loading..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
