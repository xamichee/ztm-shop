import React from 'react';
import ShopItem from "../ShopItem/ShopItem";

import './PreviewShop.scss';

function PreviewShop({title, items}) {

  return (
    <div className="shop_preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="collection-preview">
        {
          items
            .filter((item, idx) => idx < 4)
            .map(({id, ...itemProps}) => (
              <ShopItem key={id} {...itemProps} />
            ))
        }
      </div>
    </div>
  );
}

export default PreviewShop;