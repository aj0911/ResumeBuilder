import './Common.css'
import React, { useState } from 'react'

const Education = ({setActive,setEducation,education}) => {

  const handleNext = (e)=>{
      e.preventDefault();
      setActive(2);
  }

  const [edu, setEdu] = useState(['0'])

return (
  <>
      <div className="heading">
          <h3>Education</h3>
          <p>This information is related to your education</p>
      </div>
      <form onSubmit={(e)=>handleNext(e)}>
          {
            edu.map((f,i)=>(
              <div key={i} className="inputs">
                <div className="formControl">
                    <h4>Starting Date</h4>
                    <input   onChange={(e)=>setEducation({...education,f:{...education[f],startingDate:e.target.value}})} type="date" required />
                </div>
                <div className="formControl">
                    <h4>Ending Date</h4>
                    <input   onChange={(e)=>setEducation({...education,f:{...education[f],endingDate:e.target.value}})} type="date" required />
                </div>
                <div className="formControl">
                    <h4>Degree Name</h4>
                    <input  onChange={(e)=>setEducation({...education,f:{...education[f],degreeName:e.target.value}})} type="text" required />
                </div>
                <div className="formControl">
                    <h4>University Name</h4>
                    <input  onChange={(e)=>setEducation({...education,f:{...education[f],universityName:e.target.value}})} type="text" required />
                </div>
              </div>  
            ))
          }
          <button onClick={()=>setEdu([...edu,(edu.length+1).toString()])}>Add More</button>
          <div className="btns">
              <button onClick={()=>setActive(1)}>Back</button>
              <input type="submit" value={'Next'} />
          </div>
      </form>
  </>
)
}

export default Education