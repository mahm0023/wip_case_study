import React from 'react'

const Image = (props) => {
	return (
		<div onClick={() => props.chooseImage(props.count)}>
			<div className="product-image">
				<img src={props.image}
					 alt="selected image" 
					 height={props.height} />
			</div>
		</div>
	);
}

export default Image