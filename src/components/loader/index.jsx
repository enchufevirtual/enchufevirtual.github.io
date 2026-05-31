"use client"

import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Loader = () => {
  const { load } = useContext(GlobalContext);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!load) {
      setHidden(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setHidden(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [load]);

  useEffect(() => {
    const hideLoader = () => setHidden(true);
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        hideLoader();
      }
    };

    window.addEventListener('pageshow', hideLoader);
    window.addEventListener('focus', hideLoader);
    window.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('pageshow', hideLoader);
      window.removeEventListener('focus', hideLoader);
      window.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <div className={`loading ${load ? 'loading-end' : ''} ${hidden ? 'loading-hidden' : ''}`}>
      <div className={load ? 'load-circle opacity' : 'load-circle'}></div>
    </div>
  );
}

export default Loader;
