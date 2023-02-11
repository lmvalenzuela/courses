import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const MainPanelNav = (): JSX.Element => {
  return (
    <div className="card-header">
      <nav className="nav nav-tabs flex-row">
        <li className="nav-item">
          <a className="nav-link active text-black" aria-current="page" href="#">
            <FontAwesomeIcon icon={regular('comment')} className="mirror" />&nbsp;Language
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-none text-black" href="#">
            <FontAwesomeIcon icon={solid('graduation-cap')} />&nbsp;Higher Ed.
          </a>
        </li>
        <li className="nav-item flex-grow-0 ms-auto">
          <a className="nav-link text-decoration-none text-black" href="#">
            <FontAwesomeIcon icon={regular('user')} />&nbsp;
            <span className="fi fi-mx"></span>&nbsp;México, Onshore
          </a>
        </li>
      </nav>
    </div>
  )
}

export default MainPanelNav
