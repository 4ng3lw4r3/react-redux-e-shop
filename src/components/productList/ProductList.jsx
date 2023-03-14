import { useState, useEffect } from 'react';
import OneProduct from '../oneProduct/OneProduct';
import productService from '../../services/productService';
import styles from './ProductList.module.css';

const ProductList = () => { 
    const [products, setProducts] = useState([]);

    //function to get a response from services fetch and saves value to state;

    const getProducts = ()=> {
        productService().then((res)=>{
            setProducts(res);
        })
    }

    useEffect(()=>{
        getProducts();
    }, []);

    console.log(products);
    
    return (
        <div>
            <OneProduct items={products}/>
        </div>
    )
}


export default ProductList

