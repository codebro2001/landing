
import './App.css'
import Header from './components/Header'
import Banner  from './components/Banner'
import Cards from './components/Cards'
import Streets from './components/Streets'
import rectangle from './assets/Rectangle7.png'
import rectangle2 from './assets/Rectangle 2.png'
import rectangle3 from './assets/Rectangle 3.png'
import rectangle4 from './assets/Rectangle 4.png'
import rectangle8 from './assets/Rectangle 8.png'
import anothre from './assets/anothre.png'
import ContactUs from './components/ContactUs'
import facebookicon from './assets/Facebook - Original.png'
import twittericon from './assets/Twitter - Original.png'
import instagramicon from './assets/Instagram - Original.png'

import Footersection from './components/Footersection'

const data = [
  {
    id: 1,
    street : "103/143 West Street, Crows Nest",
    characteristics : "10 Bedroom  150 M  2 Garage",
    postedby : "Posted by: X builder",
    price : "$45,545",
    image : rectangle
  },
  {
    id: 2,
    street : "103/143 West Street, Crows Nest",
    characteristics : "10 Bedroom  150 M  2 Garage",
    postedby : "Posted by: X builder",
    price : "$45,545", 
    image : rectangle2
  },
  {
    id: 3,
    street : "103/143 West Street, Crows Nest",
    characteristics : "10 Bedroom  150 M  2 Garage",
    postedby : "Posted by: X builder",
    price : "$45,545",
    image : rectangle3 
  },
  {
    id: 4,
    street : "103/143 West Street, Crows Nest",
    characteristics : "10 Bedroom  150 M  2 Garage",
    postedby : "Posted by: X builder",
    price : "$45,545",
    image : rectangle4 
  },
  {
    id: 5,
    street : "103/143 West Street, Crows Nest",
    characteristics : "10 Bedroom  150 M  2 Garage",
    postedby : "Posted by: X builder",
    price : "$45,545",
    image: rectangle8
  },
  {
    id: 6,
    street : "103/143 West Street, Crows Nest",
    characteristics : "10 Bedroom  150 M  2 Garage",
    postedby : "Posted by: X builder",
    price : "$45,545",
    image: anothre
    
  }  


]

const footersocialmedia = [
  {
    id: 1,
    img : facebookicon,

  },
  {
    id: 2,
    img : twittericon
  },
  {
    id: 3,
    img : instagramicon
  },
  
]



function App() {


  return (
    <>
      <Header />
      <Banner />
      <Cards />
      <Streets data={data} />
      <ContactUs />
      <Footersection footersocialmedia={footersocialmedia} />
    </> 
  )
}

export default App
