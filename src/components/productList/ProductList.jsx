import OneProduct from '../oneProduct/OneProduct';
import products from '../../products';
import styles from './ProductList.module.css'


const ProductList = () => {

  console.log(products);

  return (
    <div className={styles.list}>
      <h1>Products List</h1>
      <OneProduct />
    </div>
  )
}


export default ProductList

