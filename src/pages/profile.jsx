import React from 'react'
import AsideBarMain from '../components/global/AsideBar/AsideBarMain'
import NavigationTop from '../components/global/navigation/NavigationTop'

const ProfilePage = () => {
  return (
    <div className="color-theme-blue mont-font">
        <div className="main-wrapper">

            <NavigationTop />


            <AsideBarMain />

            <div className="main-content right-chat-active">
                <h1 style={{margin: "50px"}}>Profile Page</h1>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage