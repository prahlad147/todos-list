import React from 'react'
import image from './image2.jpeg'
// import '../App.css';
import './Card2.css';
import logo from './logo.png';

export const Card4 = () => {
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
    {/* <p className="card-text">Quiz Time</p>
    <select class="form-select" aria-label="Default select example">
  <option selected>Question</option>
  <option value="1">Option: 1</option>
  <option value="2">Option: 2</option>
  <option value="3">Option: 3</option>
  
</select> */}

<p className="card-text">Quiz Time</p>
<div class="card-Quiz">
  <div class="list-group list-group-flush">
  <ul class="list-group list-group-flush">
<li class="list-group-item">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Option 1
  </label>
</div>
</li>
    <li class="list-group-item"><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Option 2
  </label>
</div></li>
    <li class="list-group-item"><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Option 3
  </label>
</div></li>
    <li class="list-group-item"><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Option 4
  </label>
</div></li>
  </ul>
</div>
</div>


{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Questions
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}

{/* <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne"/>
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </div>
</div>     */}



{/* 
<div className="card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div class="card-footer">
    Card footer
  </div>
</div> */}


    <br/>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        View Explanation
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Explantion of the Answer: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatibus dolor, est culpa error dicta iusto modi odit reiciendis tempore animi labore architecto aperiam excepturi ipsam. Fugit explicabo enim recusandae.
        <br />
        <br />
        <h5> Video Explanation</h5>
        <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  </div>

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
