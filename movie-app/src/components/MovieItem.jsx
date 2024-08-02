import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const MovieItem = ({movieData}) => {
    const {id}=useParams();
    const movieDatas=movieData[id];

    console.log(movieDatas,"movieDatas")

    // console.log(movieData,"itemContainer")
    // if (!movieData || !Array.isArray(movieData)) {
    //     movieData = [];
    //   }
  return (
    <div>
        <div>
            {
            <div className='mainimg' style={{backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%),url(${movieDatas.backdrop_path})`,}}>
             <div className='textImg'>
            <div className='moviesTtl'>
                <h4>{movieDatas.contentType}</h4>
                <h2>{movieDatas.original_title}</h2>
            </div>
             <p className='overvw'>{movieDatas.overview}</p>
        
              <div className='mainimg2'>
                <p>Release date <span>{movieDatas.release_date}</span></p>
                <p>Ratings <span>{movieDatas.vote_average}</span></p>
                <p><span>{movieDatas.vote_count}</span></p>
            </div>
              <div className='CDT'>
                <h3>{movieDatas.genres[0]}</h3>
                <h3>{movieDatas.genres[1]}</h3>
                <h3>{movieDatas.genres[2]}</h3>
                </div>
                <Link to={`/movievideo/${movieDatas}`}>
                <div>play</div>
                </Link>
               
              </div>
            </div>  

            }
        </div>
    </div>
  )
}

export default MovieItem