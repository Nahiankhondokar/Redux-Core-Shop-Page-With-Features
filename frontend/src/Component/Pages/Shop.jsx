import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import LeftSidebar from '../Partials/LeftSidebar';
import product from "./../../_assets/images/shop/1.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { singleProduct } from '../../redux/product/actions';

const Shop = () => {

  // dispatch
  const dispatch = useDispatch();

  // get all product from redux
  const { products } = useSelector(state => state.all_product);

  // single product view
  const hanldeViewProduct = (id) => {
    // e.preventDefault();
    dispatch(singleProduct(id));
  }
  
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

                
                {
                  products && products.map((value, key) => 
                  
                  <div className="col-md-4 col-sm-6">
                    <div className="shop-product shadow">
                      <div className="product-thumb">
                        <Link to={ `/shop/` }>
                          <img style={{ height : '250px', width : '100%', objectFit : 'cover'}} src={ `http://localhost:5050/image/product/${ value.photo }` } alt="" />
                        </Link>
                        <div className="product-overlay">
                          <a href="#" className="btn btn-color-out btn-sm">Add To Cart<i className="ti-bag"></i></a>
                        </div>
                      </div>
                      <div className="product-info p-3">
                        <h4 className="upper"><a href="#">{ value.name }</a></h4>

                          <span><b>${ value.regular_price } </b></span>
                          <span><del>${ value.sale_price }</del></span>
                          
                        <div className="save-product">
                          <a href="#" title='Wish List'><i className="icon-heart"></i></a>
                          <Link to={`/shop/${value._id}`} title='View' onClick={() => hanldeViewProduct(value._id)}><i className="ti-eye"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  )
                }

                
                  
                  
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