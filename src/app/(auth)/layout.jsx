import Navbar from '@/Components/Navbar';
import React from 'react';
import { roboto } from '../layout';

const Authlayout = ({children}) => {
    return (
     <div className={ `${roboto.className}`  }>
     
      <Navbar/>
      <main >
       {children}
      </main>
     </div>

    

    );
};

export default Authlayout;