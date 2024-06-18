import React from 'react'

export default function DisplayFlower(props) {
  return (
    <div>
      {
                props.myFlowers.map((f) => (
                    <div>
                        <p>Name: {f.flowerName}</p>
                        <p>description: {f.color}</p>
                        <img src={f.pic} />
                    </div>
                ))
            }
    </div>
  )
}
