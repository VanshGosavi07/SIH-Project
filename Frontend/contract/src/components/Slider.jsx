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
  };

  const images = [
    { src: image1, alt: 'Slide 1' },
    { src: image2, alt: 'Slide 2' },
    { src: image3, alt: 'Slide 3' },
    { src: image4, alt: 'Slide 4' }
  ];

  return (
    <div className="w-11/12 mx-auto py-8 px-4"> {/* Set to 80% width */}
      <div className="  rounded-lg overflow-hidden ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover"
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
