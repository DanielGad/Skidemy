import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admissions from './pages/Admission';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Application from './pages/Application';
import CoursesPage from './pages/CoursePage';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apply" element={<Application />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;