import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/inventory.css'; 

// const updateInventory = async (index) => {
//   try {
//     const apiUrl = 'https://example.com/api/inventory';
//     const data = {
//       index: index
//     };

//     const response = await axios.post(apiUrl, data);
//     console.log('Inventory updated:', response.data);
//   } catch (error) {
//     console.error('Error updating inventory:', error);
//   }
// };

const timeLeft = (time, index, period) => {
    // Convert the time strings to Date objects
    const birth_time = new Date(time);
    const curr_time = new Date();

    // Get the time in milliseconds
    let birth_time_ms = birth_time.getTime();
    let curr_time_ms = curr_time.getTime(); 
    let mins = (curr_time_ms - birth_time_ms)/60000

    if (mins>period) {
      hatchEgg(index)
      return 1;
    } else {
      return 0;

    }
}

const hatchEgg = (index) => {
  // tell backend to change it
  // document.getElementsByClassName('item')[index].classList.add('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// Your function code here
const checkEggs = (it) => {
  it.forEach((item, i) => {
    if(timeLeft(item.time, i, item.period)){
      console.log("egg hatch");
      // updateInventory(i);
    }
  });
}

let items = [
  { id: 1, element: 'water', type:'egg', imageUrl: '/water_egg.png', time: 'Sat Feb 20 2024 21:00:00 GMT+0530', period: 2 },
  { id: 2, element: 'fire', type:'egg', imageUrl: '/fire_egg.png' , time: 'Sat Feb 20 2024 21:04:00 GMT+0530',  period: 2 },
  { id: 3, element: 'water', type:'dragon', imageUrl: '/water_dragon.png', time: '',  period: 2}
];

const Inventory = (items) => {
  
  // useEffect(() => {
  //   // checkEggs(items)
  // });

  return (
    <div className="container">
      <h1 className="inventory-header">Inventory</h1>
      <div className="item-row">
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={process.env.PUBLIC_URL +'/assets' +item.imageUrl} alt={item.element} className="image" />
            <p className="item-name">{item.element}</p>
          </div>
        ))}
      </div>    
    </div>
  );
};

export default Inventory;
