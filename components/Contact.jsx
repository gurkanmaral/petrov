"use client";
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-auto mt-[46px]'>
      <div className='flex flex-col md:flex-row w-[90%] border mx-auto'>
        <div className='flex flex-col md:flex-1'>
          <h2 className='font-poppins text-[28px] font-semibold'>Bize Ulaşın!</h2>
          <div className=' font-poppins font-medium  text-[12px] mt-[15px]'>    
            <p>Soru, görüş ve önerilerinizi bizimle paylaşabilirsiniz.
            Mesajlarınız değerlendirilecek ve en kısa sürede
            sizinle iletişime geçilecektir. <br />
            <br />
            You can share your questions, opinions, and suggestions with us. Your messages will be reviewed, and we will get in touch with you as soon as possible.</p>
          </div>
          
        <div className='flex gap-[15px] mt-[46px] items-center '>
          <div className='relative w-[22px] h-[21px]'>
            <Image 
              src="/phone.png"
              fill
              alt=''
              />
          </div>
          <div className='flex flex-col font-poppins text-[12px] font-medium'>
            <p>+90 224 251 52 52</p>
            <p>+90 224 251 52 52</p>
          </div>
        </div>
        <div className='flex gap-[15px] mt-[40px]  '>
          <div className='relative w-[22px] h-[21px]'>
            <Image 
              src="/menu.png"
              fill
              alt=''
              />
          </div> 
            <p className=' font-poppins text-[12px] font-medium'>info@coolotantic.com</p>      
        </div>
        <div className='flex gap-[15px] mt-[50px]  '>
          <div className='relative w-[17px] h-[21px]'>
            <Image 
              src="/Vector.png"
              fill
              alt=''
              />
          </div> 
            <div className='flex flex-col '>
            <p className=' font-poppins text-[12px] font-medium'>Fatih Sultan Mehmet Bulvarı</p>
             <p className='font-poppins text-[12px] font-medium text-[#2E90C8]'>Orta Sokak No: 24 D:2, 16310 Yıldırım/<br />Bursa</p>      
            </div>
        </div>
        <div className='flex gap-[15px] mt-[26px]  '>
          <div className='relative w-[17px] h-[21px]'>
            <Image 
              src="/Vector.png"
              fill
              alt=''
              />
          </div> 
            <div className='flex flex-col '>
            <p className=' font-poppins text-[12px] font-medium'>PodyumPark</p>
             <p className='font-poppins text-[12px] font-medium text-[#2E90C8]'>Gölyazı Mh, Cumhuriyet Cd No:38, 16110 Nilüfer/Bursa</p>      
            </div>
        </div>
        <div className='flex gap-[15px] mt-[26px]  '>
          <div className='relative w-[17px] h-[21px]'>
            <Image 
              src="/Vector.png"
              fill
              alt=''
              />
          </div> 
            <div className='flex flex-col '>
            <p className=' font-poppins text-[12px] font-medium'>İstanbul</p>
             <p className='font-poppins text-[12px] font-medium text-[#2E90C8]'>Yakında!</p>      
            </div>
        </div>
        </div>      
        <div className='flex flex-col border md:flex-1 '>
        <div className='mt-[98px] md:mt-0 flex flex-col items-center md:items-start border'>
            <div className='flex flex-col md:flex-row md:items-end md:gap-[5px] items-center'>
            <span className='font-medium text-[28px] md:text-[32px]  font-poppins '>Welcome to</span>
            <span className='text-[28px] md:text-[32px]  font-fairplay  mt-[-7px]'>PETROV</span>
            <span className='hidden md:block text-[32px] font-poppins font-medium'>Community</span>
            </div>
            <p className='font-poppins text-[12px] font-medium text-center mt-[10px] md:mt-[0]'>
            How can we assist you? You can reach us on any subject.
            </p>
        </div>
        <div className='md:mt-[48px] '>
          <form onSubmit={()=>{}} className='mt-[95px] md:mt-[0] w-[90%] mx-auto md:mx-0  items-center'>
            <div className='flex flex-col md:flex-row'>
              <div className='md:w-1/2'>
                <p>İsim / Name</p>
                <input type="text"
                className='w-full outline-none border-b-2'
                />
              </div>
              <div className='md:w-1/2'>
                 <p>Soyisim / Surname</p>
              <input type="text"
              className='w-full outline-none border-b-2'
              />
              </div>
            </div>
            <div>
              <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2'>
                <p>E-mail</p>
                 <input type="text"
                className='w-full outline-none border-b-2'
                 />
                </div>
                <div className='md:w-1/2'>
                <p>Telefon / Phone</p>
                 <input type="text"
                 className='w-full outline-none border-b-2'
                 />
                </div>
              </div>            
            </div>
            <div>
              <p>Konu / Subject</p>
              <input type="text"
              className='w-full outline-none border-b-2'
              />
            </div>
            <div>
              <p>Mesaj / Message</p>
              <input type="text"
              className='w-full outline-none border-b-2'
              />
            </div>
            <div className='flex w-full border md:justify-center md:items-center'>
              <button className='mt-[65px] md:mt-[75px] bg-black text-white rounded-[5px] w-[108px] md:w-[208px] h-[28px] md:h-[54px] mx-auto  items-center justify-center flex'>
                Gönder
              </button>
            </div>
          </form>
        </div>
        </div>
        
      </div>
        
    </section>
  )
}

export default Contact