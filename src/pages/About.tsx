import { Link } from "react-router-dom";
const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-4xl px-6 py-20 text-center">
        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mb-8 hover:bg-gray-200" onClick={() => window.history.back()}>
          <BackArrowIcon />
        </button>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">About Us</h1>
        <p className="text-gray-600 font-medium mb-12">Skidemy</p>

        <div className="text-lg text-gray-700 space-y-6 text-left leading-relaxed">
          <p>
            At Skidemy, we believe that skills are the real currency of the future. Our mission is to empower students and young professionals with practical, future-ready skills that go beyond theory. We provide an interactive learning experience through live creative sessions, experienced course mentors, and a collaborative community, ensuring that every learner gets the guidance and support needed to succeed.
          </p>
          <p>
            From coding and design to business, innovation, and creativity, Skidemy is built to bridge the gap between traditional education and real-world application.
          </p>
          <p>
            We combine mentorship, peer collaboration, and project-based learning to help students not only master new skills but also apply them confidently in today's fast-changing world.
          </p>
          <p>
            At Skidemy, you're not just taking a course; you're joining a movement of learners, innovators, and creators who are shaping the future together. Learn. Build. Grow. With Skidemy.
          </p>
        </div>
        <Link to="/apply">
        <button className="mt-12 bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button></Link>
      </div>
    </div>
  );
};

export default About;