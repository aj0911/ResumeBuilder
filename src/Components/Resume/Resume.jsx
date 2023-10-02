import React, {  useState } from 'react'
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
  const [active,setActive] = useState(0);
  const [profile,setProfile] = useState({});
  const [contact,setContact] = useState({});
  const [education,setEducation] = useState({});
  const [experience,setExperience] = useState({});
  const [skills,setSkills] = useState({});
  const [others,setOthers] = useState({});
  const [interest,setInterest] = useState({});
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
                    case 3:return <Experience experience={experience} setExperience = {setExperience} setActive={setActive}/>
                    case 4:return <Skills skills={skills} setSkills={setSkills} setActive={setActive}/>
                    case 5:return <Others others={others} interest={interest} setInterest={setInterest} setOthers={setOthers} setActive={setActive}/>
                  }
                })()
              }
          </div>
          <div className="right">
              <CV profile={profile} interestData = {interest} otherData={others} skillsData = {skills} experienceData = {experience} contactData ={contact} educationData = {education}/>
          </div>
        </div>
    </div>
  )
}

export default Resume