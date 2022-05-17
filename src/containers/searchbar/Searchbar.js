import React, { useState, useEffect } from "react";
import "./style.scss";
import { FiSearch } from "react-icons/fi";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import useIsMobileScreen from "../../utils/hooks/useIsMobileScreen";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGetProducts } from '../../hook/useProducts'

const Searchbar = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobileScreen();
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState([])


  const { status, data } = useGetProducts(1,200);
  // console.log(data?.data?.data);

  
  

 const onChangeHandler = (text) => {
  const products = data;
   let matches = []
   if (text.length > 0) {
     matches = products.data.data.filter(p => {
       const regex = new RegExp(`${text}`, 'gi');
       return p.Name.match(regex)
     })
   }
   console.log("matches", matches);
   setSuggestions(matches)
   setText(text)
 }


  return (
    <>
      <form >
        <div classname='inputGroup'>
        <InputGroup
          
          className="justify-content-between absolute searbarInputGroup border border-top-left-radius: 10px;">
          <div className="searchbar-input  ">
            <FiSearch
              size={24}
              style={{ margin: "8px" }}
              className="d-none d-sm-block"
            />
            <input
              type="text"
              name="searchTerm"
              id="searchTerm"
              onChange={e => onChangeHandler(e.target.value)}
              value={text}
              className=" h-100 "
              placeholder="Search for products..."
            />
          </div>
          

          <button type="submit" className="btn btn-primary rounded-3 search-btn">
            Search
          </button>
        </InputGroup>

        </div>
        
      </form>

      {suggestions && suggestions.map((suggestion, i) => (
          <div className='suggestionContainer bg-light py-1 px-2 ' style={{ height: 'auto' }}>
            <div className='' role="button" key={i}>{suggestion.Name}</div>
          </div>
      ))}
    
    </>
    
    
  );
};

export default Searchbar;
