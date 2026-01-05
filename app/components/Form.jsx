
"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Form = () => {
    const [exercises, setExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    

    const getData = async () => {
    try {
      const {data} = await axios.get(
        "https://exercisedb-api.vercel.app/api/v1/exercises/filter?bodyPart=upper%20arms"
      );
      console.log(data.data);
      setExercises(data.data);
      exerciseOptions.push(...data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => { 
    getData();
  }, []);

  const exerciseOptions = exercises.map((exercise) => (
    <option key={exercise.exerciseId} value={exercise.name}>
      {exercise.name}
    </option>
  ));



  return (
    <>
    <form className="max-w-md mx-auto p-3 bg-white rounded shadow">
        <h3>Exercise Name</h3>
        <div className="flex flex-ro mb-4">
            <select
                onChange={(e) => {
                    const exercise = exercises.find(
                    (ex) => ex.exerciseId === e.target.value
                    );
                    setSelectedExercise(exercise);
                }}
                >
                <option value="">Select exercise</option>
                {exercises.map((exercise) => (
                    <option key={exercise.exerciseId} value={exercise.exerciseId}>
                    {exercise.name}
                    </option>
                ))}
            </select>

            {selectedExercise && (
                <img src={selectedExercise.gifUrl} width="100" />
            )}

            
        </div>
        <div className="grid grid-cols-5 gap-6 mb-4">
            <div className="flex flex-col text-center mb-4">
                <label htmlFor="sets">Sets</label>
                <input type="number" id="sets" name="sets" min="1" max="10" className="border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex flex-col text-center mb-4">
                <label htmlFor="reps">Reps</label>
                <input type="number" id="reps" name="reps" min="1" max="50" className="border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex flex-col text-center mb-4">
                <label htmlFor="weight">Weight</label>
                <input type="number" id="weight" name="weight" min="1" max="500" className="border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex flex-col justify-center mb-4">
                <select id="weight" name="lbs" className=" mt-2 h-10 border border-gray-300 p-2 rounded">
                    <option value="lbs">lbs</option>
                    <option value="kg">kg</option>
                </select>
            </div>
            <div className="flex flex-col justify-center m-8">
                <input type="checkbox" id="completed" name="completed" className="size-8 self-center border border-gray-300 rounded" />
            </div>
        </div>
        <button type="button" className="flex flex-row w-full bg-purple-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-4">+ Add Set</button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
        </button>
            
    </form>
    </>
    )
}

export default Form;