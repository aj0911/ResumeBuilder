import React from 'react'
import './CV.css'
import { AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { interests } from '../Helper/Helper'

const CV = ({profile,interestData,contactData,educationData,experienceData,skillsData,otherData}) => {

    const contacts = [
        {
            icon:(contactData.phoneNumber)?<AiFillPhone/>:'',
            val:contactData.phoneNumber
        },
        {
            icon:(!contactData.email)?'':<AiFillMail/>,
            val:contactData.email
        },
        {
            icon:(!contactData.website)?'':<BsGlobe/>,
            val:contactData.website
        },
        {
            icon:(!contactData.linkedIn)?'':<AiFillLinkedin/>,
            val:contactData.linkedIn
        },{
            icon:(!contactData.state)?'':<MdLocationOn/>,
            val:`${(!contactData.state)?'':contactData.state}${(!contactData.country)?'':','} ${(!contactData.country)?'':contactData.country}`
        },
    ]

  return (
    <div className="cv">
        <div className="left">
            <div className="box">
                <img src={profile.img || require('../../Assets/Images/default.jpg')} alt="" />
                <h2>{profile.fName}</h2>
                <h3>{profile.jobTitle}</h3>
            </div>
            <div className="box">
                <h3>Contact Info</h3>
                <div className="cards">
                    {
                        contacts.map((e,i)=>(
                            <div key={i} className="link">
                                {e.icon}
                                <h3>{e.val}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="box">
                <h3>Education</h3>
                <div className="cards">
                    {
                        Object.values(educationData).map((e,i)=>(
                            <div key={i} className="education">
                                <h4>{`${(e.startingDate)?e.startingDate.slice(0,4):'' } ${(e.startingDate)?'-':''} ${(e.endingDate)?e.endingDate.slice(0,4):''}`}</h4>
                                <p>{e.degreeName}</p>
                                <h5>{e.universityName}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="box">
                <h3>Languages</h3>
                <div className="cards">
                    {
                        Object.values(otherData).map((e,i)=>(
                            <div key={i} className="language">
                                <h4>{e.name}</h4>
                                {
                                    (!e.val)?'':
                                    <div className="progress"><span style={{width:(e.val+'%' || '0%')}}></span></div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className="right">
            <div className="box">
                <h3>Profile</h3>
                <p>{profile.description}</p>
            </div>
            <div className="box">
                <h3>Experience</h3>
                <div className="cards">
                    {
                        Object.values(experienceData).map((e,i)=>(
                            <div className="experience" key={i}>
                                <div className="left">
                                    <h3>{`${(e.startingDate)?e.startingDate.slice(0,4):'' } ${(e.startingDate)?'-':''} ${(e.endingDate)?e.endingDate.slice(0,4):''}`}</h3>
                                    <h3>{e.companyName}</h3>
                                </div>
                                <div className="right">
                                    <h3>{e.designation}</h3>
                                    <p>{e.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="box">
                <h3>Professional Skills</h3>
                <div className="cards">
                    {
                        Object.values(skillsData).map((e,i)=>(
                            <div key={i} className="language skills">
                                <h4>{e.name}</h4>
                                {
                                    (!e.val)?'':
                                    <div className="progress"><span style={{width:(e.val+'%' || '0%')}}></span></div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="box">
                <h3>Interest</h3>
                <div className="interests cards">
                    {
                        Object.keys(interestData).map((e,i)=>(
                            (interestData[e])?
                            <div key={i} className="interest">
                                {interests[e].icon}
                                <h4>{interests[e].name}</h4>
                            </div>:''
                        )) 
                    }
                </div>
            </div>
        </div>
    </div>

  )
}

export default CV