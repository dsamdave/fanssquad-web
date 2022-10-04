import React from 'react'
import { Link } from "react-router-dom"
import {  Search, Filter  } from 'react-feather';

const StoriesTop = () => {
  return (
    <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
        <div className="card-body d-flex align-items-center p-0">
            <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">Stories</h2>
            <div className="search-form-2 ms-auto">
                <i className="font-xss">
                    <Search className='mb-5' />
                </i>
                <input type="text" className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" placeholder="Search here." />
            </div>
            <Link to="#" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3">
                <i className="font-xss text-grey-500">
                    <Filter />
                </i>
            </Link>
        </div>
    </div>
  )
}

export default StoriesTop