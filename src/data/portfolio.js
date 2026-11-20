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
  photo: '/assets/profile.jpg',
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
    whatsappShort: { en: 'Chat', id: 'Chat' },
    whatsappText: {
      en: 'Hi Al-Kahfi, I found your portfolio and would like to talk about a project.',
      id: 'Halo Al-Kahfi, saya melihat portfolio Anda dan ingin diskusi tentang sebuah proyek.',
    },
    available: {
      en: 'Open to projects, remote contracts and full\u2011time roles.',
      id: 'Terbuka untuk proyek, kontrak remote, dan posisi full\u2011time.',
    },
    base: { en: 'Based in Gresik, Indonesia. UTC+7.', id: 'Berbasis di Gresik, Indonesia. UTC+7.' },
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
    tabBuild: { en: 'Build something', id: 'Butuh dibangun' },
    tabHire: { en: 'Hire me', id: 'Merekrut' },
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
    showAll: { en: 'Show all', id: 'Lihat semua' },
    showLess: { en: 'Show less', id: 'Lebih sedikit' },
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

export const board = {
  title: { en: 'Departures', id: 'Keberangkatan' },
  cols: {
    since: { en: 'Since', id: 'Sejak' },
    flight: { en: 'Flight', id: 'Kode' },
    dest: { en: 'Destination', id: 'Tujuan' },
    status: { en: 'Status', id: 'Status' },
  },
  status: {
    live: { en: 'LIVE', id: 'AKTIF' },
    landed: { en: 'LANDED', id: 'SELESAI' },
    boarding: { en: 'BOARDING', id: 'BOARDING' },
  },
  statusLong: {
    live: { en: 'running now', id: 'berjalan sekarang' },
    landed: { en: 'completed', id: 'selesai' },
    boarding: { en: 'boarding now, your project or role comes next', id: 'boarding sekarang, proyek atau posisi Anda berikutnya' },
  },
  // Flight codes are labels for the board, not real identifiers.
  rows: [
    { since: '2022', flight: 'PIS-22', dest: 'PUPUK INDONESIA', role: { en: 'Full stack developer, PI Smart', id: 'Full stack developer, PI Smart' }, status: 'live', href: '#work-pi-smart' },
    { since: '2025', flight: 'JLG-25', dest: 'JLOG SURABAYA', role: { en: 'Digitalization Lead', id: 'Digitalization Lead' }, status: 'live', href: '#work-jlog' },
    { since: '2026', flight: 'TGR-26', dest: 'TERGAR INDONESIA', role: { en: 'Webmaster', id: 'Webmaster' }, status: 'live', href: '#work-tergar-indonesia' },
    { since: '2025', flight: 'PMD-25', dest: 'PRIVATE MD LABS', role: { en: 'Remote contract, USA', id: 'Kontrak remote, AS' }, status: 'landed', href: '#work-private-md-labs' },
    { since: '2026', flight: 'AKH-01', dest: { en: 'YOUR TEAM', id: 'TIM ANDA' }, role: { en: 'Your project or role', id: 'Proyek atau posisi Anda' }, status: 'boarding', href: '#contact', next: true },
  ],
};

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
    period: { en: 'Sep 2025 – now', id: 'Sep 2025 – sekarang' },
    company: 'Januardi Logistik (JLOG)',
    current: true,
    mark: { color: '#65a30d', logo: '/assets/logos/jlog.svg', plate: '#111111' },
    role: { en: 'Digitalization Lead, Surabaya (hybrid)', id: 'Digitalization Lead, Surabaya (hybrid)' },
    points: [
      { en: "Led the company's digital transformation initiatives across commercial, operations, finance, and customer experience, acting as the primary technology advisor and digital strategy lead.", id: 'Memimpin inisiatif transformasi digital perusahaan di bidang komersial, operasional, keuangan, dan pengalaman pelanggan, sebagai penasihat teknologi utama dan pemimpin strategi digital.' },
      { en: 'Led end-to-end digital transformation initiatives for a logistics company with no internal IT department, identifying operational bottlenecks and redesigning business processes across commercial, operations, and finance.', id: 'Memimpin transformasi digital end-to-end untuk perusahaan logistik tanpa departemen IT internal, mengidentifikasi hambatan operasional dan merancang ulang proses bisnis di komersial, operasional, dan keuangan.' },
      { en: 'Designed the technology roadmap and collaborated with multiple software vendors to ensure business requirements were translated into scalable digital solutions.', id: 'Menyusun roadmap teknologi dan bekerja sama dengan beberapa vendor software agar kebutuhan bisnis diterjemahkan menjadi solusi digital yang skalabel.' },
      { en: 'Developed the internal JLOG SuperApp to centralize operational workflows, improve cross-department collaboration, and streamline day-to-day business activities.', id: 'Mengembangkan JLOG SuperApp internal untuk menyatukan alur kerja operasional, meningkatkan kolaborasi antar departemen, dan merampingkan aktivitas bisnis sehari-hari.' },
      { en: 'Optimized commercial and operational processes by automating repetitive tasks and improving system utilization, significantly reducing manual work and turnaround times.', id: 'Mengoptimalkan proses komersial dan operasional dengan mengotomatisasi tugas berulang dan meningkatkan pemanfaatan sistem, sehingga pekerjaan manual dan waktu penyelesaian berkurang signifikan.' },
      { en: 'Identified operational risks that could result in shipment delay penalties and implemented process improvements to minimize financial losses.', id: 'Mengidentifikasi risiko operasional yang dapat menimbulkan denda keterlambatan pengiriman dan menerapkan perbaikan proses untuk meminimalkan kerugian finansial.' },
      { en: "Revamped the company's digital presence through a redesigned corporate website and SEO strategy, increasing organic visibility to tens of thousands of monthly impressions and generating an average of 7 qualified inbound leads per day, compared to only 1–3 leads per week previously.", id: 'Memperbarui kehadiran digital perusahaan lewat desain ulang website dan strategi SEO, meningkatkan visibilitas organik hingga puluhan ribu impresi per bulan dan menghasilkan rata-rata 7 calon klien berkualitas per hari, dibanding hanya 1–3 per minggu sebelumnya.' },
      { en: "Served as the company's Digital Champion, coordinating internal stakeholders and external technology partners to drive continuous digital innovation and business growth.", id: 'Menjadi Digital Champion perusahaan, mengoordinasikan pemangku kepentingan internal dan mitra teknologi eksternal untuk mendorong inovasi digital dan pertumbuhan bisnis yang berkelanjutan.' },
    ],
  },
  {
    period: { en: 'Jun 2022 – now', id: 'Jun 2022 – sekarang' },
    company: 'PT Pupuk Indonesia (Persero)',
    current: true,
    mark: { color: '#2563eb', logo: '/assets/logos/pupuk-indonesia.png' },
    role: { en: 'Full Stack Developer, Staf Digitalisasi SDM & Keuangan, Jakarta and Gresik', id: 'Full Stack Developer, Staf Digitalisasi SDM & Keuangan, Jakarta dan Gresik' },
    points: [
      { en: 'Spearheaded end-to-end development of 20+ modules for PI Smart, an enterprise HR super app consolidating KPI tracking, travel management, promotions, reimbursement, and 10+ workflows into one platform for 30,000+ employees.', id: 'Memimpin pengembangan end-to-end 20+ modul PI Smart, aplikasi HR enterprise yang menyatukan pemantauan KPI, manajemen perjalanan dinas, promosi, reimbursement, dan 10+ alur kerja dalam satu platform untuk 30.000+ karyawan.' },
      { en: 'Engineered high-performance backend services in Laravel and Golang, cutting API response times and enabling seamless data synchronization with a companion mobile application across 10+ subsidiary companies.', id: 'Membangun layanan backend berperforma tinggi dengan Laravel dan Golang, mempercepat waktu respons API dan memungkinkan sinkronisasi data yang mulus dengan aplikasi mobile di 10+ anak perusahaan.' },
      { en: 'Drove frontend migration from legacy jQuery codebase to React, boosting code maintainability and delivering a modern, responsive UI that improved end-user adoption across the organization.', id: 'Memimpin migrasi frontend dari kode jQuery lama ke React, meningkatkan kemudahan perawatan kode dan menghadirkan UI modern dan responsif yang meningkatkan adopsi pengguna di seluruh organisasi.' },
      { en: 'Orchestrated cross-functional collaboration with mobile developers, QA engineers, and business analysts to ship modules on schedule within agile sprints, maintaining 95%+ on-time delivery rate.', id: 'Mengoordinasikan kolaborasi lintas fungsi dengan developer mobile, QA engineer, dan analis bisnis untuk merilis modul tepat waktu dalam sprint agile, dengan tingkat ketepatan waktu 95%+.' },
      { en: 'Optimized PostgreSQL schemas and complex queries supporting multi-company HR workflows, reducing page load times for data-heavy dashboards.', id: 'Mengoptimalkan skema PostgreSQL dan query kompleks untuk alur kerja HR multi-perusahaan, mempercepat waktu muat dashboard dengan data besar.' },
    ],
  },
  {
    period: { en: 'Apr 2026 – now', id: 'Apr 2026 – sekarang' },
    company: 'Tergar Indonesia',
    current: true,
    mark: { color: '#b45309', logo: '/assets/logos/tergar.webp' },
    role: { en: 'Webmaster, remote', id: 'Webmaster, remote' },
    points: [
      { en: 'Managed and maintained the official Tergar Indonesia website (tergar.or.id), ensuring high availability, security, and an optimal user experience.', id: 'Mengelola dan memelihara website resmi Tergar Indonesia (tergar.or.id), memastikan ketersediaan tinggi, keamanan, dan pengalaman pengguna yang optimal.' },
      { en: "Implemented website enhancements, performance optimizations, and SEO improvements to strengthen Tergar Indonesia's online presence and increase public engagement.", id: 'Menerapkan peningkatan website, optimasi performa, dan perbaikan SEO untuk memperkuat kehadiran online Tergar Indonesia dan meningkatkan keterlibatan publik.' },
      { en: "Collaborated directly with the Chairman of Tergar Indonesia Foundation and internal teams to support digital initiatives aligned with the organization's mission.", id: 'Bekerja langsung dengan Ketua Yayasan Tergar Indonesia dan tim internal untuk mendukung inisiatif digital yang sejalan dengan misi organisasi.' },
      { en: 'Provided technical support for online registration, event information, and content management for meditation programs and community activities.', id: 'Memberikan dukungan teknis untuk pendaftaran online, informasi acara, dan pengelolaan konten program meditasi serta kegiatan komunitas.' },
      { en: "Supported the preparation of the organization's digital platforms for Yongey Mingyur Rinpoche's visit to Indonesia (November 2026), ensuring website readiness and a seamless online experience for participants.", id: 'Mendukung persiapan platform digital organisasi untuk kunjungan Yongey Mingyur Rinpoche ke Indonesia (November 2026), memastikan kesiapan website dan pengalaman online yang lancar bagi peserta.' },
    ],
  },
  {
    period: { en: 'Jun – Jul 2025', id: 'Jun – Jul 2025' },
    company: { en: 'US-based digital health company', id: 'Perusahaan kesehatan digital di AS' },
    mark: { color: '#dc2626', logo: '/assets/logos/health-company.svg', cover: true },
    role: { en: 'Full Stack Developer (Remote Contractor), Florida, USA', id: 'Full Stack Developer (Kontraktor Remote), Florida, AS' },
    points: [
      { en: 'Developed and enhanced a healthcare web platform for managing lab location data and internal admin tools using Laravel and JavaScript, supporting accurate lab discovery for end users.', id: 'Mengembangkan dan menyempurnakan platform web kesehatan untuk mengelola data lokasi lab dan alat admin internal dengan Laravel dan JavaScript, mendukung pencarian lab yang akurat bagi pengguna.' },
      { en: 'Integrated third-party APIs to power dynamic lab search and geolocation-based services, improving data accuracy and search relevance for healthcare consumers.', id: 'Mengintegrasikan API pihak ketiga untuk pencarian lab yang dinamis dan layanan berbasis geolokasi, meningkatkan akurasi data dan relevansi pencarian bagi pengguna layanan kesehatan.' },
      { en: 'Partnered with designers to implement responsive, WCAG-accessible interfaces aligned with healthcare UX standards, ensuring compliance and usability.', id: 'Bekerja sama dengan desainer untuk menerapkan antarmuka responsif yang memenuhi WCAG dan standar UX kesehatan, memastikan kepatuhan dan kemudahan penggunaan.' },
      { en: 'Collaborated directly with CTO and CEO in a fast-paced agile environment, translating business requirements into production-ready features within tight sprint cycles.', id: 'Bekerja langsung dengan CTO dan CEO di lingkungan agile yang cepat, menerjemahkan kebutuhan bisnis menjadi fitur siap produksi dalam siklus sprint yang ketat.' },
    ],
  },
  {
    period: { en: 'Aug 2021 – now', id: 'Agu 2021 – sekarang' },
    company: 'Freelance',
    current: true,
    mark: { color: '#7c3aed', logo: '/assets/logos/freelance.svg', cover: true },
    role: { en: 'Freelance Full Stack Developer, Gresik', id: 'Full Stack Developer Freelance, Gresik' },
    points: [
      { en: 'Delivered 15+ custom web applications for clients spanning e-commerce, education, and healthcare, managing full project lifecycles from discovery through production deployment.', id: 'Menyelesaikan 15+ aplikasi web kustom untuk klien di bidang e-commerce, pendidikan, dan kesehatan, mengelola seluruh siklus proyek dari analisis kebutuhan hingga deploy produksi.' },
      { en: 'Architected and built tailored solutions using Laravel, WordPress, and JavaScript, consistently meeting client deadlines and earning repeat engagements.', id: 'Merancang dan membangun solusi khusus dengan Laravel, WordPress, dan JavaScript, selalu memenuhi tenggat klien dan mendapatkan proyek lanjutan.' },
    ],
  },
  {
    period: { en: 'Aug 2021 – Jan 2022', id: 'Agu 2021 – Jan 2022' },
    company: 'PT Andromedia',
    mark: { color: '#0891b2', logo: '/assets/logos/andromedia.svg', cover: true },
    role: { en: 'Full Stack Developer Intern, Surabaya', id: 'Full Stack Developer (Magang), Surabaya' },
    points: [
      { en: 'Built an electronic equipment loan tracking system and a task management application from the ground up, contributing to both React-based frontends and Laravel backend APIs.', id: 'Membangun sistem pelacakan peminjaman perangkat elektronik dan aplikasi manajemen tugas dari nol, mengerjakan frontend berbasis React dan API backend Laravel.' },
    ],
  },
  {
    period: { en: 'Sep – Dec 2021', id: 'Sep – Des 2021' },
    company: 'PT Angga Membangun Indonesia (BuildWithAngga)',
    mark: { color: '#4f46e5', logo: '/assets/projects/build-with-angga.svg' },
    role: { en: 'Web Designer Intern, Bandung', id: 'Web Designer (Magang), Bandung' },
    points: [
      { en: 'Produced 25 pixel-perfect web products by translating Figma/UI designs into clean, semantic HTML/CSS/JS code, and resolved frontend bugs on the company platform to improve site stability.', id: 'Menghasilkan 25 produk web pixel-perfect dengan menerjemahkan desain Figma/UI menjadi kode HTML/CSS/JS yang bersih dan semantik, serta memperbaiki bug frontend di platform perusahaan untuk meningkatkan stabilitas situs.' },
    ],
  },
  {
    period: { en: 'Feb – Apr 2021', id: 'Feb – Apr 2021' },
    company: 'Agenda Kota Indonesia',
    mark: { color: '#db2777', logo: '/assets/logos/agendakota.png' },
    role: { en: 'Junior Web Programmer, Surabaya', id: 'Junior Web Programmer, Surabaya' },
    points: [
      { en: 'Contributed to an integrated event management platform supporting vendor and venue discovery, building features that streamlined event planning workflows for users.', id: 'Berkontribusi pada platform manajemen acara terintegrasi untuk pencarian vendor dan venue, membangun fitur yang menyederhanakan alur perencanaan acara bagi pengguna.' },
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
