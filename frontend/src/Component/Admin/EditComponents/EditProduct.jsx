import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { errorToaster } from '../../Toaster/Toaster';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../../../redux/product/actions';

const EditProduct = () => {


  // ger tag & category from redux
  const { categories } = useSelector(state => state.all_category);
  const { tags } = useSelector(state => state.all_tag);
  const { editProduct } = useSelector(state => state.all_product);

  // dispatch
  const dispatch = useDispatch();

  // get all category & tag
  const [allCat, setAllCat] = useState([]);
  const [allTag, setAllTag] = useState([]);

  // input value get
  const [editData , setEditData] = useState({
    
    name : editProduct.name,
    regular_price : editProduct.regular_price,
    sale_price : editProduct.sale_price,
    stock : editProduct.stock,
    rating : editProduct.rating,
    category : '',
    tags : [],
    photo : editProduct.photo,
    gallery : []

  });


  // hanlde input data 
  const handleeditData = (e) => {

    setEditData((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }));

  }

  // handle tag input data
  const handleTags = (e) => {

    if(e.target.checked){
      let tags = editData.tags;
      tags.push(e.target.value);
      
      setEditData({
        ...editData,
        tags : tags
      });

    }else {
      
      let tag = editData.tags;
      let newTag = tag.filter(item => item !== e.target.value);

      setEditData((prev) => ({
        ...prev,
        tags : newTag
      }));

    }

  }

  // get photo
  const handlePhotoUpload = (e) => {

    setEditData((prev) => ({
      ...prev,
      photo : e.target.files[0]
    }));

  }

  // get Gallery
  // const handleGalleryUpload = (e) => {

  //   setEditData((prev) => ({
  //     ...prev,
  //     gallery : e.target.files
  //   }));

  // }

    
  // product from submit
  const handleFromUpdate = (e, id) => {
    e.preventDefault();

    // from data submit by new FormData object for photo upload
    const data = new FormData();
    data.append('name', editData.name);
    data.append('regular_price', editData.regular_price);
    data.append('sale_price', editData.sale_price);
    data.append('stock', editData.stock);
    // data.append('rating', editData.rating);
    // data.append('category', editData.category);
    // data.append('tags', editData.tags);
    data.append('photo', editData.photo);

    // gallery manage
    // for( let i = 0; i < editData.gallery.length; i++ ){
    //   data.append('gallery', editData.gallery[i]);
    // }
    // console.log(data);

    // add product
    dispatch(updateProduct(id, data));

    // empty feild
    setEditData({
      name : '',
      regular_price : '',
      sale_price : '',
      stock : '',
      rating : '',
      tags : [], 
      category : '',
      photo : '',
      gallery : []
    })
    e.target.reset();


    

  }


  return (
    <>
      <Container>
        <Link to='/admin/product' className='btn btn-primary btn-sm mb-2' variant='info'>All Product</Link>
        <Row>
          <Col md={ 5 } className='mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h3 className='mt-2 text-center'>Edit Product</h3>
                  <Form onSubmit={ (e) => handleFromUpdate(e, editProduct._id) } encType='multipart/form-data'>
              
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control value={ editData.name } name="name" onChange={handleeditData} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Regular Price</Form.Label>
                        <Form.Control value={ editData.regular_price } name="regular_price" onChange={handleeditData}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sale Price</Form.Label>
                        <Form.Control value={ editData.sale_price } name="sale_price" onChange={handleeditData} ></Form.Control>
                    </Form.Group>
                   
                    <Form.Group>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type='number' value={ editData.stock } name="stock" onChange={handleeditData} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Rating</Form.Label>
                        <select className='form-control' style={{ color : 'blue' }} name="rating" value={ editData.rating }>
                            <option value=""> -select- </option>
                            <option value="1"> 1 Start </option>
                            <option value="2"> 2 Start </option>
                            <option value="3"> 3 Start </option>
                            <option value="4"> 4 Start </option>
                            <option value="5"> 5 Start </option>
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categroy</Form.Label>
                        <select className='form-control' name="category" value={ editData.category } >
                            <option value=""> -select- </option>
                            {
                              categories.map((data, key) => 
                                <option style={{ color : 'black' }} value={ data._id }> { data.name } </option>
                              )
                            }
                            {/* {(editProduct.category == data._id ? 'selected' : '')} */}
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tag</Form.Label>
                        <br />

                        {
                          tags.map((data, key) => 
                            <>
                            <input type="checkbox" id={data.name} value={data.name}  /> <label htmlFor={data.name}>{ data.name }</label> &nbsp;
                            </>
                          )
                        }

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Feature Photo</Form.Label>
                        <Form.Control type='file' name='photo' onChange={handlePhotoUpload}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gallery Photo</Form.Label>
                        <Form.Control type='file' multiple name='gallery' ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Update</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default EditProduct;