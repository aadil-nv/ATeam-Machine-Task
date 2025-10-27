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
      className="relative h-[350px] w-[280px] flex justify-center"
      style={{ perspective: '1000px' }}
      whileTap={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)' }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full p-4 pt-12 flex flex-col items-center justify-between"
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
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-5xl shadow-lg border-4 border-white">
              {recipe.image}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center mt-12">
            <h3 className="text-xl font-bold text-gray-800 text-center mb-3 leading-tight tracking-wide">
              {recipe.name}
            </h3>

            <div className="flex justify-center mb-3">
              <DifficultyBadge difficulty={recipe.difficulty} />
            </div>

           <div className="flex justify-between w-full mb-3 text-center items-center">
  {/* Time Section */}
  <div className="flex-1 flex flex-col items-center justify-center min-w-[80px]">
    <div className="text-2xl font-bold text-gray-800">{recipe.time}</div>
    <div className="text-sm text-gray-500 mt-1">Min</div>
  </div>

  {/* Divider */}
  <div className="w-px h-10 bg-gray-300"></div>

  {/* Calories Section */}
  <div className="flex-1 flex flex-col items-center justify-center min-w-[80px]">
    <div className="text-2xl font-bold text-gray-800">{recipe.calories}</div>
    <div className="text-sm text-gray-500 mt-1">Kcal</div>
  </div>

  {/* Divider */}
  <div className="w-px h-10 bg-gray-300"></div>

  {/* Diet Type Section */}
  <div className="flex-1 flex flex-col items-center justify-center min-w-[80px]">
    <div className="w-8 h-8 mx-auto flex items-center justify-center">
      <img
        src={getDietTypeIcon(recipe.dietType)}
        alt={recipe.dietType}
        className="w-full h-full object-contain"
      />
    </div>
    <div className="text-sm text-gray-500 mt-1">{recipe.dietType}</div>
  </div>
</div>


            <div className="flex font-bold justify-center mb-4 text-[20px]">
              <StarRating rating={recipe.rating} />
            </div>
          </div>

                       <div
  className="absolute bottom-0 left-0 w-full bg-white text-gray-800 py-3 rounded-b-xl 
             font-semibold text-base sm:text-lg text-center cursor-pointer 
             hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md"
  onMouseEnter={(e) => {
    e.stopPropagation();
    setIsFlipped(false);
  }}
  onClick={(e) => {
    e.stopPropagation();
    console.log('Start cooking:', recipe.name);
  }}
>
  Start Cooking
                      </div>



        </div>

        {/* Back Side */}
        <div
  className="absolute w-full h-full bg-gradient-to-br from-teal-400 to-green-500 rounded-xl p-4 text-white shadow-lg flex flex-col justify-between"
  style={{
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    pointerEvents: isFlipped ? 'auto' : 'none',
  }}
  onMouseLeave={() => setIsFlipped(false)}
>
  {/* PRO Tag at the top-right */}
  <div className="absolute top-4 left-4">
    <span className="inline-block bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
      PRO
    </span>
  </div>

  {/* Card Content */}
  <div className="flex-1 flex flex-col justify-center items-start mt-8 px-2">
    <h3 className="text-xl font-bold mb-2">Mentorship Program</h3>
    <p className="text-sm text-white/90 leading-relaxed">
      A mentor will track your progress and help you improve your cooking skills.
    </p>
  </div>

  {/* Decorative Icon */}
  <div className="absolute bottom-2 right-2 text-5xl opacity-20 pointer-events-none">
    👨‍🍳
  </div>
</div>

      </div>
    </motion.div>
  );
};

export default RecipeCard;