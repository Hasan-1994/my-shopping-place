import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import StorefrontIcon from "@mui/icons-material/Storefront";

function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom block">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">MyShoppingPlace</span>
        </a>

        <ul className="nav nav-pills sm-2">
          <li className="nav-item">
            <Link to="/product" class="nav-link">
              Product
              <StorefrontIcon />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/introduction" class="nav-link">
              Introduction
              <InfoIcon />
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
