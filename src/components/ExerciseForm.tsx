import { useState } from "react";
import { useExercises } from "../hooks/useExercises";
import { Excercise } from "../interfaces/exercise.interface";

const ExerciseForm = () => {
  const { data } = useExercises();
  const [exercise, setExercise] = useState<Excercise[]>([]);

  const getExercise = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    if (!search) {
      setExercise([]);
      return;
    }
    const filteredExercise =
      data?.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)
      ) || [];

    setExercise(filteredExercise);
  };

  return (
    <>
      <section id="shorten" className="relative bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <form
            id="link-form"
            className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          >
            <input
              type="text"
              className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
              placeholder="Search for an exercise eg. bench press"
              id="link-input"
              onChange={(e) => getExercise(e)}
            />

            <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
              Find an exercise
            </button>

            {/* <!-- Error Message --> */}
            <div
              id="err-msg"
              className="absolute left-7 bottom-3 text-red text-sm italic"
            ></div>
          </form>

          {exercise.length > 0 &&
            exercise.map((exercise) => (
              <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
                <p className="font-bold text-center text-veryDarkViolet md:text-left">
                  {exercise.name}
                </p>

                <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                  <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                    Add
                  </button>
                </div>
              </div>
            ))}

          {/* <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://frontendmentor.io
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/k4IKyk</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ExerciseForm;
