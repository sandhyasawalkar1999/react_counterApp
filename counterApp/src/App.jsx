import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Counter()
{
  const [count,setCount] = useState(0);

  function IncrementNo(){
    setCount(count+1);
    console.log('increment is clicked', count);
  }

  function DecrementNo(){
    if(count > 0){
      setCount(count-1);
      console.log('decrement is clicked', count); 
    }
  
  }
  return(

  
    <div>
    <h1>Counter </h1>
    <h2>current count is : {count}</h2>
    <button onClick={IncrementNo}>Increment(+)</button>
    <button onClick ={DecrementNo}>Decrement(-)</button>
    </div>
  )
}

export default Counter;















