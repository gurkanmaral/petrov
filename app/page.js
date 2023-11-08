import Image from 'next/image'
import Homepage from '../components/Homepage'
import Menu from '@/components/Menu'
import Hakkımızda from '@/components/Hakkımızda'
import MenuDetails from '@/components/MenuDetails'
import Banner from '@/components/Banner'
import Shop from '@/components/Shop'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <div className='flex flex-col flex-1 '>
      <Homepage />
      <Menu />
      <div className='hidden md:flex'>
       <Hakkımızda />
      </div>  
      <MenuDetails />
      <Banner />
      <Shop />
      <div className='md:hidden'>
        <Hakkımızda />
      </div>  
      <Contact />
      <Footer />
    </div>
  )
}
