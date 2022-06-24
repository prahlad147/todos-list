// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import PropTypes from 'prop-types'
// import { Card } from './MyComponents/Card';
import { Card2 } from './MyComponents/Card2';
import { Card3 } from './MyComponents/Card3';
import { Card4 } from './MyComponents/Card4';
import { Card5 } from './MyComponents/Card5';
import { Card6 } from './MyComponents/Card6';
import Homepage from './MyComponents/Homepage';
import NavBar from './MyComponents/NavBar';
import Exam from './MyComponents/Exam';
import Search from './MyComponents/Search';
import LNQN from './MyComponents/LNQN';
import NavBar2 from './MyComponents/NavBar2';
import Search2 from './MyComponents/Search2';
import LNQNC from './MyComponents/LNQNC';
import Notes from './MyComponents/Notes';
import Search3 from './MyComponents/Search3';
import Trending from './MyComponents/Trending';
import NotesC from './MyComponents/NotesC';
import Survey from './MyComponents/Survey';
import Lesson from './MyComponents/Lesson';
import './MyComponents/style.css';
import Notification from './MyComponents/Notification';
import NavBar3 from './MyComponents/NavBar3';
import NotificationC from './MyComponents/NotificationC';
import Reel from './MyComponents/Reel';
import Reels from './MyComponents/Reels';









function App() {





  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the market",
      desc: "You need to go the market to get this job done"
    },
    {
      sno: 3,
      title: "Go to the market",
      desc: "You need to go the market to get this job done"
    },
  ];
  return (


    <>












      <center>
        <div className='main widthm'>
          {/* Welcome to HomePage */}
          <Homepage />
          <NavBar />
          <Search />
          <Exam />
          <Card2 />
          <Card2 />
          <Card2 />


          {/* Welcome to LNQN Page */}
          <LNQN />
          <Homepage />
          <NavBar2 />
          <Search2 />
          <LNQNC />
          <LNQNC />
          <LNQNC />


          {/* Welcome to Notes Section */}

          <Notes />
          <Homepage />
          <NavBar2 />
          <Search3 />
          <Trending />
          <NotesC />


          {/* Welcome to REEL Section */}



          {/* Welcome to Survey Page */}
          <Survey />


          {/* Welcome to Lecture Session */}
          {/* <Lesson /> */}


          {/* Welcome to Notification Session */}

          <Notification />
          <NavBar2 />
          <NavBar3 />
          <NotificationC />
          <NotificationC />
          <NotificationC />
          <NotificationC />
          <br />

          <Reels />
          <Reel />

          {/* <Card3 /> */}
          {/* <Card4 />
      <Card5 />
      <Card6 /> */}
          {/* <Card2 />
    <Card2 /> */}


          {/* <Card /> */}
        </div>
      </center>
    </>
  );
}

export default App;



