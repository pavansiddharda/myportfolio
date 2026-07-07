import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiScikitlearn, SiExpress, SiCplusplus, SiJavascript, SiHtml5, SiCss, SiNumpy, SiPandas, SiGit } from 'react-icons/si';

export const personalInfo = {
  name: 'Pavan Siddharda Bachina',
  subtitle: ['Computer Science Undergraduate', 'Machine Learning Engineer', 'Full Stack Developer', 'Research Enthusiast'],
  introduction: 'Computer Science undergraduate with strong skills in Machine Learning, Backend Development, Full Stack Development, and Artificial Intelligence. Experienced in building scalable web applications, AI-powered solutions, REST APIs, Machine Learning models, and research-oriented projects.',
  email: 'pavansiddharda@gmail.com', // Placeholder, update if needed
  phone: '+91 9999999999', // Placeholder
  github: 'https://github.com/PavanSiddharda', // Update if needed
  linkedin: 'https://linkedin.com/in/pavansiddharda', // Update if needed
  leetcode: 'https://leetcode.com/pavansiddharda', // Update if needed
};

export const education = {
  institution: 'SRM University AP',
  degree: 'B.Tech Computer Science Engineering',
  cgpa: '9.26',
  graduation: '2027',
};

export const skills = {
  Programming: [
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Core Java', icon: FaJava, color: '#007396' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  ],
  Frontend: [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss, color: '#1572B6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  ],
  Backend: [
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'REST APIs', icon: null, color: '#8B5CF6' },
  ],
  Database: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'SQL', icon: null, color: '#4479A1' },
  ],
  MachineLearning: [
    { name: 'Scikit Learn', icon: SiScikitlearn, color: '#F7931E' },
    { name: 'NumPy', icon: SiNumpy, color: '#013243' },
    { name: 'Pandas', icon: SiPandas, color: '#150458' },
    { name: 'Classification', icon: null, color: '#3B82F6' },
    { name: 'Computer Vision', icon: null, color: '#8B5CF6' },
    { name: 'Speech Recognition', icon: null, color: '#06B6D4' },
    { name: 'Hyperspectral Imaging', icon: null, color: '#E34F26' },
  ],
  Tools: [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
    { name: 'VS Code', icon: null, color: '#007ACC' },
  ]
};

export const experience = [
  {
    id: 1,
    role: 'Research Intern',
    company: 'SRM University AP',
    year: '2025',
    responsibilities: 'Co-authored IEEE Research Paper: Adaptive Dynamic Similarity Modeling for Enhanced Collaborative Filtering with Machine Learning Integration.',
    workedOn: ['Machine Learning', 'Recommendation Systems', 'Collaborative Filtering', 'Dynamic Similarity Modeling'],
    buttonText: 'Read Paper',
    link: 'https://drive.google.com/file/d/1fuLqRAnOjuHxIhJpioCBrG7EQ0igPwuP/view?usp=drive_link',
  },
  {
    id: 2,
    role: 'Intern',
    company: 'Infosys Springboard Internship',
    year: '2026',
    responsibilities: 'Developed AI-powered Health Anomaly Detection.',
    workedOn: ['Classification', 'Clustering', 'Healthcare Analytics', 'Machine Learning'],
    buttonText: 'View Certificate',
    link: 'https://drive.google.com/file/d/1KVE911ldRzDZf-yj1ZFEicwPkzdNSuhJ/view?usp=sharing',
  }
];

export const projects = [
  {
    id: 1,
    name: 'LAMMP Spectral Reconstruction',
    description: 'Implemented Local Adaptive Manifold Mapping (LAMMP) for hyperspectral image reconstruction using the CAVE dataset and the Munsell spectral database. Flagship project emphasizing runtime optimization and uncertainty estimation.',
    tech: ['Python', 'PCA', 'MiniBatch KMeans', 'KDTree', 'Computer Vision'],
    highlights: ['Zero-shot Reconstruction', 'Hyperspectral Imaging', 'Scientific Research'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    name: 'Skill Gap Analysis Platform',
    description: 'Built a full-stack Skill Gap Analysis platform that analyzes user skills, recommends learning paths, and provides job insights through analytics dashboards.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs'],
    highlights: ['Authentication', 'MVC', 'Dashboard', 'Recommendations'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    name: 'FitPulse',
    description: 'AI-powered health anomaly detection system using ensemble learning methods.',
    tech: ['Python', 'Scikit Learn', 'Pandas', 'NumPy', 'Streamlit'],
    highlights: ['KMeans', 'DBSCAN', 'Classification', 'Healthcare Prediction'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    name: 'Loan Prediction Classifier',
    description: 'Machine learning system for loan approval prediction by comparing multiple classification algorithms (Random Forest, Decision Tree, KNN, Logistic Regression).',
    tech: ['Python', 'Machine Learning', 'Random Forest', 'Decision Tree', 'KNN', 'Logistic Regression'],
    highlights: ['Classification Algorithms', 'Predictive Modeling'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
    github: '#',
    live: '#',
  },
  {
    id: 5,
    name: 'Real-Time Speech Translator',
    description: 'Real-time speech translation application capable of converting spoken language into translated speech using speech recognition, translation APIs, and text-to-speech.',
    tech: ['Python', 'SpeechRecognition', 'Google Translate', 'gTTS', 'PyAudio'],
    highlights: ['Speech-to-Text', 'Translation', 'Text-to-Speech', 'Real-Time Processing', 'Multiple Languages'],
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1000',
    github: '#',
    live: '#',
  }
];

export const research = {
  title: 'Adaptive Dynamic Similarity Modeling for Enhanced Collaborative Filtering with Machine Learning Integration',
  type: 'IEEE Research Paper',
  timeline: '2025',
  abstract: 'This research presents an adaptive dynamic similarity modeling approach aimed at enhancing the precision and robustness of collaborative filtering recommendation systems. By integrating advanced machine learning techniques, the proposed model effectively captures nuanced user preferences and item characteristics over time.',
  status: 'Published',
  link: 'https://drive.google.com/file/d/1fuLqRAnOjuHxIhJpioCBrG7EQ0igPwuP/view?usp=drive_link'
};

export const certifications = [
  {
    id: 1,
    name: 'Oracle Certified Professional Java SE 17',
    organization: 'Oracle',
    link: 'https://drive.google.com/file/d/1CkGVPIfQHR7vsYPdETU7a3Y9NFwx71hF/view?usp=sharing'
  },
  {
    id: 2,
    name: 'MongoDB Associate Developer',
    organization: 'MongoDB',
    link: 'https://drive.google.com/file/d/184Yh_LZTKrogVbnbGZssBdBtFym2drm0/view?usp=drive_link'
  },
  {
    id: 3,
    name: 'IBM Backend Development',
    organization: 'IBM',
    link: 'https://drive.google.com/file/d/19MmPtK91JjW4DwgL6rlqED7naTiYzVmy/view'
  },
  {
    id: 4,
    name: 'IBM Introduction to Software Engineering',
    organization: 'IBM',
    link: 'https://drive.google.com/file/d/1d4OHIRTgBfpTCtTcngcaC2WAzZcXVuob/view?usp=sharing'
  },
  {
    id: 5,
    name: 'Infosys Springboard Internship',
    organization: 'Infosys',
    link: 'https://drive.google.com/file/d/1KVE911ldRzDZf-yj1ZFEicwPkzdNSuhJ/view?usp=sharing'
  }
];
