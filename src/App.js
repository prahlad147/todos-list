// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import PropTypes from 'prop-types'
// import { Card } from './MyComponents/Card';
import {Card2} from './MyComponents/Card2';
import {Card3} from './MyComponents/Card3';
import {Card4} from './MyComponents/Card4';
import {Card5} from './MyComponents/Card5';
import { Card6 } from './MyComponents/Card6';
import { Card7 } from './MyComponents/Card7';
import { Card8 } from './MyComponents/Card8';
import { Card9 } from './MyComponents/Card9';
import { Card2A } from './MyComponents/Card2A';
import { Card2B } from './MyComponents/Card2B';
import { Card10 } from './MyComponents/Card10';



function App() {

  let todos = [
    {sno: 1,
    title:"Go to the market",
    desc: "You need to go the market to get this job done"},
    {sno: 2,
      title:"Go to the market",
      desc: "You need to go the market to get this job done"},
    {sno: 3,
        title:"Go to the market",
        desc: "You need to go the market to get this job done"},
  ];
  return (


  <div>
    <Header title='Mobishaala' searchBar = {false}/>
    {/* <Todos todos={todos} />
    <Footer /> */}
    {/* <button type="button" class="btn btn-primary">Primary</button> */}

    {/* <a class="btn btn-primary" href="#" role="button">Link</a>
    <button class="btn btn-primary" type="submit">Button</button>
    <input class="btn btn-primary" type="button" value="Input"/>
    <input class="btn btn-primary" type="submit" value="Submit"/>
    <input class="btn btn-primary" type="reset" value="Reset"></input> */}

    
    <Card2 />
    <Card2A />
    <Card2B />
    <Card3 />
    <Card4 />
    <Card5 />
    <Card6 />
    <Card7 />
    <Card8 />
    <Card9 />
    <Card10 />
    {/* <Card2 />
    <Card2 /> */}


    {/* <Card /> */}
  </div>
  );
}

export default App;



