import React from 'react'
import CustSupIcon from '../../assets/icons/CustSupIcon.svg'
import './customSupport.scss'
import Vector from '../../assets/icons/Vector.svg'

const CustomerSupport = () => {
  return (
    <div className="help container">
                <div className="row">
                    <div className="col-12">
                        <div className="helpImg d-flex  d-flex justify-content-center">
                            <div className="img-container mt-5">
                                <img src={CustSupIcon} className='' alt='help-Icon' /> 
                            </div>
                            <div className="justify-content-center helpText">
                                <h4 className="fw-semibold">Help</h4>
                                <h4 className="fw-semibold">Center</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
                <form>
                    <div className="row form-check form-switch mt-4 mt-xs-3">
                        <div className="d-flex justify-content-between">
                            <div class="form-check">
                                <input class=" form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="complaint fs-6 form-check-label" for="flexRadioDefault1">
                                    General Complaint
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="complaint fs-6 form-check-label" for="flexRadioDefault2">
                                    Product Complaint
                                </label>
                            </div>
                            <div class="form-check">
                                <input class=" form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="complaint fs-6 form-check-label" for="flexRadioDefault2">
                                    Service Complaint
                                </label>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="row">
                        <div class="mb-3">
                            <label htmlFor="inputComplaint" className="fs-6 m-3 form-label">Dear customer, how may we help you?</label>
                            <textarea className="form-control border-0 p-2" id="inputComplaint" placeholder="Tell us about your complaint" rows="7"></textarea>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="submit" className='btn btn-warning p-2'><img src={Vector} className='me-2' alt='telegram image' />Send complaint</button>
                        </div>
                    </div>
                </form>
    </div>

    
    
  )
}

export default CustomerSupport