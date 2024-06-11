import React from 'react'
import useFetch from './useFetch';

const Component2 = () => {
    const customHook = useFetch('https://fakestoreapi.com/carts');
    console.log('hook::',customHook);

    return (
        <div>
            <h1>TWo</h1>
            {JSON.stringify(customHook)}
        </div>
    )
}

export default Component2
