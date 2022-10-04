import React from 'react'
import { Link } from "react-router-dom"
import { Settings, PieChart, MessageSquare } from 'react-feather';

const AsideThree = () => {
  return (
    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">

    <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>

    <ul className="mb-1">
        <li className="logo d-none d-xl-block d-lg-block"></li>

        <li>
            <Link to="/settings" className="nav-content-bttn open-font h-auto pt-2 pb-2">
                <i className="font-sm me-3 text-grey-500">
                    <Settings />
                </i>
                <span>Settings</span>
            </Link>
        </li>

        <li>
            <Link to="/analytics" className="nav-content-bttn open-font h-auto pt-2 pb-2">
                <i className="font-sm me-3 text-grey-500">
                    <PieChart />
                </i>
                <span>Analytics</span>
            </Link>
        </li>

        <li>
            <Link to="/message" className="nav-content-bttn open-font h-auto pt-2 pb-2">
                <i className="font-sm me-3 text-grey-500">
                    <MessageSquare />
                </i>
                <span>Chat</span>
                <span className="circle-count bg-warning mt-0">23</span>
            </Link>
        </li>
    </ul>
</div>
  )
}

export default AsideThree