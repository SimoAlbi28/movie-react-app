# Scratchpad - Progetto React Media App

## Background and Motivation

**Richiesta iniziale:**
Creare un'applicazione React 19.1.1 statica per verificare l'usabilità, senza package aggiuntivi e senza passaggio dinamico di dati tra componenti. L'applicazione serve come prototipo navigabile con placeholder fissi.

**Specifiche funzionali:**
- Single Page Application (Home Page unica)
- Header con logo (sinistra) e form di ricerca (input + bottone "Cerca")
- 4 sezioni HeroMedia con etichette: "Trending movies", "Trending series", "Ultime uscite movie", "Movie più votati"
- Ogni sezione contiene 4 CardMedia
- CardMedia mostra dati di movie o serie TV con attributi comuni (backdropath, vote_average, overview, genres) e specifici (title/runtime per movie, name/number_of_seasons per serie TV)

**Tecnologie scelte:**
- Build tool: Vite
- Linguaggio: TypeScript
- Styling: CSS puro con file separati
- Layout: Responsive (mobile, tablet, desktop)
- Immagini: Placeholder da servizi esterni (es. placeholder.com)
- Palette colori: Sfondo scuro con accenti azzurri

## Key Challenges and Analysis

### Sfide principali:
1. **Struttura componenti statici**: Creare componenti React senza props, mantenendo dati fissi all'interno di ogni componente
2. **Organizzazione file**: Strutturare il progetto in modo scalabile per future evoluzioni
3. **CSS Responsive**: Implementare un design responsive con CSS puro (senza framework)
4. **Differenziazione CardMedia**: Gestire visivamente le differenze tra movie e serie TV in modo statico

### Decisioni architetturali:
- **Approccio component-based**: Ogni elemento UI sarà un componente React isolato
- **TypeScript**: Uso di TypeScript per type safety e migliore developer experience
- **CSS co-located**: Ogni componente avrà il suo file CSS dedicato
- **Dati hardcoded**: Tutti i dati saranno definiti direttamente nel TSX come costanti locali
- **Responsive strategy**: Mobile-first approach con media queries
- **Palette colori**: Sfondo scuro (#0a0a0a, #1a1a1a) con accenti azzurri (#0ea5e9)
- **Card aspect ratio**: 2:4 per immagini più slanciate e moderne

## High-level Task Breakdown

### Task 1: Setup progetto base con Vite + TypeScript
**Obiettivo**: Inizializzare progetto React 19.1.1 con Vite e TypeScript
**Success Criteria**: 
- Progetto Vite funzionante con template TypeScript
- React 19.1.1 installato
- TypeScript configurato correttamente
- Server di sviluppo avviabile con `npm run dev`
- Verifica che non ci siano package aggiuntivi oltre a React, ReactDOM e TypeScript

### Task 2: Strutturare l'architettura dei file
**Obiettivo**: Creare la struttura di cartelle e file vuoti
**Success Criteria**:
- Cartelle `components`, `assets`, `styles` create
- File componenti TypeScript vuoti creati (App.tsx, Header.tsx, HeroMedia.tsx, CardMedia.tsx)
- File CSS corrispondenti creati
- Struttura verificabile via file explorer

### Task 3: Implementare componente Header
**Obiettivo**: Creare header con logo e form di ricerca
**Success Criteria**:
- Logo allineato a sinistra (placeholder testuale o immagine)
- Form con input text e bottone "Cerca"
- Header responsive (stack verticale su mobile, orizzontale su desktop)
- CSS applicato correttamente

### Task 4: Implementare componente CardMedia
**Obiettivo**: Creare card statica per visualizzare media (movie/serie)
**Success Criteria**:
- Layout card con immagine placeholder
- Visualizzazione titolo, vote_average, overview, genres
- Due varianti hardcoded: una per movie (con title e runtime) e una per serie (con name e number_of_seasons)
- Card responsive e visivamente accattivante

### Task 5: Implementare componente HeroMedia
**Obiettivo**: Creare sezione contenitore per 4 card
**Success Criteria**:
- Etichetta/titolo della sezione
- Griglia o layout orizzontale per 4 CardMedia
- Layout responsive (1 colonna su mobile, 2 su tablet, 4 su desktop)
- Scroll orizzontale opzionale per mobile

### Task 6: Comporre la Home Page
**Obiettivo**: Assemblare tutti i componenti nella pagina principale
**Success Criteria**:
- Header in cima
- 4 sezioni HeroMedia con etichette corrette
- Ogni sezione con 4 card (mix di movie e serie)
- Pagina completa visualizzabile e scrollabile

### Task 7: Styling globale e rifinitura responsive
**Obiettivo**: Applicare stili globali e perfezionare il responsive
**Success Criteria**:
- CSS reset/normalize applicato
- Font, colori, spaziature coerenti
- Testato su viewport mobile (320px-768px), tablet (769px-1024px), desktop (1025px+)
- Nessun overflow orizzontale indesiderato

### Task 8: Testing finale e verifica usabilità
**Obiettivo**: Verificare che il prototipo sia completo e usabile
**Success Criteria**:
- Build di produzione funzionante (`npm run build`)
- Prototipo navigabile in browser
- Nessun errore console
- Feedback visivo su hover/focus per elementi interattivi (anche se non funzionanti)

## Project Status Board

- [ ] Task 1: Setup progetto base con Vite + TypeScript
- [ ] Task 2: Strutturare l'architettura dei file (TypeScript)
- [ ] Task 3: Implementare componente Header (TypeScript)
- [ ] Task 4: Implementare componente CardMedia (TypeScript)
- [ ] Task 5: Implementare componente HeroMedia (TypeScript)
- [ ] Task 6: Comporre la Home Page
- [ ] Task 7: Styling globale e rifinitura responsive (accenti azzurri)
- [ ] Task 8: Testing finale e verifica usabilità

## Current Status / Progress Tracking

**Stato attuale**: Piano aggiornato con modifiche richieste (TypeScript, accenti azzurri, aspect ratio 2:4). In attesa di approvazione per iniziare l'esecuzione.

**Modifiche applicate**:
- Linguaggio: TypeScript (file .tsx invece di .jsx)
- Palette colori: Accenti azzurri (#0ea5e9) invece di rossi
- Aspect ratio immagini card: 2:4 invece di 2:3

**Prossimi passi**: Passare in modalità Executor per iniziare dal Task 1

## Executor's Feedback or Assistance Requests

_Nessun feedback al momento - in fase di pianificazione_

## Lessons

- Include info useful for debugging in the program output.
- Read the file before you try to edit it.
- If there are vulnerabilities that appear in the terminal, run npm audit before proceeding
- Always ask before using the -force git command

---

## Appendice: Struttura File Proposta

```
project-root/
├── public/
│   └── (favicon, assets pubblici)
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── HeroMedia.tsx
│   │   ├── HeroMedia.css
│   │   ├── CardMedia.tsx
│   │   └── CardMedia.css
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Appendice: Struttura HTML/CSS Base per Componenti

### Header Component
```tsx
// Header.tsx
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">MediaApp</div>
        <form className="search-form">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Cerca film o serie..." 
          />
          <button type="submit" className="search-button">Cerca</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
```

```css
/* Header.css */
.header {
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #0ea5e9;
}

.search-form {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  max-width: 500px;
}

.search-input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: white;
}

.search-button {
  padding: 0.5rem 1.5rem;
  background-color: #0ea5e9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-form {
    max-width: 100%;
  }
}
```

### CardMedia Component
```tsx
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
  const title = type === 'movie' ? data.title : data.name;

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
            <span className="card-runtime">{data.runtime} min</span>
          ) : (
            <span className="card-seasons">{data.numberOfSeasons} stagioni</span>
          )}
        </div>
        <p className="card-genres">{data.genres}</p>
        <p className="card-overview">{data.overview}</p>
      </div>
    </div>
  );
}

export default CardMedia;
```

```css
/* CardMedia.css */
.card-media {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card-media:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 2/4;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-rating {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0,0,0,0.8);
  color: #ffd700;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
}

.card-content {
  padding: 1rem;
}

.card-title {
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: white;
  font-weight: 600;
}

.card-meta {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.card-genres {
  color: #bbb;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.card-overview {
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .card-content {
    padding: 0.75rem;
  }
  
  .card-title {
    font-size: 1rem;
  }
}
```

### HeroMedia Component
```tsx
// HeroMedia.tsx
import './HeroMedia.css';
import CardMedia from './CardMedia';

interface HeroMediaProps {
  sectionTitle?: string;
}

function HeroMedia({ sectionTitle = 'Sezione Media' }: HeroMediaProps) {
  return (
    <section className="hero-media">
      <h2 className="hero-media-title">{sectionTitle}</h2>
      <div className="hero-media-grid">
        <CardMedia type="movie" />
        <CardMedia type="series" />
        <CardMedia type="movie" />
        <CardMedia type="series" />
      </div>
    </section>
  );
}

export default HeroMedia;
```

```css
/* HeroMedia.css */
.hero-media {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-media-title {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.hero-media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-media {
    padding: 1rem;
  }
  
  .hero-media-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero-media-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .hero-media-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### App Component
```tsx
// App.tsx
import './App.css';
import Header from './components/Header';
import HeroMedia from './components/HeroMedia';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroMedia sectionTitle="Trending movies" />
        <HeroMedia sectionTitle="Trending series" />
        <HeroMedia sectionTitle="Ultime uscite movie" />
        <HeroMedia sectionTitle="Movie più votati" />
      </main>
    </div>
  );
}

export default App;
```

```css
/* App.css */
.app {
  min-height: 100vh;
  background-color: #0a0a0a;
}

.main-content {
  padding-bottom: 2rem;
}
```

### Global CSS
```css
/* styles/global.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0a0a0a;
  color: white;
}

button {
  font-family: inherit;
}

img {
  display: block;
  max-width: 100%;
}
```

