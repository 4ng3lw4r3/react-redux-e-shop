import products from '../products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/CartSlice';



const OneProduct = () => {

    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }


    return (


        <div className='products'>
        

            {products.map(product =>
  {      return (
            <div key={product.id} className='oneProduct'>
                <h2 className='h2'>{product.title}</h2>
                <img src={product.img} alt={product.title} className='productImg'></img>
                <p className='p'>{product.description}</p>
                <h3 className='h3'>${product.price}</h3>
                <button 
                className='add-to-cart-btn'
                onClick={() => handleAddToCart(product)}
                >
                    Add to cart

                </button>
            </div>
        )
        })}
        </div>
    )
}

export default OneProduct