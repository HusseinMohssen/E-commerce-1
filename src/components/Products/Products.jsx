import axios from "axios";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";
import { useQuery } from "react-query";

export default function Products() {
  function getProducts() {
    return axios("https://ecommerce.routemisr.com/api/v1/products");
  }

  let { data, isLoading } = useQuery("getProducts", getProducts);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {data?.data.data.map((item) => {
            return <Product item={item} key={item._id} />;
          })}
        </div>
      </div>
    </>
  );
}
