export enum Category {
  BALLS = 'balls',
  UNDERWATER = 'underwater-sports',
  TROPHIES = 'trophies',
  HORSE_SPORTS = 'sports-with-horses',
  SHOOTING_THINGS = 'shooting-things',
  COSTUMES = 'costumes',
  SPEED = 'speed',
  HITTING_THINGS = 'hitting-things',
  EQUIPMENT = 'equipment',
  SPECTATORS = 'spectators',
  ALL = 'all'
}

export interface CategoryLink {
  category: Category;
  description: string;
  firstProduct?: string;
}

export const LINKS: CategoryLink[] = [
  {
    category: Category.BALLS,
    description: 'Balls for sports',
  },
  {
    category: Category.UNDERWATER,
    description: 'Sports where you go in water',
  },
  {
    category: Category.HORSE_SPORTS,
    description: 'Sports with horses',
  },
  {
    category: Category.SHOOTING_THINGS,
    description: 'Sports where you shoot things',
  },
  {
    category: Category.SPECTATORS,
    description: 'Sport spectators',
  },
  {
    category: Category.COSTUMES,
    description: 'Sports costumes',
  },
  {
    category: Category.HITTING_THINGS,
    description: 'Hitting things',
  },
  {
    category: Category.SPEED,
    description: 'Go fast sports',
  },
  {
    category: Category.TROPHIES,
    description: 'Sport awards',
  },
  {
    category: Category.EQUIPMENT,
    description: 'Stuff you need for sports',
  },
  {
    category: Category.ALL,
    description: 'Everything for sports',
  },
]
