import React from 'react';
import axios from 'axios';


  
function fetchData() {
    axios.get('http://localhost:5000/defaultHabit/getAllDefaultHabits')
      .then(response => {
        // Handle the successful response
        console.log(response.data);
      })

      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }
  

const Inventory = ({ items }) => {

  // Call the function to trigger the GET request
  fetchData();

  return (
    
    <div className="flex justify-center items-center h-full">
      <div className="inventory">
        <h2 className="text-2xl font-bold mb-4">My Inventory</h2>
        <div className="flex flex-wrap justify-center">
          {items.map((item, index) => (
            <div key={index} className="w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4 h-30">
              <div className="bg-white rounded-lg shadow-md p-4 h-full">
                <img src={process.env.PUBLIC_URL + item.imageUrl} alt={`item ${index + 1}`} className="w-full mb-2" />
                <p className="text-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
