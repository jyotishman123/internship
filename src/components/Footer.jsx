import React from 'react'

const Footer = () => {
  return (
     <div className='py-[5%]  '>
          <div className='flex flex-col sm:flex-row justify-around    items-center'>
               <div>
           
            <img src="/images/logo.png" alt="logo" className='w-[148px] h-[40px]' />
               
               </div>

               <div>
                  <ul>
                    <li className='text-slate-300 my-2'>Tv Shows</li>
                    <li className='text-slate-300 my-2'>Movies</li>
                    <li className='text-slate-300 my-2'>Webseries</li>
                    <li className='text-slate-300 my-2'>Documentary</li>

                  </ul>
               </div>
          </div>
     </div>
  )
}

export default Footer