import { motion } from 'framer-motion';
import type { Recipe } from '../interface/types';
import DifficultyBadge from './DifficultyBadge';
import getDietTypeIcon from '../utils/getDietTypeIcon';
import StarRating from './StarRating';
import { useState } from 'react';

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[280px] w-[250px] flex justify-center"
      style={{ perspective: '1000px' }}
      whileTap={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)' }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white rounded-xl p-4 pt-12 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            pointerEvents: isFlipped ? 'none' : 'auto',
          }}
          onMouseEnter={(e) => {
            if (!(e.target as HTMLElement).closest('button')) {
              setIsFlipped(true);
            }
          }}
          onMouseLeave={() => setIsFlipped(false)}
        >
          {/* Floating Recipe Image */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-4xl shadow-md border-4 border-white">
              {recipe.image}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 mt-3">
            <h3 className="text-md font-semibold text-gray-800 text-center mb-2">
              {recipe.name}
            </h3>

            <div className="flex justify-center mb-2">
              <DifficultyBadge difficulty={recipe.difficulty} />
            </div>

            <div className="flex justify-around mb-2 text-xs">
              <div className="text-center flex-1">
                <div className="font-bold text-gray-800">{recipe.time}</div>
                <div className="text-gray-500 text-[10px]">Min</div>
              </div>

              <div className="w-px bg-gray-200 self-stretch"></div>

              <div className="text-center flex-1">
                <div className="font-bold text-gray-800">{recipe.calories}</div>
                <div className="text-gray-500 text-[10px]">Kcal</div>
              </div>

              <div className="w-px bg-gray-200 self-stretch"></div>

              <div className="text-center flex-1">
                <div className="w-6 h-6 flex items-center justify-center mx-auto">
                  <img
                    src={getDietTypeIcon(recipe.dietType)}
                    alt={recipe.dietType}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-gray-500 text-[10px]">{recipe.dietType}</div>
              </div>
            </div>

            <div className="flex justify-center mb-2">
              <StarRating rating={recipe.rating} />
            </div>
          </div>

          {/* Button at the bottom */}
          <div className="mt-auto">
            <button
              className="w-full bg-gradient-to-t from-red-600 to-red-500 text-white py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition-all"
              onMouseEnter={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              onClick={(e) => {
                e.stopPropagation();
                console.log('Start cooking:', recipe.name);
              }}
            >
              Start cooking
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-teal-400 to-green-400 rounded-xl p-4 text-white shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            pointerEvents: isFlipped ? 'auto' : 'none',
          }}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <div className="relative h-full flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <span className="inline-block bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                PRO
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-2">Mentorship Program</h3>
              <p className="text-xs text-white/90 mb-2">
                A mentor will track your progress and help you improve your cooking skills.
              </p>
            </div>

            <div className="absolute bottom-0 right-0 text-6xl opacity-20 pointer-events-none">
              👨‍🍳
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard;