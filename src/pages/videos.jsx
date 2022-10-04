import React from 'react'
import { Link  } from "react-router-dom"
import AsideBarMain from '../components/global/AsideBar/AsideBarMain'
import NavigationTop from '../components/global/navigation/NavigationTop'
import { ChevronRight  } from 'react-feather';
// import VideosTop from '../components/videos/VideosTop';

const VideosPage = () => {
  return (
    <div className="color-theme-blue mont-font">
        <div className="main-wrapper">

            <NavigationTop />


            <AsideBarMain />

            <div className="main-content right-chat-active">
            
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                            <div className="card w-100 border-0 shadow-xss rounded-xxl border-0 p-4 mb-3 overflow-hidden">


                                <div className="card-body p-0 d-flex align-items-center mb-3">
                                    <h4 className="fw-700 font-xss text-grey-900 pt-0 mb-0">Featured Stories</h4>
                                    <Link to="#" className="ps-3 pe-2 lh-32 d-flex align-items-center font-xssss fw-600 alert-primary rounded-xxl text-primary ms-auto">
                                        See more 
                                        <i className="font-xsss ms-1">
                                            <ChevronRight />
                                        </i>
                                    </Link>
                                </div>


                                {/* <VideosTop /> */}


                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideosPage