import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './App.css'

function App () {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-10 border">
        <div className="col-1">
          <FontAwesomeIcon icon={solid('star')} />
        </div>
        <div className="col-8">Main top area</div>
        <div className="col-3">
          <a href="#">Back to Edvisor for Agents</a>
        </div>
      </div>
      <div className="row h-90">
        <div className="col-2 h-100 border ">Left bar</div>
        <div className="col h-100 border rightBar">Right bar</div>
      </div>
    </div>
  )
}

export default App
