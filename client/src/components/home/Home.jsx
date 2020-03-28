import React, { Component, StyleSheet } from "react";
import "./style/main.scss";
import Logo from "../../assets/images/icons/logo.svg";
import SearchIcon from "../../assets/images/icons/search-icon.svg";
import CartIcon from "../../assets/images/icons/cart-icon.svg";
import MenuIcon from "../../assets/images/icons/menu-icon.svg";
import HamBurgerIcon from "../../assets/images/icons/ham-burger.svg";
import LeftArrowIcon from "../../assets/images/icons/left-arrow.svg";
import RightArrowIcon from "../../assets/images/icons/right-arrow.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="main-container">
        {/* Navbar starts */}
        <div className="navbar">
          <div className="logo-container">
            <img
              className="logo-img"
              src={Logo}
              alt=""
              width="32"
              height="32"
            />
          </div>
          <div className="menu-container">
            <div className="search-container">
              <input type="text" className="search-box" placeholder="Search" />
              <div className="search-icon">
                <img src={SearchIcon} alt="" width="15" />
              </div>
            </div>
            <div className="cart-container">
              <img src={CartIcon} alt="" width="18" />
            </div>
            <div className="menu-icon">
              <img src={MenuIcon} alt="" width="50" height="50" />
            </div>
          </div>
        </div>
        {/* Navbar end */}

        {/* main-content starts */}
        <div className="main-section">
          <div className="title-bar">
            <div className="left-part">
              <div className="title">Best Sellers</div>
              <div className="menu-icon">
                <img src={HamBurgerIcon} alt="" width="32" />
              </div>
            </div>

            <div className="right-part">
              <div className="left-arrow">
                <img src={LeftArrowIcon} alt="" />
              </div>
              <div className="right-arrow">
                <img src={RightArrowIcon} alt="" />
              </div>
            </div>
          </div>
          {/* Product Wrapper Starts */}
          <div className="product-section-wrapper">
            {/* Product Card 1 */}
            <div className="product-card-wrapper">
              <div className="product-card">
                <div className="product-image"></div>
                <div className="product-desc">
                  <div className="container">
                    <div className="product-name">Face Mask</div>
                    <div className="product-details">Grape Fruit</div>
                  </div>

                  <div className="footer">
                    <div className="product-price">$16,00</div>
                    <div className="add-to-cart-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Card 1 End */}
            {/* Product Card 2 */}
            <div className="product-card-wrapper">
              <div className="product-card">
                <div className="product-image"></div>
                <div className="product-desc">
                  <div className="container">
                    <div className="product-name">Face Mask</div>
                    <div className="product-details">Grape Fruit</div>
                  </div>

                  <div className="footer">
                    <div className="product-price">$16,00</div>
                    <div className="add-to-cart-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Card 2 Ends*/}
            {/* Product Card 2 */}
            <div className="product-card-wrapper">
              <div className="product-card">
                <div className="product-image"></div>
                <div className="product-desc">
                  <div className="container">
                    <div className="product-name">Face Mask</div>
                    <div className="product-details">Grape Fruit</div>
                  </div>

                  <div className="footer">
                    <div className="product-price">$16,00</div>
                    <div className="add-to-cart-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Card 2 Ends*/}
            {/* Product Card 2 */}
            <div className="product-card-wrapper">
              <div className="product-card">
                <div className="product-image"></div>
                <div className="product-desc">
                  <div className="container">
                    <div className="product-name">Face Mask</div>
                    <div className="product-details">Grape Fruit</div>
                  </div>

                  <div className="footer">
                    <div className="product-price">$16,00</div>
                    <div className="add-to-cart-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Card 2 Ends*/}
          </div>
          {/* Product Container End Here*/}
        </div>
        {/* main-content end */}
      </div>
    );
  }
}
