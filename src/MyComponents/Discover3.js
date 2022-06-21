import React from 'react'
import image from './image2.jpeg'
// import '../App.css';
// import './Card2.css';
import logo from './logo.png';

export const Discover3 = () => {
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
        <div className="card">
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

    
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>


    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <i class="bi bi-plus"></i> Civil Services
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <ul>
          <li>UPSC</li>
          <li>BPSC</li>
        </ul>
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <i class="bi bi-plus"></i> Engineering
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <ul>
          <li>JEE</li>
          <li>GATE</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <i class="bi bi-plus"></i> Medical
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <ul>
          <li>NEET</li>
          <li>AIIMS</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<br />

    <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Civil Services</a></li>
    <li class="breadcrumb-item"><a href="#">UPSC</a></li>
    <li class="breadcrumb-item active" aria-current="page">History</li>
  </ol>
</nav>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <img src={image} className="card-img-top" alt="..." />
    <br/>
    <br/> */}
    <strong>
    <p>Video Exaplanation 1</p>
    <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
<br />

<p>Video Exaplanation 2</p>
    <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
<br />

<p>Video Exaplanation 3</p>
    <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>

</strong>
<br />

<p><strong>Carousel Mode</strong></p>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
    </div>
    <div class="carousel-item">
    <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
    </div>
    <div class="carousel-item">
    <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br />
    {/* <div class ="container">
    <div class ="row">
      <div class = "col">
      <p><i class="bi bi-heart-fill icon-red"></i>     45 Likes</p>
      </div>
      <div class= "col">
      </div>
      <div class = "col">
      {/* <a href="https:/www.google.com" class="link-primary">Primary link</a> */}

      {/* <i class="bi bi-share-fill">     4 Share</i>
      </div>
    </div>
    </div> */} 
    <center>
    <div class= "container">
    <div class= "row">
    <div class = "column">
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
</div>
</div>
</center>

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

export default Discover3;