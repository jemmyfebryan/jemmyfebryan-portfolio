// Import necessary libraries and styles
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; // Import a custom CSS file for styling

// Your ImageSlider component
class PemodelanMatematika extends React.Component {
  render() {
    // Array of image URLs
    const images = [
      '/pemodelan/pemodelan_page-0001.jpg',
      '/pemodelan/pemodelan_page-0002.jpg',
      '/pemodelan/pemodelan_page-0003.jpg',
      '/pemodelan/pemodelan_page-0004.jpg',
      '/pemodelan/pemodelan_page-0005.jpg',
      '/pemodelan/pemodelan_page-0006.jpg',
      '/pemodelan/pemodelan_page-0007.jpg',
      '/pemodelan/pemodelan_page-0008.jpg',
      '/pemodelan/pemodelan_page-0009.jpg',
      '/pemodelan/pemodelan_page-0010.jpg',
      '/pemodelan/pemodelan_page-0011.jpg',
      '/pemodelan/pemodelan_page-0012.jpg',
      '/pemodelan/pemodelan_page-0013.jpg',
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,      // Enable center mode
        // centerPadding: '0',    // Set center padding to 0
    };

    return (
      <div className="image-slider-container"> 
        <h2>Image Viewer</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default PemodelanMatematika;
