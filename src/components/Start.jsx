import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StartHeader from './StartHeader';
import './start.css';
import bannerRabbat from '../assets/bannarrabbat.jpg';
import reklambild from '../assets/reklambild.jpg';

const images = [
  { id: 1, src: 'https://www.spanish-fiestas.com/wp-content/uploads/2020/07/mai-castile-astorga-01.jpg', text: 'Spanien', link: '/hotels/spain', price: '1500 SEK' },
  { id: 2, src: 'https://lp-cms-production.imgix.net/2021-01/shutterstockRF_150264563.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=23&dpr=4', text: 'Tyskland', link: 'https://www.booking.com/country/de.sv.html?aid=352065&pagename=de&label=msn-8fKG3Y99uvaU8czvb84RZQ-80470674762544:tikwd-80470828260883:loc-174:neo:mte:lp145815:dec:qshotels%20in%20tyskland&utm_campaign=Germany&utm_medium=cpc&utm_source=bing&utm_term=8fKG3Y99uvaU8czvb84RZQ&msclkid=8337db2096d31bb41aafbc3296742bda&utm_content=Cy%3A80-Germany', price: '2000 SEK' },
  { id: 3, src: 'https://wallpaperaccess.com/full/1495229.jpg', text: 'Sverige', link: 'https://www.tripadvisor.com/Hotels-g189806-Sweden-Hotels.html', price: '1800 SEK' },
  { id: 4, src: 'https://wallpaperaccess.com/full/35663.jpg', text: 'Turkiet', link: '/hotels/turkey', price: '1300 SEK' },
  { id: 5, src: 'https://th.bing.com/th/id/R.a94a0e7d5bcca4a21985665036fa39da?rik=vdHTNqVVgOwDcQ&pid=ImgRaw&r=0', text: 'Grekland', link: '/hotels/greece', price: '1600 SEK' },
  { id: 6, src: 'https://a.cdn-hotels.com/gdcs/production38/d1419/a60c7ed4-cc5d-478e-98fa-0c4210ed2908.jpg', text: 'France', link: '/hotels/france', price: '1700 SEK' },
  { id: 7, src: 'https://www.tripsavvy.com/thmb/T0rP-q2Gu-stWM3oN_3auBiP32I=/3008x2000/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-592363827-57b4055b3df78cd39c14765e.jpg', text: 'Marocko', link: '/hotels/morocco', price: '1400 SEK' },
  { id: 8, src: 'https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza.jpg', text: 'Egypten', link: '/hotels/egypt', price: '1200 SEK' },
  { id: 9, src: 'https://media.tuicontent.nl/p/header/vakantie-kenia.jpg', text: 'Kenya', link: '/hotels/kenya', price: '1900 SEK' },
];

const ImageGrid = () => (
  <div className="grid-container">
    {images.map((image) => (
      <div key={image.id} className="grid-item">
        <Link to={image.link}>
          <img src={image.src} alt={image.text} className="grid-image" />
          <div 
            className="strap" 
            style={{ 
              fontSize: '14px', 
              color: '#000', 
              fontWeight: 'bold', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '45px', /* Adjust this value as needed */
              width: '100%', /* Set the width to 100% */
              boxSizing: 'border-box', /* Include padding and border in the element's total width and height */
              padding: '0', /* No padding needed for centering */
              textAlign: 'center' 
            }}
          >
            {image.text}
          </div>
          <p className="country-description">Från {image.price}</p>
        </Link>
      </div>
    ))}
  </div>
);

const Start = () => {
  const navigate = useNavigate();

  return (
    <div>
      <StartHeader />
      <ImageGrid />
      <div className="ad-container">
        <a href="your-link-here">
          <img src={bannerRabbat} alt="Advertisement" className="full-width-image" />
          <div className="image-name"></div>
        </a>
      </div>
      <div className="second-ad-container">
        <a href="your-second-link-here">
          <img src={reklambild} alt="Second Advertisement" className="full-width-image" />
          <div className="image-name"></div>
        </a>
      </div>
    </div>
  );
};

export default Start;
