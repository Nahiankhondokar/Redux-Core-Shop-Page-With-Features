import React, { useEffect, useState } from 'react';
import product from "./../../_assets/images/shop/1.jpg";
import axios from 'axios';
import { useSelector } from 'react-redux';

const LeftSidebar = () => {


  // ger tag & category from redux
  const { categories } = useSelector(state => state.all_category);
  const { tags } = useSelector(state => state.all_tag);

 
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

                  {
                    categories.map((data, index) => 
                    <div className="form-check">
                      <input className="form-checkbox" type="checkbox" value={data._id} id="men" /> &nbsp;
                      <label className="form-check-label" for="men" style={{ fontSize : "13px", fontWeight: "normal" }}>
                      {data.name}
                      </label>
                    </div>
                    )
                  }

                  
                  
                </ul>
              </div>

               <div className="widget">
                <h6 className="upper">Popular Tags</h6>
                <div className="tags clearfix">

                  {
                    tags.map((data, index) => 
                      <a onClick='' href='' >{data.name}</a>
                    )
                  }
                

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