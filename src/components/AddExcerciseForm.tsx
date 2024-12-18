import { useState, useEffect, useRef } from "react";
import { usePostExercises } from "../hooks/usePostExercises";
import { Excercise } from "../interfaces/exercise.interface";
import { MUSCLE } from "../types/muscleGroup";
import { excerciseType } from "../types/excerciseType";

const AddExerciseForm = () => {
  const { mutateAsync } = usePostExercises();
  const [exercise, setExercise] = useState<Excercise>({
    name: "",
    type: "",
    muscle: "",
    equipment: "",
    difficulty: "",
    instructions: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setExercise((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutateAsync(exercise);
    setExercise({
      name: "",
      type: "",
      muscle: "",
      equipment: "",
      difficulty: "",
      instructions: "",
    });
    setIsModalOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="py-2 px-4 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none"
      >
        Add Exercise
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={exercise.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <select
                  name="type"
                  id="type"
                  value={exercise.type}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  {Object.keys(excerciseType).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="muscle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Muscle
                </label>
                <select
                  name="muscle"
                  id="muscle"
                  value={exercise.muscle}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  {Object.keys(MUSCLE).map((muscle) => (
                    <option key={muscle} value={muscle}>
                      {muscle}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="difficulty"
                  className="block text-sm font-medium text-gray-700"
                >
                  Difficulty
                </label>
                <select
                  name="difficulty"
                  id="difficulty"
                  value={exercise.difficulty}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                >
                  {["easy", "medium", "hard"].map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="equipment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Equipment
                </label>
                <input
                  type="text"
                  name="equipment"
                  id="equipment"
                  value={exercise.equipment}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="instructions"
                  className="block text-sm font-medium text-gray-700"
                >
                  Instructions
                </label>
                <textarea
                  name="instructions"
                  id="instructions"
                  value={exercise.instructions}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
                >
                  Add Exercise
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddExerciseForm;
