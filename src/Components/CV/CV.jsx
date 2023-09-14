import React from 'react'
import './CV.css'
import { AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { interests } from '../Helper/Helper'

const CV = () => {

    const contacts = [
        {
            icon:<AiFillPhone/>,
            val:'+1 234 5678 900'
        },
        {
            icon:<AiFillMail/>,
            val:'johndoe@gmail.com'
        },
        {
            icon:<BsGlobe/>,
            val:'www.mywebsite.com'
        },
        {
            icon:<AiFillLinkedin/>,
            val:'www.linkedin.com/me'
        },{
            icon:<MdLocationOn/>,
            val:'Delhi, India'
        },
    ]
    const educations=[
        {
            time:'2010 - 2013',
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
                <img src={require('../../Assets/Images/default.jpg')} alt="" />
                <h2>Abhinav Jha</h2>
                <h3>Web Developer</h3>
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
                        educations.map((e,i)=>(
                            <div key={i} className="education">
                                <h4>{e.time}</h4>
                                <p>{e.name}</p>
                                <h5>{e.university}</h5>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi necessitatibus veniam odit ad laboriosam itaque, praesentium iste vel sapiente est aliquam molestiae? Labore impedit consequatur porro asperiores quis fugiat blanditiis dolorem in quas aperiam quos a corrupti ducimus placeat veniam, qui molestiae sequi nulla deleniti dolorum ipsa molestias tempora eum. Pariatur nihil asperiores repellat cum beatae laboriosam nam assumenda molestiae error, placeat eveniet! A libero ad recusandae est commodi porro ex dolor optio perferendis corporis? Exercitationem modi ducimus similique officiis adipisci et possimus aut, at, ullam sapiente dolor sint praesentium sequi corporis accusantium porro accusamus? Recusandae amet cum saepe.</p>
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