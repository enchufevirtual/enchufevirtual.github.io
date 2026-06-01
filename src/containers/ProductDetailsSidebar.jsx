import React from 'react';

const ProductDetailsSidebar = ({ product }) => (
  <div className="product-detail__media">
    <div className="product-detail__image-card">
      <img src={`/assets/${product.image}`} alt={product.title} />
    </div>
    <div className="product-detail__author-card">
      <p className="product-detail__author-label">
        Created by:
        <a className="product-detail__author-button" href={product.authorUrl} target="_blank" rel="noreferrer noopener">
          {product.author}
        </a>
      </p>
      <div className="product-detail__socials">
        {product.authorSocials?.map((social, index) => (
          <a
            key={index}
            className="button button-outline product-detail__social-link"
            href={social.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default React.memo(ProductDetailsSidebar);
