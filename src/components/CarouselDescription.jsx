function CarouselDescription({descriptions}){
	const overall = descriptions.description.substring(0, 20)
  return (
		<div className="carouselDescription_component">
      <span className="carouselDesciptionTitle">{descriptions.category.toUpperCase()}</span>
      <span className="carouselDescriptionItems"> {descriptions.title.substring(0, 40)} </span>
      <span className="carouselDescriptionItems"> ${descriptions.price} </span>
      <span className="carouselDescriptionItems"> {overall.trim()} </span>
    </div>
	)
}

export default CarouselDescription;