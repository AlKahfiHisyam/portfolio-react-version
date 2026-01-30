import styles from './FeaturedProjects.module.css';

export const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'PISMART',
      description: 'A comprehensive Human Resources management system for PT Pupuk Indonesia, digitizing all HR processes including employee data, attendance, leave management, and payroll.',
      tags: ['Laravel', 'Golang', 'Next.js', 'PostgreSQL', 'Docker', 'JQuery', 'Bootstrap'],
      image: 'https://pismart.pupuk-indonesia.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Flumen-oauth-storage%2FBanner%2Fpismart-banner-v2.webp&w=1920&q=75',
      liveUrl: 'https://pismart.pupuk-indonesia.com/',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Build With Angga',
      description: 'A comprehensive online learning platform offering design and web development courses. Created a frontend interface for browsing courses, managing student progress, and accessing course materials with a modern, responsive design.',
      tags: ['Laravel', 'Bootstrap', 'MySQL'],
      image: 'https://buildwithangga.com/themes/front/images/logo_bwa_new.svg',
      liveUrl: 'https://buildwithangga.com/',
      githubUrl: '#',
      imageType: 'contain'
    },
    {
      id: 3,
      title: 'Agendakota',
      description: 'An integrated event management platform that helps users find and book vendors, venues, and manage events seamlessly.',
      tags: ['Laravel', 'Bootstrap', 'MySQL'],
      image: 'https://agendakota.id/images/FrontCover1.png',
      liveUrl: 'https://agendakota.id/',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Tracer Study UNAIR',
      description: 'A tracer study platform for Airlangga University to track and analyze graduate employment outcomes and career development.',
      tags: ['Laravel', 'Bootstrap', 'MySQL'],
      image: 'https://tracerstudy.unair.ac.id/assets/global/images/tracer-white.png',
      liveUrl: 'https://tracerstudy.unair.ac.id/',
      githubUrl: '#',
      imageType: 'contain'
    },
    {
      id: 5,
      title: 'JLOG',
      description: 'JLOG is a company specializing in logistics and supply chain solutions, providing efficient shipment management, real-time tracking, and delivery optimization services for businesses.',
      tags: ['WordPress', 'Elementor', 'MySQL'],
      image: 'https://jlog.id/wp-content/uploads/2025/08/JLOG-LOGO_SECONDARY_GREEN-e1755612487791.png',
      liveUrl: 'https://jlog.id/',
      githubUrl: '#',
      imageType: 'contain'
    },
    {
      id: 6,
      title: 'ERENT - Electronic Rental',
      description: 'A comprehensive electronic rental application platform for managing equipment rentals. Built with a modern tech stack featuring both web and mobile interfaces. Users can browse, rent, and track rental items with real-time availability updates.',
      tags: ['React/JS', 'Prisma', 'Tailwind CSS', 'Web App', 'Mobile App'],
      image: '/erent-placeholder.svg',
      liveUrl: '#',
      githubUrl: '#',
      isDeployed: false
    },
    {
      id: 7,
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
      </div>
    </section>
  );
};
