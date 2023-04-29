import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({

        username: "ner0",
        email: "nemecio@google.com"
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => { //desestructuro el target del event
        //console.log(event.target.value);
        //desestructuramos el target para obtener el name y value y no llamar targey.name...
        const { name, value } = target;
        setformState({
            //desestructuramos el form state para mantener todos los valores del formulario
            ...formState,
            [ name ]: value
        }); 
    }

    //UseEffect sirve para disparar efectos secundarios
    useEffect( () => {
        //console.log('useEffect called');
    }, []);

    useEffect( () => {
        //console.log('formState changed');
    }, [formState]);

    useEffect( () => {
        //console.log('email changed');
    }, [email]);


    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text" className="form-control" 
            placeholder="Username" 
            name="username" 
            value={ username } 
            onChange={onInputChange}
        />
        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="nemecio@google.com" 
            name="email" value={ email } 
            onChange={ onInputChange }
        />

        {
            (username === "ner02") && <Message/>
        }

    </>
    
  )
}
