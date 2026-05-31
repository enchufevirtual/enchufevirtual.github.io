import React from 'react';

const ProductDetails = ({ product, language, onBack }) => {
  const description = language === 'es' ? product.description_es : product.description_en;

  return (
    <article className="product-detail">
      <div className="product-detail__layout">
        <div className="product-detail__media">
          <div className="product-detail__image-card">
            <img src={`/assets/${product.image}`} alt={product.title} />
          </div>
          <div className="product-detail__author-card">
            <p className="product-detail__author-label">
              Created by: 
              <a className=" product-detail__author-button" href={product.authorUrl} target="_blank" rel="noreferrer noopener">
                {product.author}
              </a>
            </p>
            <div className="product-detail__socials">
              {product.authorSocials?.map((social, index) => (
                <a key={index} className="button button-outline product-detail__social-link" href={social.url} target="_blank" rel="noreferrer noopener">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="product-detail__info">
          <div className="product-detail__header-row">
            <span className="product-detail__type">{product.type}</span>
            <button type="button" className="button button-primary product-detail__back" onClick={onBack}>
              Volver
            </button>
          </div>

          <h1 className="product-detail__title">{product.title}</h1>

          <div className="product-detail__description-card">
            <p>{description}</p>
          </div>

          <div className="product-detail__actions">
            <a className="button button-outline" href={product.source} target="_blank" rel="noreferrer noopener">
              Source
            </a>
            <a className="button button-primary" href={product.demo} target="_blank" rel="noreferrer noopener">
              Demo
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
