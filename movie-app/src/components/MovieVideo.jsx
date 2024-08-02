import React from 'react'
import { useParams } from 'react-router-dom'

const MovieVideo = ({ movieData }) => {
  const { id } = useParams();
  const movie = movieData.find(m => m.id === Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      {movie.youtube_trailer ? (
        <video width="600" controls>
          <source src={movie.youtube_trailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div>No trailer available</div>
      )}
    </div>
  );
}

export default MovieVideo;