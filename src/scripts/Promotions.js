import React from 'react'

const Promotions = (props) => {
	return (
		<div>
			{props.promos.map(promo => 
				<div className='promotion'><a href={'https://www.google.com/'} key={promo.promotionIdentifier}>{promo.Description[0].shortDescription}</a></div>
			)}
		</div>
	);
}

export default Promotions