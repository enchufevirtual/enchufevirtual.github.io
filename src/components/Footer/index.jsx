"use client"

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return(
    <footer id="footer_container">
       <div className="copyright">
        <span className="footer-line"></span>
        <div className="verified-badge">
          <p>Copyright @ {year} | Enchufe Virtual 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#1877F2"/>
            <path d="M10.2 16.2L6 12L7.4 10.6L10.2 13.4L16.6 7L18 8.4L10.2 16.2Z" fill="white"/>
          </svg> </p> 
          <p style={{textAlign: 'center'}}>by Jorge Del Pezo</p>
        </div>
      </div>
      <div className="socialMedia">
        <a className="social-styles" href="https://github.com/orgs/enchufevirtual/repositories" aria-label="github" target="_blank">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.613-4.042-1.613-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.832 2.807 1.303 3.492.997.108-.775.42-1.303.763-1.603-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.958-.266 1.985-.398 3.005-.403 1.02.005 2.047.137 3.006.403 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.432.372.816 1.102.816 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a className="social-styles" href="https://www.youtube.com/@enchufevirtual" aria-label="youtube" target="_blank">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M23.498 6.186a2.995 2.995 0 0 0-2.108-2.118C19.57 3.5 12 3.5 12 3.5s-7.569 0-9.392.568A2.995 2.995 0 0 0 .5 6.186 31.71 31.71 0 0 0 0 12a31.71 31.71 0 0 0 .5 5.814 2.995 2.995 0 0 0 2.108 2.118C4.431 20.5 12 20.5 12 20.5s7.569 0 9.392-.568a2.995 2.995 0 0 0 2.108-2.118A31.71 31.71 0 0 0 24 12a31.71 31.71 0 0 0-.502-5.814zM9.75 15.02V8.98L16.5 12l-6.75 3.02z"/></svg>
        </a>
        <a className="social-styles" href="https://www.facebook.com/enchufevirtual" aria-label="facebook" target="_blank">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692V11.01h3.128V8.412c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.588l-.467 3.696h-3.121V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z"/></svg>
        </a>
        <a className="social-styles" href="https://www.instagram.com/enchufevirtual" aria-label="instagram" target="_blank">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm8.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
