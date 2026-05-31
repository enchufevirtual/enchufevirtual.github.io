'use client'

import { useContext, useState, useMemo, useCallback } from "react";
import { GlobalContext }  from "../context/GlobalContext";

import { database } from "@/database/database";
import Card from "@/containers/Card";

const Main = () => {
  const { globalValue } = useContext(GlobalContext);
  const [activeMenu, setActiveMenu] = useState(0);

  const menuItems = useMemo(() => [
    { label: 'Open Source', value: 'OPEN_SOURCE' },
    { label: 'Client Work', value: 'CLIENTS' },
    { label: 'Personal Projects', value: 'PERSONAL' }
  ], []);

  const selectedCategory = menuItems[activeMenu].value;

  const filteredCards = useMemo(() => {
    const initial = database.filter((item) => item.category === selectedCategory);
    if (globalValue && globalValue !== "CATEGORIES") {
      return initial.filter((item) => item.type === globalValue);
    }
    return initial;
  }, [selectedCategory, globalValue]);

  const handleMenuClick = useCallback((index) => {
    setActiveMenu(index);
  }, []);

  return (
    <div id="Main">
      <nav className="filter-menu" aria-label="Proyectos filter">
        {menuItems.map((item, i) => (
          <button
            key={item.value}
            type="button"
            className={`filter-menu__item ${activeMenu === i ? 'is-active' : ''}`}
            aria-pressed={activeMenu === i}
            onClick={() => handleMenuClick(i)}
          >
            <span className="filter-menu__dot" aria-hidden="true">●</span>
            <span className="filter-menu__label">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="Main_content">
        {filteredCards.length ? filteredCards.map((item) => (
          <Card key={item.slug} data={item} />
        )) : <p className="messageError">No results, try another category</p>}
      </div>
    </div>
  );
}

export default Main;
