'use client'

import React, { useState, useMemo, useContext } from "react";
import Link from 'next/link'
import { GlobalContext } from "../context/GlobalContext";

const Card = ({ data }) => {
  const { language } = useContext(GlobalContext);
  const [pressed, setPressed] = useState(false);

  const description = useMemo(
    () => (language === 'es' ? data.description_card : data.description_en),
    [language, data.description_card, data.description_en]
  );

  const summary = useMemo(
    () => (description ? `${description.slice(0, 110)}${description.length > 110 ? '...' : ''}` : ''),
    [description]
  );

  const slug = useMemo(
    () => data.slug || data.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    [data.slug, data.title]
  );

  const cardClasses = `card ${pressed ? 'card--pressed' : ''}`;

  return (
    <article
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={cardClasses}
    >
      <div className="card-body">
        <div className="card-header">
          <span className="card-type">{data.type}</span>
          <h2>{data.title}</h2>
        </div>
        <p>{summary}</p>
          <Link className="button button-outline button-ev" href={`/search/${slug}`}>
            Leer más
          </Link>
      </div>
    </article>
  );
}

export default React.memo(Card);
