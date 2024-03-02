import React from "react";

export default function Brand({item}) {
  return (
    <>
      <div className="col-md-4 bg-light text-center py-2 ">
        <img src={item.image} className="w-100" alt="" />
        <h3 className="text-main">{item.name}</h3>
      </div>
    </>
  );
}
