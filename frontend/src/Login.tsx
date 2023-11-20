import React from 'react';
import DocsGPT3 from './assets/cute_docsgpt3.svg';
export default function Login() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log("login");
  }


  return (
    <div className="z-30 min-h-screen h-full w-full  bg-[#1D1D1D] flex justify-center items-center">
        <div className=' flex flex-col items-center md:w-fit'>
          <img src={DocsGPT3} alt="Logo" className='h-[10vh]'/>
          <div className='md:flex md:gap-2 font-bold'>
            <h1 className='text-white'>Log in to </h1>
            <h1 className='bg-gradient-to-r from-[#56B3CB] via-[#CD2AA0] to-[#EA635C] text-transparent bg-clip-text'>DocsGPT</h1>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-[3vh] md:w-fit w-full'>
            <input
              type="email"
              name="Name"
              placeholder='Email'
              className="border-none focus:outline-none text-white font-medium text-sm md:min-w-[25vw] w-full p-4 rounded-lg bg-[#2B2B2B]"
              // onChange={onchange}
            />
            <input
              type="password"
              name="Name"
              placeholder='Password'
              className="border-none focus:outline-none text-white font-medium text-sm md:min-w-[25vw] w-full  p-4 rounded-lg bg-[#2B2B2B]"
              // onChange={onchange}
            />
            <h2 className='text-[#5F5F5F] text-right text-sm hover:cursor-pointer'>Forgot your password?</h2>
            <button className='h-[7vh] rounded-lg bg-[#7D54D1] text-white font-medium'>Log in</button>
            <div className='w-full flex text-sm  justify-center'>
            <h2 className='text-[#5F5F5F] flex text-right hover:cursor-pointer'>Don't have an account?<h2 className='text-white text-center font-medium'>Sign up</h2></h2>
            </div>
            
          </form>
          

        </div>
    </div>
  );
}
