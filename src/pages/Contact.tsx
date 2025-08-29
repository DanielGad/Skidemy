
const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const Contact = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mb-8 hover:bg-gray-200" onClick={() => window.history.back()}>
          <BackArrowIcon />
        </button>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Contact Us
          </h1>
          <div className="bg-blue-50/50 p-8 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">SEND US A MESSAGE</h2>
            <p className="text-gray-600 mb-8">
              Fill out the contact form below if you are looking to get started or curious about any programme.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" required placeholder="Name" className="bg-white p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <input type="email" required placeholder="Email address" className="bg-white p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <input type="tel" placeholder="Phone number" required className="bg-white p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <input type="text" placeholder="Subject" required className="bg-white p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <textarea placeholder="Your Message" rows={5} required className="md:col-span-2 bg-white p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;