import React, { useEffect } from "react";
import axios from "axios";
import "../styles/inventory.css";
import egg_sound from "../sound/egg_sound.wav";

const timeLeft = (time, index, period, type) => {
  // Convert the time strings to Date objects
  const birth_time = new Date(time);
  const curr_time = new Date();

  // Get the time in milliseconds
  let birth_time_ms = birth_time.getTime();
  let curr_time_ms = curr_time.getTime();
  let mins = (curr_time_ms - birth_time_ms) / 60000;

  if (mins > period && type === "egg") {
    hatchEgg(index);
    return 1;
  } else {
    return 0;
  }
};

// const playEffects = () => {
//   const audio = new Audio(egg_sound);
//   audio.play();
// };

const hatchEgg = (ele, index) => {
  // tell backend to change it

  let prob = getProb();

  let imageDiv = document.getElementsByClassName("item")[index];
  if (imageDiv != undefined) {
    const newsrc = `${process.env.PUBLIC_URL}/assets/${ele}_dragon${prob}.png`;
    imageDiv.getElementsByTagName("img")[0].src = newsrc;
    // alert('The egg was hatched!');
  }
};

// Your function code here
const checkEggs = (it) => {
  it.forEach((item, i) => {
    if (timeLeft(item.time, i, item.period, item.type) === 1) {
      hatchEgg(item.element, i);
      // updateInventory(i);e
    }
  });
};

function getProb() {
  const randomNumber = Math.random(); // Generate a random number

  if (randomNumber < 0.6) {
    return 1; // Return 1 with 60% probability
  } else {
    return 2; // Return 2 with 40% probability
  }
}

let items = [
  { id: 1, element: "nature", type: "egg", imageUrl: "/water_egg.png", time: "Sat Feb 20 2024 21:00:00 GMT+0530", period: 2 },
  { id: 2, element: "fire", type: "egg", imageUrl: "/fire_egg.png", time: "Sat Feb 20 2024 21:04:00 GMT+0530", period: 2 },
  // { id: 3, element: "fire", type: "dragon", imageUrl: "/fire_dragon.png", time: "", period: 2 },
  // { id: 4, element: "water", type: "dragon", imageUrl: "/egg1.png", time: "", period: 2 },
];

let rewards = [
  { id: 1, imageUrl: "/mystery.jpg" },
  { id: 2, imageUrl: "/fire_dragon1.png" },
  { id: 3, imageUrl: "/water_dragon1.png" },
  { id: 4, imageUrl: "/mystery.jpg" },
  { id: 5, imageUrl: "/mystery.jpg" },
];

const Inventory = () => {
  useEffect(() => {
    checkEggs(items);
  });

  return (
    <div className="container">
      <h1 className="inventory-header">Inventory</h1>
      <div className="item-row">
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={process.env.PUBLIC_URL + "/assets/" + item.element + "_" + item.type + ".png"} className="image" />
            <p className="item-name">{""}</p>
          </div>
        ))}
      </div>

      <div className="reward-row">
        {rewards.map((item, index) => (
          <div key={index} className="reward">
            <img src={process.env.PUBLIC_URL + "/assets" + item.imageUrl} className="image" />
          </div>
        ))}
        <img src={process.env.PUBLIC_URL + "/assets/gift_card.png"} style={{ width: "20%", marginLeft: "2em" }} className="image" />
      </div>
      <h1 className="inventory-header">Collect All Types To Win</h1>
      <div></div>
    </div>
  );
};

export default Inventory;
