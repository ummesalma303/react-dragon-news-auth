// import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RightNav from "../components/layout-component/RightNav";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
    // const data =useLoaderData()
    
    return (
        <div>
           <header>
        <Header></Header>
       
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <section className="col-span-9">
        <NewsDetailsCard></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
        </div>
    );
};

export default NewsDetails;