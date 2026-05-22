import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const SingleNewsDetails = ({item}) => {

        const {
    title,
    image_url,
    details,
  } = item;



    return (
        <div className='p-3'>
            <div className="px-3">
                  <h1 className="font-bold m-1">Dragon News</h1>
            </div>
    
            <div className="w-full bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                        {/* Thumbnail */}
                        <div className="px-4">
                          <Image
                            src={image_url}
                            alt="news image"
                            width={500}
                            height={300}
                            className="rounded-lg w-full h-[400px] object-cover p-3"
                          />
                        </div>  

                              {/* Title */}
                    <div className="p-4 pb-2">
                        <h1 className="font-bold text-lg leading-7">
                        {title}
                        </h1>
                    </div>

                    <div className="p-4">
                            <p className="text-sm text-gray-600">
                            {details}
                            </p>
                    </div>

         <div className='p-4'>
         <Link href={`/`}>
   
<button className="btn bg-red-600 text-white">  <FaLongArrowAltLeft />See all categories news</button>
         </Link>
         </div>

            </div>
        </div>

    );
};

export default SingleNewsDetails;