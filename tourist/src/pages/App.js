import '../App.css';
import Main from '../layouts/main';
import React, { useState, useRef, useEffect } from "react";
import ReactCardSlider from '../components/ReactCardSlider';
import { Link } from "react-router-dom";

function App() {

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

  const handleClickOutside = (evt) => {
    if (searchWrapperRef.current && !searchWrapperRef.current.contains(evt.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    fetch("http://localhost:8080/places/get-all")
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setPlaces(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error (e.g., show error message to user)
      });
  }, []);
  
  // Inside the component
  const filteredPlaces = Array.isArray(places) ? places.filter(place =>
    place.Name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <Main>
      {/* Header */}
      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>แนะนำสถานที่ท่องเที่ยว <span id="js-rotating">จังหวัดเลย</span></h1>
                  <p className="p-heading p-large">จังหวัดเลยเป็นจังหวัดที่มีธรรมชาติสวยงามและมีสถานที่ท่องเที่ยวที่น่าสนใจมากมาย เช่น น้ำตกที่สวยงาม เช่น น้ำตกห้วยเล็ก และน้ำตกถ้ำเสือ นอกจากนี้ยังมีศิลปะและวัฒนธรรมที่น่าสนใจ เช่น วัดพระธาตุศรีสุนทร และชุมชนบ้านโบสถ์เลยที่มีบ้านเรือนแบบดั้งเดิมที่สวยงาม</p>
                  <a className="btn-solid-lg page-scroll" href="#intro">ดูเพิ่มเติม</a>
                </div>
              </div> {/* end of col */}
            </div> {/* end of row */}
          </div> {/* end of container */}
        </div> {/* end of header-content */}
      </header> {/* end of header */}
      {/* end of header */}

      {/* Intro */}
      <div id="intro" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="text-container">
                <div className="section-title">INTRO</div>
                <h2>เกี่ยวกับเว็ปไซต์ของเรา</h2>
                <p>เว็บไซต์นี้เป็นเว็บไซต์ท่องเที่ยวที่แนะนำสถานที่ท่องเที่ยวในจังหวัดเลย โดยเน้นการแสดงข้อมูลสถานที่ท่องเที่ยวที่น่าสนใจในจังหวัดเลย ในเว็บไซต์จะมีรายละเอียดเกี่ยวกับสถานที่ท่องเที่ยวต่าง ๆ เช่น ข้อมูลทางประวัติศาสตร์ สถานที่ท่องเที่ยวที่น่าสนใจ และกิจกรรมท่องเที่ยวที่สามารถทำได้ในพื้นที่นั้น นอกจากนี้ยังมีภาพถ่ายและข้อมูลอื่นๆ เกี่ยวกับสถานที่ท่องเที่ยวในจังหวัดเลยด้วย</p>
              </div> {/* end of text-container */}
            </div> {/* end of col */}
            <div className="col-lg-7">
              <div className="image-container">
                <img className="img-fluid" src="https://i.ytimg.com/vi/QS6bgc8wf74/maxresdefault.jpg" alt="alternative" />
              </div> {/* end of image-container */}
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div> {/* end of basic-1 */}
      {/* end of intro */}

      <h1 className='container' style={{ display: 'flex', justifyContent: 'center' }}>สถานที่ท่องเที่ยวยอดนิยม</h1>

      <div className='container' id='places' style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactCardSlider slides={filteredPlaces.map(place => ({
          id: place.Id,
          image: place.Image,
          title: place.Name.length > 25 ? `${place.Name.slice(0, 25)}...` : place.Name,
          description: place.Description.length > 90 ? `${place.Description.slice(0, 90)}...` : place.Description
        }))} />
      </div>

      <br></br>

      {/* end of testimonials */}
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

    </Main >
  );
}

export default App;
