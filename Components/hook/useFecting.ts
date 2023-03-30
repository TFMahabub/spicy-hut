import { useEffect, useState } from "react";

export const useFetch = async(fetchUrl:string) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
            setLoading(false);
        })
        .catch(err=>{
            setError(err);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[fetchUrl])
    return {data, loading, error}
}