import React from 'react';
import './style.css';
import { Link, Switch, Route, Routes } from 'react-router-dom';


const Homepage = () => {
    return (

        <>
            <center>


                <div class="container dimension mt-3">
                    <div class="row">
                        <div class="col">

                            <p style={{ textAlign: "left", fontSize: "25px" }}><strong><i class="bi bi-chevron-left"></i><Link to="/discover" className='linkd' style={{ color: "black" }}>Discover</Link></strong></p>
                        </div>
                        <div class="col">
                            <p style={{ textAlign: "right" }}> <button type="button" class="btn btn-danger radius"><Link to="/discover" className='linkd' style={{ color: "white" }}>LIVE DOUBT</Link></button></p>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}

export default Homepage;
