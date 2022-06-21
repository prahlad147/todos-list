import React from 'react'
// import Lectures from '../Lectures';

const LNQN = () => {
  return (
    <>
    <center>

<div class="shadow-sm mt-3 mb-5 bg-body rounded">
     <div class="row">
    {/* <div class="col">
      <a className="nav-link" href="/Trending">Trending</a>
    </div> */}
    <div class="col">

    <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
  Lectures
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/lectures">ALL</a></li>
    <li><a class="dropdown-item" href="/lectures">LIVE</a></li>
    <li><a class="dropdown-item" href="/lectures">RECORDED</a></li>
  </ul>
</div>
    
    </div>
    <div class="col">
    <a className="nav-link" href="/notes">Notes</a>
    </div>
    <div class="col">
    <a className="nav-link" href="/quizzes">Quizzes</a>
    </div>
    <div class="col">
    <a className="nav-link" href="/notifications">Notifications</a>
    </div>
</div>
    </div>
    </center>
    </>




  )
}

export default LNQN;