const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const Application = () => {
    return (
        <div className="bg-blue-50 py-12">
            <div className="container mx-auto px-6 max-w-4xl">
              <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full mb-8 hover:bg-gray-200" onClick={() => window.history.back()}>
          <BackArrowIcon />
        </button>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
                    Application Form
                </h1>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">First name</label>
                            <input type="text" placeholder="Enter Name" required className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Last name</label>
                            <input type="text" placeholder="Enter Name" required className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Date of birth</label>
                            <input type="date" placeholder="dd/mm/yy" required className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Gender</label>
                            <select required className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ">
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Country Code</label>
                            <input type="text" required value="+234" readOnly className="w-full p-3 rounded-lg border border-gray-300 "/>
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Mobile Number</label>
                            <input type="tel" required placeholder="8050123456" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                    </div>
                     <div>
                        <label className="block font-medium text-gray-700 mb-1">Email address</label>
                        <input type="email" required placeholder="Enter email address" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Which skill would you like to learn?</label>
                        <select required  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ">
                            <option>Select</option>
                            <option>Full Stack Web Development</option>
                            <option>Data Science & Analytics</option>
                            <option>AI & Machine Learning</option>
                            <option>Cybersecurity Fundamentals</option>
                            <option>Mobile App Development</option>
                            <option>UI/UX Design</option>
                            <option>Cloud Computing (AWS)</option>
                            <option>DevOps Engineering</option>
                            <option>Business Intelligence</option>
                            <option>Ethical Hacking & Pen Testing</option>
                            <option>Generative AI & Prompting</option>
                            <option>AR/VR Development</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Current skill level</label>
                        <select required className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ">
                            <option>Select</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">When are you most available to learn?</label>
                        <select required className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ">
                            <option>Select</option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                            <option>Night</option>
                            <option>Weekends</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Why Skidemy?</label>
                        <textarea required placeholder="Provide short details" rows={5} className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                    </div>
                     <div className="text-center pt-4">
                        <p className="text-sm text-gray-500 mb-4">By submitting, you consent to the collection and secure storage of your data for this application, in line with our privacy policy.</p>
                        <button type="submit" className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Application;