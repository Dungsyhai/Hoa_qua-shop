import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <main>
        <nav className="nav">
            <div className="nav-text">
                <img src="/images/logo5.png" alt="logo"/>
                <ul className="nav-menu menu-main">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Giới thiệu</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
                <form action="" class="search-box-container">
                    <input type="search" id="search-box" placeholder="Tìm kiếm....."/>
                    <button>Tìm kiếm</button>
                </form>
                <Link to="/cart">
                    <div className="basket">
                        <AiOutlineShoppingCart className="cart-icon" />
                        <span>{totalQuantities}</span>
                    </div>
                </Link>
            </div>
        </nav>
        </main>
    )
}

export default Nav
