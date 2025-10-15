// Header.tsx
import './Header.css';
import Search from './Search';  

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">MediaApp</div> 
        <Search/>       
      </div>
    </header>
  );
}

export default Header;