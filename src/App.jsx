import Input from "./Input";
import Counter from "./Counter";
import Product from "./Product";
import Product2 from "./Product2";
import ToDo from "./components/ToDo";
import CalculatorHistory from "./components/CalculatorHistory";
import Contact from "./components/Contact";
import UseEffect from "./components/UseEffect";
import Ajax from "./components/Ajax";
import useCounter from "./hooks/useCounter";
import CounterHooks from "./components/CounterHooks";
import StyledCompo from "./components/StyledCompo";


const App = () => {
    const { count: count1,HandleDec:HandleDec1 ,HandleInc:HandleInc1 } = useCounter({init:5})
    return (
        <div>

            {/* <Counter></Counter> */}
            {/* <Product></Product> */}
            {/* <Product2></Product2> */}
            {/* <ToDo></ToDo> */}
            {/* <CalculatorHistory/> */}
            {/* <Contact/> */}
            {/* <UseEffect/> */}
            {/* <Ajax/> */}
            {/* <CounterHooks count={count1} HandleInc={HandleInc1} HandleDec={HandleDec1}/> */}
            <StyledCompo/>
        </div>
    );
};

export default App;