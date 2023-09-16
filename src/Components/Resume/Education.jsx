import './Common.css'
import React, { useState } from 'react'

const Education = ({setActive,setEducation,education}) => {

  const handleNext = (e)=>{
      e.preventDefault();
      setActive(2);
  }

  const [count,setCount] = useState(0);

return (
  <>
      <div className="heading">
          <h3>Education</h3>
          <p>This information is related to your education</p>
      </div>
      <form onSubmit={(e)=>handleNext(e)}>
          {
            Object.values(education).map((_,i)=>(
              <div key={i} className="inputs">
                <div className="formControl">
                    <h4>Starting Date</h4>
                    <input value={education[i].startingDate}  onChange={(e)=>setEducation({...education,[i]:{...education[i],startingDate:e.target.value}})} type="date" required />
                </div>
                <div className="formControl">
                    <h4>Ending Date</h4>
                    <input value={education[i].endingDate}  onChange={(e)=>setEducation({...education,[i]:{...education[i],endingDate:e.target.value}})} type="date" required />
                </div>
                <div className="formControl">
                    <h4>Degree Name</h4>
                    <input value={education[i].degreeName} onChange={(e)=>setEducation({...education,[i]:{...education[i],degreeName:e.target.value}})} type="text" required />
                </div>
                <div className="formControl">
                    <h4>University Name</h4>
                    <input value={education[i].universityName} onChange={(e)=>setEducation({...education,[i]:{...education[i],universityName:e.target.value}})} type="text" required />
                </div>
              </div>  
            ))
          }
          <button onClick={()=>{setEducation({...education,[count]:{}});setCount(count+1)}}>{(count===0)?'Add Education':'Add More'}</button>
          <div className="btns">
              <button onClick={()=>setActive(1)}>Back</button>
              <input type="submit" value={'Next'} />
          </div>
      </form>
  </>
)
}

export default Education