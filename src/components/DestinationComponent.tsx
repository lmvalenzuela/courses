import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const DestinationComponent = (): JSX.Element => {
  return (
    <div className="dropdown">
      <div className="input-group">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            id="destinationInput"
          />
          <label htmlFor="destinationInput">Destination</label>
        </div>
        <button className="btn btn-outline-info">
          <span className="input-group-text">
            <FontAwesomeIcon icon={solid('search')} />
          </span>
        </button>
      </div>
    </div>
  )
}

export default DestinationComponent
