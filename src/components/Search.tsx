import './search.css';

function Search() {
  return (
    <form className="search-form">
        <input 
            type="text" 
            className="search-input" 
            placeholder="Cerca film o serie..." 
        />
            <button type="submit" className="search-button">Cerca</button>
    </form> 
)}

export default Search;