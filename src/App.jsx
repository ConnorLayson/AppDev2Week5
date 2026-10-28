import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductCard from './components/ProductCard.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const products = [
  {
    name: 'Studio Wireless Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
    description: 'Immersive sound, all-day comfort, and a battery that keeps up with you.',
    tag: 'BESTSELLER',
    rating: '4.9',
  },
  {
    name: 'Everyday Smart Watch',
    price: 89.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',
    description: 'A clean, minimal companion for your routines, workouts, and weekends.',
    tag: 'NEW ARRIVAL',
    rating: '4.8',
  },
  {
    name: 'Portable Bluetooth Speaker',
    price: 64.50,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',
    description: 'Big, clear sound in a compact design made for wherever life takes you.',
    tag: 'STAFF PICK',
    rating: '4.7',
  },
];

function App() {
  return (
    <div className="app-shell">
      <Header storeName="ComponentCorner" />
      <main>
        <Hero
          title="Good tech. Better everyday."
          subtitle="Thoughtfully picked gadgets that make work, play, and everything in between feel a little easier."
          ctaText="Explore the collection"
        />
        <section className="products-section" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE CORNER PICKS</p>
              <h2>Favorites worth discovering</h2>
            </div>
            <p className="section-note">Useful by design. Loved for a reason.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
        <section className="newsletter-strip">
          <div>
            <p className="eyebrow">A LITTLE GOOD NEWS</p>
            <h2>Better finds, straight to your inbox.</h2>
            <p>Get product picks and first looks at new arrivals.</p>
          </div>
          <a className="newsletter-link" href="mailto:hello@componentcorner.example?subject=Join%20the%20newsletter">
            Count me in <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <Footer
        storeName="ComponentCorner"
        tagline="Good tech for real life."
        email="hello@componentcorner.example"
        year={new Date().getFullYear()}
      />
    </div>
  );
}

export default App;