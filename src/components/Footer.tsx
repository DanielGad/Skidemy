import appStoreBadge from '../assets/AppStore.png';
import googlePlayBadge from '../assets/playstore.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Skidemy</h3>
            <p className="text-gray-600 mb-2">01042584</p>
            <p className="text-gray-600 mb-4">Skidemy@gmail.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">FB</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">IG</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">TW</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Welcome</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Get started</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Log in</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Be a mentor</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Sell courses</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms of use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Technology</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Art</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Others</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Download Now</h4>
            <div className="space-y-3">
              <a href="#"><img src={appStoreBadge} alt="Download on the App Store" className="w-36"/></a>
              <a href="#"><img src={googlePlayBadge} alt="Get it on Google Play" className="w-36"/></a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;