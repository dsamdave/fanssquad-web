import React from 'react'
import { Link } from "react-router-dom"
import { Tv, Users, Globe, Zap, User } from 'react-feather';

const AsideOne = () => {
  return (
    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">

        <div className="nav-caption fw-600 font-xssss text-grey-500"><span>New </span>Feeds</div>

        <ul className="mb-1 top-content">
            <li className="logo d-none d-xl-block d-lg-block"></li>
            <li>
                <Link to="/newsfeed" className="nav-content-bttn open-font" >
                    <i className=" btn-round-md bg-blue-gradiant me-3">
                        <Tv className='mb-2'/>
                    </i>
                    <span>Newsfeed</span>
                </Link>
            </li>

            <li>
                <Link to="/find-users" className="nav-content-bttn open-font" >
                    <i className=" btn-round-md bg-red-gradiant me-3">
                        <Users className='mb-2'/>
                    </i>
                    <span>Find Users</span>
                </Link>
            </li>

            <li>
                <Link to="/default-storie" className="nav-content-bttn open-font" >
                    <i className=" btn-round-md bg-gold-gradiant me-3">
                        <Globe className='mb-2'/>
                    </i>
                    <span>Explore Stories</span>
                </Link>
            </li>

            <li>
                <Link to="/default-group" className="nav-content-bttn open-font" >
                    <i className=" btn-round-md bg-mini-gradiant me-3">
                        <Zap className='mb-2'/>
                    </i>
                    <span>Popular Groups</span>
                </Link>
            </li>

            <li>
                <Link to="/profile" className="nav-content-bttn open-font">
                    <i className="btn-round-md bg-primary-gradiant me-3">
                        <User className='mb-2'/>
                    </i>
                    <span>Author Profile </span>
                </Link>
            </li>                        
        </ul>
    </div>
  )
}

export default AsideOne