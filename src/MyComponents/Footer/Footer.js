import React from "react";

import { Button } from "@material-ui/core";
import logo from '../logo.png';
import '../style.css';
import { Favorite, Comment, Send } from "@material-ui/icons";

import "./Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
  return (

    <>


      <div className="video-footer">
        <div className="video-text">
          <div>
            <h4 className="ms-3">Shima Sharma</h4>
            <br />
          </div>
          {/* <div className="container">
            <a href='https://mobishaala.com/'><img style={{ height: "50px", width: "50px" }} src={logo} class="logo-img"></img> </a>
            <p style={{ textAlign: "left" }} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div> */}
          {/* {channel} . ({song}) */}
          {/* <Button> */}
          {/* <h4 style={{ color: "white", fontSize: "12px" }}>Shima Sharma</h4> */}
          {/* </Button> */}


          {/* <a href='https://mobishaala.com/'><img style={{ height: "50px", width: "50px" }} src={logo} class="logo-img"></img> </a>
          <h6 style={{ fontSize: "13px" }} className="card-title">Mobishaala Training Centre</h6>
          <p style={{ fontSize: "12px", textAlign: 'left' }} className="card-title "> Yesterday at 08:44 PM   </p>
          <p className='borderr' style={{ border: "2px solid #8A0727", fontSize: "12px" }}>Add Institute</p>

          <p style={{ textAlign: "left" }} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

        </div>



        {/*  */}
        <div className="footer-buttons" style={{ color: "white" }}>
          <div className="flex-box">
            <a href='https://mobishaala.com/'><img style={{ height: "30px", width: "30px" }} src={logo} class="logo-img"></img> </a>
            {/* <Favorite />
            {likes} */}
          </div>

          <div className="flex-box">
            <h6 style={{ fontSize: "12px" }} className="card-title">Mobishaala Training Centre</h6>
            {/* <Comment />
            {comment} */}
          </div>

          <div className="flex-box">
            <p style={{ textAlign: "right", color: "black" }}> <button type="button" class="btn btn-danger buttonr">Follow</button></p>
            {/* <Send />
            {shares} */}

          </div>

          <div className="flex-box">
            {/* <p style={{ textAlign: "left" }} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

          </div>

          <div className="flex-box">

          </div>

        </div>

        <div className="flex-box">

          {/* <p style={{ textAlign: "left" }} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        </div>

        {/* <p style={{ textAlign: "left" }} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}


        <div className="footer-buttons" style={{ color: "white" }}>
          <div></div>
        </div>

        {/* <div class="container">
        <div class="row">
          <div class="col-1">
            <a href='https://mobishaala.com/'><img style={{ height: "50px", width: "50px" }} src={logo} class="logo-img"></img> </a>
          </div>
          <div class="col ms-4 mt-2">
            <h6 style={{ fontSize: "13px" }} className="card-title">Mobishaala Training Centre</h6>
            <p style={{ fontSize: "12px", textAlign: 'left' }} className="card-title "> Yesterday at 08:44 PM   </p>
          </div>

          <div class="col-4 mt-3">
            <p className='borderr' style={{ border: "2px solid #8A0727", fontSize: "12px" }}>Add Institute</p>
          </div>
        </div>
      </div>
      <br />
      <p style={{ textAlign: "left" }} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}


      </div>

      {/* <div className="footer-buttons breel " style={{ color: "white", marginTop: "20px" }}>
        <div className="flex-box mar ">
          <a href='https://mobishaala.com/'><img style={{ height: "30px", width: "30px" }} src={logo} class="logo-img"></img> </a>
          <p> Hello World</p>

        </div>
      </div> */}


      <div className="footer-buttons leftreel" style={{ color: "white", marginTop: "20px" }}>
        <div className="flex-box mar texta">
          {/* <a href='https://mobishaala.com/'><img style={{ height: "30px", width: "30px" }} src={logo} class="logo-img"></img> </a> */}
          {/* <p> Hello World</p> */}
          <Favorite />
          {likes}
          <Comment />
          {comment}
          <Send />
          {shares}
        </div>


      </div>
    </>
  );
}
