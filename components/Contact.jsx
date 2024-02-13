"use client";
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section className='container mx-auto py-10 mt-10 px-5'>
      <div className='grid  grid-cols-1 md:grid-cols-2'>
        <div className='cols-span-1 '>
          <h2 className='font-poppins text-[28px] font-semibold'>Bize Ulaşın!</h2>
          <div className='flex flex-col gap-4 font-poppins font-medium md:w-2/3 text-[12px] md:text-[16px] mt-[15px]'>    
          <div className=''>
          <p>
            Soru, görüş ve önerilerinizi bizimle paylaşabilirsiniz.
            Mesajlarınız değerlendirilecek ve en kısa sürede
            sizinle iletişime geçilecektir.
          </p>
          </div>
          <div>
           <p>You can share your questions, opinions, and suggestions with us. Your messages will be reviewed, and we will get in touch with you as soon as possible.</p></div>                  
          </div>
          
        <div className='flex gap-[15px] mt-[46px] items-center '>
          <div className='relative w-[22px] h-[21px]'>
            <img 
              src="/phone.png"
             
              alt=''
              />
          </div>
          <div className='flex flex-col font-poppins text-[12px] md:text-[16px] font-medium'>
            <p>+90 224 251 52 52</p>
            <p>+90 224 251 52 52</p>
          </div>
        </div>
        <div className='flex gap-[15px] mt-[40px]  '>
          <div className='relative w-[22px] h-[21px]'>
            <img
              src="/menu.png"

              alt=''
              />
          </div> 
            <p className=' font-poppins text-[12px] md:text-[16px] font-medium'>info@coolotantic.com</p>      
        </div>
        <div className='flex gap-[15px] mt-[50px]  '>
          <div className='relative w-[17px] h-[21px]'>
            <img 
              src="/Vector.png"
             
              alt=''
              />
          </div> 
            <div className='flex flex-col '>
            <p className=' font-poppins text-[12px] md:text-[16px] font-medium'>Fatih Sultan Mehmet Bulvarı</p>
             <p className='font-poppins text-[12px]  md:text-[16px] font-medium text-[#2E90C8]'>Orta Sokak No: 24 D:2, 16310 Yıldırım/<br />Bursa</p>      
            </div>
        </div>
        <div className='flex gap-[15px] mt-[26px]  '>
          <div className='relative w-[17px] h-[21px]'>
            <img 
              src="/Vector.png"      
              alt=''
              />
          </div> 
            <div className='flex flex-col '>
            <p className=' font-poppins text-[12px] md:text-[16px] font-medium'>PodyumPark</p>
             <p className='font-poppins text-[12px] md:text-[16px] font-medium text-[#2E90C8]'>Gölyazı Mh, Cumhuriyet Cd No:38, 16110 Nilüfer/Bursa</p>      
            </div>
        </div>
        <div className='flex gap-[15px] mt-[26px]  '>
          <div className='relative w-[17px] h-[21px]'>
            <img 
              src="/Vector.png"
          
              alt=''
              />
          </div> 
            <div className='flex flex-col '>
            <p className=' font-poppins text-[12px] md:text-[16px] font-medium'>İstanbul</p>
             <p className='font-poppins text-[12px] md:text-[16px] font-medium text-[#2E90C8]'>Yakında!</p>      
            </div>
        </div>
        </div>      
        <div className='cols-span-1 '>
        <div className='mt-[98px] md:mt-0 flex flex-col items-center md:items-start '>
            <div className='flex flex-col md:flex-row md:items-end md:gap-[5px] items-center'>
            <span className='font-medium text-[28px] md:text-[32px]  font-poppins '>Welcome to</span>
            <span className='text-[28px] md:text-[32px]  font-fairplay font-regular'>PETROV</span>
            <span className='hidden md:block text-[32px] font-poppins font-medium'>Community</span>
            </div>
            <p className='font-poppins text-[12px] md:text-[16px] font-medium text-center mt-[10px] md:mt-[0]'>
            How can we assist you? You can reach us on any subject.
            </p>
        </div>
          <div className='w-full md:w-full mx-auto md:mt-[48px]  '>
            <form onSubmit={()=>{}} className='mt-[95px] md:mt-[0] gap-5 font-poppins font-semibold mx-auto md:mx-0 grid grid-cols-2  items-center'>             
                  <div className='col-span-2 md:col-span-1   '>
                    <p>İsim / Name</p>
                    <input type="text"
                    className='w-full outline-none border-b-2 py-2'
                    />
                  </div>
                  <div className='col-span-2 md:col-span-1  '>
                    <p>Soyisim / Surname</p>
                  <input type="text"
                  className='w-full outline-none border-b-2 py-2'
                  />
                  </div>                           
                    <div className='col-span-2 md:col-span-1'>
                      <p>E-mail</p>
                      <input type="text"
                      className='w-full outline-none border-b-2 py-2 '
                    />
                    </div>
                    <div className='col-span-2 md:col-span-1 py-2' >
                    <p>Telefon / Phone</p>
                    <input type="text"
                    className='w-full outline-none border-b-2 py-2'
                    />                            
              </div>
              <div className='col-span-2'>
                <p>Konu / Subject</p>
                <input type="text"
                className='w-full outline-none border-b-2 py-2'
                />
              </div>
              <div className='col-span-2'>
                <p>Mesaj / Message</p>
                <input type="text"
                className='w-full outline-none border-b-2 py-2'
                />
              </div>
              <div className='col-span-2 flex justify-center   md:justify-end items-center md:items-end'>
                <button className=' md:mt-[75px] py-4 px-20 bg-black text-white rounded-[5px] '>
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