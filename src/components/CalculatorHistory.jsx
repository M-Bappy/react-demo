import { useState } from "react";

//id generate
const InitialInputState = {
    a:10,
    b:20,
}

function* generateID(){
    let id = 0;
    while(true){
        yield id++
    }
}
const getId = generateID()



const CalculatorHistory = () => {

    const [inputState,setInputState] = useState({...InitialInputState});
    const [result, setResult] = useState(0);
    const [opsHistory,setOpsHistory] =useState([]);
    
    const inputFiledHandler = (e)=>{
        setInputState({
            ...inputState,
            [e.target.name]: parseInt(e.target.value),
        })
    }
    const resetInputState = ()=>{
        setInputState({...InitialInputState})
        setResult(0)
    }

    const arithMeticOps =(ops)=>{

        if(!inputState.a || !inputState.b){
            alert('invalid input')
            return
        }

        const f = new Function (
        `
        return ${inputState.a} ${ops} ${inputState.b}
        `
        )
        setResult(f());
        const history = {
            id: getId.next().value,
            inputs: inputState,
            ops,
            date: new Date().toLocaleString()
        }
        setOpsHistory([
            ...opsHistory,
            history
        ])
        console.log(opsHistory);
       
    }

    const restoreHistory= ()=>{
        setOpsHistory([])
    }

    return (
        <div style={{width:'60vw',margin: '50px auto'}}>
            <h1>Result: <span>{result}</span></h1>
            <div>
                <p>Inputs</p>
                <input type="number" name="a" value={parseInt(inputState.a)} onChange={inputFiledHandler}/>
                <input type="number" name="b" value={parseInt(inputState.b)} onChange={inputFiledHandler}/>
            </div>
            <div>
                <p>operations</p>
                <button onClick={()=> {arithMeticOps('+')}}>+</button>
                <button onClick={()=> {arithMeticOps('-')}}>-</button>
                <button onClick={()=> {arithMeticOps('*')}}>*</button>
                <button onClick={()=> {arithMeticOps('/')}}>/</button>
                <button onClick={resetInputState}>Clear</button>
            </div>
            <div>
                {
                    opsHistory.length===0? (<p>no history</p>) :(                
                        <ul>
                        { 
                            opsHistory.map((hisItem)=>( 
                            <li key={hisItem.id}>
                                <h3>Operation: {`${hisItem.inputs.a} ${hisItem.ops} ${hisItem.inputs.b}`}</h3>
                                <h4>Operation Time: {hisItem.date}</h4>
                            </li> 
                            ))
                        }
                        <button onClick={restoreHistory}>Restore History</button>
                        </ul>
                        )
                }

            </div>
        </div>
    );
};

export default CalculatorHistory;