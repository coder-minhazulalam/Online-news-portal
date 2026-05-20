import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format  } from 'date-fns'

const Header = () => {
    return (
        <div className='my-5 space-y-3 text-center'> 
           <Image src={logo} height={300} width={400} alt='logo'  className='mx-auto' />
           <h1 className='text-[16px]'>Journalism Without Fear or Favour</h1>
           <h2>{format(new Date(), "EEEE, MMMM dd, yyyy")}</h2>
        </div>
    );
};

export default Header;