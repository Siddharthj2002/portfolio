import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  incrivel,
  asmadiya,
  calendar,
  flexgen,
  cics,
  python,
  java,
  aws,
  jenkins,
  keras,
  kubernetes,
  matlab,
  mysql,
  postgres,
  r,
  pytorch,
  spring,
  sql,
  tableau,
  tensorflow,
  jira
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Data Scientist", icon: web },
  { title: "Full-Stack Developer", icon: backend },
  { title: "Machine Learning Practitioner", icon: mobile },
  { title: "Cloud & DevOps Enthusiast", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "R", icon: r },
  { name: "MATLAB", icon: matlab },
  { name: "SQL", icon: sql },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Spring", icon: spring },
  { name: "TensorFlow", icon: tensorflow },
  { name: "PyTorch", icon: pytorch },
  { name: "Keras", icon: keras },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgres },
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "Jenkins", icon: jenkins },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Tableau", icon: tableau },
  { name: "JIRA", icon: jira }
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Incrivel Soft Pvt. Ltd.",
    icon: incrivel,
    iconBg: "#FFFFFF",
    date: "May 2023 - Aug 2023",
    points: [
      "Developed a digital currency marketplace connecting gamers and vendors, improving user retention by 35%.",
      "Built REST APIs in Node.js with JWT/OAuth2, and integrated Stripe for <100ms transaction latency.",
      "Improved MongoDB query performance by 40% via schema optimization and indexing.",
      "Automated deployments using Docker, Jenkins, and AWS ECR, reducing downtime by 25%."
    ]
  },
  {
    title: "Undergraduate Course Assistant",
    company_name: "UMass Amherst",
    icon: cics,
    iconBg: "#832325",
    date: "Dec 2022 - May 2023",
    points: [
      "Led workshops and office hours for 90+ students on Python, A/B testing, and statistics.",
      "Improved student exam scores by 18% by supporting practical data science learning."
    ]
  },
  {
    title: "Software Engineer Intern",
    company_name: "Asmadiya Technologies",
    icon: asmadiya,
    iconBg: "#FFFFFF",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Enhanced query speed by 20% in Spring Data JPA via pagination and compound indexing.",
      "Ensured GDPR-compliant platform security with Spring Security and JWT.",
      "Built services to analyze employee KPIs using MySQL with real-time dashboard performance."
    ]
  }
];

const testimonials = [
  {
    testimonial: "Siddharth demonstrated a strong grasp on software architecture and backend performance. We saw clear improvements in deployment speed and system scalability.",
    name: "R. Sinha",
    designation: "Team Lead",
    company: "Incrivel Soft",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial: "His commitment to student success made a significant difference in our class performance.",
    name: "Prof. Piazza",
    designation: "Course Instructor",
    company: "UMass Amherst",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  }
];

const projects = [
  {
    name: "FlexGen Lite",
    description: "Optimized LLM inference on single GPU setups by re-implementing FlexGen, using hybrid CPU-GPU pipeline and memory optimization techniques.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pytorch", color: "green-text-gradient" },
      { name: "transformers", color: "pink-text-gradient" }
    ],
    image: flexgen,
    source_code_link: "https://github.com/Siddharthj2002/FlexGen-Lite/tree/master"
  },
  {
    name: "Text Augmentation using LLMs",
    description: "Developed a pipeline using DistilGPT-2 for generating synthetic text to improve classification recall by 25% on imbalanced datasets.",
    tags: [
      { name: "nlp", color: "blue-text-gradient" },
      { name: "gpt2", color: "green-text-gradient" },
      { name: "text-augmentation", color: "pink-text-gradient" }
    ],
    image: meta,
    source_code_link: "https://github.com/Siddharthj2002/Text-Augmentation-using-LLMs"
  },
  {
    name: "Calendar Time",
    description: "Built a React-based calendar app with drag-and-drop scheduling, intelligent slot reallocation, and modular views for better UX.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "dnd", color: "pink-text-gradient" }
    ],
    image: calendar,
    source_code_link: "https://github.com/Siddharthj2002/CalendarTime"
  }
];

export { services, technologies, experiences, testimonials, projects };
