import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { featuredProjects, galleryProjects, ui } from '../data/portfolio';
import { PismartPanel } from './PismartPanel';
import { Reveal } from './Reveal';
import styles from './Work.module.css';

// What fills a card's picture: a live-site capture, the coded PI Smart illustration, or a logo.
const Media = ({ project, eager }) => {
  const { t } = useLanguage();
  if (project.shot) {
    return <img src={project.shot} alt="" loading={eager ? 'eager' : 'lazy'} className={styles.shot} />;
  }
  if (project.illustration) {
    return (
      <>
        <div className={styles.panel}><PismartPanel start="leave" inCard /></div>
        <span className={styles.badge}>{t(ui.work.illustration)}</span>
      </>
    );
  }
  return <img src={project.logo} alt="" loading="lazy" className={styles.logo} />;
};

const Card = ({ project, index }) => {
  const { t } = useLanguage();
  return (
    <Reveal as="li" delay={(index % 2) * 80}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
        <div className={`${styles.media} ${project.logo ? styles.logoMedia : ''}`}>
          <Media project={project} eager={index < 2} />
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>
            {project.title}
            <ArrowUpRight aria-hidden="true" />
          </h3>
          <p className={styles.kind}>{t(project.kind)}</p>
          {project.highlight && (
            <p className={styles.highlight}>
              <TrendingUp aria-hidden="true" />
              {t(project.highlight)}
            </p>
          )}
        </div>
      </a>
    </Reveal>
  );
};

export const Work = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="section section-subtle" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="work-title">{t(ui.work.title)}</h2>
          <p>{t(ui.work.intro)}</p>
        </Reveal>

        <ul className={`${styles.grid} swipe`}>
          {featuredProjects.map((project, i) => <Card key={project.title} project={project} index={i} />)}
        </ul>

        <Reveal as="h3" className={styles.minorTitle}>{t(ui.work.gallery)}</Reveal>
        <ul className={`${styles.minor} swipe`}>
          {galleryProjects.map((project, i) => {
            // Unreleased projects have no site to open, so their card is not a link.
            const Tag = project.url ? 'a' : 'div';
            const linkProps = project.url ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <Reveal as="li" key={project.title} delay={(i % 4) * 60}>
                <Tag {...linkProps} className={`${styles.card} ${project.url ? '' : styles.static}`}>
                  <div className={styles.media}>
                    <img src={project.shot} alt="" loading="lazy" className={project.preview ? styles.mock : styles.shot} />
                    {project.status && <span className={styles.badge}>{t(ui.work[project.status])}</span>}
                  </div>
                  <div className={styles.body}>
                    <h4 className={styles.minorName}>
                      {project.title}
                      {project.url && <ArrowUpRight aria-hidden="true" />}
                    </h4>
                    <p className={styles.kind}>{t(project.kind)}</p>
                  </div>
                </Tag>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
