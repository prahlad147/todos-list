import React from 'react';
import logo from './logo.png';

const Lesson = () => {
    return (
        <>
            {/* <p className='texta'><strong>Welcome to Lesson Session</strong></p> */}

            <div className="card mb-3 mt-3 widths">
                {/* <img src={image} className="card-img-top" alt="..." /> */}

                <div className="card-body">
                    {/* <img src={logo}  className="logo"/>  */}
                    <div class="container">
                        <div class="row">
                            <div class="col-2">
                                <a href='https://mobishaala.com/'><i class="bi bi-journal-album" style={{ fontSize: "20px", color: "black", textAlign: "left" }}></i> </a>
                            </div>
                            <div class="col-3 mt-1">
                                <h6 style={{ fontSize: "15px", textAlign: "left" }} className="card-title"><strong>Lessons</strong></h6>
                            </div>
                            <div class="col"> <p style={{ textAlign: "right" }}><i class="bi bi-three-dots"></i></p></div>
                        </div>

                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                    <div class="carousel-caption d-none d-md-block">
                                        {/* <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p> */}
                                    </div>
                                    <p style={{ textAlign: "left" }}><strong>Ravi Prasad Sharma</strong></p>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-1">
                                                <a href='https://mobishaala.com/'><img style={{ height: "30px", width: "30px" }} src={logo} class="logo-img"></img> </a>
                                            </div>
                                            <div class="col ms-4 mt-2">
                                                <h6 style={{ fontSize: "13px", textAlign: "left" }} className="card-title">Mobishaala Training Centre</h6>
                                                {/* <p style={{ fontSize: "12px", textAlign: 'left' }} className="card-title "> Yesterday at 08:44 PM   </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                    {/* <div class="carousel-caption d-none d-md-block"> */}
                                    {/* <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p> */}
                                    {/* </div> */}
                                    <p style={{ textAlign: "left" }}><strong>Ravi Prasad Sharma</strong></p>

                                    {/* <img src={image} className="card-img-top" alt="..." /> */}


                                    {/* <img src={logo}  className="logo"/>  */}
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-1">
                                                <a href='https://mobishaala.com/'><img style={{ height: "30px", width: "30px" }} src={logo} class="logo-img"></img> </a>
                                            </div>
                                            <div class="col ms-4 mt-2">
                                                <h6 style={{ fontSize: "13px", textAlign: "left" }} className="card-title">Mobishaala Training Centre</h6>
                                                {/* <p style={{ fontSize: "12px", textAlign: 'left' }} className="card-title "> Yesterday at 08:44 PM   </p> */}
                                            </div>

                                            {/* <div class="col-4 mt-3">
                                                <p className='borderr' style={{ border: "2px solid #8A0727", fontSize: "12px" }}>Add Institute</p>
                                            </div> */}
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                    </div>
                                    <div class="carousel-caption d-none d-md-block">
                                        {/* <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p> */}
                                    </div>
                                    <p style={{ textAlign: "left" }}><strong>Ravi Prasad Sharma</strong></p>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-1">
                                                <a href='https://mobishaala.com/'><img style={{ height: "30px", width: "30px" }} src={logo} class="logo-img"></img> </a>
                                            </div>
                                            <div class="col ms-4 mt-2">
                                                <h6 style={{ fontSize: "13px", textAlign: "left" }} className="card-title">Mobishaala Training Centre</h6>
                                                {/* <p style={{ fontSize: "12px", textAlign: 'left' }} className="card-title "> Yesterday at 08:44 PM   </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lesson;
