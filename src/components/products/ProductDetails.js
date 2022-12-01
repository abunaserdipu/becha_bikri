import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductDetails = (props) => {
  const location = useLocation();
  const data = location.state?.data; //Used for received data from another component which are passed through by link
  console.log(data);
  return (
    <div className="container">
      <h1>Product Details</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>{data.name}</h2>
          <p>{data.details}</p>
          <Link
            to="/checkout/login"
            state={{ product: data }}
            className="btn btn-info"
          >
            Checkout
          </Link>
        </div>
        <div className="col-md-6">
          <p>{data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
