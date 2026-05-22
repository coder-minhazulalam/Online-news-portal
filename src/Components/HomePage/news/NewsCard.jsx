import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const NewsCard = ({ item }) => {
  const {
    _id,
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = item;

  return (
    <>
    <div className="px-3">
          <h1 className="font-bold ml-1">Dragon News</h1>
    </div>
    <div className="w-full bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 p-4">
        <div className="flex items-center gap-3">
          <Image
            src={author?.img}
            alt="author_name"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold text-sm">
              {author?.name}
            </h2>
            <p className="text-xs text-gray-500">
              {author?.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="p-4 pb-2">
        <h1 className="font-bold text-lg leading-7">
          {title}
        </h1>
      </div>

      {/* Thumbnail */}
      <div className="px-4">
        <Image
          src={image_url}
          alt="news image"
          width={500}
          height={300}
          className="rounded-lg w-full h-[220px] object-cover"
        />
      </div>

      {/* Description */}
      <div className="p-4">
        <p className="text-sm text-gray-600">
          {details.slice(0, 150)}...
          <span className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        
        {/* Rating */}
      <div className="flex items-center space-x-3">
          <div className="flex items-center" >
                <FaStar className="text-orange-500"/>
              <span className="ml-2 text-gray-700 font-medium">
                {rating?.number}
              </span>

          </div>
          
        {/* Views */}
          <div className="flex items-center gap-2 text-gray-600">
            <IoEyeOutline className="text-xl" />
            <span>{total_view}</span>
          </div>

        </div>

         
         <Link href={`/news/${_id}`}>
          <button className="btn btn-secondary ">See Details</button>
         </Link>

      </div>
    </div>
  </>
  );
};

export default NewsCard;