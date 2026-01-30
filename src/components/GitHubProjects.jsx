import { useState } from 'react';
import { useGitHubRepos } from '../hooks/useGitHub';
import styles from './GitHubProjects.module.css';

export const GitHubProjects = ({ username = 'alkahfifajrhulhisyam' }) => {
  const { repos, loading, error } = useGitHubRepos(username);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (error) {
    return (
      <section id="projects" className={styles.projects}>
        <div className={styles.stars}></div>
        <div className={styles.container}>
          <h2 className={styles.title}>My GitHub Projects</h2>
          <p className={styles.error}>Failed to load GitHub projects. Please check the username.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>My GitHub Projects</h2>
        <p className={styles.subtitle}>Latest repositories from my GitHub</p>
        
        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Loading repositories...</p>
          </div>
        ) : (
          <>
            {/* Desktop Grid */}
            <div className={styles.grid}>
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.header}>
                    <h3>{repo.name}</h3>
                    <div className={styles.meta}>
                      {repo.stargazers_count > 0 && (
                        <span className={styles.stars}>⭐ {repo.stargazers_count}</span>
                      )}
                      {repo.language && (
                        <span className={styles.language}>{repo.language}</span>
                      )}
                    </div>
                  </div>
                  <p className={styles.description}>{repo.description || 'No description provided'}</p>
                  <div className={styles.footer}>
                    <div className={styles.topics}>
                      {repo.topics?.slice(0, 3).map((topic) => (
                        <span key={topic} className={styles.topic}>{topic}</span>
                      ))}
                    </div>
                    <span className={styles.link}>Visit →</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className={styles.carouselWrapper}>
              <button 
                className={`${styles.navButton} ${styles.prev}`}
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? repos.length - 1 : prev - 1))}
                aria-label="Previous project"
              >
                ←
              </button>

              <div className={styles.carousel}>
                <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {repos.map((repo) => (
                    <div key={repo.id} className={styles.slide}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                      >
                        <div className={styles.header}>
                          <h3>{repo.name}</h3>
                          <div className={styles.meta}>
                            {repo.stargazers_count > 0 && (
                              <span className={styles.stars}>⭐ {repo.stargazers_count}</span>
                            )}
                            {repo.language && (
                              <span className={styles.language}>{repo.language}</span>
                            )}
                          </div>
                        </div>
                        <p className={styles.description}>{repo.description || 'No description provided'}</p>
                        <div className={styles.footer}>
                          <div className={styles.topics}>
                            {repo.topics?.slice(0, 3).map((topic) => (
                              <span key={topic} className={styles.topic}>{topic}</span>
                            ))}
                          </div>
                          <span className={styles.link}>Visit →</span>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => setCurrentIndex((prev) => (prev === repos.length - 1 ? 0 : prev + 1))}
                aria-label="Next project"
              >
                →
              </button>
            </div>

            <div className={styles.dots}>
              {repos.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
