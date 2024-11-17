export const excerciseType = {
  cardio: "cardio",

  strength: "strength",

  flexibility: "flexibility",

  balance: "balance",

  olympic_weightlifting: "olympic_weightlifting",

  plyometrics: "plyometrics",

  powerlifting: "powerlifting",

  strongman: "strongman",

  stretching: "stretching",
} as const;

export type excerciseType = (typeof excerciseType)[keyof typeof excerciseType];
