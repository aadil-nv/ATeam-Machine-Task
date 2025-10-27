import { BookOpen, Heart, GraduationCap, Users, Award } from 'lucide-react';
import { userProfile } from '../Data/user';
import { motion } from 'framer-motion';

const Sidebar: React.FC<{ activeTab: string; onTabChange: (tab: string) => void }> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'recipes', icon: BookOpen, label: 'Recipes' },
    { id: 'favorites', icon: Heart, label: 'Favorites' },
    { id: 'courses', icon: GraduationCap, label: 'Courses' },
    { id: 'community', icon: Users, label: 'Community' }
  ];

  const completionPercentage = 75;
  const circumference = 2 * Math.PI * 36; 
  const strokeDashoffset = circumference - (completionPercentage / 100) * circumference;

  return (
    <div className="w-64 bg-white h-screen p-6 flex flex-col">
      <div className="mb-8 flex justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Foodoo</h1>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-3">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 80 80">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#FED7E2"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#F472B6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Avatar inside circle */}
           <div className="absolute inset-0 flex items-center justify-center">
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 
                  flex items-center justify-center ring-4 ring-white overflow-hidden shadow-md">
    <img
      src={userProfile.avatar}
      alt="User Avatar"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          </div>
          
          <h3 className="font-semibold text-gray-800">{userProfile.name}</h3>
          <p className="text-sm text-gray-500">{userProfile.role}</p>
          <div className="mt-2 flex items-center gap-1 text-red-500">
            <Award size={16} />
            <span className="font-semibold">{userProfile.points}</span>
          </div>
        </div>
      </div>
      
<nav className="flex-1">
  {menuItems.map((item) => {
    const Icon = item.icon;
    const isActive = activeTab === item.id;

    return (
      <motion.button
        key={item.id}
        onClick={() => onTabChange(item.id)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
          isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Icon
          size={20}
          className={`${
            isActive ? 'text-red-500' : 'text-red-500'
          } transition-colors duration-200`}
        />

        <motion.span
          className="font-medium"
          whileHover={{ letterSpacing: "0.025em" }}
          transition={{ duration: 0.2 }}
        >
          {item.label}
        </motion.span>
      </motion.button>
    );
  })}
</nav>


      
      {/* Team Section */}
      <div className="mt-auto bg-gradient-to-br bg-white rounded-xl p-4">
        <div className="flex gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-400"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 -ml-3"></div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-400 -ml-3 flex items-center justify-center text-white text-xs font-bold">
            +
          </div>
        </div>
        <p className="text-sm font-semibold text-gray-800 mb-1">Create a team and</p>
        <p className="text-sm text-gray-700">
          take part in <span className="font-bold underline cursor-pointer">TV show!</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;