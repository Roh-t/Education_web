import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      const res = await axios.post('http://localhost:5000/api/auth/forgot-password', {
        email: email.trim(),
      });

      setStatus({
        type: 'success',
        msg: res.data.msg || 'Password reset link sent to your email.',
      });
    } catch (err) {
      setStatus({
        type: 'error',
        msg: err.response?.data?.msg || 'Something went wrong. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-purple-100 to-pink-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Forgot Password</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white font-semibold rounded-lg transition ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-black hover:bg-gray-900'
            }`}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {status.msg && (
          <p
            className={`mt-4 text-sm text-center ${
              status.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status.msg}
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
