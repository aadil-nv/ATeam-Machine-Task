export interface Recipe {
  id: string;
  name: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  time: number;
  calories: number;
  dietType: string;
  rating: number;
}

export interface UserProfile {
  name: string;
  role: string;
  avatar: string;
  points: number;
}