import React, { useState } from 'react'
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import Courses from './components/Courses';
import Community from './components/Community';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('recipes');

  const renderPage = () => {
    switch (activeTab) {
      case 'recipes':
        return <Recipes />;
      case 'favorites':
        return <Favorites />;
      case 'courses':
        return <Courses />;
      case 'community':
        return <Community />;
      default:
        return <Recipes />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      {renderPage()}
    </div>
  );
};

export default App;
