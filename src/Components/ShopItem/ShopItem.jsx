import React from 'react';

import './ShopItem.scss'

function ShopItem({id, name, imageUrl, price}) {
  return (
    <div className="shopItem">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }
        }/>
      <div className="shopItem_footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>

    </div>
  );
}

export default ShopItem;