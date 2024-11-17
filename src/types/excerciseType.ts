export const excerciseType = {
  cardio: "Cardio",

  strength: "Strength",

  flexibility: "Flexibility",

  balance: "Balance",

  olympic_weightlifting: "Olympic Weightlifting",

  plyometrics: "Plyometrics",

  powerlifting: "Powerlifting",

  strongman: "Strongman",

  stretching: "Stretching",
} as const;

export type excerciseType = (typeof excerciseType)[keyof typeof excerciseType];
