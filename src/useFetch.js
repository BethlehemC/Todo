import { useEffect, useState } from "react";

const useFetch = (url) => {
const [data,setData]=useState([]);

useEffect(()=>{
    const abortContrller =new  AbortController()  
fetch(url,abortContrller.Signal)
.then((res)=> 
{if(!res.ok){throw Error("could not fetch the data")}
else{ return res.json() }})
.then((data)=>setData(data))
.catch((e)=>
{
    if(e.name==='AbortError'){
        console.log('fetch is aborted')
    }else{
        console.log(e.message)
    }
})
return ()=> abortContrller.abort();
},[url]);
   return {data}; 
}
export default useFetch;