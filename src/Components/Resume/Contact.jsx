import React from 'react'
import './Common.css'
import { toast } from 'react-toastify';

const Contact = ({setActive,setContact,contact}) => {

    const handleNext = (e)=>{
        e.preventDefault();
        setActive(2);
    }

  return (
    <>
        <div className="heading">
            <h3>Contact</h3>
            <p>This information is related to your Contact</p>
        </div>
        <form onSubmit={(e)=>handleNext(e)}>
            <div className="formControl">
                <h4>Phone Number</h4>
                <input value={contact.phoneNumber} onChange={(e)=>setContact({...contact,phoneNumber:e.target.value})} type="number" required />
            </div>
            <div className="formControl">
                <h4>Email</h4>
                <input value={contact.email} onChange={(e)=>setContact({...contact,email:e.target.value})} type="email" required />
            </div>
            <div className="formControl">
                <h4>Website Link</h4>
                <input value={contact.website} onChange={(e)=>setContact({...contact,website:e.target.value})} type="text" />
            </div>
            <div className="formControl">
                <h4>LinkedIn Link</h4>
                <input value={contact.linkedIn} onChange={(e)=>setContact({...contact,linkedIn:e.target.value})} type="text" />
            </div>
            <div className="formControl">
                <h4>State</h4>
                <input value={contact.state} onChange={(e)=>setContact({...contact,state:e.target.value})} type="text" />
            </div>
            <div className="formControl">
                <h4>Country</h4>
                <input value={contact.country} onChange={(e)=>setContact({...contact,country:e.target.value})} type="text" />
            </div>
            <div className="btns">
                <button type='button' onClick={()=>setActive(0)}>Back</button>
                <input type="submit" value={'Next'} />
            </div>
        </form>
    </>
  )
}

export default Contact