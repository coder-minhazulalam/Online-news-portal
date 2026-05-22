import RightSideBar from "@/Components/HomePage/news/RightSideBar";
import SingleNewsDetails from "@/Components/HomePage/news/SingleNewsDetails";
import { SingleNewsDetailsAPI } from "@/lib/Data";


// generated Metadata
// generated Metadata
export const generateMetadata = async ({ params }) => {

  const { id } = await params;

  console.log("inner generateMetadata", id);

  const NewsData = await SingleNewsDetailsAPI(id);

  const singleNews = NewsData?.data?.[0];

  return {
    title: singleNews?.title || "News Details",
    description: singleNews?.details || "News description",
  };
};


const NewsDetailsPage = async ({ params }) => {

  const { id } = await params;

  const NewsData = await SingleNewsDetailsAPI(id);
  const singleNewsDetailsData = NewsData.data;

  return (
    <>
      <div className="w-11/13 mx-auto grid grid-cols-12 gap-3 mt-5">

        <div className="col-span-9 space-y-2 p-2">
          {
            singleNewsDetailsData?.map((item, index) => (
              <SingleNewsDetails
                key={index}
                item={item}
              />
            ))
          }
        </div>

        <div className="col-span-3">
          <RightSideBar />
        </div>

      </div>

    </>
  );
};

export default NewsDetailsPage;