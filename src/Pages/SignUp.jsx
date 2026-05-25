import React from 'react'
import image3 from '../Images/image3.jpg'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  Link
} from "react-router-dom";

const SignUp = () => {
  return (
    <div className='sign-up-bg px-32 py-20' >
      <div className='flex justify-center items-center'>
        <div className='container-fluid sign-up ps-32 rounded-3xl' style={{ color: 'white', backgroundColor: '#201F47' }}>
          <div className='container'>
            <div className='row flex gap-5 justify-between'>
              <div className="col-6 py-20 sign-image w-72 flex justify-center flex-col" >
                <h2 className='text-2xl font-bold'>Create an account</h2>
                <p className='mb-7 text-slate-200'>Let's get started!</p>

                
                  <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '36ch' } }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Name" variant="outlined" sx={{
                      width: '200px',
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
                    }} />
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

                  {/* <input type="email" placeholder='Email' name='email' required />
                  <input type="password" placeholder='Password' name='password' required /> */}
                

                <button className='rounded-full p-3 my-5 ms-8 font-semibold' style={{
                  backgroundColor: '#85c7bf',color: '#014848'
                }}>Sign Up</button>
                <p className='flex justify-center text-sm text-slate-400 ms-8'>Already have an account? <Link to="/login" className='ms-2 text-white underline'>Log In</Link></p>
                
              </div>
              <div className="col-6 flex justify-end">
                <img src={image3} alt='' className='w-4/5 rounded-e-3xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
