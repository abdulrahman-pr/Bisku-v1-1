import { useState } from "react";
// import logo from "../assets/bisku logo.png";
import { Link, NavLink } from "react-router-dom";
import cartImg from "../assets/wired-flat-146-basket-trolley-shopping-card.gif";
import CartItem from "./CartItem";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showWishList, setShowWishList] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { t } = useTranslation();

  return (
    <header>
      <div className="container">
        <div className="logo ">
          <Link to="/">
            <h2>Bisku</h2>
          </Link>

          {/* <img src={logo} alt="" width="60px" /> */}
        </div>
        <div className="main-links">
          <ul>
            <li>
              <NavLink to="/">
                <span>{t("homePageTitle")}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/AllShops">
                <span>{t("ourshopstitle")}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Categories">
                <span>{t("Categories")}</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-header">
          <i
            className="fa-regular fa-bell "
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className={`notifications  ${open ? "active" : ""}`}>
              <div className="notify-head">
                <i className="fa-solid fa-angle-left"></i>
                <h1>all notifications</h1>
              </div>
              <ul className="notify-body">
                <li>we have recived your order</li>
                <li>product is available now</li>
              </ul>
            </div>
          </i>
          <i
            className="fa-solid fa-cart-shopping"
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            <div className="cart">
              <aside className={`one  ${showCart ? "activeit" : ""}`}>
                <div className="aside-header d-flex">
                  <div className="left">
                    <span>shopping cart</span>
                    {/* <span className="b-point">0</span> */}
                  </div>
                  <div className="close-cart">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
                <div className="aside-body">
                  {/* <img
                    src={cartImg}
                    alt=""
                  /> */}
                  {/* {cartItems.length === 0 && <p>your cart is empty</p> } */}
                  {/* <p>your cart is empty</p> */}
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <div className="btn">return to shop</div>
                </div>
                <div className="cart-products">{/* empty */}</div>
                <div className="aside-bottom">
                  <div className="aside-check">
                    <div className="chk-top d-flex">
                      <span>total</span>
                      <span>le 0.00</span>
                    </div>
                    <div className="cart-btns">
                      <div className="btn">view cart</div>
                      <div className="btn">check out</div>
                    </div>
                  </div>
                  <div className="aside-footer">
                    <p>Spend LE 1,500.00 to Free Shipping</p>
                  </div>
                </div>
              </aside>
            </div>
          </i>
          <i
            className="fa-regular fa-user"
            onClick={() => {
              setProfile(!profile);
            }}
          >
            <div className={`user-profile ${profile ? "active" : ""}`}>
              <span>
                <i className="fa-solid fa-xmark"></i>
              </span>
              <div className="profile-details">
                <div className="singin-icon">
                  <Link to="/SingIn">
                    <i className="fa-solid fa-user"></i>
                    <button>sign in</button>
                  </Link>
                </div>
                <div className="singup-icon">
                  <Link to="/SingUp">
                    <i className="fa-solid fa-user-plus"></i>
                    <button>signup</button>
                  </Link>
                </div>
              </div>
            </div>
          </i>
          <i
            className="fa-solid fa-heart"
            onClick={() => {
              setShowWishList(!showCart);
            }}
          >
            <div
              className={`wishlist  ${showWishList ? "active" : "inactive"}`}
            >
              <h3>hello there</h3>
            </div>
          </i>
        </div>
        <div className="mobile-menu">
          <ul>
            <li>
              <Link to="/">
                <i className="fa-solid fa-house"></i>
                <span>{t("homePageTitle")}</span>
              </Link>
            </li>
            <li>
              <Link to="/AllShops">
                <i className="fa-solid fa-shop"></i>
                <span>{t("ourshopstitle")}</span>
              </Link>
            </li>
            <li>
              <Link to="/Categories">
                <i className="fa-solid fa-list"></i>
                <span>{t("Categories")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
