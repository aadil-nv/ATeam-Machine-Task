import apple from "../assets/apple.png";
import meat from "../assets/meat.png";
import fish from "../assets/fish.png";
import leaf from "../assets/leaf.png";

const getDietTypeIcon = (dietType: string): string => {
  const icons: Record<string, string> = {
    'Veg': leaf,
    'Fish': fish,
    'Meat': meat,
    'Fruit': apple
  };
  return icons[dietType] || apple; // default image if not matched
};

export default getDietTypeIcon;
