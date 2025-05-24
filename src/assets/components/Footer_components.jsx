import React from 'react'

function Footer_components() {
  return (
    <>
<footer className=' bg-black'>
        {/* footer-container */}
 <div className='flex md:max-h-40 justify-around my-50 py-10 gap-20 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left'>
        {/* Col 1 */}
        <div className =' text-white flex flex-col items-center gap-5'>
            <p>FOLLOW US</p>
            <ul className='gap-5 flex flex-row'>
                <img src="/public/icons/facebook.png" alt="" className='h-8 border rounded-full cursor-pointer' />
                <img src="/public/icons/instagram.png" alt="" className='h-8 border rounded-full cursor-pointer' />
                <img src="/public/icons/linkedin.png" alt="" className='h-8 border rounded-full cursor-pointer' />
                <img src="/public/icons/twitter.png" alt="" className='h-8 border rounded-full cursor-pointer' />
                <img src="/public/icons/youtube.png" alt="" className='h-8 border rounded-full cursor-pointer' />
            </ul>

             <div>
            <ul className='flex flex-col gap-5'>
                <li><img className='img-custom' src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/common/footer/esrb-e-m.jpg" alt="" /></li>
                <li><img className='img-custom' src="https://www.activision.com/content/dam/atvi/activision/home/footer/ESRB_updated.jpg" alt="" /></li>   
            </ul>
           </div>
        </div>

        {/* Col 2 */}
        <div className=' text-white flex flex-col gap-5 ' >
            <p>POPULAR GAMES</p>
            <ul className='text-gray-500'>
                <li><a href="#">Call of Duty</a></li>
                <li><a href="#">Tony Hawk Pro Shater</a></li>
                <li><a href="#">Crash Bandicoot</a></li>
                <li><a href="#">Spyro</a></li>
                <li><a href="#">Sekiro</a></li>
            </ul>
        </div>

        {/* Col 3 */}
         <div className=' text-white flex flex-col gap-5'>
            <p>COMPANY</p>
            <ul className='text-gray-500'>
                <li>Press</li>
                <li>Research</li>
                <li>Activision Blizzard</li>
                <li>Contact Us</li>
            </ul>
        </div>

         {/* Col 4 */}
         <div className=' text-white flex flex-col gap-5'>
            <p>LEGAL</p>
            <ul className='text-gray-500'>
                <li>Term of Use</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Online Safety</li>
                <li>Applicant Privacy Policy</li>
                <li>Your Privacy Choices</li>
            </ul>
        </div>
</div>

    <div className='md:max-h-100 py-15 flex-col sm:flex-row items-center sm:items-start text-center sm:text-left'>
        <ul className=' text-white flex flex-col items-center'>
            <li><img src="/public/images/activision_logo_white-text.png" alt="" /></li>
            <li><p>Copyright 2025 Activision Publishing, Inc.</p></li>
        </ul>
    </div>
    </footer>
</>
    
  )
}

export default Footer_components