import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";
import Main from "../layouts/main";

function InsertPlace() {
  const [newPlace, setNewPlace] = useState({
    Name: "",
    Image: "",
    Description: "",
    Latitude: "",
    Longtitude: "",
    Closetime: "",
    Opentime: "",
    Slideimg: "",
    Day: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlace((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/places/add-place", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlace),
      });
      if (response.ok) {
        alert("Place added successfully");
        console.log("Place added successfully");
        // Redirect or show a success message
        navigate("/manage");
      } else {
        console.error("Failed to add place");
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error("Error adding place:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <Main>
      {/* Header */}
      <header className="header-hero">
        <div className="header-hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>
                    Add new <span id="js-rotating">Place</span>
                  </h1>
                  <p>
                    <Link
                      to={"/#header"}
                      style={{
                        color: "rgb(20, 191, 152)",
                        textDecoration: "none",
                      }}
                    >
                      Home
                    </Link>
                    <span style={{ color: "white" }}> / insert</span>
                  </p>
                </div>
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* end of header-content */}
      </header>{" "}
      {/* end of header */}
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center", padding: "50px" }}
      >
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="title">Enter new data</h2>
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              name="Name"
              onChange={handleChange}
            />
            <span>Name</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              name="Image"
              onChange={handleChange}
            />
            <span>Image</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              name="Description"
              onChange={handleChange}
            />
            <span>Description</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              name="Latitude"
              onChange={handleChange}
            />
            <span>Latitude</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              name="Longtitude"
              onChange={handleChange}
            />
            <span>Longitude</span>
          </label>
          <div className="flex">
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                name="Closetime"
                onChange={handleChange}
              />
              <span>Close Time</span>
            </label>
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                name="Opentime"
                onChange={handleChange}
              />
              <span>Open Time</span>
            </label>
          </div>
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              name="Slideimg"
              onChange={handleChange}
            />
            <span>Slide Image</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              name="Day"
              onChange={handleChange}
            />
            <span>Day Open</span>
          </label>

          <button className="submit" type="submit">
            <span className="top-key"></span>
            <span className="text">Submit</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </form>
      </div>
    </Main>
  );
}

export default InsertPlace;
