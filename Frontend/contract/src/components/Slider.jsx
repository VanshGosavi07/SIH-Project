import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/1image.jpeg';
import image2 from '../assets/2image.jpg';
import image3 from '../assets/3image.jpeg';
import image4 from '../assets/4image.jpeg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true, // Add fade effect between slides
    cssEase: 'linear', // Smooth transition effect
  };

  const images = [
    { src: image1, alt: 'Slide 1' },
    { src: image2, alt: 'Slide 2' },
    { src: image3, alt: 'Slide 3' },
    { src: image4, alt: 'Slide 4' }
  ];

  return (
    <div className="w-full mx-auto py-8 px-4 sm:px-14">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105" // Scale effect on hover
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
