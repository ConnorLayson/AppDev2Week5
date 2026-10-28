import './Header.css';

function Header({ storeName = 'ComponentCorner' }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${storeName} home`}>
        <span className="brand-mark" aria-hidden="true">c.</span>
        <span>{storeName}</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#shop">Shop</a>
        <a href="#why-us">Our story</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#shop">Find your next favorite <span aria-hidden="true">↗</span></a>
    </header>
  );
}

export default Header;