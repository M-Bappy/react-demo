import { useEffect, useState } from "react";

const UseEffectFunc = () => {
    const [count,setCount] =useState(0);
    const [lock, setLock] = useState(false);

    useEffect(
        ()=>{
            console.log('count', count, 'lock', lock);
            if(count === 5){
                setLock(true)
            }
        },[count]
    )

    useEffect(
        ()=>{
            let time = null
            if(lock){
                time = setTimeout(()=>{
                    setCount(0)
                    setLock(false)
                    clearTimeout(time)
                },1500)
            }
        }
    )

    return (
        <div>
            <h1 id="test">{count}</h1>
            <button disabled={lock} onClick={()=>{setCount(count+1)}} >click {lock && ('locked')}</button>
        </div>
    );
};

export default UseEffectFunc;