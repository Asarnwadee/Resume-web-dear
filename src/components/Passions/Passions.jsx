import React from "react";
import { Passions } from "../constants/data";
import "./Passions.css";

const Passions = () => {
    return(
        <div className="passions section-p bg-white " id ="passions">
            <div className="container">
                <div className="passions-content">
                    <div className="section-title">
                        <h3 className="text-brown">Additional <span className="text-dark">Passions</span></h3>
                        <p className="text"></p>
                    </div>
                    <div className='workprocess-list grid'>
                {
                    passions.map((passions, index) => {
                        return (
                            <div className='passions-item text-center' key = {index}>
                                <div className='passions-item-title flex'>
                                    <span className='text-brown fw-7'>0 {index + 1}</span>
                                    <h3 className='text-dark fw-5'>{passions.title}</h3>
                                </div>
                                <p className='text'>{passions.paragraph}</p>
                            </div>
                        )
                    })
                }
            </div>

                </div>
            </div>

        </div>
    )
}