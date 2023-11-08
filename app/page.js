import Image from 'next/image'
import Homepage from '../components/Homepage'
import Menu from '@/components/Menu'
import Hakkımızda from '@/components/Hakkımızda'

export default function Home() {
  return (
    <div className='flex flex-col '>
      <Homepage />
      <Menu />
      <Hakkımızda />
    </div>
  )
}
