import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../Images/logo/logo2.png'

function Header() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div>
			<Navbar color="light" light expand="md">
                <header className="top">
                    <div className="header-area two header-sticky">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-xs-6">
                                    <div className="logo">
                                        <a href="index.html"><img src={logo} alt="eduhome" /></a>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-9 col-xs-6">
                                    <div className="content-wrapper text-right">
                                        <div className="main-menu">
                                            <nav>
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
			</Navbar>
		</div >
	);
}

export default Header;
