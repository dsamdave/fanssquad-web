import React from 'react'
import { Zap } from 'react-feather'
import { Link } from "react-router-dom"
import RegisterForm from './RegisterForm'

const RegisterMain = () => {
  return (
    <div className="main-wrap">

        <div className="nav-header bg-transparent shadow-none border-0">
            <div className="nav-top w-100">
                <Link to="/">
                    <i className=" text-success display1-size me-2 ms-0">
                        <Zap />
                    </i>
                    <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Fanssquad</span> </Link>
                <Link to="#" className="mob-menu ms-auto me-2 chat-active-btn"><i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
                <Link to="default-video.html" className="mob-menu me-2"><i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
                <Link to="#" className="me-2 menu-search-icon mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
                <button className="nav-menu me-0 ms-2"></button>

                <Link to="#" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"  data-bs-toggle="modal" data-bs-target="#Modallogin">Login</Link>

                <Link to="#" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"  data-bs-toggle="modal" data-bs-target="#Modalregister">Register</Link>

            </div>
            
            
        </div>

        <div className="row">
            <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat" style={{backgroundImage: "url(images/login-bg-2.jpg)"}}></div>
            <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                <div className="card shadow-none border-0 ms-auto me-auto login-card">
                    <div className="card-body rounded-0 text-left">
                        <h2 className="fw-700 display1-size display2-md-size mb-4">Create <br />your account</h2>                        
                        
                        <RegisterForm />
                         
                        <div className="col-sm-12 p-0 text-left">
                            
                            <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Already have account <Link to="/login" className="fw-700 ms-1">Login</Link></h6>
                        </div>
                         
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default RegisterMain