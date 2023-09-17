import './Common.css'
import React, { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const Education = ({setActive,setEducation,education}) => {

  const handleNext = (e)=>{
      e.preventDefault();
      setActive(3);
  }

  const [count,setCount] = useState(1);
  const removeEdu = ()=>{
    setEducation({...education,[count-1]:{}});
    setCount(count-1);
  }
return (
  <>
      <div className="heading">
          <h3>Education</h3>
          <p>This information is related to your education</p>
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
                    <input value={(!education[i])?'':education[i].startingDate}  onChange={(e)=>setEducation({...education,[i]:{...education[i],startingDate:e.target.value}})} type="date" required />
                </div>
                <div className="formControl">
                    <h4>Ending Date</h4>
                    <input value={(!education[i])?'':education[i].endingDate}  onChange={(e)=>setEducation({...education,[i]:{...education[i],endingDate:e.target.value}})} type="date" required />
                </div>
                <div className="formControl">
                    <h4>Degree Name</h4>
                    <input value={(!education[i])?'':education[i].degreeName} onChange={(e)=>setEducation({...education,[i]:{...education[i],degreeName:e.target.value}})} type="text" required />
                </div>
                <div className="formControl">
                    <h4>University Name</h4>
                    <input value={(!education[i])?'':education[i].universityName} onChange={(e)=>setEducation({...education,[i]:{...education[i],universityName:e.target.value}})} type="text" required />
                </div>
              </div>  
            ))
          }
          <button onClick={()=>{setCount(count+1)}}><AiFillPlusCircle/></button>
          <div className="btns">
              <button type='button' onClick={()=>setActive(1)}>Back</button>
              <input type="submit" value={'Next'} />
          </div>
      </form>
  </>
)
}

export default Education