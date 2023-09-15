import React, {  useEffect, useState } from 'react'
import './Resume.css'
import CV from '../CV/CV';
import Profile from './Profile';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Others from './Others';

const Resume = () => {
  const fields = [
    'Profile',
    'Contact',
    'Education',
    'Experience',
    'Skills',
    'Others'
  ]
  const [active,setActive] = useState(2);
  const [profile,setProfile] = useState({});
  const [contact,setContact] = useState({});
  const [education,setEducation] = useState({});
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
              {
                (()=>{
                  switch(active){
                    case 0:return <Profile profile={profile} setProfile={setProfile} setActive={setActive}/>
                    case 1:return <Contact contact={contact} setContact={setContact} setActive={setActive}/>
                    case 2:return <Education education={education} setEducation={setEducation} setActive={setActive}/>
                    case 3:return <Experience/>
                    case 4:return <Skills/>
                    case 5:return <Others/>
                  }
                })()
              }
          </div>
          <div className="right">
            <div className="cv">
              <CV profile={profile} contactData ={contact} educationData = {education}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Resume