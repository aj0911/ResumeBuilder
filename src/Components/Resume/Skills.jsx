import './Common.css'
import React, { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const Skills = ({setActive,setSkills,skills}) => {

  const handleNext = (e)=>{
      e.preventDefault();
      setActive(5);
  }

  const [count,setCount] = useState(1);
  const removeEdu = ()=>{
    setSkills({...skills,[count-1]:{}});
    setCount(count-1);
  }
return (
  <>
      <div className="heading">
          <h3>Skills</h3>
          <p>This information is related to your skills</p>
      </div>
      <form onSubmit={(e)=>handleNext(e)}>
          {
            [...Array(count).keys()].map((_,i)=>(
              <div key={i} className="inputs">
                {
                  (i<1)?'':
                  <button type='button' onClick={removeEdu}><AiFillMinusCircle/></button>
                }
                <div className="formControl">
                    <h4>Skill Name</h4>
                    <input value={(!skills[i])?'':skills[i].name}  onChange={(e)=>setSkills({...skills,[i]:{...skills[i],name:e.target.value}})} type="text" required />
                </div>
                <div className="formControl">
                    <h4>Skill Progress</h4>
                    <input value={(!skills[i])?'':skills[i].val}  onChange={(e)=>setSkills({...skills,[i]:{...skills[i],val:e.target.value}})} type="range" required />
                    <p>value: {(!skills[i])?'0%':(skills[i].val)?skills[i].val+'%':'0%'}</p>
                </div>
              </div>  
            ))
          }
          <button type='button' onClick={()=>{setCount(count+1)}}><AiFillPlusCircle/></button>
          <div className="btns">
              <button type='button' onClick={()=>setActive(3)}>Back</button>
              <input type="submit" value={'Next'} />
          </div>
      </form>
  </>
)
}

export default Skills