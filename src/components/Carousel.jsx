import './Carousel.styles.scss';
import IterateItems from './IterateItems';

function Carousel({data}){
	console.log('data', data)
	return (
		<div className="carousel_component">     
      <div className="product_component">   
        {data.map( (product) => <IterateItems key={product.id} products={product}/>)}
      </div>
    </div>
	)
}

export default Carousel;