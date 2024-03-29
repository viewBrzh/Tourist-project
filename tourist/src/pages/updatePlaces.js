import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../App.css";
import Main from "../layouts/main";

function UpdatePlace() {
  const [place, setPlace] = useState({
    Id: '',
    Name: '',
    Image: '',
    Description: '',
    Latitude: '',
    Longtitude: '',
    Closetime: '',
    Opentime: '',
    Slideimg: '',
    Day: ''
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchPlace = async () => {
      const response = await fetch(`http://localhost:8080/places/get-place/${id}`);
      const data = await response.json();
      setPlace(data[0]);
      console.log(data);
      console.log(place);
    };

    fetchPlace();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlace(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/places/edit-place/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
      });
      if (response.ok) {
        alert('Place updated successfully');
        console.log('Place updated successfully');
        // Redirect or show a success message
      } else {
        console.error('Failed to update place');
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error updating place:', error);
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
                  <h1>Editing <span id="js-rotating">{place.Name.length > 25 ? `${place.Name.slice(0, 25)}...` : place.Name}</span></h1>
                  <p>
                    <Link to={'/#header'} style={{ color: "rgb(20, 191, 152)", textDecoration: "none" }}>
                      Home
                    </Link>
                    <span style={{ color: "white" }}> / Edit</span>
                  </p>
                </div>
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div> {/* end of header-content */}
      </header> {/* end of header */}

      <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
        <form className="form" onSubmit={handleSubmit}>
          <h2 className='title'>Enter new data</h2>
          <label>
            <input required placeholder="" type="text" className="input" name="Name" value={place.Name} onChange={handleChange} />
            <span>Name</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" name="Image" value={place.Image} onChange={handleChange} />
            <span>Image</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" name="Description" value={place.Description} onChange={handleChange} />
            <span>Description</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" name="Latitude" value={place.Latitude} onChange={handleChange} />
            <span>Latitude</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" name="Longtitude" value={place.Longtitude} onChange={handleChange} />
            <span>Longitude</span>
          </label>
          <div className="flex">
            <label>
              <input required placeholder="" type="text" className="input" name="Closetime" value={place.Closetime} onChange={handleChange} />
              <span>Close Time</span>
            </label>
            <label>
              <input required placeholder="" type="text" className="input" name="Opentime" value={place.Opentime} onChange={handleChange} />
              <span>Open Time</span>
            </label>
          </div>
          <label>
            <input required placeholder="" type="text" className="input" name="Slideimg" value={place.Slideimg} onChange={handleChange} />
            <span>Slide Image</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" name="Slideimg" value={place.Day} onChange={handleChange} />
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

export default UpdatePlace;
