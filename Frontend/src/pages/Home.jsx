import Header from '../components/Home/Header';
import Main from '../components/Home/Main';
import Footer from '../components/Home/Footer';

import HomeHeaderSVG from '/home-header.svg';

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

export default function About() {
  return (
    <div className='mx-5'>
      <Header image={HomeHeaderSVG} text="You lack of memory wanna remember something ?" title="Hello you"/>
      <Main boxData={boxData} />
      <Footer/>
    </div>
  )
}

 
