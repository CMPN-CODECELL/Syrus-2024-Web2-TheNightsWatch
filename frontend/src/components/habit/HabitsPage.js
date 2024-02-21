import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./habitStyles/HabitsPage.css";
// import Button from '../input/Button';
import Icon from "../other/Icon";
import Habit from "./Habits";
import classNames from "classnames";
const axios = require('axios');

function HabitsPage() {
  const navigate = useNavigate();
  const [habits, setHabits] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch habits data from the backend
        const res = await fetch("http://localhost:5000/defaultHabit/getAllDefaultHabitsEntry");
        const body = await res.json();
         console.log(body);// Assuming fetchHabits is a function that returns a promise with habits data
        setHabits(body.habits);
        // Dispatch an action to update Redux store with fetched habits data
        // For example, dispatch({ type: 'SET_HABITS', payload: data }) assuming you have a reducer to handle this action
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    }
    fetchData();
  }, []);


  const renderedHabits = habits.map((habit) => (
    <Habit key={habit.id} data={habit} />
  ));



  return (
    <div className="pageClass">
      <div className="habitsClass">
        {habits.length > 0 ? (
          <>

            {renderedHabits}
          </>
        ) : (
          <p className="text-xl text-center font-bold text-neutral-4">
            You haven't added any habits
          </p>
        )}
      </div>

      {/* <Button className="self-center" onClick={() => navigate('/habits/new-habit')} equalPaddings>
        <Icon icon={<MdAdd className="w-8 h-8" />} color="white" />
      </Button> */}
    </div>
  );
}

export default HabitsPage;