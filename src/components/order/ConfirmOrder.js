import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const ConfirmOrder = () => {
  const location = useLocation();
  const product = location.state;
  // const navigate = useNavigate();
  const [order, setOrder] = useState({
    name: product.name,
    payment: "",
  });

  const [productQuantity, setProductQuantity] = useState(1);
  const [orderPrice, setOrderPrice] = useState(product.price);
  const onChangeValue = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };
  //increment quantity and price
  const incrementValue = () => {
    setProductQuantity(productQuantity + 1);
    let priceIncrement = orderPrice * productQuantity;
    setOrderPrice(priceIncrement);
  };

  const decrementValue = () => {
    setProductQuantity(productQuantity - 1);

    let priceDecrement = orderPrice - product.price;
    setOrderPrice(priceDecrement);
  };
  //api connection
  const onSubmitValue = async (event) => {
    try {
      event.preventDefault();
      axios
        .post(
          // "http://localhost/projects/becha_bikri/backend/api/order/confirmorder.php",
          "backend/api/order/confirmorder.php",
          {
            name: order.name,
            price: orderPrice,
            payment: order.payment,
            quantity: productQuantity,
          }
        )
        .then((res) => {
          console.log(res.data);
          //   if (res.data.success !== false) {
          //     navigate("/order/invoice");
          //   }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-header bg-info text-center">
          <h1>Confirm your order here!</h1>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmitValue}>
            <div className="form-group">
              <label className="text-info">Product Name:</label>
              <input
                type="text"
                name="name"
                value={product.name}
                // onChange={onChangeValue}
                className="form-control"
                placeholder="Product Name"
              />
            </div>
            <div className="form-group my-3">
              <label className="text-info">Product Price:</label>
              <input
                type="number"
                name="price"
                value={orderPrice}
                // onChange={onChangeValue}
                className="form-control"
                placeholder="Product Price"
              />
            </div>
            <div className="form-group my-3">
              <label className="text-info">Product Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={productQuantity}
                placeholder="Product quantity"
              />
              <span>
                <button
                  type="button"
                  className="btn  btn-outline-info"
                  onClick={incrementValue}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={decrementValue}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </span>
            </div>

            <div className="form-group my-3">
              <label className="text-info">Payment Method:</label>
              <select name="payment" onChange={onChangeValue}>
                <option>Select one</option>
                <option value="1">Cash On Delivery</option>
                <option value="2">bKash</option>
              </select>
            </div>
            <input
              type="submit"
              className="btn btn-info"
              value="Confirm Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
