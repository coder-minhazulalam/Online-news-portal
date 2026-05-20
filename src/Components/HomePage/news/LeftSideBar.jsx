import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({CategoriesData , activeId}) => {
    return (
        <div className='p-3'> 
                     <h1 className="font-bold ml-2" >All Categories</h1>
          <ul className="mt-3 mb-3 flex flex-col text-center  text-gray-500 space-y-2">
          {
            CategoriesData.map((item) => 
           { return (
              <Link href={`/news/category/${activeId}`} key={item.category_id} 
              className={`${activeId === item.category_id && " text-black bg-gray-200"} block p-2 bg-amber-300`}
              >{item.category_name}</Link>
           )
            })
          }
          </ul>
        </div>
    );
};

export default LeftSideBar;