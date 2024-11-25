import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './Hublist.css'
import Table from './Table'

const HubList = () => {
  return (
    <div>
    <div className='search'>
    <input type='text' placeholder='Search' className='input'/>

<FaSearch className='search-icon'/>

    </div>
    <div className='Device-Details'> Device Details</div>
    <div className='Device-Number'> Device 01</div>
    

    <div className="column-container">
    <div className="column-item">
      <div className="label">Device : </div>
      <div className="box1">
   
      </div>
    </div>
    <div className="column-item">
      <div className="label">Hub ID : </div>
      <div className="box"></div>
    </div>
    <div className="column-item">
      <div className="label">Service ID :</div>
      <div className="box"></div>
    </div>
  </div>

  <div className='status'>status</div>
  <div className="box4"></div>
  <div className="box5"></div>



  <div className="box-container">
  <div className="box6">
    <div className="box-content">
      <div className="main-text">Today</div>
      <div className="sub-text">9</div>
    </div>
  </div>
  <div className="box6">
    <div className="box-content">
      <div className="main-text">Today</div>
      <div className="sub-text">79</div>
    </div>
  </div>
  <div className="box6">
    <div className="box-content">
      <div className="main-text">Today</div>
      <div className="sub-text">200</div>
    </div>
  </div>
</div>


    <Table/>
    </div>
  )
}

export default HubList
