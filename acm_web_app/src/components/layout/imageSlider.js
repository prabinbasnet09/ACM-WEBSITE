import React from 'react';
import { useState } from 'react';

export default function ImageSlider(){
    
    const slides = [
        { url: require("../../images/events/1.jpg"), title: "1"},
        { url: require("../../images/events/2.jpg"), title: "2"},
        { url: require("../../images/events/3.jpg"), title: "4"},
        { url: require("../../images/events/4.jpg"), title: "3"},
        { url: require("../../images/events/5.jpg"), title: "5"},
        { url: require("../../images/events/6.jpg"), title: "6"},
        { url: require("../../images/events/7.jpg"), title: "7"},
        { url: require("../../images/events/8.jpg"), title: "8"},
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const sliderStyles = {
        height: "100%",
        position: "relative",
    };
    
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };
    
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };
      
      const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };
    
      const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
      };
      
      const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
      };
    
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

    return (
        <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
    )
}