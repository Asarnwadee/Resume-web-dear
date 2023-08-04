import React from "react";
import "./Header.css";


const Header = () => (
    <div className='header flex flex-col' id="header">

        <div className='container flex'>
            <div className='header-content'>
                <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>
                    Full-Stack Software Developer</h2>
                <h1 className='text-white fw-6 header-title'>Hello I'm Asarnwadee W.
                <span className="'text-brown">a Web Developer</span>
                </h1>
                <div className="btn-groups flex">
                    <button type="button" className="btn-item bg-brown fw-4 ls-2"> Works  
                    </button>
                    <button type="button" className="btn-item bg-dark fw-4 ls-2"> Contact Me  
                    </button>
                </div>
            </div>
        </div>
    </div>
)

export default Header