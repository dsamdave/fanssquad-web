import React from 'react'
import LoginMain from '../components/Login/LoginMain'
import LoginModal from '../components/Login/LoginModal'
import RegisterModal from '../components/RegisterComponents/RegisterModal'

const LoginPage = () => {
  return (
    <div className="color-theme-blue">
        <LoginMain />

        <LoginModal />

        <RegisterModal />

    </div>
  )
}

export default LoginPage