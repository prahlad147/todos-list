import React from 'react'
import './style.css';

const Search = () => {
    return (
        <>
            <div class="container dimension">
                <div class="row">
                    <div class="col texta mt-3"><p className='borderr' style={{ border: "2px solid #E9E9E9", }}>All</p></div>
                    <div class="col texta mt-3"><p className='borderr' style={{ border: "2px solid #E9E9E9", }}>Added</p></div>
                    <div class="col texta mt-3"><p className='borderr' style={{ border: "2px solid #E9E9E9", }}> <input type="text" placeholder="Search.." style={{ width: "150px" }} /></p></div>
                    <div class="col texta mt-3"><p><i class="bi bi-funnel-fill"></i></p></div>
                </div>
            </div>
        </>
    )
}

export default Search
