import { useState , useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPanding , setIspanding] = useState(true);
    const [error , setError] = useState(null);
    
 
    useEffect(() =>{
        setTimeout(() =>{
          fetch (url)
          .then ((res) =>{
            if (!res.ok){
              throw Error ('Could not fetch the data for that resource...');
            }
            return res.json();
          })
          .then ((data) =>{
            console.log(data);
            setData(data);
            setIspanding(false);
          })
          .catch ((err) =>{
            setError (err.message);
            setIspanding(true);
          });
  
        } , 1000);
      } , [url]);

      return {data , isPanding , error};
    }

    export default useFetch;