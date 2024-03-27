import React, { createContext, useState, useEffect } from 'react';
import productsjson from "./assets/product.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { products } = productsjson;
  const [productsData, setProductsData] = useState(products);
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    setProductsData(prevProducts => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].selectedQuantity = newQuantity;
      return updatedProducts;
    });
  };

  useEffect(() => {
    const newTotal = productsData.reduce((accumulator, data) => {
      return accumulator + data.price * (data.selectedQuantity || 0);
    }, 0);
    setTotal(newTotal);
  }, [productsData,total]);

  return (
    <DataContext.Provider value={{ productsData, total, handleQuantityChange }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
