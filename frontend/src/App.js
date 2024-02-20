import { Route, Routes } from 'react-router-dom';
import NavDrawer from './components/navigation/NavDrawer';
import Inventory from './Inventory.js';
import axios from 'axios';

let items = [
  { id: 1, element: 'water', type:'egg', imageUrl: '/water_egg.png', time: 'Sat Feb 20 2024 21:00:00 GMT+0530' },
  { id: 2, element: 'fire', type:'egg', imageUrl: '/fire_egg.png' , time: 'Sat Feb 20 2024 21:04:00 GMT+0530' },
  { id: 3, element: 'water', type:'dragon', imageUrl: '/water_dragon.png', time: ''}
];

const checkEgg = (index) => {
  document.getElementsByClassName('item')[index].classList.add('hidden');
}

const timeLeft = (time, index) => {
    // Convert the time strings to Date objects
    const birth_time = new Date(time);
    const curr_time = new Date();

    // Get the time in milliseconds
    let birth_time_ms = birth_time.getTime();
    let curr_time_ms = curr_time.getTime(); 
    let mins = (curr_time_ms - birth_time_ms)/60000

    if (mins>2) {
      hatchEgg(index)
      return `egg hatched ${mins} mins earlier`;
    } else {
      return `not hatched ${mins}`;

    }
}

const hatchEgg = (index) => {
  document.getElementsByClassName('item')[index].classList.add('hidden');
  
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}


const fetchProfileData = async (googleId) => {
  try {
    
    const response = await axios.get(`/get/profile/${googleId}`);

    return response.data
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return null; 
  }
};

let googleId = "root";
{/* let profileData= fetchProfileData(googleId) */}


function App() {
  return (
    <div className="relative h-screen bg-neutral-1 lg:flex">
      <NavDrawer />
      <div className="absolute bottom-0 w-full h-full waves">
        <Inventory items={items} profileData= {""} />
      </div>

      <div id="modal" class="modal hidden">
        <div class="modal-content">
        <h2>Celebration</h2>
        <img src="dragon.jpg" alt="Dragon"></img>
        <p>Congratulations! Your egg has hatched into a dragon!</p>
        <button onclick="">Close</button>
        </div>
      </div> 
    
    </div>
  );
}

export default App;
