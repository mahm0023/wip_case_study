import React from 'react'

const StarRating = (props) => {
	const starRating = [];
	const starUnassigned = [];
	for (let i = props.rating; i > 0; i--) {
		starRating.push(<span key={i} className={'star-rating'}>&#x2605;</span>);
	}
	for (let j = props.totalPossible - props.rating; j > 0; j--) {
		starUnassigned.push(<span key={j} className={'star-unassigned'}>&#x2605;</span>);
	}
	return (
		<div>
			{starRating}
			{starUnassigned}
		</div>
	);
}

export default StarRating