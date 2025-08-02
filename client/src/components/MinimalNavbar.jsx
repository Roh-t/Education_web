import { NavLink } from "react-router-dom";
import { Bell, User } from "lucide-react";

const MinimalNavbar = ({ userData }) => {
  const fallbackAvatar =
    "https://ui-avatars.com/api/?background=random&name=" +
    encodeURIComponent(userData?.name || "U");

  const navItems = [
    { label: "LEARN", to: "/courses" },
    { label: "FEED", to: "/courses" },
    { label: "STORE", to: "/courses" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-lg border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <NavLink
          to="/courses"
          className="flex items-center gap-3 text-lg font-bold hover:opacity-90 transition"
          aria-label="Homepage"
        >
          <img
            src="https://i.pravatar.cc/256?u=uniqueid"
            alt="Logo"
            className="w-10 h-10 rounded-xl object-contain shadow"
          />
          <span className="tracking-wide">
            <span className="text-red-500">DHRUV RATHEE</span>{" "}
            <span className="text-white">ACADEMY</span>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-gray-400 hover:text-white hover:border-b hover:border-white transition pb-1"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Notifications"
            className="rounded-full p-2 hover:bg-neutral-800 transition"
          >
            <Bell className="w-5 h-5 text-gray-300" />
          </button>

          {userData ? (
            <img
              src={userData.avatar || fallbackAvatar}
              alt={`${userData.name || "User"}'s Avatar`}
              onError={(e) => (e.target.src = fallbackAvatar)}
              className="w-9 h-9 rounded-full border border-gray-700 object-cover transition"
            />
          ) : (
            <User
              className="w-6 h-6 text-gray-300"
              aria-label="User profile icon"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default MinimalNavbar;
