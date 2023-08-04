import React from "react";
import "./Profile.css";
import { Profile } from "../constants/data";

const Profile = () => {
    return(
        <div className="profile section-p" id = "profile">
         <dive className="container">
            <div className="profile-content">
                <div className="section-title">
                    <h3 className="text-brown">why hire me?</h3>
                    <p className="text"></p>
                </div>

                <div className="profile-item text-center" key = {index}>
                    <div className="profile-item-img">
                    <img src = {Profile.image} className = "mx-auto" alt = "" />
                    </div>
                    <div className="profile-item-text">
                        <h4 className="fs-22 fw-5 op-08">{Profile.title}</h4>
                        <p className="text ma-auto">{Profile.paragraph}</p>
                    </div>
                </div>
            </div>
         </dive>
        </div>
    )
}
export default Profile;