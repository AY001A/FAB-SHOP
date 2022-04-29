import React from 'react'
import Footer from '../../components/footer/Footer'
import CustSupIcon from '../../assets/icons/CustSupIcon.svg'
import './customSupport.scss'
import Vector from '../../assets/icons/Vector.svg'

const CustomerSupport = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 logo-style'>
                      <img src={CustSupIcon} className='' alt='Support Icon' /> 
                      <h4 className='title'>Help</h4>
                      <h4 className='title2'>Center</h4> 

                    </div>
                </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 support'>
                     <h4>General Support</h4>
                    </div>
                </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 dear-customer'>
                     Dear Customer, how may we help you?
                    </div>
                </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 textarea'>
                    <div className="form-group">
                    <label for="comment"></label>
                    <textarea className="form-control" rows="5" id="comment" placeholder='Tell us about your complaint' />


                    <p className='button'>
                    <button type='submit' className='btn btn-warning'>
                        <img src={Vector} className='vectorImg' alt='telegram image' />
                    Send Complaint
                    </button>
                    </p>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default CustomerSupport