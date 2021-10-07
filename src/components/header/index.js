import React, {useState} from "react";
import './header.css';
import Web from "./web/index";
import Mobile from "./mobile/index";


function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">James Aduke</div>
            <div className="menu">
                <div className="web-menu"><Web /></div>
                <div className="mobileMenu">
                    <div onClick={() => {setIsOpen(!isOpen)}}>
                        <i className="fi fi-rr-menu-burger menu-icon"/>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    );
}

export default Header;