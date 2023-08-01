import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

export default function BannerSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        fetchSliderData();
    }, []);

    const fetchSliderData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/sliders/'); // Replace '/api/sliders' with your actual API endpoint URL
            if (!response.ok) {
                throw new Error('Failed to fetch Slider data');
            }
            const data = await response.json();
            setSliders(data.data);
            console.log(data.data)
        } catch (error) {
            console.error(error);
        }
    };



    return (

     

        <Slider {...settings}>
            {sliders.map(item => {
                const modifiedImageUrl = item.image.replace('/media/', '/'); // Remove the first occurrence of /media/

                return (
                    <div className="" >
                    <div key={item.id}  style={{ backgroundImage: `url(http://localhost:8000${modifiedImageUrl})`,backgroundSize:'cover' ,  marginTop: '100px'}}>
                        <div className="main_slider">
                            <div className="container fill_height">
                                <div className="row align-items-center fill_height">
                                    <div className="col">
                                        <div className="main_slider_content">
                                            {/* <h6>{item.title}</h6> */}
                                            {/* <h1>{item.description} {modifiedImageUrl}</h1> */}
                                            {/* <div className="red_button shop_now_button">
                                                <a href="#">shop now</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                );
            })}
        </Slider>




    );
}
