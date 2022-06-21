import React from 'react'
import image from './image2.jpeg'
import '../App.css';
// import './Card2.css';
import logo from './logo.png';

export const Card3 = () => {
  return (
      <>
      {/* {function myfunction(){
        document.getElementById("demo").innerHTML ="Hello World";
      }} */}
      {/* <center>
      <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <i class="bi bi-collection-play"></i>
    <br />
    {/* <button onClick="myfunction()">LECTURES</button> */}
      {/* LECTURES */}
      {/* <p id="demo"></p> */}
    {/* </div>
    <div class="col">
    <i class="bi bi-journal-text"></i>
    <br />
      NOTES
    </div>
    <div class="col">
    <i class="bi bi-lightbulb"></i>
    <br />
     QUIZZES
    </div>
    <div class="col">
    <i class="bi bi-bell"></i>
    <br />
      NOTIFICATION
    </div>
  </div>
    </div>
    <hr/> */}

    {/* <div class="container">
    <div class="row">
    <div class="col">
    <button type="button" class="btn btn-outline-dark">Live</button>

    </div>
    <div class="col-5">
    <button type="button" class="btn btn-outline-dark">Recorded</button>
    </div>
    <div class="col">
    <i class="bi bi-search"></i>
    <i class="bi bi-funnel-fill"></i>
    </div>
  </div>
</div> */}
<center>
    
    {/* <div class="shadow-sm p-3 mb-5 bg-body rounded">
     <div class="row align-items-start">
    <div class="col">
      Trending
    </div>
    <div class="col">
      Current
    </div>
    <div class="col">
     Politics
    </div>
    <div class="col">
      Discussion
    </div>
</div>
    </div> */}

    {/* <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav> */}


      {/* <p className="text"> Hello World</p> */}
    <div>
    {/* <p>Hello World</p> */}
        <div className="card dimension mb-5">
  {/* <img src={image} className="card-img-top" alt="..." /> */}

  <div className="card-body real">
  {/* <img src={logo}  className="logo"/>  */}
    <div class = "container-fluid">
      <div class = "row">
        <div class="col-1 me-4">
        <a href='https://mobishaala.com/'><img src={logo} class="logo-img"></img> </a>  
        </div>
        <div class ="col-8">
        <h6 className="card-title1 ">Mobishaala Training Centre</h6>
        <p className="card-title2"> Yesterday at 08:44 PM   </p>
        </div>
        <div className='col-1 mt-3 me-2'>
        <button type="button" class="btn btn-outline-danger">Go to institute</button>
        </div>

      </div>
    </div>
    <br />
    <img src={image} className="card-img-top" alt="..." />
    <br/>
    <br/>
    <div class ="container">
    <div class ="row">
      <div class = "col">
      <p><i class="bi bi-heart-fill icon-red"></i>     45 Likes</p>
      </div>
      <div class= "col">
      </div>
      <div class = "col">
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
    <div class="col">

   <a  id = "whatsapp" href='https://api.whatsapp.com/send/?phone=919972968390&text=Hello%21+I+want+to+know+about+mobishaala.com%2C+my+name+is+&app_absent=0'><i class="bi bi-whatsapp">     Join Class</i></a>
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
export default Card3;
