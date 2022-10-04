import React from 'react'
import { Link } from "react-router-dom"
import LoginForm from './LoginForm'
import { Zap  } from 'react-feather';


const LoginMain = () => {
  return (
    <div class="main-wrap">

        <div class="nav-header bg-transparent shadow-none border-0">
            <div class="nav-top w-100">
                <Link to="/">
                    <i className=" text-success display1-size me-2 ms-0">
                        <Zap />
                    </i>
                    <span class="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Fanssquad</span> </Link>
                <Link to="#" class="mob-menu ms-auto me-2 chat-active-btn"><i class="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
                <Link to="default-video.html" class="mob-menu me-2"><i class="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
                <Link to="#" class="me-2 menu-search-icon mob-menu"><i class="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
                <button class="nav-menu me-0 ms-2"></button>

                <Link to="#" class="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"  data-bs-toggle="modal" data-bs-target="#Modallogin">Login</Link>
                <Link to="#" class="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"  data-bs-toggle="modal" data-bs-target="#Modalregister">Register</Link>

            </div>
            
            
        </div>

        <div class="row">
            <div class="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat" style={{backgroundImage: "url(images/login-bg.jpg)"}}></div>
            <div class="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                <div class="card shadow-none border-0 ms-auto me-auto login-card">
                    <div class="card-body rounded-0 text-left">
                        <h2 class="fw-700 display1-size display2-md-size mb-3">Login into <br />your account</h2>
                        

                        <LoginForm />
                         
                        <div class="col-sm-12 p-0 text-left">
                            
                            <h6 class="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Dont have account <Link to="/register" class="fw-700 ms-1">Register</Link></h6>
                        </div>
                        <div class="col-sm-12 p-0 text-center mt-2">
                            
                            <h6 class="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">Or, Sign in with your social account </h6>
                            <div class="form-group mb-1"><Link to="#" class="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"><img src="images/icon-1.png" alt="icon" class="ms-2 w40 mb-1 me-5" /> Sign in with Google</Link></div>

                            {/* <div class="form-group mb-1"><Link to="#" class="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "><img src="images/icon-3.png" alt="icon" class="ms-2 w40 mb-1 me-5" /> Sign in with Facebook</Link></div> */}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default LoginMain