function MovieCard({movie, openForm}){
    return(
        <div className="card">
      <h3>{movie.name} ({movie.year})</h3>
      <p><b>Cast:</b> {movie.cast}</p>
      <p><b>Plot:</b> {movie.plot}</p>
      <button onClick={() => openForm(movie.name)}>Review</button>
    </div> 
    );
}

export default MovieCard;