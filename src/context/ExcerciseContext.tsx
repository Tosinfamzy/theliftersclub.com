import { createContext, useState } from "react";
import { ReactNode } from "react";
import { Excercise } from "../interfaces/exercise.interface";

interface ExerciseContextProps {
  excercise: Excercise | null;
  setExcercise: (excercise: Excercise) => void;
}

const ExcerciseContext = createContext<ExerciseContextProps>(
  {} as ExerciseContextProps
);

export const ExcerciseProvider = ({ children }: { children: ReactNode }) => {
  const [excercise, setExcercise] = useState<Excercise | null>(null);
  return (
    <ExcerciseContext.Provider value={{ excercise, setExcercise }}>
      {children}
    </ExcerciseContext.Provider>
  );
};

export default ExcerciseContext;
