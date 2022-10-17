import { useEffect, useState } from 'react';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Shop from './Component/Pages/Shop';
import SingleProduct from './Component/Pages/SingleProduct';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Dashboard from './Component/Admin/Dashboard';
import Category from './Component/Admin/Category';
import Tag from './Component/Admin/Tag';
import Product from './Component/Admin/Product';
import AddProduct from './Component/Admin/AddItems/AddProduct';
import ViewProduct from './Component/Admin/AddItems/ViewProduct';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getAllProduct } from './redux/product/actions';
import { getAllCategory } from './redux/category/actions';
import { getAllTag } from './redux/tag/actions';
import NotFound from './Component/NotFound/NotFound';
import LoadingBar from 'react-top-loading-bar';
import EditProduct from './Component/Admin/EditComponents/EditProduct';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './_assets/css/bundle.css';
import './_assets/css/style.css';
import './App.css';





function App() {

  // dispatch
  const dispatch = useDispatch();

  // react top loading bar
  const [progress, setProgress] = useState(100)

  // get all data
  useEffect(() => {
   
    // get all product
    dispatch(getAllProduct());

    // get all category
    dispatch(getAllCategory())

    // get all tag
    dispatch(getAllTag());

  }, [dispatch]);
  

  return (
    <>
    

    {/* Toaster */}
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />

    
      <LoadingBar
        color='red'
        height={3}
        loaderSpeed={1000}
        transitionTime={500}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/shop/:id" element={ <SingleProduct /> } />

          {/* Nested Routing */}
          <Route path="/admin" element={ <Dashboard /> }>
            <Route path="/admin/category" element={ <Category /> } />
            <Route path="/admin/tag" element={ <Tag /> } />
            <Route path="/admin/product" element={ <Product  /> } />
            <Route path="/admin/add-product" element={ <AddProduct  /> } />
            <Route path="/admin/product-view/:id" element={ <ViewProduct /> } />
            <Route path="/admin/product-edit/:id" element={ <EditProduct /> } />
          </Route>

        <Route path='/*' element={ <NotFound /> } />
      </Routes>


    
      <Footer />



  
  
    
    </>
  );
}

export default App;
