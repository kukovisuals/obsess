import CarouselBanner from './CarouselBanner';
import CarouselImage from './CarouselImage';
import CarouselDescription from './CarouselDescription';

function IterateItems({products}){
	return (
		<div className="carouselItem_container">
      <span className="carouselBannerIcon">&#9825;</span>
			<CarouselBanner/>
			<CarouselImage images={products}/>
	    <CarouselDescription descriptions={products}/>
		</div>
	)
}

export default IterateItems