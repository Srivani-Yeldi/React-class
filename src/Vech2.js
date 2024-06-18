import React from 'react'

export default function Vech2(props) {
    return (
        <div>

            {
                props.myVehicles.map((v) => (
                    <div>
                        <p>Name: {v.vehicleName}</p>
                        <p>description: {v.description}</p>
                        <img src={v.pic} />
                    </div>
                ))
            }
        </div>
    )
}
