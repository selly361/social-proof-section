import React from 'react'
import { StarIcon } from 'Icons'

interface IRatingProps {
  children: string
}

function Rating({ children }: IRatingProps) {
  return (
    <div className="rating">
      <div>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <p className="rating__rate-description">Rated 5 Stars in {children}</p>
    </div>
  )
}

export default Rating
