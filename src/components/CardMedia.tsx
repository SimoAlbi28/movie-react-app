// CardMedia.tsx
import './CardMedia.css';
import type { ReactNode } from 'react';

interface CardMediaProps {
  backdropPath: string;
  title: string;
  voteAverage: number;
  overview: string;
  genres: string;
  children?: ReactNode;
}

function CardMedia({ 
  backdropPath, 
  title, 
  voteAverage, 
  overview, 
  genres, 
  children 
}: CardMediaProps) {
  return (
    <div className="card-media">
      <div className="card-image">
        <img src={backdropPath} alt={title} />
        <div className="card-rating">{voteAverage}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">
          {children}
        </div>
        <p className="card-genres">{genres}</p>
        <p className="card-overview">{overview}</p>
      </div>
    </div>
  );
}

export default CardMedia;