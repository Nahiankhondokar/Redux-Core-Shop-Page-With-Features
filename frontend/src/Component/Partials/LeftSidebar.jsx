import React, { useEffect, useState } from 'react';
import product from "./../../_assets/images/shop/1.jpg";
import axios from 'axios';

const LeftSidebar = () => {

 
  return (
    <>
          <div className="sidebar">
              <div className="widget">
                  <h6 className="upper">Search Shop</h6>
                  <form>
                    <input value=''  type="text" placeholder="Search.." className="form-control"/>
                  </form>
              </div>

              <div className="widget">
                <h6 className="upper">Categories</h6>
                <ul className="nav">

                  <div className="form-check">
                    <input className="form-checkbox" type="checkbox" value="men" id="men" /> &nbsp;
                    <label className="form-check-label" for="men" style={{ fontSize : "13px", fontWeight: "normal" }}>
                    Men
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-checkbox" type="checkbox" value="women" id="women" /> &nbsp;
                    <label className="form-check-label" for="women" style={{ fontSize : "13px", fontWeight: "normal" }}>
                    Women
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-checkbox" type="checkbox" value="" id="kids" /> &nbsp;
                    <label className="form-check-label" for="kids" style={{ fontSize : "13px", fontWeight: "normal" }}>
                    Kids
                    </label>
                  </div>
                  
                </ul>
              </div>

               <div className="widget">
                <h6 className="upper">Popular Tags</h6>
                <div className="tags clearfix">

                <a onClick='' href='' >tags</a>

                </div>
              </div>
               
              <div className="widget">
                <h6 className="upper">Trending Products</h6>
                <ul className="nav product-list">
                  <li>
                    <div className="product-thumbnail">
                      <img src={ product } alt=""/>
                    </div>
                    <div className="product-summary"><a href="#">Premium Suit Blazer</a><span>$199.99</span>
                    </div>
                  </li>
                  <li>
                    <div className="product-thumbnail">
                      <img src={ product } alt=""/>
                    </div>
                    <div className="product-summary"><a href="#">Vintage Sweatshirt</a><span>$199.99</span>
                    </div>
                  </li>
                  <li>
                    <div className="product-thumbnail">
                      <img src={ product } alt=""/>
                    </div>
                    <div className="product-summary"><a href="#">Reiss Vara Blazer</a><span>$199.99</span>
                    </div>
                  </li>
                </ul>
              </div>
                  
             
              
          </div>
    
    </>
  )
};

export default LeftSidebar;