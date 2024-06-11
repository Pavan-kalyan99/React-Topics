import React, { useState, useEffect } from 'react'
// ----this is useFetch custom hook------//
const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData();
    }, [url]);

    const getData = async () => {
        const res = await fetch(url);
        const products = await (res.json());
       // console.log(products);
        setData(products)

    }
    return data;

}

export default useFetch
