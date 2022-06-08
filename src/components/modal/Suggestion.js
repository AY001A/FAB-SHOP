import React from 'react'
import { Link } from "react-router-dom";

const Suggestion = ({suggestion, i, handleClick}) => {
    
  return (
  <>
        <div className='suggestionContainer bg-light py-1 px-2'>
            <Link className='suggestions' key={i} to={`/products/${suggestion.Id}/${suggestion.Name}`} onClick={handleClick}>{suggestion.Name}</Link>
        </div>
  </>
    
  ) 
}

export default Suggestion