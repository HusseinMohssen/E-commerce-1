import React, { useContext, useEffect, useState } from "react";
import { storeContext } from "../../context/storeContext";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

export default function WishList() {
  let { getWishList, deleteWishItem, setCounterWish } = useContext(storeContext);
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await getWishList();
      if (data?.response?.data.statusMsg === "fail") {
        setData(null);
      } else {
        setData(data);      
      }
      setLoading(false);
    })();
  }, [data]);

  async function deleteWishProduct(id) {
    let data = await deleteWishItem(id);
    if (data.status === "success") {
      toast.error("item deleted sussessfuly.");
      setCounterWish(data.count);
      setData(data);
    }}


  if (loading) return <Loading />;
  if (data === null || data.count === 0)
    return <h2 className="text-center my-5 text-main">No items in Cart.</h2>;

  return (
    <div className="container my-2 bg-main-light p-3 rounded-1">
      <h2>Shop WishList:</h2>

      {data?.data.map((item) => {
        return (
          <div key={item._id} className="row py-2 border-bottom">
            <p className="text-main">Total Cart sold: {item.sold} EGP</p>
            <div className="col-md-1">
              <img src={item.imageCover} className="w-100" alt="" />
            </div>
            <div className="col-md-11 d-flex justify-content-between">
              <div>
                <p>{item.title}</p>
                  <p className="text-main m-0 p-0">price: {item.price}</p>
                  <p className="text-main m-0 p-0">description: {item.description}</p>
                <button
                    onClick={() => deleteWishProduct(item._id)}
                    className="btn m-0 p-0"
                  >
                    <i className="fa-solid text-main fa-trash-can px-1"></i>
                    Remove
                  </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
