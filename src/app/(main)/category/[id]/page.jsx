import LeftSideBar from "@/Components/HomePage/news/LeftSideBar";
import NewsCard from "@/Components/HomePage/news/NewsCard";
import RightSideBar from "@/Components/HomePage/news/RightSideBar";
import { CategoriesNewsDetails, getCategoriesData } from "@/lib/Data";


const CategoryDetailsPage = async({ params }) => {

      const {id } =  await params;

      const getData = await getCategoriesData()
      const CategoriesData = getData.data.news_category ;


      const getCategoryDetails = await CategoriesNewsDetails(id)
      const categoriesData = getCategoryDetails.data
      console.log(categoriesData)


    return (
     <div className="w-11/13 mx-auto grid grid-cols-12 gap-3 mt-5">

        <div className=" col-span-3 text-black ">
          <LeftSideBar CategoriesData={CategoriesData}  activeId={id} />
        </div>

        {/*  */}

        <div  className="col-span-6 space-y-2 p-2">
            {
            categoriesData?.length > 0 ? (
                categoriesData.map((item) => (
                <NewsCard   key={item._id}  item={item} />
                ))
            ) : (
                <h1>There is No Data</h1>
            )
            }
        </div>

          <div className="col-span-3">
           <RightSideBar/>
        </div>
     </div>

    );
};

export default CategoryDetailsPage;