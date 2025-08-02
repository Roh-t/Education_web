import { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import { auth, provider } from '../utils/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FaHome } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);

      if (res.data?.token) {
        localStorage.setItem('authToken', res.data.token);
        if (res.data.user) {
          localStorage.setItem('userData', JSON.stringify(res.data.user));
        }

        const role = res.data.user?.role;
        toast.success(`${role === 'admin' ? 'Admin' : 'User'} login successful!`);

        setTimeout(() => {
          navigate(role === 'admin' ? '/admin-dashboard' : '/courses');
        }, 1000);
      } else {
        toast.warning('No user found');
      }
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error('Invalid username or password');
      } else {
        toast.error(err.response?.data?.msg || 'Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
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

      if (res.data?.token) {
        localStorage.setItem('authToken', res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.user));

        const role = res.data.user?.role;
        toast.success(`Google ${role === 'admin' ? 'admin' : 'user'} login successful!`);

        setTimeout(() => {
          navigate(role === 'admin' ? '/admin-dashboard' : '/courses');
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      toast.error('Google login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-purple-100 to-yellow-50 p-4">
      <section
        aria-labelledby="login-title"
        className="w-full max-w-md bg-white/60 backdrop-blur-lg shadow-lg rounded-2xl p-6 sm:p-8"
      >
        <header className="mb-6 text-center space-y-2">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-sm text-purple-600 hover:underline"
            aria-label="Go to home page"
          >
            <FaHome className="text-lg" />
            Back to Home
          </NavLink>
          <h1 id="login-title" className="text-xl sm:text-2xl font-semibold text-black">
            Login
          </h1>
        </header>

        <form onSubmit={handleLogin} className="space-y-4" aria-label="Login form">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-lg text-black border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-lg text-black border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end text-sm">
            <NavLink
              to="/forgot-password"
              className="text-purple-600 hover:underline"
              aria-label="Forgot your password?"
            >
              Forgot password?
            </NavLink>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold transition text-base ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-900'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 my-4">or</div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition text-black text-sm font-medium"
          aria-label="Login with Google"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            className="w-5 h-5"
            loading="lazy"
          />
          Continue with Google
        </button>

        <footer className="mt-6 text-center text-sm text-gray-700">
          Don&apos;t have an account?{' '}
          <NavLink to="/signup" className="text-purple-600 hover:underline">
            Create an Account
          </NavLink>
        </footer>
      </section>
    </main>
  );
};

export default Login;
