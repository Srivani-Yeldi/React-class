import React, { useState } from 'react'
import Vech2 from './Vech2'

export default function Vech() {
    const[vehicle,setVehicles]=useState([
        
        {
            vehicleName:"Royal Enfield",
            description:"this is royal enfield classic 350",
            pic:"https://imgd.aeplcdn.com/1280x720/n/cw/ec/101487/classic-350-2021-right-front-three-quarter-4.jpeg?isig=0",
        },
        {
            vehicleName:"car",
            description:"this is Hyundai i20 car",
        },
        {
            vehicleName:"Scooters",
            description:"this is TVS Scooty",
        }
    ])
  return (
    <div>
        <Vech2 myVehicles={vehicle}/>
    </div>
     
  )
}
