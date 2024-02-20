import React from 'react';
import './styles/inventory.css'; 

const Inventory = ({ items }) => {
  return (
    <div className="container">
      <h1 className="inventory-header">Inventory</h1>
      <div className="item-row">
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={process.env.PUBLIC_URL +'/assets' +item.imageUrl} alt={item.name} className="image" />
            <p className="item-name">{item.name}</p>
          </div>
        ))}
      </div>    
    </div>
  );
};

export default Inventory;
