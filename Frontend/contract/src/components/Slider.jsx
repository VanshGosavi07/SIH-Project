import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/1image.jpg';
import image2 from '../assets/2image.jpg';
import image3 from '../assets/3image.jpg';
import image4 from '../assets/4image.jpeg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: true,
    fade: true,
    cssEase: 'linear',
  };

  const images = [
    { src: image1, alt: 'Slide 1' },
    { src: image2, alt: 'Slide 2' },
    { src: image3, alt: 'Slide 3' },
    { src: image4, alt: 'Slide 4' }
  ];

  return (
    <div className="w-full mx-auto py-8 px-4 sm:px-14">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white border-4 border-gray-800" style={{ height: '650px' }}> {/* Set fixed height for the slider container */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center" style={{ height: '300px' }}> {/* Set fixed height for each slide */}
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover" // Ensures the image covers the container
                style={{ width: '100%', height: '100%' }} // Set fixed size for images
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;