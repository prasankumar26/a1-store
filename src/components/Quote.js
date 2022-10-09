import React, {useEffect, useState} from 'react'

const api = 'https://api.quotable.io/random'

const Quote = () => {

    const [quote, setQuote] = useState()
    const [loading, setLoading] = useState(true)

    const fetchQuote = async () =>{
        setLoading(true)
     try {
        const response = await fetch(api)
        const data = await response.json()
        setLoading(false)
        setQuote(data)
     } catch (error) {
        setLoading(false)
        console.log(error);
     }
    }

    useEffect(() =>{
        fetchQuote()
    },[])

  return (
    <>
     <div className="container">
         <h1 className='text-center text-uppercase text-danger my-5'>Quote Generator</h1>

       <div className="d-flex justify-content-center align-items-center flex-column">
         {
            loading ? 
           <>
       <div className="d-flex">
         <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
        </div>
        <div className="spinner-border text-secondary" role="status">
        <span className="sr-only"></span>
        </div>
        <div className="spinner-border text-success" role="status">
        <span className="sr-only"></span>
        </div>
        <div className="spinner-border text-danger" role="status">
        <span className="sr-only"></span>
        </div>
        <div className="spinner-border text-warning" role="status">
        <span className="sr-only"></span>
        </div>
        <div className="spinner-border text-info" role="status">
        <span className="sr-only"></span>
        </div>
        <div className="spinner-border text-light" role="status">
        <span className="sr-only"></span>
        </div>
        <div className="spinner-border text-dark" role="status">
        <span className="sr-only"></span>
        </div>
       </div>
           </>
             
:   
        <div className="quote-box">
        <h2 className='text-info'>
            {quote && quote.author}
        </h2>
        <p>
            {quote && quote.content}
        </p>
      </div>
        }
 
     <button className="btn btn-primary mt-4" onClick={fetchQuote}>
         Request Quote
      </button>

       </div>
    
     


    
     </div>

    </>
  )
}

export default Quote