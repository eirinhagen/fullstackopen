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
    let total = 0;
    props.parts.forEach((part) => {
        total += part.exercises;
    });
    return (
        <p>Total amount of exercises: {total}</p>
    );
}

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    };

    return (
        <>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </>
    )
}

export default App
