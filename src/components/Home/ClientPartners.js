import React from 'react';
import './ClientPartnerGallery.css'; // Import CSS file for styling

const ClientPartners = () => {
  // Assuming you have an array of image URLs for your clients and partners
  const clientPartnerImages = [
    { imageUrl: 'clientsandpartners/bri.png', link: "https://www.bri.co.id/" },
    { imageUrl: 'clientsandpartners/ub.png', link: "https://ub.ac.id/" },
    { imageUrl: 'clientsandpartners/braincore.png', link: "https://braincore.id" },
    { imageUrl: 'clientsandpartners/lima.jpeg', link: "https://ligamahasiswa.com/" },
    { imageUrl: 'clientsandpartners/webkoo.webp', link: "https://webkoo.id/" },
    { imageUrl: 'clientsandpartners/rekruit.svg', link: null },
    { imageUrl: 'clientsandpartners/bimbelgracia.png', link: null },
    { imageUrl: 'clientsandpartners/bizzagi.png', link: "https://bizzagi.com/" },
    { imageUrl: 'clientsandpartners/teenuplive.png', link: "https://teenuplive.com/" },
    { imageUrl: 'clientsandpartners/megalogic.png', link: "https://megalogic.id/" },
    { imageUrl: 'clientsandpartners/algo.png', link: "https://algonetwork.id/" },
  ];

  return (
    <div className="client-partner-gallery">
      <hr
        className="horizontal-line"
        style={{
          marginTop: "100px",
          marginBottom: "75px"
        }}
      />
      
      <h1 className="home-about-description" style={{ fontSize: "2.6em", paddingBottom: "50px"}}>
        MY <span to="/about" className="purple" style={{textDecoration: 'none'}}>CLIENTS</span> & <span to="/about" className="purple" style={{textDecoration: 'none'}}>PARTNERS</span>
      </h1>
      <div className="image-grid" style={{marginTop: "50px"}}>
        {/* {journeyData.map((d) => (
          <div key={d.id} className="image-container">
            <img src={d.imgPath} alt={`Client/Partner ${d.id + 1}`} />
          </div>
        ))} */}
        {clientPartnerImages.map((imageData, index) => (
          <div key={index} className="image-container">
            {imageData.link ? (
              <a href={imageData.link} target="_blank" rel="noopener noreferrer">
                <img src={imageData.imageUrl} alt={`Client/Partner ${index + 1}`} />
              </a>
            ) : (
              <img src={imageData.imageUrl} alt={`Client/Partner ${index + 1}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPartners;
