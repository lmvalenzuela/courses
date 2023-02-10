import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const TopBarComponent = (): JSX.Element => {
  return (
    <div className="row h-10 border pt-3">
      <div className="col-3 row">
        <div className="col-2 py-1 text-end">
          <FontAwesomeIcon
            icon={solid('star')}
            className="text-info bg-info bg-opacity-25 fa-2x p-1"
          />
        </div>
        <div className="col-10 text-start position-relative my-2">
          <a href="src/components#" className="fs-6 fw-bold text-decoration-none text-black">
            Estudiar México City
          </a>
        </div>
      </div>
      <div className="col mx-4 my-1 text-end">
        <a href="src/components#" className="fs-6">
          Back to Advisor for Agents
        </a>
      </div>
    </div>
  )
}

export default TopBarComponent
