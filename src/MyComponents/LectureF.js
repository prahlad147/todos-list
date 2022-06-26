import React from 'react';
import Homepage from './Homepage';
import LNQN from './LNQN';
import NavBar2 from './NavBar2';
import Search2 from './Search2';
import LNQNC from './LNQNC';
import './style.css';

const LectureF = () => {
    return (

        <>
            <center>
                <div className='widthm'>
                    {/* <LNQN />
            <Homepage />
            <NavBar2 /> */}
                    <Search2 />
                    <LNQNC />
                    <LNQNC />
                    <LNQNC />
                </div>
            </center>
        </>
    )
}

export default LectureF;
