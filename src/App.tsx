import * as React from 'react'
import LeftBarComponent from './components/LeftBarComponent'
import TopBarComponent from './components/TopBarComponent'
import './App.scss'
import MainPanelComponent from './components/MainPanelComponent'

const App = (): JSX.Element => {
  return (
    <div className="container-fluid vh-100 m-0 p-0">
      <TopBarComponent />
      <div className="row container-fluid m-0 p-0 h-90">
        <LeftBarComponent />
        <MainPanelComponent />
      </div>
    </div>
  )
}

export default App
