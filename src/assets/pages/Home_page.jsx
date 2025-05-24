import React from 'react'
import '/src/App'

function Home_page() {
  return (
    <>
    <div className='relative h-[500px] sm:h-[700px] overflow-hidden'>
      <header className='flex flex-col justify-center '>
        <video
        className="bg-opacity-90  h-full object-cover"
        autoPlay
        loop 
        muted
        >
        <source src="https://video.activision.com/activision/cdn/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4" type="video/mp4" />
      </video>


      <div className='absolute text-white'>
        <img src="/public/images/crash-team-rumble-logo.png"  className="img-home-header-custom ml-35 hidden sm:block" alt=""/>

        <div className='text-center'>
        <h2 className='text-center mx-10	my-5 font-sans text-3xl	font-extrabold '>Get ready to dash, jump, slide, and bounce
        <br />
          into an all-new way to Crash
        </h2>

        <div className='flex flex-col sm:flex-row gap-4 mt-4 justify-center '>
          <button className='bg-[#1345a276] rounded-full py-1.5 px-20 cursor-pointer border border-blue-800 mr-5 hover:bg-blue-800  '>GET NOW</button>
          <button className='cursor-pointer border border-white-800 py-1.5 px-20 hover:bg-blue-800 rounded-full hover:border-blue-800'>VISIT SITE</button>
        </div>

        </div>
        
      </div>
      </header>
</div>



  <div> 
    <h1 className='text-white justify-center flex mb-10 mt-10 text-xl sm:text-3xl '>LATEST NEWS & ARTICLES</h1>
    <div className='flex justify-around items-center border-y border-white mx-10 py-5 cursor-pointer'>
    <div className='text-white text-xl  sm:text-3xl sm:font-extrabold '><h2>ALL NEWS</h2></div>
    <div className='img-custom-mid-section'><img src="/public/images/activision_logo_white-text.png"alt="" /></div>
    <div className='img-custom-mid-section'><img src="/public/images/THPS3+4_Logo.svg" alt="" /></div>
    <div className='img-custom-mid-section'><img src="/public/images/cod-logo.svg" alt="" /></div>
    <div className='img-custom-mid-section'><img src="/public/images/crash-bandicoot-logo.png" alt="" /></div>
    </div>
   
    <div>

    </div>
  </div>

  {/* cards */}
  <div className=' flex gap-5 justify-evenly mt-10 h-590 sm:h-200 flex-wrap'>

    <div className='bg-neutral-900  flex flex-col items-center text-white h-100 rounded-2xl w-100'>
      <img src="/public/images/BO6-SEASON-04-NARRATIVE-TOUT.jpg" alt="" className='h-100 W-100 rounded-t-2xl ' />
      <div className='pt-8 pb-5 justify-end w-100 p-5'>
      <p>MAY 20, 2025</p>
      <h2>Stitch Returns in Season 04</h2>
      <p className='mt-4'>READ MORE</p>
      </div>
    </div>

     <div className='bg-neutral-900 w-100 flex flex-col items-center text-white h-100 rounded-2xl '>
      <img src="/public/images/CODE-MAM-GY6-TOUT.jpg" alt="" className='h-100 W-100 rounded-t-2xl' />
      <div className='pt-8 pb-5 justify-end w-100 p-5'>
      <p>MAY 20, 2025</p>
      <h2>Stitch Returns in Season 04</h2>
      <p className='mt-4'>READ MORE</p>
      </div>
    </div>

     <div className='bg-neutral-900 w-100 flex flex-col items-center text-white h-100 rounded-2xl'>
      <img src="/public/images/THPS-ELREY-IMAGE-TOUT.jpg" alt="" className='h-100 W-100 rounded-t-2xl' />
      <div className='pt-8 pb-5 justify-end w-100 p-5'>
      <p>MAY 20, 2025</p>
      <h2>Stitch Returns in Season 04</h2>
      <p className='mt-4'>READ MORE</p>
      </div>
    </div>

     <div className='bg-neutral-900 w-100 flex flex-col items-center text-white h-100 rounded-2xl'>
      <img src="/public/images/COD-BO6-RICOCHET-S03R-TOUT-A.webp" alt="" className='h-100 W-100 rounded-t-2xl ' />
      <div className='pt-8 pb-5 justify-end w-100 p-5'>
      <p>MAY 20, 2025</p>
      <h2>Stitch Returns in Season 04</h2>
      <p className='mt-4'>READ MORE</p>
      </div>
    </div>

     <div className='bg-neutral-900 w-100 flex flex-col items-center text-white h-100 rounded-2xl'>
      <img src="/public/images/CODE-MAM-2025-IMAGE-TOUT.webp" alt="" className='h-100 W-100 rounded-t-2xl ' />
      <div className='pt-8 pb-5 justify-end w-100 p-5'>
      <p>MAY 20, 2025</p>
      <h2>Stitch Returns in Season 04</h2>
      <p className='mt-4'>READ MORE</p>
      </div>
    </div>

     <div className='bg-neutral-900 w-100 flex flex-col items-center text-white h-100 rounded-2xl'>
      <img src="/public/images/BO6-S03R-ANNOUNCEMENT-TOUT.webp" alt="" className='h-100 W-100 rounded-t-2xl' />
      <div className='pt-8 pb-5 justify-end w-100 p-5'>
      <p>MAY 20, 2025</p>
      <h2>Stitch Returns in Season 04</h2>
      <p className='mt-4'>READ MORE</p>
      </div>
    </div>

{/* card */}
  </div> 

  <div className='flex w-full justify-center mt-30 sm:mt-20  '>    
    <button className=' rounded-full py-1.5 px-20 cursor-pointer border border-white-800  hover:bg-blue-800 text-white m-15'>VIEW ALL</button>
  </div>


  <div className='w-full flex bg-zinc-950 border border-gray-700 mb-2'>
    <div className='text-white pl-10 items-center pt-8 sm:text-xl text-l	 '>
      <h1>WE'RE HERE TO HELP!</h1>
      <h3>Get answers to frequently asked questions, check server status, and engage with a support expert</h3>
      <button className=' rounded-full py-1.5 px-20 cursor-pointer border border-white-800  hover:bg-blue-800 text-white m-15'>VIEW SUPPORT</button>
    </div>
    <img src="/public/images/support-banner-v3.jpg" alt="" className='sm:w-2/3 w-full'/>
  </div>

  <div className='w-full flex bg-zinc-950 border border-gray-700 '>
    <div className='text-white pl-10 items-center pt-8 sm:text-xl text-l	 '>
      <h1 className='text-blue-700'>HAVE FUN</h1>
      <h3>LEARN MORE ABOUT JOB OPPORTUNITIES</h3>
      <button className=' rounded-full py-1.5 px-20 cursor-pointer border border-white-800  hover:bg-blue-800 text-white m-15'>JOIN US</button>
    </div>
    <img src="/public/images/support-banner-v3.jpg" alt="" className='sm:w-2/3 w-full'/>
  </div>

  

    </>
  )
    
}

export default Home_page



