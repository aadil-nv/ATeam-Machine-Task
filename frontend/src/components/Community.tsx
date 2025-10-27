import React from 'react'

const Community: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-8xl mb-4">👥</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8">Connect with fellow food enthusiasts and share your culinary journey</p>
        <button className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Community
