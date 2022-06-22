import React from 'react'

const Survey = () => {
    return (
        <>
            <center>

                <p><strong>WELCOME TO SURVEY PAGE</strong></p>
                <div class="card text-center widths">
                    <div class="card-header surveys1">
                        <strong> SURVEY </strong>
                    </div>
                    <center>
                        <div class="card surveys mt-3">
                            <div class="card-body surveys3">
                                Some Dummy Text <input type="checkbox"></input>
                            </div>

                        </div>
                        <div class="card surveys mt-3">
                            <div class="card-body surveys3">
                                Some Dummy Text <input type="checkbox"></input>
                            </div>

                        </div>
                        <div class="card surveys mt-3">
                            <div class="card-body surveys3">
                                Some Dummy Text <input type="checkbox"></input>
                            </div>

                        </div>
                        <div class="card surveys mt-3">
                            <div class="card-body surveys3">
                                Some Dummy Text <input type="checkbox" className='alignc'></input>
                            </div>

                        </div>
                        <div class="card surveys2 mt-3">
                            <div class="card-body">
                                Submit
                            </div>

                        </div>

                        <button type="button" class="btn btn-danger mt-3 borderr ps-3 pe-3 buttons"><strong>Later</strong></button>
                    </center>
                </div>
            </center>

        </>
    )
}

export default Survey;
