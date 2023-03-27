import products from '../products'

const OneProduct = () => {
    return (


        <div className='products'>
        

            {products.map(product =>
  {      return (
            <div key={product.id} className='oneProduct'>
                <h2 className='h2'>{product.title}</h2>
                <img src={product.img} alt={product.title} className='productImg'></img>
                <p className='p'>{product.description}</p>
                <h3 className='h3'>${product.price}</h3>
            </div>
        )
        })}
        </div>
    )
}

export default OneProduct