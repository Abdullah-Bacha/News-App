import Wraper from "../Wraper";
import { useNewsContext } from "../../Context/NewsContext";
import { useEffect } from "react";
import Loder from "../Loder";

function News({ className }) {
  const { news, setNews, fetchNews, loading } = useNewsContext();
  // load data on initial render
  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);
  if (loading) return <Loder className={"w-fit m-auto py-24 mb-32"} />;

  return (
    <Wraper>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}
      >
        {news.map((newsDeatails, index) => {
          if (!newsDeatails.urlToImage) return null;
          return <NewsCard key={index} details={newsDeatails} />;
        })}
      </div>
    </Wraper>
  );
}
const NewsCard = ({ details }) => {
  return (
    <div className="card bg-[#1f2a2c] text-white w-68  flex flex-col gap-1 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img
          src={details.urlToImage || "/fallback-image.png"}
          alt={details.title}
          className="rounded-lg object-cover w-full h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2 mb-2">{details?.title}</h2>
        <p className="line-clamp-3">{details?.description}</p>
        <div className="card-actions justify-end mt-4">
          <button
            className=" badge-outline btn bg-[#605dff]"
            onClick={() => window.open(details.url)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
