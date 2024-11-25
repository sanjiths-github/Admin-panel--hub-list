import React from 'react'
import { FaSearch } from 'react-icons/fa'
import'./ServiceRequest.css'

const ServiceRequest = () => {
  return (
    <div >
    <div className='search-bar'>
    <input type='text' placeholder='Search' className='search-input'/>

<FaSearch className='search-icon'/>

    </div>
    <div className="service-request-text">
    Service Request
  </div>

  <div className='service-request-box'>
  
  <div className='kerala-hostel-text'>Kerala Hostel Kochi</div>

  <div className='sub-text'>#123445</div>

  <div className='washer-text'>Washer</div>

  <div className='number-text1'>001</div>
  <div className='number-text2'>#12343</div>

  <div className='date'>12/03/2024</div>
  <div className='time'>10:20 am</div>

  
  </div>

    </div>
  )
}

export default ServiceRequest
