import React, { useContext, useEffect, useState } from "react";
import { storeContext } from "../../context/storeContext";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Cart() {
  let { getCart, deleteItem, setCounter, updatCart } = useContext(storeContext);
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await getCart();
      if (data?.response?.data.statusMsg === "fail") {
        setData(null);
      } else {
        setData(data);
      }
      setLoading(false);
    })();
  }, []);

  async function deleteProduct(id) {
    let data = await deleteItem(id);
    if (data.status === "success") {
      toast.error("product deleted sussessfuly.");
      setCounter(data.numOfCartItems);
      setData(data);
    }
  }

  async function updatProductCart(id, count) {
    let data = await updatCart(id, count);
    if (data.status === "success") {
      toast.success("product updated sussessfuly.");
      setCounter(data.numOfCartItems);
      setData(data);
    }
  }

  if (loading) return <Loading />;
  if (data === null || data.numOfCartItems === 0)
    return <h2 className="text-center my-5 text-main">No items in Cart.</h2>;
  return (
    <div className="container my-2 bg-main-light p-3 rounded-1">
      <h2>Shop Cart:</h2>
      <p className="text-main">
        Total Cart Price: {data?.data.totalCartPrice} EGP
      </p>
      {data?.data.products.map((item) => {
        return (
          <div key={item._id} className="row py-2 border-bottom">
            <div className="col-md-1">
              <img src={item.product.imageCover} className="w-100" alt="" />
            </div>
            <div className="col-md-11 d-flex justify-content-between">
              <div>
                <p>{item.product.title}</p>
                <p className="text-main m-0 p-0">price: {item.price}</p>
                <button
                  onClick={() => deleteProduct(item.product._id)}
                  className="btn m-0 p-0"
                >
                  <i className="fa-solid text-main fa-trash-can px-1"></i>
                  Remove
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    updatProductCart(item.product._id, item.count + 1)
                  }
                  className="btn brdr"
                >
                  +
                </button>
                <span className="px-2">{item.count}</span>
                <button
                  disabled={item.count <= 1}
                  onClick={() =>
                    updatProductCart(item.product._id, item.count - 1)
                  }
                  className="btn brdr"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <Link to={`/address/${data.data._id}`} className="btn bg-main text-white my-3">Place Order</Link>
    </div>
  );
}
