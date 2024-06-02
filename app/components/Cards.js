import React from 'react';
import "./Cards.css";

const Cards = ({ imageUrl, title, subtitle, containerStyle, imageStyle, detailsStyle ,hStyle,pStyle}) => {
  return (
    <div className='cardbody' style={containerStyle}>
      <div className='image-section' style={imageStyle}>
        {imageUrl && <img src={imageUrl} alt={title} className='card-image' />}
      </div>
      <div className='details-anime' style={detailsStyle}>
        <h1 style={hStyle}>{title}</h1>
        <p style={pStyle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Cards;
