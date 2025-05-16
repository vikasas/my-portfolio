import { createContext, useContext, useState } from 'react';

const BulbContext = createContext();

 function Context({children}){

     const [bulb , Setbulb] = useState(true);
     return (
        <div>
            <BulbContext.Provider value={{
                bulb : bulb ,
                Setbulb : Setbulb,
            }}
            >
                {children}
            </BulbContext.Provider>
        </div>
    )
}


export default function App () {
    return (
        <div>
            <Context>
                <Light/>
            </Context>
        </div>
    )
}

function Light (){
    return(
        <div>
            <LightBulb/>
            <Next/>
        </div>
    )
}

function LightBulb(){
    const {bulb} = useContext(BulbContext);
    return (
        <div className='text-white'>
            { bulb ? "bulbON" : "bulboff"};
        </div>
    )
}

function Next(){
    const {Setbulb} = useContext(BulbContext);
    return (
        <div>
            <button className='bg-white text-black' onClick={() => {
                Setbulb( b => !b);
            }}>Toggle</button>
        </div>
    )
}
