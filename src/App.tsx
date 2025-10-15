// App.tsx
import './App.css';
import Header from './components/Header';
import HeroMedia from './components/HeroMedia';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroMedia sectionTitle="Trending movies" type = 'movie'/>
        <HeroMedia sectionTitle="Trending series" type = 'series'/>
        <HeroMedia sectionTitle="Ultime uscite movie" type = 'movie'/>
        <HeroMedia sectionTitle="Movie più votati" type = 'movie'/>
      </main>
    </div>
  );
}

export default App;
