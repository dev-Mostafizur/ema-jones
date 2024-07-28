import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts/SingleProducts';


const Products = () => {
    const products = useLoaderData()
    if(!products){
        console.log("there is an error ")
    }
    // console.log(products.products)
    return (
        <>
        
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
       {
        products.products?.map(product=> <SingleProducts key={product.id} product={product}></SingleProducts>)
       }
       </div>
    </div>
        </>
    );
};

export default Products;