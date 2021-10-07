import React from "react";
import './mobile.css';

function Mobile ({isOpen, setIsOpen}){
    return <div className="mobile">
        <div>
            <div className="close-icon">
                <i className="fi-rr-cross-circle"/>
            </div>
        </div>
    </div>;
}

export default Mobile;