import React from 'react'
import image from './image2.jpeg'
// import '../App.css';
import './Card2.css';
import logo from './logo.png';

export const Card3 = () => {
  return (
    <>
      <center>
        {/* <p className="text"> Hello World</p> */}
        <div>
          {/* <p>Hello World</p> */}
          <div className="card">
            {/* <img src={image} className="card-img-top" alt="..." /> */}

            <div className="card-body">
              {/* <img src={logo}  className="logo"/>  */}
              <div class="container">
                <div class="row">
                  <div class="col-3">
                    <a href='https://mobishaala.com/'><img src={logo} class="logo-img"></img> </a>
                  </div>
                  <div class="col-9">
                    <h6 className="card-title">Mobishaala Training Centre</h6>
                    <p className="card-title"> Yesterday at 08:44 PM   </p>
                  </div>
                </div>
              </div>
              <br />
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
              </div>
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
