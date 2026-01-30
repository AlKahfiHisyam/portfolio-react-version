import { useState } from 'react';
import styles from './FeaturedProjects.module.css';

export const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: 'PISMART',
      description: 'A comprehensive Human Resources management system for PT Pupuk Indonesia, digitizing all HR processes including employee data, attendance, leave management, and payroll.',
      tags: ['Laravel', 'Golang', 'Next.js', 'PostgreSQL', 'Docker', 'JQuery', 'Bootstrap'],
      image: '/assets/projects/pismart-banner.webp',
      liveUrl: 'https://pismart.pupuk-indonesia.com/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Build With Angga',
      description: 'A comprehensive online learning platform offering design and web development courses. Created a frontend interface for browsing courses, managing student progress, and accessing course materials with a modern, responsive design.',
      tags: ['Laravel', 'Bootstrap', 'MySQL'],
      image: '/assets/projects/build-with-angga.svg',
      liveUrl: 'https://buildwithangga.com/',
      githubUrl: '#',
      imageType: 'contain'
    },
    {
      id: 3,
      title: 'Private MD Labs',
      description: 'A patient-focused platform enabling users to easily book laboratory appointment services at medical labs across the United States. Features appointment scheduling, test result management, and seamless integration with lab networks.',
      tags: ['Laravel', 'Vue', 'PostgreSQL'],
      image: '/assets/projects/private-md-labs.svg',
      liveUrl: 'https://www.privatemdlabs.com/',
      githubUrl: '#',
      imageType: 'contain'
    },
    {
      id: 4,
      title: 'Agendakota',
      description: 'An integrated event management platform that helps users find and book vendors, venues, and manage events seamlessly.',
      tags: ['Laravel', 'Bootstrap', 'MySQL'],
      image: '/assets/projects/agendakota.png',
      liveUrl: 'https://agendakota.id/',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Tracer Study UNAIR',
      description: 'A tracer study platform for Airlangga University to track and analyze graduate employment outcomes and career development.',
      tags: ['Laravel', 'Bootstrap', 'MySQL'],
      image: '/assets/projects/tracer-study.png',
      liveUrl: 'https://tracerstudy.unair.ac.id/',
      githubUrl: '#',
      imageType: 'contain'
    },
    {
      id: 6,
      title: 'JLOG',
      description: 'JLOG is a company specializing in logistics and supply chain solutions, providing efficient shipment management, real-time tracking, and delivery optimization services for businesses.',
      tags: ['WordPress', 'Elementor', 'MySQL'],
      image: '/assets/projects/jlog.png',
      liveUrl: 'https://jlog.id/',
      githubUrl: '#',
      imageType: 'contain'
    },
    {
      id: 7,
      title: 'ERENT - Electronic Rental',
      description: 'A comprehensive electronic rental application platform for managing equipment rentals. Built with a modern tech stack featuring both web and mobile interfaces. Users can browse, rent, and track rental items with real-time availability updates.',
      tags: ['React/JS', 'Prisma', 'Tailwind CSS', 'Web App', 'Mobile App'],
      image: '/erent-placeholder.svg',
      liveUrl: '#',
      githubUrl: '#',
      isDeployed: false
    },
    {
      id: 8,
      title: 'Wonder Tamarind',
      description: 'A company profile website for Wonder Tamarind, an international tamarind export company specializing in exporting premium tamarind products to markets worldwide.',
      tags: ['WordPress', 'Elementor', 'MySQL'],
      image: null,
      icon: '🌾',
      liveUrl: '#',
      githubUrl: '#',
      isDeployed: false
    }
  ];

  return (
    <section id="featured" className={styles.featured}>
      <div className={styles.stars}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>Showcase of my best work and notable projects</p>
        
        {/* Desktop Grid */}
        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageContainer}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`${styles.image} ${project.imageType === 'contain' ? styles.imageContain : ''}`}
                  />
                ) : (
                  <div className={styles.iconDisplay}>{project.icon}</div>
                )}
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.links}>
                <a href={project.liveUrl} className={styles.link}>View Live →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navButton} ${styles.prev}`}
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1))}
            aria-label="Previous project"
          >
            ←
          </button>

          <div className={styles.carousel}>
            <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {featuredProjects.map((project) => (
                <div key={project.id} className={styles.slide}>
                  <div className={styles.card}>
                    <div className={styles.imageContainer}>
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className={`${styles.image} ${project.imageType === 'contain' ? styles.imageContain : ''}`}
                        />
                      ) : (
                        <div className={styles.iconDisplay}>{project.icon}</div>
                      )}
                    </div>
                    <div className={styles.content}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className={styles.tags}>
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.links}>
                      <a href={project.liveUrl} className={styles.link}>View Live →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navButton} ${styles.next}`}
            onClick={() => setCurrentIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1))}
            aria-label="Next project"
          >
            →
          </button>
        </div>

        <div className={styles.dots}>
          {featuredProjects.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
