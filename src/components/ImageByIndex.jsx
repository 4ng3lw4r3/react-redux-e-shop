import image1 from '../images/1.avif'
import image2 from '../images/2.avif'
import image3 from '../images/3.avif'
import image4 from '../images/4.avif'
import image5 from '../images/5.avif'
import image6 from '../images/6.avif'
import image7 from '../images/7.avif'
import image8 from '../images/8.avif'
import image9 from '../images/9.avif'


export const images = [image1, image2, image3, image4, image5, image6, image7,image8, image9]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
