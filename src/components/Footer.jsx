import './Footer.css';

function Footer({
  storeName = 'ComponentCorner',
  tagline = 'Good tech for real life.',
  email = 'hello@componentcorner.example',
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">c.</span>{storeName}</a>
          <p>{tagline} Thoughtful picks, friendly service, and less scrolling for the good stuff.</p>
        </div>
        <div className="footer-column" id="why-us">
          <h3>Explore</h3>
          <a href="#shop">Shop all</a>
          <a href="#shop">Best sellers</a>
          <a href="#top">Our story</a>
        </div>
        <div className="footer-column">
          <h3>We're here to help</h3>
          <a href={`mailto:${email}`}>Email us</a>
          <a href={`mailto:${email}?subject=Shipping%20question`}>Shipping questions</a>
          <a href={`mailto:${email}?subject=Returns%20question`}>Returns & exchanges</a>
        </div>
        <div className="footer-contact">
          <span className="contact-label">SAY HELLO</span>
          <a href={`mailto:${email}`}>{email}</a>
          <p>Good conversations start here.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} {storeName}. All rights reserved.</span>
        <span>Made for the curious <span className="footer-heart">♥</span></span>
      </div>
    </footer>
  );
}

export default Footer;