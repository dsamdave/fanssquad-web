import React from 'react'
import AsideOne from './AsideOne'
import AsideThree from './AsideThree'
import AsideTwo from './AsideTwo'

const AsideBarMain = () => {
  return (
    <nav className="navigation scroll-bar">
        <div className="container ps-0 pe-0">
            <div className="nav-content">

                <AsideOne />

                <AsideTwo />

                <AsideThree />

            </div>
        </div>
    </nav>
  )
}

export default AsideBarMain