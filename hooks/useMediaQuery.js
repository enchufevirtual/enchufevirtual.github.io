"use client"

import { useEffect, useState } from 'react';

function useMediaQuery(query, defaultMatches) {
  const [matches, setMatches] = useState(defaultMatches ?? false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;