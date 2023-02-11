import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const ProviderComponent = (): JSX.Element => {
  return (
    <div className="input-group">
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder="Any"
          id="destinationInput"
        />
        <label form="destintationInput">Provider</label>
      </div>
      <span className="input-group-text">
        <FontAwesomeIcon icon={solid('search')} />
      </span>
    </div>
  )
}

export default ProviderComponent
