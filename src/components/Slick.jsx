const SlickLi = ({index, change}) => {
  const newArray = new Array(5).fill(0)
  return newArray.map((d,i) => {
      console.log(i)
      return (
        <li className={index === i ? 'slick-active' : ''} role="presentation" key={i}>
          <button onClick={change} role="tab" id="slick-control">{i}</button>
        </li>
       )
    })
}

export default SlickLi