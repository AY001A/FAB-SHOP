import React from "react";
import Footer from "../../components/footer/Footer";
import CustSupIcon from "../../assets/icons/CustSupIcon.svg";
import Vector from "../../assets/icons/Vector.svg";
import "./help.scss";

const Helppage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 logo-style">
            <img src={CustSupIcon} className="" alt="Support Icon" />
            <h4 className="title">Help</h4>
            <h4 className="title2">Center</h4>
          </div>
        </div>
      </div>     
        <div className="row">
          <div className="col d-none d-sm-flex support d-flex justify-content-around mt-4">
            <div class="form-check">
              <input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label class="form-check-label fs-5" for="flexRadioDefault1">
              General complaints
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label class="form-check-label fs-5" for="flexRadioDefault2">
                Product complaints
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label class="form-check-label fs-5" for="flexRadioDefault2">
                Service complaints
              </label>
            </div>
          </div>

          <div class="row d-sm-none container mt-3 ms-1 border-0">
            <select class="form-select  border-0" aria-label="Default select example">
              <option selected>Open this select complaints</option>
              <option className='border-0' value="generalComplaints">General Complaints</option>
              <option className='border-0' value="productComplaints">Product Complaints</option>
              <option className='border-0' value="serviceComplaints">Service Complaints</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div class="my-3">
              <label for="exampleFormControlTextarea1" class="form-label fs-6 ms-3">Dear customer, how may we help you?</label>
              <textarea class="form-control border-0 " id="exampleFormControlTextarea1" placeholder="Tell us about your complaint" rows="6"></textarea>
            </div>

          
          </div>
          
          
          <button type="submit" className="btn btn-warning px-5">
                  <img
                    src={Vector}
                    className="vectorImg"
                    alt="telegram image"
                  />
                  Send Complaint
                </button>
          

          
        </div>
      

 
        <div className="row">
          <div className="col-lg-12 dear-customer">
            Dear Customer, how may we help you?
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 textarea">
            <div className="form-group">
              <label for="comment"></label>
              <textarea
                className="form-control"
                rows="5"
                id="comment"
                placeholder="Tell us about your complaint"
              />

              <p className="button">
                <button type="submit" className="btn btn-warning">
                  <img
                    src={Vector}
                    className="vectorImg"
                    alt="telegram image"
                  />
                  Send Complaint
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helppage;
