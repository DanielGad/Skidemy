import mentor1 from '../assets/mentor1.png';
import mentor2 from '../assets/mentor2.png';
import mentor3 from '../assets/mentor3.png';
import mentor4 from '../assets/mentor4.png';
import mentor5 from '../assets/mentor5.png';
import mentor6 from '../assets/mentor6.png';
import mentor7 from '../assets/mentor7.png';
import mentor from '../assets/6-frames.png';
import { Link } from 'react-router-dom';

const Mentors = () => {
  const mentorImages = [mentor1, mentor2, mentor3, mentor4, mentor5, mentor6, mentor7];

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Experienced course mentor
            </h2>
            <p className="text-gray-600 mb-8">
              Learn directly from industry experts with years of hands-on experience across coding, design, business, and other fields. They provide more than just lessons; they offer mentorship, guidance, and practical insights you won't find in textbooks. Each mentor is committed to helping you grow, answering your questions, and ensuring you gain the confidence and skills needed to excel in today's competitive world. Whether you're just starting out or advancing your career, our mentors walk with you every step of the way.
            </p>
            <Link to="/apply">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button></Link>
          </div>
          
          <div className="relative h-96 w-full hidden lg:block">
             <img src={mentor} alt="Mentor 1" className="w-110" />
          </div>

          <div className="flex lg:hidden justify-center items-center flex-wrap gap-4">
            {mentorImages.map((img, index) => (
                <img key={index} src={img} alt={`Mentor ${index + 1}`} className="w-20 h-20 rounded-full object-cover shadow-lg" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;