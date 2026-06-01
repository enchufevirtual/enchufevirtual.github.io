import React from 'react';
import ProductDetailsSidebar from './ProductDetailsSidebar';
import ProductDetailsContent from './ProductDetailsContent';

const ProductDetails = ({ product, language, onBack }) => (
  <article className="product-detail">
    <div className="product-detail__layout">
      <ProductDetailsSidebar product={product} />
      <ProductDetailsContent product={product} language={language} onBack={onBack} />
    </div>
  </article>
);

export default React.memo(ProductDetails);
