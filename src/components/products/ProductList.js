import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    showProducts();
  }, []);
  const showProducts = async () => {
    axios
      .get(
        `http://localhost/projects/becha_bikri/backend/api/products/productlist.php`
      )
      .then((res) => {
        // console.log(res.data.productData);
        setProducts(res.data.productData);
      })
      .then((error) => console.log(error));
  };

  return (
    <>
      <h2>Featured Products</h2>
      <div className="row">
        {products.map((item) => (
          <div className="col-md-2">
            <div className="card">
              <img className="card-img-top" src="" alt="Card" />
              <div className="card-body" key={item.id}>
                <h4 className="card-title">{item.name}</h4>
                <p>
                  <strong>{item.price}</strong>
                </p>
                <p className="card-text">{item.details}</p>
                <Link
                  to="/product/details"
                  state={{ data: item }} //this system used for pass data by link in another component
                  className="btn btn-primary"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
