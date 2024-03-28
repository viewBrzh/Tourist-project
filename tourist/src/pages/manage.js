import React, { useState, useEffect } from "react";
import Main from "../layouts/main";
import { Link } from "react-router-dom";

function Manage() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/places/get-all")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                setPlaces(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                // Handle error (e.g., show error message to user)
            });
    }, []);

    return (
        <Main>
            {/* Header */}
            <header className="header-hero">
                <div className="header-hero-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-container">
                                    <h1>Contact <span id="js-rotating">Us</span></h1>
                                    <p>
                                        <Link to={'/#header'} style={{ color: "rgb(20, 191, 152)", textDecoration: "none" }}>
                                            Home
                                        </Link>
                                        <span style={{ color: "white" }}> / manage</span>
                                    </p>
                                </div>
                            </div> {/* end of col */}
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </div> {/* end of header-content */}
            </header> {/* end of header */}
            {/* end of header */}
            <br></br>
            <div className="container">
                <div className="row" style={{ padding: "25px" }}>
                    {places.map((place) => (
                        <div className="col-lg-4" key={place.Id}>
                            <div className="card" style={{ padding: "10px" }}>
                                <img src={place.Image} className="card-img-top" alt="place" style={{ height: "200px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{place.Name.length > 25 ? `${place.Name.slice(0, 25)}...` : place.Name}</h5>
                                    <p className="card-text">{place.Description.length > 90 ? `${place.Description.slice(0, 90)}...` : place.Description}</p>
                                    <Link to={`/places/${place.Id}`} className="btn" style={{ textDecoration: "none", backgroundColor: "#14bf98", color: "white"}}>Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Main>
    );
}

export default Manage;
