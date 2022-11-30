import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./home.css";
import {
  faCar,
  faDollar,
  faHeadset,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";
import ProductList from "./products/ProductList";
const Home = () => (
  <>
    {/* Navbar start */}

    {/* Navbar end */}

    {/* Carousel start */}
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carousel1}
            alt="Los Angeles"
            className="d-block"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <div className="carousel-caption">
            <h3>Grocery Items</h3>
            <p>Fresh & quality ensured products!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={carousel2}
            alt="Chicago"
            className="d-block"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <div className="carousel-caption">
            <h3>Clothes</h3>
            <p>Modesty is our first priority!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={carousel3}
            alt="New York"
            className="d-block"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <div className="carousel-caption">
            <h3>Kitchen Accessories</h3>
            <p>Make healthy live healthy!</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>

    {/* Carousel end */}
    {/* Additional service section start */}
    <div className="container my-3">
      <div className="row text-center">
        <div className="col-md-3">
          <div className="card">
            <FontAwesomeIcon icon={faDollar} />
            <div className="card-body">
              <h5 className="card-title">Money Back Guarantee</h5>
              <p className="card-text">Canceled products money back!</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <FontAwesomeIcon icon={faCar} />
            <div className="card-body">
              <h5 className="card-title">Free Delivery</h5>
              <p className="card-text">Delivered products with care!</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <FontAwesomeIcon icon={faHeadset} />
            <div className="card-body">
              <h5 className="card-title">Always Support</h5>
              <p className="card-text">Committed to asap support!</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
            <div className="card-body">
              <h5 className="card-title">Secure Payment</h5>
              <p className="card-text">Your security our fast priority!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Additional service section end */}

    {/* Products start */}
    <section>
      <ProductList />
    </section>
    {/* Products end */}

    {/* Footer start */}
    <footer className="bg-dark">
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-info">Becha Bikri</h1>
            <p className="text-white">
              <strong>Address:</strong> Hajratpur, Keraniganj, Dhaka <br />
              <strong>Mobile:</strong> +8801521327682
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="text-white">Categories</h3>
            <a href="/">Grocery</a>
            <br />
            <a href="/">Clothes</a>
            <br />
            <a href="/">Accessories</a>
          </div>
          <div className="col-md-2">
            <form>
              <div className="form-group">
                <input type="text" name="userName" placeholder="Name" />
              </div>

              <input
                className="my-2"
                type="email"
                name="userEmail"
                placeholder="Email"
              />
              <br />
              <textarea
                name="userMessage"
                rows="3"
                cols="23"
                placeholder="Message"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
      <div className="text-white text-center">
        Copyright &copy; 2022 All rights reserved by <strong>Abu Naser</strong>
      </div>
    </footer>
    {/* Footer end */}
  </>
);

export default Home;
