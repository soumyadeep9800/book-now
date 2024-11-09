import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'55px'}}>
    {props.alert &&<div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert.type}</strong>    {props.alert.message}
    </div>}
    </div>
  )
}
