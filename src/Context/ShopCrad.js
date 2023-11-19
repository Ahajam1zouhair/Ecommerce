// ShopCard.js
import React, { createContext, useContext, useState } from 'react';

const ShopCardContext = createContext({});

export default function ShopCard({ children }) {
  const [quantité, setQuantite] = useState();
  const [ids, setIds] = useState();
  const [stockId, setStockId] = useState([
    {
      quantité: quantité,
      id: ids,
    },
  ]);

  const AjouterId = (id, quanti  ) => {
    setIds(id);
    setQuantite(quanti);
    setStockId((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantité: quanti  }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantité: quanti };
          } else {
            return item;
          }
        });
      }
    });
  };

  const Delete = (id)=>{
   setStockId( ()=>  stockId.filter((index) => index.id !== id ))
  
  }
  const cartQuantity = stockId.length;

  return (
    <ShopCardContext.Provider value={{ AjouterId, stockId, cartQuantity ,Delete}}>
      {children}
    </ShopCardContext.Provider>
  );
}

export const useShopCard = () => {
  return useContext(ShopCardContext);
};
