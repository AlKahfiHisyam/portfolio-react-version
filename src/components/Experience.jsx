import styles from './Experience.module.css';

export const Experience = () => {
  const experiences = [
    {
      company: 'PT Pupuk Indonesia (Persero)',
      position: 'Full Stack Developer',
      location: 'Jakarta & Gresik, Indonesia',
      period: 'Jun 2022-Now',
      type: 'Full Stack Developer',
      achievements: [
        'Develop using Laravel and Golang for the backend and JQuery (Now Proses Refactoring With Next.js for the frontend)',
        'Created early 20 modules for the system within a span of 2.5 years',
        'Collaborated with UI/UX designers to implement new designs',
        'This project aims to digitize all Human Resources processes within the company into a single system'
      ]
    },
    {
      company: 'US-Based Digital Health Company',
      position: 'Full Stack Developer (Remote Contractor)',
      location: 'Florida, USA',
      period: 'Jun 2025-Jul 2025',
      type: 'Remote',
      achievements: [
        'Contributed to the development and maintenance of a healthcare platform, focusing on scaling and accuracy',
        'Integrated third-party APIs to support dynamic side search and location-based services',
        'Collaborated directly with QA engineers, CTO, and CEO in an agile environment'
      ]
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      location: 'Gresik, Indonesia',
      period: 'Aug 2021-Now',
      type: 'Freelance',
      achievements: [
        'Developing more than 10 web applications, both individually and collaboratively with a team',
        'Creating websites using Laravel, WordPress, Js, etc. according to the specified requirements'
      ]
    },
    {
      company: 'PT Andromedia',
      position: 'Full Stack Developer',
      location: 'Surabaya, Indonesia',
      period: 'Aug 2021-Jan 2022',
      type: 'Internship',
      achievements: [
        'Work as a programmer on a team tasked with developing electronic loan applications and tools list applications',
        'The project aims to help companies borrow office electronic equipment without buying them'
      ]
    },
    {
      company: 'PT Angga Membangun Indonesia (Build With Angga)',
      position: 'Web Designer',
      location: 'Bandung, Indonesia',
      period: 'Sep 2021-Dec 2021',
      type: 'Internship',
      achievements: [
        'Work as a web designer with the task of slicing designs into the web and fixing bugs on the company\'s web platform',
        'Created 25 instant web products',
        'Project link: https://elements.buildwithangga.com/'
      ]
    },
    {
      company: 'Agenda Kota Indonesia',
      position: 'Junior Web Programmer',
      location: 'Surabaya, Indonesia',
      period: 'Feb 2021-Apr 2021',
      type: 'Junior Developer',
      achievements: [
        'Work as a programmer with a team tasked with developing online event management website',
        'Agendakota is an integrated event management platform for finding vendors and venue events'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.stars}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Professional Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div className={styles.card}>
                <div className={styles.header}>
                  <h3>{exp.company}</h3>
                  <span className={styles.badge}>{exp.type}</span>
                </div>
                <p className={styles.position}>{exp.position}</p>
                <p className={styles.meta}>{exp.location} • {exp.period}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
