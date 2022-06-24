import React from "react";
import '../style.css';

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

import "./Header.css";

export default function Header() {
  return (
    <div className="video-header">
      <ArrowBackIosIcon />
      <center>


        <div class="container mt-3">
          <div class="row">
            <div class="col-1 me-5 pe-5">

              <p style={{ textAlign: "left", fontSize: "25px", color: "white" }}><strong><i class="bi bi-chevron-left"></i></strong></p>
            </div>
            <div class="col ms-4">
              <p style={{ textAlign: "right", color: "black" }}> <button type="button" class="btn btn-danger buttors">Go to Institute</button></p>
            </div>
          </div>
        </div>
      </center>
      {/* <h3 className="texta" style={{ color: "white" }}>Reel</h3> */}
      {/* <CameraAltIcon /> */}
    </div>
  );
}
