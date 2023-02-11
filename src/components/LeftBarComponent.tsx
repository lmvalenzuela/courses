import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const LeftBarComponent = (): JSX.Element => {
  return (
    <div className="col-2 m-0 p-0">
      <div className="input-group">
        <button className="btn dropdown-toggle text-start" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon={solid('search')} className="fa-2x"/>
          <span className="fs-5">Search</span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="src/components#">Courses</a></li>
          <li><a className="dropdown-item" href="src/components#">Accommodation</a></li>
          <li><a className="dropdown-item" href="src/components#">Insurance</a></li>
        </ul>
      </div>
    </div>
  )
}

export default LeftBarComponent
