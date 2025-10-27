import type { Recipe } from "../interface/types";
import Noodle from "../assets/Noodles.jpeg"
import TunaSalad from "../assets/salad with tuna.jpeg"
import Pastha from "../assets/Pasth.jpeg"
import Cucumber from "../assets/cuccumbor.jpeg"
import Masala from "../assets/Masala tofu.jpeg"
import Pork from "../assets/pork.jpeg"
import Fruit from "../assets/Fruit bowl'.jpeg"
import Grilled from "../assets/Grilled salmon.jpeg"

export const recipesData: Recipe[] = [
  {
    id: '1',
    name: 'Noodle chicken soup',
    image: Noodle,
    difficulty: 'Intermediate',
    time: 25,
    calories: 95,
    dietType: 'Meat',
    rating: 4
  },
  {
    id: '2',
    name: 'Salad with raw tuna',
    image: TunaSalad,
    difficulty: 'Advanced',
    time: 25,
    calories: 95,
    dietType: 'Fish',
    rating: 5
  },
  {
    id: '3',
    name: 'Pasta with spinach',
    image: Pastha,
    difficulty: 'Beginner',
    time: 25,
    calories: 95,
    dietType: 'Veg',
    rating: 3
  },
  {
    id: '4',
    name: 'Cucumber salad',
    image: Cucumber,
    difficulty: 'Advanced',
    time: 25,
    calories: 95,
    dietType: 'Veg',
    rating: 4
  },
  {
    id: '5',
    name: 'Masala tofu',
    image: Masala,
    difficulty: 'Beginner',
    time: 25,
    calories: 95,
    dietType: 'Veg',
    rating: 5
  },
  {
    id: '6',
    name: 'Pork medallions',
    image: Pork,
    difficulty: 'Advanced',
    time: 25,
    calories: 95,
    dietType: 'Meat',
    rating: 4
  },
  {
    id: '7',
    name: 'Fruit bowl',
    image: Fruit,
    difficulty: 'Intermediate',
    time: 25,
    calories: 95,
    dietType: 'Fruit',
    rating: 5
  },
  {
    id: '8',
    name: 'Grilled salmon',
    image: Grilled,
    difficulty: 'Intermediate',
    time: 30,
    calories: 120,
    dietType: 'Fish',
    rating: 5
  }
];
