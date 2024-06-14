import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [products, setProducts] = useState([""]);

  let getProductsFromServer = async () => {
    let reqOption = {
      method: "GET",
    };
    let JSONData = await fetch("https://fakestoreapi.com/products", reqOption);
    console.log(JSONData);
    let JSOData = await JSONData.json();
    setProducts(JSOData);
    console.log(JSOData);
  };
  useEffect(() => {
    getProductsFromServer();
  }, []);
  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-container">
        {products.map((item) => (
          <div key={item.id} className="product-item">
            <img
              className="product-image"
              title={item.title}
              src={item.image}
              alt={item.title}
            />
            <h5 className="product-title">{item.title}</h5>
            <h4 className="product-price">${item.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
