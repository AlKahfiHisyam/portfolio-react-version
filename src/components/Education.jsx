import styles from './Education.module.css';

export const Education = () => {
  const education = [
    {
      school: 'Airlangga University',
      location: 'Surabaya, Indonesia',
      degree: 'Associate Degree in Information Systems',
    }
  ];

  const certifications = [
    'LDP-TIK',
    'Dicoding',
    'Build With Angga',
    'Udemy',
    'Narada Code',
    'LinkedIn Learning'
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.stars}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        
        <div className={styles.content}>
          <div className={styles.educationCards}>
            {education.map((edu, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.icon}>🎓</div>
                <h3>{edu.school}</h3>
                <p className={styles.degree}>{edu.degree}</p>
                <p className={styles.meta}>{edu.location}</p>
                <p className={styles.period}>{edu.period}</p>
              </div>
            ))}
          </div>

          <div className={styles.certificationsSection}>
            <h3 className={styles.sectionTitle}>Certifications & Courses</h3>
            <div className={styles.certTags}>
              {certifications.map((cert, idx) => (
                <span key={idx} className={styles.tag}>
                  <span className={styles.tagIcon}>✓</span>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
