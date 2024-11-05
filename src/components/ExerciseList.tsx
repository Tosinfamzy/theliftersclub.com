import { useExercises } from "../hooks/useExercises";

const ExerciseList = () => {
  const { data, isLoading, error } = useExercises();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching exercises</div>;

  return (
    <ul>
      {data &&
        data.map((exercise) => <li key={exercise.name}>{exercise.name}</li>)}
    </ul>
  );
};

export default ExerciseList;
