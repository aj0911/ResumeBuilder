import './Common.css'
import React, { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const Experience = ({setActive,setExperience,experience}) => {

  const handleNext = (e)=>{
      e.preventDefault();
      setActive(4);
  }

  const [count,setCount] = useState(1);
  const removeEdu = ()=>{
    setExperience({...experience,[count-1]:{}});
    setCount(count-1);
  }
return (
  <>
      <div className="heading">
          <h3>experience</h3>
          <p>This information is related to your experience</p>
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
                    <h4>Starting Date</h4>
                    <input value={(!experience[i])?'':experience[i].startingDate}  onChange={(e)=>setExperience({...experience,[i]:{...experience[i],startingDate:e.target.value}})} type="date" required />
                </div>
                <div className="formControl">
                    <h4>Ending Date</h4>
                    <input value={(!experience[i])?'':experience[i].endingDate}  onChange={(e)=>setExperience({...experience,[i]:{...experience[i],endingDate:e.target.value}})} type="date" required />
                </div>
                <div className="formControl">
                    <h4>Company Name</h4>
                    <input value={(!experience[i])?'':experience[i].companyName} onChange={(e)=>setExperience({...experience,[i]:{...experience[i],companyName:e.target.value}})} type="text" required />
                </div>
                <div className="formControl">
                    <h4>Job Title</h4>
                    <input value={(!experience[i])?'':experience[i].designation} onChange={(e)=>setExperience({...experience,[i]:{...experience[i],designation:e.target.value}})} type="text" required />
                </div>
                <div className="formControl">
                    <h4>Description</h4>
                    <textarea value={(!experience[i])?'':experience[i].text} onChange={(e)=>setExperience({...experience,[i]:{...experience[i],text:e.target.value}})} type="text" required></textarea>
                </div>
              </div>  
            ))
          }
          <button onClick={()=>{setCount(count+1)}}><AiFillPlusCircle/></button>
          <div className="btns">
              <button type='button' onClick={()=>setActive(2)}>Back</button>
              <input type="submit" value={'Next'} />
          </div>
      </form>
  </>
)
}

export default Experience