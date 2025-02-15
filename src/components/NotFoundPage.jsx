import React from 'react';
import { HomeIcon, ArrowLeft, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* SVG Illustration */}
        <div className="w-full max-w-md mx-auto mb-8 text-gray-500">
          <svg viewBox="0 0 400 300" className="w-full">
            <path
              fill="#E2E8F0"
              d="M159.97 161.5c26.36-41.77 82.23-53.32 124-26.96 41.77 26.36 53.32 82.23 26.96 124-26.36 41.77-82.23 53.32-124 26.96-41.77-26.36-53.32-82.23-26.96-124z"
            />
            <path
              fill="#CBD5E1"
              d="M130 100h140c11.05 0 20 8.95 20 20v60c0 11.05-8.95 20-20 20H130c-11.05 0-20-8.95-20-20v-60c0-11.05 8.95-20 20-20z"
            />
            <text
              x="200"
              y="160"
              fontSize="60"
              fill="#64748B"
              textAnchor="middle"
              fontWeight="bold"
            >
              404
            </text>
          </svg>
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
          <p className="text-lg text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button 
            onClick={() => window.history.back() || handleNavigate()}
            className="flex items-center px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>

          <Link
            to="/"
            className="flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Go Home
          </Link>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto pt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search our website..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Help Text */}
        <div className="text-sm text-gray-500 pt-6">
          Need assistance? <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our support team</a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;