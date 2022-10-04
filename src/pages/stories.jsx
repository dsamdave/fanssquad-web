import React from 'react'
import AsideBarMain from '../components/global/AsideBar/AsideBarMain'
import NavigationTop from '../components/global/navigation/NavigationTop'
import StoriesTop from '../components/storiesComponents/StoriesTop'

const StoriesPage = () => {
  return (
    <div classNameName="color-theme-blue mont-font">
        <div classNameName="main-wrapper">

            <NavigationTop />


            <AsideBarMain />

            <div className="main-content right-chat-active">
            
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <div className="col-xl-12">

                                <StoriesTop />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoriesPage