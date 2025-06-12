const Header = (props) => {
    return (
        <>
            <h1>{props.courseTitle}</h1>
        </>
    )
}
const Content = (props) => {
    return (
        <p>{props.partTitle}</p>
    )
}

const Total = (props) => {
    return (
        <p>Total amount of exercises: {props.exerciseAmount}</p>
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

    return (
        <>
            <Header courseTitle={course}/>
            <Content partTitle={part1}/>
            <Total exerciseAmount={exercises1}/>
            <Content partTitle={part2}/>
            <Total exerciseAmount={exercises2}/>
            <Content partTitle={part3}/>
            <Total exerciseAmount={exercises3}/>
            <p>Total amount of exercises are {exercises1 + exercises2 + exercises3}.</p>
        </>
    )
}

export default App
