import sessionImg1 from '../assets/woman-on-headset.png';
import sessionImg2 from '../assets/woman-writing.png';
import sessionImg3 from '../assets/man-on-pc.png';
import classAvatars from '../assets/profile-frame.png';
import { Link } from 'react-router-dom';

const LiveSessions = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="grid grid-cols-2 gap-4 w-[80%] mx-auto">
            <img src={sessionImg1} alt="Student in live session" className="rounded-lg object-cover w-[100%]  col-span-1" />
            <img src={sessionImg2} alt="Student writing notes" className="rounded-lg object-cover w-[100%] col-span-1" />
            <img src={sessionImg3} alt="Student at computer" className="rounded-lg object-cover w-[100%] col-span-2" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Explore live creative sessions
            </h2>
            <p className="text-gray-600 mb-8">
              Learn in real time with expert-led classes, connect with fellow students, and sharpen your skills through collaboration. Gain peer insights, build projects, and open doors to exciting opportunities in tech and beyond. From coding and design to business and innovation, our sessions equip you with practical skills that prepare you for today's digital world. Join a growing community of learners, share ideas, and take the next step toward building the future you dream of.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
              <Link to="/apply">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto">
                    Get Started
                </button></Link>
                <div className="flex items-center justify-center">
                    <img src={classAvatars} alt="Class participants" className="w-24"/>
                    <span className="text-gray-700 font-medium ml-2">Join a class</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSessions;