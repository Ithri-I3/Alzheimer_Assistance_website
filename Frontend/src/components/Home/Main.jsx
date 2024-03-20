

const boxData = [
    {
        title : "Daily Planner" ,
        image_path: "/dailyPlanner.svg",
        bg_color: "#AC97C1",
        class : ""
    },
    {
        title : "Medecine Managment" ,
        image_path: "/medecine.svg",
        bg_color: "#7A87B8",
        class : ""
    },
    {
        title : "Games" ,
        image_path: "/games.svg",
        bg_color: "#B595D6",
        class :"row-start-2"
    },
    {
        title : "GPS Locator" ,
        image_path: "/localisation.svg",
        bg_color: "#C8BAD3",
        class : "row-start-2"
    }
]

import Box from './Box.jsx';

export default function Main({ boxData }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 my-12">
      {boxData.map((box) => (
        <Box boxObj={box} key={box.title} />
      ))}
    </div>
  );
}
