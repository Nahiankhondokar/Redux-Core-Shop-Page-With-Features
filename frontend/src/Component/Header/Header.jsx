import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "./../../_assets/images/logo_dark.png";
import banner from "./../../_assets/images/bg/19.jpg";



const Header = ({setProgress}) => {
  return (
    <>
        <header id="topnav" className='shadow'>
        <div className="container">
        
            <div className="logo">
                <a href="index-2.html">
                    <img src={ Logo } alt="" className="logo-light"/>
                </a>
            </div>
    
            <div className="menu-extras">
                <div className="menu-item">
                
                    <div className="cart">
                    <a href="#">
                        <i className="ti-bag"></i><span className="cart-number">2</span>
                    </a>
                    <div className="shopping-cart">
                        <div className="shopping-cart-info">
                        <div className="row">
                            <div className="col-xs-6">
                            <h6 className="upper">Your Cart</h6>
                            </div>
                            <div className="col-xs-6 text-right">
                            <h6 className="upper">$399.99</h6>
                            </div>
                        </div>
                    
                        </div>
                        <ul className="nav product-list">
                        <li>
                            <div className="product-thumbnail">
                            <img src="images/shop/2.jpg" alt=""/>
                            </div>
                            <div className="product-summary">
                            <a href="#">Premium Suit Blazer</a><span>$199.99</span>
                            </div>
                        </li>
                        <li>
                            <div className="product-thumbnail">
                            <img src="images/shop/5.jpg" alt=""/>
                            </div>
                            <div className="product-summary">
                            <a href="#">Reiss Vara Tailored Blazer</a><span>$199.99</span>
                            </div>
                        </li>
                        </ul>
                        <p><a href="#" className="btn btn-color btn-block btn-sm">Checkout</a>
                        </p>
                    </div>
                    </div>
                
                </div>
            <div className="menu-item">
            
                <div className="search">
                <a href="#">
                    <i className="ti-search"></i>
                </a>
                <div className="search-form">
                    <form action="#" className="inline-form">
                    <div className="input-group">
                        <input type="text" placeholder="Search" className="form-control"/><span className="input-group-btn"><button type="button" className="btn btn-color"><span><i className="ti-search"></i></span>
                        </button>
                        </span>
                    </div>
                    </form>
                </div>
                </div>
            
            </div>
            <div className="menu-item">
            
                <a className="navbar-toggle">
                <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </a>
        
            </div>
            </div>
            <div id="navigation">
        
                <ul className="navigation-menu">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li >
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li >
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li >
                        <Link to='/admin'>Dashboard</Link>
                    </li>
                </ul>
        
            </div>
        </div>
        </header>

        <section className="page-title parallax">
        <div data-parallax="scroll" data-image-src='' className="parallax-bg">
            <img src={ banner } alt="" />
        </div>
        <div className="parallax-overlay">
            <div className="centrize">
            <div className="v-center">
                <div className="container">
                <div className="title center">
                    <h1 className="upper">Shop</h1>
                    <h4>Free Delivery Worldwide.</h4>
                    <hr />
                </div>
                </div>
            
            </div>
            </div>
        </div>
        </section>

    </>
  )
};

export default Header;