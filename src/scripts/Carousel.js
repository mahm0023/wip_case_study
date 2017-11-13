import React from 'react'
import jsonData from './item-data.json'
import Image from './Image'

class Carousel extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		count: 0,
      		imageSelected: ''
    	};

    	this.nextImage = this.nextImage.bind(this);
    	this.previousImage = this.previousImage.bind(this);
    	this.chooseImage = this.chooseImage.bind(this);
  	}

	nextImage() {
		let item;
		if (this.state.count === this.props.items.length - 1) {
			item = 0;
		} else {
			item = this.state.count + 1;
		}
	     this.setState({ count: item, imageSelected: this.props.items[item].image });
	}

	previousImage() {
		let item;
		if (this.state.count === 0) {
			item = this.props.items.length - 1;
		} else {
			item = this.state.count - 1;
		}
	  	this.setState({ count: item, imageSelected: this.props.items[item].image });
	}

	chooseImage(count) {
		this.setState({ count: count, imageSelected: this.props.items[count].image })
	}

	componentDidMount() {
		//primary image - should be set from jsonData because we may want to change what it is
		this.setState({imageSelected: jsonData.CatalogEntryView[0].Images[0].PrimaryImage[0].image});
	}

  	render() {
  		const thumbnails = [];
  		this.props.items.map((item, index) => {
			thumbnails.push(<Image key={index} chooseImage={this.chooseImage} image={item.image} count={index} />)
		});
	    return (
	      <div className="carousel">
			<div className="active-image">
				<Image image={this.state.imageSelected} count={this.state.count} />
			</div>
        	<div className="images-container">
	        	<LeftArrow previousImage={this.previousImage} />
					{thumbnails}
		        <RightArrow nextImage={this.nextImage} />
			</div>

	      </div>
	    );
   }
}


const RightArrow = (props) => {
	return(
		<div onClick={props.nextImage}><i className="arrow right"></i></div>
	);
}
const LeftArrow = (props) => {
	return(
		<div onClick={props.previousImage}><i className="arrow left"></i></div>
	);
}

export default Carousel