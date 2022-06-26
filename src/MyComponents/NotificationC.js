import React from 'react'
import image from './image2.jpeg'
// import '../App.css';
import './Card2.css';
import logo from './logo.png';

const NotificationC = () => {
    return (
        <><center>

            <div>

                {/* <p>Hello World</p> */}
                <div className="card widths surveys3">
                    {/* <img src={image} className="card-img-top" alt="..." /> */}

                    <div className="card-body">
                        {/* <img src={logo}  className="logo"/>  */}
                        <div class="container">
                            <div class="row">
                                <div class="col-1 me-2">
                                    <a href='https://mobishaala.com/'><img style={{ height: "50px", width: "50px" }} src={logo} class="logo-img"></img> </a>
                                </div>
                                <div class="col ms-4 mt-2">
                                    <h6 style={{ fontSize: "13px" }} className="card-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                    <p style={{ fontSize: "12px", textAlign: 'left' }} className="card-title "> Yesterday at 08:44 PM   </p>
                                </div>

                                <div class="col-1 mt-3 textr">
                                    <p><i class="bi bi-three-dots"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </center>


        </>
    )
}

export default NotificationC
