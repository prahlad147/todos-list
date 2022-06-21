import React from 'react'
import image from './image2.jpeg'
// import '../App.css';
// import './Card2.css';
import logo from './logo.png';

export const Notifications = () => {
  return (
      <>
      {/* {function myfunction(){
        document.getElementById("demo").innerHTML ="Hello World";
      }} */}
      <center>
    
     





    
    {/* <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav> */}


      {/* <p className="text"> Hello World</p> */}
    <div>
    {/* <p>Hello World</p> */}
        <div className="card dimension">
  {/* <img src={image} className="card-img-top" alt="..." /> */}

  <div className="card-body">
  {/* <img src={logo}  className="logo"/>  */}
    <div class = "container">
      <div class = "row">
        <div class="col-3">
        <a href='https://mobishaala.com/'><img src={logo} class="logo-img"></img> </a>  
        </div>
        <div class ="col-9">
        <h6 className="card-title">Mobishaala Training Centre</h6>
        <p className="card-title"> Yesterday at 08:44 PM   </p>
        </div>
      </div>
    </div>
    <br />

    <nav class="navbar bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand">Notifications</a> */}

    <button type="button" class="btn btn-light position-relative btn-outline-danger">
  Notification
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
    <form class="d-flex" role="search">
      {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
      <i class="bi bi-search"></i>
      {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
    </form>
  </div>
</nav>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
{/* 
      <i class="bi bi-share-fill">     4 Share</i>
      </div>
    </div>
    </div> */}

    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Notifaction 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Notification 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Notification 3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Notification 4
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the fourth item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Notification 5
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the fifth item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
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

export default Notifications;
