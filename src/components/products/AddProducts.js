import React from "react";
import { useState } from "react";
import axios from "axios";
const AddProducts = () => {
  //Inside useState property name and form input field name should match
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: 0,
    details: "",
  });
  // console.log(productInfo);
  // const [image, setImage] = useState({ image: "" });
  const onChangeValue = (event) => {
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value,
    });
    // setImage({ [event.target.name]: event.target.files });
  };
  const Insert = async (event) => {
    try {
      event.preventDefault();
      axios
        .post(
          // `http://localhost/projects/becha_bikri/backend/api/products/addproducts.php`,
          "backend/api/products/addproducts.php",
          {
            productName: productInfo.name,
            productPrice: productInfo.price,
            productDetails: productInfo.details,
            // productImage: image.image[0].name,
          }
        )
        .then((res) => console.log(res.data));
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-info text-center">
              <h1>Add Product</h1>
            </div>
            <div className="card-body">
              <form onSubmit={Insert}>
                <div className="form-group">
                  <label className="text-info">Product Name:</label>
                  <input
                    type="text"
                    name="name"
                    onChange={onChangeValue}
                    className="form-control"
                    placeholder="Product Name"
                  />
                </div>
                <div className="form-group my-3">
                  <label className="text-info">Product Price:</label>
                  <input
                    type="number"
                    name="price"
                    onChange={onChangeValue}
                    className="form-control"
                    placeholder="Product Price"
                  />
                </div>
                <div className="form-group">
                  <label className="text-info">Product Details:</label>
                  <textarea
                    name="details"
                    onChange={onChangeValue}
                    className="form-control"
                    placeholder="Product Details"
                  ></textarea>
                </div>
                <div className="form-group my-3">
                  <label className="text-info">Product Image:</label>
                  <input type="file" name="image" className="form-control" />
                </div>
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Add Product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
