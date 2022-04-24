import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {prodcutsSelector, fetchFendi} from '../features/fendiSlice';
// import useWindowSize from './WindowHelper';

import './Carousel.styles.scss';
import IterateItems from './IterateItems';

function Carousel(){
	const {loading, hasErrors, products} = useSelector(prodcutsSelector)
	const fretz = useSelector((state) => state.carousel.value)

	const dispatch = useDispatch()

	// const [width,] = useWindowSize()

	useEffect(() => {
		dispatch(fetchFendi())
	},[dispatch])

	const allProducts = () => {
		if(loading) return <p>loading</p>
		if(hasErrors) return <p>Error</p>

		console.log(products)
		return products.map( (product) => 
        	<IterateItems key={product.id} products={product}/>)
	}

	const carouselMover = (val) => {
		return {
			transform: `translate(${val}px, 0)`,
			transition: 'transform 0.5s ease'
		}
	}

	const offset = 40
	const scalar = 18
	const margin = 40
	let index = offset * (fretz * scalar)
	
	console.log(fretz, index)
	return (
		<div className="carousel_component">     
      <div className="product_component" style={carouselMover(-index + margin)}>   
        {allProducts()	}
      </div>
    </div>
	)
}

export default Carousel;