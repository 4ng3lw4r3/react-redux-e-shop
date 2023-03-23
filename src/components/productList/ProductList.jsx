import OneProduct from '../oneProduct/OneProduct';
import products from '../data';


const ProductList = () => { 

    console.log(products);
    
    return (
        <div>
      <h1>Products List</h1>   
      <OneProduct/>         
        </div>
    )
}


export default ProductList

