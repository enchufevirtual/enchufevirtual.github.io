const contactMethods = [
  {
    label: "Enchufe Virtual",
    value: "contacto@enchufevirtual.com",
    href: "mailto:contacto@enchufevirtual.com",
    kind: "Correo",
    mark: "@",
  },
  {
    label: "Chendo",
    value: "chendo@enchufevirtual.com",
    href: "mailto:chendo@enchufevirtual.com",
    kind: "Correo",
    mark: "@",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/orgs/enchufevirtual/repositories",
    mark: "GH",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@enchufevirtual",
    mark: "YT",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/enchufevirtualec",
    mark: "f",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/enchufevirtual",
    mark: "IG",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-page__intro">
        <p className="contact-page__eyebrow">ENCHUFE VIRTUAL · CONTACTO</p>
        <h1>Hablemos de tu próximo proyecto.</h1>
        <p className="contact-page__lead">
          ¿Tienes una idea, una colaboración o una consulta? Escríbeme por el
          medio que te resulte más cómodo.
        </p>
      </header>

      <section className="contact-page__section" aria-labelledby="contact-emails">
        <h2 id="contact-emails">Correo electrónico</h2>
        <div className="contact-page__grid contact-page__grid--emails">
          {contactMethods.map(({ label, value, href, kind, mark }) => (
            <a className="contact-card" href={href} key={value}>
              <span className="contact-card__mark" aria-hidden="true">{mark}</span>
              <span className="contact-card__body">
                <span className="contact-card__kind">{kind}</span>
                <span className="contact-card__label">{label}</span>
                <span className="contact-card__value">{value}</span>
              </span>
              <span className="contact-card__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-page__section" aria-labelledby="contact-social">
        <h2 id="contact-social">También puedes encontrarnos en</h2>
        <div className="contact-page__grid contact-page__grid--socials">
          {socialLinks.map(({ label, href, mark }) => (
            <a
              className="contact-social"
              href={href}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-social__mark" aria-hidden="true">{mark}</span>
              <span>{label}</span>
              <span className="contact-card__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
