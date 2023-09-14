import React, {  useState } from 'react'
import './Resume.css'
import CV from '../CV/CV';

const Resume = () => {
  const fields = [
    'Profile',
    'Contact',
    'Education',
    'Experience',
    'Skills',
    'Others'
  ]
  const [active,setActive] = useState(0);
  return (
    <div className="resume">
        <header>
            <div className="logo">
                <img src={require('../../Assets/Images/logo.png')} alt="" />
                <h1>Kick Careers</h1>
            </div>
            <div className="fields">
              {
                fields.map((e,i)=>(
                  <h3 key={i} className={(active===i)?'active':''}>{e}</h3>
                ))
              }
            </div>
        </header>
        <div className="box">
          <div className="left">

          </div>
          <div className="right">
            <div className="cv">
              <CV/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Resume