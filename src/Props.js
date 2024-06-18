import React from 'react'

export default function Props(props) {
  return (
    <div>
      <p>The props component should be imported and then called in the container</p>
      <p>Name:{props.studentName} <br/> RollNo: {props.studentRollNo} </p>
    </div>
  )
}
