import React from 'react'

const ReviewsCard = ({rasm,text}) => {
  return (
    <div className="reviews__card">
        <img src={rasm} />
        <i className="fa-solid fa-circle-play"></i>
        <h3>{text}</h3>
    </div>
  )
}

export default ReviewsCard