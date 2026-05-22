import Marquee from 'react-fast-marquee';
// https://openapi.programming-hero.com/api/news/category/01

const breakingNewsCategory = async() =>
   {
      const res = await fetch("https://openapi.programming-hero.com/api/news/category/01");
      const data = await  res.json(); 
      return data;
      
   }


const BreakingNews = async() => {

    const breakingnewsAPI = await breakingNewsCategory()
    const breakingnewsData = breakingnewsAPI.data
      
    return (
        <div className="w-11/13 mx-auto border border-solid border-red-200 bg-gray-300 py-2 flex space-x-2">
                    <button className="btn bg-red-600 text-white mx-2">Latest News</button>

            <Marquee pauseOnHover={true} speed={100}>
               {
            breakingnewsData.map((item) => (
                <span key={item.id}>{" | "} {item.title}</span>
            ))
            }
           </Marquee>
        </div>
    );
};

export default BreakingNews;