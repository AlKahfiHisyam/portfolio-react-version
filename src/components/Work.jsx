import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { featuredProjects, galleryProjects, ui } from '../data/portfolio';
import { PismartPanel } from './PismartPanel';
import { Reveal } from './Reveal';
import { SplitFlap } from './SplitFlap';
import { useInView } from './useInView';
import styles from './Work.module.css';

// The board's rows link here, so every project gets a stable anchor.
const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// What fills a gate's picture: a live-site capture, the coded PI Smart illustration, or a logo.
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

// A gate sign: black code plate, then the destination.
// The gate number spins in when the gate scrolls into view, and again on hover.
const Sign = ({ gate, project, as: Heading = 'h3' }) => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [bump, setBump] = useState(0);
  const run = inView ? 1 + bump : 0;
  return (
    <div ref={ref} className={styles.sign} onMouseEnter={() => inView && setBump((b) => b + 1)}>
      <span className={styles.gate}>
        <span className="sr-only">{t(ui.work.gate)} {gate}</span>
        <SplitFlap text={gate} length={gate.length} run={run} plate />
      </span>
      <div className={styles.dest}>
        <Heading className={styles.title}>{project.title}</Heading>
        <p className={styles.kind}>{t(project.kind)}</p>
      </div>
      <ArrowUpRight aria-hidden="true" className={styles.go} />
    </div>
  );
};

// Every gate ends on the same status row: the board's LIVE or LANDED, the role, and the result when there is one.
const Status = ({ project }) => {
  const { t } = useLanguage();
  return (
    <div className={styles.statusRow}>
      <p className={styles.role}>
        <span className={`${styles.state} ${styles[project.status]}`}>{t(ui.work[project.status])}</span>
        {t(project.role)}
      </p>
      {project.highlight && (
        <p className={styles.outcome}>
          <Check aria-hidden="true" />
          {t(project.highlight)}
        </p>
      )}
    </div>
  );
};

export const Work = () => {
  const { t } = useLanguage();
  const [lead, ...rest] = featuredProjects;

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="work-title">{t(ui.work.title)}</h2>
          <p>{t(ui.work.intro)}</p>
        </Reveal>

        <Reveal>
          <a id={`work-${slug(lead.title)}`} href={lead.url} target="_blank" rel="noopener noreferrer" className={`${styles.gateCard} ${styles.lead}`}>
            <Sign gate="A1" project={lead} />
            <div className={styles.leadBody}>
              <div className={styles.leadText}>
                <p>{t(lead.summary)}</p>
                <Status project={lead} />
                {lead.stack && <p className={styles.stack}>{lead.stack.join(' · ')}</p>}
              </div>
              <div className={styles.media}><Media project={lead} eager /></div>
            </div>
          </a>
        </Reveal>

        <ul className={`${styles.grid} swipe`}>
          {rest.map((project, i) => (
            <Reveal as="li" key={project.title} delay={(i % 2) * 80}>
              <a id={`work-${slug(project.title)}`} href={project.url} target="_blank" rel="noopener noreferrer" className={styles.gateCard}>
                <Sign gate={`A${i + 2}`} project={project} />
                <div className={`${styles.media} ${project.logo ? styles.logoMedia : ''}`}>
                  <Media project={project} eager={i < 2} />
                </div>
                <Status project={project} />
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal as="h3" className={styles.minorTitle}>{t(ui.work.gallery)}</Reveal>
        <ul className={styles.minor}>
          {galleryProjects.map((project) => {
            // Unreleased projects have no site to open, so their row is not a link.
            const Tag = project.url ? 'a' : 'div';
            const linkProps = project.url ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {};
            const status = project.status ?? 'live';
            return (
              <li key={project.title}>
                <Tag {...linkProps} className={styles.minorRow}>
                  <span className={`${styles.thumb} ${project.logo ? styles.thumbLogo : ''}`} aria-hidden="true">
                    <img src={project.shot} alt="" loading="lazy" />
                  </span>
                  <span className={styles.minorText}>
                    <span className={styles.minorName}>{project.title}</span>
                    <span className={styles.minorKind}>{t(project.kind)}</span>
                  </span>
                  <span className={`${styles.state} ${styles[status]}`}>
                    {t(ui.work[status])}
                    {project.url && <ArrowUpRight aria-hidden="true" />}
                  </span>
                </Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
