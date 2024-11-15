
// import { useLoaderData } from 'react-router-dom';

const NewsDetailsCard = () => {
    // const data =useLoaderData()
    // console.log(data.data);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
                    <h2 className="card-title">{" heading "}</h2>
                    <p>{" p " }</p>
    <div className="card-actions">
    <button className="p-2 bg-[#D72050] rounded-none text-white">{ " b-text"}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsDetailsCard;