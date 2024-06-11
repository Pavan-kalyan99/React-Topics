import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
const Component1 = () => {
    const customHook = useFetch('https://fakestoreapi.com/products');
    console.log('hook::',customHook);
    // it is the fetch logic
    //   const [data, setData]=useState([])
    //   useEffect(()=>{
    //     getData();
    //   });

    //   const getData= async()=>{
    //    const res=await fetch('https://fakestoreapi.com/products');
    //    const products=await(res.json());
    //    console.log(products);
    // }
    return (
        <div>
            <h1>One</h1>
            {JSON.stringify(customHook)}
        </div>
    )
}

export default Component1
