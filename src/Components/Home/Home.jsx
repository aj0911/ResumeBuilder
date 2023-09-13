import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const footerCards = [
        {
            img:require('../../Assets/Images/medal.png'),
            title:'Make a resume that wins interviews',
            text:'Use our resume maker with its advanced creation tools to tell a professional story that engages recruiters, hiring managers and even CEOs'
        },
        {
            img:require('../../Assets/Images/easy.png'),
            title:'Resume writing made easy',
            text:'Resume writing has never been this effortless Pre-generated test,visual designs and more - all already, integrated into the resume maker. Just fill your details.'
        },
        {
            img:require('../../Assets/Images/pass.png'),
            title:'A recruiter-tested CV maker tool',
            text:'Our resume builder and its pre-generated content are tested by the recruiters and IT experts. We help your CV become truly competitive to the hiring process.'
        }
    ]
  return (
    <div className="home">
        <header>
            <div className="logo">
                <img src={require('../../Assets/Images/logo.png')} alt="" />
                <h1>Kick Careers</h1>
            </div>
            <button onClick={()=>navigate('/Resume')}>Build A Resume</button>
        </header>
        <div className="hero">
            <div className="left">
                <h3>Resume Builder (and CV Formate) Create Dream and Aspirations for A Better Job</h3>
                <p>Dedicated and detail-oriented Resume Builder with a passion for helping individuals articulate their dreams and aspirations through professionally crafted CVs. Proven expertise in tailoring documents to highlight strengths, skills, and experiences, enabling candidates to stand out in the job market. Committed to empowering individuals to achieve their career goals by providing them with the tools they need to secure their dream job.</p>
                <button onClick={()=>navigate('/Resume')}>Start Making</button>
            </div>
            <div className="right">
                <img src={require('../../Assets/Images/hero.png')} alt="" />
            </div>
        </div>
        <div className="hero watchVideo">
            <div className="left">
                <h3>Use the best resume maker as your guide</h3>
                <p>Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker created by experts, improved by data, trusted by millions of professional</p>
                <div className="btns">
                    <button onClick={()=>navigate('/Resume')}>Create My Resume</button>
                    <button>Watch Video</button>
                </div>
            </div>
            <div className="right">
                <img src={require('../../Assets/Images/video.png')} alt="" />
            </div>
        </div>
        <footer>
            <div className="cards">
                {
                    footerCards.map((e,i)=>(
                        <div className="card" key={i}>
                            <img src={e.img} alt="" />
                            <h3>{e.title}</h3>
                            <p>{e.text}</p>
                        </div>
                    ))
                }
            </div>
            <div className="copyright">
                <p>&copy;Copyright 2023. All Rights Reserved: Kick Careers</p>
            </div>
        </footer>
    </div>
  )
}

export default Home