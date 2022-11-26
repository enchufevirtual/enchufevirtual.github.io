import React, { useState, useEffect } from "react";

const Footer = () => {

  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {getYear()}, [])

  return(
    <footer>
      <div className="socialMedia">
        <a href="https://github.com/orgs/enchufevirtual/repositories" aria-label="github" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://www.youtube.com/@enchufevirtual" aria-label="youtube" target="_blank"><i className="fab fa-youtube"></i></a>
        <a href="https://www.facebook.com/enchufevirtual" aria-label="facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/enchufevirtual" aria-label="instagram" target="_blank"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="copyright">
        <p>Copyright @ {date} | <a href="https://chendo.dev" aria-label="author">chendodev</a></p>
      </div>
    </footer>
  );
}

export default Footer;
