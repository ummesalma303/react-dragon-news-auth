import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import Swal from 'sweetalert2'
const CategoryNews = () => {
  const { data: news } = useLoaderData();
  // console.log(news);
  const notify =()=>{
    Swal.fire({
      title: 'Warning',
      text: 'Do you want to continue',
      icon: 'warning',
      confirmButtonText: 'Cool'
    })
  }
  return (
    <div className="animate__animated animate__bounceInDown">
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-400 text-sm">
        {news.length} News Found On This Category
      </p>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
      <button className="btn" onClick={notify}>toast</button>
    </div>
  );
};

export default CategoryNews;
