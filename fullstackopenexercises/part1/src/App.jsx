const Header = (props) => {
    return (
        <>
            <h1>{props.courseTitle}</h1>
        </>
    )
}
const Part = (props) => {
    console.log(props.partTitle)
    return (
        <>
            <p>Name of the part: {props.partTitle}</p>
            <p>Amount of exercises: {props.exercises}</p>
        </>
    )
}
const Content = (props) => {
    return (
        props.parts.map((part, index) => {
                return (
                    <Part key={index} partTitle={part.partTitle} exercises={part.exercises}/>
                )
            }
        )
    )
}

const Total = (props) => {
    return (
        <p>Total amount of exercises: {props.total}</p>
    )
}
const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;
    const parts = [
        {partTitle: part1, exercises: exercises1},
        {partTitle: part2, exercises: exercises2},
        {partTitle: part3, exercises: exercises3}
    ]


    return (
        <>
            <Header courseTitle={course}/>
            <Content parts={parts}/>
            <Total total={exercises1 + exercises2 + exercises3}/>
        </>
    )
}

export default App
