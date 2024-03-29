import React, { useState, useRef, useEffect } from "react";
import Main from "../layouts/main";
import { Link } from "react-router-dom";

function Manage() {
    const [isActive, setIsActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchWrapperRef = useRef(null);
    const [places, setPlaces] = useState([]);


    const toggleSearch = () => {
        setIsActive((prevState) => !prevState);
    };

    const handleInputChange = (evt) => {
        setSearchQuery(evt.target.value);
        // Implement your search logic here
    };

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

    // Inside the component
    const filteredPlaces = Array.isArray(places) ? places.filter(place =>
        place.Name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    const handleClickOutside = (evt) => {
        if (searchWrapperRef.current && !searchWrapperRef.current.contains(evt.target)) {
            setIsActive(false);
        }
    };

    const handleDelete = (id, name) => {
        return async () => {
            const isConfirmed = window.confirm(`Are you sure you want to delete ${name}?`);
            if (isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:8080/places/delete-place/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.ok) {
                        const updatedPlaces = places.filter(place => place.Id !== id);
                        setPlaces(updatedPlaces);
                        alert('Place deleted successfully');
                        // Refresh the places list or update state
                    } else {
                        console.error('Failed to delete place');
                        // Handle error, show error message, etc.
                    }
                } catch (error) {
                    console.error('Error deleting place:', error);
                    // Handle error, show error message, etc.
                }
            }
        };
    };


    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
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
                                    <h1>Manage <span id="js-rotating">Places</span></h1>
                                    <p>
                                        <Link to={'/#header'} style={{ color: "rgb(20, 191, 152)", textDecoration: "none" }}>
                                            Home
                                        </Link>
                                        <span style={{ color: "white" }}> / manage</span>
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', color: 'red', padding: '10px', justifyContent: 'center' }}>
                                        <span className="material-symbols-outlined" style={{ marginRight: '5px' }}>warning</span>
                                        <span>ADMIN ONLY</span>
                                    </div>
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
                    {filteredPlaces.map((place) => (
                        
                        <div className="col-lg-4" key={place.Id}>
                            <Link to={`/detail/${place.Id}`} style={{ textDecoration: "none" }}>
                            <div className="card" style={{ padding: "10px" }}>
                                <img src={place.Image} className="card-img-top" alt="place" style={{ height: "200px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{place.Name.length > 25 ? `${place.Name.slice(0, 25)}...` : place.Name}</h5>
                                    <p className="card-text">{place.Description.length > 90 ? `${place.Description.slice(0, 90)}...` : place.Description}</p>
                                    <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Link to={`/updateplace/${place.Id}`} className="btn" style={{ textDecoration: "none", backgroundColor: "#14bf98", color: "white" }}>Edit</Link>
                                        <Link><a className="btn" style={{ color: 'red' }} onClick={handleDelete(place.Id, place.Name)}>delete</a></Link>                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        
                    ))}
                </div>
            </div>

            <Link to={'/insert'}>
                <a className="circle-button">
                    +
                </a>
            </Link>

            <a >
                <div ref={searchWrapperRef} className={`search-wrapper ${isActive ? "active" : ""}`}>
                    <div className="input-holder">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Type to search"
                            value={searchQuery}
                            onChange={handleInputChange}
                            autoFocus={isActive}
                        />
                        <button className="search-icon" onClick={toggleSearch}>
                            <span></span>
                        </button>
                    </div>
                    <span className="close" onClick={toggleSearch}></span>
                </div>
            </a>
        </Main>
    );
}

export default Manage;
