export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__content">
        <span className="not-found-page__code">404</span>
        <h1>Página no encontrada</h1>
        <p>La página que buscas no existe o ha cambiado de dirección.</p>
        <a className="button button-primary" href="/">
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
