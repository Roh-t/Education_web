import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import MinimalNavbar from "./components/MinimalNavbar";
import AdminNavbar from "./components/AdminNavbar";

import Home from "./pages/Home";
import YouTubeBlueprint from "./pages/YouTubeBlueprint";
import About from "./components/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllCourses from "./pages/AllCourses";
import CourseDetails from "./components/CourseDetails";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import CourseCurriculum from "./components/CourseCurriculum";
import ContactUs from "./components/ContactUs";
import FAQSection from "./components/FAQSection";
import CourseLayout from "./components/Individual_Course/CourseLayout";
import { auth, provider } from "./utils/Firebase";
import { signInWithPopup } from "firebase/auth";

// 🟡 Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const userPayload = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        phoneNumber: user.phoneNumber,
      };

      const apiResponse = await fetch("http://localhost:5000/api/auth/google-login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userPayload),
      });

      const responseData = await apiResponse.json();
      if (!apiResponse.ok) throw new Error(responseData.msg || "Google login failed");

      if (responseData.token) {
        localStorage.setItem("authToken", responseData.token);
        localStorage.setItem(
          "userData",
          JSON.stringify({ ...userPayload, role: responseData.user?.role })
        );

        setUserData({ ...userPayload, role: responseData.user?.role });
        setIsLoggedIn(true);

        const role = responseData.user?.role || "user";
        const redirectPath = role === "admin" ? "/admin-dashboard" : "/courses";

        toast.success(`${role === "admin" ? "Admin" : "User"} login successful`);

        setTimeout(() => {
          navigate(redirectPath, { replace: true });
        }, 1000);
      }
    } catch (error) {
      console.error("Google login error:", error.message);
      toast.error(error.message || "Login failed");
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("userData");

    if (authToken) {
      setIsLoggedIn(true);
      if (storedUser) {
        try {
          setUserData(JSON.parse(storedUser));
        } catch (err) {
          console.error("Error parsing user data:", err);
        }
      }
    } else {
      setIsLoggedIn(false);
    }

    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
    toast.info("Logged out successfully");
    navigate("/");
  };

  // 👇 Custom Navbar Visibility Control
  const hideNavbarRoutes = ["/login", "/signup"];
  const isCoursesPage = location.pathname === "/courses";
  const isAdminDashboard = location.pathname === "/admin-dashboard";
  const isLearnPage = /^\/course\/\d+\/learn$/.test(location.pathname); // dynamic route match
  const shouldHideNavbar =
    hideNavbarRoutes.includes(location.pathname) || isLearnPage;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-black text-white">
      {/* ✅ Toastify */}
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover theme="dark" />

      {/* ✅ Dynamic Navbar */}
      {!shouldHideNavbar && (
        isAdminDashboard ? (
          <AdminNavbar />
        ) : isCoursesPage ? (
          <MinimalNavbar userData={userData || { name: "User", avatar: "" }} />
        ) : (
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        )
      )}

      {/* ✅ Routes */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/youtube-blueprint" element={<YouTubeBlueprint />} />
          <Route path="/about" element={<About />} />
          <Route path="/course-curriculum" element={<CourseCurriculum />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/login" element={<Login googleLogin={googleLogin} />} />
          <Route path="/signup" element={<Signup googleLogin={googleLogin} />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ✅ Protected Routes */}
          <Route
            path="/courses"
            element={isLoggedIn ? <AllCourses /> : <Navigate to="/login" />}
          />
          <Route
            path="/course/:id"
            element={isLoggedIn ? <CourseDetails /> : <Navigate to="/login" />}
          />
          <Route
            path="/course/:id/learn"
            element={isLoggedIn ? <CourseLayout /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin-dashboard"
            element={
              isLoggedIn && userData?.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      )}

      {/* ✅ Logout Button */}
      {isLoggedIn && !isLearnPage && (
        <div className="p-4 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
