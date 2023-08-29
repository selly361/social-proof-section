import { Rating, Testimonial } from 'Components'

import { testimonialsData } from 'Constants'

function App() {
  return (
    <main className="main">
      <section className="main__top-section">
        <article className="main__top-section__intro-article">
          <h1 className="main__top-section__intro-article__heading">
            10,000+ of our users love our products.
          </h1>
          <p className="main__top-section__intro-article__description">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </article>
        <div className="main__top-section__container">
          <Rating>Reviews</Rating>
          <Rating>Report Guru</Rating>
          <Rating>BestTech</Rating>
        </div>
      </section>

      <section className="main__testimonial-section">
        {testimonialsData.map((item) => (
          <Testimonial {...item} />
        ))}
      </section>
    </main>
  )
}

export default App
