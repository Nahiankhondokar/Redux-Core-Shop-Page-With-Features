import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import LeftSidebar from '../Partials/LeftSidebar';
import product from "./../../_assets/images/shop/1.jpg";

const Shop = () => {

  
  return (
    <>
    
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-3 hidden-sm hidden-xs">

            <LeftSidebar />


          </div>
          <div className="col-md-9">
 
            <div className="container-fluid">
              <div className="row">

                
                <div className="col-md-4 col-sm-6">
                  <div className="shop-product shadow">
                    <div className="product-thumb">
                      <Link to={ `/shop/` }>
                        <img src={ product } alt="" />
                      </Link>
                      <div className="product-overlay">
                        <a href="#" className="btn btn-color-out btn-sm">Add To Cart<i className="ti-bag"></i></a>
                      </div>
                    </div>
                    <div className="product-info p-3">
                      <h4 className="upper"><a href="#">Shart</a></h4>

                        <span><b>$4343 </b></span>
                          <span><del>$545</del></span>

                      <div className="save-product"><a href="#"><i className="icon-heart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4 col-sm-6">
                  <div className="shop-product shadow">
                    <div className="product-thumb">
                      <Link to={ `/shop/` }>
                        <img src={ product } alt="" />
                      </Link>
                      <div className="product-overlay">
                        <a href="#" className="btn btn-color-out btn-sm">Add To Cart<i className="ti-bag"></i></a>
                      </div>
                    </div>
                    <div className="product-info p-3">
                      <h4 className="upper"><a href="#">Shart</a></h4>

                        <span><b>$4343 </b></span>
                          <span><del>$545</del></span>

                      <div className="save-product"><a href="#"><i className="icon-heart"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                  
                  
                  {/* <>

                  <div className="col-md-4 col-sm-6">
                    <Skeleton width='250px' height='350px' />
                    <Skeleton width='150px' height='18px' />
                    <Skeleton width='100px' height='18px' />
                  </div> 

                  <div className="col-md-4 col-sm-6">
                    <Skeleton width='250px' height='350px' />
                    <Skeleton width='150px' height='18px' />
                    <Skeleton width='100px' height='18px' />
                  </div> 

                  <div className="col-md-4 col-sm-6">
                    <Skeleton width='250px' height='350px' />
                    <Skeleton width='150px' height='18px' />
                    <Skeleton width='100px' height='18px' />
                  </div> 

                  </> */}
                  
             




              </div>
            
              <ul className="pagination">
                <li><a href="#" aria-label="Previous"><span aria-hidden="true"><i className="ti-arrow-left"></i></span></a>
                </li>
                <li className="active"><a href="#">1</a>
                </li>
                <li><a href="#">2</a>
                </li>
                <li><a href="#">3</a>
                </li>
                <li><a href="#">4</a>
                </li>
                <li><a href="#">5</a>
                </li>
                <li><a href="#" aria-label="Next"><span aria-hidden="true"><i className="ti-arrow-right"></i></span></a>
                </li>
              </ul>
        
            </div>
          </div>
        </div>
      </div>
  
    </section>



    </>
  )
};

export default Shop;