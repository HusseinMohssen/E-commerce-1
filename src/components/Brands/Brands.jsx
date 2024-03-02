import React from "react";
import axios from "axios";
import Brand from "../Brand/Brand";
import Loading from "../Loading/Loading";
import { useQuery } from "react-query";

export default function Brands() {

  function getbrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }

  let { data, isLoading } = useQuery("getbrands", getbrands);

  if (isLoading) return <Loading />;

  return (
    <div className="container my-4">
      <div className="row">
        {data?.data.data.map(item => (
          <Brand item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
