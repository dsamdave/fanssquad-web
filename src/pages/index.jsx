import React from 'react'
import NavigationTop from '../components/global/navigation/NavigationTop'
import RegisterPage from './register'

const HomePage = () => {
  return (
    <div className='color-theme-blue mont-font'>
      <div className='main-wrapper'>
        
        <NavigationTop />

        <div style={{marginTop: "45px"}}>

          <RegisterPage />
        </div>


      </div>
    </div>
  )
}

export default HomePage