// HeroMedia.tsx
import './HeroMedia.css';
import CardMedia from './CardMedia';

interface HeroMediaProps {
  sectionTitle?: string;
  type?: 'movie' | 'series';    
}

function HeroMedia({ sectionTitle = 'Sezione Media', type = 'movie' }: HeroMediaProps) {
  return (
    <section className="hero-media">
      <h2 className="hero-media-title">{sectionTitle}</h2>
      <div className="hero-media-grid">
        <CardMedia type={type} />
        <CardMedia type={type} />
        <CardMedia type={type} />
        <CardMedia type={type} />
      </div>
    </section>
  );
}

export default HeroMedia;