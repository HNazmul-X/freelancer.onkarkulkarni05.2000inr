import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {

    const [isNavbarshow, setIsNavbarshow] = useState(false)




    return (
        <>
            <nav className="hnazmul-navbar">
                <div className="hnazmul-navbar-container">
                    <div className="hnazmul-nav-brand">
                        <h4 className="fst-italic">MITNESS</h4>
                    </div>
                    <div onClick={() => setIsNavbarshow(!isNavbarshow)} className="hnazmul-nav-toggle-btn">
                        <button>
                            <InlineIcon height="50px" className="toggler-btn" icon="ei:navicon" />
                        </button>
                    </div>

                    <div className={`${isNavbarshow ? "navbar-show " : ""} hnazmul-navbar-content `}>
                        <div className="hnazmul-navbar-content-wrapper">
                            <ul className="navbar-list">
                                <li className="navbar-list-item">
                                    <NavHashLink defaultChecked to="/#header" activeClassName="active" className="navbar-list-link">
                                        소개
                                    </NavHashLink>
                                </li>
                                <li className="navbar-list-item">
                                    <NavHashLink to="/#partner" activeClassName="active" className="navbar-list-link">
                                        파트너
                                    </NavHashLink>
                                </li>
                                <li className="navbar-list-item">
                                    <NavHashLink to="/#contents" activeClassName="active" className="navbar-list-link">
                                        콘텐츠
                                    </NavHashLink>
                                </li>
                                <li className="navbar-list-item">
                                    <NavHashLink to="/#FAQ" activeClassName="active" className="navbar-list-link">
                                        문의
                                    </NavHashLink>
                                </li>
                            </ul>
                            <button onClick={() => setIsNavbarshow(!isNavbarshow)} className="navbar-closer-icon">
                                <InlineIcon height="50px" icon="clarity:times-circle-line" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hnazmul-navbar-spacer"></div>
        </>
    );
};

export default Navbar;
