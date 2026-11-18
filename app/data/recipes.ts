export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "burger",
    title: "Classic Burger",
    emoji: "🍔",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "ramen",
    title: "Japanese Ramen",
    emoji: "🍜",
    minutes: 40,
    difficulty: "Hard",
    cuisine: "Japanese",
  },
  {
    id: "salad",
    title: "Greek Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Greek",
  },
];