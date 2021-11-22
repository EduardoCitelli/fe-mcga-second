import React from 'react';
import { BrowserRouter, Link, NavLink, Router } from "react-router-dom"
import "./nav.css"

function Nav() {
    return (
        <BrowserRouter>
            <nav className="nav-bar">
                <div className="container">
                    <Link to="/">
                        <div className="logo">
                            <NavLink to="/">
                                <img className="logo-image" src="/BMG-logo.webp" alt="logo" />
                            </NavLink>
                        </div>
                    </Link>

                    <div className="menu">
                        <ul className="menu-list">
                            <li className="menu-item">
                                <NavLink activeClassName="active" className="menu-link" to="/">
                                    Home
                                </NavLink>

                            </li>
                        </ul>

                    </div>

                </div>
            </nav>

        </BrowserRouter>
    );
}

export default Nav;