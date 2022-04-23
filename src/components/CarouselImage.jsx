function CarouselImage({images}){
	return (
		<div className="carouselImage_component">
      <img 
        className="imageCarousel" 
        src={images.image} 
        alt="" />
      <img 
        className="imageCarouselHidden" 
        src={images.image}
        alt="" /> 
    </div>
	)
}

export default CarouselImage