 
const Hero = () => {
  
   
  return (
   

     <div className=" min-h-[600px] h-[80vh] w-[100vw]  ">   
    <div className="absolute top-0 min-h-[600px] left-0 h-[80vh] w-[100vw]">
      
         <div className="h-[100%] w-[100%] absolute top-0 left-0 z-30 sm:flex items-center mx-6 ">      
                   <div className="mx-6 px-6 w-[60%]sm:block ">
                    <div className="hidden sm:block"> 
                      <h1 className="lg:text-[90px] sm:text-[50px] md:text-[70px]  font-extrabold">DOCTOR STRANGE</h1>
                    </div>
                    <div className="h-[80vh] w-full  flex justify-center items-center sm:hidden  ">
                      <h1 className="text-[40px]  font-extrabold">DOCTOR STRANGE</h1>
                       
                    </div>
                    <div className="hidden sm:block"> 
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci dicta soluta, molestiae, molestias maxime repudiandae repellat ex tempore, mollitia officia aliquid dolorem provident facilis beatae! Soluta, est explicabo? Libero facilis assumenda ratione ducimus quidem labore exercitationem cumque ut sed alias maiores aspernatur, aut amet sapiente non. Voluptatibus, libero facilis.</p>
                    </div>

                    <div className="my-6 hidden sm:block">
                        <button className="mr-3 border-2 py-3  font-bold px-[50px] text-bold my-2 ">Play</button>
                        <button className="lg:ml-3 bg-slate-100  font-bold text-black my-2 py-3 px-[50px] text-bold  ">Add to WatchList</button>
                    </div>

                   </div>
         </div>

        <div className="h-[100%] w-[100%] -z-10 top-0"> 
          {/* <img src="https://www.bollywoodhungama.com/wp-content/uploads/2022/11/Pathaan-01.jpg" alt=""  className="w-[100%] h-[100%]"/> */}
          <video
  src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-d9bd2.appspot.com/o/Marvel%20Studios'%20Doctor%20Strange%20in%20the%20Multiverse%20of%20Madness%20_%20Official%20Trailer.mp4?alt=media&token=6f87c657-959f-447c-981f-5de344dc362c"
  autoPlay
  
  muted
  className="w-[100%] h-[100%]  object-cover"
></video>
          {/* <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div> */}
   
 
 </div>

    {/* <div className="my-2 py-1 px-6 text-center">
    <h1 className=" text-[20px]  font-extrabold">DOCTOR STRANGE</h1>

    </div> */}

    </div>
      </div>
  )
}

export default Hero