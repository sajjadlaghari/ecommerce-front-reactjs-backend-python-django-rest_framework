import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetailed = () => {
    const { id } = useParams();
    const variableMessage = 'Dynamic variable message';
    const [image, setImage] = useState('')
    const [img, setImg] = useState('asdjsdhsdjfjhsdfhsdf')

    const [product, setProduct] = useState([]);
    const ImageController = (img) => {
        setImage(img)
    }


    useEffect(() => {
        fetchProductData();
    }, []);


    const fetchProductData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/product_detailed/'+id); // Replace '/api/sliders' with your actual API endpoint URL
            if (!response.ok) {
                throw new Error('Failed to fetch Slider data');
            }
            const data = await response.json();
            setProduct(data.data);
            console.log(data.data)
            const img = data.data.fearured_image
            console.log(img.replace('/media/', '/'))
            setImage("http://localhost:8000"+img.replace('/media/', '/'))
        } catch (error) {
            console.error(error);
        }
    };


    const handleShowToast = (image) => {
        toast(`Hello, ${variableMessage}!`, {
          position: 'top-right',
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        toast.success('Success message!');
      };

      
     

    return (
        <>

            <div class="super_container" style={{marginTop:"120px"}}>

                <div class="container single_product_container">
                    <div class="row">
                        <div class="col">
                            <div class="breadcrumbs d-flex flex-row align-items-center">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="categories.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Men's</a></li>
                                    <li class="active"><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Single Product</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-7">
                      
                            <div class="single_product_pics">
                                <div class="row">
                                    <div class="col-lg-3 thumbnails_col order-lg-1 order-2">
                                        <div class="single_product_thumbnails">
      <ToastContainer />
                                        {product?.images?.map(item => {
                                                const modifiedImageUrl = item.image.replace('/media/', '/');
                                                
                                                return (
                                                <ul>
                                        
                                                        <li onClick={() => {ImageController("http://localhost:8000"+modifiedImageUrl)}} >
                                                            <img  src={`http://localhost:8000${modifiedImageUrl}`}  alt="" data-image="/images/single_1.jpg" /></li>                                                   

                                                </ul>



                                                );
                                            })}



                                            
                                           
                                        </div>
                                    </div>
                                    <div class="col-lg-9 image_col order-lg-2 order-1">
                                        <div class="single_product_image">
                                            <div class="single_product_image_background" style={{backgroundImage:`url(${image})`}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="product_details">
                                <div class="product_details_title">
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                </div>
                                <div class="free_delivery d-flex flex-row align-items-center justify-content-center">
                                    <span class="ti-truck"></span><span>free delivery</span>
                                </div>
                                <div class="original_price "></div>
                                <div class="product_price">${product.price}</div>
                                <ul class="star_rating">
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                </ul>
                                <div class="product_color">
                                    {/* <span>Select Color:</span>
                                    <ul>
                                        <li style={{background: "#e54e5d"}}></li>
                                        <li style={{background: "#252525"}}></li>
                                        <li style={{background: "#60b3f3"}}></li>
                                    </ul> */}
                                </div>
                                <div class="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                                    <span>Quantity:</span>
                                    <div class="quantity_selector">
                                        <span class="minus"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                        <span id="quantity_value">1</span>
                                        <span class="plus"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                    </div>
                                    <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                    <div class="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
                                </div>
                                <div style={{backgroundColor:'#218838', borderRadius:'10px'}}  class="free_delivery d-flex flex-row align-items-center justify-content-center">
                                    <span class="ti-truck" ></span><span className='text-white'>Add To Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>



        </>
    )
}

export default ProductDetailed