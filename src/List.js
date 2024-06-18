import React,{useState} from 'react'

export default function List() {
    const[Employees,setEmployees]=useState([
        {
            Name:"Srivani",
            YOP:2023,
            Gender:"Female"
        },
        {
            Name:"Lavanya",
            YOP:2024,
            Gender:"Female"
        },
        {
            Name:"Uma",
            YOP:2024,
            Gender:"Female"
        }
    ])
  return (
    <div>
        {
            Employees.map((emp)=>(
                <div>
                    <p>Name:{emp.Name}</p>
                    <p>YOP:{emp.YOP}</p>
                    <p>Gender:{emp.Gender}</p>

                </div>
            ))
        }
      
    </div> 
  )
}
