import { Link, NavLink } from "react-router-dom"
import "./nav.css"

function Nav() {
    return (
        <nav className="nav-bar">
            <div className="container">
                <Link to="/">
                    <div className="logo">
                        <img className="logo-image" src="/BMG-logo.webp" alt="logo" />
                    </div>
                </Link>

                <div className="menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <NavLink exact activeClassName="active" className="menu-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink exact activeClassName="active" className="menu-link" to="/users">
                                Users
                            </NavLink>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>

    );
}

export default Nav;