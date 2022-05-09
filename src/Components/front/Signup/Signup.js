import React,{useState} from 'react';
import './Signup.css';
import Popup from '../Popup/Popup';
const Signup = (prop) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = (event)=>{
     event.preventDefault();
    setIsOpen(!isOpen);
  }
  return (
    <div className='signup'>
        <div className='container'>
          <div className='app-wrapper'>
            <div>
              <h2 className='title'>Create Account</h2>
            </div>
            <form className='form-wrapper' onSubmit={()=>isOpen && <Popup content ={<>
                <b>login SUCESSFULLY</b>
                
              </>}
              handleClose={handleFormSubmit}  
            />}>
              <div className='name'>
                <label className='label'>Full Name</label>
                <input className='input' type='text' id='name' placeholder='Enter your full name' required />
              </div> <br/>
              
              <div className='email'>
                <label className='label'>Email ID</label>
                <input className='input' type='email' placeholder='Enter your email here' required/>
              </div>  <br/>
              
              <div className='password'>
                <label className='label'>Password</label>
                <input className='input' type='password' placeholder='Enter password here' required = 'required' />
              </div> <br/>
              <button className='submit' >SignUp</button>

              {isOpen && <Popup content ={<>
                <b>login SUCESSFULLY</b>
                
              </>}
              handleClose={handleFormSubmit}  
            />}
            </form>
          </div>
        </div>
    </div>
  )
}

export default Signup