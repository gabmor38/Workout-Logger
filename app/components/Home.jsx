const Home = () => {
    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Workout Logger</h1>
                <p className="mb-4">Track your workouts and monitor your progress over time.</p>
            </div>
            <div className="grid grid-flow-col grid-rows-4 gap-4 text-white p-4 rounded-lg font-mono text-center max-w-sm mx-auto">
                <button className="rounded-lg bg-pink-500 p-4">Create Workout</button>
                <button className="rounded-lg bg-pink-500 p-4">Log Workout</button>
            </div>
        </>
    )
}
export default Home;
