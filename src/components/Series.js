import React, { useEffect, useState } from 'react'
import Genres from './Genres'
import Singlecontent from './Singlecontent'
import CustomPagination from '../Pagination.js/CustomPagination'
import useGenres from '../Hooks/useGenre'

const Series = () => {

  const [page , setpage] = useState(1)
  const [content , setcontent] = useState([])
  const [numofpages , setnumofpages] = useState()
  const [genres  , setgenres] = useState([])
  const [selectedgenres  , setselectedgenres] = useState([])
  const genreforURL = useGenres(selectedgenres)
  console.log(genreforURL);

  const fetched = async () => {
    const url = 'https://api.themoviedb.org/3/discover/tv?api_key=27b8bcc19cf76b17e02879458c67e0a4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';
    try { 
      // const response = await fetch(`${url}api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
      const response = await fetch(`${url}${genreforURL}`);
      const result = await response.json();
      setcontent(result.results)
      setnumofpages(result.total_pages)
    } catch (error) {
      console.error(error);
    }
  };

  console.log(selectedgenres);

  useEffect(() => {
    fetched()
  } , [page , genreforURL])
  
  return (
    <>
    <span className="PageTitle">Series</span>
    <Genres  type="movie" setpage={setpage} selectedgenres={selectedgenres} setselectedgenres={setselectedgenres} genres={genres} setgenres={setgenres} />
    <div className="trending">
      {
        content && content.map((om) => (
        <div key={om.id}>
          <Singlecontent om={om} key={om.id}/>
          </div>
        ))
      }
    </div>
    <CustomPagination setpage={setpage}  numofpages={numofpages} />
    </>
  )
}


export default Series