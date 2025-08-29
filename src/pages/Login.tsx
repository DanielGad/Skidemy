import { Link } from 'react-router-dom';

const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const Login = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="container mx-auto px-6 py-8 flex-grow">
                 <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mb-8 hover:bg-gray-200" onClick={() => window.history.back()}>
                    <BackArrowIcon />
                </button>
                <div className="max-w-md mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Skidemy</h1>
                    <form className="space-y-5">
                         <div>
                            <label className="font-medium text-gray-700">Email</label>
                            <input type="email" required placeholder="johndoe@gmail.com" className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <div>
                            <label className="font-medium text-gray-700">Password</label>
                            <input type="password" required placeholder="******************" className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Login
                        </button>
                        <div className="text-center text-gray-500">Or sign in with</div>
                        <button type="button" className="w-full bg-white border border-gray-300 text-gray-700 p-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                            <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.49 44 30.651 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
                            Google
                        </button>
                        <div className="text-center text-gray-600">
                            Don't have an account? <Link to="/signup" className="text-blue-600 font-medium hover:underline">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;