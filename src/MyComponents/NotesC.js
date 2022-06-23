import React from 'react'
import image from './image2.jpeg'
// import '../App.css';
import './Card2.css';
import logo from './logo.png';

export const NotesC = () => {
    return (
        <>
            {/* {function myfunction(){
        document.getElementById("demo").innerHTML ="Hello World";
      }} */}
            <center>
                {/* <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <i class="bi bi-collection-play"></i>
    <button onClick="myfunction()">LECTURES</button>
      LECTURES
      <p id="demo"></p>
    </div>
    <div class="col">
    <i class="bi bi-journal-text"></i>
      NOTES
    </div>
    <div class="col">
    <i class="bi bi-lightbulb"></i>
     QUIZZES
    </div>
    <div class="col">
    <i class="bi bi-bell"></i>
      NOTIFICATION
    </div>
  </div>
    </div> */}



                {/* <p className="text"> Hello World</p> */}
                <div>
                    {/* <p>Hello World</p> */}
                    <div className="card mb-3 mt-3 widths">
                        {/* <img src={image} className="card-img-top" alt="..." /> */}

                        <div className="card-body">
                            {/* <img src={logo}  className="logo"/>  */}
                            <div class="container">
                                <div class="row">
                                    <div class="col-1">
                                        <a href='https://mobishaala.com/'><img style={{ height: "50px", width: "50px" }} src={logo} class="logo-img"></img> </a>
                                    </div>
                                    <div class="col ms-4 mt-2">
                                        <h6 style={{ fontSize: "13px" }} className="card-title">Mobishaala Training Centre</h6>
                                        <p style={{ fontSize: "12px", textAlign: 'left' }} className="card-title "> Yesterday at 08:44 PM   </p>
                                    </div>

                                    <div class="col-4 mt-3">
                                        <p className='borderr' style={{ border: "2px solid #8A0727", fontSize: "12px" }}>Go to Institute</p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <p style={{ textAlign: "left" }} className="card-text"><strong>Some quick example text to build on the card title and make up the bulk of the card's content.</strong></p>
                            <p style={{ textAlign: "left" }} className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <img src={image} className="card-img-top" alt="..." />
                            <br />
                            <br />
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <p><i class="bi bi-heart-fill icon-red"></i>     45 Likes</p>
                                    </div>
                                    <div class="col">
                                    </div>
                                    <div class="col">
                                        {/* <a href="https:/www.google.com" class="link-primary">Primary link</a> */}

                                        <i class="bi bi-share-fill">     4 Share</i>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <i class="bi bi-heart">     Like</i>
                                    </div>
                                    <div class="col-5">

                                        <a id="whatsapp" href='https://api.whatsapp.com/send/?phone=919972968390&text=Hello%21+I+want+to+know+about+mobishaala.com%2C+my+name+is+&app_absent=0'><i class="bi bi-whatsapp">     Join Class</i></a>
                                    </div>
                                    <div class="col">
                                        <i class="bi bi-share">    Share</i>
                                    </div>
                                </div>
                            </div>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>

                {/* <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div> */}
            </center>
        </>
    )
}


export default NotesC;