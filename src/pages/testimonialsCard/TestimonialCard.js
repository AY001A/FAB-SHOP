import React from 'react'
import './testimonial.scss'
import {data} from './testimonyData'
import Testimonial from './Testimonial';

const TestimonialCard = () => {
  return (
    <>
        <div className="testimonial py-5 px-2">
          <p className="text-center testimonialTitle">WHAT OUR CUSTOMERS SAY</p>
            <div className="row p-3">
                    {data.map((d) => (
                        <Testimonial key={d.id} img={d.img} desc={d.desc} name={d.name} job={d.job}/>
                    ))}  
            </div>
        </div>
        
    </>
  )
}

export default TestimonialCard