import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import 'flag-icons/css/flag-icons.min.css'

import MainPanelNav from './MainPanelNav'
import DestinationComponent from './DestinationComponent'
import ProviderComponent from './ProviderComponent'

const MainPanelComponent = (): JSX.Element => {
  return (
    <div className="col h-100 m-0 p-0 rightBar">
      <div className="container ">
        <div className="row">
          <div className="col container grid gap-5">
            <div className="card shadow mt-6 mx-4">
              <MainPanelNav />
              <div className="card-body">
                <div className="row">
                  <div className="col-11 row">
                    <div className="col-4">
                      <DestinationComponent />
                    </div>
                    <div className="col-4 form-floating">
                      <ProviderComponent />
                    </div>
                    <div className="col-4">
                      <div className="form-floating">
                        <input type="number" className="form-control" placeholder="Min. number of weeks" id="destinationInput" />
                        <label form="destintationInput">Min. number of weeks</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 g-0 m-0 p-0">
                    <button type="button" id="searchBtn" className="btn btn-primary my-2">
                      <FontAwesomeIcon icon={solid('search')} />
                      <span className="small">Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPanelComponent
