// src/InfoSection.js
import React, {useEffect, useState} from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import './InfoSection.css';
import './FinalPay.css';
import image24 from './assets/image24.jpeg';

const InfoSection = () => {
  const [containerRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.5,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true);
    }
  }, [isIntersecting]);

  return (
    <div ref={containerRef} className={`info-section ${isVisible ? 'visible' : ''}`}>
      <h2>Information You Need To Pay Attention</h2>
      <p>Passengers are divided according to age categories.</p>
      <img 
        src={image24}
        alt="Description"
        className="rounded-image"
      />
      <h2>Your Trip Summary</h2>
      <p>
        Your flight takes off from ARN Gate 23A, you enter through C Entrance. 
        In FCO Airport in Rome, you will stay 3h & 45m then exit through Gate D14. 
        Final destination will be SABIHA Airport and you can exit through L Door.
      </p>
      <div className="dropdowns">
        <div className="dropdown">
          <label htmlFor="reviews"><b>Reviews</b></label>
          <select id="reviews">
            <option>Good</option>
            <option>Bad</option>
            <option>Worst</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="sustainability"><b>Sustainability level </b></label>
          <select id="sustainability">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
