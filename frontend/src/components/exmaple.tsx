import type { Recipe } from "../interface/types";
import DifficultyBadge from "./DifficultyBadge";
import getDietTypeIcon from "../utils/getDietTypeIcon";
import StarRating from "./StarRating";
import { useState } from "react";
import { motion } from "framer-motion";

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[450px]" 
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className={`relative w-full h-full transition-transform duration-700`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute w-full h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          style={{ backfaceVisibility: 'hidden', pointerEvents: isFlipped ? 'none' : 'auto' }}
          onMouseEnter={(e) => {
            if (!(e.target as HTMLElement).closest('button')) {
              setIsFlipped(true);
            }
          }}
          onMouseLeave={() => setIsFlipped(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 pb-0">
            <motion.div 
              className="flex justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-5xl shadow-sm">
                {recipe.image}
              </div>
            </motion.div>
            
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-3">{recipe.name}</h3>
            
            <div className="flex justify-center mb-4">
              <DifficultyBadge difficulty={recipe.difficulty} />
            </div>
            
            <div className="flex justify-around mb-4 text-sm relative">
              <div className="text-center flex-1">
                <div className="font-bold text-gray-800">{recipe.time}</div>
                <div className="text-gray-500 text-xs">Min</div>
              </div>
              
              {/* Vertical divider */}
              <div className="w-px bg-gray-200 self-stretch"></div>
              
              <div className="text-center flex-1">
                <div className="font-bold text-gray-800">{recipe.calories}</div>
                <div className="text-gray-500 text-xs">Kcal</div>
              </div>
              
              {/* Vertical divider */}
              <div className="w-px bg-gray-200 self-stretch"></div>
              
              <div className="text-center flex-1">
                <div className="w-8 h-8 flex items-center justify-center mx-auto">
                  <img 
                    src={getDietTypeIcon(recipe.dietType)} 
                    alt={recipe.dietType}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-gray-500 text-xs">{recipe.dietType}</div>
              </div>
            </div>
            
            <div className="flex justify-center mb-4">
              <StarRating rating={recipe.rating} />
            </div>
          </div>
          
          {/* Button section with gradient blend */}
          <div className="relative mt-6">
            {/* Gradient blend overlay */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
            
            <motion.button 
              className="w-full bg-red-500 text-white py-4 font-semibold transition-colors relative"
              style={{
                borderBottomLeftRadius: '1rem',
                borderBottomRightRadius: '1rem',
              }}
              onMouseEnter={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              onClick={(e) => {
                e.stopPropagation();
                console.log('Start cooking:', recipe.name);
              }}
              whileHover={{ backgroundColor: '#dc2626' }}
              whileTap={{ scale: 0.98 }}
            >
              Start cooking
            </motion.button>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-br from-teal-400 to-green-400 rounded-2xl p-6 text-white shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            pointerEvents: isFlipped ? 'auto' : 'none'
          }}
          onMouseLeave={() => setIsFlipped(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isFlipped ? 1 : 0 }}
        >
          <div className="relative h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                PRO
              </span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">Mentorship Program</h3>
              <p className="text-sm text-white/90 mb-4">
                A Mentor will track your progress and give you tips for foster culinary growth 
              </p>
            </div>
            
            <div className="absolute bottom-0 right-0 text-8xl opacity-20 pointer-events-none">
              👨‍🍳
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RecipeCard;