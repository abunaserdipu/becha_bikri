import axios from "axios";
import { useState, useEffect } from "react";
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
        {products.map((item, index) => (
          <div className="col-md-2" key={item.id}>
            <div class="card">
              <img class="card-img-top" src="" alt="Card" />
              <div class="card-body">
                <h4 class="card-title">{item.name}</h4>
                <p>
                  <strong>{item.price}</strong>
                </p>
                <p class="card-text">{item.details}</p>
                <a href="abc" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
