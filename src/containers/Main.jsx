'use client'

import { useContext, useState, useMemo } from "react";
import { GlobalContext }  from "../context/GlobalContext";

import { database } from "@/database/database";
import Card from "@/containers/Card";

const Main = () => {
  const { globalValue, data } = useContext(GlobalContext);
  const [activeMenu, setActiveMenu] = useState(0);

  const menuItems = useMemo(() => [
    { label: data.main.categories?.[0] || 'Open Source', value: 'OPEN_SOURCE' },
    { label: data.main.categories?.[1] || 'Client Work', value: 'CLIENTS' },
    { label: data.main.categories?.[2] || 'Personal Projects', value: 'PERSONAL' }
  ], [data.main.categories]);

  const selectedCategory = menuItems[activeMenu].value;

  const filteredCards = useMemo(() => {
    const initial = database.filter((item) => item.category === selectedCategory);
    if (globalValue && globalValue !== "CATEGORIES") {
      return initial.filter((item) => item.type === globalValue);
    }
    return initial;
  }, [selectedCategory, globalValue]);

  return (
    <section id="Main" aria-labelledby="projects-title">
      <div className="projects__grid">
        <div className="projects__header">
          <p className="projects__eyebrow">{data.main.eyebrow}</p>
          <h2 id="projects-title">{data.main.p}</h2>
          <p className="projects__intro">{data.main.tagline}</p>
        </div>
        <div className="projects__filters">
          <div className="projects__filters-copy">
            <p className="projects__filters-title">{data.main.categoriesTitle}</p>
            <p className="projects__filters-hint">{data.main.categoriesHint}</p>
          </div>
          <nav className="filter-menu" aria-label={data.main.label}>
            {menuItems.map((item, i) => (
              <button
                key={item.value}
                type="button"
                className={`filter-menu__item ${activeMenu === i ? 'is-active' : ''}`}
                aria-pressed={activeMenu === i}
                onClick={() => setActiveMenu(i)}
              >
                <span className="filter-menu__label">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className={`Main_content${filteredCards.length <= 1 ? ' Main_content--focused' : ''}`}>
          {filteredCards.length ? filteredCards.map((item) => (
            <Card key={item.slug} data={item} readMoreLabel={data.main.action} />
          )) : <p className="messageError" role="status">{data.main.emptyState}</p>}
        </div>
      </div>
    </section>
  );
}

export default Main;
