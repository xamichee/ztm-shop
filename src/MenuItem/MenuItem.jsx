import React from 'react';

const MenuItem = ({title, subtitle, image, size}) => {
  return (
    <div
      className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{backgroundImage: `url(${image})`}} />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">{subtitle}</span>
        </div>
    </div>
  );
};

export default MenuItem;
