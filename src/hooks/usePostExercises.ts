import { useMutation } from "@tanstack/react-query";
import axios from "../api/axios";
import { Excercise } from "../interfaces/exercise.interface";

const addExercise = async (exercise: Excercise): Promise<Excercise> => {
  try {
    const { data } = await axios.post<Excercise>("/exercises", exercise);
    return data;
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to add exercise: ${error.message}`);
    } else {
      throw new Error("Failed to add exercise: Unknown error");
    }
  }
};

export const usePostExercises = () => {
  // const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addExercise,
  });
};
