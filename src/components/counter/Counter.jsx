import './Counter.css'
import {useState} from "react";
import CounterButtons from "./CounterButtons";


export default function Counter() {
    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }

     function resetCounterFunction() {
         setCount(0)
         console.log(count)
     }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButtons by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButtons by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButtons by={3} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <button className="resetButton"
                    onClick={resetCounterFunction}
            >Reset</button>
        </>
    )
}