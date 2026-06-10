export const navItems = [
  ['Summary', 'summary'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Languages', 'languages'],
  ['Contact', 'contact'],
] as const;

export const profile = {
  name: 'Mohd Ihsan Ahmed Rizwan',
  shortName: 'Mohd Ihsan',
  role: 'DevOps Engineer',
  email: 'mohdihsanrizwan@gmail.com',
  github: 'https://github.com/Ihsan-03',
  githubLabel: 'github.com/Ihsan-03',
  linkedin: 'https://www.linkedin.com/in/mohd-ihsan-ahmed-rizwan',
  linkedinLabel: 'linkedin.com/in/mohd-ihsan-ahmed-rizwan',
  tryHackMe: 'https://tryhackme.com/p/MohdIhsan',
  tryHackMeLabel: 'tryhackme.com/p/MohdIhsan',
  resumeUrl:
    'https://cdn.b12.io/client_media/8mOlY8yH/b7ca9c8e-5e6a-11f1-baf1-0242ac110002-Resume-4ATS.pdf',
};

export const about = [
  'I am a DevOps Engineer with foundation in cloud, automation and modern deployment practices. My experience spans CI/CD pipeline development, containerization with Docker, cloud infrastructure management on AWS and Oracle Cloud Infrastructure.',
  'During my internship at Privaseverse, I worked on automating workflows, deploying machine learning environments, optimizing cloud-based training pipelines and containerizing applications for scalable and reproducible deployments. I also have experience integrating DevOps practices into ML workflows, bridging the gap between development, operations and AI technologies.',
  'I am passionate about building secure, scalable and highly available systems that improve development efficiency and operational reliability. With skills in Python, Shell Scripting, Git, Docker, Kubernetes and cloud platforms. I continuously explore new technologies and best practices to deliver production ready solutions.',
];

export const skills = [
  {
    title: 'Cloud & Infrastructure',
    items: ['AWS', 'OCI', 'Cloud Infrastructure'],
  },
  {
    title: 'DevOps & CI/CD',
    items: ['Kubernetes', 'Docker', 'GitHub Actions', 'CI/CD', 'Terraform'],
  },
  {
    title: 'Programming & Scripting',
    items: ['Python', 'Shell Scripting', 'SQL', 'Git'],
  },
  {
    title: 'Specialized Areas',
    items: ['ML Workflows', 'Containerization', 'Automation'],
  },
];

export const experience = {
  title: 'ML Intern',
  company: 'Privaseverse',
  companyUrl: 'https://privaseverse.com/',
  period: 'July 2025 - Dec 2025',
  bullets: [
    'Automation of ML workflow deployment and infrastructure management',
    'Cloud GPU environments setup and optimization for distributed computing',
    'Dockerized ML workflows for reproducible model training and deployment',
    'Transformer models deployment and scaling using Kubernetes',
    'Deployment automation and CI/CD pipeline implementation',
  ],
};

export const projects = [
  {
    title: 'A.R.I.A Cloud-Ready Python Voice Assistant',
    description:
      'An intelligent voice assistant built with Python, fully containerized and cloud-ready. Leverages cloud infrastructure for scalability and integrates with multiple cloud services for natural language processing and speech synthesis.',
    tags: ['Python', 'Docker', 'Kubernetes', 'Cloud'],
  },
  {
    title: 'Virtual Control System (IoT & ML)',
    description:
      'A comprehensive IoT control system integrating machine learning for predictive analytics and automation. Built with focus on scalable architecture, containerization, and deployment on cloud platforms for real-time data processing.',
    tags: ['IoT', 'ML', 'Python', 'Automation'],
  },
];

export const education = {
  degree: 'Computer Science Engineering',
  school: 'Osmania University',
  graduation: 'Graduation: 2025',
  focus: 'Focused on cloud computing, DevOps, and automation technologies',
};

export const certifications = [
  {
    title: 'Oracle Cloud Infrastructure DevOps Learning Path',
    description: 'Completed comprehensive DevOps training and best practices',
  },
];

export const languages = [
  ['English', 'Professional proficiency'],
  ['Hindi', 'Native/Bilingual proficiency'],
  ['Urdu', 'Bilingual proficiency'],
] as const;
