import React, { useState } from "react";
import { useEffect } from "react";
import Singlecontent from "./Singlecontent";
import '../App.css'
import CustomPagination from "../Pagination.js/CustomPagination";

const Trending = ({numofpages = 10}) => {
  const [data, setdata] = useState();
  const[page , setpage] = useState(1)

  // const url = 'https://api.themoviedb.org/3/trending/all/day? ';
  const fetchapi = async () => {
    try { 
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=27b8bcc19cf76b17e02879458c67e0a4&page=${page}`)
      const result = await response.json();
      setdata(result.results)
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(data);

  useEffect(() => {
    fetchapi();
  }, [page]);
  

  return(
    <>
    <span className="PageTitle">Trending</span>
    <div className="trending">
      {
        data && data.map((om) => (
        <div key={om.id}>
          <Singlecontent om={om} key={om.id} />
          </div>
        ))
      }
    </div>
    <CustomPagination setpage={setpage} numofpages={numofpages} />
    </>
  )
    
};

export default Trending;
