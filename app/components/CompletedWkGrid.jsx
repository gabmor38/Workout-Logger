const CompletedWkGrid = () => {
 
    const days = [1, 2, 3, 4, 5, 6, 7];
    const weeks = [ 'w1','w2', 'w3','w4' ];

    return  (
        <div className="grid grid-cols-1 grid-rows-1 gap-2 outline p-2 rounded-lg">
            {weeks.map((week) => (  
                <div key={week} className="inline-grid text-center grid-auto grid-cols-8 grid-rows-1 gap-4 rounded-md">
                    <p className="text-small font-bold">{week}</p>
                    {days.map((day) => (
                        <div key={day} className="inline-grid grid-auto grid-rows-1 gap-4">
                            <button className="bg-fuchsia-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"/>
                            
                        </div>
                    ))}     
                </div>
            ))}
        </div>
    )
}

export default CompletedWkGrid;