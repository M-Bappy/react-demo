
const CounterHooks = ({count,HandleInc,HandleDec}) => {

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={HandleInc}>increment</button>
            <button onClick={HandleDec}>decrement</button>
        </div>
    );
};

export default CounterHooks;