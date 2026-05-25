import React from 'react'
import image4 from '../Images/image4.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const LogIn = () => {
  return (
    <div>
      <div className='sign-up-bg px-32 py-24'>
        <div className='flex justify-center items-center'>
          <div className='container-fluid sign-up ps-32 rounded-3xl' style={{ color: 'white', backgroundColor: '#201F47' }}>
            <div className='container'>
              <div className='row flex gap-5 justify-between'>
                <div className="col-6 py-20 sign-image w-72 flex justify-center flex-col" >
                  <h2 className='text-2xl font-bold mb-6 ps-3'>Welcome back!</h2>

                  <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '36ch' } }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#90b0bacf',
                          color: "white"
                        },
                        '&:hover fieldset': {
                          borderColor: '#90b0bacf',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#90b0bacf',
                        },
                        '& input': {
                          color: '#90b0bacf', // Change text color of the input
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#90b0bacf',
                        '&.Mui-focused': {
                          color: '#90b0bacf',
                        },
                      },
                    }} />
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      sx={{

                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#90b0bacf',
                          },
                          '&:hover fieldset': {
                            borderColor: '#90b0bacf',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#90b0bacf',
                          },
                          '& input': {
                            color: '#90b0bacf', // Change text color of the input
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#90b0bacf',
                          '&.Mui-focused': {
                            color: '#90b0bacf',
                          },
                        },

                      }}


                    />
                  </Box>
                  <a href="" className='text-slate-400 ps-2'>Forget password?</a>


                  <button className='rounded-full p-3 my-5 ms-8 font-semibold' style={{
                    backgroundColor: '#85c7bf',
                    color: '#014848'
                    
                  }}>Log In</button>
                  <p className='flex justify-center text-sm text-slate-400 ms-6'>Don't have an account? <Link to="/signup" className='ms-2 text-white underline'>Sign Up</Link></p>
                  
                </div>
                <div className="col-6 flex justify-end">
                  <img src={image4} alt='' className='w-10/12  rounded-e-3xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
