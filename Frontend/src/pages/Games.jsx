import Header from '../components/Home/Header';
import Main from '../components/Home/Main';
import Footer from '../components/Home/Footer';

import gamesSVG from '/games_page.svg';

const boxData = [
  {
      title : "Memory" ,
      image_path: "/memory.svg",
      bg_color: "#AC97C1",
      class : ""
  },
  {
      title : "Attention" ,
      image_path: "/attention.svg",
      bg_color: "#7A87B8",
      class : ""
  },
  {
      title : "Language" ,
      image_path: "/language.svg",
      bg_color: "#B595D6",
      class :"row-start-2"
  },
  {
      title : "Orientation" ,
      image_path: "/orientation.svg",
      bg_color: "#C8BAD3",
      class : "row-start-2"
  }
]

export default function Games() {
  return (
    <div className='mx-5'>
      <Header image={gamesSVG} title="Shake your brain" text="Choose your categorie of games" />
      <Main boxData={boxData} />
      <Footer/>
    </div>
  )
}

 
