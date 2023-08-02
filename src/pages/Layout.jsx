import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../css/index.css";
import ScrollToTopButton from "./ScrollToTopButton";
import { BsFillMoonFill, BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Layout() {

    const location = useLocation();
    const storedDarkMode = localStorage.getItem('darkMode');

    const [theme, setTheme] = useState(storedDarkMode === 'true');

    function handleTheme() {
        const newDarkMode = !theme;
        setTheme(newDarkMode);
        //Save the choice mode to localstorage
        localStorage.setItem('darkMode', newDarkMode);
    }


    return (
        <div className={` ${theme ? 'bg-secondary text-white' : 'bg-light-subtle'}`}>
            <div id="body" className="container-fluid">

                <Helmet>
                    {
                        location.pathname === '/' ?
                            (
                                <title>Imman | Home</title>
                            ) : ""
                    }
                    {
                        location.pathname === '/contact' ?
                            (
                                <title>Imman | Contact</title>
                            ) : ""
                    }
                    {
                        location.pathname === '/about' ?
                            (
                                <title>Imman | About</title>
                            ) : ""
                    }
                    {
                        location.pathname === '/project' ?
                            (
                                <title>Imman | Project</title>
                            ) : ""
                    }
                    {/* {
                        location.pathname === '/experience' ?
                            (
                                <title>Imman | Experience</title>
                            ) : ""
                    } */}
                </Helmet>

                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to={'/'} className="navbar-brand " ><span className={`fw-bold fs-4 ${theme ? 'text-white' : 'text-secondary'}`}>Im</span><span className="fw-bold fs-4">man.</span>
                            <p className={`subtitle ${theme ? 'text-light' : 'text-muted'}`}>Web Developer</p></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav me-5 p-1 mx-auto">
                                <li className="nav-item">
                                    <Link to="/about" className={` nav-link ${(location.pathname === `/about`) ? `fw-bold active` : ``} ${theme ? 'text-light' : 'text-muted'}`}>ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/project" className={` nav-link ${(location.pathname === `/project`) ? `fw-bold active` : ``} ${theme ? 'text-light' : 'text-muted'}`}>PROJECT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className={` nav-link ${(location.pathname === `/contact`) ? `fw-bold active` : ``} ${theme ? 'text-light' : 'text-muted'}`}>CONTACT</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/experience" className={` nav-link ${(location.pathname === `/experience`) ? `fw-bold  active` : ``} ${theme ? 'text-light' : 'text-muted'}`}>EXPERIENCE</Link>
                                </li> */}
                            </ul>
                            <ul className="nav_icons ms-auto">
                                <li className="nav-item-icons">
                                    <a href="https://www.facebook.com/immancaneca" className={`fs-4 ${theme ? 'text-white' : 'text-dark'}`}><FaFacebook /></a>
                                </li>
                                <li className="nav-item-icons">
                                    <a href="https://www.linkedin.com/in/immancaneca17/" className={`fs-4 ${theme ? 'text-white' : 'text-dark'}`}><FaLinkedin /></a>
                                </li>
                                <li className="nav-item-icons">
                                    <a href="https://github.com/canecaimmanuel" className={`fs-4 ${theme ? 'text-white' : 'text-dark'}`}><FaGithub /></a>
                                </li>
                                <li className="nav-item-icons btn-mode">
                                    <div onClick={handleTheme} >{theme ? '🔆' : <BsFillMoonFill />}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <main className="container">
                    <div className={`${theme ? '' : 'bg-light'}`}>
                        <Outlet />
                    </div>
                </main>

                <footer className="row py-5">
                    <div className="p-1 m-1 text-center">
                        <h4>Imman. Portfolio</h4>
                        <p>Bulacan, Philippines</p>
                        <br />
                        &copy; || 2023, All Rights Reserved.
                    </div>
                </footer>
                <a href="https://wa.me/639271426541"
                    class="float" target="_blank">
                    <BsWhatsapp />
                </a>
                <ScrollToTopButton />
            </div>
        </div>
    )
}

export default Layout