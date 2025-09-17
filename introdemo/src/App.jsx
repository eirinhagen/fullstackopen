import {useState} from "react";

//Complex state

const App = () => {

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);


    const handleLeftClicks = () => {
        setAll(allClicks.concat("L"));
        setLeft(left + 1);
    }

    const handleRightClicks = () => {
        setAll(allClicks.concat("R"));
        setRight(right + 1);
    }


    return (
        <div>
            {left}
            <button onClick={handleLeftClicks}>Left</button>
            <button onClick={handleRightClicks}>Right</button>
            {right}
            <p>{allClicks.join('')}</p>
        </div>
    )
}


export default App;