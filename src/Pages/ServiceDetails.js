import React from 'react'
import {Link} from 'react-router-dom'

const details= [
    {serviceName: "Web Design", id:"1"},
    {serviceName: "Web Hosting", id:"2"},
    {serviceName: "Software Development", id:"3"},
    {serviceName: "Seo", id:"4"},
];

export default function ServiceDetails() {
  return (
    <div>

        <h1>Service Details</h1>
        {details.map( (service) => {
            return  <Link key={service.id} to={`/Details/${service.serviceName}`}>  <h1>{service.serviceName}</h1></Link>
            
        })}

    

    </div>
  )
}
