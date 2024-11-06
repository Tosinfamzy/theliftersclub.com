import { useExercises } from "../hooks/useExercises";
import NotFound from "./NotFound";

const ExerciseList = () => {
  const { data, isLoading, error } = useExercises();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <NotFound />;

  return (
    <ul>
      {data &&
        data.map((exercise) => <li key={exercise.name}>{exercise.name}</li>)}
    </ul>
  );
};

export default ExerciseList;
