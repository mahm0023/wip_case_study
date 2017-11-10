import React from 'react'
import jsonData from './item-data.json'

class App extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {items: [], showAddToCart: false, showPickupInStore: false}
    }

    componentDidMount() {
        const images = jsonData.CatalogEntryView[0].Images[0];
        const primary = images.PrimaryImage[0];
        const alternate = images.AlternateImages;
        let items = [primary].concat(alternate);
        this.setState({items});
        console.log(jsonData);

		const purchasingChannelCode = jsonData.CatalogEntryView[0].purchasingChannelCode;
        if (purchasingChannelCode === "0" || purchasingChannelCode === "1") {
        	this.setState({showAddToCart: true});
		}
		if (purchasingChannelCode === "0" || purchasingChannelCode === "2") {
			this.setState({showPickupInStore: true});
		}
    }

	render() {
		const addToCart = this.state.showAddToCart ? (
			<span><Button buttonStyle={`add-to-cart`}  buttonName={'Add to cart'}></Button></span>) : <span>mimo</span>;
		
		const pickupStore = this.state.showPickupInStore? (
			<span><Button buttonStyle={`pickup-store`}  buttonName={'Pickup in store'}></Button></span>) : null;
		
		return(
			<div className="content">
				<Title />
				<Carousel {...this.state} />
				<div className="review-container">
					<Review reviewStyle={`pro-review`} text={'PRO'} review={jsonData.CatalogEntryView[0].CustomerReview[0].Pro[0].review} />
					<Review reviewStyle={`con-review`} text={'CON'} review={jsonData.CatalogEntryView[0].CustomerReview[0].Con[0].review} />
				</div>
				<Price />
				<div className="button-container">
					{pickupStore}
					{addToCart}
				</div>
			</div>
		)
	}
}

const Title = () => <div className="product-title"> {jsonData.CatalogEntryView[0].title} </div>
const Price = () => <div className="product-price"> {jsonData.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue} </div>
const Image = (props) => <div className="product-image"><img src={props.image}
					 alt="selected image" height={props.height} width={props.width} /></div>

const Review = (props) => <div className={props.reviewStyle}> {props.text} <hr/> {props.review} </div>
const Button = (props) => <button className={props.buttonStyle}>{props.buttonName}</button>

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

class Carousel extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		count: 0
    	};

    	this.nextImage = this.nextImage.bind(this);
    	this.previousImage = this.previousImage.bind(this);
  	}

	nextImage() {
	     this.setState({ count: this.state.count + 1 })
	 }

	previousImage() {
	  this.setState({ count: this.state.count - 1 })
	}

  	render() {
  		// TODO: initially we want the image set to primary image -> extract that value instead of passing
  		// below into Image component as raw jsonData
  		// then on each click on the arrows, select index (count) and get image data that corresponds to the selection

  		// also allow user to select an image by clicking on it (update index of display)

  // 		const filterSelected = this.props.items.find((item, index) => {
		// 	if (index === this.state.count) {
		// 		console.log('filterSelected: ', item.image)
		// 		return item.image;
		// 	}
		// });

	    return (
	      <div className="carousel">
			<div className="active-image">
				<Image image={jsonData.CatalogEntryView[0].Images[0].PrimaryImage[0].image} height="400" width="400" />
			</div>
        	<div className="images-container">
	        	<LeftArrow previousImage={this.previousImage} />
					{this.props.items.map((item, index) =>
						<Image key={index} image={item.image} height="42" width="42" />
					)}
		        <RightArrow nextImage={this.nextImage} />
			</div>

	      </div>
	    );
   }
}

export default App