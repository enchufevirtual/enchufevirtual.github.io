import React, { useMemo } from 'react';
import ProductDetailsMarkdown from './ProductDetailsMarkdown';

const typeLabels = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  LIBRARY: 'Library',
  FULLSTACK: 'Fullstack'
};

const techColors = {
  react: 'rgb(88 196 220)',
  nodejs: '#417e38',
  node: '#417e38',
  javascript: '#f7df1e',
  typescript: '#3178c6',
  html: '#e34f26',
  css: '#264de4',
  sass: '#cc6699',
  php: '#757bb5',
  python: '#3776ab',
  dotnet: '#512bd4',
  csharp: '#239120',
  'c#': '#e666cc',
  socketio: '#010101',
  'web audio api': '#0099ff',
  'pexels api': '#00c6ff',
  'net core': '#00c6ff',
  express: '#000000',
  'rest api': '#0066cc',
  'responsive design': '#00a89d'
};

const getTechColor = (value) => {
  const key = value.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9#]/g, '');
  return techColors[key] || '#2F3A46';
};

const ProductDetailsContent = ({ product, language, onBack }) => {
  const description = useMemo(
    () => (language === 'es' ? product.description_es : product.description_en),
    [language, product.description_es, product.description_en]
  );

  const technologies = product.technologies || [];

  return (
    <div className="product-detail__info">
      <div className="product-detail__header-row">
        <span className="product-detail__type">{typeLabels[product.type] || product.type}</span>
        <button type="button" className="button button-outline product-detail__back" onClick={onBack}>
          Volver
        </button>
      </div>

      <h1 className="product-detail__autor">{product.author}</h1>
      <div className="product-detail__section-divider" />
      {technologies.length > 0 && (
        <div className="product-detail__tech-section">
          <div className="product-detail__tech-list">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="product-detail__tech-chip"
                style={{ backgroundColor: getTechColor(tech) }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {!technologies.length && <div className="product-detail__section-divider" />}

      <div className="product-detail__description-card">
        <h2 className="product-detail__section-title">
          {language === 'es' ? 'Detalles del proyecto' : 'Project details'}
        </h2>
        <div className="product-detail__description-content">
          <ProductDetailsMarkdown text={description} language={language} />
        </div>
      </div>

      <div className="product-detail__actions">
        {product.source ? (
          <a className="button button-outline" href={product.source} target="_blank" rel="noreferrer noopener">
            Source
          </a>
        ) : null}
        {product.demo ? (
          <a className="button button-primary" href={product.demo} target="_blank" rel="noreferrer noopener">
            Demo
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default React.memo(ProductDetailsContent);
