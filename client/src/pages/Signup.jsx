import { useState } from 'react';
import axios from 'axios';
import { auth, provider } from '../utils/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaHome } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      toast.success(res.data.msg || 'Signup successful!');
      setTimeout(() => navigate('/login'), 1000);
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        phoneNumber: user.phoneNumber,
      };

      const res = await axios.post('http://localhost:5000/api/auth/google-login', userData, {
        withCredentials: true,
      });

      if (res.data.token) {
        localStorage.setItem('authToken', res.data.token);
        localStorage.setItem('userData', JSON.stringify(userData));
        toast.success('Google signup successful!');
        setTimeout(() => navigate('/courses'), 1000);
      }
    } catch (error) {
      console.error(error);
      toast.error('Google signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-purple-100 to-yellow-50 px-4 py-8">
      <section
        className="w-full max-w-md bg-white/40 backdrop-blur-lg shadow-xl rounded-2xl p-6 sm:p-8"
        aria-label="Signup form section"
      >
        <header className="text-center mb-6 space-y-3">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-sm text-purple-600 hover:underline"
            aria-label="Back to home"
          >
            <FaHome className="text-lg" />
            Back to Home
          </NavLink>
          <h1 className="text-lg sm:text-xl font-bold text-black bg-yellow-300 inline-block px-3 py-1 rounded-full">
            Signup
          </h1>
        </header>

        <form onSubmit={handleSignup} className="space-y-5" aria-label="Signup form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none text-sm sm:text-base"
              placeholder="Your name"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none text-sm sm:text-base"
              placeholder="you@example.com"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none text-sm sm:text-base"
              placeholder="••••••••"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold text-white transition duration-200 ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-900'
            }`}
            aria-busy={loading}
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>
        </form>

        <div className="text-center my-4 text-gray-600 text-sm">or</div>

        <button
          onClick={handleGoogleSignup}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 transition text-black text-sm font-medium"
          aria-label="Continue with Google"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            className="w-5 h-5"
            loading="lazy"
          />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <NavLink to="/login" className="text-purple-600 hover:underline">
            Login
          </NavLink>
        </p>
      </section>
    </main>
  );
};

export default Signup;
