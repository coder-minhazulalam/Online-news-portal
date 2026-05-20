import LeftSideBar from "@/Components/HomePage/news/LeftSideBar";
import RightSideBar from "@/Components/HomePage/news/RightSideBar";



   const getCategoriesData = async() =>
   {
      const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
      const data = await  res.json(); 
      return data;
      
   }

const Home = async() => {

      const getData = await getCategoriesData()
      const CategoriesData = getData.data.news_category ;

      console.log("-----------",CategoriesData)


  return (
    <>
     <div className="w-11/13 mx-auto grid grid-cols-12 gap-3 mt-5">

        <div className="border border-solid border-amber-300 col-span-3 text-black ">
          <LeftSideBar CategoriesData={CategoriesData}  activeId={"02"} />
        </div>

          <div className="border border-solid border-amber-600 col-span-6">
        news
        </div>

          <div className="border border-solid border-amber-900 col-span-3">
           <RightSideBar/>
        </div>
     </div>


    </>

  );
}


export default Home ;