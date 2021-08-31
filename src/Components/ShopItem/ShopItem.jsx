import React from 'react';
import Button from "../Button/Button";

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
      <Button inverted children={'add to cart'}/>
    </div>
  );
}

export default ShopItem;