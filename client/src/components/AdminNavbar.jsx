// components/AdminNavbar.jsx
const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <ul className="flex space-x-4">
          <li><a href="/admin-dashboard">Dashboard</a></li>
          <li><a href="/">Back to Home</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
