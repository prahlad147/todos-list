import React from 'react';


const QuizE = () => {
    return (


        <>
            <div className='card widths'>
                <div className='row'>
                    {/* <div className='col-2'>
                                <p style={{ textAlign: "left", marginLeft: "22px", fontSize: "20px", color: "black" }}><strong><i class="bi bi-arrow-left"></i></strong></p>
                            </div>
                            <div className='col me-5'>
                                <p style={{ color: "black" }}><strong>Explanation</strong></p>
                            </div> */}
                    {/* <button type="button" class="btn btn-danger back">
                                <div className='col-3'>
                                    <p><strong><i class="bi bi-arrow-left"></i></strong></p>
                                </div>
                                <div className="col-9">
                                    <p style={{ textAlign: "center" }}> View Explanation</p>
                                </div>
                            </button> */}

                    <div class="col">
                        <p style={{ textAlign: "center" }}><button type="button" class="btn btn-danger back">Explanation</button></p>
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

                        <div class="col">
                            <p style={{ textAlign: "center" }}><button type="button" class="btn btn-danger back">Video Explanation</button></p>
                        </div>
                        <div class="ratio ratio-16x9 widths">
                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                        </div>

                        <div class="col mt-4">
                            <p style={{ textAlign: "center" }}><button type="button" class="btn btn-danger back">Text Explanation</button></p>
                        </div>
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

        </>
    )
}

export default QuizE
