import React, { useState, useRef } from 'react'
import './style.scss'
import { FiSearch } from 'react-icons/fi'
import InputGroup from 'react-bootstrap/InputGroup'
import useIsMobileScreen from '../../utils/hooks/useIsMobileScreen'
import { useNavigate } from 'react-router-dom'
import { useGetProducts } from '../../hook/useProducts'
import Suggestion from '../../components/modal/Suggestion'
import { toast } from 'react-toastify'

const Searchbar = () => {
  const navigate = useNavigate()
  const isMobile = useIsMobileScreen()
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const modalRef = useRef()

  function setShowx(e) {
    var x = document.querySelector('#xbutton')
    if (e?.target === x?.firstChild) {
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        setSuggestions([])
        setText('')
        x.style.display = 'none'
      }
    }
  }
  const { status, data, error } = useGetProducts(1, 200)
  // console.log(data?.data?.data);

  // const closeModal= () => {
  //   document.querySelector(".modal").style.display = "none"
  // }

  const onChangeHandler = text => {
    if (text === ' ') {
    } else {
      const products = data
      let matches = []
      if (text.length > 0) {
        matches = products.data.data.filter(function (p, i) {
          if (i < 10) {
            const regex = new RegExp(`${text}`, 'gi')
            return p.Name.match(regex)
          } else {
            return
          }
        })
      }

      document.addEventListener(
        'click',
        function (event) {
          if (!event.target.closest('.modal')) {
            setSuggestions([])
            setText('')
            setShowx()
          }
        },
        false
      )

      //  let x = document.querySelector('#xbutton');
      //  x.style.display = "block";
      //  if(text.length===0){
      //   let x = document.querySelector('#xbutton');
      //   x.style.display = "none";
      //    //alert("nothing")
      // }

      console.log('matches', matches)
      setText(text)
      setSuggestions(matches)
    }
  }

  const handleClick = e => {
    setSuggestions([])
    setText('')
    setShowx(e)

    if (suggestions.length < 1) {
      toast.error('Invalid input')
    }
  }

  return (
    <div className='inputDiv' ref={modalRef}>
      <form autoComplete='off'>
        <div classname='inputGroup'>
          <InputGroup className='justify-content-between absolute searbarInputGroup border border-top-left-radius: 10px;'>
            <div className='searchbar-input  '>
              <FiSearch
                size={24}
                style={{ margin: '8px' }}
                className='d-none d-sm-block'
              />
              <input
                type='text'
                name='searchTerm'
                id='searchTerm'
                onChange={e => onChangeHandler(e.target.value)}
                value={text}
                className=' h-100 '
                placeholder='Search for products...'
                required
              />
            </div>

            <button
              onClick={handleClick}
              type='submit'
              className='btn btn-primary rounded-3 search-btn'
            >
              Search
            </button>
          </InputGroup>
        </div>
      </form>

      <div style={{ position: 'absolute' }}>
        <div className='bg-light'>
          {/* <div className='d-flex just justify-content-end me-3 '>
            <div style={{display: "none", }} id="xbutton" onClick={handleClick}>
              <button  className='bg-light btn-close btn-close-danger clearButton' ></button>
            </div>
          </div> */}

          {suggestions &&
            suggestions.map((suggestion, i) => (
              <Suggestion suggestion={suggestion} i={i} className='modal' />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Searchbar
