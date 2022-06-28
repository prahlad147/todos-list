import React from 'react'
import QuizzesC from './QuizzesC'
import './style.css';

const QuizF = () => {
    return (
        <>
            <center>
                <div className='widthm'>
                    <QuizzesC />


                    <div className='card widths mt-3 pt-3'>
                        <p style={{ textAlign: "left", marginLeft: "12px" }}>Questions 6/15</p>
                        <p style={{ textAlign: "left", marginLeft: "12px" }}><strong>Let's play a guessing game. Which of the following wasn't invented during WWII?</strong></p>

                        <center>
                            <div class="card mt-3 widths surveys3">
                                <div class="card-body widths">
                                    Electronic Computers
                                </div>
                            </div>
                            <div class="card mt-3 widths surveys3">
                                <div class="card-body widths">
                                    Radar Technology
                                </div>
                            </div>
                            <div class="card mt-3 widths surveys3">
                                <div class="card-body widths">
                                    The Atomic bomb
                                </div>
                            </div>
                            <div class="card mt-3 widths surveys3">
                                <div class="card-body widths">
                                    Pilotless drones
                                </div>
                            </div>

                        </center>
                    </div>
                    <br />

                    <div className='card widths mt-3 pt-3'>
                        <div className='row'>
                            <div className='col-2'>
                                <p style={{ textAlign: "left", marginLeft: "22px", fontSize: "20px", color: "black" }}><strong><i class="bi bi-arrow-left"></i></strong></p>
                            </div>
                            <div className='col me-5'>
                                <p style={{ color: "black" }}><strong>Explanation</strong></p>
                            </div>


                            <center>
                                <p className="widths" style={{ textAlign: "left", marginLeft: "12px" }}><strong>Let's play a guessing game. Which of the following wasn't invented during WWII?</strong></p>
                            </center>

                            <center>

                                <div class="widths">
                                    <p><strong>Your Result</strong></p>
                                    <p>Incorrect</p>
                                    <hr />
                                </div>
                                <div class=" widths">
                                    <p><strong>Difficulty</strong></p>
                                    <p>Easy</p>
                                    <hr />
                                </div>
                                <div class=" widths">
                                    <p><strong>Your Pace</strong></p>
                                    <p>0:18</p>
                                    <hr />
                                </div>
                                <div class=" widths">
                                    <p><strong>Others Pace</strong></p>
                                    <p>1:52</p>

                                </div>

                                <p style={{ textAlign: "left", marginLeft: "12px", marginTop: "12px" }}><strong> Video Explanation </strong></p>
                                <div class="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                </div>

                                <p style={{ textAlign: "left", marginLeft: "12px", marginTop: "12px" }}><strong> Textual Explanation </strong></p>
                                <div class="card widths" >
                                    <div class="card-body">
                                        <p class="card-text" style={{ textAlign: "left" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <ol style={{ textAlign: "left" }}>
                                            <li>Option 1</li>
                                            <li>Option 2</li>
                                            <li>Option 3</li>
                                            <li>Option 4</li>
                                            <li>Option 5</li>
                                        </ol>
                                    </div>
                                </div>

                                <div class="col mt-3">
                                    <p style={{ textAlign: "center" }}> <button type="button" class="btn btn-danger back">Back</button></p>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </center>


        </>
    )
}

export default QuizF
