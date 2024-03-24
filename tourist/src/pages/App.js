import '../App.css';
import Main from '../layouts/main';
import React, { useState, useRef, useEffect } from "react";

function App() {

  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchWrapperRef = useRef(null);

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


      {/* Description */}
      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              {/* Card */}
              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon"></span>
                  <i className="fas fa-binoculars fa-stack-1x"></i>
                </span>
                <div className="card-body">
                  <h4 className="card-title">Environment Analysis</h4>
                  <p>The starting point of any success story is knowing your current position in the business environment</p>
                </div>
              </div>
              {/* end of card */}

              {/* Card */}
              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon"></span>
                  <i className="fas fa-list-alt fa-stack-1x"></i>
                </span>
                <div className="card-body">
                  <h4 className="card-title">Development Planning</h4>
                  <p>After completing the environmental analysis the next stage is to design and  plan your development strategy</p>
                </div>
              </div>
              {/* end of card */}

              {/* Card */}
              <div className="card">
                <span className="fa-stack">
                  <span className="hexagon"></span>
                  <i className="fas fa-chart-pie fa-stack-1x"></i>
                </span>
                <div className="card-body">
                  <h4 className="card-title">Execution & Evaluation</h4>
                  <p>In this phase you will focus on executing the actions plan and evaluating the results after each marketing campaign</p>
                </div>
              </div>
              {/* end of card */}

            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div> {/* end of cards-1 */}
      {/* end of description */}

      {/* Testimonials */}
      <div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Read Our Customer Testimonials</h2>
              <p className="p-heading">Our clients are our partners and we can not imagine a better future for our company without helping them reach their objectives</p>
            </div> {/* end of col */}
          </div> {/* end of row */}
          <div className="row">
            <div className="col-lg-12">

              {/* Card Slider */}
              <div className="slider-container">
                <div className="swiper-container card-slider">
                  <div className="swiper-wrapper">

                    {/* Slide */}
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-1.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">The guys from Aria helped with getting my business off the ground and turning into a profitable company.</div>
                          <div className="testimonial-author">Jude Thorn - Founder</div>
                        </div>
                      </div>
                    </div> {/* end of swiper-slide */}
                    {/* end of slide */}

                    {/* Slide */}
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-2.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">I purchased the Growth Accelerator service pack a few years ago and I renewed the contract each year. </div>
                          <div className="testimonial-author">Marsha Singer - Marketer</div>
                        </div>
                      </div>
                    </div> {/* end of swiper-slide */}
                    {/* end of slide */}

                    {/* Slide */}
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-3.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">Aria's CEO personally attends client meetings and gives his feedback on business growth strategies.</div>
                          <div className="testimonial-author">Roy Smith - Developer</div>
                        </div>
                      </div>
                    </div> {/* end of swiper-slide */}
                    {/* end of slide */}

                    {/* Slide */}
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-4.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">At the beginning I thought the prices are a little high for what they offer but they over deliver each and every time.</div>
                          <div className="testimonial-author">Ronald Spice - Owner</div>
                        </div>
                      </div>
                    </div> {/* end of swiper-slide */}
                    {/* end of slide */}

                    {/* Slide */}
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-5.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">I recommend Aria to every business owner or growth leader that wants to take his company to the next level.</div>
                          <div className="testimonial-author">Lindsay Rune - Manager</div>
                        </div>
                      </div>
                    </div> {/* end of swiper-slide */}
                    {/* end of slide */}

                    {/* Slide */}
                    <div className="swiper-slide">
                      <div className="card">
                        <img className="card-image" src="images/testimonial-6.jpg" alt="alternative" />
                        <div className="card-body">
                          <div className="testimonial-text">My goals for using Aria's services seemed high when I first set them but they've met them with no problems.</div>
                          <div className="testimonial-author">Ann Black - Consultant</div>
                        </div>
                      </div>
                    </div> {/* end of swiper-slide */}
                    {/* end of slide */}

                  </div> {/* end of swiper-wrapper */}

                  {/* Add Arrows */}
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                  {/* end of add arrows */}

                </div> {/* end of swiper-container */}
              </div> {/* end of sliedr-container */}
              {/* end of card slider */}

            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div> {/* end of slider */}
      {/* end of testimonials */}
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
    </Main>
  );
}

export default App;
