import React from 'react';
import Homepage from './Homepage';

import NavBar2 from './NavBar2';

import Notes from './Notes';
import Search3 from './Search3';
import Trending from './Trending';
import NotesC from './NotesC';

import './style.css';



const NotesF = () => {
    return (
        <>
            <center>
                <div className='widthm'>
                    {/* <Notes />
            <Homepage />
            <NavBar2 /> */}
                    <Search3 />
                    <Trending />
                    <NotesC />
                </div>
            </center>
        </>
    )
}

export default NotesF;
