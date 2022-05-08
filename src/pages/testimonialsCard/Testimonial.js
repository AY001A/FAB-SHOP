import React from 'react'

const Testimonial = ({ name, img, desc, job}) => {
  return (
    
        <div className="col-sm-4 mt-3">
            <div className="card border-1" >
                <div className="card-body">                                
                    <p class="card-text text-center p-4 mb-5">
                        {desc}
                    </p>

                    <div className="img-Container d-flex justify-content-center my-4">
                        <img src={img} className="card-img mt-5 rounded-circle" style={{ height:"80px", width:"80px" }} alt="..." />
                    </div>

                    <h3 className="card-title text-center fs-5" style={{ width: "100%"}}>{name}</h3>
                    <p className='card-text text-muted text-center pb-5 fs-6'>{job}</p>            
                </div>
            </div>
        </div>
  )
}

export default Testimonial