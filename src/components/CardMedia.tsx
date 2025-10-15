// CardMedia.tsx
import './CardMedia.css';

interface CardMediaProps {
  type?: 'movie' | 'series';
}

function CardMedia({ type = 'movie' }: CardMediaProps) {
  // Dati statici per movie
  const movieData = {
    backdropPath: 'https://via.placeholder.com/300x450/333/fff?text=Movie+Poster',
    title: 'Il Grande Film',
    voteAverage: 8.5,
    overview: 'Una storia avvincente che tiene lo spettatore incollato allo schermo dall\'inizio alla fine.',
    genres: 'Azione, Avventura, Drammatico',
    runtime: 142
  };

  // Dati statici per serie
  const seriesData = {
    backdropPath: 'https://via.placeholder.com/300x450/444/fff?text=Series+Poster',
    name: 'La Grande Serie',
    voteAverage: 9.2,
    overview: 'Una serie televisiva epica che esplora temi profondi attraverso personaggi complessi.',
    genres: 'Drama, Fantasy, Thriller',
    numberOfSeasons: 5
  };

  const data = type === 'movie' ? movieData : seriesData;
  const title = type === 'movie' ? movieData.title : seriesData.name;

  return (
    <div className="card-media">
      <div className="card-image">
        <img src={data.backdropPath} alt={title} />
        <div className="card-rating">{data.voteAverage}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">
          {type === 'movie' ? (
            <span className="card-runtime">{movieData.runtime} min</span>
          ) : (
            <span className="card-seasons">{seriesData.numberOfSeasons} stagioni</span>
          )}
        </div>
        <p className="card-genres">{data.genres}</p>
        <p className="card-overview">{data.overview}</p>
      </div>
    </div>
  );
}

export default CardMedia;