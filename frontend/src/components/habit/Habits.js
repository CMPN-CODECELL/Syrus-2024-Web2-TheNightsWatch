import classNames from 'classnames';


import habitTemplates from './habitTemplates';

import { useState } from 'react';

function Habit({ data, todaysHabit }) {


  const icon = habitTemplates.find((templateHabit) => templateHabit.name === data.title)?.icon;


  const compareTime = () => {
    if (data.time) {
      const now = new Date();
      const nowTime = now.getHours() * 60 + now.getMinutes();
      const deadlineTime = Number(data.time.slice(0, data.time.indexOf(':'))) * 60 + Number(data.time.slice(data.time.indexOf(':') + 1));

      return (deadlineTime - nowTime) >= 0;
    } else {
      return true;
    }
  }



  const habitClass = classNames(
    'flex', 'items-center', 'space-x-2', 'w-full', 'pl-4', 'pr-2', 'rounded-xl',
    'bg-gradient-to-br', 'from-neutral-2', 'to-neutral-5', 'shadow-md', 'shadow-neutral-3',
    { 'opacity-60': !compareTime() && todaysHabit });



   const [value,setValue]=useState(data.quantity);

   const handleChange=(e)=>
   {
    console.log(data._id)
    console.log(e.target.value)
     fetch('http://localhost:5000/defaultHabit/makeDefaultHabitEntry',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({googleId:"root",habitId:data.habitId,quantity:e.target.value})
      })
     setValue(e.target.value);
   }



  return (
    <div className={habitClass}>

      <div className="grow flex justify-between items-center">
        <div className="flex flex-col pt-1 pb-2">
         
          <div className="flex space-x-2">
            {icon}
            <p>{data.title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col items-center -space-y-1 [text-shadow:1px_1px_7px_#FAFFF5]">
            {/* <p className="text-2xl text-neutral-4">24</p> */}
            <input type="number" value={value} onChange={handleChange} className="w-12 h-8 text-sm mt-3 appearance-none" />

            <p className="text-sm text-neutral-4">{data.unit}</p>
          </div>
     
        </div>
      </div>
    </div>
  );
}

export default Habit;