import React from 'react'
import { Link } from "react-router-dom"

const VideosTop = () => {
  return (
    <div className="card-body p-0 d-block mb-4">
        <div className="owl-carousel owl-theme category-card overflow-visible owl-dot-nav nav-none style2 chatlist">
            <div className="item no-ouline">
                <div className="card w-100 border-0 shadow-none bg-transparent bg-transparent-card">
                    <Link to="#" data-target="#Modalstries" data-toggle="modal" className="w-100 btn-round-lg"><i className="feather-plus text-grey-600 font-md"></i> <span className="d-block fw-600 font-xssss text-grey-600 text-dark mt-0">My story</span></Link>
                </div>
            </div>
            <div className="item dashed online">
                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                    <div className="card-image text-center"><Link to="#" data-target="#Modalstries" data-toggle="modal"><img src="images/user-22.png" alt="sample" className="d-inline p-0" /> <span className="d-block fw-600 font-xssss text-grey-600 text-dark">Ana</span></Link></div>
                </div>
            </div>
            <div className="item online">
                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                    <div className="card-image text-center"><Link to="#" data-target="#Modalstries" data-toggle="modal"><img src="images/user-23.png" alt="sample" className="d-inline p-0" /> <span className="d-block fw-600 font-xssss text-grey-600 text-dark">Devid</span></Link></div>
                </div>
            </div>
            <div className="item online">
                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                    <div className="card-image text-center"><Link to="#" data-target="#Modalstries" data-toggle="modal"><img src="images/user-24.png" alt="sample" className="d-inline p-0" /> <span className="d-block fw-600 font-xssss text-grey-600 text-dark">Anton</span></Link></div>
                </div>
            </div>
            <div className="item">
                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                    <div className="card-image text-center"><Link to="#" data-target="#Modalstries" data-toggle="modal"><img src="images/user-21.png" alt="sample" className="d-inline p-0" /> <span className="d-block fw-600 font-xssss text-grey-600 text-dark">Jane</span></Link></div>
                </div>
            </div>
            <div className="item">
                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                    <div className="card-image text-center"><Link to="#" data-target="#Modalstries" data-toggle="modal"><img src="images/user-25.png" alt="sample" className="d-inline p-0" /> <span className="d-block fw-600 font-xssss text-grey-600 text-dark">Wade</span></Link></div>
                </div>
            </div>
            <div className="item">
                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                    <div className="card-image text-center"><Link to="#" data-target="#Modalstries" data-toggle="modal"><img src="images/user-12.png" alt="sample" className="d-inline shadow p-0" /> <span className="d-block fw-600 font-xssss text-grey-600 text-dark">Cabe</span></Link></div>
                </div>
            </div>

            <div className="item online">
                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                    <div className="card-image text-center"><Link to="#" data-target="#Modalstries" data-toggle="modal"><img src="images/user-24.png" alt="sample" className="d-inline p-0" /> <span className="d-block fw-600 font-xssss text-grey-600 text-dark">Anton</span></Link></div>
                </div>
            </div>
            <div className="item">
                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                    <div className="card-image text-center"><Link to="#" data-target="#Modalstries" data-toggle="modal"><img src="images/user-21.png" alt="sample" className="d-inline p-0" /> <span className="d-block fw-600 font-xssss text-grey-600 text-dark">Jane</span></Link></div>
                </div>
            </div>
            <div className="item">
                <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                    <div className="card-image text-center"><Link to="#" data-target="#Modalstries" data-toggle="modal"><img src="images/user-25.png" alt="sample" className="d-inline p-0" /> <span className="d-block fw-600 font-xssss text-grey-600 text-dark">Wade</span></Link></div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default VideosTop