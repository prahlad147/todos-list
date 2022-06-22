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

      {/* <Card3 /> */}
      {/* <Card4 />
      <Card5 />
      <Card6 /> */}
      {/* <Card2 />
    <Card2 /> */}


      {/* <Card /> */}
    </>
  );
}

export default App;



