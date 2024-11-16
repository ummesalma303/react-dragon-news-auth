
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useLoaderData, useNavigate } from 'react-router-dom';

const NewsDetailsCard = () => {
    const data =useLoaderData()
    const news=data.data[0];
   
    const navigate=useNavigate()
    return (
        <div className='md:my-6'>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
      <h2 className="card-title">{news.title}</h2>
      <p>{news.details}</p>
    <div className="card-actions">
    <button className="p-2 bg-[#D72050] my-3 rounded-none text-white flex items-center space-x-2" onClick={()=>navigate(-1)}><FaArrowLeftLong/> All News In This Category</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsDetailsCard;