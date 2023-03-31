import OneProduct from './OneProduct';
import products from '../products';


const ProductList = () => {

  console.log(products);

  return (


    <div>

      <section className='product-header'>
        <header>
          <h2>Parfumes</h2>
          <h4>Summer collection</h4>
        </header>
        </section>
        <section className='products'>
        <OneProduct />
      </section>
    </div>
  )
}


export default ProductList

