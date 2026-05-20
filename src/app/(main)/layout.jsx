import BreakingNews from '@/Components/BreakingNews';
import Header from '@/Components/Header';
import Navbar from '@/Components/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
     <>
       <Header/>
       <BreakingNews/>
       <Navbar/>
      <main>
        {children}
      </main>
     </>
    );
};

export default MainLayout;