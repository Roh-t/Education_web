import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg || "Something went wrong");
      }

      setMessage(data.msg || "Password reset email sent!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-gray-900 text-white p-8 rounded shadow-md border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-center">🔐 Forgot Password</h2>

      <form onSubmit={handleForgotPassword}>
        <label htmlFor="email" className="block mb-2 text-sm font-semibold">
          Enter your email address:
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      {message && <p className="mt-4 text-green-400 text-center">{message}</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
