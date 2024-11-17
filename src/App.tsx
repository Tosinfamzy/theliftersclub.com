import "./App.css";
import AddExerciseForm from "./components/AddExcerciseForm";
import ExerciseForm from "./components/ExerciseForm";
// import ExerciseList from "./components/ExerciseList";

function App() {
  return (
    <>
      <ExerciseForm />
      {/* <ExerciseList /> */}
      <AddExerciseForm />
    </>
  );
}

export default App;
