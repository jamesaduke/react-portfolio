import React, {useState} from "react";
import './header.css';
import Web from "./web";
import Mobile from "./mobile";


function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">James Aduke</div>
            <div className="menu">
                <div className="WebMenu"><Web /></div>
                <div className="mobileMenu">
                    <div onClick={() => {
                        setIsOpen(!isOpen);
                    }}>
                        <i class="fi fi-rr-menu-burger menu-icon"/>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    );
}

export default Header;