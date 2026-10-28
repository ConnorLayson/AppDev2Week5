import './Hero.css';

function Hero({
  title = 'Good tech. Better everyday.',
  subtitle = 'Thoughtfully picked gadgets that make work, play, and everything in between feel a little easier.',
  ctaText = 'Explore the collection',
}) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="hero-kicker"><span className="kicker-dot" /> YOUR EVERYDAY UPGRADE</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a className="hero-button" href="#shop">{ctaText}<span aria-hidden="true">→</span></a>
        <div className="hero-proof">
          <div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span></div>
          <span><strong>2,000+</strong> happy tech finders</span>
        </div>
      </div>
      <div className="hero-visual" role="img" aria-label="A curated collection of modern headphones and audio accessories">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <img
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=90"
          alt="Modern electronics arranged on a clean desk"
        />
        <div className="floating-note"><span className="note-sparkle">✳</span><span><strong>Small upgrades.</strong><br />Big everyday joy.</span></div>
      </div>
      <div className="hero-bottom-label"><span>01 /</span> CURATED WITH CARE</div>
    </section>
  );
}

export default Hero;