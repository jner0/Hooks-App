import { useState } from "react"

export const CounterApp = () => {

    const [state, setCounter]= useState( {
        counter1: 10,
        counter2: 20,  
        counter3: 30
    });

    //desestructuro el state para no usar state.cou... 
    const { counter1, counter2, counter3 } = state;

  return (
    <>
        <h1>Counter1: { counter1 } </h1>   
        <h1>Counter2: { counter2 } </h1> 
        <h1>Counter3: { counter3 } </h1> 
        <hr/>

        <button 
            className="btn" 
            onClick={ 
                () => setCounter({
                    ...state, //hago el operador spread para desestructurar y mantener el estado sin hacer lo que esta abajo
                    counter1: counter1 + 1,
                    //counter2, counter3,
                }) 
            } >+1</button> 
    
    </>
  )
}
