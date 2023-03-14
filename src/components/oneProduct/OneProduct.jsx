import  styles from './OneProduct.module.css'

const oneProduct = (props) => {
    // console.log(props.items.products);
  return (
    <div className={styles.list}>
        { 
            props.items.products?props.items.products.map(item => {
                return(
                    <div key={item.id} className={styles.oneProduct}>
                        <h2 className={styles.glitchXXL}>{item.title}</h2>
                        <h2 className={styles.glitchXL}>{item.brand}</h2>
                        <p className={styles.glitchL}>{item.description}</p>
                        <img src={item.thumbnail} alt={item.title} className={styles.mainImg}></img>
                        <h3 className={styles.glitchXL}>${item.price}</h3>
                        <h4 className={styles.glitchL}>{item.category}</h4>
                    </div>
                )
            }):'not found'
        }
    </div>
  )
}

export default oneProduct