'use client'

import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GlobalContext } from '../context/GlobalContext';
import { database } from '@/database/database';
import ProductDetails from './ProductDetails';

const SearchPage = ({ slug }) => {
  const { language, data } = useContext(GlobalContext);
  const router = useRouter();

  const cleanSlug = typeof slug === 'string' ? slug.replace(/^\/+|\/+$/g, '') : String(slug || '');
  const product = database.find(item => item.slug === cleanSlug);

  return (
    <div id="Main" className="product-page">
      <div className="Main_content product-page__content">
        {product ? (
          <ProductDetails product={product} language={language} onBack={() => router.push('/')} />
        ) : (
          <div className="search-not-found">
            <p>Producto no encontrado.</p>
            <Link className="button button-primary" href="/">Volver al inicio</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
