import React from 'react'

interface ITestimonialProps {
  name: string
  message: string
  image: string
}

function Testimonial({ name, message, image }: ITestimonialProps) {
  return (
    <article className="testimonial">
      <figure className="testimonial__container">
        <img src={image} className="testimonial__container__image" />
        <div className="testimonial__container__sub-container">
          <h3 className="testimonial__container__sub-container__name">{name}</h3>
          <p className="testimonial__container__sub-container__tag">Verified Buyer</p>
        </div>
      </figure>
      <p className="testimonial__message">"{message}"</p>
    </article>
  )
}

export default Testimonial
