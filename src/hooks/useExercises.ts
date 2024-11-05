// hooks/useExercises.ts
import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";
import { Excercise } from "../interfaces/exercise.interface";

export const useExercises = () => {
  return useQuery<Excercise[]>({
    queryKey: ["exercises"],
    queryFn: async () => {
      const { data } = await axios.get("/excercises");
      return data;
    },
  });
};
