import React from 'react';
import { Card2 } from './Card2';
import Homepage from './Homepage';
import NavBar from './NavBar';
import Exam from './Exam';
import Search from './Search';
import './style.css';
import Lesson from './Lesson';


const HomepageF = () => {
    return (
        <>
            <center>
                <div className='widthm'>
                    {/* <Homepage />
            <NavBar /> */}
                    <Search />
                    <Exam />
                    <Card2 />
                    <Lesson />
                    <Card2 />
                    <Card2 />
                </div>
            </center>
        </>
    )
}

export default HomepageF;
