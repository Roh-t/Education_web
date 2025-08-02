import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <p className="text-lg text-center">Welcome Admin! You can manage the platform here.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
          <p>View, ban, or promote users.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Manage Courses</h2>
          <p>Create, update, or delete courses.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; // ✅ This line is required!
