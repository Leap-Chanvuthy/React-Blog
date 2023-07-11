import { useState , useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPanding , setIspanding] = useState(true);
    const [error , setError] = useState(null);
    useEffect(() =>{
      const abortCont = new AbortController();
        setTimeout(() =>{
          fetch (url , {signal : abortCont.signal})
          .then ((res) =>{
            if (!res.ok){
              throw Error ('Could not fetch the data for that resource...');
            }
            return res.json();
          })
          .then ((data) =>{
            // console.log(data);
            setData(data);
            setIspanding(false);
          })
          .catch ((err) =>{
            if (err.name === 'AbortError'){
              console.log ('fetch aborted');
            }else {
              setError (err.message);
              setIspanding(true);
            }
          });
  
        } , 1000);
        return () => abortCont.abort();
      } , [url]);

      return {data , isPanding , error};
    }

    export default useFetch;