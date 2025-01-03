import React from 'react'
import './services.css'
import ComputerModelContainer from './computer/ComputerModelContainer'
import ConsoleModelContainer from './console/ConsoleModelContainer'
import MugModelContainer from './mug/MugModelContainer'

const services = [{
  id: 1,
  img: '/service1.png',
  title: 'Web Development',
  counter: 35
}, {
  id: 2,
  img: '/service2.png',
  title: 'Product Design',
  counter: 23
}, {
  id: 3,
  img: '/service3.png',
  title: 'UI/UX Design',
  counter: 46
}
]
const Services = () => {
  return <div className='services'>
    <div className="sSection left">
      <h1 className="sTitle">How do I help?</h1>
      <div className="serviceList">
        {
          services.map(service => (
            <div className="section" key={service.id}>
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
              <h2>{service.title}</h2>
              <h3>{service.counter} Projects</h3>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <div className="sSection right">
      <ComputerModelContainer />
      {/* <ConsoleModelContainer /> */}
      {/* <MugModelContainer/> */}
    </div>
  </div>
}

export default Services
