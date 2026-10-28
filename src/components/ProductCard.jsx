import './ProductCard.css';

function ProductCard({ name, price, image, description, tag = 'FEATURED', rating = '4.8' }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={image} alt={name} loading="lazy" />
        <span className="product-tag">{tag}</span>
        <span className="product-rating" aria-label={`Rated ${rating} out of 5`}>★ {rating}</span>
      </div>
      <div className="product-info">
        <div className="product-title-row">
          <h3>{name}</h3>
          <span className="product-price">${Number(price).toFixed(2)}</span>
        </div>
        <p>{description}</p>
        <button className="add-to-bag" type="button" onClick={(event) => {
          const button = event.currentTarget;
          button.textContent = 'Added ✓';
          button.classList.add('is-added');
        }}>
          Add to bag <span aria-hidden="true">+</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;