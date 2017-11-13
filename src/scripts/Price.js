import React from 'react'

const Price = (props) => {
	return (
		<div style={{display: 'flex'}}>
			<div className="product-price">{props.price}</div>
			<div className="price-qualifier">{props.priceQualifier}</div>
		</div>
	);
}


export default Price