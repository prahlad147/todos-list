import React from 'react';
import { Link, Switch, Route, Routes } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <>
            <div class="container dimension mt-3">
                <div class="row row-cols-5">
                    <div class="col"><Link to="/homepage" className='linkd' style={{ color: "black" }}><i style={{ fontSize: "32px" }} class="bi bi-house-door logos"></i></Link></div>
                    <div class="col"><Link to="/lectures" className='linkd' style={{ color: "black" }}><i style={{ fontSize: "32px" }} class="bi bi-play-btn logos"></i></Link></div>
                    <div class="col"><Link to="/notes" className='linkd' style={{ color: "black" }}><i style={{ fontSize: "32px" }} class="bi bi-journal-text logos"></i></Link></div>
                    <div class="col"><Link to="/discover" className='linkd' style={{ color: "black" }}><i style={{ fontSize: "32px" }} class="bi bi-lightbulb logos"></i></Link></div>
                    <div class="col"><Link to="/notifications" className='linkd' style={{ color: "black" }}><i style={{ fontSize: "32px" }} class="bi bi-bell logos"></i></Link></div>
                    <hr style={{ color: "#8A0727" }} />
                </div>
            </div>


            <div class="container dimension size mb-1">
                <div class="row row-cols-5 linkd">
                    <div class="col"><b><Link to="/homepage" className='linkd' style={{ color: "black" }}>INSTITUTES</Link></b></div>
                    <div class="col"><b><Link to="/lectures" className='linkd' style={{ color: "black" }}>LECTURES</Link></b></div>
                    <div class="col"><b><Link to="/notes" className='linkd' style={{ color: "black" }}>NOTES</Link></b></div>
                    <div class="col"><b><Link to="/discover" className='linkd' style={{ color: "black" }}>QUIZZES</Link></b></div>
                    <div class="col"><b><Link to="/notifications" className='linkd' style={{ color: "black" }}>NOTIFICATIONS</Link></b></div>
                </div>
            </div>
        </>
    )
}

export default NavBar
