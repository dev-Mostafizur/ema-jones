import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleProductsDetails = () => {
 const data = useParams()
 console.log(data)
 const [product, setProduct] = useState({})
 useEffect(()=>{
    fetch(`https://dummyjson.com/products/${data.id}`)
    .then(res=>res.json())
    .then(data=>setProduct(data))
 }, [data.id])
 const {id,title,thumbnail,description,price,category,images} = product
    return (
        <>
              <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg" src={thumbnail} alt="Product" />
                <div className="flex flex-col flex-1 p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <div className="flex justify-between mb-3">
                        <p className="text-purple-800 dark:text-gray-100 font-bold">${price}</p>
                        <p className="text-purple-800 dark:text-gray-100 font-bold">{category}</p>
                    </div>
                    <button className="w-full p-2 bg-blue-500 text-white font-bold rounded-b-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                    Add to Cart
                </button>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default SingleProductsDetails;