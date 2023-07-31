import React from "react";
import Header from "./components/Header";
import Slider from "react-slick";
import BannerSlider from "./components/Slider";
import Products from "./components/products";

const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div class="super_container">
          

                <div class="fs_menu_overlay"></div>
                <div class="hamburger_menu">
                    <div class="hamburger_close"><i class="fa fa-times" aria-hidden="true"></i></div>
                    <div class="hamburger_menu_content text-right">
                        <ul class="menu_top_nav">
                            <li class="menu_item has-children">
                                <a href="#">
                                    usd
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="menu_selection">
                                    <li><a href="#">cad</a></li>
                                    <li><a href="#">aud</a></li>
                                    <li><a href="#">eur</a></li>
                                    <li><a href="#">gbp</a></li>
                                </ul>
                            </li>
                            <li class="menu_item has-children">
                                <a href="#">
                                    English
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="menu_selection">
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">Italian</a></li>
                                    <li><a href="#">German</a></li>
                                    <li><a href="#">Spanish</a></li>
                                </ul>
                            </li>
                            <li class="menu_item has-children">
                                <a href="#">
                                    My Account
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="menu_selection">
                                    <li><a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                                    <li><a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                                </ul>
                            </li>
                            <li class="menu_item"><a href="#">home</a></li>
                            <li class="menu_item"><a href="#">shop</a></li>
                            <li class="menu_item"><a href="#">promotion</a></li>
                            <li class="menu_item"><a href="#">pages</a></li>
                            <li class="menu_item"><a href="#">blog</a></li>
                            <li class="menu_item"><a href="#">contact</a></li>
                        </ul>
                    </div>
                </div>

                <BannerSlider />

                <div class="banner">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="banner_item align-items-center" style={{ backgroundImage: 'url(images/banner_1.jpg)' }}>
                                    <div class="banner_category">
                                        <a href="/categories">women's</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="banner_item align-items-center" style={{ backgroundImage: 'url(images/banner_2.jpg)' }}>
                                    <div class="banner_category">
                                        <a href="/categories">accessories's</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="banner_item align-items-center" style={{ backgroundImage: 'url(images/banner_3.jpg)' }}>
                                    <div class="banner_category">
                                        <a href="/categories">men's</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div class="deal_ofthe_week">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="deal_ofthe_week_img">
                                    <img src="images/deal_ofthe_week.png" alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6 text-right deal_ofthe_week_col">
                                <div class="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                                    <div class="section_title">
                                        <h2>Deal Of The Week</h2>
                                    </div>
                                    <ul class="timer">
                                        <li class="d-inline-flex flex-column justify-content-center align-items-center">
                                            <div id="day" class="timer_num">03</div>
                                            <div class="timer_unit">Day</div>
                                        </li>
                                        <li class="d-inline-flex flex-column justify-content-center align-items-center">
                                            <div id="hour" class="timer_num">15</div>
                                            <div class="timer_unit">Hours</div>
                                        </li>
                                        <li class="d-inline-flex flex-column justify-content-center align-items-center">
                                            <div id="minute" class="timer_num">45</div>
                                            <div class="timer_unit">Mins</div>
                                        </li>
                                        <li class="d-inline-flex flex-column justify-content-center align-items-center">
                                            <div id="second" class="timer_num">23</div>
                                            <div class="timer_unit">Sec</div>
                                        </li>
                                    </ul>
                                    <div class="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Products />



                <div class="benefit">
                    <div class="container">
                        <div class="row benefit_row">
                            <div class="col-lg-3 benefit_col">
                                <div class="benefit_item d-flex flex-row align-items-center">
                                    <div class="benefit_icon"><i class="fa fa-truck" aria-hidden="true"></i></div>
                                    <div class="benefit_content">
                                        <h6>free shipping</h6>
                                        <p>Suffered Alteration in Some Form</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 benefit_col">
                                <div class="benefit_item d-flex flex-row align-items-center">
                                    <div class="benefit_icon"><i class="fa fa-money" aria-hidden="true"></i></div>
                                    <div class="benefit_content">
                                        <h6>cach on delivery</h6>
                                        <p>The Internet Tend To Repeat</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 benefit_col">
                                <div class="benefit_item d-flex flex-row align-items-center">
                                    <div class="benefit_icon"><i class="fa fa-undo" aria-hidden="true"></i></div>
                                    <div class="benefit_content">
                                        <h6>45 days return</h6>
                                        <p>Making it Look Like Readable</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 benefit_col">
                                <div class="benefit_item d-flex flex-row align-items-center">
                                    <div class="benefit_icon"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                                    <div class="benefit_content">
                                        <h6>opening all week</h6>
                                        <p>8AM - 09PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="newsletter">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                                    <h4>Newsletter</h4>
                                    <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <form action="post">
                                    <div class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                                        <input id="newsletter_email" type="email" placeholder="Your email" required="required" data-error="Valid email is required." />
                                        <button id="newsletter_submit" type="submit" class="newsletter_submit_btn trans_300" value="Submit">subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

        

            </div>

        </>
    )
}

export default Home