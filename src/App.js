import './App.css';
import Home from './MyComponents/Home';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './MyComponents/About';
import Services from './MyComponents/Services';
import Contact from './MyComponents/Contact';
// import {Redirect} from 'react-router-dom';
import NavBar from './MyComponents/NavBar';
import Discover from './MyComponents/Discover';
import Discover2 from './MyComponents/Discover2';
import Search from './MyComponents/Search';
import { Card2 } from './MyComponents/Card2';
import Card3 from './MyComponents/Card3';
import Card4 from './MyComponents/Card4';
import Card from './MyComponents/Card';
import LNQN from './MyComponents/LNQN';
// import Lectures from './Lectures';
import Notifications from './MyComponents/Notifications';
import Quizzes from './MyComponents/Quizzes';
import Notes from './MyComponents/Notes';
import Survey from './MyComponents/Survey';
import Discover3 from './MyComponents/Discover3';

function App() {
  return (
    <>
      <NavBar />
      {/* <Discover /> */}
      <Discover2 />
      <Search />
      {/* <Card /> */}
      <LNQN />
      
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/> 
        <Route path='/trending' element={<Card />}/>
        {/* <Route path='/lectures' element={<Lectures />}/> */}
        <Route path='/notifications' element={<Notifications />}/>
        <Route path='/quizzes' element={<Quizzes />}/>
        <Route path='/notes' element={<Notes />}/>
        <Route path='/survey' element={<Survey />}/>
        <Route path='/discover' element={<Discover3 />}>
        
        

        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
