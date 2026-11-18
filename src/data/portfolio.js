// All portfolio content lives here so copy changes never touch components.
// Text is either a plain string (same in both languages) or { en, id }.
//
// Assets you still need to add (each slot stays hidden until it is filled):
//   profile.photo        e.g. '/assets/profile.jpg'
//   profile.cv           e.g. '/assets/cv-al-kahfi.pdf'
//   project.screenshot   real (redacted) app screenshots, e.g. '/assets/projects/pismart-dashboard.png'
//   project.outcome      a short, true result line, e.g. { en: 'Used daily by 1,200 employees', id: '...' }
//   testimonials         real quotes only, with name and role

export const profile = {
  name: 'Al-Kahfi Fajrhul Hisyam',
  shortName: 'Al-Kahfi Hisyam',
  email: 'career.alkahfi@gmail.com',
  whatsapp: '6285854789879',
  linkedin: 'https://linkedin.com/in/careeralkahfi',
  github: 'AlKahfiHisyam',
  photo: null,
  cv: '/assets/cv-al-kahfi-2026.pdf',
};

export const whatsappLink = (text) =>
  `https://wa.me/${profile.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const ui = {
  nav: {
    work: { en: 'Work', id: 'Karya' },
    services: { en: 'Services', id: 'Layanan' },
    experience: { en: 'Experience', id: 'Pengalaman' },
    about: { en: 'About', id: 'Tentang' },
    cta: { en: 'Start a project', id: 'Mulai proyek' },
    sections: { en: 'Sections', id: 'Bagian' },
    language: { en: 'Language', id: 'Bahasa' },
    toDark: { en: 'Switch to dark theme', id: 'Ganti ke tema gelap' },
    toLight: { en: 'Switch to light theme', id: 'Ganti ke tema terang' },
  },
  hero: {
    headline: {
      en: 'I build the systems companies run on.',
      id: 'Saya membangun sistem yang dipakai perusahaan.',
    },
    lead: {
      en: 'Full stack and AI application engineer behind PI Smart, the HR app used by 30,000+ employees at Pupuk Indonesia.',
      id: 'Full stack & AI application engineer di balik PI Smart, aplikasi HR yang dipakai 30.000+ karyawan Pupuk Indonesia.',
    },
    primary: { en: 'Start a project', id: 'Mulai proyek' },
    whatsapp: { en: 'Chat on WhatsApp', id: 'Chat via WhatsApp' },
    whatsappText: {
      en: 'Hi Al-Kahfi, I found your portfolio and would like to talk about a project.',
      id: 'Halo Al-Kahfi, saya melihat portfolio Anda dan ingin diskusi tentang sebuah proyek.',
    },
    available: {
      en: 'Open to projects, remote contracts and full\u2011time roles.',
      id: 'Terbuka untuk proyek, kontrak remote, dan posisi full\u2011time.',
    },
    showcase: { en: 'Recent work', id: 'Karya terbaru' },
    slide: { en: 'Show', id: 'Tampilkan' },
    localTime: { en: 'Gresik, Indonesia. Local time', id: 'Gresik, Indonesia. Waktu setempat' },
    shippedFor: { en: 'Shipped for', id: 'Pernah dikerjakan untuk' },
  },
  panel: {
    product: 'PI Smart',
    subtitle: { en: 'HR platform', id: 'Platform HR' },
    modules: [
      { icon: 'users', view: null, label: { en: 'Employee records', id: 'Data karyawan' } },
      { icon: 'clock', view: 'attendance', label: { en: 'Attendance', id: 'Kehadiran' } },
      { icon: 'calendar', view: 'leave', label: { en: 'Leave', id: 'Cuti' } },
      { icon: 'wallet', view: 'payroll', label: { en: 'Payroll', id: 'Penggajian' } },
    ],
    more: { en: '20+ modules shipped', id: '20+ modul dirilis' },
    approved: { en: 'Approved', id: 'Disetujui' },
    pending: { en: 'Pending', id: 'Menunggu' },
    caption: {
      en: 'Illustration of PI Smart with sample data, not a screenshot.',
      id: 'Ilustrasi PI Smart dengan data contoh, bukan tangkapan layar.',
    },
    // Sample data for the illustration only: departments and dates, never people.
    leave: {
      heading: { en: 'Leave requests', id: 'Pengajuan cuti' },
      rows: [
        { type: 'annual', title: { en: 'Annual leave, 3 days', id: 'Cuti tahunan, 3 hari' }, detail: { en: '2–4 Dec, Finance', id: '2–4 Des, Keuangan' }, status: 'approved' },
        { type: 'sick', title: { en: 'Sick leave, 1 day', id: 'Cuti sakit, 1 hari' }, detail: { en: '18 Nov, Production', id: '18 Nov, Produksi' }, status: 'live' },
        { type: 'annual', title: { en: 'Annual leave, 5 days', id: 'Cuti tahunan, 5 hari' }, detail: { en: '22–26 Dec, IT', id: '22–26 Des, TI' }, status: 'approved' },
        { type: 'study', title: { en: 'Study leave, 3 days', id: 'Cuti studi, 3 hari' }, detail: { en: '6–8 Jan, Human Resources', id: '6–8 Jan, SDM' }, status: 'pending' },
      ],
    },
    attendance: {
      heading: { en: 'Attendance today', id: 'Kehadiran hari ini' },
      columns: { en: ['Department', 'Present', 'On leave', 'Late'], id: ['Departemen', 'Hadir', 'Cuti', 'Terlambat'] },
      rows: [
        { dept: { en: 'Production', id: 'Produksi' }, present: '212 / 220', leave: 5, late: 3 },
        { dept: { en: 'Finance', id: 'Keuangan' }, present: '38 / 40', leave: 2, late: 0 },
        { dept: { en: 'IT', id: 'TI' }, present: '27 / 28', leave: 0, late: 1 },
        { dept: { en: 'Human Resources', id: 'SDM' }, present: '19 / 21', leave: 1, late: 1 },
        { dept: { en: 'Logistics', id: 'Logistik' }, present: '64 / 66', leave: 1, late: 1 },
      ],
    },
    payroll: {
      heading: { en: 'Payroll run, November', id: 'Proses gaji, November' },
      done: { en: 'Done', id: 'Selesai' },
      running: { en: 'Running', id: 'Berjalan' },
      steps: [
        { en: 'Attendance locked for the period', id: 'Kehadiran periode dikunci' },
        { en: 'Overtime and allowances calculated', id: 'Lembur dan tunjangan dihitung' },
        { en: 'Income tax (PPh 21) calculated', id: 'Pajak penghasilan (PPh 21) dihitung' },
        { en: 'Payslips sent to employees', id: 'Slip gaji dikirim ke karyawan' },
      ],
    },
  },
  paths: {
    title: { en: 'Two ways to work with me', id: 'Dua cara bekerja sama' },
    build: {
      title: { en: 'Need something built?', id: 'Butuh sesuatu dibangun?' },
      intro: {
        en: 'For business owners and teams who need software that works, not a science project.',
        id: 'Untuk pemilik usaha dan tim yang butuh software yang berjalan, bukan eksperimen.',
      },
      items: [
        { en: 'Company websites that load fast, rank on Google and bring in leads', id: 'Website perusahaan yang cepat, muncul di Google, dan mendatangkan calon klien' },
        { en: 'Internal systems: HR, operations, approvals, dashboards', id: 'Sistem internal: HR, operasional, persetujuan, dashboard' },
        { en: 'AI features: assistants, document processing, automated workflows with LLMs', id: 'Fitur AI: asisten, pengolahan dokumen, alur kerja otomatis dengan LLM' },
        { en: 'Fixes and new features for an existing Laravel or React app', id: 'Perbaikan dan fitur baru untuk aplikasi Laravel atau React yang sudah ada' },
      ],
      cta: { en: 'Chat on WhatsApp', id: 'Chat via WhatsApp' },
      secondary: { en: 'Send a project brief', id: 'Kirim deskripsi proyek' },
    },
    hire: {
      title: { en: 'Hiring?', id: 'Sedang merekrut?' },
      intro: {
        en: 'Open to full-time roles and remote contracts as a full stack or AI application engineer. Based in Gresik, working in UTC+7.',
        id: 'Terbuka untuk posisi full-time dan kontrak remote sebagai full stack atau AI application engineer. Berbasis di Gresik, zona waktu UTC+7.',
      },
      items: [
        { en: '4+ years at PT Pupuk Indonesia: PI Smart, used by 30,000+ employees', id: '4+ tahun di PT Pupuk Indonesia: PI Smart, dipakai 30.000+ karyawan' },
        { en: 'Digitalization Lead at JLOG since 2025', id: 'Digitalization Lead di JLOG sejak 2025' },
        { en: 'Laravel, Golang, Next.js, PostgreSQL, LLM APIs, Docker', id: 'Laravel, Golang, Next.js, PostgreSQL, LLM API, Docker' },
        { en: 'Best Graduate, Information Systems, Universitas Airlangga', id: 'Lulusan Terbaik, Sistem Informasi, Universitas Airlangga' },
      ],
      cv: { en: 'Download CV', id: 'Unduh CV' },
      email: { en: 'Email me', id: 'Kirim email' },
      linkedin: { en: 'View LinkedIn', id: 'Lihat LinkedIn' },
    },
  },
  work: {
    title: { en: 'Selected work', id: 'Karya pilihan' },
    intro: {
      en: 'Enterprise systems, internal tools and websites for companies, institutions and foundations.',
      id: 'Sistem perusahaan, aplikasi internal, dan website untuk perusahaan, institusi, dan yayasan.',
    },
    visit: { en: 'Visit site', id: 'Kunjungi situs' },
    stack: { en: 'Built with', id: 'Dibangun dengan' },
    more: { en: 'More projects', id: 'Proyek lainnya' },
    illustration: { en: 'Illustration', id: 'Ilustrasi' },
    preview: { en: 'Preview', id: 'Pratinjau' },
    gallery: { en: 'Smaller projects', id: 'Proyek lainnya' },
    notPublic: { en: 'Not public', id: 'Tidak publik' },
    inProgress: { en: 'In progress', id: 'Sedang dikerjakan' },
  },
  proof: {
    title: { en: 'In numbers', id: 'Dalam angka' },
    items: [
      { value: 30000, suffix: '+', label: { en: 'employees use PI Smart across 10+ Pupuk Indonesia companies', id: 'karyawan memakai PI Smart di 10+ perusahaan grup Pupuk Indonesia' } },
      { value: 20, suffix: '+', label: { en: 'HR modules shipped: KPI, travel, promotions, reimbursement and more', id: 'modul HR dirilis: KPI, perjalanan dinas, promosi, reimbursement, dan lainnya' } },
      { value: 15, suffix: '+', label: { en: 'web apps delivered for clients in e-commerce, education and health', id: 'aplikasi web untuk klien di e-commerce, pendidikan, dan kesehatan' } },
      { value: 7, suffix: { en: ' a day', id: ' per hari' }, label: { en: 'qualified leads from JLOG’s rebuilt website, up from 1–3 a week', id: 'calon klien dari website baru JLOG, sebelumnya 1–3 per minggu' } },
    ],
  },
  process: {
    title: { en: 'How a project runs', id: 'Alur sebuah proyek' },
    intro: {
      en: 'No jargon and no surprises. You always know what is being built and what comes next.',
      id: 'Tanpa istilah rumit dan tanpa kejutan. Anda selalu tahu apa yang sedang dibangun dan langkah berikutnya.',
    },
    steps: [
      {
        title: { en: 'Tell me what you need', id: 'Ceritakan kebutuhan Anda' },
        text: { en: 'A short chat on WhatsApp or a call about the problem, the users and the deadline.', id: 'Obrolan singkat via WhatsApp atau telepon tentang masalah, pengguna, dan tenggat waktu.' },
      },
      {
        title: { en: 'Scope, timeline and price', id: 'Lingkup, jadwal, dan biaya' },
        text: { en: 'A written proposal: what will be built, in what order, and what it costs.', id: 'Proposal tertulis: apa yang dibangun, urutannya, dan biayanya.' },
      },
      {
        title: { en: 'Build and review', id: 'Bangun dan tinjau' },
        text: { en: 'Working versions you can click through as the project grows, not just at the end.', id: 'Versi yang bisa Anda coba selama proyek berjalan, bukan hanya di akhir.' },
      },
      {
        title: { en: 'Launch and handover', id: 'Rilis dan serah terima' },
        text: { en: 'Deployment to your server or hosting, and a walkthrough for your team.', id: 'Deploy ke server atau hosting Anda, dan penjelasan untuk tim Anda.' },
      },
    ],
  },
  experience: {
    title: { en: 'Experience', id: 'Pengalaman' },
    earlier: { en: 'Earlier roles', id: 'Pengalaman sebelumnya' },
    current: { en: 'Now', id: 'Sekarang' },
    intro: {
      en: 'Four roles running in parallel today: an enterprise, a logistics company, a foundation and my own clients.',
      id: 'Empat peran berjalan bersamaan hari ini: perusahaan besar, perusahaan logistik, yayasan, dan klien sendiri.',
    },
  },
  about: {
    title: { en: 'About', id: 'Tentang' },
    toolkit: { en: 'Toolkit', id: 'Keahlian' },
    education: { en: 'Education', id: 'Pendidikan' },
    courses: { en: 'Certifications', id: 'Sertifikasi' },
    photoAlt: { en: 'Portrait of Al-Kahfi Hisyam', id: 'Foto Al-Kahfi Hisyam' },
    statement: {
      en: 'I turn messy business processes into software people rely on, and the next developer can still maintain.',
      id: 'Saya mengubah proses bisnis yang rumit menjadi software yang bisa diandalkan, dan tetap mudah dirawat developer berikutnya.',
    },
    best: { en: 'Best Graduate', id: 'Lulusan Terbaik' },
    gpa: { en: 'GPA 3.74 / 4.00, Information Systems, Universitas Airlangga', id: 'IPK 3,74 / 4,00, Sistem Informasi, Universitas Airlangga' },
    certTitle: { en: 'Certified', id: 'Bersertifikat' },
  },
  activity: {
    total: { en: 'contributions on GitHub', id: 'kontribusi di GitHub' },
    rest: { en: 'in the last year.', id: 'dalam setahun terakhir.' },
    busiest: { en: 'Busiest week', id: 'Minggu tersibuk' },
  },
  testimonials: {
    title: { en: 'What people say', id: 'Kata mereka' },
  },
  contact: {
    title: { en: 'Tell me what you need', id: 'Ceritakan kebutuhan Anda' },
    intro: {
      en: 'WhatsApp is the fastest way to reach me. Email and the form work just as well.',
      id: 'WhatsApp adalah cara tercepat menghubungi saya. Email dan formulir juga sama baiknya.',
    },
    name: { en: 'Name', id: 'Nama' },
    email: { en: 'Email', id: 'Email' },
    message: { en: 'What do you need?', id: 'Apa yang Anda butuhkan?' },
    messageHint: {
      en: 'For example: a company profile site for our logistics business, needed by March.',
      id: 'Contoh: website company profile untuk usaha logistik kami, dibutuhkan bulan Maret.',
    },
    send: { en: 'Send message', id: 'Kirim pesan' },
    sending: { en: 'Sending…', id: 'Mengirim…' },
    sent: { en: 'Message sent. I will reply to the email you entered.', id: 'Pesan terkirim. Saya akan membalas ke email yang Anda isi.' },
    failed: {
      en: 'The message did not send. Check your connection and try again, or email me directly.',
      id: 'Pesan gagal terkirim. Periksa koneksi lalu coba lagi, atau kirim email langsung.',
    },
    or: { en: 'Or write directly', id: 'Atau hubungi langsung' },
  },
  footer: {
    top: { en: 'Back to top', id: 'Kembali ke atas' },
    line: { en: 'Have something to build? Let’s talk.', id: 'Ada yang ingin dibangun? Mari ngobrol.' },
    role: { en: 'Full stack & AI application engineer, Gresik, Indonesia', id: 'Full stack & AI application engineer, Gresik, Indonesia' },
  },
};

export const clients = ['PT Pupuk Indonesia', 'JLOG', 'Tergar Indonesia', 'Universitas Airlangga', 'Private MD Labs', 'Agendakota', 'Build With Angga'];

// `shot` is a full-page capture of the live site; it scrolls inside a browser frame.
// `tint` names the tile colour (see Work.module.css).
export const featuredProjects = [
  {
    title: 'PI Smart',
    kind: { en: 'HR super app, PT Pupuk Indonesia', id: 'Aplikasi HR, PT Pupuk Indonesia' },
    summary: {
      en: 'One platform for employee data, attendance, leave, payroll, KPI, travel, promotions and reimbursement. I led 20+ modules on Laravel and Golang services that sync with the companion mobile app, and I am moving the frontend from jQuery to React and Next.js.',
      id: 'Satu platform untuk data karyawan, kehadiran, cuti, penggajian, KPI, perjalanan dinas, promosi, dan reimbursement. Saya memimpin 20+ modul di layanan Laravel dan Golang yang tersinkron dengan aplikasi mobile-nya, dan sedang memindahkan frontend dari jQuery ke React dan Next.js.',
    },
    outcome: { en: 'Used by 30,000+ employees across 10+ companies.', id: 'Dipakai 30.000+ karyawan di 10+ perusahaan.' },
    highlight: { en: '30,000+ employees', id: '30.000+ karyawan' },
    role: { en: 'Full stack developer, 2022 to now', id: 'Full stack developer, 2022 sampai sekarang' },
    stack: ['Laravel', 'Golang', 'Next.js', 'PostgreSQL', 'Docker'],
    // Internal system behind a login: shown as a coded illustration until a real screenshot is added.
    illustration: true,
    screenshot: null,
    tint: 'blue',
    url: 'https://pismart.pupuk-indonesia.com/',
  },  {
    title: 'JLOG',
    kind: { en: 'Logistics company website and SEO', id: 'Website dan SEO perusahaan logistik' },
    summary: {
      en: 'I rebuilt the corporate website and SEO for a freight and customs logistics company, so prospects find JLOG on Google and ask for a quote.',
      id: 'Saya membangun ulang website dan SEO perusahaan logistik dan kepabeanan, agar calon klien menemukan JLOG di Google lalu meminta penawaran.',
    },
    outcome: { en: 'From 1–3 inbound leads a week to 7 qualified leads a day.', id: 'Dari 1–3 calon klien per minggu menjadi 7 per hari.' },
    highlight: { en: '7 leads a day, up from 1–3 a week', id: '7 calon klien/hari, dari 1–3/minggu' },
    role: { en: 'Digitalization Lead, 2025 to now', id: 'Digitalization Lead, 2025 sampai sekarang' },
    stack: ['WordPress', 'Elementor', 'SEO'],
    shot: '/assets/shots/jlog.webp',
    tint: 'green',
    url: 'https://jlog.id/',
  },
  {
    title: 'JLOG SuperApp',
    kind: { en: 'Internal operations app', id: 'Aplikasi operasional internal' },
    summary: {
      en: 'One app for JLOG’s day-to-day operations, so commercial, operations and finance work from the same data. Customers can also track shipment progress without logging in.',
      id: 'Satu aplikasi untuk operasional harian JLOG, sehingga komersial, operasional, dan keuangan bekerja dari data yang sama. Pelanggan juga bisa melacak progres shipment tanpa login.',
    },
    role: { en: 'Digitalization Lead, 2025 to now', id: 'Digitalization Lead, 2025 sampai sekarang' },
    stack: null,
    shot: '/assets/shots/jlogsuperapp.webp',
    tint: 'lime',
    url: 'https://superapp.jlog.id/',
  },
  {
    title: 'Private MD Labs',
    kind: { en: 'Lab test booking, USA', id: 'Pemesanan tes lab, AS' },
    summary: {
      en: 'Patients across the United States pick a test, find a nearby lab and get results online. I worked on lab location data, search and geolocation, and accessible interfaces.',
      id: 'Pasien di seluruh Amerika Serikat memilih tes, menemukan lab terdekat, dan menerima hasil secara online. Saya mengerjakan data lokasi lab, pencarian dan geolokasi, serta antarmuka yang aksesibel.',
    },
    role: { en: 'Full stack developer, remote, 2025', id: 'Full stack developer, remote, 2025' },
    stack: ['Laravel', 'Vue', 'PostgreSQL'],
    shot: '/assets/shots/privatemdlabs.webp',
    tint: 'slate',
    url: 'https://www.privatemdlabs.com/',
  },  {
    title: 'Tergar Indonesia',
    kind: { en: 'Foundation website, webmaster', id: 'Website yayasan, webmaster' },
    summary: {
      en: 'I run tergar.or.id: performance, security, SEO, online registration and event content, including Yongey Mingyur Rinpoche’s visit to Indonesia in November 2026.',
      id: 'Saya mengelola tergar.or.id: performa, keamanan, SEO, pendaftaran online, dan konten acara, termasuk kunjungan Yongey Mingyur Rinpoche ke Indonesia pada November 2026.',
    },
    role: { en: 'Webmaster, 2026 to now', id: 'Webmaster, 2026 sampai sekarang' },
    stack: ['WordPress', 'Elementor'],
    shot: '/assets/shots/tergar.webp',
    tint: 'amber',
    url: 'https://tergar.or.id/',
  },
  {
    title: 'Agendakota',
    kind: { en: 'Event management platform', id: 'Platform manajemen acara' },
    summary: {
      en: 'Organisers find vendors and venues, sell tickets and track sales from one dashboard. I built vendor and venue discovery features.',
      id: 'Penyelenggara mencari vendor dan venue, menjual tiket, dan memantau penjualan dari satu dashboard. Saya membangun fitur pencarian vendor dan venue.',
    },
    role: { en: 'Junior web programmer, 2021', id: 'Junior web programmer, 2021' },
    stack: ['Laravel', 'Bootstrap', 'MySQL'],
    shot: '/assets/shots/agendakota.webp',
    tint: 'pink',
    url: 'https://agendakota.id/',
  },
  {
    title: 'Tracer Study UNAIR',
    kind: { en: 'Graduate survey, Universitas Airlangga', id: 'Survei alumni, Universitas Airlangga' },
    summary: {
      en: 'The university surveys its graduates and tracks where they work and how their careers develop.',
      id: 'Universitas mensurvei alumninya dan memantau tempat kerja serta perkembangan karier mereka.',
    },
    role: { en: 'Web developer', id: 'Web developer' },
    stack: ['Laravel', 'Bootstrap', 'MySQL'],
    shot: '/assets/shots/tracerstudy.webp',
    tint: 'blue',
    url: 'https://tracerstudy.unair.ac.id/',
  },
  {
    title: 'Build With Angga',
    kind: { en: 'Web templates for an online course platform', id: 'Template web untuk platform kursus online' },
    summary: {
      en: 'Turned Figma designs into 25 ready-to-use web products for the BuildWithAngga library, and fixed frontend bugs on the main platform.',
      id: 'Mengubah desain Figma menjadi 25 produk web siap pakai untuk library BuildWithAngga, dan memperbaiki bug frontend di platform utama.',
    },
    role: { en: 'Web designer intern, 2021', id: 'Web designer (magang), 2021' },
    stack: ['HTML', 'CSS', 'JavaScript'],
    logo: '/assets/projects/build-with-angga.svg',
    tint: 'violet',
    url: 'https://buildwithangga.com/',
  },
];

// Smaller pieces, shown as a gallery. Hovering a thumbnail scrolls through the captured page.
export const galleryProjects = [
  { title: 'Cerita Anak', kind: { en: 'AI children’s storybook maker', id: 'Pembuat buku cerita anak dengan AI' }, stack: { en: 'AI, web app', id: 'AI, aplikasi web' }, shot: '/assets/shots/ceritaanak.webp', url: 'https://ceritaanak.web.id/' },
  { title: 'Smart Water Record', kind: { en: 'Health cards for water sources', id: 'Kartu kesehatan sumber air' }, stack: { en: 'Web app, QR', id: 'Aplikasi web, QR' }, shot: '/assets/shots/smartwater.webp', url: 'https://smartwaterrecord.web.id/' },
  { title: 'Memori Desa', kind: { en: 'Community memory hub for villages', id: 'Arsip memori komunitas desa' }, stack: 'Next.js', shot: '/assets/shots/memoridesa.webp', url: 'https://memoridesa.my.id/' },
  { title: 'Desa Tegalsiwalan', kind: { en: 'Village website and shallot archive', id: 'Website desa dan arsip bawang merah' }, stack: 'Next.js', shot: '/assets/shots/tegalsiwalan.webp', url: 'https://tegalsiwalan.web.id/' },
  { title: 'Kelurahan Sukorame', kind: { en: 'Kelurahan website, Gresik', id: 'Website kelurahan, Gresik' }, stack: 'Next.js', shot: '/assets/shots/sukorame.webp', url: 'https://desasukorame.web.id/' },
  { title: 'Kost Cemara Gresik', kind: { en: 'Boarding house website', id: 'Website rumah kos' }, stack: 'React', shot: '/assets/shots/kostcemara.webp', url: 'https://kostcemaragresik.netlify.app/' },
  { title: 'Psycho AI', kind: { en: 'AI personality assessment', id: 'Tes kepribadian dengan AI' }, stack: 'React, Node.js, MongoDB', shot: '/assets/shots/psychoai.webp', url: 'https://psycho-ai.onrender.com/' },
  // Not public yet: `preview` marks a drawn mock-up rather than a capture of a live site.
  { title: 'ERENT', kind: { en: 'Electronics rental, web and mobile', id: 'Sewa elektronik, web dan mobile' }, stack: 'React, Prisma, Tailwind CSS', shot: '/assets/shots/erent-preview.svg', preview: true, url: null, status: 'inProgress' },
  { title: 'Wonder Tamarind', kind: { en: 'Tamarind exporter profile', id: 'Profil eksportir asam jawa' }, stack: 'WordPress, Elementor', shot: '/assets/shots/wondertamarind-preview.svg', preview: true, url: null, status: 'notPublic' },
];


// The first `recentCount` jobs are always shown; the rest sit under "Earlier roles".
export const recentCount = 5;

export const experience = [
  {
    period: { en: '2025 – now', id: '2025 – sekarang' },
    company: 'Januardi Logistik (JLOG)',
    current: true,
    mark: { color: '#65a30d', logo: '/assets/logos/jlog.svg', plate: '#111111' },
    role: { en: 'Digitalization Lead, Surabaya (hybrid)', id: 'Digitalization Lead, Surabaya (hybrid)' },
    points: [
      { en: 'Leads digital transformation across commercial, operations and finance at a logistics company with no internal IT team.', id: 'Memimpin transformasi digital di bagian komersial, operasional, dan keuangan pada perusahaan logistik tanpa tim IT internal.' },
      { en: 'Built JLOG SuperApp to centralise operational workflows across departments.', id: 'Membangun JLOG SuperApp untuk menyatukan alur kerja operasional antar departemen.' },
      { en: 'Rebuilt the website and SEO: from 1–3 inbound leads a week to an average of 7 qualified leads a day.', id: 'Membangun ulang website dan SEO: dari 1–3 calon klien per minggu menjadi rata-rata 7 per hari.' },
      { en: 'Owns the technology roadmap and works with outside software vendors.', id: 'Menyusun roadmap teknologi dan bekerja sama dengan vendor software.' },
    ],
  },
  {
    period: { en: '2022 – now', id: '2022 – sekarang' },
    company: 'PT Pupuk Indonesia (Persero)',
    current: true,
    mark: { color: '#2563eb', logo: '/assets/logos/pupuk-indonesia.png' },
    role: { en: 'Full stack developer, HR & Finance Digitalisation, Jakarta and Gresik', id: 'Full stack developer, Staf Digitalisasi SDM & Keuangan, Jakarta dan Gresik' },
    points: [
      { en: 'Led 20+ modules for PI Smart, the HR super app for 30,000+ employees: KPI, travel, promotions, reimbursement and more.', id: 'Memimpin 20+ modul PI Smart, aplikasi HR untuk 30.000+ karyawan: KPI, perjalanan dinas, promosi, reimbursement, dan lainnya.' },
      { en: 'Built Laravel and Golang services that sync data with the companion mobile app across 10+ subsidiaries.', id: 'Membangun layanan Laravel dan Golang yang menyinkronkan data dengan aplikasi mobile di 10+ anak perusahaan.' },
      { en: 'Moving the frontend from jQuery to React and Next.js, and tuning PostgreSQL for data-heavy dashboards.', id: 'Memindahkan frontend dari jQuery ke React dan Next.js, serta mengoptimalkan PostgreSQL untuk dashboard dengan data besar.' },
      { en: 'Ships in agile sprints with mobile, QA and business analysts at a 95%+ on-time rate.', id: 'Merilis dalam sprint agile bersama tim mobile, QA, dan analis bisnis dengan ketepatan waktu 95%+.' },
    ],
  },
  {
    period: { en: '2026 – now', id: '2026 – sekarang' },
    company: 'Tergar Indonesia',
    current: true,
    mark: { color: '#b45309', logo: '/assets/logos/tergar.webp' },
    role: { en: 'Webmaster, remote', id: 'Webmaster, remote' },
    points: [
      { en: 'Runs tergar.or.id: performance, security, SEO, online registration and event content.', id: 'Mengelola tergar.or.id: performa, keamanan, SEO, pendaftaran online, dan konten acara.' },
      { en: 'Prepared the site for Yongey Mingyur Rinpoche’s visit to Indonesia in November 2026.', id: 'Menyiapkan situs untuk kunjungan Yongey Mingyur Rinpoche ke Indonesia pada November 2026.' },
    ],
  },
  {
    period: '2025',
    company: { en: 'US-based digital health company', id: 'Perusahaan kesehatan digital di AS' },
    mark: { color: '#dc2626', logo: '/assets/logos/health-company.svg', cover: true },
    role: { en: 'Full stack developer, remote contract, Florida, USA', id: 'Full stack developer, kontrak remote, Florida, AS' },
    points: [
      { en: 'Built lab location data and admin tools in Laravel and JavaScript.', id: 'Membangun data lokasi lab dan alat admin dengan Laravel dan JavaScript.' },
      { en: 'Integrated third-party APIs for lab search and geolocation.', id: 'Mengintegrasikan API pihak ketiga untuk pencarian lab dan geolokasi.' },
      { en: 'Shipped WCAG-accessible interfaces, working directly with the CTO and CEO.', id: 'Merilis antarmuka yang memenuhi WCAG, bekerja langsung dengan CTO dan CEO.' },
    ],
  },
  {
    period: { en: '2021 – now', id: '2021 – sekarang' },
    company: 'Freelance',
    current: true,
    mark: { color: '#7c3aed', logo: '/assets/logos/freelance.svg', cover: true },
    role: { en: 'Full stack developer, Gresik', id: 'Full stack developer, Gresik' },
    points: [
      { en: 'Delivered 15+ web applications for clients in e-commerce, education and healthcare, from discovery to deployment.', id: 'Menyelesaikan 15+ aplikasi web untuk klien di e-commerce, pendidikan, dan kesehatan, dari analisis kebutuhan sampai deploy.' },
    ],
  },
  {
    period: '2021 – 2022',
    company: 'PT Andromedia',
    mark: { color: '#0891b2', logo: '/assets/logos/andromedia.svg', cover: true },
    role: { en: 'Full stack developer intern, Surabaya', id: 'Full stack developer (magang), Surabaya' },
    points: [
      { en: 'Built an equipment loan tracker and a task management app with React and Laravel APIs.', id: 'Membangun aplikasi pelacakan peminjaman perangkat dan manajemen tugas dengan React dan API Laravel.' },
    ],
  },
  {
    period: '2021',
    company: 'Build With Angga',
    mark: { color: '#4f46e5', logo: '/assets/projects/build-with-angga.svg' },
    role: { en: 'Web designer intern, Bandung', id: 'Web designer (magang), Bandung' },
    points: [
      { en: 'Turned Figma designs into 25 web products and fixed frontend bugs on the platform.', id: 'Mengubah desain Figma menjadi 25 produk web dan memperbaiki bug frontend di platform.' },
    ],
  },
  {
    period: '2021',
    company: 'Agendakota',
    mark: { color: '#db2777', logo: '/assets/logos/agendakota.png' },
    role: { en: 'Junior web programmer, Surabaya', id: 'Junior web programmer, Surabaya' },
    points: [
      { en: 'Built features for vendor and venue discovery on the event platform.', id: 'Membangun fitur pencarian vendor dan venue di platform acara.' },
    ],
  },
];

export const about = {
  paragraphs: [
    {
      en: 'I build scalable web applications, backend systems and AI-powered features, for enterprises, growing businesses and community projects alike.',
      id: 'Saya membangun aplikasi web yang skalabel, sistem backend, dan fitur berbasis AI, untuk perusahaan besar, bisnis yang sedang tumbuh, maupun proyek komunitas.',
    },
    {
      en: 'On the backend I use PHP (Laravel, Lumen), Golang (Gin), Node.js and Python; on the frontend React, Next.js and Vue; data lives in PostgreSQL or MySQL. I design REST APIs and connect systems that were never built to talk to each other.',
      id: 'Di backend saya memakai PHP (Laravel, Lumen), Golang (Gin), Node.js, dan Python; di frontend React, Next.js, dan Vue; datanya di PostgreSQL atau MySQL. Saya merancang REST API dan menghubungkan sistem-sistem yang awalnya tidak dibuat untuk saling terhubung.',
    },
    {
      en: 'More and more of my work is AI: integrating LLM APIs, building intelligent workflows and automating business processes, shipped with Docker on cloud infrastructure.',
      id: 'Semakin banyak pekerjaan saya di bidang AI: integrasi API LLM, membangun alur kerja cerdas, dan otomatisasi proses bisnis, dirilis dengan Docker di infrastruktur cloud.',
    },
  ],
  toolkit: [
    { group: 'Backend', items: 'Laravel, Lumen, Golang (Gin), Node.js, Python' },
    { group: 'Frontend', items: 'React, Next.js, Vue, TypeScript, Tailwind CSS' },
    { group: 'AI', items: { en: 'LLM APIs, AI-powered features, workflow automation', id: 'API LLM, fitur berbasis AI, otomatisasi alur kerja' } },
    { group: 'Data', items: 'PostgreSQL, MySQL, MongoDB, Prisma' },
    { group: 'DevOps', items: 'Docker, GitLab CI/CD, Google Cloud Run, Git' },
  ],
  education: {
    en: 'Associate degree in Information Systems, Universitas Airlangga (2018–2021). Best Graduate of the programme, GPA 3.74/4.00.',
    id: 'D3 Sistem Informasi, Universitas Airlangga (2018–2021). Lulusan Terbaik program studi, IPK 3,74/4,00.',
  },
  courses: {
    en: 'LSP TIK national IT competency certification. Courses from Udemy, Hacktiv8, Dicoding, BuildWithAngga and Progate.',
    id: 'Sertifikasi kompetensi nasional LSP TIK. Kursus dari Udemy, Hacktiv8, Dicoding, BuildWithAngga, dan Progate.',
  },
};

// Real quotes only. Example shape:
// { quote: { en: '…', id: '…' }, name: 'Full name', role: { en: 'CTO, Company', id: 'CTO, Perusahaan' } }
export const testimonials = [];
