import React, { useState } from "react";

const Settings: React.FC = () => {
  const [name, setName] = useState("Gaurav Sahu");
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150" // Replace with your image URL
  );

  const handleChangeProfilePicture = () => {
    // Logic for changing profile picture
    alert("Change Profile Picture button clicked!");
  };

  const handleSaveProfile = () => {
    // Logic for saving profile settings
    alert("Profile saved successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r">
        <ul className="py-6">
          <li className="px-6 py-3 text-sm font-semibold text-blue-600 border-l-4 border-blue-600">
            <span role="img" aria-label="profile" className="mr-2">
              👤
            </span>
            Profile
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="plan" className="mr-2">
              💳
            </span>
            Plan
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="billing" className="mr-2">
              🏦
            </span>
            Billing
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="signin" className="mr-2">
              🔑
            </span>
            Sign in methods
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="team" className="mr-2">
              👥
            </span>
            Team members
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="notifications" className="mr-2">
              🔔
            </span>
            Notifications
          </li>
          <li className="px-6 py-3 text-sm hover:text-blue-600">
            <span role="img" aria-label="security" className="mr-2">
              🔒
            </span>
            Security
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-12 py-6">
        <h1 className="text-2xl font-bold mb-8">Settings</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Profile</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile picture
              </label>
              <div className="flex items-center">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <button
                  type="button"
                  onClick={handleChangeProfilePicture}
                  className="px-4 py-2 bg-gray-100 text-sm text-gray-700 border rounded-lg shadow-sm hover:bg-gray-200"
                >
                  Change
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSaveProfile}
              className="mt-4 px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Save my profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
