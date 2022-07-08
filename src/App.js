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
import { Link, Switch, Route, Routes } from 'react-router-dom';
import Discover from './MyComponents/Discover';
import HomepageF from './MyComponents/HomepageF';
import LectureF from './MyComponents/LectureF';
import NotificationF from './MyComponents/NotificationF';
import NotesF from './MyComponents/NotesF';
import QuizzesC from './MyComponents/QuizzesC';
import QuizF from './MyComponents/QuizF';









function App() {

  return (


    <>

      {/* <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/Lectures' element={<LNQNC />} />
        <Route exact path='/Notes' element={<NotesC />} />
        <Route exact path='/quizzes' element={<Contact />} />
        <Route exact path='/notifications' element={<NotificationC />} />
      </Routes> */}

      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="/reel">Lessons</Link>
          </li>

          <li>
            <Link to="/survey">Survey</Link>
          </li>
          <li>
            <Link to="/survey">Survey</Link>
          </li>
        </ul>
      </nav>


      <Homepage />
      <NavBar />
      {/* <HomepageF /> */}



      <Routes>
        <Route exact path='/' element={<HomepageF />} />
        <Route exact path='/discover' element={<Discover />} />
        <Route exact path='/lectures' element={<LectureF />} />
        <Route exact path='/homepage' element={<HomepageF />} />
        <Route exact path='/reel' element={<Reel />} />
        <Route exact path='/survey' element={<Survey />} />
        <Route exact path='/notifications' element={<NotificationF />} />
        <Route exact path='/notes' element={<NotesF />} />
        <Route exact path='/quizzes' element={<QuizF />} />
      </Routes>

      {/* <QuizzesC /> */}





      <center>
        <div className='main widthm'>
          {/* Welcome to HomePage */}




          {/* <HomepageF /> */}

          {/* Welcome to LNQN Page */}

          {/* <LectureF /> */}

          {/* Welcome to Notes Section */}

          {/* <NotesF /> */}


          {/* Welcome to REEL Section */}

          {/* <NotificationF /> */}

          {/* Welcome to Survey Page */}
          {/* <Survey /> */}


          {/* Welcome to Lecture Session */}
          {/* <Lesson /> */}


          {/* Welcome to Notification Session */}


          <br />

          {/* <Reels />
          <Reel /> */}

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



