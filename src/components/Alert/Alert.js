import React from 'react'
import './Alert.scss'

const Alert = props => {
console.log(props)
  return (
    <div className="checkout_alert" role="alert">
    {props.message}
    </div>
    
  )
}

export default Alert