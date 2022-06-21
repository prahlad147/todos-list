import React from 'react'
import '../App.css';

function Discover2() {
    return (
        <>
    <center>
            <div class="container-fluid discover2">
            <div class="row align-items-start">
                <div class="col-6">
                <i className="bi bi-chevron-left">
                <a className="nav-link" href="/discover">Discover</a></i>
                <h4 className='classes'>Classes</h4>
                </div>

                <div class="container-fluid col icon">
                <i class="bi bi-camera-reels me-3"></i>
                <i class="bi bi-journal-text me-3"></i>
                <i class="bi bi-lightbulb"></i>
                </div>
            </div>
            </div>
</center>
        </>
    );
}



export default Discover2;