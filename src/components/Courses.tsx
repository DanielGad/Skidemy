import React from 'react';
type CourseCardProps = {
  title: string;
  image: string;
};

import cyberSecurityImg from '../assets/cyber.jpg';
import codingImg from '../assets/cyber-pc.png';
import dataAnalysisImg from '../assets/data_science.jpg';
import uiUxDesignImg from '../assets/uiux.jpg';
import artificialInte from '../assets/aiml.jpeg';
import { Link } from 'react-router-dom';

const coursesData = [
  { title: 'Cyber security', image: cyberSecurityImg },
  { title: 'Coding', image: codingImg },
  { title: 'Data Analysis', image: dataAnalysisImg },
  { title: 'UI/UX design', image: uiUxDesignImg },
  { title: 'Artificial Intelligence', image: artificialInte },
];



const CourseCard: React.FC<CourseCardProps> = ({ title, image }) => (
  <div className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  </div>
);

const Courses = () => {
  return (
    <section id="courses" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center md:text-left">
          Courses
        </h2>
        <div className="relative">
          <div className="flex space-x-8 pb-4 overflow-x-auto">
            {coursesData.map((course, index) => (
              <CourseCard key={index} title={course.title} image={course.image} />
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-3">
            <Link to="/courses">
             <button className="bg-gray-300 hover:bg-gray-400 px-10 py-3 rounded-2xl cursor-pointer focus:outline-none">Explore More</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;