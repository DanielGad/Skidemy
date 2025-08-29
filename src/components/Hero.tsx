import { Link } from 'react-router-dom';
import heroImage from '../assets/woman-at-computer.png';

const Hero = () => {
  return (
    <section className="bg-white" id='skidemy'>
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Welcome to Skidemy
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            At Skidemy our purpose is to catch young minds from the cradle and nurture them through the precarious age of adolescence... They will be brilliant, highly educated, innovative people to whom God will reveal the secrets of His wealth that are hidden in every field of human endeavor.
          </p>
          <Link to="/apply">
          <button className="block mx-auto md:mx-1 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors mb-6">
            Apply Now
          </button></Link>
          <ul className="space-y-3 text-gray-700 inline-block text-left">
            <li className="flex items-center">
              <span className="bg-blue-500 rounded-full w-2.5 h-2.5 mr-3"></span>
              User friendly platform to learn in your way.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 rounded-full w-2.5 h-2.5 mr-3"></span>
              Quality videos and live classes
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 rounded-full w-2.5 h-2.5 mr-3"></span>
              Community
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 bg-gray-100 rounded-full transform scale-110"></div>
            <img
              src={heroImage}
              alt="A smiling woman working at a dual-monitor computer setup"
              className="relative w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;