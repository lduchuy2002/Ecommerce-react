import React, { useState, useEffect } from "react";

import "./grid.css";

function ProductList({ Data, ProductItem, HandleFunction, LoadMore, Text, isFilter }) {
  const [Product, setProduct] = useState(Data);
  useEffect(() => {
    setProduct(Data);
  }, [Data]);

  return (
    <div className="container">
      <div className="grid">
        {Product.map(item => (
          <ProductItem
            name={item.name}
            key={item.id}
            smallPicture={item.smallPicture}
            price={item.price}
            chip={item.chip}
            ram={item.ram}
            screenSize={item.screenSize}
            audio={item.audio}
            id={item.id}
          ></ProductItem>
        ))}
      </div>
      {!isFilter === true && <LoadMore HandleFunction={HandleFunction} Text={Text} />}
    </div>
  );
}

export default ProductList;
