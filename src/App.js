import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './App.scss'

function App () {
  return (
    <div className="container-fluid vh-100 g-0">
      <div className="row h-10 border pt-3">
        <div className="col-3 row">
          <div className="col-2 py-1 text-end">
            <FontAwesomeIcon icon={solid('star')} className="text-info bg-info bg-opacity-25 fa-2x p-1"/>
          </div>
          <div className="col-10 text-start position-relative my-2">
            <a href="#" className="fs-6 fw-bold text-decoration-none text-black">Estudiar México City</a>
          </div>
        </div>
        <div className="col mx-4 my-1 text-end">
          <a href="#" className="fs-6">Back to Advisor for Agents</a>
        </div>
      </div>
      <div className="row h-90">
        <div className="col-2">
          <div className="input-group">
            <button className="btn dropdown-toggle w-100 text-start" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={solid('search')} className="fa-2x"/>
              <span className="fs-5">Search</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Courses</a></li>
              <li><a className="dropdown-item" href="#">Accommodation</a></li>
              <li><a className="dropdown-item" href="#">Insurance</a></li>
            </ul>
          </div>
        </div>
        <div className="col h-100 border rightBar">Right bar</div>
      </div>
    </div>
  )
}

export default App
