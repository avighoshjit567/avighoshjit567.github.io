import portfolio from "@/data/portfolio.json";

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}

export default function Home() {
  const { profile, highlights, skillGroups, projects, principles } = portfolio;

  return (
    <main className="site-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <span className="availability-pill">Available for work</span>
          <p className="hero-eyebrow">{profile.eyebrow}</p>
          <h1>{profile.headline}</h1>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="avatar-orb avatar-photo-wrap">
            <img
              className="avatar-photo"
              src={profile.image}
              alt={profile.name}
            />
          </div>
          <div className="hero-meta">
            <p className="meta-label">Name</p>
            <h2>{profile.name}</h2>
            <p className="meta-role">{profile.role}</p>
            <p className="meta-location">{profile.location}</p>
            <p className="meta-note">{profile.availability}</p>
          </div>
        </div>
      </section>

      <section className="highlight-grid">
        {highlights.map((item) => (
          <article className="glass-card highlight-card" key={item.label}>
            <p>{item.label}</p>
            <h3>{item.value}</h3>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <div className="content-main">
          <section className="glass-card section-card">
            <SectionTitle
              eyebrow="About"
              title="Product-minded full stack work"
              text="I like work that moves from idea to implementation without losing structure along the way."
            />
            <p className="body-copy">
              I mostly work with Laravel, PHP, Vue, JavaScript, TypeScript,
              Next.js, and Blade. I am comfortable across backend logic,
              frontend implementation, data structure, admin workflows, and
              practical deployment.
            </p>
            <p className="body-copy muted-copy">
              My strongest projects usually involve real product behavior,
              seller and customer flows, dashboards, internal tools, or
              workflow-heavy web apps that need both speed and discipline.
            </p>
          </section>

          <section className="glass-card section-card" id="projects">
            <SectionTitle
              eyebrow="Selected work"
              title="Projects that reflect how I build"
              text="A mix of public work and product-oriented private builds."
            />
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-topline">
                    <h3>{project.title}</h3>
                    {project.note ? <span>{project.note}</span> : null}
                  </div>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.stack.map((tech) => (
                      <span className="chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.links?.length ? (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="content-side">
          <section className="glass-card section-card">
            <SectionTitle
              eyebrow="Skills"
              title="Core stack"
              text="The tools I reach for most often."
            />
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-group">
                  <h3>{group.title}</h3>
                  <div className="chip-row">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card section-card">
            <SectionTitle
              eyebrow="Working style"
              title="How I like to build"
            />
            <ul className="principle-list">
              {principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </section>
        </aside>
      </section>

      <section className="contact-strip glass-card">
        <div>
          <p className="contact-label">Let’s build something useful.</p>
          <h2>If you need a practical full stack developer, I’d love to talk.</h2>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          <a className="button button-secondary" href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>
      </section>
    </main>
  );
}
