import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {


    const data = [
  {
    "id": 1,
    "newsTitle": "Bangladesh Wins Thrilling Cricket Match Against India"
  },
  {
    "id": 2,
    "newsTitle": "New Technology Trends Shaping the Future of AI"
  },
  {
    "id": 3,
    "newsTitle": "Global Economy Shows Signs of Recovery in 2026"
  },
  {
    "id": 4,
    "newsTitle": "Top 10 Web Development Frameworks to Learn This Year"
  },
  {
    "id": 5,
    "newsTitle": "Scientists Discover New Renewable Energy Source"
  },
  {
    "id": 6,
    "newsTitle": "Football World Cup Preparations Reach Final Stage"
  },
  {
    "id": 7,
    "newsTitle": "Major Breakthrough in Space Exploration Announced"
  },
  {
    "id": 8,
    "newsTitle": "How Students Can Build Strong Programming Skills"
  },
  {
    "id": 9,
    "newsTitle": "Climate Change Effects Becoming More Visible Worldwide"
  },
  {
    "id": 10,
    "newsTitle": "Top Startups to Watch in the Tech Industry"
  }
]






    return (
        <div className="w-11/13 mx-auto border border-solid border-red-200 bg-gray-300 py-2 flex space-x-2">
                    <button className="btn bg-red-600 text-white mx-2">Latest News</button>

            <Marquee pauseOnHover={true} speed={100}>
               {
            data.map((item) => (
                <span key={item.id}>{ " ! "} {item.newsTitle}</span>
            ))
            }
           </Marquee>
        </div>
    );
};

export default BreakingNews;