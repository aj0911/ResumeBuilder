import './Common.css'
import React, { useEffect, useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { interests } from '../Helper/Helper'

const Others = ({setActive,setOthers,others,setInterest,interest}) => {

  const [print,setPrint] = useState(false);
  const handleNext = (e)=>{
      e.preventDefault();
      document.querySelector('.resume .box > .right').style.width = '100%';
      document.querySelector('.resume .box > .right').style.padding = '0';
      window.print({Option:{backgroundGraphics:true}});
      setPrint(!print);
  }

  const [count,setCount] = useState(1);
  const removeEdu = ()=>{
    setOthers({...others,[count-1]:{}});
    setCount(count-1);
  }
  const handleCheck = (e)=>{
    if(e.target.checked)
    setInterest({...interest,[e.target.value]:true});
    else
    setInterest({...interest,[e.target.value]:false});
  }

  useEffect(()=>{
      document.querySelector('.resume .box > .right').style.width = (window.innerWidth<999)?'100%':'50%';
      document.querySelector('.resume .box > .right').style.padding = '80px 20px 20px 20px';
  },[print])
return (
  <>
      <div className="heading">
          <h3>Others</h3>
          <p>This information is related to your others</p>
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
                    <h4>Language Name</h4>
                    <input value={(!others[i])?'':others[i].name}  onChange={(e)=>setOthers({...others,[i]:{...others[i],name:e.target.value}})} type="text" required />
                </div>
                <div className="formControl">
                    <h4>Language Progress</h4>
                    <input value={(!others[i])?'':others[i].val}  onChange={(e)=>setOthers({...others,[i]:{...others[i],val:e.target.value}})} type="range" required />
                    <p>value: {(!others[i])?'0%':(others[i].val)?others[i].val+'%':'0%'}</p>
                </div>
              </div>  
            ))
          }
          <button type='button' onClick={()=>{setCount(count+1)}}><AiFillPlusCircle/></button>
          <div className="interestForm">
            {
              Object.keys(interests).map((e,i)=>(
                <div key={i} className="interestsVal">
                  <h3>{interests[e].name}</h3>
                  <input checked={interest[e]} type="checkbox" value={e} onChange={(e)=>handleCheck(e)}/>
                </div>
              ))
            }
          </div>
          <div className="btns">
              <button type='button' onClick={()=>setActive(4)}>Back</button>
              <input type="submit" value={'Print CV'} />
          </div>
      </form>
  </>
)
}

export default Others