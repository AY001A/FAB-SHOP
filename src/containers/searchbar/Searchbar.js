import React, { useState, useRef } from "react";
import "./style.scss";
import { FiSearch } from "react-icons/fi";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import useIsMobileScreen from "../../utils/hooks/useIsMobileScreen";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGetProducts } from '../../hook/useProducts'
import Suggestion from "../../components/modal/Suggestion";


const Searchbar = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobileScreen();
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [ showModal, setShowModal] = useState(false)

  const modalRef = useRef()
  
  function setShowx(e){
    var x = document.querySelector('#xbutton');
    if(e.target==x.firstChild){
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        setSuggestions([])
        setText('')
        x.style.display = "none";

      }
    }
  }
  const { status, data } = useGetProducts(1,200);
  // console.log(data?.data?.data);

  const openModal = () => {
    setShowModal(prev => !prev);
  }
  

 const onChangeHandler = (text) => {
 if(text==" "){
 }
 else{
  
  const products = data;
   let matches = []
   if (text.length > 0) {
     matches = products.data.data.filter(function(p, i) {
       if(i<10){
          const regex = new RegExp(`${text}`, 'gi');
          return p.Name.match(regex)
        }else{
          return
        }
     })
   }

   var x = document.querySelector('#xbutton');
   x.style.display = "block";
   if(text.length==0){
    var x = document.querySelector('#xbutton');
    x.style.display = "none";
     //alert("nothing")
  }

   console.log("matches", matches);
   setText(text)
   setSuggestions(matches)
 }
 }

 const handleClick = (e) => {
  setSuggestions([])
  setText('')
  setShowx(e);
  var x = document.querySelector('#xbutton');
    x.style.display = "none";
 }




  return (
    <div className="inputDiv" ref={modalRef} onClick={handleClick}>
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
       <div style={{position: "absolute"}}>

      <div className='bg-light' >
        <div className='d-flex just justify-content-end me-3 '>
          <div style={{display: "none", }} id="xbutton" onClick={handleClick}>
            <button  className='bg-light btn-close btn-close-danger clearButton' ></button>
          </div>
        </div>
        
          {suggestions && suggestions.map((suggestion, i) => (
            <Suggestion suggestion={suggestion} i={i} />
          ))}
      </div>
      </div>
    </div>
    
    
  );
};

export default Searchbar;
