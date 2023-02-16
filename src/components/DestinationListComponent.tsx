import * as React from 'react'

const DestinationListComponent = (): JSX.Element => {
  return (
    <div className="col displayDestinations overflow-scroll">
      <ul className="list-group">
        <li className="list-group-item">
          Canada
          <ul className="list-group">
            <li className="list-group-item">Item</li>
            <li className="list-group-item">Item</li>
            <li className="list-group-item">Item</li>
          </ul>
        </li>
      </ul>
      <ul className="list-group">
        <li className="list-group-item">
          Usa
          <ul className="list-group">
            <li className="list-group-item">Item</li>
            <li className="list-group-item">Item</li>
            <li className="list-group-item">Item</li>
            <li className="list-group-item">Item</li>
            <li className="list-group-item">Item</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default DestinationListComponent
