import React from 'react'
import LoginModal from '../components/Login/LoginModal'
import RegisterMain from '../components/RegisterComponents/RegisterMain'
import RegisterModal from '../components/RegisterComponents/RegisterModal'

const RegisterPage = () => {
  return (
    <div className="color-theme-blue">
        <RegisterMain />

        <RegisterModal />

        <LoginModal />

    </div>
  )
}

export default RegisterPage