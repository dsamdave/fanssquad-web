import React from 'react'
import { Link } from "react-router-dom"
import { Mail, Lock } from 'react-feather'

const LoginForm = () => {
  return (
    <form>
                            
        <div className="form-group icon-input mb-3">
            <i >
                <Mail className="font-sm text-grey-500 pe-0 mb-2"/>
            </i>
            <input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder="Your Email Address" />                        
        </div>

        <div className="form-group icon-input mb-1">
            <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder="Password" />
            <i >
                <Lock className="font-sm text-grey-500 pe-0 mb-2"/>
            </i>
        </div>

        <div className="form-check text-left mb-3">
            <input type="checkbox" className="form-check-input mt-2" id="exampleCheck5" />
            <label className="form-check-label font-xsss text-grey-500" htmlFor="exampleCheck5">Remember me</label>
            <Link to="/forgot-password" className="fw-600 font-xsss text-grey-700 mt-1 float-right" style={{color: "red"}}>Forgot your Password?</Link>
        </div>


        <div className="col-sm-12 p-0 text-left">
            <div className="form-group mb-1">

                <button type='submit' className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">Login</button>
            </div>

        </div>

    </form>
  )
}

export default LoginForm