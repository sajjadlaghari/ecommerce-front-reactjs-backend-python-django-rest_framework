import React from "react";
import Slider from "react-slick";

export default function BannerSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <Slider {...settings}>
            <div>
                <div className="main_slider" style={{ backgroundImage: `url("/images/slide-02.jpg")` }}>
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content">
                                    <h6>Spring / Summer Collection 2017</h6>
                                    <h1>Get up to 30% Off New Arrivals</h1>
                                    <div className="red_button shop_now_button">
                                        <a href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>

                <div className="main_slider" style={{ backgroundImage: 'url(/images/slide-03.jpg)' }}>
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content">
                                    <h6>Spring / Summer Collection 2017</h6>
                                    <h1>Get up to 30% Off New Arrivals</h1>
                                    <div className="red_button shop_now_button">
                                        <a href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>

                <div className="main_slider" style={{ backgroundImage: 'url(/images/slide-05.jpg)' }}>
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content">
                                    <h6>Spring / Summer Collection 2017</h6>
                                    <h1>Get up to 30% Off New Arrivals</h1>
                                    <div className="red_button shop_now_button">
                                        <a href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            <div>

                <div className="main_slider" style={{ backgroundImage: 'url(/images/slide-06.jpg)' }}>
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content">
                                    <h6>Spring / Summer Collection 2017</h6>
                                    <h1>Get up to 30% Off New Arrivals</h1>
                                    <div className="red_button shop_now_button">
                                        <a href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Slider>

    );
}
