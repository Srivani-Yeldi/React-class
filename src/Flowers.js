import React,{useState} from 'react'
import DisplayFlower from './DisplayFlower'

export default function Flowers() {
    const[flower,setFlower]=useState([
        {
            flowerName:"Rose",
            color:"Red",
            pic:"https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"
        },
        {
            flowerName:"Tulips",
            color:"purple",
            pic:"https://i.pinimg.com/736x/1c/3d/fe/1c3dfee6c1c88c0bb7b1a69a48241928.jpg"
        }

    ])
  return (
    <div>
      <DisplayFlower myFlowers={flower}/>
    </div>
  )
}
