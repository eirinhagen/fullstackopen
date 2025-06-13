const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}
const Part = ({name, exercises}) => {
    return (
        <>
            <p>Name of the part: {name}</p>
            <p>Amount of exercises: {exercises}</p>
        </>
    )
}
const Content = (props) => {
    // Bruk for each når det trenges ikke returnere noe eller det må være endringer på original array
    // Bruk map når du trenger returnere noe
    props.parts.forEach(part => console.log(part.name))
    return (
        props.parts.map((part, index) => {
                return (
                    <Part key={index} name={part.name} exercises={part.exercises}/>
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
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10
    }
    const part2 = {
        name: "Using props to pass data",
        exercises: 7
    }
    const part3 = {
        name: "State of a component",
        exercises: 14
    }

    const parts = [
        part1, part2, part3
    ]

    return (
        <>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts = {parts}/>
        </>
    )
}

export default App
