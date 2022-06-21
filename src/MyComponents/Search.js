import React from 'react'

const Search = () => {
  return (
    <>
    <center>
        <div className='container-fluid mx-auto'>
        <div class="row">
    <div class="col mt-4 ms-4">
    <input class="form-control mx-auto" type="search" placeholder="Search" aria-label="Search"/>
    </div>
    <div class="col mt-3 me--3">
    <i class="bi bi-funnel-fill mx-auto ms-6"></i>
    </div>
  </div>
    </div>
</center>


    {/* <div class="container-fluid">
  <div class="row">
    <div class="col">ALL</div>
    <div class="col">LIVE</div>
    <div class="col">RECORDED</div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
    </div>
    </center> */}

    </>
  )
}

export default Search