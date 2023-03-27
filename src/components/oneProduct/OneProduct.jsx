import React from 'react'
import products from '../../products'
import styles from './OneProduct.module.css'

const OneProduct = () => {
    return (


        <div className={styles.list}>
        

            {products.map(product =>
  {      return (
            <div key={product.id} className={styles.OneProduct}>
                <h2 className={styles.glitchXXL}>{product.title}</h2>
                <h2 className={styles.glitchXL}>{product.amount}</h2>
                <img src={product.img} alt={product.title} className={product.mainImg}></img>
                <p className={styles.glitchL}>{product.description}</p>
                <h3 className={styles.glitchXL}>${product.price}</h3>
            </div>
        )
        })}
        </div>
    )
}

export default OneProduct