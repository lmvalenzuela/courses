import * as React from 'react'

const DurationComponent = (): JSX.Element => {
  return (
    <div className="form-floating">
      <input
        type="number"
        className="form-control"
        placeholder="Min. number of weeks"
        id="destinationInput"
      />
      <label form="destintationInput">Min. number of weeks</label>
    </div>
  )
}

export default DurationComponent
