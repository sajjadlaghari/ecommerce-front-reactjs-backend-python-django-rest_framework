import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        
            <header class="header trans_300">

                <div class="top_nav">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="top_nav_left">free shipping on all u.s orders over $50</div>
                            </div>
                            <div class="col-md-6 text-right">
                                <div class="top_nav_right">
                                    <ul class="top_nav_menu">

                                  

                                        <li class="currency">
                                            <Link to="#">
                                                usd
                                                <i class="fa fa-angle-down"></i>
                                            </Link>
                                            <ul class="currency_selection">
                                                <li><Link to="#">cad</Link></li>
                                                <li><Link to="#">aud</Link></li>
                                                <li><Link to="#">eur</Link></li>
                                                <li><Link to="#">gbp</Link></li>
                                            </ul>
                                        </li>
                                        <li class="language">
                                            <Link to="#">
                                                English
                                                <i class="fa fa-angle-down"></i>
                                            </Link>
                                            <ul class="language_selection">
                                                <li><Link to="#">French</Link></li>
                                                <li><Link to="#">Italian</Link></li>
                                                <li><Link to="#">German</Link></li>
                                                <li><Link to="#">Spanish</Link></li>
                                            </ul>
                                        </li>
                                        <li class="account">
                                            <Link to="#">
                                                My Account
                                                <i class="fa fa-angle-down"></i>
                                            </Link>
                                            <ul class="account_selection">
                                                <li><Link to="#"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</Link></li>
                                                <li><Link to="#"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

             

                <div class="main_nav_container">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-right">
                                <div class="logo_container">
                                    <Link to="/">colo<span>shop</span></Link>
                                </div>
                                <nav class="navbar">
                                    <ul class="navbar_menu">
                                        <li><Link to="/">home</Link></li>
                                        <li><Link to="#">shop</Link></li>
                                        <li><Link to="#">promotion</Link></li>
                                        <li><Link to="#">pages</Link></li>
                                        <li><Link to="#">blog</Link></li>
                                        <li><Link to="#">contact</Link></li>
                                    </ul>
                                    <ul class="navbar_user">
                                        <li><Link to="#"><i class="fa fa-search" aria-hidden="true"></i></Link></li>
                                        <li><Link to="#"><i class="fa fa-user" aria-hidden="true"></i></Link></li>
                                        <li class="checkout">
                                            <Link to="#">
                                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                                <span id="checkout_items" class="checkout_items">2</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div class="hamburger_container">
                                        <i class="fa fa-bars" aria-hidden="true"></i>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

        </>
    )
}

export default Header