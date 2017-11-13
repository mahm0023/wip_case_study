import React from 'react'

const ProductHighlights = (props) => {
	const features = [];
	props.productData.features.forEach((feature, index) => {
		const featureString = feature.replace(/<strong>/, '').replace(/<\/strong>/, '');
		features.push(<li className="feature" key={index}>{featureString}</li>);
	});
	return (
		<ul>
			{features}
		</ul>
	);
}

export default ProductHighlights