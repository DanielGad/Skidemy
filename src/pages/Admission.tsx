const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);
const ApplyIcon = () => ( <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16v-2h2v2h-2zm2-4h-2V7h2v7z" fill="#3B82F6"/></svg>);
const TestIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" fill="#3B82F6"/></svg>);
const AcceptIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="#3B82F6"/></svg>);
const OnboardingIcon = () => ( <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#3B82F6"/></svg>);


const Admissions = () => {
  return (
    <div className="bg-white">
        <div className="container mx-auto px-6 py-12">
            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mb-8 hover:bg-gray-200">
                <BackArrowIcon />
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
                Admissions Process
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-4xl mx-auto">
                <div className="space-y-3">
                    <ApplyIcon />
                    <h2 className="text-xl font-bold text-blue-600">Apply Online</h2>
                    <p className="text-gray-600">
                        Complete a simple application with your basic details and a brief motivation note on why you're eager to join Skidemy.
                    </p>
                </div>
                <div className="space-y-3">
                    <TestIcon />
                    <h2 className="text-xl font-bold text-blue-600">Aptitude Test and Mentor Interview</h2>
                    <p className="text-gray-600">
                        Take a short test to assess your current level in the skill chosen, upon passing, you an proceed to having a friendly video chat with one of our experienced mentors to learn about your interests and goals.
                    </p>
                </div>
                <div className="space-y-3">
                    <AcceptIcon />
                    <h2 className="text-xl font-bold text-blue-600">Acceptance and Enrollment</h2>
                    <p className="text-gray-600">
                        Once accepted, you’ll receive an enrolment packet. Finalize your spot by accepting your admission and completing any required documents
                    </p>
                </div>
                <div className="space-y-3">
                    <OnboardingIcon />
                    <h2 className="text-xl font-bold text-blue-600">Onboarding and welcome</h2>
                    <p className="text-gray-600">
                        Start your journey with a warm onboarding session where you’ll meet your mentor, connect with your fellow students, and get ready for your classes.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Admissions;