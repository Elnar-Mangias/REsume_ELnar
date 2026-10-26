import { profile } from './data.js';

function SectionHeading({ number, children }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function App() {
  return (
    <main className="page-shell">
      <div className="resume-card">
        <aside className="sidebar">
          <div className="monogram" aria-label="Инициалы ЭИ">ЭИ</div>
          <p className="eyebrow">РЕЗЮМЕ / 2026</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <div className="sidebar-rule" />
          <p className="sidebar-note">Учусь, развиваюсь и собираю свои работы в открытом портфолио.</p>
          <a className="github-link" href={profile.github} target="_blank" rel="noreferrer">
            <span className="github-mark" aria-hidden="true">↗</span>
            <span><small>МОЙ GITHUB</small><strong>{profile.githubUsername}</strong></span>
          </a>
          <div className="sidebar-footer">БИШКЕК · КЫРГЫЗСТАН</div>
        </aside>

        <div className="main-content">
          <section className="content-section intro-section">
            <SectionHeading number="01">Обо мне</SectionHeading>
            <p className="intro-copy">Студент КГИПИ по направлению разработки игр. Изучаю IT и работаю над учебными и личными проектами. Другие работы и исходный код доступны в моём GitHub.</p>
          </section>

          <section className="content-section">
            <SectionHeading number="02">Образование</SectionHeading>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <h3>{profile.education}</h3>
                <p>{profile.educationDetails}</p>
              </div>
              <span className="timeline-tag">СТУДЕНТ</span>
            </div>
          </section>

          <section className="content-section projects-section">
            <SectionHeading number="03">Проекты</SectionHeading>
            <div className="project-panel">
              <div className="project-icon" aria-hidden="true">⌘</div>
              <div className="project-copy">
                <h3>Учебные и личные проекты</h3>
                <p>Другие проекты, исходный код и обновления собраны в профиле GitHub.</p>
                <a href={profile.github} target="_blank" rel="noreferrer">Смотреть проекты <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </section>

          <section className="content-section contact-section">
            <SectionHeading number="04">Контакты</SectionHeading>
            <div className="contact-grid">
              <div className="contact-item"><span className="contact-label">EMAIL</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
              <div className="contact-item"><span className="contact-label">ТЕЛЕФОН</span><a href={`tel:${profile.phone}`}>{profile.phone}</a></div>
              <div className="contact-item"><span className="contact-label">ДАТА РОЖДЕНИЯ</span><span>{profile.birthDate}</span></div>
              <div className="contact-item"><span className="contact-label">GITHUB</span><a href={profile.github} target="_blank" rel="noreferrer">Elnar-Mangias ↗</a></div>
            </div>
          </section>

          <footer className="resume-footer">
            <span>ЭЛЬНАР ИСАБЕКОВ</span>
            <button type="button" onClick={() => window.print()}>Печать / сохранить PDF <span aria-hidden="true">↗</span></button>
          </footer>
        </div>
      </div>
    </main>
  );
}
