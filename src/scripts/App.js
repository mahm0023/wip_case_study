import React from 'react'
import jsonData from './item-data.json'
import Carousel from './Carousel'
import Image from './Image'
import ProductHighlights from './ProductHighlights'
import StarRating from './StarRating'
import Promotions from './Promotions'
import Review from './Review'
import Title from './Title'
import Price from './Price'

class App extends React.Component {
	constructor(props, context) {
        super(props, context);
        this.state = {catalogEntry: {}, items: [], showAddToCart: false, showPickupInStore: false}
    }

    componentDidMount() {
    	const catalogEntry = {};//jsonData.CatalogEntryView[0];

    	this.setState({catalogEntry: catalogEntry});

        const images = jsonData.CatalogEntryView[0].Images[0];
        const primary = images.PrimaryImage[0];
        const alternate = images.AlternateImages;
        let items = [primary].concat(alternate);
        this.setState({items});

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
			<span><Button buttonStyle={`add-to-cart`}  buttonName={'Add to cart'}></Button></span>) : null;
		
		const pickupStore = this.state.showPickupInStore? (
			<span><Button buttonStyle={`pickup-store`}  buttonName={'Pickup in store'}></Button></span>) : null;
		
		return(
			<div className="content">
				<div className="main-container">
					<Title titleStyle={'product-title'} titleText={jsonData.CatalogEntryView[0].title} />
					<Carousel {...this.state} />
					<div className="review-container">
						<div className={'rating'}>
							<div className={'main-rating'}>
								<StarRating rating={jsonData.CatalogEntryView[0].CustomerReview[0].consolidatedOverallRating} 
											totalPossible={5} />
								&nbsp; overall
							</div>
						</div>
						<div className='reviews'>
							<Review reviewStyle={`pro-review`} 
									text={'PRO'} 
									review={jsonData.CatalogEntryView[0].CustomerReview[0].Pro[0]} />
							<Review reviewStyle={`con-review`} 
									text={'CON'} 
									review={jsonData.CatalogEntryView[0].CustomerReview[0].Con[0]} />
						</div>
					</div>
				</div>
				<div className="price-container">
					<Price 
						price={jsonData.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue}
						priceQualifier={jsonData.CatalogEntryView[0].Offers[0].OfferPrice[0].priceQualifier} />
				</div>
				<div className="promotions-container">
					<hr />
					<Promotions promos={jsonData.CatalogEntryView[0].Promotions} />
					<hr />
				</div>
				<div className="button-container">
					{pickupStore}
					{addToCart}
				</div>
				<div className="highligts-container">
					<span style={{fontSize: '24px', margin: '20px'}}>product highligts</span>
					<ProductHighlights productData={jsonData.CatalogEntryView[0].ItemDescription[0]} />
				</div>
			</div>
		)
	}
}

const Button = (props) => <button className={props.buttonStyle}>{props.buttonName}</button>

export default App