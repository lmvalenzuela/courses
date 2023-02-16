import * as React from 'react'

const ResultConfirmComponent = (): JSX.Element => {
  return (
    <div className="card-footer d-flex flex-row justify-content-end mr-2 ">
      <div className="btn-group ">
        <button className="btn btn-outline-secondary" type="button">
          Cancel
        </button>
        <button className="btn btn-outline-secondary" type="button">
          Confirm
        </button>
      </div>
    </div>
  )
}

export default ResultConfirmComponent
