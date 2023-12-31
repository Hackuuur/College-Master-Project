export const MANGA_CATEGORIES = [
  {
    label: "Action Manga",
    value: "action_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/manga?category=action_manga`,
        imageSrc: "/manga/slime-action.jpg",
      },
      {
        name: "Latest Releases",
        href: `/manga?category=action_manga&sort=desc`,
        imageSrc: "/manga/berserk.jpg",
      },
      {
        name: "Popular Now",
        href: `/manga?category=action_manga`,
        imageSrc: "/manga/one-punch-man-action.jpg",
      },
    ],
  },
  {
    label: "Romance Manga",
    value: "romance_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/manga?category=romance_manga`,
        imageSrc: "/manga/romance1.jpg",
      },
      {
        name: "Latest Releases",
        href: `/manga?category=romance_manga&sort=desc`,
        imageSrc: "/manga/lv999romance.jpg",
      },
      {
        name: "Popular Now",
        href: `/manga?category=romance_manga`,
        imageSrc: "/manga/horimiyaromance.jpg",
      },
    ],
  },
  {
    label: "Fantasy Manga",
    value: "fantasy_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/manga?category=fantasy_manga`,
        imageSrc: "/manga/Goblin-slayer-fantasy.jpg",
      },
      {
        name: "Latest Releases",
        href: `/manga?category=fantasy_manga&sort=desc`,
        imageSrc: "/manga/The-Greatest- Estate-Developer-fantasy.jpg",
      },
      {
        name: "Popular Now",
        href: `/manga?category=fantasy_manga`,
        imageSrc: "/manga/Frieren-fantasy.jpg",
      },
    ],
  },
  {
    label: "Sci-Fi Manga",
    value: "sci_fi_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/manga?category=sci_fi_manga`,
        imageSrc: "/manga/nano-machine-sci-fi.jpg",
      },
      {
        name: "Latest Releases",
        href: `/manga?category=sci_fi_manga&sort=desc`,
        imageSrc: "/manga/undead-unluck-sci-fi.jpg",
      },
      {
        name: "Popular Now",
        href: `/manga?category=sci_fi_manga`,
        imageSrc: "/manga/dr-stone-sci-fi.jpg",
      },
    ],
  },
  {
    label: "Horror Manga",
    value: "horror_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/manga?category=horror_manga`,
        imageSrc: "/manga/tokyo-ghoul-horror.jpg",
    },
    {
        name: "Latest Releases",
        href: `/manga?category=horror_manga&sort=desc`,
        imageSrc: "/manga/berserk-horror.jpg",
      },
      {
        name: "Popular Now",
        href: `/manga?category=horror_manga`,
        imageSrc: "/manga/chainsaw-man-horror.jpg",
      },
    ],
  },
  {
    label: "Adventure Manga",
    value: "adventure_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/manga?category=adventure_manga`,
        imageSrc: "/manga/omniscient-reader-adventure.jpg",
      },
      {
        name: "Latest Releases",
        href: `/manga?category=adventure_manga&sort=desc`,
        imageSrc: "/manga/solo-leveling-adventure.jpg",
      },
      {
        name: "Popular Now",
        href: `/manga?category=adventure_manga`,
        imageSrc: "/manga/vinland-saga.jpg",
      },
    ],
  },
  {
    label: "Comedy Manga",
    value: "comedy_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/manga?category=comedy_manga`,
        imageSrc: "/manga/don't-toy-with-me-miss-nagatoro-comady.jpg",
      },
      {
        name: "Latest Release",
        href: `/manga?category=comedy_manga&sort=desc`,
        imageSrc: "/manga/Bocchi-the-rock-comady.jpg",
      },
      {
        name: "Popular Now",
        href: `/manga?category=comedy_manga`,
        imageSrc: "/manga/The-Beginning-after-the-end-comady.jpg",
      },
    ],
  },
  {
    label: "Drama Manga",
    value: "drama_manga" as const,
    featured: [
      {
        name: "Top Picks",

        href: `/manga?category=drama_manga`,
        imageSrc: "/manga/Bungo-stray-dogs-drama",
      },
      {
        name: "Latest Release",
        href: `/manga?category=drama_manga&sort=desc`,
        imageSrc: "/manga/The-Fragrant-Flower-Blooms-With-Dignity-drama.jpg",
      },
      {
        name: "Popular Now",
        href: `/manga?category=drama_manga`,
        imageSrc: "/manga/jojo's-Bizarre-adventure-drama.jpg",
      },
    ],
  },
  {
    label: "Mystery Manga",
    value: "mystery_manga" as const,
    featured: [
      {
        name: "Top Picks",
        href: `/manga?category=mystery_manga`,
        imageSrc: "/manga/dorohedoro-mystery.jpg",
      },
      {
        name: "Latest Release",
        href: `/manga?category=mystery_manga&sort=desc`,
        imageSrc: "/manga/hells-Paradise-mystery.jpg",
      },
      {
        name: "Popular Now",
        href: `/manga?category=mystery_manga`,
        imageSrc: "/manga/the-player-who-can't-levelup-mystery",
      },
    ],
  },
];
