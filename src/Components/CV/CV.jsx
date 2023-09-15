import React from 'react'
import './CV.css'
import { AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { interests } from '../Helper/Helper'

const CV = ({profile,contactData,educationData}) => {

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
            val:`${(!contactData.state)?'':contactData.state}, ${(!contactData.country)?'':contactData.country}`
        },
    ]
    const educations=[
        {
            time:`${educationData.startingDate || ''} - ${educationData.endingDate || ''}`,
            name:'Master Degree in Computer Science',
            university:'University Name'
        },
        {
            time:'2007 - 2010',
            name:'Bachelor Degree in Computer Science',
            university:'University Name'
        },
        {
            time:'1997 - 2007',
            name:'Matriculation',
            university:'University Name'
        },
    ]
    const languages = [
        {
            name:'English',
            val:'90%'
        },
        {
            name:'Spanish',
            val:'45%'
        },
        {
            name:'Hindi',
            val:'85%'
        },
    ]
    const experiences = [
        {
            time:'2019 - Present',
            designation:'Senior UX Designer',
            companyName:'Company Name',
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat obcaecatiexplicabo perspiciatis mollitia inventore fugiat veritatis illo maiores eum?`
        },
        {
            time:'2018 - 2019',
            designation:'UX/UI Designer',
            companyName:'Company Name',
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat obcaecatiexplicabo perspiciatis mollitia inventore fugiat veritatis illo maiores eum?`
        },
        {
            time:'2014 - 2018',
            designation:'Junior UX Designer',
            companyName:'Company Name',
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat obcaecatiexplicabo perspiciatis mollitia inventore fugiat veritatis illo maiores eum?`
        }
    ]
    const skills = [
        {
            name:'HTML',
            val:'90%'
        },
        {
            name:'CSS',
            val:'95%'
        },
        {
            name:'JAVASCRIPT',
            val:'65%'
        },
        {
            name:'photoshop',
            val:'80%'
        },
        {
            name:'illustrator',
            val:'75%'
        },
        {
            name:'adobe xd',
            val:'85%'
        },
    ]
    const intrest=[interests.ART,interests.GAMES,interests.MUSIC,interests.SPORTS];

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
                                <h4>{`${e.startingDate || '' } ${(e.startingDate)?'-':''} ${e.endingDate || ''}`}</h4>
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
                        languages.map((e,i)=>(
                            <div key={i} className="language">
                                <h4>{e.name}</h4>
                                <div className="progress"><span style={{width:e.val}}></span></div>
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
                        experiences.map((e,i)=>(
                            <div className="experience" key={i}>
                                <div className="left">
                                    <h3>{e.time}</h3>
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
                        skills.map((e,i)=>(
                            <div key={i} className="language skills">
                                <h4>{e.name}</h4>
                                <div className="progress"><span style={{width:e.val}}></span></div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="box">
                <h3>Interest</h3>
                <div className="interests cards">
                    {
                        intrest.map((e,i)=>(
                            <div key={i} className="interest">
                                {e.icon}
                                <h4>{e.name}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>

  )
}

export default CV