import { Route, Routes } from "react-router-dom";
// import axios from 'axios';
import NavDrawer from "./components/navigation/NavDrawer";
import Inventory from "./components/Inventory.js";
import Workout from "./components/Workout.js";
import Chat from "./components/chats/Chat";
import Resources from "./components/resources/Resources";
import NotFoundPage from "./components/other/NotFoundPage.js";
import HabitsPage from "./components/habit/HabitsPage.js";

function App() {
  return (
    <div className="relative h-screen bg-neutral-1 lg:flex">
      <NavDrawer />
      <div className="absolute bottom-0 w-full h-full waves">
        <Routes>
          <Route path="/">
            <Route index element={<HabitsPage />}/>
          </Route>
          <Route path="/workout/*">
            <Route index element={<Workout />} />
          </Route>
          <Route path="/rewards/*">
            <Route index element={<Inventory />} />
          </Route>
          <Route path="/forum/*">
            <Route index element={<Chat />} />
          </Route>
          <Route path="/resources/*">
            <Route index element={<Resources />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* <div id="modal" class="modal hidden">
        <div class="modal-content">
        <h2>Celebration</h2>
        <img src="dragon.jpg" alt="Dragon"></img>
        <p>Congratulations! Your egg has hatched into a dragon!</p>
        <button onclick="">Close</button>
        </div>
      </div>  */}
    </div>
  );
}

export default App;
