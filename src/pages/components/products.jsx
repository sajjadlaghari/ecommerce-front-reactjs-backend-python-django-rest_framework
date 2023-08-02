import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";


const Products = () => {

    const [products, setProducts] = useState([]);

    const MAX_TITLE_LENGTH = 20; // Maximum characters for the short title
    const MAX_DESCRIPTION_LENGTH = 50; // Maximum characters for the short description

    useEffect(() => {
        fetchProductData();
    }, []);


    const fetchProductData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/products/'); // Replace '/api/sliders' with your actual API endpoint URL
            if (!response.ok) {
                throw new Error('Failed to fetch Slider data');
            }
            const data = await response.json();
            setProducts(data.data);
            console.log(data.data)
        } catch (error) {
            console.error(error);
        }
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + '...';
        }
    };
    return (
        <>

            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <div class="section_title new_arrivals_title">
                            <h2>All Products</h2>
                        </div>
                    </div>
                </div>
                <div class="row">


                    {products.map(item => {
                        const modifiedImageUrl = item.fearured_image.replace('/media/', '/');
                        return (
                            <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-3 mt-4">
                                <div class="card">
                                    <img class="card-img" src={`http://localhost:8000${modifiedImageUrl}`} alt="Vans" style={{ maxHeight: "370px", minHeight: "370px" }} />
                                    <div class="card-img-overlay d-flex justify-content-end">
                                        <a href="#" class="card-link text-danger like">
                                            <i class="fas fa-heart"></i>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{truncateText(item.name, MAX_TITLE_LENGTH)}</h4>
                                        <p class="card-text">
                                            {truncateText(item.description, MAX_DESCRIPTION_LENGTH)}    </p>
                                        {/* <div class="options d-flex flex-fill">
                                            <select class="custom-select mr-1">
                                                <option selected>Color</option>
                                                <option value="1">Green</option>
                                                <option value="2">Blue</option>
                                                <option value="3">Red</option>
                                            </select>
                                            <select class="custom-select ml-1">
                                                <option selected>Size</option>
                                                <option value="1">41</option>
                                                <option value="2">42</option>
                                                <option value="3">43</option>
                                            </select>
                                        </div> */}
                                        <div class="buy d-flex justify-content-between align-items-center">
                                            <div class="price text-success"><h5 class="mt-4">
                                                <Link to={`/product-detailed/${item.id}`} className='text-dark' >View Detail</Link>
                                                </h5></div>
                                            <div class="price text-success"><h5 class="mt-4">${item.price}</h5></div>
                                            {/* <a href="#" class="btn btn-success mt-3"> Add to Cart</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    )
}

export default Products