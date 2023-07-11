import React from "react";
import "./Profile.scss"
import newRequest from "../../utils/newRequest.js";

const Profile = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="profile-picture">
                        <img src={currentUser.img || "/img/noavatar.jpg"} alt="Profile Picture" />
                    </div>
                    <h2 className="name">{currentUser?.username}</h2>
                    <h3 className="description">
                        {currentUser.isSeller && (
                            <>
                                <a>
                                    Seller
                                </a>
                            </>
                        )}
                    </h3>
                    <h3 className="username">{currentUser?.email}</h3>
                    <p className="tagline">{currentUser?.country}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;