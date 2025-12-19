const Form = () => {
  return (
    <form className="max-w-sm mx-auto p-4 bg-white rounded shadow">
        <div className="flex flex-col mb-4">
            <label htmlFor="exercise">Exercise Name</label> 
            <input type="text" id="exercise" name="exercise" className="border border-gray-300 p-2 rounded" />
        </div>
        <div className="grid grid-cols-3 gap-10 mb-4">
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
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
        </button>
            
    </form>
    )
}

export default Form;