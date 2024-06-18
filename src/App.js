import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'


export default function App() {
  return (
    <BrowserRouter>
      <Navigation/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>  
    </BrowserRouter>
  )
}

// import { useState } from 'react'
// import Props from './Props'
// import List from './List'
// import Vech from './Vech'
// import Flowers from './Flowers'
// import UserData from './UserData'


// function App(){
//   const[name,setName]=useState('ReactJS')
//   const[year,setYear]=useState(2013)
//   const[component,setInfo]=useState('components')
//   return(
//     <div> 
//       {/* <List/>
//       <Vech/> */}
//       <UserData/>
      
      
//       <p>Good Afternoon</p>
//       <h1>Welcome to Hyderabd</h1>
//       <p>{name} is introduced in the {year}</p>
//       <p>React has 2 {component} they are class and function </p>
//       <Props studentName="Srivani" studentRollNo="23"/>
//       <Props studentName="Amisha" studentRollNo="07"/>
//       <Props studentName="Rital" studentRollNo="27"/> 

//     </div>
//   )
// }

// export default App