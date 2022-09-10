import "./Header.scss";
//Importing this way so the I can use both the links

const Header = () => {
  return (
    <header>
      <div className="product-details-header ml-35 mr-35">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-12 d-none d-lg-block">
              <div className="main-menu product-details-menu">
                <nav id="mobile-menu-four">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                      <ul className="submenu submenu-three">
                        <li>
                          <a href="/">Home Style 1</a>
                        </li>
                        <li>
                          <a href="/index-2">Home Style 2</a>
                        </li>
                        <li>
                          <a href="/index-3">Home Style 3</a>
                        </li>
                        <li>
                          <a href="/index-4">Home Style 4</a>
                        </li>
                        <li>
                          <a href="/index-5">Home Style 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li className="mega-menu">
                      <a href="/shop">Shop</a>
                      <ul className="submenu ">
                        <li>
                          <a href="/shop#">Category View</a>
                          <ul className="submenu ">
                            <li>
                              <a href="/shop/col-2">Shop 2 Column</a>
                            </li>
                            <li>
                              <a href="/shop/right-sidebar">Shop 2 Right Sidebar</a>
                            </li>
                            <li>
                              <a href="/shop/col-4">Shop 4 Column Full</a>
                            </li>
                            <li>
                              <a href="/shop/list-view">Shop List View</a>
                            </li>
                            <li>
                              <a href="/shop/col-4">Shop No Sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/shop#">Category View</a>
                          <ul className="submenu">
                            <li>
                              <a href="/shop">Sidebar Left</a>
                            </li>
                            <li>
                              <a href="/shop/right-sidebar">Sidebar Right</a>
                            </li>
                            <li>
                              <a href="/shop/col-4">Style 01</a>
                            </li>
                            <li>
                              <a href="/shop/right-sidebar">Style 02</a>
                            </li>
                            <li>
                              <a href="/shop">Style 03</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/shop#">Product View</a>
                          <ul className="submenu">
                            <li>
                              <a href="/shop/1">Simple Product</a>
                            </li>
                            <li>
                              <a href="/shop/101">Product Upcoming</a>
                            </li>
                            <li>
                              <a href="/shop/up-thumb/16">Thumb Top Product</a>
                            </li>
                            <li>
                              <a href="/compare">Compare</a>
                            </li>
                            <li>
                              <a href="/wishlist">wishlist</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/blog">News</a>
                      <ul className="submenu">
                        <li>
                          <a href="/blog">Blog Standart</a>
                        </li>
                        <li>
                          <a href="/blog/left-sidebar">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="/blog/no-sidebar">Blog No Sidebar</a>
                        </li>
                        <li>
                          <a href="/blog/col-2">Blog 2 Column</a>
                        </li>
                        <li>
                          <a href="/blog/col-mas-2">Blog 2 Col Masonry</a>
                        </li>
                        <li>
                          <a href="/blog/col-3">Blog 3 Column</a>
                        </li>
                        <li>
                          <a href="/blog/col-mas-3">Blog 3 Col Masonry</a>
                        </li>
                        <li>
                          <a href="/blog/1">Blog Details</a>
                        </li>
                        <li>
                          <a href="/blog/10">Blog Details Video</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/shop#">Pages</a>
                      <ul className="submenu">
                        <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                        <li>
                          <a href="/login">login</a>
                        </li>
                        <li>
                          <a href="/register">Register</a>
                        </li>
                        <li>
                          <a href="/cart">Shoping Cart</a>
                        </li>
                        <li>
                          <a href="/checkout">Checkout</a>
                        </li>
                        <li>
                          <a href="/wishlist">Wishlist</a>
                        </li>
                        <li>
                          <a href="/order-success">Order Success</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-5">
              <div className="logo product-details-logo">
                <a href="/">
                  <img src="/img/logo/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-3 col-md-7 col-5 header-6-padd">
              <div className="header-left-icon d-flex align-items-center f-right">
                <a className="search-btn nav-search search-trigger" href="/shop#">
                  <i className="fas fa-search" />
                </a>
                <a href="/login">
                  <i className="fas fa-user" />
                </a>
                <a className="position-relative" href="/wishlist">
                  <span className="iconValue">0</span>
                  <i className="fas fa-heart" />
                </a>
                <a className="position-relative" href="/compare">
                  <span className="iconValue">0</span>
                  <i className="fas fa-exchange-alt" />
                </a>
                <a className="position-relative" href="/cart">
                  <span className="iconValue">0</span>
                  <i className="fas fa-cart-arrow-down" />
                </a>
              </div>
            </div>
            <div className="col-2 col-md-1 d-block d-lg-none">
              <div className="hamburger-menu text-end ">
                <a href="/shop">
                  <i className="fal fa-bars" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
