import webDevImg from '../assets/web_dev.jpg';
import dataScienceImg from '../assets/data_science.jpg';
import aiMlImg from '../assets/aiml.jpeg';
import cybersecurityImg from '../assets/cyber.jpg';
import mobileDevImg from '../assets/mobile_dev.jpg';
import uiUxImg from '../assets/uiux.jpg';
import cloudImg from '../assets/cld_comp.jpg';
import devopsImg from '../assets/devops.jpg';
import biImg from '../assets/bus_ai.jpg';
import ethicalHackingImg from '../assets/hack.jpeg';
import generativeAiImg from '../assets/genai.jpg';
import arVrImg from '../assets/arvr.jpeg';

const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export interface Course {
  title: string;
  description: string;
  image: string;
}

export const courses: Course[] = [
  {
    title: 'Full-Stack Web Development',
    description: 'Master front-end and back-end technologies to build complete web applications.',
    image: webDevImg,
  },
  {
    title: 'Data Science & Analytics',
    description: 'Learn to analyze data, build predictive models, and derive actionable insights.',
    image: dataScienceImg,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Dive into artificial intelligence and build models with Python, TensorFlow, and PyTorch.',
    image: aiMlImg,
  },
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Understand the core principles of network security and ethical hacking.',
    image: cybersecurityImg,
  },
  {
    title: 'Mobile App Development',
    description: 'Build beautiful and functional applications for iOS and Android using React Native.',
    image: mobileDevImg,
  },
  {
    title: 'UI/UX Design',
    description: 'Master the art of creating intuitive and user-friendly digital product interfaces.',
    image: uiUxImg,
  },
  {
    title: 'Cloud Computing (AWS)',
    description: 'Learn to deploy and manage scalable applications on Amazon Web Services.',
    image: cloudImg,
  },
  {
    title: 'DevOps Engineering',
    description: 'Automate and streamline the software development lifecycle with modern DevOps tools.',
    image: devopsImg,
  },
  {
    title: 'Business Intelligence',
    description: 'Use tools like Tableau and Power BI to translate data into business strategies.',
    image: biImg,
  },
  {
    title: 'Ethical Hacking & Pen Testing',
    description: 'Discover and fix vulnerabilities before malicious hackers can exploit them.',
    image: ethicalHackingImg,
  },
  {
    title: 'Generative AI & Prompting',
    description: 'Explore the latest in AI and learn to craft effective prompts for powerful results.',
    image: generativeAiImg,
  },
  {
    title: 'AR/VR Development',
    description: 'Create immersive experiences for the next generation of computing platforms.',
    image: arVrImg,
  },
];


const CourseCard = ({ title, description, image }: Course) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const CoursesPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mb-8 hover:bg-gray-200" onClick={() => window.history.back()}>
          <BackArrowIcon />
        </button>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">Our Courses</h1>
          <p className="text-lg text-gray-600 mt-4">
            Explore our wide range of courses designed to launch your career in tech.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;