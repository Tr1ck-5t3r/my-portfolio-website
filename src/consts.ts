// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const Name = 'Tarun RG';
export const url = 'https://tarun-rg.in';
export const img = "https://tarun-rg.in/tarun.webp";
export const desig = 'Final year student @ Amrita Vishwa Vidyapeetham Chennai';
export const profile = '/tarun.webp';
const baseurl = "tarun-rg.in"
export const SITE_DESCRIPTION =
  'Tarun RG, final year CSE student at Amrita Vishwa Vidyapeetham Chennai';

export const SOCIAL_MEDIA = {
  github: 'https://www.github.com/tr1ck-5t3r',
  linkedin: 'https://www.linkedin.com/in/tarun-r-g',
  email: 'tarungovindharaj2003@gmail.com',
};

type IconName =
  | 'seti:java'
  | 'seti:python'
  | 'seti:javascript'
  | 'seti:react'
  | 'seti:docker'
  | 'github' // Add any custom icon names you use
  | 'node'
  | 'astro';

type Interest = {
  name: string;
  icon: IconName;
};

export const interests: Interest[] = [
  { name: 'Java', icon: 'seti:java' },
  { name: 'Python', icon: 'seti:python' },
  { name: 'Javascript', icon: 'seti:javascript' },
  { name: 'React', icon: 'seti:react' },
  { name: 'Node js', icon: 'node' },
  { name: 'Astro js', icon: 'astro' },
  { name: 'Docker', icon: 'seti:docker' },
  { name: 'Github', icon: 'github' },
];

export const current_company = {
  name: 'Tredence',
  path: '/tredence.webp',
};

export const projectsHome = [
  {
    title: 'Medix',
    description:
      'React-based application to predict symptoms and aid the diagnostic process',
    link: '/projects/medical-diagnosis/',
    image: '/project.webp',
  },
  {
    title: 'Musix Player',
    description: 'Next.js-based music sharing and playing platform.',
    link: '/projects/musix-player/',
    image: 'project1.webp',
  },
  {
    title: 'Snake Zenia',
    description: 'A Java applet emulation of the classic Snake game',
    link: '/projects/snake-zenia/',
    image: '/project2.webp',
  },
];

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
};

// Define the experience array type
export const experience: ExperienceItem[] = [
  {
    company: "Cognizance",
    role: "Mentor",
    duration: "01/09/2022 - 01/04/2023",
    description:
      "Mentoring junior members and guiding them in their projects, fostering a culture of knowledge sharing and continuous learning.",
    logo: "/cognizance.webp",
  },
  {
    company: "Cognizance",
    role: "Club Lead",
    duration: "01/04/2023 - 01/09/2024",
    description:
      "Leading a tech club to organize workshops, hackathons, and coding competitions, fostering a collaborative learning environment for students interested in technology and programming.",
    logo: "/cognizance.webp",
  },
  {
    company: "Tredence",
    role: "Data Analyst Associate",
    duration: "14/07/2025 - present",
    description:
      "Collaborating with teams to analyze data, develop insights, and create data-driven solutions that drive business growth and efficiency.",
    logo: "/tredence.webp",
  },
  // Add more experience objects if needed
];

export interface Certificate {
  label: string;
  image: {
    src: string;
    alt?: string;
  };
  dates: {
    start: string;
    end: string;
  };
  description: string;
}

export const certificates: Certificate[] = [
  {
    label: "AWS Academy Cloud Architecting",
    image: {
      src: "/cloud-architecting.webp",
      alt: "AWS Cloud Architecting Certificate"
    },
    dates: {
      start: "01/2004",
      end: "02/2024"
    },
    description: "Applied concepts of Cloud and gained practical experience in building infrastructure on AWS and explored various AWS Cloud Best Practices."
  },
  {
    label: "AWS Academy Cloud Foundations",
    image: {
      src: "/cloud-foundations.webp",
      alt: "AWS Cloud Foundations Certificate"
    },
    dates: {
      start: "01/2014",
      end: "02/2014"
    },
    description: "Explored various cloud concepts, AWS core services, security, architecture, pricing, and support, and obtained practical knowledge of the working of AWS and its components."
  },
  {
    label: "People and Soft Skills for Professional and Personal Success - IBM",
    image: {
      src: "/ibm-soft-skills.webp",
      alt: "IBM Soft Skills Certificate"
    },
    dates: {
      start: "09/2023",
      end: "10/2023"
    },
    description: "Practiced and utilized soft skills in the workplace and explored ways to manage a team of 5+ members effectively."
  },
  {
    label: "Technical Support Fundamentals - Google",
    image: {
      src: "/google.webp",
      alt: "Google Technical Support Certificate"
    },
    dates: {
      start: "07/2023",
      end: "08/2023"
    },
    description: "Studied the different facets of Information Technology, like computer hardware, the Internet, computer software, troubleshooting, and customer service."
  },
  {
    label: "Intro to Machine Learning - Kaggle",
    image: {
      src: "/kaggle.webp",
      alt: "Kaggle Machine Learning Certificate"
    },
    dates: {
      start: "06/2023",
      end: "06/2023"
    },
    description: "Coded 3+ diverse ML models and gained practical insight into building AI models and applications."
  },
  {
    label: "Introduction to Cybersecurity",
    image: {
      src: "/cisco-cybersecurity.webp",
      alt: "Cisco Cybersecurity Certificate"
    },
    dates: {
      start: "03/2022",
      end: "06/2022"
    },
    description: "Explored the fundamentals of cybersecurity and gained practical experience in securing networks, systems, and data from cyber threats."
  }
];

export type Award = {
  title: string;
  description: string;
  image: {
    src: string;
    alt?: string;
  };
  dates: string;
  venue: string;
};

export const awards: Award[] = [
  {
    title: "Paper Publication IEEE - ESIC 2025 - KITT",
    image: {
      src: "/kiiit.webp",
      alt: "Kalinga Insitute of Industrial Technology",
    },
    dates: "01/2025",
    venue: "Kalinga Insitute of Industrial Technology, Bhubaneshwar",
    description:
      "Published a paper on Image Compression based on Deep learning, Compressive Sensing, Chaotic Maps.",
  },
  {
    title: "Paper Publication IEEE - INCIP 2025 - MIT Benagluru",
    image: {
      src: "/Mahe.webp",
      alt: "Manipal Insitute of Technology",
    },
    dates: "01/2025",
    venue: "Manipal Insitute of Technology, Bengalore",
    description:
      "Published a paper on Application for Medical Diagnosis powered by Neural Network.",
  },
  {
    title: "1st place - Qrack-It - Kriya 23",
    image: {
      src: "/PSG_College.webp",
      alt: "PSG College of Technology",
    },
    dates: "03/2023",
    venue: "PSG College of Technology, Coimbatore",
    description:
      "A 24-hour Hackathon, consisting of one round of website building and a presentation. Won first place in the competition.",
  },
  {
    title: "2nd Place - CodeAstra 22",
    image: {
      src: "/amrita.webp",
      alt: "Amrita Vishwa Vidyapeetham",
    },
    dates: "08/2022",
    venue: "Amrita Vishwa Vidyapeetham, Chennai",
    description:
      "College-wide competitive coding competition consisting of one round of coding with LeetCode-style problems. Secured 2nd place.",
  },
  {
    title: "1st Place - CodeInfo - 20",
    image: {
      src: "/Kumaraguru_College.webp",
      alt: "Kumaraguru College of Technology",
    },
    dates: "02/2020",
    venue: "Kumaraguru College of Technology, Coimbatore",
    description:
      "A coding competition for school students, consisting of three rounds of coding and an interview. Aced the competition and won first place, the only place secured by my school.",
  },
  {
    title: "Subject Topper - Computer Science",
    image: {
      src: "/Stanes-school.webp",
      alt: "Stanes School ICSE/ISC",
    },
    dates: "08/2019",
    venue: "Stanes School ICSE/ISC, Coimbatore",
    description:
      "Academic distinction for scoring full marks in the Computer Science paper. Recognized in front of the entire school.",
  },
];
