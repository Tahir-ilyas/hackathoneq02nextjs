import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { UserOutlined,SearchOutlined, HeartOutlined} from '@ant-design/icons'

const Navebar = () => {
  return (
    <div className='max-w-[1440px] h-[100px] wrapper '>
    <div className='w-[1286px] h-[41px] px-[54px] py-[29px]'>
        <div className='w-[185px] h-[41px] flex'>
            <Image src="/image/logo.png" alt="logo" width={50} height={32} />
           <div className='w-[131px] font-bold text-[34px] flex'>
                <p>Furniro</p>
                <div className='px-[900px] py-5 flex gap-8 '>
            <UserOutlined className='w-[20px] h-[20px]  '/>
            <SearchOutlined className='w-[20px] h-[20px] '/>
            <HeartOutlined className='w-[20px] h-[20px] '/>
            </div>
           </div>
           <div className='w-[430px] h-[24px] px-[505px]  items-center '>
            <ul className='flex gap-[80px] py-[15px] justify-center'>
                <li> <Link href={"/"}>Home</Link></li>
                <li> <Link href={"/"}>Shop</Link></li>
                <li> <Link href={"/"}>Blog</Link></li>
                <li> <Link href={"/"}>Contact</Link></li>
            </ul>
             </div>   
           </div>
          </div>
</div>
  )
}

export default Navebar
