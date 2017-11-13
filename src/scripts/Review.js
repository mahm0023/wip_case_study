import React from 'react'
import StarRating from './StarRating'
import Title from './Title'

const Review = (props) => {
	return (
		<div className={props.reviewStyle}>
			{props.text}
			<hr/>
			<StarRating rating={props.review.overallRating} totalPossible={5} />
			<Title titleStyle={'review-title'} titleText={props.review.title} />
			{props.review.review}
		</div>
	);
}

export default Review