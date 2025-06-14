
const App = () => {
   /* const now = new Date();
    const a = 10;
    const b = 20;
    console.log(now,a+b);
    console.log("Hello from component! ^_^"); */
    const name = "Eirin";
    const age = 27;
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name = "Elin" age={26+10}/>
            <Hello name = {name} age = {age} />
        </div>

    )
}

export default App;