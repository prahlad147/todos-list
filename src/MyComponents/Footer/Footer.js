import React from "react";

import { Button } from "@material-ui/core";
import logo from '../logo.png';

import { Favorite, Comment, Send } from "@material-ui/icons";

import "./Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
  return (

    <>


      <div className="video-footer">
        <div className="video-text">
          <h3>
            {/* {channel} . ({song}) */}
            <Button>
              <h4 style={{ color: "white" }}>Under Construction!</h4>
            </Button>
            <br />

            {/* <a href='https://mobishaala.com/'><img style={{ height: "50px", width: "50px" }} src={logo} class="logo-img"></img> </a>
          <h6 style={{ fontSize: "13px" }} className="card-title">Mobishaala Training Centre</h6>
          <p style={{ fontSize: "12px", textAlign: 'left' }} className="card-title "> Yesterday at 08:44 PM   </p>
          <p className='borderr' style={{ border: "2px solid #8A0727", fontSize: "12px" }}>Add Institute</p>

          <p style={{ textAlign: "left" }} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          </h3>
        </div>
        {/*  */}
        {/* <div className="footer-buttons">
        <div className="flex-box">
          <Favorite />
          {likes}
        </div>
       
        <div className="flex-box">
          <Comment />
          {comment}
        </div>
       
        <div className="flex-box">
          <Send />
          {shares}
        </div>
      </div> */}



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
    </>
  );
}
