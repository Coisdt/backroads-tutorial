import React from 'react'

const Tour = ({ src, date, title, info, location, duration, price }) => {
  return (
    <article className='tour-card' key={id}>
      <div className='tour-img-container'>
        <img src={src} className='tour-img' alt='' />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <h4>{title}</h4>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>{' '}
            {location}
          </p>
          <p>{duration}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour