import React from 'react'
import "./footer.css"
import logo from './logo-transparent.png'

function Footer() {
  return (
    <div className='footer'>

        <div className='row'>
            <div className='col_12 col-lg-12'>
                <h2>How it works?</h2>
                <p>It’s Affiliating Marketing, for every purchase made by you, I get a commission from Amazon as a marketer.</p>
                <h1>Check out products & shop a lot!</h1>
            </div>
            <div className='col-6'>
                <img src={logo} alt='' width="150px"  />
            </div>
            <div className='col_right_copyright col-6'>
            <p>Hunt Amazon FInds © 2022</p>
            </div>
        </div>

    </div>
  )
}

export default Footer