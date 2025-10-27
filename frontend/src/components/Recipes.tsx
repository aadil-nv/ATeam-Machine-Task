import React from 'react';
import { Search, Settings2 } from 'lucide-react';
import RecipeCard from './RecipeCard';
import { recipesData } from '../Data/recipe';



const Recipes: React.FC = () => {
    return (
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-br from-pink-50 to-orange-50 overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="flex flex-col  sm:flex-row justify-between items-center gap-6">
                    <div className="w-full sm:max-w-xl">
                        <div className="relative ">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800" size={20} />
                            <input
                                type="text"
                                placeholder="Enter your search request..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl from-pink-50 to-orange-50 shadow-sm  focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white rounded-lg transition-colors flex items-center justify-center group">
                            <Settings2
                                className="w-5 h-5 text-gray-900 transition-transform duration-300 transform group-hover:rotate-90"
                            />
                        </button>

                        <button className="px-5 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors">
                            Go to Premium
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4 text-center sm:text-left">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center text-3xl sm:text-4xl">
                            🍳
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 " style={{ fontFamily: "'Playfair Display',serif" }}>
                                Only the best recipes!
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base">Today's new recipes for you</p>
                        </div>
                    </div>

                    <div className="flex gap-8 flex-wrap justify-center items-center">
                        <div className="flex flex-col items-center">
                            <div className="text-2xl sm:text-3xl font-bold text-gray-800">168</div>
                            <div className="text-sm text-gray-400 font-medium">Tutorials</div>
                        </div>

                        <div className="h-10 w-px bg-gray-300"></div>

                        <div className="flex flex-col items-center">
                            <div className="text-2xl sm:text-3xl font-bold text-gray-800">304</div>
                            <div className="text-sm text-gray-400 font-medium">Recipes</div>
                        </div>
                    </div>


                </div>

                {/* 🧁 Recipe Grid */}
                <div className="mt-2 sm:mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
                        {recipesData.map((recipe) => (
                            <div key={recipe.id} className="flex justify-center mt-12 sm:mt-16">
                                <RecipeCard recipe={recipe} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;