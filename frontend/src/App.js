import { Route, Routes } from 'react-router-dom';
import NavDrawer from './components/navigation/NavDrawer';
import Inventory from './Inventory.js'

const items = [
  { name: 'Item 1', imageUrl: './assets/egg1.png' },
  { name: 'Item 2', imageUrl: './assets/egg2.png' },
  { name: 'Item 3', imageUrl: './assets/egg3.png' },
  { name: 'Item 1', imageUrl: './assets/egg1.png' },
  { name: 'Item 2', imageUrl: './assets/egg2.png' },
  { name: 'Item 3', imageUrl: './assets/egg3.png' },
  // Add more items as needed
];

function App() {
  return (
    <div className="relative h-screen bg-neutral-1 lg:flex">
      <NavDrawer />
      <div className="absolute bottom-0 w-full h-full waves">
        <Inventory items={items} />
      </div>
      
    </div>
  );
}

export default App;
