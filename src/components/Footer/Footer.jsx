import React from 'react'

export default function Footer() {
  return (
    <div className='bg-light py-5'>
        <div className='container'>
        <h4>Get the FreshCart app</h4>
        <p>We Will send you a link, open it on your phone to download the app</p>
        <div className='row'>
            <div className='col-md-10'>
            <input className='w-100 form-control mx-3' type="text" placeholder='Email...' />
            </div>
            <div className='col-md-2'>
                <button className='btn bg-main text-white w-100 mx-2'>Share App Link</button>
            </div>
        </div>
        <hr />
        <div className='d-flex justify-content-between my-4'>
            <div className='d-flex'>
                <p>Payment Partners</p>
                <div>
                <i className="mx-3 fs-4 fa-brands fa-amazon-pay"></i>
                <i className="mx-3 fs-4 fa-brands fa-apple-pay"></i>
                <i className="mx-3 fs-4 fa-brands fa-paypal"></i>
                <i className="mx-3 fs-4 fa-brands fa-google-pay"></i>
                </div>
            </div>
            <div className='d-flex'>
                <p>Get deliveries with FreshCart</p>
                <div>
                <i className="mx-3 fs-4 fa-brands fa-google-play"></i>
                <i className="mx-3 fs-4 fa-brands fa-apple"></i>
                </div>
            </div>
        </div>
        <hr />
        </div>
    </div>
  )
}
