import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const ReactCardSlider = (props) => {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        sliderRef.current.scrollLeft -= 500;
    };

    const slideRight = () => {
        sliderRef.current.scrollLeft += 500;
    };

    return (
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
            <div id="slider" ref={sliderRef}>
                {props.slides.map((slide, index) => (
                    <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                        <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                        <p className="slider-card-title">{slide.title}</p>
                        <p className="slider-card-description">{slide.description}</p>
                    </div>
                ))}
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
        </div>
    );

}
export default ReactCardSlider;