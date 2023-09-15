import React from 'react'
import './Common.css'
import { toast } from 'react-toastify';

const Profile = ({setActive,setProfile,profile}) => {

    const handleNext = (e)=>{
        e.preventDefault();
        setActive(1);
    }

    const manageImg=(e)=>{
        if (e.target.files && e.target.files[0]) {
            if(e.target.files[0].name.endsWith('.jpg') || e.target.files[0].name.endsWith('.png'))
                setProfile({img: URL.createObjectURL(e.target.files[0])});
            else{
                setProfile({...profile,img:''});
                toast.warn('Only .jpg and .png file is mandatory.')
            }
        }
        else setProfile({...profile,img:''});
    }

  return (
    <>
        <div className="heading">
            <h3>Profile</h3>
            <p>This information is related to your profile</p>
        </div>
        <form onSubmit={(e)=>handleNext(e)}>
            <div className="formControl">
                <h4>Avatar</h4>
                <input type="file" onChange={e=>manageImg(e)}/>
            </div>
            <div className="formControl">
                <h4>Full Name</h4>
                <input value={profile.fName} onChange={(e)=>setProfile({...profile,fName:e.target.value})} type="text" required />
            </div>
            <div className="formControl">
                <h4>Job Title</h4>
                <input value={profile.jobTitle} onChange={(e)=>setProfile({...profile,jobTitle:e.target.value})} type="text" required />
            </div>
            <div className="formControl">
                <h4>Description</h4>
                <textarea value={profile.description} onChange={(e)=>setProfile({...profile,description:e.target.value})} maxLength={1000} required></textarea>
            </div>
            <div className="btns">
                <input type="submit" value={'Next'} />
            </div>
        </form>
    </>
  )
}

export default Profile