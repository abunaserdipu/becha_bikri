import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Shop
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addproduct">
                Addproduct
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
