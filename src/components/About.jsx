import styles from './About.module.css';

export const About = () => {
  const aboutCards = [
    {
      icon: '👨‍💻',
      title: 'Who I Am',
      description: 'A passionate software engineer with a keen eye for design. I specialize in creating applications across multiple platforms—from web and mobile to desktop solutions. With expertise in modern technologies, I transform ideas into functional and visually stunning digital products.'
    },
    {
      icon: '🚀',
      title: 'What I Do',
      description: 'I build full-stack solutions for diverse platforms using the latest frameworks and technologies. From frontend UI/UX design to backend architecture, database design to deployment, I handle the complete software development lifecycle with meticulous attention to performance and scalability.'
    },
    {
      icon: '🎯',
      title: 'My Goals',
      description: 'To continuously learn and evolve with the ever-changing tech landscape. I\'m committed to delivering high-quality solutions that make a real impact and help businesses achieve their digital transformation goals.'
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.stars}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.grid}>
          {aboutCards.map((card, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
