import './ImageRow.scss';


function ImageRow(){
  return (
    <div className="row_container">
      <div className="row_borders">
        <div className="image_holder">
          <img />
        </div> 
        <div className="image_holder">
          <h3>
            Title
          </h3>
        </div> 
        <div className="description">
          <span>
            Some description
          </span>
        </div> 
        <div className="button_div">
          <button>ADD TO CART</button>
        </div>          
      </div>
    </div>
  )
}

export default ImageRow;