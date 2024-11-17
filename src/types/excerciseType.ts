const excerciseType = {
  cardio: "cardio",
  olympic_weightlifting: "olympic_weightlifting",
  plyometrics: "plyometrics",
  powerlifting: "powerlifting",
  strength: "strength",
  strongman: "strongman",
  stretching: "stretching",
};

export type excerciseType = (typeof excerciseType)[keyof typeof excerciseType];
