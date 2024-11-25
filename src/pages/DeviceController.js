import React from 'react'
import './DeviceController.css'
import { FaSearch } from 'react-icons/fa'
import Loading from './Loading'
const DeviceController = () => {
  return (
    <div>
      <div className="device-text1">
        Device controls
      </div>

      <div className='device-container1'>
        <div className='search-bar2'>
          <input type='text1' placeholder='Device ID...' className='search-input1' />
          <button className="search-bar-button">Search Here</button>
        </div>
      </div>

      <div className='device-text'>Device 01</div>
      <div className='status-text'>status</div>

      <div className='Maintenance'>

        <input type='text2' placeholder='' className='maintainence1' />

      </div>
      <div className='Maintenance-working'>

        <input type='text2' placeholder='' className='maintainence2' />

      </div>

      <div className='HubName'>
        <div className='Hub-Name'>Hub Name </div>
        <input type='' placeholder='' />

      </div>


      <div className='type'>
        <div className='type-device'>Type of Device
          <button className="type-button">Washer</button>
        </div>
      </div>

      <div className='Hub'>
        <div className='Hub-ID'>Hub ID </div>
        <input type='text2' placeholder='' className='search-input' />

      </div>

      <div className='Device'>
        <div className='device-ID'>Device ID </div>
        <input type='text' placeholder='' className='search-input' />
      </div>

      <div className='jobstatus-box'>
        <div className='text1'>Running Job Status</div>
        <div className='sub-text1'>Heavy wash</div>
        <div className='sub-text2'>Running (48% completed)</div>
        <div className='loading'><Loading /></div>

        <div className='Start-Time'>Start Time</div>
        <div className='Time1'>10:50</div>

        <div className='End-Time'>End Time</div>
        <div className='Time2'>10:50</div>

      </div>
      <div className='Live-Monitor'>
        Live Monitor</div>


      <div className='button-1'>
        <div className='button-text1'>Door Status
          <button className="button1">Closed</button>
        </div>
      </div>

      <div className='button-2'>
        <div className='button-text2'>Water Level
          <button className="button2">12%</button>
        </div>
      </div>

      <div className='button-3'>
        <div className='button-text3'>Motor RPM
          <button className="button3">ORPM</button>
        </div>
      </div>

      <div className='Quick-Actions'>
        Quick Action</div>

      <div className='Q-test'>Running Job
      </div>

      <div className='button-Q'>
        <button className="buttonQ">Stop Job</button>
      </div>

      <div className='button-Q1'>
        <button className="buttonQ1">Pause Job</button>
      </div>

      <div className='button-Q2'>
        <button className="buttonQ2">Start Job</button>
      </div>

      <div className='button-Q3'>
        <button className="buttonQ3">Re-Start Job</button>
      </div>
      

      <div className='button-Q4'>
      <button className="buttonQ4">Apply</button>
    </div>

    <div className='heardware'>
    Heardwear Controls</div>






    </div>

    






  )
}

export default DeviceController
