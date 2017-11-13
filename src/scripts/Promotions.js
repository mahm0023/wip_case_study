import React from 'react'

const Promotions = (props) => {
	// TODO: link is just for demo
	return (
		<div>
			{props.promos.map(promo => 
				<div className='promotion'><a href={'https://www.google.com/'} key={promo.promotionIdentifier}>{promo.Description[0].shortDescription}</a></div>
			)}
		</div>
	);
}

export default Promotions