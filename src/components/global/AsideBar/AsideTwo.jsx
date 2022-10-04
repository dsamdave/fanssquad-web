import React from 'react'
import { Link } from "react-router-dom"
import { Mail, Award, MapPin, Youtube } from 'react-feather';


const AsideTwo = () => {
  return (
    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">

        <div className="nav-caption fw-600 font-xssss text-grey-500"><span>More </span>Pages</div>
        
        <ul className="mb-3">
            <li>
                <Link to="/messages" className="nav-content-bttn open-font">
                    <i className="font-xl text-current me-3">
                        <Mail />
                    </i>
                    <span>Messages</span>
                    <span className="circle-count bg-warning mt-1">584</span>
                </Link>
            </li>

            <li>
                <Link to="/subcription" className="nav-content-bttn open-font">
                    <i className="font-xl text-current me-3">
                        <Award />
                    </i>
                    <span>Subscriptions</span>
                </Link>
            </li>

            <li>
                <Link to="/event" className="nav-content-bttn open-font">
                    <i className="font-xl text-current me-3">
                        <MapPin />
                    </i>
                    <span>Latest Event</span>
                </Link>
            </li>

            <li>
                <Link to="/live-stream" className="nav-content-bttn open-font">
                    <i className="font-xl text-current me-3">
                        <Youtube />
                    </i>
                    <span>Live Stream</span>
                </Link>
            </li>                        
        </ul>
    </div>
  )
}

export default AsideTwo