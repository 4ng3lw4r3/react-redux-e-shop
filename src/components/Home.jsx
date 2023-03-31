import EmblaCarousel from './Carousel'

const OPTIONS = {}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = () => {
  return (
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>

  )
}

export default Home