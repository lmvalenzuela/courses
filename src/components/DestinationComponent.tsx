import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const DestinationComponent = (): JSX.Element => {
  return (
    <div className="input-group">
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          id="destinationInput"
        />
        <label form="destintationInput">Destination</label>
      </div>
      <span className="input-group-text">
        <FontAwesomeIcon icon={solid('search')} />
      </span>
    </div>
  )
}

export default DestinationComponent
