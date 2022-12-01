import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ConfirmOrder = () => {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    name: product.name,
    price: product.price,
    payment: "",
  });

  const onChangeValue = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const onSubmitValue = async (event) => {
    try {
      event.preventDefault();
      axios
        .post(
          `http://localhost/projects/becha_bikri/backend/api/order/confirmorder.php`,
          {
            name: order.name,
            price: order.price,
            payment: order.payment,
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
                value={product.price}
                // onChange={onChangeValue}
                className="form-control"
                placeholder="Product Price"
              />
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
