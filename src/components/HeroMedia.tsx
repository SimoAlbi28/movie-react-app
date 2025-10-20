// HeroMedia.tsx
import './HeroMedia.css';
import CardMedia from './CardMedia';

interface HeroMediaProps {
  sectionTitle?: string;
  type?: 'movie' | 'series';    
}

function HeroMedia({ sectionTitle = 'Sezione Media', type = 'movie' }: HeroMediaProps) {
  // Dati statici per movie
  const movieData = {
    backdropPath: '../public/movie.jpg',
    title: 'Il Grande Film',
    voteAverage: 8.5,
    overview: 'Una storia avvincente che tiene lo spettatore incollato allo schermo dall\'inizio alla fine.',
    genres: 'Azione, Avventura, Drammatico',
    runtime: 142
  };

  // Dati statici per serie
  const seriesData = {
    backdropPath: '../public/series.png',
    name: 'La Grande Serie',
    voteAverage: 9.2,
    overview: 'Una serie televisiva epica che esplora temi profondi attraverso personaggi complessi.',
    genres: 'Drama, Fantasy, Thriller',
    numberOfSeasons: 5
  };

  const isMovie = type === 'movie';
  const data = isMovie ? movieData : seriesData;
  const title = isMovie ? movieData.title : seriesData.name;

  return (
    <section className="hero-media">
      <h2 className="hero-media-title">{sectionTitle}</h2>
      <div className="hero-media-grid">
        <CardMedia
          backdropPath={data.backdropPath}
          title={title}
          voteAverage={data.voteAverage}
          overview={data.overview}
          genres={data.genres}
        >
          {isMovie ? (
            <span className="card-runtime">{movieData.runtime} min</span>
          ) : (
            <span className="card-seasons">{seriesData.numberOfSeasons} stagioni</span>
          )}
        </CardMedia>
        <CardMedia
          backdropPath={data.backdropPath}
          title={title}
          voteAverage={data.voteAverage}
          overview={data.overview}
          genres={data.genres}
        >
          {isMovie ? (
            <span className="card-runtime">{movieData.runtime} min</span>
          ) : (
            <span className="card-seasons">{seriesData.numberOfSeasons} stagioni</span>
          )}
        </CardMedia>
        <CardMedia
          backdropPath={data.backdropPath}
          title={title}
          voteAverage={data.voteAverage}
          overview={data.overview}
          genres={data.genres}
        >
          {isMovie ? (
            <span className="card-runtime">{movieData.runtime} min</span>
          ) : (
            <span className="card-seasons">{seriesData.numberOfSeasons} stagioni</span>
          )}
        </CardMedia>
        <CardMedia
          backdropPath={data.backdropPath}
          title={title}
          voteAverage={data.voteAverage}
          overview={data.overview}
          genres={data.genres}
        >
          {isMovie ? (
            <span className="card-runtime">{movieData.runtime} min</span>
          ) : (
            <span className="card-seasons">{seriesData.numberOfSeasons} stagioni</span>
          )}
        </CardMedia>
      </div>
    </section>
  );
}

export default HeroMedia;