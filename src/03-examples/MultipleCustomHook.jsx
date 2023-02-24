import { Quote, LoadingQuote } from "./index";
import { useCounter, useFetch } from "../../hooks";


export const MultipleCustomHook = () => {
  
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    console.log(counter)
    const { author, quote } = !!data && data[0];
    
    return (
    <>
        <h1>Breaking Bad Quotes </h1>
        <hr />

      
        {
          isLoading
              ?<LoadingQuote />
              :<Quote author={author} quote={quote}/>

          // isLoading 
          //     ?(
          //       <div className="alert alert-info text-center">
          //         Loading...
          //       </div>
          //     )  
          //     :(
          //       <blockquote className="blockquote text-end">
          //         <p className="mb-1">{ data[0].quote }</p>
          //         <footer className="blockquote-footer">{data[0].author}</footer>
          //       </blockquote>                
          //     )
        }     

        <button className="btn btn-primary" disabled={isLoading} onClick={ () => increment(1) }>
          Next Quote
        </button>

    </>
  )
}
