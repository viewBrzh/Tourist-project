import '../App.css';
import Main from '../layouts/main';
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function PlaceDetail() {
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

  const [currentImage, setCurrentImage] = useState('Image'); // Initial state is 'Image'

  // Use setTimeout to switch the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage === 'Image' ? 'Slideimg' : 'Image');
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentImage]);

  return (
    <Main>
      <header className="header-hero" >
        <div className="header-hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>{place.Name}</h1>
                  <p>
                    <Link to={'/#header'} style={{ color: "rgb(20, 191, 152)", textDecoration: "none" }}>
                      Home
                    </Link>
                    <span style={{ color: "white" }}> / infomations</span>
                  </p>
                </div>
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div> {/* end of header-content */}
      </header> {/* end of header */}

      <section className="place-details" style={{ padding: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={place[currentImage]} alt={place.Name} style={{height: '400px'}}/>
            </div>
            <div className="col-lg-6">
              <h2>Description</h2>
              <p>{place.Description}</p>
              <hr></hr>
              <h2>Opening Day</h2>
              <p>{place.Day}</p>
              <h2>Opening Hours</h2>
              <p>{place.Opentime} - {place.Closetime}</p>
              
            </div>
          </div> {/* end of row */}
          <hr></hr>
          <h2>Location</h2>
          <iframe src={`https://maps.google.com/maps?q=${place.Latitude},${place.Longtitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`} width="600" height="450" style={{ border: 0, width: '100%', borderRadius: 5 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div> {/* end of container */}
      </section> {/* end of place-details */}


    </Main>
  );
}

export default PlaceDetail;
