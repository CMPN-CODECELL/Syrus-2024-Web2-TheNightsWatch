import { Route, Routes } from 'react-router-dom';
import NavDrawer from './components/navigation/NavDrawer';

function App() {
  return (
    <div className="relative h-screen bg-neutral-1 lg:flex">
      <NavDrawer />
      <div className="absolute bottom-0 w-full h-full waves"></div>
    </div>
  );
}

export default App;
