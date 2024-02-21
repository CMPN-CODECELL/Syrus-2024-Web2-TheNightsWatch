import { FaDumbbell, FaBook, FaMoneyBillWave, FaBed } from "react-icons/fa";
import { FaPersonRunning, FaWineBottle } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { MdScreenLockPortrait } from "react-icons/md";

const habitTemplates = [
  {
    icon: <FaDumbbell className="w-7 h-7" />,
    name: "Exercise",
  },
  {
    icon: <FaPersonRunning className="w-7 h-7" />,
    name: "running",
  },
  {
    icon: <FaWineBottle className="w-7 h-7" />,
    name: "Drink Water",
  },
  {
    icon: <FaBook className="w-7 h-7" />,
    name: "Read books",
  },
  {
    icon: <GiMeditation className="w-7 h-7" />,
    name: "Meditation",
  },
  {
    icon: <FaMoneyBillWave className="w-7 h-7" />,
    name: "Save money",
  },
  {
    icon: <MdScreenLockPortrait className="w-7 h-7" />,
    name: "Reduce screen time",
  },
  {
    icon: <FaBed className="w-7 h-7" />,
    name: "Sleep",
  },
];

export default habitTemplates;
