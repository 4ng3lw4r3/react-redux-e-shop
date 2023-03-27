import Carousel from 'react-bootstrap/Carousel';

const Home = () => {


  return (
    <>
      <div className='home-carousel-container'>
        <div className='one-carousel-item'>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                src="https://images.unsplash.com/photo-1603547547037-cb2289fecaa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                src="https://images.unsplash.com/photo-1545840716-c82e9eec6930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Second slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                src="https://images.unsplash.com/photo-1535683577427-740aaac4ec25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>


        <div className='one-carousel-item'>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                src="https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Second slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                src="https://images.unsplash.com/photo-1634944119603-74cab6454618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='one-carousel-item'>
          <Carousel>
            <Carousel.Item interval={4000}>
              <img
                src="https://images.unsplash.com/photo-1557861537-df5fcb4630d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                src="https://images.unsplash.com/photo-1554948419-1939083b12cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                src="https://images.unsplash.com/photo-1632928145408-ef47a7672964?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        
      </div>
    </>

  );













}

export default Home