import React, {useState} from 'react';
import goods from "../../Data/goods";
import PreviewShop from "../PreviewShop/PreviewShop";

import './Shop.scss'

function Shop() {
  const [shopItems] = useState(goods)

  return (
    <div className="shop-page">
      {
        shopItems
          .map(({id, ...props}) => (
              <PreviewShop key={id} {...props} />
            )
          )
      }
    </div>
  );
}

export default Shop;