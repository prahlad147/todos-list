import React from 'react'

const NavBar = () => {
    return (
        <>
            <div class="container dimension mt-3">
                <div class="row row-cols-5">
                    <div class="col"><i style={{ fontSize: "32px" }} class="bi bi-house-door logos"></i></div>
                    <div class="col"><i style={{ fontSize: "32px" }} class="bi bi-play-btn logos"></i></div>
                    <div class="col"><i style={{ fontSize: "32px" }} class="bi bi-journal-text logos"></i></div>
                    <div class="col"><i style={{ fontSize: "32px" }} class="bi bi-lightbulb logos"></i></div>
                    <div class="col"><i style={{ fontSize: "32px" }} class="bi bi-bell logos"></i></div>
                    <hr style={{ color: "#8A0727" }} />
                </div>
            </div>


            <div class="container dimension size mb-1">
                <div class="row row-cols-5">
                    <div class="col"><b>INSTITUTE</b></div>
                    <div class="col"><b>LECTURES</b></div>
                    <div class="col"><b>NOTES</b></div>
                    <div class="col"><b>QUIZZES</b></div>
                    <div class="col"><b>NOTIFICATIONS</b></div>
                </div>
            </div>
        </>
    )
}

export default NavBar