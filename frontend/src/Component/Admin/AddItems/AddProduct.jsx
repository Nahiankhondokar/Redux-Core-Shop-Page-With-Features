import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { successToaster } from '../../Toaster/Toaster';

const AddProduct = () => {

  // get all category & tag
  const [allCat, setAllCat] = useState([]);
  const [allTag, setAllTag] = useState([]);

  // input value get
  const [inputData , setInputData] = useState({
    name : '',
    regular_price : '',
    sale_price : '',
    stock : '',
    rating : '',
    category : '',
    tags : [],
    photo : []
  });


  // hanlde input data 
  const handleInputData = (e) => {

    setInputData((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }));

  }

  // handle tag input data
  const handleTags = (e) => {

    if(e.target.checked){
      let tags = inputData.tags;
      tags.push(e.target.value);
      
      setInputData({
        ...inputData,
        tags : tags
      });

    }else {
      
      let tag = inputData.tags;
      let newTag = tag.filter(item => item !== e.target.value);

      setInputData((prev) => ({
        ...prev,
        tags : newTag
      }));

    }

  }



  // get photo
  const handlePhotoUpload = (e) => {

    setInputData((prev) => ({
      ...prev,
      photo : e.target.files[0]
    }));

  }

  // product from submit
  const handleFromSubmit = async (e) => {
    e.preventDefault();



    // from data submit by new FormData object for photo upload
    const data = new FormData();
    data.append('name', inputData.name);
    data.append('regular_price', inputData.regular_price);
    data.append('sale_price', inputData.sale_price);
    data.append('stock', inputData.stock);
    data.append('rating', inputData.rating);
    data.append('category', inputData.category);
    data.append('tags', inputData.tags);
    data.append('photo', inputData.photo);

    // console.log(data);

    // add product
    await axios.post('http://localhost:5050/api/v1/product', data)
    .then(data => {

      // alert msg
      successToaster('Product Added Succssful');

      // empty feild
      setInputData({
        name : '',
        regular_price : '',
        sale_price : '',
        stock : '',
        rating : '',
        tags : [], 
        category : '',
        photo : []
      })
      e.target.reset();

    });

  }


  // get tags or categories
  useEffect(() => {

    // get categorys
    axios.get('http://localhost:5050/api/v1/category')
    .then(data => {

      setAllCat(data.data.Categorys);

    });

    // get tags
    axios.get('http://localhost:5050/api/v1/tag')
    .then(data => {

      setAllTag(data.data.Tags);

    });

  }, []);


  

  return (
    <>
      <Container>
        <Link to='/admin/product' className='btn btn-primary btn-sm mb-2' variant='info'>All Product</Link>
        <Row>
          <Col md={ 5 } className='mt-3'>
            <Card className='shadow p-3'>
              <div className="addCat">
                <h3 className='mt-2 text-center'>Add Product</h3>
                  <Form onSubmit={ handleFromSubmit } method='POST' encType='multipart/form-data'>
              
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control value={ inputData.name } name="name" onChange={ handleInputData } ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Regular Price</Form.Label>
                        <Form.Control value={ inputData.regular_price } name="regular_price" onChange={ handleInputData } ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sale Price</Form.Label>
                        <Form.Control value={ inputData.sale_price } name="sale_price" onChange={ handleInputData } ></Form.Control>
                    </Form.Group>
                   
                    <Form.Group>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type='number' value={ inputData.stock } name="stock" onChange={ handleInputData } ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Rating</Form.Label>
                        <select className='form-control' style={{ color : 'blue' }} name="rating" value={ inputData.rating } onChange={ handleInputData } >
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
                        <select className='form-control' name="category" value={ inputData.category } onChange={ handleInputData } >
                            <option value=""> -select- </option>
                            {
                              allCat.map((data, key) => 
                                <option style={{ color : 'black' }} value={ data._id }> { data.name } </option>
                              )
                            }
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tag</Form.Label>
                        <br />

                        {
                          allTag.map((data, key) => 
                            <>
                            <input type="checkbox" id={data.name} value={data.name} onChange={handleTags} /> <label htmlFor={data.name}>{ data.name }</label> &nbsp;
                            </>
                          )
                        }

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Feature Photo</Form.Label>
                        <Form.Control type='file' name='photo' onChange={ handlePhotoUpload }></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Gallery Photo</Form.Label>
                        <Form.Control type='file' multiple name='gallery' ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='info' className='btn-sm mt-3 text-center'>Add Product</Button>

                  </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default AddProduct;